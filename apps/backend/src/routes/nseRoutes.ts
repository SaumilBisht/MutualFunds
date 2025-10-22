import express, { Router } from "express";
import { getMarketData } from "../services/nseService.js";

export const nseRouter:Router = express.Router();

/**
 * GET /api/nse/market-data
 * Example frontend call: axios.get("/api/nse/market-data")
 */
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

