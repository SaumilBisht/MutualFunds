"use client";

import Link from "next/link"
import Image from "next/image"
import { TopFundsSection } from "@/components/TopFundsSection"
import { ContainerTextFlip } from "@/components/ui/container-text-flip"
import { motion } from "framer-motion"

export default function Dashboard() {
  const words = [
    "freedom",
    "independence",
    "growth",
    "wealth",
    "security",
    "prosperity",
    "success",
    "abundance",
    "stability",
    "confidence",
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 pt-[40px]">

      <section className="relative min-h-[50vh] px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

            <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
                Explore the World of{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 bg-gradient-to-b from-gray-900 via-[#001E80] to-[#0038FF] text-transparent bg-clip-text">
                    Mutual Funds
                  </span>
                  <span className="absolute -inset-1 bg-blue-200 blur-lg opacity-30 rounded-lg"></span>
                </span>
              </h1>

              <div className="space-y-3">
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-lg sm:text-xl lg:text-2xl font-medium text-blue-600 leading-relaxed"
                >
                  Your Gateway to Financial <span className="text-blue-700 font-semibold"><ContainerTextFlip words={words} /></span>
                </motion.p>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed"
                >
                  Join the Journey and Reap the Rewards
                </motion.p>
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
