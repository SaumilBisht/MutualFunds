"use client"

import { useEffect, useState } from "react"
import MfSearch from "./MfSearch"
import Link from "next/link"

interface Scheme {
  schemeCode: string
  schemeName: string
  category?: string
  nav?: number
}

export default function MfTable() {
  const [schemes, setSchemes] = useState<Scheme[]>([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [total, setTotal] = useState(0)
  const limit = 20

  const fetchSchemes = async (pageNum: number) => {
    setLoading(true)
    try {
      const res = await fetch(`http://localhost:3002/mf/schemes?page=${pageNum}&limit=${limit}`)
      const data = await res.json()
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

  useEffect(() => {
    fetchSchemes(page)
  }, [page])

  return (
    <div className="flex flex-col gap-4">
      <MfSearch setSchemes={setSchemes} setTotal={setTotal} />

      {loading ? (
        <p className="text-gray-500">Loading mutual funds...</p>
      ) : schemes.length === 0 ? (
        <p className="text-gray-500">No mutual funds found.</p>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {schemes.map((scheme) => (
              <Link
                href={`/dashboard/${scheme.schemeCode}`}
                key={scheme.schemeCode}
                className="p-4 border rounded-lg shadow-sm hover:shadow-md transition duration-150 bg-white block"
              >
                <h3 className="text-lg font-semibold mb-1 text-blue-600 hover:underline">
                  {scheme.schemeName}
                </h3>
                <p className="text-sm text-gray-600">Code: {scheme.schemeCode}</p>
                {scheme.nav && <p className="text-sm text-gray-600">NAV: ₹{scheme.nav}</p>}
                {scheme.category && (
                  <p className="text-xs text-gray-500 mt-1">Category: {scheme.category}</p>
                )}
              </Link>
            ))}
          </div>

          <div className="flex justify-between items-center mt-4">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
              className="px-3 py-1 border rounded disabled:opacity-50"
            >
              Prev
            </button>
            <p className="text-sm text-gray-700">
              Page {page} of {Math.ceil(total / limit) || 1}
            </p>
            <button
              onClick={() => setPage((p) => p + 1)}
              disabled={page * limit >= total}
              className="px-3 py-1 border rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  )
}
