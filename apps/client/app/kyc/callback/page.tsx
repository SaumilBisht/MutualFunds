"use client"

import { useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
//Backend to frontend, there's a brief moment (100-300ms) where the URL is http://localhost:3001/kyc/callback before Next.js router processes the redirect
export default function KycCallbackPage() {
  const router = useRouter()
  const searchParams = useSearchParams()

  useEffect(() => {
    const error = searchParams.get("error")
    const success = searchParams.get("success")

    if (error || success) {
      // Already have the params in URL, just stay here
      // The user will see this loading screen briefly before /kyc page shows result
      return
    }

    // If no params, this means DigiLocker just redirected here
    // Show loading while backend processes
  }, [searchParams, router])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl border border-gray-200 p-8">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
            <svg className="animate-spin h-8 w-8 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Processing DigiLocker Verification</h1>
          <p className="text-gray-600 mb-4">Please wait while we verify your KYC details...</p>
          <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-sm text-blue-800">
              This may take a few moments. Do not close this window.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
