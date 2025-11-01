"use client"

import { useRouter } from "next/navigation"
import Link from "next/link"

// Hardcoded top funds data 
const topFunds = [
  {
    id: 1,
    name: "ICICI Prudential Large Cap Fund",
    category: "Growth",
    returns: "26.63%",
    period: "3Y",
    rating: 5,
    logo: "https://www.valueresearchonline.com/content-assets/images/amc-logo/14-icici-prudential-2__BASE__.png",
    code: "108466"
  },
  {
    id: 2,
    name: "DSP Large Cap Fund Regular",
    category: "Growth",
    returns: "21.94%",
    period: "3Y",
    rating: 4,
    logo: "https://www.valueresearchonline.com/content-assets/images/amc-logo/181-dsp-1__BASE__.png",
    code: "101635"
  },
  {
    id: 3,
    name: "HDFC Mid Cap Fund Regular",
    category: "Growth",
    returns: "36.24%",
    period: "3Y",
    rating: 5,
    logo: "https://www.valueresearchonline.com/content-assets/images/amc-logo/302-hdfc-1__BASE__.png",
    code: "105758"
  },
  {
    id: 4,
    name: "Nippon India Growth Mid Cap",
    category: "Growth",
    returns: "38.31%",
    period: "3Y",
    rating: 5,
    logo: "https://www.valueresearchonline.com/content-assets/images/amc-logo/24-nippon-india-3__BASE__.png",
    code: "118668"
  },
  {
    id: 5,
    name: "Invesco India Smallcap Fund",
    category: "Regular - Growth",
    returns: "35.62%",
    period: "3Y",
    rating: 5,
    logo: "https://www.valueresearchonline.com/content-assets/images/amc-logo/319-invesco-3__BASE__.png",
    code: "145139"
  }
]

export function TopFundsSection() {
  const router = useRouter()

  const handleFundClick = (code: string) => {
    router.push(`/dashboard/${code}`)
  }

  return (
    <section className="px-6 py-12 bg-white">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-900">
            Top Rated Funds
          </h2>
          <Link 
            href="/explore"
            className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors group font-medium"
          >
            <span>View More</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {topFunds.map((fund) => (
            <div 
              key={fund.id}
              onClick={() => handleFundClick(fund.code)}
              className="bg-white rounded-xl p-6 border border-gray-200 hover:border-blue-400 transition-all hover:shadow-xl cursor-pointer group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-purple-100  flex items-center justify-center overflow-hidden">
                  {fund.logo ? (
                    <img
                      src={fund.logo}
                      alt={`${fund.name} logo`}
                      className="w-full h-full object-contain p-1"
                    />
                  ) : (
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full shadow-lg"></div>
                  )}
                </div>
                <button 
                  onClick={(e) => {
                    e.stopPropagation()
                  }}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <svg className="w-5 h-5 text-gray-400 hover:text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                  </svg>
                </button>
              </div>

              <h3 className="text-gray-900 font-semibold text-sm mb-1 line-clamp-2 group-hover:text-blue-600 transition-colors">
                {fund.name}
              </h3>
              <p className="text-gray-500 text-xs mb-3">{fund.category}</p>

              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-4 h-4 ${i < fund.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300 fill-gray-300'}`}
                    viewBox="0 0 24 24"
                  >
                    <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                ))}
              </div>

              <div className="pt-3 border-t border-gray-200">
                <p className="text-2xl font-bold text-gray-900">{fund.returns}</p>
                <p className="text-xs text-gray-500">({fund.period})</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
