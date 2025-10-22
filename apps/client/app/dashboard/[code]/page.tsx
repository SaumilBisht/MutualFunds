"use client"
import { useParams } from "next/navigation"
import axios from "axios"
import { useEffect, useState } from "react"
import Link from "next/link"

interface Scheme {
  schemeCode: string
  schemeName: string
  nav?: number
  date?: string
  category?: string
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

  return (
    <main className="mt-[64px] py-6 px-8">
      <Link href="/dashboard" className="text-blue-600 hover:underline">
        ← Back to all schemes
      </Link>

      <div className="mt-6 bg-white shadow-md rounded-lg p-6 border">
        <h2 className="text-2xl font-semibold mb-3">{scheme.schemeName}</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-700">
          <p>
            <span className="font-medium">Scheme Code:</span> {scheme.schemeCode}
          </p>
          {scheme.nav && (
            <p>
              <span className="font-medium">NAV:</span> ₹{scheme.nav}
            </p>
          )}
          {scheme.date && (
            <p>
              <span className="font-medium">Last Updated:</span> {scheme.date}
            </p>
          )}
          {scheme.category && (
            <p>
              <span className="font-medium">Category:</span> {scheme.category}
            </p>
          )}
        </div>

        <div className="mt-6 text-sm text-gray-500 border-t pt-4">
          <p>
            This data is fetched live from AMFI via your backend (`/mf/schemes/:code`).
          </p>
        </div>
      </div>
    </main>
  )
}
