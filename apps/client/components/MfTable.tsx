"use client"
import axios from "axios"
import { useEffect, useState } from "react"
import { useSession } from "next-auth/react"
import Link from "next/link"

interface Scheme {
  schemeCode: string
  schemeName: string
  category?: string
  nav?: number
}

export default function MfTable() {
  const { data: session } = useSession()
  const [schemes, setSchemes] = useState<Scheme[]>([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [total, setTotal] = useState(0)
  const [watchlistIds, setWatchlistIds] = useState<Set<string>>(new Set())
  const [togglingWatchlist, setTogglingWatchlist] = useState<string | null>(null)
  const limit = 20

  const fetchSchemes = async (pageNum: number) => {
  setLoading(true)
  try {
    const res = await axios.get(`http://localhost:3002/mf/schemes?page=${pageNum}&limit=${limit}`)
    const data = res.data
    if (data.success) {
      setSchemes(data.data)
      setTotal(data.meta.total)
    }
  } catch (err) {
    console.error("Failed to fetch schemes", err)
  } finally {
    setLoading(false)
  }
}

  const fetchWatchlistStatus = async () => {
    if (!session) return
    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/watchlist`, {
        withCredentials: true,
      })
      const watchlistSchemes = new Set<string>(res.data.watchlist.map((item: any) => item.schemeCode))
      setWatchlistIds(watchlistSchemes)
    } catch (err) {
      console.error("Failed to fetch watchlist", err)
    }
  }

  const toggleWatchlist = async (e: React.MouseEvent, scheme: Scheme) => {
    e.preventDefault() // Prevent Link navigation
    e.stopPropagation()
    
    if (!session) {
      alert("Please sign in to add to watchlist")
      return
    }

    const isWatchlisted = watchlistIds.has(scheme.schemeCode)
    setTogglingWatchlist(scheme.schemeCode)

    try {
      if (isWatchlisted) {
        // Find the watchlist item ID
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/watchlist/check/${scheme.schemeCode}`,
          { withCredentials: true }
        )
        if (res.data.watchlistItem) {
          await axios.delete(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/watchlist/${res.data.watchlistItem.id}`,
            { withCredentials: true }
          )
          setWatchlistIds((prev) => {
            const next = new Set(prev)
            next.delete(scheme.schemeCode)
            return next
          })
        }
      } else {
        await axios.post(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/watchlist/add`,
          {
            schemeCode: scheme.schemeCode,
            amcCode: scheme.schemeCode.slice(0, 6), // Assuming first 6 chars are AMC code
            fundName: scheme.schemeName,
            category: scheme.category,
            currentNav: scheme.nav,
          },
          { withCredentials: true }
        )
        setWatchlistIds((prev) => new Set(prev).add(scheme.schemeCode))
      }
    } catch (err: any) {
      console.error("Failed to toggle watchlist", err)
      if (err.response?.data?.error === "Fund already in watchlist") {
        setWatchlistIds((prev) => new Set(prev).add(scheme.schemeCode))
      } else {
        alert("Failed to update watchlist")
      }
    } finally {
      setTogglingWatchlist(null)
    }
  }

  useEffect(() => {
    fetchSchemes(page)
  }, [page])

  useEffect(() => {
    if (session) {
      fetchWatchlistStatus()
    }
  }, [session])

  return (
    <div className="flex flex-col gap-6 p-6">

      {loading ? (
        <div className="flex flex-col items-center justify-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          <p className="mt-4 text-gray-500">Loading mutual funds...</p>
        </div>
      ) : schemes.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20">
          <svg className="w-16 h-16 text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <p className="text-gray-500 text-lg font-medium">No mutual funds found</p>
          <p className="text-gray-400 text-sm mt-1">Try adjusting your search</p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {schemes.map((scheme) => {
              const isWatchlisted = watchlistIds.has(scheme.schemeCode)
              const isToggling = togglingWatchlist === scheme.schemeCode
              
              return (
                <Link
                  href={`/dashboard/${scheme.schemeCode}`}
                  key={scheme.schemeCode}
                  className="group relative p-5 border border-gray-200 rounded-xl hover:shadow-lg hover:border-blue-300 transition-all duration-300 bg-white overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Watchlist Button */}
                  {session && (
                    <button
                      onClick={(e) => toggleWatchlist(e, scheme)}
                      disabled={isToggling}
                      className="absolute top-3 right-3 z-20 p-2 rounded-full hover:bg-gray-100 transition-colors"
                      title={isWatchlisted ? "Remove from watchlist" : "Add to watchlist"}
                    >
                      {isToggling ? (
                        <div className="animate-spin h-5 w-5 border-2 border-blue-600 border-t-transparent rounded-full"></div>
                      ) : isWatchlisted ? (
                        <svg className="w-5 h-5 text-yellow-500 fill-current" viewBox="0 0 24 24">
                          <path d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                        </svg>
                      ) : (
                        <svg className="w-5 h-5 text-gray-400 hover:text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                        </svg>
                      )}
                    </button>
                  )}
                  
                  <div className="relative z-10">
                    {scheme.category && (
                      <span className="inline-block px-3 py-1 text-xs font-medium text-blue-700 bg-blue-100 rounded-full mb-3">
                        {scheme.category}
                      </span>
                    )}
                    
                    <h3 className="text-base font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors pr-8">
                      {scheme.schemeName}
                    </h3>
                    
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-500">Code:</span>
                        <span className="font-mono text-gray-700 text-xs">{scheme.schemeCode}</span>
                      </div>
                      
                      {scheme.nav && (
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500">NAV:</span>
                          <span className="text-lg font-bold text-green-600">₹{scheme.nav}</span>
                        </div>
                      )}
                    </div>
                    
                    <div className="mt-4 flex items-center text-sm text-blue-600 font-medium group-hover:translate-x-1 transition-transform">
                      View Details
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-6 border-t">
            <p className="text-sm text-gray-600">
              Showing <span className="font-semibold text-gray-900">{(page - 1) * limit + 1}</span> to{" "}
              <span className="font-semibold text-gray-900">{Math.min(page * limit, total)}</span> of{" "}
              <span className="font-semibold text-gray-900">{total}</span> results
            </p>
            
            <div className="flex items-center gap-2">
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page === 1}
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Previous
              </button>
              
              <span className="px-4 py-2 text-sm font-medium text-gray-700 bg-blue-50 border border-blue-200 rounded-lg">
                Page {page} of {Math.ceil(total / limit) || 1}
              </span>
              
              <button
                onClick={() => setPage((p) => p + 1)}
                disabled={page * limit >= total}
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Next
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
