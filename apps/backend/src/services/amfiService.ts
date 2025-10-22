import axios from "axios";
//@ts-ignore
import cron from "node-cron";
import dotenv from "dotenv";
import path from "path";
import { parseAmfiNavAll, AmfiRecord } from "../utils/parser.js";
import { getKey, setKey } from "redis-service/otp";
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

// schedule periodic fetch (safe to call multiple times)
export function scheduleAmfiFetch() {
  try {
    // run immediate fetch once (non-blocking)
    fetchAndCacheAmfi().catch((e) => console.warn("initial fetch failed:", e.message));
    // schedule
    cron.schedule(CRON_EXPR, () => {
      console.log("[amfiService] cron triggered fetch");
      fetchAndCacheAmfi().catch((e) => console.error("cron fetch failed:", e.message));
    });
    console.log(`[amfiService] scheduled AMFI fetch with cron: ${CRON_EXPR}`);
  } catch (e) {
    console.error("schedule error:", e);
  }
}
