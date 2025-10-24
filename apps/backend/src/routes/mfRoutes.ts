import express, { Router } from "express";
import { getAmfiCached } from "../services/amfiService.js";
import { getSchemeEnrichment, getSchemeLogo } from "../services/schemeData.js";

const mfRouter:Router = express.Router();

mfRouter.get("/schemes", async (req, res, next) => {
  try 
  {
    const page = Math.max(1, Number(req.query.page || 1));
    const limit = Math.min(500, Math.max(10, Number(req.query.limit || 20)));
    const amfi = await getAmfiCached();
    const list = amfi.list || [];
    const total = list.length;
    const start = (page - 1) * limit;
    const pageItems = list.slice(start, start + limit);
    res.json({ success: true, meta: { total, page, limit }, data: pageItems });
  } 
  catch(err){
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

    // Get enrichment data (logo only for now)
    const enrichment = getSchemeEnrichment(item.schemeName);
    console.log("[mfRoutes] Enrichment:", enrichment);

    res.json({ success: true, data: { ...item, enrichment } });
  } catch (err) {
    console.error("[mfRoutes] Error in /schemes/:code:", err);
    next(err);
  }
});

mfRouter.get("/search", async (req, res, next) => {
  try {
    const q = String(req.query.q || "").toLowerCase();
    const limit = Math.min(200, Number(req.query.limit || 50));
    if (!q) return res.status(400).json({ success: false, error: "q required" });
    const amfi = await getAmfiCached();
    const list = amfi.list || [];
    const out = list.filter((r:any) => {
      return r.schemeName.toLowerCase().includes(q) || (r.schemeCode || "").toLowerCase().includes(q);
    }).slice(0, limit);

    res.json({ success: true, meta: { total: out.length }, data: out });
  } 
  catch (err){
    next(err);
  }
});


export default mfRouter;
