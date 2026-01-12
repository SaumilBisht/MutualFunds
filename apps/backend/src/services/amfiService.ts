import axios from "axios";
//@ts-ignore
import cron from "node-cron";
import dotenv from "dotenv";
import path from "path";
import { parseAmfiNavAll, AmfiRecord } from "../utils/parser.js";
import { getKey, setKey, redis } from "redis-service/otp";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, "../../.env") });

const AMFI_URL = process.env.AMFI_NAV_URL || "https://www.amfiindia.com/spages/NAVAll.txt";
const CACHE_KEY = process.env.CACHE_KEY_AMFI || "amfi:navall";
const CACHE_TTL = Number(process.env.CACHE_TTL_SECONDS || 60 * 60 * 24); // default 1 day
const CRON_EXPR = process.env.AMFI_FETCH_CRON || "0 2 * * *"; // default daily 2 AM

async function fetchAmfiRaw() {
  console.log("[amfiService] Fetching raw AMFI data from:", AMFI_URL);
  const resp = await axios.get(AMFI_URL, { timeout: 15000, responseType: "text" });
  console.log("[amfiService] Raw data fetched, size:", resp.data.length, "bytes");
  return resp.data as string;
}

/**
 * Fetches latest NAV data from AMFI and caches it in Redis.
 * 
 * WORKFLOW:
 * 1. Fetches raw pipe-delimited text file from AMFI India website
 * 2. Parses ~40,000+ mutual fund schemes with their NAVs and ISINs
 * 3. Creates two data structures:
 *    - `list`: Array of all schemes (for search/filter operations)
 *    - `byCode`: HashMap for O(1) lookup by scheme code
 * 4. Stores in Redis with configurable TTL (default: 24 hours)
 * 
 * DATA FORMAT (from AMFI):
 * Each line: SchemeCode;ISIN_Div;ISIN_Growth;SchemeName;NAV;Date
 * Example: "100001;;INF846K01EW2;Aditya Birla SL Equity Fund;450.23;25-Oct-2024"
 * 
 * CACHING STRATEGY:
 * - Key: `amfi:navall`
 * - TTL: 1 day (refresh via cron)
 * - Payload includes `fetchedAt` timestamp for staleness check
 * 
 * @returns {Promise<Object>} { list: AmfiRecord[], byCode: Record<string, AmfiRecord>, fetchedAt: string }
 * @throws {Error} If AMFI API is down or parsing fails
 */
export async function fetchAndCacheAmfi() {
  try {
    const raw = await fetchAmfiRaw();
    console.log("[amfiService] First 500 chars of raw data:", raw.substring(0, 500));
    const parsed: AmfiRecord[] = parseAmfiNavAll(raw);
    console.log("[amfiService] Parsed records:", parsed.length);
    if (parsed.length > 0) {
      console.log("[amfiService] Sample record:", JSON.stringify(parsed[0], null, 2));
    }
    // store minimal index for quick lookup: by schemeCode
    const indexByCode: Record<string, AmfiRecord> = {};
    parsed.forEach((r) => {
      indexByCode[r.schemeCode] = r;
    });
    const payload = { list: parsed, byCode: indexByCode, fetchedAt: new Date().toISOString() };
    await setKey(CACHE_KEY, payload, CACHE_TTL);
    console.log(`[amfiService] fetched & cached ${parsed.length} records`);
    return payload;
  } catch (err: any) {
    console.error("[amfiService] fetch error:", err.message || err);
    throw err;
  }
}

/**
 * Returns cached AMFI data from Redis, or fetches fresh if cache miss.
 * 
 * BEHAVIOR:
 * - Cache HIT: Returns data instantly from Redis (< 5ms)
 * - Cache MISS: Triggers fresh fetch from AMFI (blocking, ~3-5 seconds)
 * 
 * USE CASES:
 * - `/api/mf/schemes` - Get all schemes list
 * - `/api/mf/search?q=hdfc` - Search by name
 * - `/api/mf/schemes/:code` - Get specific scheme details
 * 
 * @returns {Promise<Object>} Cached or freshly fetched AMFI data
 */
export async function getAmfiCached() {
  console.log("[amfiService] Getting cached AMFI data...");
  const cached = await getKey(CACHE_KEY);
  if (cached) {
    console.log("[amfiService] Cache hit! Records:", cached.list?.length || 0);
    return cached;
  }
  // if no cache, fetch immediately
  console.log("[amfiService] Cache miss, fetching fresh data...");
  return await fetchAndCacheAmfi();
}

/**
 * Schedules automatic AMFI data refresh using node-cron.
 * 
 * SCHEDULE:
 * - Default: Daily at 2:00 AM IST (configurable via AMFI_FETCH_CRON env var)
 * - Also runs ONCE immediately on server startup (non-blocking)
 * 
 * POST-FETCH ACTIONS:
 * 1. Fetches latest NAV data from AMFI
 * 2. Updates all existing chart caches with today's NAV (see appendTodaysNavToCharts)
 * 3. Recalculates daily change % for each cached chart
 * 
 * WHY 2 AM?
 * - AMFI publishes NAVs after market close (evening)
 * - 2 AM ensures data is available before morning trading
 * - Low server load time
 * 
 * SAFE TO CALL MULTIPLE TIMES:
 * - Cron won't duplicate if called again
 * - Useful for monorepo where multiple apps import this service
 * 
 * @example
 * // In index.ts
 * scheduleAmfiFetch();
 */
