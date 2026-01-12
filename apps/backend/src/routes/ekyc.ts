import express, { Router } from "express";
import axios from "axios";
import { prisma } from "db/client";
import { verifyAuth } from "../middlewares/auth.js";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import { randomUUID } from "crypto";
import {panDobSchema} from "common/otp"
import {encrypt} from "../services/encrypt.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, "../../.env") });

const router:Router = express.Router();

const DIGIO_BASE = process.env.DIGIO_BASE_URL!;
const DIGIO_CLIENT_ID = process.env.DIGIO_CLIENT_ID!;
const DIGIO_CLIENT_SECRET = process.env.DIGIO_CLIENT_SECRET!;

const digioClient = axios.create({
  baseURL: DIGIO_BASE,
  auth: {
    username: DIGIO_CLIENT_ID,
    password: DIGIO_CLIENT_SECRET,
  },
  headers: {
    "Content-Type": "application/json",
  },
});

/**
 * POST /ekyc/pan-dob-verify
 * 
 * Verifies user's PAN + DOB with Income Tax database and checks KRA/CKYC registration.
 * 
 * TWO-STEP VERIFICATION:
 * 
 * **STEP 1: PAN-DOB Verification (Income Tax DB)**
 * - Calls Digio API → Income Tax Department database
 * - Validates PAN exists and matches DOB
 * - Returns: VERIFIED or INVALID
 * 
 * **STEP 2: KRA/CKYC Status Check**
 * - Queries KRA (KYC Registration Agency) database
 * - Checks if PAN already has verified KYC
 * - Statuses:
 *   * VALIDATED: User already KYC-verified (skip Aadhaar flow)
 *   * REGISTERED: KYC submitted but pending
 *   * NOT FOUND: User must complete eKYC via Aadhaar
 * 
 * ROUTING LOGIC:
 * - If KRA VALIDATED → User proceeds to personal details (Step 3)
 * - If NOT FOUND → User must complete Aadhaar-based eKYC
 * 
 * DATABASE UPDATES:
 * - Saves encrypted PAN
 * - Updates kycStatus (PENDING or VERIFIED)
 * - Saves CKYC reference ID if found
 * - Sets currentStep (2 or 3)
 * 
 * @param {string} req.body.pan - 10-char PAN (validated by panDobSchema)
 * @param {string} req.body.dob - DOB in YYYY-MM-DD format
 * @returns {Object} { success, message, nextStep: "personal" | "aadhaar_upload" }
 * 
 * @example
 * Request:  { "pan": "ABCDE1234F", "dob": "1990-01-01" }
 * Response: { "success": true, "message": "User KYC already verified", "nextStep": "personal" }
 */
router.post("/pan-dob-verify", verifyAuth, async (req, res) => {
  const data =panDobSchema.parse(req.body);
  const { pan, dob } = data;
  //@ts-ignore
  const userId = req.user.userId;

  try 
  {
    // STEP 1: Verify PAN + DOB (Income Tax DB)
    const panResp = await digioClient.post("/v3/client/kyc/pan/verify", {
      pan,
      dob,
    });
    console.log(panResp)
    if (panResp.data.status !== "VERIFIED") 
      {
      return res.status(400).json({ success: false, message: "Invalid PAN or DOB" });
    }

    // STEP 2: Check if KYC already registered in KRA/CKYC
    const kraResp = await digioClient.post("/v3/client/kyc/kra/v2/get_pan_status", {
      pan_no: pan,
      dob: dob.split("-").reverse().join("/"), // convert YYYY-MM-DD → DD/MM/YYYY
      fetch_type: "I",
      unique_request_id: randomUUID(),
      service_provider: "CDSL",
    });

    const kraData = kraResp.data;
    console.log(kraData);
    let finalStatus: "PENDING" | "VERIFIED" = "PENDING";
    let ckycRef = null;

    if (kraData?.status === "VALIDATED" || kraData?.status === "REGISTERED") {
      finalStatus = "VERIFIED";
      ckycRef = kraData.ckyc_number || kraData.reference_id || null;
    }

    await prisma.user.update({
      where: { id: userId },
      data: {
        encryptedPan: encrypt(pan),
        dob: new Date(dob),
        kycStatus: finalStatus,
        ckycRefId: ckycRef,
        currentStep: finalStatus === "VERIFIED" ? 3 : 2,
      },
    });

    if (finalStatus === "VERIFIED") 
    {
      return res.json({
        success: true,
        message: "User KYC already verified in KRA/CKYC.",
        nextStep: "personal",
      });
    } else {
      return res.json({
        success: true,
        message: "User not found in CKYC/KRA — please complete eKYC via Aadhaar.",
        nextStep: "aadhaar_upload",
      });
    }
  } 
  catch (err: any) 
  {
    console.error("PAN-DOB verify error:", err.response?.data || err.message);
    return res.status(500).json({
      success: false,
      error: err.response?.data || err.message,
    });
  }
});

export  {router as ekycRouter};


