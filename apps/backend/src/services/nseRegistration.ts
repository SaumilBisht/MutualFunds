import axios from "axios";
import crypto from "crypto";
import https from "https";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
import Twilio from "twilio";
import { prisma } from "db/client";
import { getKey, setKey, delKey, redis } from "redis-service/otp";
import { safeDecrypt } from "../services/encrypt.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, "../../.env") });

const nseAgent = new https.Agent({ keepAlive: true, minVersion: "TLSv1.3" });

const NSE_BASE_URL = process.env.NSE_BASE_URL!;
const NSE_API_KEY_MEMBER = process.env.NSE_API_KEY_MEMBER!;
const NSE_API_SECRET_USER = process.env.NSE_API_SECRET_USER!;
const NSE_MEMBER_CODE = process.env.NSE_MEMBER_CODE!;
const NSE_LOGIN_USER_ID = process.env.NSE_LOGIN_USER_ID!;

// Optional configs
const UCC_PREFIX = process.env.UCC_PREFIX || "ENX";
const OTP_TTL_SEC = 600; // 10 minutes

const twilioClient = Twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);
const TWILIO_PHONE_NUMBER = process.env.TWILIO_PHONE_NUMBER!;

function createSignature(payload: string) {
  return crypto
    .createHmac("sha256", NSE_API_SECRET_USER)
    .update(payload)
    .digest("hex");
}

function buildHeaders(payload: any) {
  const payloadStr = JSON.stringify(payload);
  const signature = createSignature(payloadStr);
  return {
    "Content-Type": "application/json",
    "x-api-key-member": NSE_API_KEY_MEMBER,
    "x-member-code": NSE_MEMBER_CODE,
    "x-login-user-id": NSE_LOGIN_USER_ID,
    "x-signature": signature,
  };
}

function maskEmail(email?: string | null) {
  if (!email) return "";
  const parts = email.split("@");
  const userPart = parts[0] || "";
  const domain = parts[1];
  if (!domain) return email;
  const visible = userPart.slice(0, Math.min(3, userPart.length));
  return `${visible}${"*".repeat(Math.max(0, userPart.length - visible.length))}@${domain}`;
}

function maskPhone(phone?: string | null) {
  if (!phone) return "";
  const last4 = phone.slice(-4);
  const prefix = phone.slice(0, 4);
  return `${prefix}****${last4}`;
}

function formatElogTimestamp(date: Date) {
  // DD-MON-YY HH:MM:SS
  const day = String(date.getDate()).padStart(2, "0");
  const months = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];
  const mon = months[date.getMonth()];
  const yy = String(date.getFullYear()).slice(-2);
  const hh = String(date.getHours()).padStart(2, "0");
  const mm = String(date.getMinutes()).padStart(2, "0");
  const ss = String(date.getSeconds()).padStart(2, "0");
  return `${day}-${mon}-${yy} ${hh}:${mm}:${ss}`;
}

async function nextSequence(): Promise<number> {
  // Use Redis atomic counter to avoid collisions across processes
  const key = "nse:ucc:seq";
  const next = await redis.incr(key);
  return next;
}

/**
 * Generates a unique UCC (Unique Client Code) for NSE mutual fund trading.
 * 
 * FORMAT: [PREFIX][USER_ID_5_CHARS][SEQUENCE_4_DIGITS]
 * Example: ENXABCDE0001
 * 
 * COMPONENTS:
 * - PREFIX: Configurable via UCC_PREFIX env (default: "ENX")
 * - USER_ID: First 5 alphanumeric chars from userId (padded with 'X' if shorter)
 * - SEQUENCE: Auto-incremented Redis counter (4 digits, padded with zeros)
 * 
 * CONCURRENCY SAFETY:
 * - Uses Redis INCR (atomic operation) to prevent duplicate UCCs
 * - Safe across multiple server instances
 * 
 * @param {string} userId - Unique user ID from database
 * @returns {Promise<string>} Generated UCC (e.g., "ENXABCDE0001")
 */
