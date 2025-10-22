import express, { Router } from "express";
import { getAmfiCached } from "../services/amfiService.js";

const mfRouter:Router = express.Router();

mfRouter.get("/schemes", async (req, res, next) => {
  try 
  {
    console.log("[mfRoutes] /schemes endpoint hit");
    const page = Math.max(1, Number(req.query.page || 1));
    const limit = Math.min(500, Math.max(10, Number(req.query.limit || 50)));
    console.log("[mfRoutes] Fetching AMFI cached data...");
    const amfi = await getAmfiCached();
    
    console.log("[mfRoutes] AMFI data fetched:", { totalRecords: amfi.list?.length || 0, fetchedAt: amfi.fetchedAt });

    const list = amfi.list || [];
    const total = list.length;
    const start = (page - 1) * limit;
    const pageItems = list.slice(start, start + limit);

    console.log("[mfRoutes] Sending response:", { total, page, limit, itemsInPage: pageItems.length });

    res.json({ success: true, meta: { total, page, limit }, data: pageItems });
  } 
  catch (err) 
  {
    console.error("[mfRoutes] Error in /schemes:", err);
    next(err);
  }
});

mfRouter.post("/schemes/:code", async (req, res, next) => {
  try {
    const code = String(req.params.code);
    console.log("[mfRoutes] /schemes/:code endpoint hit with code:", code);
    const amfi = await getAmfiCached();
    const item = amfi.byCode?.[code];
    console.log("[mfRoutes] Scheme lookup result:", item ? "Found" : "Not found");
    if (!item) return res.status(404).json({ success: false, error: "Scheme not found" });
    res.json({ success: true, data: item });
  } catch (err) {
    console.error("[mfRoutes] Error in /schemes/:code:", err);
    next(err);
  }
});

mfRouter.get("/search", async (req, res, next) => {
  try {
    const q = String(req.query.q || "").toLowerCase();
    const limit = Math.min(200, Number(req.query.limit || 50));
    console.log("[mfRoutes] /search endpoint hit with query:", q);
    if (!q) return res.status(400).json({ success: false, error: "q query param required" });
    const amfi = await getAmfiCached();
    const list = amfi.list || [];
    const out = list.filter((r:any) => {
      return r.schemeName.toLowerCase().includes(q) || (r.schemeCode || "").toLowerCase().includes(q);
    }).slice(0, limit);
    console.log("[mfRoutes] Search results:", { query: q, totalFound: out.length });
    res.json({ success: true, meta: { total: out.length }, data: out });
  } catch (err) {
    console.error("[mfRoutes] Error in /search:", err);
    next(err);
  }
});

mfRouter.get("/logo/:amc", (req, res) => {
  // We'll respond with suggested external URL or blank. Frontend should cache/serve.
  const amc = String(req.params.amc || "");
  const base = process.env.LOGO_BASE_URL || "";
  if (base) {
    // Expect logos stored as `${base}/{slug}.png` where slug = amc lower hyphen
    const slug = amc.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
    return res.json({ success: true, url: `${base}/${slug}.png` });
  }
  // Fallback: suggest using Clearbit Logo API (company domain required) or return null
  return res.json({
    success: true,
    url: null,
    note: "Set LOGO_BASE_URL env to serve logos from S3/CDN. Alternatively use 3rd-party logo APIs."
  });
});

export default mfRouter;
