import axios from "axios";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, "../../.env") });

const DIGIO_BASE_URL = process.env.DIGIO_BASE_URL!;
const DIGIO_API_KEY = process.env.DIGIO_API_KEY!;
const DIGIO_CLIENT_ID = process.env.DIGIO_CLIENT_ID!;

const digioHeaders = {
  "Content-Type": "application/json",
  "Authorization": `Bearer ${DIGIO_API_KEY}`,
  "X-Client-Id": DIGIO_CLIENT_ID,
};

export interface KraStatusResponse {
  validated: boolean;
  statusCode: string;
  status: string;
  statusDescription: string;
  refId: string;
  statusDate?: string;
  name?: string;
  panNumber?: string;
}

export interface KraRegistrationResponse {
  success: boolean;
  panNumber: string;
  status: string;
  kraStatusCode: string;
  refId: string;
  errorMessage?: string;
  errorCode?: string;
}

/**
 * Checks if a PAN is registered and validated in KRA/CKYC database.
 * 
 * KRA (KYC Registration Agency) is a centralized KYC repository mandated by SEBI.
 * All mutual fund investors must be KRA-verified to trade.
 * 
 * STATUS CODES (KRA):
 * - "007" = VALIDATED (KYC complete, ready to trade)
 * - "005" = REGISTERED (KYC uploaded but pending validation)
 * - "003" = NOT FOUND (PAN not in KRA database)
 * - "002" = REJECTED (KYC documents rejected)
 * 
 * WORKFLOW:
 * 1. Calls Digio API → Digio queries KRA/CKYC via NDML/CDSL
 * 2. Returns status + reference ID
 * 3. If VALIDATED: user can trade immediately
 * 4. If NOT FOUND: must register (see registerKra function)
 * 
 * @param {string} panNo - 10-character PAN (e.g., "ABCDE1234F")
 * @param {string} dob - Date of birth in DD/MM/YYYY format
 * @param {string} mobile - 10-digit mobile number
 * @returns {Promise<KraStatusResponse>} Status, refId, and validation flag
 * @throws {Error} If Digio API fails or PAN format invalid
 */
export async function checkPanStatus(
  panNo: string,
  dob: string, 
  mobile: string
): Promise<KraStatusResponse> {
  const uniqueRequestId = `KRA_CHECK_${Date.now()}_${Math.random().toString(36).substring(7)}`;
  
  const payload = {
    pan_no: panNo.toUpperCase(),
    dob,
    fetch_type: "I", // Individual
    unique_request_id: uniqueRequestId,
    service_provider: "NDML", 
    mobile,
  };

  try {
    const { data } = await axios.post(
      `${DIGIO_BASE_URL}/v3/client/kyc/kra/v2/get_pan_status`,
      payload,
      { headers: digioHeaders, timeout: 15000 }
    );

    const validated = data.status_code === "007" || data.status === "Validated";

    return {
      validated,
      statusCode: data.status_code || data.kra_status_code,
      status: data.status,
      statusDescription: data.status_description,
      refId: data.ref_id,
      statusDate: data.status_date,
      name: data.name,
      panNumber: data.pan_number,
    };
  } catch (error: any) {
    console.error("Digio KRA status check error:", error.response?.data || error.message);
    throw new Error(
      error.response?.data?.error?.error_message || 
      "Failed to check KRA status"
    );
  }
}

/**
 * Registers user in KRA/CKYC database using Aadhaar-based eKYC.
 * 
 * NEW CVL KRA RULES (Effective Aug 2025):
 * - PAN is NO LONGER accepted as Proof of Identity (POI)
 * - MUST use Aadhaar (UID) as POI
 * - `pan_copy` must be "N" (PAN cannot be uploaded as POI document)
 * - `app_exmt_id_proof` must be "02" (UID/Aadhaar)
 * 
 * REQUIRED DOCUMENTS:
 * 1. **Aadhaar XML** (Base64): Raw eAadhaar XML from DigiLocker (for UIDAI verification)
 * 2. **Photo** (Base64): JPEG photo from Aadhaar (POI + POA)
 * 3. **Signature** (Base64): User's signature from S3 upload
 * 
 * WORKFLOW:
 * 1. Validates all required fields (PAN, DOB, Aadhaar, addresses)
 * 2. Encodes documents to Base64 if not already
 * 3. Calls Digio API → Digio submits to KRA via NDML/CDSL
 * 4. Returns registration reference ID
 * 
 * SUCCESS CRITERIA:
 * - Status = "VALIDATED" or "REGISTERED"
 * - RefId returned (use for tracking)
 * 
 * FAILURE REASONS:
 * - Missing Aadhaar XML or photo
 * - Address mismatch with Aadhaar
 * - Photo quality too low
 * - Signature missing (required for some AMCs)
 * 
 * @param {Object} params - Complete user KYC details
 * @returns {Promise<KraRegistrationResponse>} Success status + refId
 * @throws {Error} If Digio API rejects registration
 */
