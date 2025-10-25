import axios from "axios";
import { getKey, setKey } from "redis-service/otp";

interface NavDataPoint {
  date: string;
  nav: string;
}

interface MfApiResponse {
  meta: {
    fund_house: string;
    scheme_type: string;
    scheme_category: string;
    scheme_code: string;
    scheme_name: string;
  };
  data: Array<{
    date: string;
    nav: string;
  }>;
  status: string;
}

interface NavHistoryData {
  schemeCode: string;
  schemeName: string;
  fundHouse: string;
  category: string;
  navData: NavDataPoint[];
  stats: {
    currentNav: number;
    changeToday: number;
    changeTodayPercent: string;
    weekHigh: number;
    weekLow: number;
    yearHigh: number;
    yearLow: number;
  };
  returns: {
    sixMonths: string | null;
    oneYear: string | null;
    threeYears: string | null;
    fiveYears: string | null;
  };
  cachedAt: string;
}

export async function getNavHistory(schemeCode: string): Promise<NavHistoryData | null> {
  const cacheKey = `nav-history:${schemeCode}`;

  try 
  {
    const cached = await getKey(cacheKey);
    if (cached) 
    {
      console.log(`Cache hit for ${schemeCode}`);
      return cached as NavHistoryData;
    }

    console.log(`Cache miss of NAV history, fetching from API for ${schemeCode}`);

    const url = `https://api.mfapi.in/mf/${schemeCode}`;
    const response = await axios.get<MfApiResponse>(url, {
      timeout: 10000,
      headers: { "User-Agent": "Mozilla/5.0" },
    });

    if (!response.data || response.data.status === "error" || !response.data.data) {
      console.error(`[navHistory] Invalid response for ${schemeCode}`);
      return null;
    }

    const { meta, data: rawNavData } = response.data;

    const navData = rawNavData.map((item) => ({
      date: parseDate(item.date), // "25-10-2024" to "2024-10-25"
      nav: item.nav,
    }));

    const navValues = navData.map((d) => parseFloat(d.nav));
    const currentNav = navValues[0] || 0;
    
    // Calculate 1-day change (today vs yesterday)
    const previousNav = navValues[1] || currentNav;
    const changeToday = currentNav - previousNav;
    const changeTodayPercent = previousNav > 0 
      ? ((changeToday / previousNav) * 100).toFixed(2) 
      : "0.00";

    // Get 52-week high/low (last 365 days)
    const last365Days = navValues.slice(0, 365);
    const weekHigh = Math.max(...last365Days);
    const weekLow = Math.min(...last365Days);
    const yearHigh = Math.max(...navValues);
    const yearLow = Math.min(...navValues);

    const returns = calculateReturns(navData);

    const result: NavHistoryData = {
      schemeCode: meta.scheme_code,
      schemeName: meta.scheme_name,
      fundHouse: meta.fund_house,
      category: meta.scheme_category,
      navData,
      stats: {
        currentNav,
        changeToday,
        changeTodayPercent,
        weekHigh,
        weekLow,
        yearHigh,
        yearLow,
      },
      returns,
      cachedAt: new Date().toISOString(),
    };

    // Cache for 30 days (2592000 seconds)
    await setKey(cacheKey, result, 2592000);
    console.log(`Cached data for ${schemeCode}`);

    return result;
  } catch (error) {
    console.error(`Error fetching for ${schemeCode}:`, error);
    return null;
  }
}

function parseDate(dateStr: string): string {
  const parts = dateStr.split("-");
  if (parts.length !== 3) return dateStr;
  const [day, month, year] = parts;
  return `${year}-${month!.padStart(2, "0")}-${day!.padStart(2, "0")}`;
}

function calculateReturns(navData: NavDataPoint[]) {
  if (!navData || navData.length === 0) {
    return {
      sixMonths: null,
      oneYear: null,
      threeYears: null,
      fiveYears: null,
    };
  }

  const currentNav = parseFloat(navData[0]!.nav);

  const getNavAtIndex = (daysAgo: number): number | null => {
    if (daysAgo >= navData.length) return null;
    const navPoint = navData[daysAgo];
    return navPoint ? parseFloat(navPoint.nav) : null;
  };

  const simpleReturn = (oldNav: number | null): string | null => {
    if (!oldNav || oldNav === 0) return null;
    const returns = ((currentNav - oldNav) / oldNav) * 100;
    return returns.toFixed(2);
  };

  const cagr = (oldNav: number | null, years: number): string | null => {
    if (!oldNav || oldNav === 0) return null;
    const annualizedReturn = (Math.pow(currentNav / oldNav, 1 / years) - 1) * 100;
    return annualizedReturn.toFixed(2);
  };

  return {
    sixMonths: simpleReturn(getNavAtIndex(180)),     // ~6 months
    oneYear: simpleReturn(getNavAtIndex(365)),       // 1 year
    threeYears: cagr(getNavAtIndex(1095), 3),        // 3 years (CAGR)
    fiveYears: cagr(getNavAtIndex(1825), 5),         // 5 years (CAGR)
  };
}
