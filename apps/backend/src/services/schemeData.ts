interface SchemeEnrichment 
{
  logo: string | null;
  amcName: string | null;
  // TODO: Future enrichment data
  // returns?: { oneY: string | null; threeY: string | null; fiveY: string | null };
  // expenseRatio?: string | null;
  // aum?: string | null;
  // risk?: string | null;
  // fundManager?: string | null;
  // holdings?: Array<{ name: string; allocation?: string }>;
}

const AMC_LOGOS: Record<string, string> = {
  "360 one": "https://www.valueresearchonline.com/content-assets/images/amc-logo/9636-360-one-4__BASE__.png",
  "aditya birla": "https://www.valueresearchonline.com/content-assets/images/amc-logo/4-aditya-birla-sl-3__BASE__.png",
  "hdfc": "https://www.valueresearchonline.com/content-assets/images/amc-logo/302-hdfc-1__BASE__.png",
  "sbi": "https://www.valueresearchonline.com/content-assets/images/amc-logo/25-sbi-2__BASE__.png",
  "icici": "https://www.valueresearchonline.com/content-assets/images/amc-logo/14-icici-prudential-2__BASE__.png",
  "icici prudential": "https://www.valueresearchonline.com/content-assets/images/amc-logo/14-icici-prudential-2__BASE__.png",
  "axis": "https://www.valueresearchonline.com/content-assets/images/54523_benchmark_changes_for_a_few_schemes_of_axis_mutual_fund__w120__h68__.webp",
  "kotak": "https://www.valueresearchonline.com/content-assets/images/amc-logo/218-kotak-4__BASE__.png",
  "kotak mahindra": "https://www.valueresearchonline.com/content-assets/images/amc-logo/218-kotak-4__BASE__.png",
  "nippon": "https://www.valueresearchonline.com/content-assets/images/amc-logo/24-nippon-india-3__BASE__.png",
  "nippon india": "https://www.valueresearchonline.com/content-assets/images/amc-logo/24-nippon-india-3__BASE__.png",
  "reliance": "https://www.valueresearchonline.com/content-assets/images/amc-logo/24-nippon-india-3__BASE__.png",
  
  "dsp": "https://www.valueresearchonline.com/content-assets/images/amc-logo/181-dsp-1__BASE__.png",
  "franklin": "https://www.valueresearchonline.com/content-assets/images/amc-logo/28-franklin-templeton-5__BASE__.png",
  "franklin templeton": "https://www.valueresearchonline.com/content-assets/images/amc-logo/28-franklin-templeton-5__BASE__.png",
  "mirae": "https://www.valueresearchonline.com/content-assets/images/amc-logo/327-mirae-asset-1__BASE__.png",
  "mirae asset": "https://www.valueresearchonline.com/content-assets/images/amc-logo/327-mirae-asset-1__BASE__.png",
  "uti": "https://www.valueresearchonline.com/content-assets/images/amc-logo/311-uti-1__BASE__.png",
  "tata": "https://www.valueresearchonline.com/content-assets/images/amc-logo/27-tata-2__BASE__.png",
  "parag parikh": "https://www.valueresearchonline.com/content-assets/images/amc-logo/10157-ppfas-2__BASE__.png",
  "ppfas": "https://www.valueresearchonline.com/content-assets/images/amc-logo/10157-ppfas-2__BASE__.png",
  "motilal": "https://www.valueresearchonline.com/content-assets/images/amc-logo/9054-motilal-oswal-3__BASE__.png",
  "motilal oswal": "https://www.valueresearchonline.com/content-assets/images/amc-logo/9054-motilal-oswal-3__BASE__.png",
  "quant": "https://www.valueresearchonline.com/content-assets/images/amc-logo/11-quant-143__BASE__.png",
  
  "idbi": "https://www.valueresearchonline.com/content-assets/images/amc-logo/9023-idbi-1__BASE__.png",
  "invesco": "https://www.valueresearchonline.com/content-assets/images/amc-logo/319-invesco-3__BASE__.png",
  "sundaram": "https://www.valueresearchonline.com/content-assets/images/amc-logo/187-sundaram-4__BASE__.png",
  "l&t": "https://www.valueresearchonline.com/content-assets/images/amc-logo/24-lt-1__BASE__.png",
  "lt": "https://www.valueresearchonline.com/content-assets/images/amc-logo/24-lt-1__BASE__.png",
  "larsen & toubro": "https://www.valueresearchonline.com/content-assets/images/amc-logo/24-lt-1__BASE__.png",
  "mahindra": "https://www.valueresearchonline.com/content-assets/images/amc-logo/11141-mahindra-manulife-1__BASE__.png",
  "mahindra manulife": "https://www.valueresearchonline.com/content-assets/images/amc-logo/11141-mahindra-manulife-1__BASE__.png",
  "pgim": "https://www.valueresearchonline.com/content-assets/images/amc-logo/9055-pgim-india-4__BASE__.png",
  "pgim india": "https://www.valueresearchonline.com/content-assets/images/amc-logo/9055-pgim-india-4__BASE__.png",
  "principal": "https://www.valueresearchonline.com/content-assets/images/amc-logo/15_Principal_151121_131145.png",
  "quantum": "https://www.valueresearchonline.com/content-assets/images/amc-logo/317-quantum-2__BASE__.png",
  "whiteoak": "https://www.valueresearchonline.com/content-assets/images/amc-logo/12160-whiteoak-capital-3__BASE__.png",
  "whiteoak capital": "https://www.valueresearchonline.com/content-assets/images/amc-logo/12160-whiteoak-capital-3__BASE__.png",
  "jm": "https://www.valueresearchonline.com/content-assets/images/amc-logo/19-jm-1__BASE__.png",
  "jm financial": "https://www.valueresearchonline.com/content-assets/images/amc-logo/19-jm-1__BASE__.png",
  
  "baroda": "https://www.valueresearchonline.com/content-assets/images/amc-logo/312-baroda-bnp-paribas-1__BASE__.png",
  "baroda bnp": "https://www.valueresearchonline.com/content-assets/images/amc-logo/312-baroda-bnp-paribas-1__BASE__.png",
  "canara": "https://www.valueresearchonline.com/content-assets/images/amc-logo/8-canara-robeco-801__BASE__.png",
  "canara robeco": "https://www.valueresearchonline.com/content-assets/images/amc-logo/8-canara-robeco-801__BASE__.png",
  "hsbc": "https://www.valueresearchonline.com/content-assets/images/amc-logo/14-hsbc-1__BASE__.png",
  "bandhan": "https://www.valueresearchonline.com/content-assets/images/amc-logo/298-bandhan-3__BASE__.png",
  
  // Newer/Smaller AMCs
  "idfc": "https://www.valueresearchonline.com/content-assets/images/amc-logo/298-bandhan-3__BASE__.png",
  "edelweiss": "https://www.valueresearchonline.com/content-assets/images/amc-logo/339-edelweiss-1__BASE__.png",
  "navi": "https://www.valueresearchonline.com/content-assets/images/amc-logo/8927-navi-2__BASE__.png",
  "union": "https://www.valueresearchonline.com/content-assets/images/amc-logo/9521-union-3__BASE__.png",
  "iifl": "https://www.valueresearchonline.com/content-assets/images/amc-logo/298-bandhan-3__BASE__.png",
  "shriram": "https://www.valueresearchonline.com/content-assets/images/amc-logo/26-shriram-1__BASE__.png",
  "samco": "https://www.valueresearchonline.com/content-assets/images/amc-logo/13005-samco-mf-1__BASE__.png",
  "trust": "https://www.valueresearchonline.com/content-assets/images/amc-logo/298-bandhan-3__BASE__.png",
  "bajaj": "https://www.valueresearchonline.com/content-assets/images/amc-logo/20129-bajaj-finserv-1__BASE__.png",
  "bajaj finserv": "https://www.valueresearchonline.com/content-assets/images/amc-logo/20129-bajaj-finserv-1__BASE__.png",
  "groww": "https://www.valueresearchonline.com/content-assets/images/amc-logo/9655-groww-3__BASE__.png",
  "bank of india": "https://www.valueresearchonline.com/content-assets/images/amc-logo/332-bank-of-india-3__BASE__.png",
  "bob": "https://www.valueresearchonline.com/content-assets/images/amc-logo/5_Baroda_155021_125051.png",
  "pnb": "https://www.valueresearchonline.com/content-assets/images/amc-logo/5_Baroda_155021_125051.png", 
  "punjab national bank": "https://www.valueresearchonline.com/content-assets/images/amc-logo/5_Baroda_155021_125051.png", // TODO: Find correct PNB logo
};