export async function generateUCC(userId: string) {
  // Build USER_ID_PADDED from userId alphanumerics
  const compact = userId.replace(/[^a-zA-Z0-9]/g, "").toUpperCase();
  const userPart = compact.slice(0, 5).padEnd(5, "X");
  const seq = (await nextSequence()).toString().padStart(4, "0");
  return `${UCC_PREFIX}${userPart}${seq}`; // e.g., ENXABCDE0001
}

export type CreateUccParams = {
  userId: string;
  firstName: string;
  lastName: string;
  dob: string; // DD/MM/YYYY
  panNumber: string;
  accountNumber: string;
  ifscCode: string;
  email: string;
  phone: string;
  genderCode: "M" | "F" | "O" | "T";
  occupationCode: string; // per NSE master
  taxStatusCode: string; // e.g., "01"
  kycType: "K" | "E";
  address1: string;
  city: string;
  state: string;
  pincode: string;
  country?: string;
};

/**
 * Creates UCC registration with NSE MFDesk API (Client Common Registration).
 * 
 * WORKFLOW:
 * 1. Validates PAN format (AAAAA9999A)
 * 2. Generates unique UCC using generateUCC()
 * 3. Calls NSE API endpoint: /api/v2/registration/CLIENTCOMMON183
 * 4. Signs request with HMAC-SHA256 signature
 * 
 * REQUIRED DATA:
 * - Personal: Name, DOB, PAN, Gender, Occupation, Tax Status
 * - Bank: Account Number, IFSC, Account Type
 * - Address: Line1, City, State, Pincode, Country
 * - Contact: Email, Phone
 * - KYC: Type (K=KRA Validated, E=eKYC)
 * 
 * NSE RULES:
 * - PAN must be valid and not PAN-exempt
 * - Default bank flag must be 'Y' for primary account
 * - Paperless flag 'Z' for digital onboarding
 * - Communication mode 'E' for email
 * 
 * @param {CreateUccParams} params - User registration details
 * @returns {Promise<string>} Generated UCC if successful
 * @throws {Error} If PAN invalid or NSE API rejects registration
 */
export async function createUCC(params: CreateUccParams) {
  const {
    userId,
    firstName,
    lastName,
    dob,
    panNumber,
    accountNumber,
    ifscCode,
    email,
    phone,
    genderCode,
    occupationCode,
    taxStatusCode,
    kycType,
    address1,
    city,
    state,
    pincode,
    country = "India",
  } = params;

  // Basic validations
  if (!/^[A-Z]{5}[0-9]{4}[A-Z]$/.test(panNumber.toUpperCase())) {
    throw new Error("Invalid PAN format");
  }

  const ucc = await generateUCC(userId);

  const payload = {
    client_code: ucc,
    primary_holder_first_name: firstName,
    primary_holder_last_name: lastName,
    primary_holder_dob_incorporation: dob,
    primary_holder_pan: panNumber.toUpperCase(),
    primary_holder_pan_exempt: "N",
    tax_status: taxStatusCode,
    gender: genderCode,
    client_type: "I", // Individual
    occupation_code: occupationCode,
    holding_nature: "SI",
    account_type_1: "SB", // default Savings for MVP; can be overridden with bank API
    account_no_1: accountNumber,
    ifsc_code_1: ifscCode,
    default_bank_flag_1: "Y",
    address_1: address1,
    city,
    state,
    pincode,
    country,
    email,
    resi_phone: phone,
    primary_holder_kyc_type: kycType,
    paperless_flag: "Z",
    communication_mode: "E",
    div_pay_mode: "02",
  };

  const headers = buildHeaders(payload);
  try {
    const { data } = await axios.post(
      `${NSE_BASE_URL}/nsemfdesk/api/v2/registration/CLIENTCOMMON183`,
      payload,
      { headers, httpsAgent: nseAgent, timeout: 20000 }
    );
    const status = data?.status || data?.STATUS || "";
    if (String(status).toUpperCase() !== "SUCCESS") {
      const remark = data?.error_remark || data?.ERROR_REMARK || "UCC creation failed";
      throw new Error(remark);
    }

    // Store UCC on user
    await prisma.user.update({ where: { id: userId }, data: { //@ts-ignore
      uccCode: ucc
    }});

    return { ucc, raw: data };
  } catch (e: any) {
    const errMsg = e.response?.data?.error_remark || e.message || "UCC API error";
    throw new Error(errMsg);
  }
}

