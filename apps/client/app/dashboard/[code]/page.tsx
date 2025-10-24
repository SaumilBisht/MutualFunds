"use client"
import { useParams } from "next/navigation"
import axios from "axios"
import { useEffect, useState } from "react"
import Link from "next/link"

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
    <main className="mt-[64px] py-6 px-8">
      <Link href="/dashboard" className="text-blue-600 hover:underline">
        ← Back to all schemes
      </Link>

      <div className="mt-6 bg-white shadow-md rounded-lg p-6 border">
        <div className="flex gap-4 items-start">
          {e?.logo ? (
            <img src={e.logo} alt="logo" className="h-16 w-16 object-contain rounded" />
          ) : (
            <div className="h-16 w-16 bg-gray-100 flex items-center justify-center rounded text-sm text-gray-500">
              No logo
            </div>
          )}

          <div>
            <h2 className="text-2xl font-semibold mb-1">{scheme.schemeName}</h2>
            <p className="text-sm text-gray-600">Code: {scheme.schemeCode}</p>
            {scheme.netAssetValue && <p className="text-sm text-gray-600">NAV: ₹{scheme.netAssetValue}</p>}
            {scheme.date && <p className="text-sm text-gray-600">Updated: {scheme.date}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
          <div>
            <h3 className="font-semibold">Performance</h3>
            <div className="text-sm text-gray-700 mt-2">
              <div>1Y: {e?.returns?.oneY ?? "—"}</div>
              <div>3Y: {e?.returns?.threeY ?? "—"}</div>
              <div>5Y: {e?.returns?.fiveY ?? "—"}</div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold">Fund Details</h3>
            <div className="text-sm text-gray-700 mt-2">
              <div>Expense Ratio: {e?.expenseRatio ?? "—"}</div>
              <div>AUM: {e?.aum ?? "—"}</div>
              <div>Risk: {e?.risk ?? "—"}</div>
              <div>Fund Manager: {e?.fundManager ?? "—"}</div>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="font-semibold">Top Holdings</h3>
          {e?.holdings && e.holdings.length > 0 ? (
            <ul className="mt-2 space-y-1 text-sm text-gray-700">
              {e.holdings.map((h, i) => (
                <li key={i}>
                  {h.name} {h.allocation ? <span className="text-gray-500"> — {h.allocation}</span> : null}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-gray-500 mt-2">No holding data available.</p>
          )}
        </div>

        {e?.url ? (
          <div className="mt-4 text-xs text-gray-500">
            Source: <a href={e.url} target="_blank" rel="noreferrer" className="text-blue-600 underline">ValueResearchOnline</a>
          </div>
        ) : null}
      </div>
    </main>
  )
}
