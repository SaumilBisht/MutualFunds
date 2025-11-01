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

  const categoryInfo: Record<string, { title: string; icon: string; description: string; subcategories: Subcategory[] }> = {
    equity: {
      title: "Equity Funds",
      icon: "📊",
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
      icon: "📈",
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
      icon: "🔄",
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
      icon: "📉",
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
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      
      <section className="relative mt-[64px] px-4 sm:px-6 lg:px-8 py-8 bg-white/80 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <Link 
            href="/explore"
            className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 mb-6 transition-colors group"
          >
            <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Explore
          </Link>

          <div className="flex items-center gap-4 mb-4">
            <span className="text-5xl">{currentCategory.icon}</span>
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
                {currentCategory.title}
              </h1>
              <p className="text-gray-600 mt-1">
                {currentCategory.description}
              </p>
              <p className="text-sm text-blue-600 font-medium mt-2">
                {funds.length}+ funds available
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
       
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Browse by Type</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {currentCategory.subcategories.map((sub) => (
              <button
                key={sub.slug}
                onClick={() => handleSubcategoryClick(sub.slug)}
                className="bg-white rounded-xl p-5 border border-gray-200 hover:border-blue-400 hover:shadow-xl transition-all text-left group"
              >
                <h3 className="font-semibold text-base text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                  {sub.name}
                </h3>
                <p className="text-xs text-gray-500 mb-3">{sub.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-blue-600 font-medium">View Funds</span>
                  <svg className="w-4 h-4 text-gray-400 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </button>
            ))}
          </div>
        </section>

        
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
            </div>

            <div className="mt-3 text-sm text-gray-600">
              Showing {filteredFunds.length} of {funds.length} funds
            </div>
          </div>
        </section>

        
        {loading && (
          <div className="flex items-center justify-center py-20">
            <div className="animate-spin h-12 w-12 border-4 border-blue-600 border-t-transparent rounded-full"></div>
          </div>
        )}

        
        {!loading && (
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">All {currentCategory.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredFunds.map((fund) => (
                <div
                  key={fund.schemeCode}
                  onClick={() => handleFundClick(fund.schemeCode)}
                  className="bg-white rounded-xl p-5 border border-gray-200 hover:border-blue-400 hover:shadow-xl transition-all cursor-pointer group"
                >
                  
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center flex-shrink-0 overflow-hidden shadow-sm">
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
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-gray-500 font-medium mb-1">
                        {fund.enrichment?.amcName || "Mutual Fund"}
                      </p>
                      <h3 className="font-semibold text-sm text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2 leading-tight">
                        {fund.schemeName}
                      </h3>
                    </div>
                  </div>

                 
                  <div className="flex items-end justify-between pt-4 border-t border-gray-200">
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Current NAV</p>
                      <p className="text-2xl font-bold text-gray-900">
                        ₹{fund.netAssetValue || "—"}
                      </p>
                    </div>
                    {fund.date && (
                      <p className="text-xs text-gray-400">{fund.date}</p>
                    )}
                  </div>

                  
                  <button className="mt-4 w-full py-2.5 bg-blue-50 text-blue-600 rounded-lg font-medium text-sm hover:bg-blue-100 transition-colors flex items-center justify-center gap-2">
                    <span>View Details</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>

            {filteredFunds.length === 0 && !loading && (
              <div className="text-center py-20">
                <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">No funds found</h3>
                <p className="text-gray-600">Try adjusting your search or filters</p>
              </div>
            )}
          </section>
        )}
      </div>
    </main>
  )
}