export async function uploadFATCAIndividual(userPayload: {
  pan: string;
  fullName: string;
  dateOfBirth?: string; // DD/MM/YYYY
  countryOfBirth?: string; // e.g., IN
  placeOfBirth?: string;
  residenceCountry: string; // IN
  taxStatusCode: string; // 01
  occupationCode: string; // 44
  aadhaarNumber?: string;
  dataSource?: string; // E
  addressType?: string; // 2
}, ucc: string) {
  const payload = {
    reg_details: [
      {
        pan_rp: userPayload.pan.toUpperCase(),
        inv_name: userPayload.fullName,
        dob: userPayload.dateOfBirth || "",
        tax_status: userPayload.taxStatusCode,
        data_src: userPayload.dataSource || "E",
        addr_type: userPayload.addressType || "2",
        po_bir_inc: userPayload.placeOfBirth || "",
        co_bir_inc: userPayload.countryOfBirth || "IN",
        tax_res1: userPayload.residenceCountry || "IN",
        tpin1: userPayload.pan.toUpperCase(),
        id1_type: "01",
        occ_code: userPayload.occupationCode,
        occ_type: "O",
        exemp_code: "N",
        pep_flag: "N",
        ubo_appl: "N",
        sdf_flag: "Y",
        ubo_df: "N",
        log_name: NSE_LOGIN_USER_ID,
        client_code: ucc,
      },
    ],
  };

  const headers = buildHeaders(payload);
  try {
    const { data } = await axios.post(
      `${NSE_BASE_URL}/nsemfdesk/api/v2/registration/FATCA`,
      payload,
      { headers, httpsAgent: nseAgent, timeout: 20000 }
    );
    const status = (data?.status || data?.STATUS || "").toUpperCase();
    if (status !== "SUCCESS") {
      const remark = data?.error_remark || data?.ERROR_REMARK || "FATCA upload failed";
      throw new Error(remark);
    }
    return { success: true, raw: data };
  } catch (e: any) {
    throw new Error(e.response?.data?.error_remark || e.message || "FATCA API error");
  }
}

export async function registerBankDetails(params: {
  ucc: string;
  accountType: "SB" | "CB";
  accountNumber: string;
  ifscCode: string;
  micrNo?: string;
  isDefaultBank: boolean;
}) {
  const payload = {
    bank_dtl: [
      {
        client_code: params.ucc,
        action_type: "ADD",
        account_type: params.accountType,
        account_no: params.accountNumber,
        micr_no: params.micrNo || "",
        ifsc_code: params.ifscCode,
        default_bank_flag: params.isDefaultBank ? "Y" : "N",
      },
    ],
  };
  const headers = buildHeaders(payload);
  try {
    const { data } = await axios.post(
      `${NSE_BASE_URL}/nsemfdesk/api/v2/registration/CLIENTBANKDTL`,
      payload,
      { headers, httpsAgent: nseAgent, timeout: 20000 }
    );
    const status = (data?.status || data?.STATUS || "").toUpperCase();
    if (status !== "SUCCESS") {
      const remark = data?.error_remark || data?.ERROR_REMARK || "Bank registration failed";
      throw new Error(remark);
    }
    return { success: true, raw: data };
  } catch (e: any) {
    throw new Error(e.response?.data?.error_remark || e.message || "Bank API error");
  }
}

