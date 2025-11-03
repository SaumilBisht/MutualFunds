"use client"

import { useEffect, useState } from "react"
import axios from "axios"
import { useRouter } from "next/navigation"

interface BankDetailsForm {
  accountNumber: string
  ifscCode: string
  accountType: string
  accountHolderName: string
  bankName: string
  branchName: string
}

interface BankData {
  ifsc: string
  bankName: string
  branch: string
  address: string
  city: string
  district: string
  state: string
  micr: string | null
}

export default function BankDetails() {
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [submitting, setSubmitting] = useState(false)
  const [fetchingIfsc, setFetchingIfsc] = useState(false)
  const [errors, setErrors] = useState<string[]>([])
  const [success, setSuccess] = useState(false)

  const [formData, setFormData] = useState<BankDetailsForm>({
    accountNumber: "",
    ifscCode: "",
    accountType: "savings",
    accountHolderName: "",
    bankName: "",
    branchName: ""
  })

  useEffect(() => {
    async function checkStatus() {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/user/status`,
          { withCredentials: true }
        )
        const data = res.data
        if (data.currentStep < 5) router.push("/finance")
        else if(data.currentStep > 5) router.push("/sign")
      } catch (err) {
        router.push("/dashboard")
      } finally {
        setLoading(false)
      }
    }
    checkStatus()
  }, [router])

  // Fetch bank details from IFSC
  const fetchBankDetails = async (ifsc: string) => {
    if (ifsc.length !== 11) return

    setFetchingIfsc(true)
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/bank/ifsc/${ifsc}`
      )
      const bankData: BankData = res.data.data

      setFormData(prev => ({
        ...prev,
        bankName: bankData.bankName,
        branchName: `${bankData.branch}, ${bankData.city}`
      }))
      setErrors([])
    } catch (err: any) {
      if (err.response?.status === 404) {
        setErrors(["IFSC code not found. Please verify and try again."])
      } else {
        setErrors(["Failed to fetch bank details. Please enter manually."])
      }
    } finally {
      setFetchingIfsc(false)
    }
  }

  const handleIfscChange = (value: string) => {
    const upperValue = value.toUpperCase().replace(/[^A-Z0-9]/g, "")
    if (upperValue.length <= 11) {
      setFormData(prev => ({ ...prev, ifscCode: upperValue }))
      
      if (upperValue.length === 11) {
        fetchBankDetails(upperValue)
      }
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrors([])
    setSubmitting(true)

    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/bank/verify`,
        formData
      )

      if (res.data.success) {
        setSuccess(true)
        setTimeout(() => {
          router.push("/sign")
        }, 2000)
      }
    } catch (err: any) {
      if (err.response?.data?.errors) {
        setErrors(err.response.data.errors)
      } else {
        setErrors([err.response?.data?.error || "Failed to verify bank details"])
      }
    } finally {
      setSubmitting(false)
    }
  }

  const handleChange = (field: keyof BankDetailsForm, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    setErrors([])
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center">
        <div className="animate-spin h-12 w-12 border-4 border-blue-600 border-t-transparent rounded-full"></div>
      </div>
    )
  }

  if (success) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center">
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Bank Details Verified!</h2>
          <p className="text-gray-600">Redirecting to signature page...</p>
        </div>
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
            <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
            </svg>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
            Bank Account Details
          </h1>
          <p className="text-gray-600">
            Please provide your bank account information for investment transactions
          </p>
        </div>

        {/* Progress Indicator */}
        <div className="mb-8">
          <div className="flex items-center justify-center gap-2">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="ml-2 text-sm text-gray-600">Personal</span>
            </div>
            <div className="w-12 h-1 bg-green-500"></div>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="ml-2 text-sm text-gray-600">Finance</span>
            </div>
            <div className="w-12 h-1 bg-blue-500"></div>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
                3
              </div>
              <span className="ml-2 text-sm font-semibold text-blue-600">Bank</span>
            </div>
            <div className="w-12 h-1 bg-gray-300"></div>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-semibold">
                4
              </div>
              <span className="ml-2 text-sm text-gray-600">Sign</span>
            </div>
          </div>
        </div>

        {/* Error Messages */}
        {errors.length > 0 && (
          <div className="mb-6 bg-red-50 border border-red-200 rounded-lg p-4">
            <div className="flex items-start">
              <svg className="w-5 h-5 text-red-600 mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div className="flex-1">
                <h3 className="text-sm font-semibold text-red-800 mb-1">Please fix the following errors:</h3>
                <ul className="list-disc list-inside text-sm text-red-700 space-y-1">
                  {errors.map((error, index) => (
                    <li key={index}>{error}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
          <div className="space-y-6">
            {/* Account Number */}
            <div>
              <label htmlFor="accountNumber" className="block text-sm font-semibold text-gray-700 mb-2">
                Bank Account Number *
              </label>
              <input
                type="text"
                id="accountNumber"
                value={formData.accountNumber}
                onChange={(e) => handleChange("accountNumber", e.target.value.replace(/\D/g, ""))}
                placeholder="Enter account number"
                maxLength={20}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm font-mono placeholder:opacity-40"
                required
              />
              <p className="mt-1 text-xs text-gray-500">
                9-20 digit account number
              </p>
            </div>

            {/* IFSC Code */}
            <div>
              <label htmlFor="ifscCode" className="block text-sm font-semibold text-gray-700 mb-2">
                IFSC Code *
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="ifscCode"
                  value={formData.ifscCode}
                  onChange={(e) => handleIfscChange(e.target.value)}
                  placeholder="XXXX0XXXXXX"
                  maxLength={11}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm uppercase font-mono placeholder:opacity-40"
                  required
                />
                {fetchingIfsc && (
                  <div className="absolute right-3 top-3">
                    <div className="animate-spin h-5 w-5 border-2 border-blue-600 border-t-transparent rounded-full"></div>
                  </div>
                )}
              </div>
              <p className="mt-1 text-xs text-gray-500">
                11-character code (Example: SBIN0001234)
              </p>
            </div>

            {/* Branch Name */}
            <div>
              <label htmlFor="branchName" className="block text-sm font-semibold text-gray-700 mb-2">
                Branch Name *
              </label>
              <input
                type="text"
                id="branchName"
                value={formData.branchName}
                onChange={(e) => handleChange("branchName", e.target.value)}
                placeholder="Mumbai Main Branch"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm placeholder:opacity-40"
                required
              />
            </div>

            {/* Account Holder Name */}
            <div>
              <label htmlFor="accountHolderName" className="block text-sm font-semibold text-gray-700 mb-2">
                Account Holder Name *
              </label>
              <input
                type="text"
                id="accountHolderName"
                value={formData.accountHolderName}
                onChange={(e) => handleChange("accountHolderName", e.target.value)}
                placeholder="As per bank records"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm placeholder:opacity-40"
                required
              />
              <p className="mt-1 text-xs text-gray-500">
                Must match the name on your PAN card
              </p>
            </div>

            {/* Bank Name */}
            <div>
              <label htmlFor="bankName" className="block text-sm font-semibold text-gray-700 mb-2">
                Bank Name *
              </label>
              <input
                type="text"
                id="bankName"
                value={formData.bankName}
                onChange={(e) => handleChange("bankName", e.target.value)}
                placeholder="State Bank of India"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm placeholder:opacity-40"
                required
              />
            </div>

            {/* Account Type */}
            <div>
              <label htmlFor="accountType" className="block text-sm font-semibold text-gray-700 mb-2">
                Account Type *
              </label>
              <select
                id="accountType"
                value={formData.accountType}
                onChange={(e) => handleChange("accountType", e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm bg-white"
                required
              >
                <option value="savings">Savings Account (SB)</option>
                <option value="current">Current Account</option>
              </select>
            </div>

            {/* Info Box */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex items-start">
                <svg className="w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div className="text-sm text-blue-800">
                  <p className="font-semibold mb-1">Important Information:</p>
                  <ul className="list-disc list-inside space-y-1 text-xs">
                    <li>Bank account must be in your name (as per PAN)</li>
                    <li>NRE/NRO accounts are allowed for NRI investors</li>
                    <li>Minor accounts: Parent/Guardian name allowed</li>
                    <li>Please ensure account is active and operational</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-8 flex gap-4">
            <button
              type="button"
              onClick={() => router.back()}
              className="flex-1 px-6 py-3 border border-gray-300 rounded-lg font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Back
            </button>
            <button
              type="submit"
              disabled={submitting}
              className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {submitting ? (
                <>
                  <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></div>
                  Verifying...
                </>
              ) : (
                <>
                  Verify & Continue
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </>
              )}
            </button>
          </div>
        </form>

        {/* Security Note */}
        <div className="mt-6 text-center">
          <p className="text-xs text-gray-500 flex items-center justify-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            Your bank details are encrypted and secure
          </p>
        </div>
      </div>
    </main>
  )
}