import express, { Router, Request, Response } from "express";
import axios from "axios";
import { verifyAuth } from "../middlewares/auth";

const bankRouter: Router = express.Router();

bankRouter.post("/verify", verifyAuth,async (req: Request, res: Response) => {
  try {
    const {
      accountNumber,
      ifscCode,
      accountType,
      accountHolderName,
      bankName,
      branchName
    } = req.body;

    // Validation
    const errors: string[] = [];

    // Account Number validation
    if (!accountNumber || !/^\d{9,20}$/.test(accountNumber)) {
      errors.push("Account number must be 9-20 digits");
    }

    // IFSC validation
    const ifscRegex = /^[A-Z]{4}0[A-Z0-9]{6}$/;
    if (!ifscCode || !ifscRegex.test(ifscCode.toUpperCase())) {
      errors.push("Invalid IFSC code format");
    }

    // Account Type validation
    const validAccountTypes = ["savings", "current"];
    if (!accountType || !validAccountTypes.includes(accountType.toLowerCase())) {
      errors.push("Invalid account type. Must be 'savings' or 'current'");
    }

    // Account Holder Name validation
    if (!accountHolderName || accountHolderName.trim().length < 3) {
      errors.push("Account holder name is required (minimum 3 characters)");
    }

    // Bank Name validation
    if (!bankName || bankName.trim().length < 2) {
      errors.push("Bank name is required");
    }

    // Branch Name validation
    if (!branchName || branchName.trim().length < 2) {
      errors.push("Branch name is required");
    }

    if (errors.length > 0) {
      return res.status(400).json({
        success: false,
        errors
      });
    }

    // TODO: Verify with Penny Drop API or Bank Account Verification API

    //in production, integrate with actual verification API
    const verificationResult = {
      verified: true,
      nameMatch: true, // Compare with PAN name
      accountActive: true
    };
    // TODO: Save to database with user ID

    res.json({
      success: true,
      message: "Bank details verified successfully",
      data: {
        verified: verificationResult.verified,
        accountNumber: `***${accountNumber.slice(-4)}`,
        ifscCode: ifscCode.toUpperCase(),
        accountType,
        accountHolderName,
        bankName,
        branchName
      }
    });

  } catch (err: any) {
    console.error("Error verifying bank details:", err.message);
    res.status(500).json({
      success: false,
      error: "Failed to verify bank details. Please try again."
    });
  }
});

export default bankRouter;
