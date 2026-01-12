import axios from "axios";
import crypto from "crypto";
import { getKey,setKey } from "redis-service/otp"; 
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import https from "https";

const nseAgent = new https.Agent({
  keepAlive: true,
  minVersion: "TLSv1.3",
});
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, "../../.env") });

const NSE_BASE_URL = process.env.NSE_BASE_URL!;
const NSE_API_KEY_MEMBER = process.env.NSE_API_KEY_MEMBER!;
const NSE_API_SECRET_USER = process.env.NSE_API_SECRET_USER!;
const NSE_MEMBER_CODE = process.env.NSE_MEMBER_CODE!;
const NSE_LOGIN_USER_ID = process.env.NSE_LOGIN_USER_ID!;

function createSignature(payload: string) {
  return crypto.createHmac("sha256", NSE_API_SECRET_USER).update(payload).digest("hex");
}

export async function getMarketData() {
  const cacheKey = "nse:marketdata";
  const cached = await getKey(cacheKey);
  if (cached) {
    console.log("Returning cached NSE data");
    return cached;
  }

  const payload = {
    login_user_id: NSE_LOGIN_USER_ID,
    member_code: NSE_MEMBER_CODE,
    timestamp: new Date().toISOString(),
  };
  const payloadStr = JSON.stringify(payload);
  const signature = createSignature(payloadStr);

  const headers = {
    "Content-Type": "application/json",
    "User-Agent": "PostmanRuntime/7.43.0",
    "Host": "nseinvestuat.nseindia.com",
    "Connection": "keep-alive",
    "Accept-Encoding": "gzip, deflate, br",
    "Accept-Language": "en-US",
    "x-api-key-member": NSE_API_KEY_MEMBER,
    "x-member-code": NSE_MEMBER_CODE,
    "x-login-user-id": NSE_LOGIN_USER_ID,
    "x-signature": signature,
    "Accept": "",
    "Cookie": "",     // set only if NSE provides
    "Referer": "",    // set only if NSE provides
  };

  try {
    const { data } = await axios.post(`https://nseinvestuat.nseindia.com/nsemfdesk/api/v2/registration/product/SIP`,
      payload, { headers, httpsAgent: nseAgent,timeout:10000 }
    );

    await setKey(cacheKey, data, 60);
    console.log("NSE data cached");
    return data;
  } catch (err: any) {
    console.error("❌ NSE API error:", {
      status: err.response?.status,
      data: err.response?.data,
      headers: err.response?.headers,
      message: err.message,
    });
    throw new Error("Failed to fetch market data from NSE");
  }
}