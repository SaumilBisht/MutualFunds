import express, { Router } from "express";
import { getMarketData } from "../services/nseService.js";
import { verifyAuth } from "../middlewares/auth.js";
import { activateNseForUser, verifyOtpAndUploadElog, resendNseOtpForUser } from "../services/nseRegistration.js";

export const nseRouter:Router = express.Router();

nseRouter.get("/market-data", async (req, res, next) => {
  try {
    const data = await getMarketData();
    res.json({ success: true, data });
  } 
  catch (err) 
  {
    console.error("NSE route error:", err);
    next(err);
  }
});

/*
  POST /api/nse/activate
  Kicks off UCC -> FATCA -> Bank Registration, then sends OTP
 */
nseRouter.post("/activate", verifyAuth, async (req, res) => {
  try {
    // @ts-ignore
    const userId = req.user.userId as string;
    const result = await activateNseForUser(userId);
    res.json({ success: true, ...result });
  } catch (e: any) {
    res.status(400).json({ success: false, error: e.message || "Activation failed" });
  }
});

/*
  POST /api/nse/verify-otp
  Body: { otp: string }
  Captures client IP and uploads eLOG
*/
nseRouter.post("/verify-otp", verifyAuth, async (req, res) => {
  try {
    const { otp } = req.body as { otp: string };
    if (!otp) return res.status(400).json({ success: false, error: "OTP is required" });
    // Capture client IP
    const ip = (req.headers["x-forwarded-for"] as string)?.split(",")[0]?.trim() ||
      req.socket.remoteAddress ||
      "";
    // @ts-ignore
    const userId = req.user.userId as string;
    const out = await verifyOtpAndUploadElog(userId, otp, ip);
    res.json({ ...out, status: "READY_TO_TRADE" });
  } 
  catch (e: any) 
  {
    res.status(400).json({ success: false, error: e.message || "OTP validation failed" });
  }
});

nseRouter.post("/resend-otp", verifyAuth, async (req, res) => {
  try 
  {
    // @ts-ignore
    const userId = req.user.userId as string;
    const result = await resendNseOtpForUser(userId);
    res.json({ success: true, ...result });
  } 
  catch (e: any) {
    res.status(400).json({ success: false, error: e.message || "Resend failed" });
  }
});

