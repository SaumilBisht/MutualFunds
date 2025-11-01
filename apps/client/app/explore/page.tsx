import { auth } from "@/auth"
import MfTable from "../../components/MfTable"
import Link from "next/link"

export default async function ExplorePage() {
  const session = await auth()
  const user = session?.user

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">

      <section className="relative mt-[54px] px-6 py-8 border-b border-gray-200 bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <Link 
              href="/dashboard"
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </Link>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Explore All Mutual Funds
              </h1>
              <p className="text-gray-600 mt-1">
                Browse and invest in 500+ top-performing mutual funds
              </p>
            </div>
          </div>

          {/* Quick Stats */}
          {user && (
            <div className="grid grid-cols-3 gap-4 mt-6">
              <div className="bg-white rounded-lg p-4 border border-blue-100 shadow-sm">
                <p className="text-2xl font-bold text-gray-900">500+</p>
                <p className="text-sm text-gray-600">Available Funds</p>
              </div>
              <div className="bg-white rounded-lg p-4 border border-purple-100 shadow-sm">
                <p className="text-2xl font-bold text-blue-600">12%</p>
                <p className="text-sm text-gray-600">Avg Returns</p>
              </div>
              <div className="bg-white rounded-lg p-4 border border-green-100 shadow-sm">
                <p className="text-2xl font-bold text-green-600">₹500</p>
                <p className="text-sm text-gray-600">Min. Investment</p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Mutual Funds Table Section */}
      <section className="px-6 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-xl border border-gray-200 shadow-xl overflow-hidden">
            <MfTable />
          </div>
        </div>
      </section>
    </main>
  )
}
