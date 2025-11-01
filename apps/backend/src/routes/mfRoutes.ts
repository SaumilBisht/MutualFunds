import express, { Router } from "express";
import { getAmfiCached } from "../services/amfiService.js";
import { getSchemeEnrichment, getSchemeLogo } from "../services/schemeData.js";
import { getNavHistory } from "../services/navHistoryService.js";

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
    const q = String(req.query.q || "").toLowerCase().trim();
    const limit = Math.min(200, Number(req.query.limit || 50));
    if (!q) return res.status(400).json({ success: false, error: "q required" });
    
    const amfi = await getAmfiCached();
    const list = amfi.list || [];
    
    // Split query into words for partial matching (split on space, &, -, and other separators)
    const queryWords = q.split(/[\s&\-,]+/).filter(word => word.length > 1);
    
    const out = list.filter((r:any) => {
      const schemeName = r.schemeName.toLowerCase();
      const schemeCode = (r.schemeCode || "").toLowerCase();
      
      // Check if scheme code matches
      if (schemeCode.includes(q)) return true;
      
      // Split scheme name into words for better matching
      const schemeWords = schemeName.split(/[\s&\-,()]+/).filter((word: string) => word.length > 1);
      
      // Check if all query words are present in scheme name (flexible matching - any position)
      const allWordsMatch = queryWords.every(queryWord => 
        schemeWords.some((schemeWord: string) => schemeWord.includes(queryWord))
      );
      
      if (allWordsMatch) return true;
      
      // Alternative: check if query words appear anywhere in scheme name (simpler fallback)
      const simpleMatch = queryWords.every(word => schemeName.includes(word));
      if (simpleMatch) return true;
      
      // Final fallback: check if original query is in scheme name
      return schemeName.includes(q);
    }).slice(0, limit);

    res.json({ success: true, meta: { total: out.length }, data: out });
  } 
  catch (err){
    next(err);
  }
});

// NAV History endpoint with Redis caching (30 days)
mfRouter.get("/nav-history/:code", async (req, res, next) => {
  try {
    const code = String(req.params.code);
    console.log(`[mfRoutes] /nav-history/${code} endpoint hit`);
    
    const navHistory = await getNavHistory(code);
    
    if (!navHistory) {
      return res.status(404).json({ 
        success: false, 
        error: "NAV history not found for this scheme" 
      });
    }

    res.json({ success: true, data: navHistory });
  } catch (err) {
    console.error("[mfRoutes] Error in /nav-history/:code:", err);
    next(err);
  }
});

export default mfRouter;
