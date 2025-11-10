"use client"

import { useEffect, useState } from "react"
import { useSession, signIn } from "next-auth/react"
import { useRouter } from "next/navigation"
import axios from "axios"

interface WatchlistItem {
  id: string
  schemeCode: string
  amcCode: string
  fundName: string
  category: string | null
  currentNav: number | null
  addedAt: string
}

export default function WatchlistPage() {
  const router = useRouter()
  const { data: session, status } = useSession()
  const [watchlist, setWatchlist] = useState<WatchlistItem[]>([])
  const [loading, setLoading] = useState(true)
  const [removing, setRemoving] = useState<string | null>(null)

  useEffect(() => {
    if (status === "authenticated") {
      fetchWatchlist()
    } else if (status === "unauthenticated") {
      setLoading(false)
    }
  }, [status])

  const fetchWatchlist = async () => {
    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/watchlist`, {
        withCredentials: true,
      })
      setWatchlist(res.data.watchlist || [])
    } catch (error) {
      console.error("Error fetching watchlist:", error)
    } finally {
      setLoading(false)
    }
  }

  const removeFromWatchlist = async (id: string) => {
    setRemoving(id)
    try {
      await axios.delete(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/watchlist/${id}`, {
        withCredentials: true,
      })
      setWatchlist((prev) => prev.filter((item) => item.id !== id))
    } catch (error) {
      console.error("Error removing from watchlist:", error)
      alert("Failed to remove from watchlist")
    } finally {
      setRemoving(null)
    }
  }

  const goToFund = (schemeCode: string) => {
    router.push(`/dashboard/${schemeCode}`)
  }

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 pt-16 pb-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center h-64">
            <div className="animate-spin h-12 w-12 border-4 border-blue-600 border-t-transparent rounded-full"></div>
          </div>
        </div>
      </div>
    )
  }

  // Not signed in
  if (status === "unauthenticated") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 pt-16 pb-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-12 text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Sign in to View Your Watchlist</h1>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              Track your favorite mutual funds and get quick access to their performance metrics.
            </p>
            <button
              onClick={() => signIn("google", { callbackUrl: "/watchlist" })}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium hover:shadow-lg transition-all inline-flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.545 10.239v3.821h5.445c-.712 2.315-2.647 3.972-5.445 3.972a6.033 6.033 0 110-12.064c1.498 0 2.866.549 3.921 1.453l2.814-2.814A9.969 9.969 0 0012.545 2C7.021 2 2.543 6.477 2.543 12s4.478 10 10.002 10c8.396 0 10.249-7.85 9.426-11.748l-9.426-.013z" />
              </svg>
              Sign in with Google
            </button>
          </div>
        </div>
      </div>
    )
  }

  // Empty watchlist
  if (watchlist.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 pt-16 pb-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-12 text-center">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Your Watchlist is Empty</h1>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              Start adding mutual funds to your watchlist to track their performance and make informed investment decisions.
            </p>
            <button
              onClick={() => router.push("/explore")}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium hover:shadow-lg transition-all inline-flex items-center gap-2"
            >
              Explore Mutual Funds
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    )
  }

  // Watchlist with items
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 pt-16 pb-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
              </svg>
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-900">Your Watchlist</h1>
              <p className="text-gray-600 mt-1">{watchlist.length} {watchlist.length === 1 ? 'fund' : 'funds'} tracked</p>
            </div>
          </div>
        </div>

        {/* Watchlist Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {watchlist.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
            >
              <div className="p-6">
                {/* Fund Name */}
                <div className="mb-4">
                  <h3 className="text-lg font-bold text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors mb-1">
                    {item.fundName}
                  </h3>
                  {item.category && (
                    <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 text-xs font-medium rounded-full">
                      {item.category}
                    </span>
                  )}
                </div>

                {/* NAV */}
                {item.currentNav && (
                  <div className="mb-4">
                    <p className="text-sm text-gray-500 mb-1">Current NAV</p>
                    <p className="text-2xl font-bold text-gray-900">₹{item.currentNav.toFixed(2)}</p>
                  </div>
                )}

                {/* Added Date */}
                <div className="mb-4">
                  <p className="text-xs text-gray-500">
                    Added {new Date(item.addedAt).toLocaleDateString('en-IN', { 
                      day: 'numeric', 
                      month: 'short', 
                      year: 'numeric' 
                    })}
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <button
                    onClick={() => goToFund(item.schemeCode)}
                    className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg transition-all text-sm"
                  >
                    View Details
                  </button>
                  <button
                    onClick={() => removeFromWatchlist(item.id)}
                    disabled={removing === item.id}
                    className="px-4 py-2 border border-red-200 text-red-600 rounded-lg font-medium hover:bg-red-50 transition-all text-sm disabled:opacity-50"
                  >
                    {removing === item.id ? (
                      <div className="animate-spin h-4 w-4 border-2 border-red-600 border-t-transparent rounded-full"></div>
                    ) : (
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              {/* Hover Accent */}
              <div className="h-1 bg-gradient-to-r from-blue-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
