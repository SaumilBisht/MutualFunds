import axios from "axios";
import path from "path";
import { fileURLToPath } from "url";

import dotenv from "dotenv";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, "../../.env") });
function levenshteinDistance(str1: string, str2: string): number {
  const len1 = str1.length;
  const len2 = str2.length;
  const dp: number[][] = Array(len1 + 1)
    .fill(null)
    .map(() => Array(len2 + 1).fill(0));

  for (let i = 0; i <= len1; i++) dp[i]![0] = i;
  for (let j = 0; j <= len2; j++) dp[0]![j] = j;

  for (let i = 1; i <= len1; i++) {
    for (let j = 1; j <= len2; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        dp[i]![j] = dp[i - 1]![j - 1]!;
      } else {
        dp[i]![j] = Math.min(
          dp[i - 1]![j]! + 1,    // deletion
          dp[i]![j - 1]! + 1,    // insertion
          dp[i - 1]![j - 1]! + 1 // substitution
        );
      }
    }
  }

  return dp[len1]![len2]!;
}

export function calculateNameMatchScore(name1: string, name2: string): number {
  // Normalize: uppercase, remove extra spaces, remove special characters
  const normalize = (str: string) => {
    return str
      .toUpperCase()
      .replace(/[^A-Z\s]/g, "")
      .replace(/\s+/g, " ")
      .trim();
  };

  const normalized1 = normalize(name1);
  const normalized2 = normalize(name2);

  if (normalized1 === normalized2) {
    return 100;
  }

  // Calculate Levenshtein distance
  const distance = levenshteinDistance(normalized1, normalized2);
  const maxLength = Math.max(normalized1.length, normalized2.length);

  // Convert distance to similarity percentage
  const similarity = ((maxLength - distance) / maxLength) * 100;

  return Math.round(similarity);
}

