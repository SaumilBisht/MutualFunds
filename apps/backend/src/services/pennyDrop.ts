import axios from "axios";

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
  accountHolderName: string
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

    // RazorpayX Fund Account Validation API
    const authHeader = `Basic ${Buffer.from(
      `${razorpayKeyId}:${razorpayKeySecret}`
    ).toString("base64")}`;

    const payload = {
      account_number: accountNumber,
      ifsc: ifscCode.toUpperCase(),
      fund_account: {
        account_type: "bank_account",
        bank_account: {
          name: accountHolderName,
          ifsc: ifscCode.toUpperCase(),
          account_number: accountNumber,
        },
      },
    };

    console.log("Initiating penny drop verification for account:", `***${accountNumber.slice(-4)}`);

    const response = await axios.post(
      "https://api.razorpay.com/v1/fund_accounts/validations",
      payload,
      {
        headers: {
          Authorization: authHeader,
          "Content-Type": "application/json",
        },
        timeout: 30000, // 30 seconds timeout
      }
    );

    const data = response.data;

    console.log("Penny drop response status:", data.status);

    if (data.status === "completed" && data.results?.account_status === "active") {
      const beneficiaryName = data.results.registered_name || "";
      const nameMatchScore = calculateNameMatchScore(accountHolderName, beneficiaryName);

      console.log(`Name match score: ${nameMatchScore}% (User: "${accountHolderName}", Bank: "${beneficiaryName}")`);

      return {
        success: true,
        verified: nameMatchScore >= 80, // Accept if 80% or higher match
        bankName: data.fund_account?.bank_account?.bank_name || "",
        beneficiaryName: beneficiaryName,
        nameMatchScore: nameMatchScore,
      };
    } else if (data.status === "failed") {
      return {
        success: false,
        verified: false,
        error: data.results?.error?.description || "Bank account verification failed",
      };
    } else {
      return {
        success: false,
        verified: false,
        error: "Verification in progress. Please try again in a moment.",
      };
    }
  } catch (error: any) {
    console.error("Penny drop verification error:", error.response?.data || error.message);

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