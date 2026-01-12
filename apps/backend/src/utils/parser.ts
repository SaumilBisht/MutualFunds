export type AmfiRecord = {
  schemeCode: string;
  isinDivPayout?: string;
  isinGrowth?: string;
  schemeName: string;
  netAssetValue?: string;
  date?: string;
};

/**
 * Parses AMFI NAV text file into structured array of mutual fund schemes.
 * 
 * AMFI FILE FORMAT (pipe or semicolon delimited):
 * ```
 * Scheme Code;ISIN Div Payout;ISIN Growth;Scheme Name;Net Asset Value;Date
 * 100001;;INF846K01EW2;Aditya Birla SL Equity Fund - Growth;450.23;25-Oct-2024
 * 100002;INF846K01EX0;;Aditya Birla SL Equity Fund - Dividend;385.12;25-Oct-2024
 * ```
 * 
 * PARSING LOGIC:
 * 1. Split by lines and trim whitespace
 * 2. Detect delimiter (`;` > `|` > `,` priority)
 * 3. Skip header row if present ("Scheme Code" keyword)
 * 4. Skip category headers (non-numeric scheme code)
 * 5. Extract 6 fields per line
 * 6. Filter invalid records (missing code or name)
 * 
 * DATA VALIDATION:
 * - Scheme code must be numeric
 * - Scheme name must be non-empty
 * - ISINs are optional (some schemes don't have both dividend and growth)
 * - NAV and date are optional (for suspended schemes)
 * 
 * OUTPUT SIZE:
 * - ~40,000+ schemes in production
 * - ~2-3 MB parsed JSON
 * 
 * @param {string} text - Raw AMFI NAV file content
 * @returns {AmfiRecord[]} Array of parsed mutual fund schemes
 */
export function parseAmfiNavAll(text: string): AmfiRecord[] {
  const lines = text.split(/\r?\n/).map((l) => l.trim()).filter(Boolean);
  // Some AMFI files have a header line — skip known header
  const possibleHeader = lines[0] || "";
  const startIndex = possibleHeader.toLowerCase().includes("scheme code") ? 1 : 0;

  const results: AmfiRecord[] = [];
  for (let i = startIndex; i < lines.length; i++) {
    const line:any = lines[i];
    // AMFI uses ';' delim, fallback to '|' or ',' if not present
    const parts = line.includes(";") 
      ? line.split(";") 
      : (line.includes("|") ? line.split("|") : line.split(","));
    // trim
    const p = parts.map((s:any) => s.trim());
    // Skip lines that don't have enough parts or are category headers
    if (p.length < 4 || !p[0] || isNaN(Number(p[0]))) {
      continue;
    }
    // AMFI common: 6 columns: code;isin1;isin2;scheme name;nav;date
    const rec: AmfiRecord = {
      schemeCode: p[0] ?? "",
      isinDivPayout: p[1] ?? "",
      isinGrowth: p[2] ?? "",
      schemeName: p[3] ?? "",
      netAssetValue: p[4] ?? "",
      date: p[5] ?? "",
    };
    // Basic sanity
    if (rec.schemeCode && rec.schemeName) results.push(rec);
  }
  return results;
}