export async function verifyBankAccountWithPennyDrop(
  accountNumber: string,
  ifscCode: string,
  accountHolderName: string,
  existingFundAccountId?: string // Optional: if you already have a fund account ID
): Promise<{
  success: boolean;
  verified: boolean;
  bankName?: string;
  beneficiaryName?: string;
  nameMatchScore?: number;
  error?: string;
}> {
  try {
    const razorpayKeyId = process.env.RAZORPAYX_KEY_ID;
    const razorpayKeySecret = process.env.RAZORPAYX_KEY_SECRET;

    if (!razorpayKeyId || !razorpayKeySecret) {
      console.error("RazorpayX credentials not configured");
      return {
        success: false,
        verified: false,
        error: "Payment gateway not configured. Please contact support.",
      };
    }

    const auth = {
      username: razorpayKeyId,
      password: razorpayKeySecret
    };

    console.log("Initiating penny drop verification for account:", `***${accountNumber.slice(-4)}`);

    let fundAccountId: string;
    let bankName = "";

    // Check if fund account ID is provided or in env variable
    const envFundAccountId = process.env.RAZORPAYX_FUND_ACCOUNT_ID;
    
    if (existingFundAccountId) {
      fundAccountId = existingFundAccountId;
      console.log(`Using provided fund account: ${fundAccountId}`);
    } else if (envFundAccountId) {
      fundAccountId = envFundAccountId;
      console.log(`Using fund account from env: ${fundAccountId}`);
    } else {
      // Step 1: Create a contact
      const contactResponse = await axios.post(
        "https://api.razorpay.com/v1/contacts",
        {
          name: accountHolderName,
          type: "customer",
          reference_id: `contact_${Date.now()}`,
          notes: {
            purpose: "bank_verification"
          }
        },
        {
          auth,
          headers: { "Content-Type": "application/json" },
          timeout: 15000
        }
      );

      const contactId = contactResponse.data.id;
      console.log(`Created contact: ${contactId}`);

      // Step 2: Create fund account
      const fundAccountResponse = await axios.post(
        "https://api.razorpay.com/v1/fund_accounts",
        {
          contact_id: contactId,
          account_type: "bank_account",
          bank_account: {
            name: accountHolderName,
            ifsc: ifscCode.toUpperCase(),
            account_number: accountNumber
          }
        },
        {
          auth,
          headers: { "Content-Type": "application/json" },
          timeout: 15000
        }
      );

      fundAccountId = fundAccountResponse.data.id;
      bankName = fundAccountResponse.data.bank_account?.bank_name || "";
      console.log(`Created fund account: ${fundAccountId}, Bank: ${bankName}`);
    }

    // Step 3: Validate fund account (Penny Drop)
    const validationResponse = await axios.post(
      "https://api.razorpay.com/v1/fund_accounts/validations",
      {
        fund_account: {
          id: fundAccountId
        },
        notes: {
          purpose: "bank_account_verification"
        }
      },
      {
        auth,
        headers: { "Content-Type": "application/json" },
        timeout: 30000
      }
    );

    let data = validationResponse.data;
    const validationId = data.id;
    console.log("Penny drop response status:", data.status, "ID:", validationId);

    // If status is 'created', poll for completion
    if (data.status === "created") {
      console.log("Validation in progress, polling for completion...");
      
      let attempts = 0;
      const maxAttempts = 20; // Poll for up to 40 seconds (20 attempts * 2 seconds)
      
      while (attempts < maxAttempts && data.status === "created") {
        // Wait 2 seconds before checking again
        await new Promise(resolve => setTimeout(resolve, 2000));
        attempts++;
        
        console.log(`Polling attempt ${attempts}/${maxAttempts}...`);
        
        // Fetch validation status
        const statusResponse = await axios.get(
          `https://api.razorpay.com/v1/fund_accounts/validations/${validationId}`,
          {
            auth,
            timeout: 10000
          }
        );
        
        data = statusResponse.data;
        console.log(`Status: ${data.status}`);
        
        if (data.status === "completed" || data.status === "failed") {
          break;
        }
      }
      
      if (data.status === "created") {
        return {
          success: false,
          verified: false,
          error: "Verification is taking longer than expected. Please try again in a few minutes.",
        };
      }
    }

    console.log("Final penny drop status:", data.status);

    // Check validation results
    const results = data.results || {};
    const accountStatus = results.account_status || "";
    const beneficiaryName = results.registered_name || "";   

    if (accountStatus.toLowerCase() === "active") {
      const nameMatchScore = calculateNameMatchScore(accountHolderName, beneficiaryName);

      console.log(`Name match score: ${nameMatchScore}% (User: "${accountHolderName}", Bank: "${beneficiaryName}")`);

      return {
        success: true,
        verified: nameMatchScore >= 80,
        bankName: bankName,
        beneficiaryName: beneficiaryName,
        nameMatchScore: nameMatchScore,
      };
    } else if (data.status === "failed") {
      return {
        success: false,
        verified: false,
        error: results.error?.description || "Bank account verification failed",
      };
    } else {
      return {
        success: false,
        verified: false,
        error: "Verification in progress. Please try again in a moment.",
      };
    }
  } catch (error: any) {
    console.error("Penny drop verification error:", {
      message: error.message,
      response: error.response?.data,
      status: error.response?.status
    });

    if (error.response?.status === 401) {
      return {
        success: false,
        verified: false,
        error: "Payment gateway authentication failed. Please contact support.",
      };
    }

    if (error.response?.status === 400) {
      return {
        success: false,
        verified: false,
        error: error.response.data?.error?.description || "Invalid bank account details",
      };
    }

    if (error.code === "ECONNABORTED" || error.code === "ETIMEDOUT") {
      return {
        success: false,
        verified: false,
        error: "Verification timeout. Please try again.",
      };
    }

    return {
      success: false,
      verified: false,
      error: "Bank verification service temporarily unavailable. Please try again later.",
    };
  }
}