import express, { Router, Request, Response } from "express";
import axios from "axios";
import { verifyAuth } from "../middlewares/auth.js";
import { verifyBankAccountWithPennyDrop } from "../services/pennyDrop.js";
import { prisma } from "db/client";

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

    //@ts-ignore
    console.log(`Starting penny drop verification for user ${req.user?.userId}`);
    
    const pennyDropResult = await verifyBankAccountWithPennyDrop(
      accountNumber,
      ifscCode,
      accountHolderName
    );

    if (!pennyDropResult.success) {
      return res.status(400).json({
        success: false,
        error: pennyDropResult.error || "Bank verification failed"
      });
    }

    if (!pennyDropResult.verified) {
      return res.status(400).json({
        success: false,
        error: `Name verification failed. Bank name: "${pennyDropResult.beneficiaryName}". Match score: ${pennyDropResult.nameMatchScore}% (minimum 80% required)`,
        data: {
          bankName: pennyDropResult.beneficiaryName,
          matchScore: pennyDropResult.nameMatchScore
        }
      });
    }

    // Save verified bank details to database
    try {
      //@ts-ignore
      const userId = req.user?.userId;
      
      if (userId) {
        await prisma.user.update({
          where: { id: userId },
          data: {
            encryptedBankAcc: accountNumber, // TODO: Encrypt in production
            encryptedIfsc: ifscCode.toUpperCase(), // TODO: Encrypt in production
            bankAccountType: accountType.toLowerCase(),
            bankAccountHolderName: accountHolderName,
            bankName: pennyDropResult.bankName || bankName,
            bankBranchName: branchName,
            bankVerified: true,
            bankVerifiedAt: new Date(),
            bankBeneficiaryName: pennyDropResult.beneficiaryName,
            bankNameMatchScore: pennyDropResult.nameMatchScore,
            currentStep: 6  // Move to signature page
          }
        });

        console.log(`Bank details saved for user ${userId}. Match score: ${pennyDropResult.nameMatchScore}%`);
      }
    } catch (dbError: any) {
      console.error("Error saving bank details to database:", dbError.message);
      // Continue even if DB save fails - verification was successful
    }

    res.json({
      success: true,
      message: "Bank details verified successfully",
      data: {
        verified: true,
        accountNumber: `***${accountNumber.slice(-4)}`,
        ifscCode: ifscCode.toUpperCase(),
        accountType,
        accountHolderName,
        bankName: pennyDropResult.bankName || bankName,
        branchName,
        beneficiaryName: pennyDropResult.beneficiaryName,
        nameMatchScore: pennyDropResult.nameMatchScore
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