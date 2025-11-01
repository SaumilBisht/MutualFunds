"use client"

import { useEffect, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import axios from "axios"
import Link from "next/link"

interface SearchResult {
  schemeCode: string
  schemeName: string
  category?: string
  netAssetValue?: string
  date?: string
}

export default function SearchPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const query = searchParams.get("q") || ""
  
  const [results, setResults] = useState<SearchResult[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (query) {
      searchFunds(query)
    }
  }, [query])

  const searchFunds = async (searchQuery: string) => {
    setLoading(true)
    setError(null)
    try {
      const res = await axios.get(`http://localhost:3002/mf/search?q=${encodeURIComponent(searchQuery)}&limit=200`)
      if (res.data.success) {
        setResults(res.data.data)
      }
    } catch (err) {
      console.error("Search failed:", err)
      setError("Failed to search mutual funds")
    } finally {
      setLoading(false)
    }
  }

  const handleFundClick = (code: string) => {
    router.push(`/dashboard/${code}`)
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <section className="relative mt-[64px] px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-7xl mx-auto">
          
          
          <div className="mb-6">
            <Link 
              href="/dashboard"
              className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 mb-4 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Dashboard
            </Link>
            
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
              Search Results
            </h1>
            <p className="text-gray-600">
              {loading ? (
                "Searching..."
              ) : (
                <>
                  Found <span className="font-semibold text-blue-600">{results.length}</span> result{results.length !== 1 ? 's' : ''} for "{query}"
                </>
              )}
            </p>
          </div>

          {loading && (
            <div className="flex items-center justify-center py-12">
              <div className="animate-spin h-12 w-12 border-4 border-blue-600 border-t-transparent rounded-full"></div>
            </div>
          )}

          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-600">
              {error}
            </div>
          )}

          {!loading && !error && results.length === 0 && (
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-12 text-center">
              <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No results found</h3>
              <p className="text-gray-600 mb-4">
                Try different keywords or browse all funds
              </p>
              <Link 
                href="/explore"
                className="inline-block px-6 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg transition-all"
              >
                Browse All Funds
              </Link>
            </div>
          )}

          {!loading && !error && results.length > 0 && (
            <div className="grid grid-cols-1 gap-4">
              {results.map((fund) => (
                <div
                  key={fund.schemeCode}
                  onClick={() => handleFundClick(fund.schemeCode)}
                  className="bg-white rounded-xl p-4 sm:p-6 border border-gray-200 hover:border-blue-400 hover:shadow-lg transition-all cursor-pointer group"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base sm:text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-1">
                        {fund.schemeName}
                      </h3>
                      <div className="flex flex-wrap items-center gap-2 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
                          </svg>
                          Code: {fund.schemeCode}
                        </span>
                        {fund.category && (
                          <>
                            <span className="text-gray-300">•</span>
                            <span className="px-2 py-0.5 bg-gray-100 text-gray-700 rounded-full text-xs">
                              {fund.category}
                            </span>
                          </>
                        )}
                      </div>
                    </div>
                    
                    {fund.netAssetValue && (
                      <div className="flex sm:flex-col items-center sm:items-end gap-2 sm:gap-1">
                        <div className="text-right">
                          <p className="text-sm text-gray-500">NAV</p>
                          <p className="text-xl font-bold text-gray-900">₹{fund.netAssetValue}</p>
                        </div>
                        {fund.date && (
                          <p className="text-xs text-gray-400">{fund.date}</p>
                        )}
                      </div>
                    )}
                    
                    <button className="sm:ml-4 px-4 py-2 bg-blue-50 text-blue-600 rounded-lg font-medium hover:bg-blue-100 transition-colors text-sm">
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {!loading && results.length >= 200 && (
            <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg text-center">
              <p className="text-sm text-blue-800">
                Showing first 200 results. Try refining your search for more specific results.
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}
