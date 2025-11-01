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
  icon: string
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
      icon: "📊",
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
      icon: "📈",
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
      icon: "🔄",
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
      icon: "📉",
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
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      
      <section className="relative mt-[64px] px-4 sm:px-6 lg:px-8 py-8 sm:py-12 bg-white/80 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Explore Mutual Funds by{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Category
              </span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover the perfect mutual funds for your investment goals across different categories
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            {categoryConfig.map((cat) => (
              <button
                key={cat.slug}
                onClick={() => handleCategoryClick(cat.slug)}
                className="px-4 py-2 bg-white border border-gray-200 rounded-full hover:border-blue-400 hover:shadow-md transition-all text-sm font-medium text-gray-700 hover:text-blue-600"
              >
                <span className="mr-2">{cat.icon}</span>
                {cat.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {loading && (
        <div className="flex items-center justify-center py-20">
          <div className="animate-spin h-12 w-12 border-4 border-blue-600 border-t-transparent rounded-full"></div>
        </div>
      )}

      {!loading && categories.map((category) => (
        <section key={category.slug} className="px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="max-w-7xl mx-auto">
            
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 flex items-center gap-3">
                  <span className="text-4xl">{category.icon}</span>
                  {category.title}
                </h2>
                <p className="text-gray-600 mt-1">{category.description}</p>
                <p className="text-sm text-gray-500 mt-1">
                  {category.totalCount}+ funds available
                </p>
              </div>
              <button
                onClick={() => handleCategoryClick(category.slug)}
                className="flex items-center gap-2 px-4 py-2 text-blue-600 hover:text-blue-700 font-medium transition-colors group"
              >
                <span className="hidden sm:inline">View All</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 mb-6">
              {category.subcategories.map((sub) => (
                <button
                  key={sub.slug}
                  onClick={() => router.push(`/explore/${category.slug}/${sub.slug}`)}
                  className="bg-white rounded-xl p-4 border border-gray-200 hover:border-blue-400 hover:shadow-lg transition-all text-left group"
                >
                  <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-1">
                    {sub.name}
                  </h3>
                  <p className="text-xs text-gray-500">{sub.description}</p>
                </button>
              ))}
            </div>

            <div className="relative">
              <div className="overflow-x-auto pb-4 hide-scrollbar">
                <div className="flex gap-4">
                  {category.topFunds.map((fund) => (
                    <div
                      key={fund.schemeCode}
                      onClick={() => handleFundClick(fund.schemeCode)}
                      className="min-w-[280px] sm:min-w-[320px] bg-white rounded-xl p-5 border border-gray-200 hover:border-blue-400 hover:shadow-xl transition-all cursor-pointer group flex-shrink-0"
                    >
                      
                      <div className="flex items-start gap-3 mb-4">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center flex-shrink-0 overflow-hidden">
                          {fund.enrichment?.logo ? (
                            <img
                              src={fund.enrichment.logo}
                              alt={fund.enrichment.amcName || "Fund"}
                              className="w-full h-full object-contain p-1"
                            />
                          ) : (
                            <span className="text-2xl">💼</span>
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs text-gray-500 mb-1">
                            {fund.enrichment?.amcName || "Mutual Fund"}
                          </p>
                          <h4 className="font-semibold text-sm text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                            {fund.schemeName}
                          </h4>
                        </div>
                      </div>

                      {/* NAV */}
                      {fund.netAssetValue && (
                        <div className="pt-3 border-t border-gray-200">
                          <p className="text-xs text-gray-500 mb-1">Current NAV</p>
                          <p className="text-xl font-bold text-gray-900">
                            ₹{fund.netAssetValue}
                          </p>
                        </div>
                      )}

                      <button className="mt-4 w-full py-2 bg-blue-50 text-blue-600 rounded-lg font-medium text-sm hover:bg-blue-100 transition-colors">
                        View Details →
                      </button>
                    </div>
                  ))}

                  <button
                    onClick={() => handleCategoryClick(category.slug)}
                    className="min-w-[150px] bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl p-5 flex flex-col items-center justify-center text-white hover:shadow-xl transition-all flex-shrink-0"
                  >
                    <svg className="w-8 h-8 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                    <span className="font-semibold">View All</span>
                    <span className="text-sm opacity-90">{category.totalCount}+ Funds</span>
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
