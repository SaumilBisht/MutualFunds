"use client"

import { useState, useEffect, useRef } from "react"
import { useRouter, usePathname } from "next/navigation"
import { useSession, signIn, signOut } from "next-auth/react"
import axios from "axios"

interface SearchResult {
  schemeCode: string
  schemeName: string
  category?: string
}

export default function Header() {
  const router = useRouter()
  const pathname = usePathname()
  const { data: session } = useSession()
  const user = session?.user
  const [loading, setLoading] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState<SearchResult[]>([])
  const [isSearching, setIsSearching] = useState(false)
  const [showResults, setShowResults] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const searchRef = useRef<HTMLDivElement>(null)

  // Close search results when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowResults(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  // Debounced search
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (searchQuery.trim().length > 1) {
        handleSearch(searchQuery)
      } else {
        setSearchResults([])
        setShowResults(false)
      }
    }, 300)

    return () => clearTimeout(delayDebounceFn)
  }, [searchQuery])

  const handleSearch = async (query: string) => {
    setIsSearching(true)
    try {
      const res = await axios.get(`http://localhost:3002/mf/search?q=${encodeURIComponent(query)}&limit=10`)
      if (res.data.success) {
        setSearchResults(res.data.data)
        setShowResults(true)
      }
    } catch (err) {
      console.error("Search failed:", err)
      setSearchResults([])
    } finally {
      setIsSearching(false)
    }
  }

  const handleResultClick = (schemeCode: string) => {
    router.push(`/dashboard/${schemeCode}`)
    setSearchQuery("")
    setSearchResults([])
    setShowResults(false)
    setMobileMenuOpen(false)
  }

  const handleSearchSubmit = (e?: React.FormEvent) => {
    e?.preventDefault()
    if (searchQuery.trim().length > 0) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`)
      setSearchQuery("")
      setSearchResults([])
      setShowResults(false)
      setMobileMenuOpen(false)
    }
  }

  const handleViewAllResults = () => {
    if (searchQuery.trim().length > 0) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`)
      setSearchQuery("")
      setSearchResults([])
      setShowResults(false)
      setMobileMenuOpen(false)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearchSubmit()
    }
  }

  const handleSignIn = async () => {
    await signIn("google", { callbackUrl: "/post-auth" })
  }

  const handleSignOut = async () => {
    try {
      await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/signout`, {}, { withCredentials: true })
      await signOut()
      router.refresh()
    } catch (err) {
      console.error("Signout failed:", err)
    }
  }

  const navLinks = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Explore", path: "/explore" },
    ...(user ? [{ name: "Watchlist", path: "/watchlist" }] : []),
    { name: "Portfolio", path: "/portfolio" },
    { name: "Blogs", path: "/blogs" },
  ]

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-5 px-4">
      <header className="w-full max-w-[1200px] bg-white shadow-lg rounded-xl border border-gray-200">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            
            {/* Logo */}
            <div className="flex items-center gap-8">
              <div
                onClick={() => router.push("/dashboard")}
                className="flex items-center gap-2 cursor-pointer group"
              >
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg transition-all">
                  <span className="text-white font-bold text-lg">MS</span>
                </div>
                <span className="text-2xl font-bold text-blue-600">
                  MSWealth
                </span>
              </div>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center gap-1">
                {navLinks.map((link) => (
                  <button
                    key={link.path}
                    onClick={() => router.push(link.path)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      pathname === link.path
                        ? "bg-blue-50 text-blue-600"
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                    }`}
                  >
                    {link.name}
                  </button>
                ))}
              </nav>
            </div>

            {/* Search Bar - Desktop */}
            <div className="hidden lg:flex flex-1 max-w-xl mx-8" ref={searchRef}>
              <form onSubmit={handleSearchSubmit} className="relative w-full">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <input
                    type="text"
                    placeholder="Search mutual funds... (Press Enter for all results)"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onFocus={() => searchResults.length > 0 && setShowResults(true)}
                    onKeyDown={handleKeyDown}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm"
                  />
                  {isSearching && (
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                      <div className="animate-spin h-4 w-4 border-2 border-blue-600 border-t-transparent rounded-full"></div>
                    </div>
                  )}
                </div>

                {/* Search Results Dropdown */}
                {showResults && searchResults.length > 0 && (
                  <div className="absolute mt-2 w-full bg-white rounded-lg shadow-xl border border-gray-200 max-h-96 overflow-y-auto z-50">
                    <div className="p-2">
                      <div className="text-xs font-medium text-gray-500 px-3 py-2">
                        Top {searchResults.length} Results
                      </div>
                      {searchResults.map((result) => (
                        <button
                          key={result.schemeCode}
                          onClick={() => handleResultClick(result.schemeCode)}
                          type="button"
                          className="w-full text-left px-3 py-2.5 hover:bg-blue-50 rounded-lg transition-colors group"
                        >
                          <div className="flex items-start justify-between gap-2">
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium text-gray-900 group-hover:text-blue-600 truncate">
                                {result.schemeName}
                              </p>
                              <p className="text-xs text-gray-500 mt-0.5">
                                Code: {result.schemeCode}
                              </p>
                            </div>
                            {result.category && (
                              <span className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full whitespace-nowrap">
                                {result.category}
                              </span>
                            )}
                          </div>
                        </button>
                      ))}
                      {/* View All Results Button */}
                      <button
                        type="button"
                        onClick={handleViewAllResults}
                        className="w-full mt-2 px-3 py-2.5 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all text-sm flex items-center justify-center gap-2"
                      >
                        <span>View All Results</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </button>
                    </div>
                  </div>
                )}

                {showResults && searchResults.length === 0 && searchQuery.length > 2 && !isSearching && (
                  <div className="absolute mt-2 w-full bg-white rounded-lg shadow-xl border border-gray-200 p-4 z-50">
                    <p className="text-sm text-gray-500 text-center">No results found</p>
                  </div>
                )}
              </form>
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-3">
              {/* Search Icon - Mobile/Tablet */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>

              {user ? (
                <>
                  <div className="hidden sm:flex items-center gap-3">
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-50 rounded-lg">
                      <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-medium">
                        {user.name?.charAt(0).toUpperCase()}
                      </div>
                      <span className="text-sm font-medium text-gray-700 max-w-[120px] truncate">
                        {user.name}
                      </span>
                    </div>
                    <button
                      onClick={handleSignOut}
                      className="px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                    >
                      Sign Out
                    </button>
                  </div>
                  
                  {/* Mobile User Menu */}
                  <button
                    onClick={handleSignOut}
                    className="sm:hidden p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                    </svg>
                  </button>
                </>
              ) : (
                <button
                  onClick={handleSignIn}
                  disabled={loading}
                  className="px-4 py-2 text-sm font-medium bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all disabled:opacity-50"
                >
                  {loading ? "Signing in..." : "Sign In"}
                </button>
              )}

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {mobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200 rounded-b-xl">
              {/* Mobile Search */}
              <form onSubmit={handleSearchSubmit} className="mb-4">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <input
                    type="text"
                    placeholder="Search... (Press Enter for all)"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onFocus={() => searchResults.length > 0 && setShowResults(true)}
                    onKeyDown={handleKeyDown}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  />
                  {isSearching && (
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                      <div className="animate-spin h-4 w-4 border-2 border-blue-600 border-t-transparent rounded-full"></div>
                    </div>
                  )}
                </div>

                {/* Mobile Search Results */}
                {showResults && searchResults.length > 0 && (
                  <div className="mt-2 bg-white rounded-lg shadow-lg border border-gray-200 max-h-64 overflow-y-auto">
                    <div className="p-2">
                      <div className="text-xs font-medium text-gray-500 px-3 py-2">
                        Top {searchResults.length} Results
                      </div>
                      {searchResults.map((result) => (
                        <button
                          key={result.schemeCode}
                          onClick={() => handleResultClick(result.schemeCode)}
                          type="button"
                          className="w-full text-left px-3 py-2 hover:bg-blue-50 rounded-lg transition-colors"
                        >
                          <p className="text-sm font-medium text-gray-900 truncate">
                            {result.schemeName}
                          </p>
                          <p className="text-xs text-gray-500">Code: {result.schemeCode}</p>
                        </button>
                      ))}
                      {/* Mobile View All Button */}
                      <button
                        type="button"
                        onClick={handleViewAllResults}
                        className="w-full mt-2 px-3 py-2 bg-blue-600 text-white rounded-lg font-medium text-sm hover:bg-blue-700 transition-colors"
                      >
                        View All Results →
                      </button>
                    </div>
                  </div>
                )}
              </form>

              {/* Mobile Navigation */}
              <nav className="space-y-1">
                {navLinks.map((link) => (
                  <button
                    key={link.path}
                    onClick={() => {
                      router.push(link.path)
                      setMobileMenuOpen(false)
                    }}
                    className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                      pathname === link.path
                        ? "bg-blue-50 text-blue-600"
                        : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                    }`}
                  >
                    {link.name}
                  </button>
                ))}
              </nav>

              {/* Mobile User Info */}
              {user && (
                <div className="sm:hidden mt-4 pt-4 border-t border-gray-200">
                  <div className="flex items-center gap-3 px-2">
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-medium">
                      {user.name?.charAt(0).toUpperCase()}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">{user.name}</p>
                      <p className="text-xs text-gray-500 truncate">{user.email}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </header>
    </div>
  )
}
