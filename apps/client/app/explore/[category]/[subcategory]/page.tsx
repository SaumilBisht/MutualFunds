"use client"

import { useEffect, useState } from "react"
import { useRouter, useParams } from "next/navigation"
import axios from "axios"
import Link from "next/link"

interface Fund {
  schemeCode: string
  schemeName: string
  netAssetValue?: string
  date?: string
  enrichment?: {
    logo?: string | null
    amcName?: string | null
  }
}

export default function SubcategoryPage() {
  const router = useRouter()
  const params = useParams()
  const category = params.category as string
  const subcategory = params.subcategory as string

  const [funds, setFunds] = useState<Fund[]>([])
  const [loading, setLoading] = useState(true)
  const [sortBy, setSortBy] = useState<"name" | "nav">("name")
  const [searchQuery, setSearchQuery] = useState("")
  const [viewMode, setViewMode] = useState<"grid" | "table">("grid")

  const categoryInfo: Record<string, { title: string }> = {
    equity: { title: "Equity" },
    debt: { title: "Debt" },
    hybrid: { title: "Hybrid" },
    index: { title: "Index" }
  }

  const subcategoryInfo: Record<string, { title: string; description: string }> = {
    "large-cap": { title: "Large Cap", description: "Top 100 companies by market capitalization" },
    "mid-cap": { title: "Mid Cap", description: "101-250 companies by market capitalization" },
    "small-cap": { title: "Small Cap", description: "Beyond 251st company by market cap" },
    "multi-cap": { title: "Multi Cap", description: "Flexible allocation across all market caps" },
    "focused": { title: "Focused", description: "Concentrated portfolio (max 30 stocks)" },
    "sectoral": { title: "Sectoral/Thematic", description: "Sector-specific investments" },
    "elss": { title: "ELSS (Tax Saver)", description: "Tax-saving equity linked savings scheme" },
    "liquid": { title: "Liquid Funds", description: "Very short term (up to 91 days)" },
    "ultra-short": { title: "Ultra Short Duration", description: "3-6 months maturity" },
    "short-duration": { title: "Short Duration", description: "1-3 years maturity" },
    "corporate-bond": { title: "Corporate Bond", description: "High-quality corporate bonds" },
    "banking-psu": { title: "Banking & PSU", description: "Bank and PSU debt securities" },
    "gilt": { title: "Gilt Funds", description: "Government securities only" },
    "conservative": { title: "Conservative Hybrid", description: "10-25% equity allocation" },
    "balanced": { title: "Balanced Hybrid", description: "40-60% equity allocation" },
    "aggressive": { title: "Aggressive Hybrid", description: "65-80% equity allocation" },
    "dynamic": { title: "Dynamic Asset Allocation", description: "Flexible equity/debt mix" },
    "arbitrage": { title: "Arbitrage Funds", description: "Low-risk arbitrage opportunities" },
    "nifty-50": { title: "Nifty 50 Index", description: "Tracks India's top 50 companies" },
    "sensex": { title: "Sensex Index", description: "Tracks BSE top 30 companies" },
    "nifty-next-50": { title: "Nifty Next 50", description: "Next 50 large companies" },
    "nifty-midcap": { title: "Nifty Midcap 150", description: "Mid-cap index tracking" },
    "nifty-smallcap": { title: "Nifty Smallcap 250", description: "Small-cap index tracking" },
  }

  const currentCategory = categoryInfo[category] || categoryInfo.equity
  const currentSubcategory = subcategoryInfo[subcategory] || { title: subcategory, description: "" }

  useEffect(() => {
    fetchFunds()
  }, [category, subcategory])

  const fetchFunds = async () => {
    setLoading(true)
    try {
      const res = await axios.get(`http://localhost:3002/mf/category/${category}?subcategory=${subcategory}&limit=200`)
      setFunds(res.data.data || [])
    } catch (err) {
      console.error("Failed to fetch funds:", err)
    } finally {
      setLoading(false)
    }
  }

  const handleFundClick = (code: string) => {
    router.push(`/dashboard/${code}`)
  }

  // Filter and sort funds
  const filteredFunds = funds
    .filter(fund => 
      searchQuery.length === 0 || 
      fund.schemeName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      fund.enrichment?.amcName?.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === "name") {
        return a.schemeName.localeCompare(b.schemeName)
      } else {
        const navA = parseFloat(a.netAssetValue || "0")
        const navB = parseFloat(b.netAssetValue || "0")
        return navB - navA
      }
    })

  return (
    <main className="min-h-screen bg-white">
      {/* Breadcrumb & Header */}
      <section className="px-4 sm:px-6 lg:px-8 pt-32 pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)]">
        <div className="max-w-7xl mx-auto">
          
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-2 text-sm text-black/80 mb-8">
            <Link href="/explore" className="hover:text-black transition-colors font-medium">Explore</Link>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <Link href={`/explore/${category}`} className="hover:text-black transition-colors font-medium">
              {currentCategory.title}
            </Link>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-black font-bold">{currentSubcategory.title}</span>
          </div>

          {/* Header Content */}
          <div className="flex items-start gap-5">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center text-white font-bold text-3xl shadow-2xl flex-shrink-0">
              {currentCategory.title.charAt(0)}
            </div>
            <div className="flex-1">
              <div className="inline-flex items-center px-3 py-1.5 bg-white/20 backdrop-blur-sm border border-black/30 rounded-full text-xs font-bold text-black uppercase tracking-wider mb-3">
                {currentCategory.title}
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-3 tracking-tight text-black">
                {currentSubcategory.title}
              </h1>
              <p className="text-xl text-black/80 mb-5 leading-relaxed">
                {currentSubcategory.description}
              </p>
              <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm border border-black/20 rounded-full text-sm font-bold text-black">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {funds.length} Funds Available
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        <section className="mb-6">
          <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
            <div className="flex flex-col sm:flex-row gap-4">
              
              <div className="flex-1 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Search funds by name or AMC..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                />
              </div>

              
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600 whitespace-nowrap">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as "name" | "nav")}
                  className="px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm bg-white"
                >
                  <option value="name">Name (A-Z)</option>
                  <option value="nav">NAV (High-Low)</option>
                </select>
              </div>

              
              <div className="flex items-center gap-2 bg-white p-1.5 rounded-xl border-2 border-gray-300">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`px-4 py-2.5 rounded-lg text-sm font-bold transition-all ${
                    viewMode === "grid" 
                      ? "bg-gray-900 text-white shadow-md" 
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                  }`}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                </button>
                <button
                  onClick={() => setViewMode("table")}
                  className={`px-4 py-2.5 rounded-lg text-sm font-bold transition-all ${
                    viewMode === "table" 
                      ? "bg-gray-900 text-white shadow-md" 
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                  }`}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Results Count */}
            <div className="mt-4 flex items-center justify-between text-sm">
              <span className="text-gray-600 font-medium">
                Showing <span className="text-gray-900 font-bold">{filteredFunds.length}</span> of <span className="text-gray-900 font-bold">{funds.length}</span> funds
              </span>
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-1"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  Clear search
                </button>
              )}
            </div>
          </div>
        </section>

       
        {/* Loading State */}
        {loading && (
          <div className="flex items-center justify-center py-32">
            <div className="text-center">
              <div className="animate-spin h-16 w-16 border-4 border-gray-200 border-t-blue-600 rounded-full mx-auto mb-4"></div>
              <p className="text-gray-500 font-semibold">Loading funds...</p>
            </div>
          </div>
        )}

        
        {/* Funds Display */}
        {!loading && (
          <>
            
            {/* Grid View */}
            {viewMode === "grid" && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredFunds.map((fund) => (
                  <div
                    key={fund.schemeCode}
                    onClick={() => handleFundClick(fund.schemeCode)}
                    className="group bg-white rounded-2xl p-6 border-2 border-gray-200 hover:border-blue-600 hover:shadow-2xl transition-all cursor-pointer"
                  >
                    
                    {/* Fund Header */}
                    <div className="flex items-start gap-4 mb-5">
                      <div className="w-16 h-16 rounded-xl bg-gray-100 border-2 border-gray-200 flex items-center justify-center flex-shrink-0 overflow-hidden group-hover:border-blue-600 transition-colors">
                        {fund.enrichment?.logo ? (
                          <img
                            src={fund.enrichment.logo}
                            alt={fund.enrichment.amcName || "AMC"}
                            className="w-full h-full object-contain p-2"
                          />
                        ) : (
                          <span className="text-3xl">💼</span>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">
                          {fund.enrichment?.amcName || "Mutual Fund"}
                        </p>
                        <h3 className="font-bold text-base text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2 leading-snug">
                          {fund.schemeName}
                        </h3>
                      </div>
                    </div>

                    {/* NAV Section */}
                    <div className="flex items-end justify-between pt-5 border-t-2 border-gray-100">
                      <div>
                        <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">Current NAV</p>
                        <p className="text-3xl font-bold text-gray-900">
                          ₹{fund.netAssetValue || "—"}
                        </p>
                      </div>
                      {fund.date && (
                        <p className="text-xs text-gray-400 font-medium">{fund.date}</p>
                      )}
                    </div>

                    {/* View Button */}
                    <button className="mt-5 w-full py-3.5 bg-gray-900 text-white rounded-xl font-bold text-sm hover:bg-blue-600 transition-all flex items-center justify-center gap-2 group-hover:shadow-lg">
                      <span>View Details</span>
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
            )}

            {/* Table View */}
            {viewMode === "table" && (
              <div className="bg-white rounded-2xl border-2 border-gray-200 shadow-md overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-900 text-white border-b-2 border-gray-800">
                      <tr>
                        <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider">
                          Fund Details
                        </th>
                        <th className="px-6 py-4 text-right text-xs font-bold uppercase tracking-wider">
                          NAV
                        </th>
                        <th className="px-6 py-4 text-right text-xs font-bold uppercase tracking-wider">
                          Date
                        </th>
                        <th className="px-6 py-4 text-right text-xs font-bold uppercase tracking-wider">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y-2 divide-gray-100">
                      {filteredFunds.map((fund) => (
                        <tr 
                          key={fund.schemeCode} 
                          className="hover:bg-gray-50 transition-colors cursor-pointer group"
                          onClick={() => handleFundClick(fund.schemeCode)}
                        >
                          <td className="px-6 py-5">
                            <div className="flex items-center gap-4">
                              <div className="w-14 h-14 rounded-xl bg-gray-100 border-2 border-gray-200 flex items-center justify-center flex-shrink-0 overflow-hidden group-hover:border-blue-600 transition-colors">
                                {fund.enrichment?.logo ? (
                                  <img
                                    src={fund.enrichment.logo}
                                    alt={fund.enrichment.amcName || "AMC"}
                                    className="w-full h-full object-contain p-1.5"
                                  />
                                ) : (
                                  <span className="text-2xl">💼</span>
                                )}
                              </div>
                              <div className="min-w-0">
                                <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">
                                  {fund.enrichment?.amcName || "Mutual Fund"}
                                </p>
                                <h3 className="font-bold text-sm text-gray-900 group-hover:text-blue-600 transition-colors">
                                  {fund.schemeName}
                                </h3>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-5 text-right">
                            <p className="text-xl font-bold text-gray-900">
                              ₹{fund.netAssetValue || "—"}
                            </p>
                          </td>
                          <td className="px-6 py-5 text-right">
                            <p className="text-sm text-gray-600 font-medium">
                              {fund.date || "—"}
                            </p>
                          </td>
                          <td className="px-6 py-5 text-right">
                            <button 
                              className="px-5 py-2.5 bg-gray-900 text-white rounded-lg font-bold text-sm hover:bg-blue-600 transition-all"
                              onClick={(e) => {
                                e.stopPropagation()
                                handleFundClick(fund.schemeCode)
                              }}
                            >
                              View
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* No Results */}
            {filteredFunds.length === 0 && (
              <div className="text-center py-20 bg-gray-50 rounded-2xl border-2 border-gray-200">
                <svg className="w-20 h-20 text-gray-300 mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">No funds found</h3>
                <p className="text-gray-600 mb-8 text-lg">Try adjusting your search filters</p>
                <div className="flex items-center justify-center gap-4">
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery("")}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      Clear search
                    </button>
                  )}
                  <Link 
                    href={`/explore/${category}`}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-xl font-semibold hover:bg-gray-800 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Back to {currentCategory.title}
                  </Link>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </main>
  )
}
