"use client"

import axios from "axios"
import { useState } from "react"

export default function MfSearch({ setSchemes, setTotal }: any) {
  const [query, setQuery] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!query.trim()) return
    setLoading(true)
    try {
      const res = await axios.get(`http://localhost:3002/mf/search?q=${encodeURIComponent(query)}&limit=100`)

      if (res.data.success) {
        setSchemes(res.data.data)
        setTotal(res.data.meta.total)
      }
    } catch (err) {
      console.error("Search failed:", err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSearch} className="flex items-center gap-2 mb-2">
      <input
        type="text"
        placeholder="Search by scheme name or code..."
        className="border rounded px-3 py-2 w-full focus:outline-none focus:ring-1 focus:ring-blue-500"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        type="submit"
        disabled={loading}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
      >
        {loading ? "Searching..." : "Search"}
      </button>
    </form>
  )
}
