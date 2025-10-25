"use client"
import { useParams } from "next/navigation"
import axios from "axios"
import { useEffect, useState } from "react"
import Link from "next/link"
import { NavChart } from "./components/NavChart"

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
  const [scheme, setScheme] = useState<Scheme | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

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
        <Link href="/dashboard" className="text-blue-600 hover:underline">
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
    <main className="mt-[64px] py-6 px-8 max-w-7xl mx-auto">
      <Link href="/dashboard" className="text-blue-600 hover:underline inline-block mb-6">
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
            <h1 className="text-3xl font-bold mb-2 text-gray-900">{scheme.schemeName}</h1>
            <div className="flex gap-6 text-sm text-gray-600">
              <p>Code: <span className="font-medium">{scheme.schemeCode}</span></p>
              {scheme.netAssetValue && <p>Current NAV: <span className="font-semibold text-gray-900">₹{scheme.netAssetValue}</span></p>}
              {scheme.date && <p>Updated: {scheme.date}</p>}
            </div>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <NavChart schemeCode={scheme.schemeCode} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white shadow-md rounded-lg p-6 border">
          <h2 className="text-xl font-semibold mb-4 text-gray-900">Performance</h2>
          <div className="space-y-2 text-sm text-gray-700">
            <div className="flex justify-between">
              <span>1 Year Return:</span>
              <span className="font-medium">{e?.returns?.oneY ?? "—"}</span>
            </div>
            <div className="flex justify-between">
              <span>3 Year Return:</span>
              <span className="font-medium">{e?.returns?.threeY ?? "—"}</span>
            </div>
            <div className="flex justify-between">
              <span>5 Year Return:</span>
              <span className="font-medium">{e?.returns?.fiveY ?? "—"}</span>
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

      <div className="bg-white shadow-md rounded-lg p-6 border mt-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-900">Top Holdings</h2>
        {e?.holdings && e.holdings.length > 0 ? (
          <div className="space-y-2">
            {e.holdings.map((h, i) => (
              <div key={i} className="flex justify-between text-sm text-gray-700 py-2 border-b last:border-b-0">
                <span>{h.name}</span>
                {h.allocation && <span className="font-medium text-gray-900">{h.allocation}</span>}
              </div>
            ))}
          </div>
        ) : (
          <p className="text-sm text-gray-500">No holding data available.</p>
        )}
      </div>

      {e?.url && (
        <div className="mt-6 text-xs text-gray-500 text-center">
          Data source: <a href={e.url} target="_blank" rel="noreferrer" className="text-blue-600 underline">ValueResearchOnline</a>
        </div>
      )}
    </main>
  )
}