function extractAmcFromSchemeName(schemeName: string): { amcKey: string; amcName: string } | null {
  const lowerName = schemeName.toLowerCase();
  
  // Sort AMC keys by length (descending) to match longer names first
  const sortedAmcs = Object.keys(AMC_LOGOS).sort((a, b) => b.length - a.length);
  
  for (const amcKey of sortedAmcs) {
    if (lowerName.includes(amcKey)) {
      // Extract clean AMC name from original scheme name
      const amcMatch = schemeName.match(new RegExp(`^([^-]*${amcKey}[^-]*)`, 'i'));
      const amcName = amcMatch?.[1]?.trim() || amcKey;
      
      return { amcKey, amcName };
    }
  }
  
  return null;
}

/**
 * Get enrichment data for a scheme
 * Currently returns logo only, more data can be added later
 */
export function getSchemeEnrichment(schemeName: string): SchemeEnrichment {
  const amcData = extractAmcFromSchemeName(schemeName);
  
  if (amcData) {
    return {
      logo: AMC_LOGOS[amcData.amcKey] || null,
      amcName: amcData.amcName,
    };
  }

  return {
    logo: null,
    amcName: null,
  };
}

export function getSchemeLogo(schemeName: string): string | null {
  const enrichment = getSchemeEnrichment(schemeName);
  return enrichment.logo;
}
export function getAllAmcLogos(): Record<string, string> {
  return { ...AMC_LOGOS };
}
export function getAmcCount(): number 
{
  const uniqueLogos = new Set(Object.values(AMC_LOGOS));
  return uniqueLogos.size;
}