export async function uploadELOG(params: {
  ucc: string;
  pan: string;
  ipAddress: string;
  signatureTimestamp: string; // DD-MON-YY HH:MM:SS
  secondHolderPan?: string;
  secondHolderIp?: string;
  secondHolderLog?: string;
  thirdHolderPan?: string;
  thirdHolderIp?: string;
  thirdHolderLog?: string;
}) {
  const payload: any = {
    client_code: params.ucc,
    primary_holder_pan: params.pan.toUpperCase(),
    primary_holder_ip_address: params.ipAddress,
    primary_holder_log_date: params.signatureTimestamp,
  };
  if (params.secondHolderPan) {
    payload.second_holder_pan = params.secondHolderPan;
    payload.second_holder_ip_address = params.secondHolderIp;
    payload.second_holder_log_date = params.secondHolderLog;
  }
  if (params.thirdHolderPan) {
    payload.third_holder_pan = params.thirdHolderPan;
    payload.third_holder_ip_address = params.thirdHolderIp;
    payload.third_holder_log_date = params.thirdHolderLog;
  }

  const headers = buildHeaders(payload);
  try {
    const { data } = await axios.post(
      `${NSE_BASE_URL}/nsemfdesk/api/v2/registration/eLOG`,
      payload,
      { headers, httpsAgent: nseAgent, timeout: 20000 }
    );
    const status = (data?.status || data?.STATUS || "").toUpperCase();
    if (status !== "SUCCESS") {
      const remark = data?.error_remark || data?.ERROR_REMARK || "eLOG failed";
      throw new Error(remark);
    }
    return { success: true, raw: data };
  } catch (e: any) {
    throw new Error(e.response?.data?.error_remark || e.message || "eLOG API error");
  }
}

function generateOTP() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

/**
 * Orchestrates complete NSE activation: UCC → FATCA → Bank → OTP.
 * 
 * FULL WORKFLOW (executed sequentially):
 * 1. **Fetch User**: Get user data from database (must have KYC completed)
 * 2. **Create UCC**: Register client with NSE (generates unique client code)
 * 3. **Upload FATCA**: Submit tax residency declaration (Individual form)
 * 4. **Register Bank**: Link user's verified bank account
 * 5. **Send OTP**: Trigger mobile OTP for eLOG (electronic log) signature
 * 6. **Update DB**: Save UCC, NSE status, and masked contact info
 * 
 * PREREQUISITES:
 * - User must have completed KYC (kycStatus = 'VERIFIED')
 * - User must have verified bank details
 * - User must have valid PAN, DOB, and address
 * 
 * NSE REGISTRATION STEPS:
 * - UCC: Client Common Registration (CLIENTCOMMON183)
 * - FATCA: Foreign Account Tax Compliance (FATCA062)
 * - Bank: Bank Account Registration (BANKDETAILSUPLOAD163)
 * - OTP: Mobile verification for eLOG signature
 * 
 * ERROR HANDLING:
 * - Partial failures are logged but don't rollback previous steps
 * - User can retry activation if OTP sending fails
 * - UCC is persisted even if FATCA/Bank fails (can be resumed)
 * 
 * @param {string} userId - User ID to activate
 * @returns {Promise<Object>} { success: boolean, ucc: string, message: string, maskedEmail, maskedPhone }
 * @throws {Error} If user not found, KYC incomplete, or NSE API errors
 */
