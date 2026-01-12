"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import axios from "axios"

interface Fund {
  schemeCode: string
  schemeName: string
  netAssetValue?: string
  enrichment?: {
    logo?: string | null
    amcName?: string | null
  }
}

interface CategoryData {
  title: string
  slug: string
  description: string
  subcategories: Array<{
    name: string
    slug: string
    description: string
  }>
  topFunds: Fund[]
  totalCount: number
}

export default function ExplorePage() {
  const router = useRouter()
  const [categories, setCategories] = useState<CategoryData[]>([])
  const [loading, setLoading] = useState(true)

  const categoryConfig = [
    {
      title: "Equity Funds",
      slug: "equity",
      description: "Invest in stocks for long-term wealth creation",
      subcategories: [
        { name: "Large Cap", slug: "large-cap", description: "Top 100 companies" },
        { name: "Mid Cap", slug: "mid-cap", description: "101-250 companies" },
        { name: "Small Cap", slug: "small-cap", description: "Beyond 251st company" },
        { name: "Multi Cap", slug: "multi-cap", description: "Mix of all caps" },
      ]
    },
    {
      title: "Debt Funds",
      slug: "debt",
      description: "Fixed income securities for stable returns",
      subcategories: [
        { name: "Liquid", slug: "liquid", description: "Very short term" },
        { name: "Short Duration", slug: "short-duration", description: "1-3 years" },
        { name: "Corporate Bond", slug: "corporate-bond", description: "High-quality bonds" },
      ]
    },
    {
      title: "Hybrid Funds",
      slug: "hybrid",
      description: "Balanced mix of equity and debt",
      subcategories: [
        { name: "Conservative", slug: "conservative", description: "More debt" },
        { name: "Balanced", slug: "balanced", description: "Equal mix" },
        { name: "Aggressive", slug: "aggressive", description: "More equity" },
      ]
    },
    {
      title: "Index Funds",
      slug: "index",
      description: "Track market indices passively",
      subcategories: [
        { name: "Nifty 50", slug: "nifty-50", description: "Top 50 companies" },
        { name: "Sensex", slug: "sensex", description: "BSE top 30" },
        { name: "Nifty Next 50", slug: "nifty-next-50", description: "Next 50 large" },
      ]
    }
  ]

  useEffect(() => {
    fetchCategoriesData()
  }, [])

  const fetchCategoriesData = async () => {
    setLoading(true)
    try {
      const categoriesData = await Promise.all(
        categoryConfig.map(async (config) => {
          const res = await axios.get(`http://localhost:3002/mf/category/${config.slug}?limit=5`)
          return {
            ...config,
            topFunds: res.data.data || [],
            totalCount: res.data.meta?.total || 0
          }
        })
      )
      setCategories(categoriesData)
    } catch (err) {
      console.error("Failed to fetch categories:", err)
    } finally {
      setLoading(false)
    }
  }

  const handleFundClick = (code: string) => {
    router.push(`/dashboard/${code}`)
  }

  const handleCategoryClick = (slug: string) => {
    router.push(`/explore/${slug}`)
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 pt-32 pb-12 sm:pb-16 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#F0F4FF_100%)]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm border border-black rounded-full text-sm font-medium text-black mb-6">
              Investment Categories
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 tracking-tight text-black">
              Explore Mutual Funds
            </h1>
            <p className="text-xl text-black/80 max-w-3xl mx-auto leading-relaxed">
              Browse through our curated collection of mutual funds across different categories. Find the perfect investment match for your financial goals.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 mt-12">
            {categoryConfig.map((cat) => (
              <button
                key={cat.slug}
                onClick={() => handleCategoryClick(cat.slug)}
                className="group px-6 py-3 bg-black backdrop-blur-sm border rounded-xl  hover:border-black transition-all text-sm font-medium text-white  flex items-center gap-2 border-black hover:text-white"
              >
                <span>{cat.title}</span>
                <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Loading State */}
      {loading && (
        <div className="flex items-center justify-center py-32">
          <div className="text-center">
            <div className="animate-spin h-16 w-16 border-4 border-gray-200 border-t-blue-600 rounded-full mx-auto mb-4"></div>
            <p className="text-gray-500 font-medium">Loading categories...</p>
          </div>
        </div>
      )}

      {/* Categories Section */}
      {!loading && categories.map((category, idx) => (
        <section key={category.slug} className={`px-4 sm:px-6 lg:px-8 py-12 sm:py-16 ${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
          <div className="max-w-7xl mx-auto">
            
            {/* Category Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 pb-6 border-b border-gray-200">
              <div className="flex items-start gap-4 mb-4 sm:mb-0">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                  {category.title.charAt(0)}
                </div>
                <div>
                  <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
                    {category.title}
                  </h2>
                  <p className="text-gray-600 text-lg">{category.description}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                      {category.totalCount}+ Funds
                    </span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => handleCategoryClick(category.slug)}
                className="group flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-600 font-medium transition-all shadow-md hover:shadow-xl"
              >
                <span>View All Funds</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>

            {/* Subcategories Grid */}
            <div className="mb-10">
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Browse by Type</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {category.subcategories.map((sub) => (
                  <button
                    key={sub.slug}
                    onClick={() => router.push(`/explore/${category.slug}/${sub.slug}`)}
                    className="group bg-white rounded-xl p-5 border-2 border-gray-200 hover:border-blue-600 hover:shadow-lg transition-all text-left"
                  >
                    <h3 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-2 text-base">
                      {sub.name}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{sub.description}</p>
                    <div className="mt-3 flex items-center text-blue-600 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                      <span>Explore</span>
                      <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Top Funds Carousel */}
            <div className="relative">
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Top Performing Funds</h3>
              <div className="overflow-x-auto pb-4 hide-scrollbar">
                <div className="flex gap-5">
                  {category.topFunds.map((fund) => (
                    <div
                      key={fund.schemeCode}
                      onClick={() => handleFundClick(fund.schemeCode)}
                      className="min-w-[300px] sm:min-w-[340px] bg-white rounded-2xl p-6 border-2 border-gray-200 hover:border-blue-600 hover:shadow-2xl transition-all cursor-pointer group flex-shrink-0"
                    >
                      
                      <div className="flex items-start gap-4 mb-5">
                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center flex-shrink-0 overflow-hidden border border-gray-300">
                          {fund.enrichment?.logo ? (
                            <img
                              src={fund.enrichment.logo}
                              alt={fund.enrichment.amcName || "Fund"}
                              className="w-full h-full object-contain p-1.5"
                            />
                          ) : (
                            <span className="text-2xl">💼</span>
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
                            {fund.enrichment?.amcName || "Mutual Fund"}
                          </p>
                          <h4 className="font-bold text-sm text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2 leading-tight">
                            {fund.schemeName}
                          </h4>
                        </div>
                      </div>

                      {/* NAV Display */}
                      {fund.netAssetValue && (
                        <div className="pt-4 border-t-2 border-gray-100">
                          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Current NAV</p>
                          <p className="text-2xl font-bold text-gray-900">
                            ₹{fund.netAssetValue}
                          </p>
                        </div>
                      )}

                      <button className="mt-5 w-full py-3 bg-blue-600 text-white rounded-xl font-semibold text-sm hover:bg-blue-600 transition-all group-hover:shadow-lg">
                        View Details
                      </button>
                    </div>
                  ))}

                  {/* View All Card */}
                  <button
                    onClick={() => handleCategoryClick(category.slug)}
                    className="min-w-[180px] bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-6 flex flex-col items-center justify-center text-white hover:from-blue-700 hover:to-blue-900 hover:shadow-2xl transition-all flex-shrink-0 border-2 border-blue-700"
                  >
                    <svg className="w-12 h-12 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                    <span className="font-bold text-lg mb-1">View All</span>
                    <span className="text-sm text-blue-200">{category.totalCount}+ Funds</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      <style jsx>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </main>
  )
}
