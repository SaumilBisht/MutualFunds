export type AmfiRecord = {
  schemeCode: string;
  isinDivPayout?: string;
  isinGrowth?: string;
  schemeName: string;
  netAssetValue?: string;
  date?: string;
};

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
