"use client"
import { useParams } from "next/navigation"
import axios from "axios"
import { useEffect, useState } from "react"
import { useSession } from "next-auth/react"
import Link from "next/link"
import { NavChart } from "../../../components/NavChart"
import { SipCalculator } from "../../../components/SipCalculator"
import { InvestNow } from "../../../components/InvestNow"

interface Scheme {
  schemeCode: string
  schemeName: string
  netAssetValue?: string
  date?: string
  category?: string
  enrichment?: {
    name?: string | null
    logo?: string | null
    returns?: { oneY?: string | null; threeY?: string | null; fiveY?: string | null }
    expenseRatio?: string | null
    aum?: string | null
    risk?: string | null
    fundManager?: string | null
    holdings?: Array<{ name: string; allocation?: string }>
    url?: string | null
  }
}

export default function SchemeDetails() {
  const { code } = useParams()
  const { data: session } = useSession()
  const [scheme, setScheme] = useState<Scheme | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [navReturns, setNavReturns] = useState<{
    sixMonths: string | null;
    oneYear: string | null;
    threeYears: string | null;
    fiveYears: string | null;
  } | null>(null)
  const [isWatchlisted, setIsWatchlisted] = useState(false)
  const [togglingWatchlist, setTogglingWatchlist] = useState(false)
  const [watchlistItemId, setWatchlistItemId] = useState<string | null>(null)

  useEffect(() => {
    const fetchScheme = async () => {
      setLoading(true)
      try {
        const res = await axios.post(`http://localhost:3002/mf/schemes/${code}`)
        const data = res.data
        if (data.success) {
          setScheme(data.data)
        } else {
          setError("Scheme not found.")
        }
      } catch (err) {
        console.error("Failed to fetch scheme:", err)
        setError("Unable to fetch scheme details.")
      } finally {
        setLoading(false)
      }
    }

    if (code) fetchScheme()
  }, [code])

  useEffect(() => {
    const checkWatchlistStatus = async () => {
      if (!session || !code) return
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/watchlist/check/${code}`,
          { withCredentials: true }
        )
        setIsWatchlisted(res.data.isWatchlisted)
        if (res.data.watchlistItem) {
          setWatchlistItemId(res.data.watchlistItem.id)
        }
      } catch (err) {
        console.error("Failed to check watchlist status:", err)
      }
    }

    checkWatchlistStatus()
  }, [session, code])

  const toggleWatchlist = async () => {
    if (!session) {
      alert("Please sign in to add to watchlist")
      return
    }

    if (!scheme) return

    setTogglingWatchlist(true)
    try {
      if (isWatchlisted && watchlistItemId) {
        await axios.delete(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/watchlist/${watchlistItemId}`,
          { withCredentials: true }
        )
        setIsWatchlisted(false)
        setWatchlistItemId(null)
      } else {
        const res = await axios.post(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/watchlist/add`,
          {
            schemeCode: scheme.schemeCode,
            amcCode: scheme.schemeCode.slice(0, 6),
            fundName: scheme.schemeName,
            category: scheme.category,
            currentNav: scheme.netAssetValue ? parseFloat(scheme.netAssetValue) : null,
          },
          { withCredentials: true }
        )
        setIsWatchlisted(true)
        setWatchlistItemId(res.data.watchlistItem.id)
      }
    } catch (err: any) {
      console.error("Failed to toggle watchlist:", err)
      if (err.response?.data?.error === "Fund already in watchlist") {
        setIsWatchlisted(true)
      } else {
        alert("Failed to update watchlist")
      }
    } finally {
      setTogglingWatchlist(false)
    }
  }

  if (loading)
    return (
      <div className="mt-[64px] p-6 text-gray-500">
        Loading scheme details...
      </div>
    )

  if (error)
    return (
      <div className="mt-[64px] p-6">
        <p className="text-red-500 mb-4">{error}</p>
        <Link href="/explore" className="text-blue-600 hover:underline">
          ← Back to all schemes
        </Link>
      </div>
    )

  if (!scheme)
    return (
      <div className="mt-[64px] p-6">
        <p className="text-gray-500 mb-4">Scheme details not available.</p>
        <Link href="/dashboard" className="text-blue-600 hover:underline">
          ← Back to all schemes
        </Link>
      </div>
    )

  const e = scheme.enrichment

  return (
    <main className="mt-[18px] py-6 px-8 max-w-7xl mx-auto">
      <Link href="/explore" className="text-blue-600 hover:underline inline-block mb-6">
        ← Back to all schemes
      </Link>

      <div className="bg-white shadow-md rounded-lg p-6 border mb-6">
        <div className="flex gap-4 items-start">
          {e?.logo ? (
            <img src={e.logo} alt="logo" className="h-16 w-16 object-contain rounded" />
          ) : (
            <div className="h-16 w-16 bg-gray-100 flex items-center justify-center rounded text-sm text-gray-500">
              No logo
            </div>
          )}

          <div className="flex-1">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <h1 className="text-3xl font-bold mb-2 text-gray-900">{scheme.schemeName}</h1>
                <div className="flex gap-6 text-sm text-gray-600">
                  <p>Code: <span className="font-medium">{scheme.schemeCode}</span></p>
                  {scheme.netAssetValue && <p>Current NAV: <span className="font-semibold text-gray-900">₹{scheme.netAssetValue}</span></p>}
                  {scheme.date && <p>Updated: {scheme.date}</p>}
                </div>
              </div>
              
              {/* Watchlist Button */}
              {session && (
                <button
                  onClick={toggleWatchlist}
                  disabled={togglingWatchlist}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg border transition-all hover:shadow-md disabled:opacity-50"
                  style={{
                    borderColor: isWatchlisted ? '#eab308' : '#d1d5db',
                    backgroundColor: isWatchlisted ? '#fef9c3' : 'white',
                    color: isWatchlisted ? '#854d0e' : '#6b7280'
                  }}
                >
                  {togglingWatchlist ? (
                    <div className="animate-spin h-5 w-5 border-2 border-current border-t-transparent rounded-full"></div>
                  ) : isWatchlisted ? (
                    <>
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                      </svg>
                      <span className="font-medium">Watchlisted</span>
                    </>
                  ) : (
                    <>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                      </svg>
                      <span className="font-medium">Add to Watchlist</span>
                    </>
                  )}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="lg:col-span-2">
          <NavChart 
            schemeCode={scheme.schemeCode} 
            onDataLoad={(data) => {
              if (data.returns) {
                setNavReturns(data.returns);
              }
            }}
          />
        </div>
        <div className="lg:col-span-1">
          <InvestNow schemeCode={scheme.schemeCode} schemeName={scheme.schemeName} />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white shadow-md rounded-lg p-6 border">
          <h2 className="text-xl font-semibold mb-4 text-gray-900">Trailing Returns</h2>
          <div className="space-y-2 text-sm text-gray-700">
            <div className="flex justify-between">
              <span>6 Months Return:</span>
              <span className="font-medium">
                {navReturns?.sixMonths ? `${navReturns.sixMonths}%` : "—"}
              </span>
            </div>
            <div className="flex justify-between">
              <span>1 Year Return:</span>
              <span className="font-medium">
                {navReturns?.oneYear ? `${navReturns.oneYear}%` : (e?.returns?.oneY ?? "—")}
              </span>
            </div>
            <div className="flex justify-between">
              <span>3 Year Return (CAGR):</span>
              <span className="font-medium">
                {navReturns?.threeYears ? `${navReturns.threeYears}%` : (e?.returns?.threeY ?? "—")}
              </span>
            </div>
            <div className="flex justify-between">
              <span>5 Year Return (CAGR):</span>
              <span className="font-medium">
                {navReturns?.fiveYears ? `${navReturns.fiveYears}%` : (e?.returns?.fiveY ?? "—")}
              </span>
            </div>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 border">
          <h2 className="text-xl font-semibold mb-4 text-gray-900">Fund Details</h2>
          <div className="space-y-2 text-sm text-gray-700">
            <div className="flex justify-between">
              <span>Expense Ratio:</span>
              <span className="font-medium">{e?.expenseRatio ?? "—"}</span>
            </div>
            <div className="flex justify-between">
              <span>AUM:</span>
              <span className="font-medium">{e?.aum ?? "—"}</span>
            </div>
            <div className="flex justify-between">
              <span>Risk Level:</span>
              <span className="font-medium">{e?.risk ?? "—"}</span>
            </div>
            <div className="flex justify-between">
              <span>Fund Manager:</span>
              <span className="font-medium">{e?.fundManager ?? "—"}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <SipCalculator />
      </div>

      {e?.url && (
        <div className="mt-6 text-xs text-gray-500 text-center">
          Data source: <a href={e.url} target="_blank" rel="noreferrer" className="text-blue-600 underline">ValueResearchOnline</a>
        </div>
      )}
    </main>
  )
}