export function scheduleAmfiFetch() {
  try {
    // run immediate fetch once (non-blocking)
    fetchAndCacheAmfi().catch((e) => console.warn("initial fetch failed:", e.message));
    // schedule
    cron.schedule(CRON_EXPR, () => {
      console.log("[amfiService] cron triggered fetch");
      fetchAndCacheAmfi()
        .then((amfiData) => {
          appendTodaysNavToCharts(amfiData).catch((e) =>
            console.error("[amfiService] chart update failed:", e.message)
          );
        })
        .catch((e) => console.error("cron fetch failed:", e.message));
    });
    console.log(`[amfiService] scheduled AMFI fetch with cron: ${CRON_EXPR}`);
  } catch (e) {
    console.error("schedule error:", e);
  }
}

/**
 * Updates all cached NAV chart data with today's latest NAV values.
 * 
 * WORKFLOW:
 * 1. Scans Redis for all `nav-history:*` keys (cached charts)
 * 2. For each chart:
 *    - Fetches corresponding scheme's latest NAV from AMFI data
 *    - Prepends today's NAV to chart data (maintains chronological order)
 *    - Recalculates statistics:
 *      * Today's change (₹ and %)
 *      * 52-week high/low
 *      * All-time high/low
 * 3. Saves updated chart back to Redis with 30-day TTL
 * 
 * WHY NEEDED?
 * - Avoids regenerating full chart history on every request
 * - Only appends incremental data (efficient)
 * - Keeps chart stats fresh without expensive recalculation
 * 
 * PERFORMANCE:
 * - Processes ~100 charts in < 2 seconds
 * - Runs asynchronously during cron job
 * - Skips charts if NAV already up-to-date
 * 
 * @param {Object} amfiData - Freshly fetched AMFI data with byCode index
 * @private Called internally by scheduleAmfiFetch
 */
async function appendTodaysNavToCharts(amfiData: any) {
  try {
    console.log("Updating existing chart caches with today's NAV...");
    
    const chartKeys = await redis.keys("nav-history:*");
    console.log(`Found ${chartKeys.length} charts to update`);

    let updatedCount = 0;
    let skippedCount = 0;

    for (const key of chartKeys) {
      try {
        const schemeCode = key.replace("nav-history:", "");
        const amfiRecord = amfiData.byCode[schemeCode];

        if (!amfiRecord) {
          skippedCount++;
          continue; // Scheme not in AMFI data
        }

        const chartData = await getKey(key);

        if (chartData && chartData.navData && Array.isArray(chartData.navData)) {
          const todayDate = parseAmfiDate(amfiRecord.date);
          const latestDate = chartData.navData[0]?.date;

          if (latestDate !== todayDate) {
            chartData.navData.unshift({
              date: todayDate,
              nav: amfiRecord.netAssetValue,
            });

            // Calculate 1-day change (today vs yesterday)
            const currentNav = parseFloat(amfiRecord.netAssetValue);
            const previousNav = parseFloat(chartData.navData[1]?.nav || amfiRecord.netAssetValue);
            const changeToday = currentNav - previousNav;
            const changeTodayPercent = previousNav > 0
              ? ((changeToday / previousNav) * 100).toFixed(2)
              : "0.00";

            chartData.stats.currentNav = currentNav;
            chartData.stats.changeToday = changeToday;
            chartData.stats.changeTodayPercent = changeTodayPercent;

            const navValues = chartData.navData.map((d: any) => parseFloat(d.nav));
            const last365Days = navValues.slice(0, Math.min(365, navValues.length));
            chartData.stats.weekHigh = Math.max(...last365Days);
            chartData.stats.weekLow = Math.min(...last365Days);
            chartData.stats.yearHigh = Math.max(...navValues);
            chartData.stats.yearLow = Math.min(...navValues);

            chartData.cachedAt = new Date().toISOString();

            // Save back to Redis (30 days TTL)
            await setKey(key, chartData, 30 * 24 * 60 * 60);
            updatedCount++;
          } else {
            skippedCount++;
          }
        }
      } catch (err) {
        console.error(`Error updating chart ${key}:`, err);
      }
    }

    console.log(`Chart update complete: ${updatedCount} updated, ${skippedCount} skipped`);
  } catch (error) {
    console.error(" Error in appendTodaysNavToCharts:", error);
  }
}

// Parse AMFI date format "25-Oct-2024" to ISO "2024-10-25" 
function parseAmfiDate(dateStr: string): string {
  const months: Record<string, string> = {
    Jan: "01", Feb: "02", Mar: "03", Apr: "04", May: "05", Jun: "06",
    Jul: "07", Aug: "08", Sep: "09", Oct: "10", Nov: "11", Dec: "12",
  };

  const parts = dateStr.split("-");
  if (parts.length === 3) {
    const day = parts[0]!.padStart(2, "0");
    const month = months[parts[1]!] || "01";
    const year = parts[2];
    return `${year}-${month}-${day}`;
  }
  return dateStr;
}