export async function registerKra(params: {
  panNo: string;
  dob: string; // DD/MM/YYYY
  gender: string; // M/F/O
  mobile: string;
  email: string;
  applicantName: string;
  fatherName?: string;
  motherName?: string;
  aadhaarLastFour?: string;
  aadhaarXmlBase64?: string; // Base64-encoded Aadhaar XML from DigiLocker
  photoBase64?: string; // Base64-encoded photo (from DigiLocker or user upload)
  signatureBase64?: string; // Base64-encoded signature (from S3)
  permanentAddress: {
    line1: string;
    line2?: string;
    city: string;
    state: string;
    pincode: string;
    country?: string;
  };
  correspondenceAddress: {
    line1: string;
    line2?: string;
    city: string;
    state: string;
    pincode: string;
    country?: string;
  };
  occupation?: string;
  maritalStatus?: string;
  nationality?: string;
  kycDate?: string; // DD/MM/YYYY
  ipvDate?: string; // DD/MM/YYYY
}): Promise<KraRegistrationResponse> {
  const uniqueRequestId = `KRA_REG_${Date.now()}_${Math.random().toString(36).substring(7)}`;

  const payload = {
    common_kra_registration_request: {
      // Aadhaar last 4 digits (not full UID for privacy)
      uid_no: "", // Leave blank - we'll use aadhaar_digit field instead
      aadhaar_digit: params.aadhaarLastFour || "",
      
      // Basic details
      pan_no: params.panNo.toUpperCase(),
      dob_date: params.dob,
      ipv_date: params.ipvDate || params.kycDate || params.dob,
      gender: params.gender,
      martial_status: params.maritalStatus || "01", // 01 = Single
      occupation: params.occupation || "99", // 99 = Others
      mob_no: params.mobile,
      email: params.email,
      
      // Permanent address
      per_add1: params.permanentAddress.line1,
      per_add2: params.permanentAddress.line2 || "",
      per_add3: "",
      per_city: params.permanentAddress.city,
      per_pincode: params.permanentAddress.pincode,
      per_state: params.permanentAddress.state,
      per_country: params.permanentAddress.country || "101", // 101 = India
      per_district: "",
      per_add_proof: "03", // 03 = Aadhaar
      
      // CVL KRA Rules (Aug 2025): PAN no longer valid as POI
      pan_copy: "N", // MUST be "N" - PAN not accepted as Proof of Identity
      app_exmt_id_proof: "02", // 02 = UID/Aadhaar (not 01 = PAN)
      
      applicant_name: params.applicantName,
      father_name: params.fatherName || "",
      applicant_citizenship: params.nationality || "01", // 01 = Indian
      applicant_other_citizen: "",
      
      // Correspondence address
      comm_addr1: params.correspondenceAddress.line1,
      comm_addr2: params.correspondenceAddress.line2 || "",
      comm_addr3: "",
      comm_pincode: params.correspondenceAddress.pincode,
      comm_city: params.correspondenceAddress.city,
      comm_state: params.correspondenceAddress.state,
      comm_country: params.correspondenceAddress.country || "101",
      comm_mobile_no_code: "091", // India code
      comm_addr_type: "01", // 01 = Residential
      comm_addr_proof: "03", // 03 = Aadhaar
      
      application_type: "I", // I = Individual
      kyc_date: params.kycDate || new Date().toLocaleDateString("en-GB").replace(/\//g, "/"),
      kyc_mode: "E", // E = E-KYC (Aadhaar-based)
      kyc_type: "01", // 01 = Simplified KYC
      app_upload_type: "XML", // XML upload for Aadhaar
      
      // Aadhaar XML and documents
      aadhaar_xml: params.aadhaarXmlBase64 || "", // Base64-encoded Aadhaar XML
      app_doc_photo: params.photoBase64 || "", // Base64-encoded photo
      app_doc_sign: params.signatureBase64 || "", // Base64-encoded signature
      
      // FATCA (for individuals, minimal)
      fatca_place_birth: params.permanentAddress.city,
      fatca_country_birth: "101", // India
      fatca_tin: params.panNo.toUpperCase(), // Use PAN as TIN for Indians
      
      // KRA provider
      kra_info: "NDML", // Default NDML
      app_req_type: "NEW",
      update_flag: "N",
    },
    unique_request_id: uniqueRequestId,
    api_request_type: "stateless",
    service_provider: "NDML",
    kra_providers: "NDML",
  };

  try {
    const { data } = await axios.post(
      `${DIGIO_BASE_URL}/v3/client/kyc/kra/app/register`,
      payload,
      { headers: digioHeaders, timeout: 30000 }
    );

    const success = data.status === "SUCCESS" || data.kra_status_code === "007";
    
    return {
      success,
      panNumber: data.pan_number,
      status: data.status,
      kraStatusCode: data.kra_status_code,
      refId: data.request_id,
      errorMessage: data.error?.error_message,
      errorCode: data.error?.error_code,
    };
  } catch (error: any) {
    console.error("Digio KRA registration error:", error.response?.data || error.message);
    
    const errorData = error.response?.data?.error || {};
    return {
      success: false,
      panNumber: params.panNo,
      status: "REGISTRATION_FAILED",
      kraStatusCode: errorData.error_code || "ERR-UNKNOWN",
      refId: uniqueRequestId,
      errorMessage: errorData.error_message || error.message || "Registration failed",
      errorCode: errorData.error_code,
    };
  }
}

export function formatDateForDigio(date: Date | string): string {
  if (typeof date === "string") return date; // Assume already formatted
  const d = new Date(date);
  const day = String(d.getDate()).padStart(2, "0");
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const year = d.getFullYear();
  return `${day}/${month}/${year}`;
}
