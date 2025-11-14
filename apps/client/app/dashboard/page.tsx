import { auth } from "@/auth"
import Link from "next/link"
import Image from "next/image"
import { TopFundsSection } from "@/components/TopFundsSection"

export default async function Dashboard() {
  const session = await auth()
  const user = session?.user

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 pt-[40px]">

      <section className="relative min-h-[50vh] px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

            <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-gray-900">
                Explore the World of{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 text-blue-600">
                    Mutual Funds
                  </span>
                  <span className="absolute -inset-1 bg-blue-200 blur-lg opacity-30 rounded-lg"></span>
                </span>
              </h1>

              <div className="space-y-1">
                <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                  Your Gateway to Financial freedom
                </p>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                  Join the Journey and Reap the Rewards
                </p>
              </div>

              <div>
                <Link 
                  href="/explore" 
                  className="inline-block px-6 sm:px-8 py-2.5 sm:py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all shadow-lg hover:shadow-xl text-sm sm:text-base"
                >
                  Discover all funds
                </Link>
              </div>
            </div>

            <div className="relative h-64 sm:h-72 lg:h-80 hidden lg:block">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-[300px] sm:w-[350px] lg:w-[400px] h-[300px] sm:h-[350px] lg:h-[400px] overflow-hidden">
                  <Image
                    src="/lib/manImage.png"
                    alt="Mutual Funds Investment"
                    width={250}
                    height={600}
                    className="drop-shadow-2xl"
                    priority
                  />
                  <div className="absolute -top-8 -right-8 w-24 sm:w-32 h-24 sm:h-32 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-2xl"></div>
                  <div className="absolute -bottom-8 -left-8 w-24 sm:w-32 h-24 sm:h-32 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-2xl"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TopFundsSection />
    </main>
  )
}
