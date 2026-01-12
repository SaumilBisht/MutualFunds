import express, { Router } from "express";
import { getAmfiCached } from "../services/amfiService.js";
import { getNavHistory } from "../services/navHistoryService.js";
import { getSchemeEnrichment } from "../services/schemeData.js";
import { filterByCategory, getCategoryStats } from "../services/fundCategories.js";

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

// Get funds by category (using comprehensive classification system)
mfRouter.get("/category/:categoryType", async (req, res, next) => {
  try {
    const categoryType = String(req.params.categoryType).toLowerCase();
    const subcategory = String(req.query.subcategory || "").toLowerCase().replace(/ /g, '-');
    const limit = Math.min(200, Number(req.query.limit || 50));
    
    console.log(`[mfRoutes] Category request: ${categoryType}, subcategory: ${subcategory || 'all'}`);
    
    // Get all schemes
    const amfi = await getAmfiCached();
    const allSchemes = amfi.list || [];
    
    // Use the comprehensive classification system
    const filtered = filterByCategory(
      allSchemes,
      categoryType,
      subcategory || undefined
    );
    
    // Add enrichment data (logos)
    const enriched = filtered.map((scheme: any) => ({
      schemeCode: scheme.schemeCode,
      schemeName: scheme.schemeName,
      netAssetValue: scheme.netAssetValue,
      date: scheme.date,
      category: scheme.classification.category,
      subcategory: scheme.classification.subcategory,
      confidence: scheme.classification.confidence,
      enrichment: getSchemeEnrichment(scheme.schemeName)
    }));
    
    // Apply limit
    const output = enriched.slice(0, limit);
    
    console.log(`[mfRoutes] Found ${enriched.length} funds in ${categoryType}${subcategory ? `/${subcategory}` : ''}, returning ${output.length}`);
    
    res.json({ 
      success: true, 
      meta: { 
        total: enriched.length, 
        showing: output.length,
        category: categoryType,
        subcategory: subcategory || null
      }, 
      data: output 
    });
  } catch (err) {
    console.error("[mfRoutes] Error in /category/:categoryType:", err);
    next(err);
  }
});

// Get category statistics (fund counts per category/subcategory)
mfRouter.get("/category-stats", async (req, res, next) => {
  try {
    console.log("[mfRoutes] Category stats request");
    
    // Get all schemes
    const amfi = await getAmfiCached();
    const allSchemes = amfi.list || [];
    
    // Get statistics using the classification system
    const stats = getCategoryStats(allSchemes);
    
    console.log(`[mfRoutes] Category stats generated:`, {
      equity: stats.equity?.total || 0,
      debt: stats.debt?.total || 0,
      hybrid: stats.hybrid?.total || 0,
      index: stats.index?.total || 0
    });
    
    res.json({
      success: true,
      data: stats
    });
  } catch (err) {
    console.error("[mfRoutes] Error in /category-stats:", err);
    next(err);
  }
});

export default mfRouter;