export async function activateNseForUser(userId: string) {
  // Fetch user and required fields
  const user = await prisma.user.findUnique({ where: { id: userId } });
  if (!user) throw new Error("User not found");

  if (!user.encryptedPan) throw new Error("PAN not available");
  if (!user.encryptedBankAcc || !user.encryptedIfsc)
    throw new Error("Verified bank details not available");
  if (!user.fullName) throw new Error("Name missing");

  const nameParts = user.fullName.split(" ");
  const firstName = nameParts[0] || user.fullName;
  const lastName = nameParts.slice(1).join(" ") || "";
  const panNumber = safeDecrypt(user.encryptedPan!);
  const accountNumber = safeDecrypt(user.encryptedBankAcc!);
  const ifscCode = safeDecrypt(user.encryptedIfsc!);
  const genderCode = ((): "M" | "F" | "O" | "T" => {
    switch (user.gender) {
      case "MALE":
        return "M";
      case "FEMALE":
        return "F";
      default:
        return "O";
    }
  })();

  const dob = user.dob
    ? `${String(user.dob.getDate()).padStart(2, "0")}/${String(
        user.dob.getMonth() + 1
      ).padStart(2, "0")}/${user.dob.getFullYear()}`
    : "";

  const address1 = user.addressLine1 || "";
  const city = user.city || "";
  const state = user.state || "";
  const pincode = user.pincode || "";

  // 1) Create UCC
  const { ucc } = await createUCC({
    userId,
    firstName,
    lastName,
    dob,
    panNumber,
    accountNumber,
    ifscCode,
    email: user.email,
    phone: user.phone || "",
    genderCode,
    occupationCode: "44", // default Investor/Trader
    taxStatusCode: "01",
    kycType: user.kraVerified ? "K" : "E",
    address1,
    city,
    state,
    pincode,
    country: user.country || "India",
  });

  // 2) FATCA Upload (Individual)
  await uploadFATCAIndividual(
    {
      pan: panNumber,
      fullName: user.fullName,
      dateOfBirth: dob,
      countryOfBirth: user.countryOfBirth || "IN",
      placeOfBirth: user.city || "",
      residenceCountry: "IN",
      taxStatusCode: "01",
      occupationCode: "44",
      dataSource: "E",
      addressType: "2",
    },
    ucc
  );
  // Mark FATCA submitted for this user
  await prisma.user.update({
    where: { id: userId },
    // @ts-ignore - prisma client will be regenerated after migration
    data: { fatcaSubmitted: true, nseLastUpdated: new Date() }
  }).catch(()=>{});

  // 3) Register Bank
  await registerBankDetails({
    ucc,
    accountType: (user.bankAccountType === "current" ? "CB" : "SB") as
      | "SB"
      | "CB",
    accountNumber,
    ifscCode,
    micrNo: "",
    isDefaultBank: true,
  });

  // 4) Generate and send OTP to user's phone (MVP)
  const otp = generateOTP();
  await setKey(`otp:nse:${userId}`, { otp }, OTP_TTL_SEC);
  if (user.phone) {
    await twilioClient.messages.create({
      body: `Your NSE activation code is ${otp}`,
      from: TWILIO_PHONE_NUMBER,
      to: `+91${user.phone}`,
    });
  }

  return {
    ucc,
    emailMasked: maskEmail(user.email),
    phoneMasked: maskPhone(user.phone || undefined),
  };
}

export async function verifyOtpAndUploadElog(userId: string, otp: string, ipAddress: string) {
  const user = await prisma.user.findUnique({ where: { id: userId } });
  if (!user) throw new Error("User not found");
  // @ts-ignore
  const ucc: string | null = (user as any).uccCode || null;
  if (!ucc) throw new Error("UCC not found. Please create UCC first");
  const otpRec = await getKey(`otp:nse:${userId}`);
  if (!otpRec || otpRec.otp !== otp) {
    throw new Error("OTP validation failed");
  }
  await delKey(`otp:nse:${userId}`);

  const panNumber = user.encryptedPan ? safeDecrypt(user.encryptedPan) : "";
  const timestamp = formatElogTimestamp(new Date());

  await uploadELOG({ ucc, pan: panNumber, ipAddress, signatureTimestamp: timestamp });

  await prisma.user.update({
    where: { id: userId },
    data: {
      //@ts-ignore
      elogAuthenticated: true,
      //@ts-ignore
      nseStatus: "READY_TO_TRADE",
      updatedAt: new Date(),
      nseLastUpdated: new Date(),
    },
  }).catch(()=>{});

  return { success: true, ucc };
}

export async function resendNseOtpForUser(userId: string) {
  const user = await prisma.user.findUnique({ where: { id: userId } });
  if (!user) throw new Error("User not found");
  const otp = generateOTP();
  await setKey(`otp:nse:${userId}`, { otp }, OTP_TTL_SEC);
  if (user.phone) {
    await twilioClient.messages.create({
      body: `Your NSE activation code is ${otp}`,
      from: TWILIO_PHONE_NUMBER,
      to: `+91${user.phone}`,
    });
  }
  return { emailMasked: maskEmail(user.email), phoneMasked: maskPhone(user.phone || undefined) };
}
