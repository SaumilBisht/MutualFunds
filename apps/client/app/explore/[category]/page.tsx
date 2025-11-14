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

interface Subcategory {
  name: string
  slug: string
  description: string
  count?: number
}

export default function CategoryPage() {
  const router = useRouter()
  const params = useParams()
  const category = params.category as string

  const [funds, setFunds] = useState<Fund[]>([])
  const [loading, setLoading] = useState(true)
  const [sortBy, setSortBy] = useState<"name" | "nav">("name")
  const [searchQuery, setSearchQuery] = useState("")

  const categoryInfo: Record<string, { title: string; description: string; subcategories: Subcategory[] }> = {
    equity: {
      title: "Equity Funds",
      description: "Invest in stocks for long-term wealth creation and capital appreciation",
      subcategories: [
        { name: "Large Cap", slug: "large-cap", description: "Top 100 companies by market cap" },
        { name: "Mid Cap", slug: "mid-cap", description: "101-250 companies by market cap" },
        { name: "Small Cap", slug: "small-cap", description: "Beyond 251st company" },
        { name: "Multi Cap", slug: "multi-cap", description: "Flexible allocation across all caps" },
        { name: "Focused", slug: "focused", description: "Concentrated portfolio of stocks" },
        { name: "Sectoral", slug: "sectoral", description: "Sector-specific investments" },
        { name: "ELSS", slug: "elss", description: "Tax-saving equity funds" },
      ]
    },
    debt: {
      title: "Debt Funds",
      description: "Fixed income securities offering stable and predictable returns",
      subcategories: [
        { name: "Liquid", slug: "liquid", description: "Very short term (up to 91 days)" },
        { name: "Ultra Short Duration", slug: "ultra-short", description: "3-6 months maturity" },
        { name: "Short Duration", slug: "short-duration", description: "1-3 years maturity" },
        { name: "Corporate Bond", slug: "corporate-bond", description: "High-quality corporate bonds" },
        { name: "Banking & PSU", slug: "banking-psu", description: "Bank and PSU bonds" },
        { name: "Gilt", slug: "gilt", description: "Government securities" },
      ]
    },
    hybrid: {
      title: "Hybrid Funds",
      description: "Balanced mix of equity and debt for diversified exposure",
      subcategories: [
        { name: "Conservative", slug: "conservative", description: "10-25% equity allocation" },
        { name: "Balanced", slug: "balanced", description: "40-60% equity allocation" },
        { name: "Aggressive", slug: "aggressive", description: "65-80% equity allocation" },
        { name: "Dynamic Asset", slug: "dynamic", description: "Flexible equity/debt mix" },
        { name: "Arbitrage", slug: "arbitrage", description: "Low-risk arbitrage opportunities" },
      ]
    },
    index: {
      title: "Index Funds",
      description: "Passive funds that track market indices with low expense ratios",
      subcategories: [
        { name: "Nifty 50", slug: "nifty-50", description: "Tracks top 50 companies" },
        { name: "Sensex", slug: "sensex", description: "Tracks BSE top 30" },
        { name: "Nifty Next 50", slug: "nifty-next-50", description: "Next 50 large companies" },
        { name: "Nifty Midcap 150", slug: "nifty-midcap", description: "Mid-cap index" },
        { name: "Nifty Smallcap 250", slug: "nifty-smallcap", description: "Small-cap index" },
      ]
    }
  }

  const currentCategory = categoryInfo[category] || categoryInfo.equity

  useEffect(() => {
    fetchFunds()
  }, [category])

  const fetchFunds = async () => {
    setLoading(true)
    try {
      const res = await axios.get(`http://localhost:3002/mf/category/${category}?limit=100`)
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

  const handleSubcategoryClick = (slug: string) => {
    router.push(`/explore/${category}/${slug}`)
  }

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
          <Link 
            href="/explore"
            className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white mb-8 transition-colors group"
          >
            <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Explore
          </Link>

          <div className="flex items-start gap-5">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center text-white font-bold text-3xl shadow-2xl flex-shrink-0">
              {currentCategory.title.charAt(0)}
            </div>
            <div className="flex-1">
              <h1 className="text-4xl sm:text-5xl font-bold mb-3 tracking-tight text-white">
                {currentCategory.title}
              </h1>
              <p className="text-xl text-white/80 mb-5 leading-relaxed">
                {currentCategory.description}
              </p>
              <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-sm font-bold text-white">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {funds.length}+ Funds Available
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
       
        {/* Subcategories Section */}
        <section className="mb-14">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Browse by Type</h2>
            <span className="text-sm text-gray-500">{currentCategory.subcategories.length} types</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {currentCategory.subcategories.map((sub) => (
              <button
                key={sub.slug}
                onClick={() => handleSubcategoryClick(sub.slug)}
                className="group bg-white rounded-2xl p-6 border-2 border-gray-200 hover:border-blue-600 hover:shadow-xl transition-all text-left"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-bold text-lg text-gray-900 group-hover:text-blue-600 transition-colors">
                    {sub.name}
                  </h3>
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">{sub.description}</p>
                <div className="flex items-center text-blue-600 text-sm font-semibold">
                  <span>View Funds</span>
                </div>
              </button>
            ))}
          </div>
        </section>

        
        {/* Search & Filter Section */}
        <section className="mb-10">
          <div className="bg-gray-50 rounded-2xl p-6 border-2 border-gray-200">
            <div className="flex flex-col lg:flex-row gap-4">
              
              {/* Search Bar */}
              <div className="flex-1 relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Search by fund name or AMC..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3.5 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm bg-white font-medium"
                />
              </div>

              {/* Sort Dropdown */}
              <div className="flex items-center gap-3 bg-white rounded-xl px-4 py-2 border-2 border-gray-300">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" />
                </svg>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as "name" | "nav")}
                  className="py-1.5 focus:outline-none text-sm bg-transparent font-semibold text-gray-700 cursor-pointer"
                >
                  <option value="name">Sort by Name</option>
                  <option value="nav">Sort by NAV</option>
                </select>
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

        
        {/* Funds Grid */}
        {!loading && (
          <section>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">All {currentCategory.title}</h2>
            </div>
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

            {/* No Results */}
            {filteredFunds.length === 0 && !loading && (
              <div className="text-center py-20 bg-gray-50 rounded-2xl border-2 border-gray-200">
                <svg className="w-20 h-20 text-gray-300 mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">No funds found</h3>
                <p className="text-gray-600 mb-8 text-lg">Try adjusting your search or filters</p>
                <button
                  onClick={() => setSearchQuery("")}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors"
                >
                  Clear search
                </button>
              </div>
            )}
          </section>
        )}
      </div>
    </main>
  )
}
