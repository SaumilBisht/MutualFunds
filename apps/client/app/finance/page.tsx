"use client"
import { useEffect, useState } from "react"
import axios from "axios"
import { useRouter } from "next/navigation"

interface FinanceDetailsForm {
  annualIncome: string
  incomeSource: string
  taxResidency: string
}

export default function Finance() {
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)

  const [formData, setFormData] = useState<FinanceDetailsForm>({
    annualIncome: "",
    incomeSource: "",
    taxResidency: "",
  })

  useEffect(() => {
    async function checkStatus() {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/user/status`,
          { withCredentials: true }
        )
        const data = res.data
        if (data.currentStep < 4) router.push("/personal")
        else if (data.currentStep > 4) router.push("/bankdetails")
      } catch (err) {
        router.push("/dashboard")
      } finally {
        setLoading(false)
      }
    }
    checkStatus()
  }, [router])

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    setError("")
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.annualIncome || !formData.incomeSource || !formData.taxResidency) {
      return setError("All fields are required")
    }

    try {
      setSubmitting(true)
      setError("")
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/user/finance`,
        formData,
        { withCredentials: true }
      )

      if (res.status === 200) {
        setSuccess(true)
        setTimeout(() => router.push("/bankdetails"), 1500)
      }
    } catch (err: any) {
      console.error(err)
      setError(err?.response?.data?.error || "Failed to save financial details")
    } finally {
      setSubmitting(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center">
        <div className="text-lg text-gray-600">Loading...</div>
      </div>
    )
  }

  if (success) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Details Saved!</h2>
          <p className="text-gray-600">Your financial information has been saved successfully.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Progress Indicator */}
        <div className="mb-8">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center text-sm font-semibold">
                ✓
              </div>
              <span className="ml-2 text-sm font-medium text-gray-500">Personal</span>
            </div>
            <div className="w-12 h-0.5 bg-blue-600"></div>
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-semibold">
                2
              </div>
              <span className="ml-2 text-sm font-medium text-blue-600">Finance</span>
            </div>
            <div className="w-12 h-0.5 bg-gray-300"></div>
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-gray-300 text-gray-600 flex items-center justify-center text-sm font-semibold">
                3
              </div>
              <span className="ml-2 text-sm font-medium text-gray-500">Bank</span>
            </div>
            <div className="w-12 h-0.5 bg-gray-300"></div>
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-gray-300 text-gray-600 flex items-center justify-center text-sm font-semibold">
                4
              </div>
              <span className="ml-2 text-sm font-medium text-gray-500">Sign</span>
            </div>
          </div>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-800">Financial Information</h1>
            <p className="text-gray-600 mt-2">Help us understand your financial profile for better investment recommendations</p>
          </div>

          {error && (
            <div className="mb-6 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Financial Details Section */}
            <div>
              <h2 className="text-lg font-semibold text-gray-700 mb-4 pb-2 border-b">Financial Profile</h2>
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Annual Income <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="annualIncome"
                    value={formData.annualIncome}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    required
                  >
                    <option value="">Select your annual income range</option>
                    <option value="BELOW_2_LAKH">Below ₹2 Lakh</option>
                    <option value="TWO_TO_FIVE_LAKH">₹2 - ₹5 Lakh</option>
                    <option value="FIVE_TO_TEN_LAKH">₹5 - ₹10 Lakh</option>
                    <option value="TEN_TO_TWENTYFIVE_LAKH">₹10 - ₹25 Lakh</option>
                    <option value="ABOVE_25_LAKH">Above ₹25 Lakh</option>
                    <option value="OTHER">Other</option>
                  </select>
                  <p className="text-sm text-gray-500 mt-2">
                    This helps us recommend suitable investment options based on your income level
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Source of Income <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="incomeSource"
                    value={formData.incomeSource}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    required
                  >
                    <option value="">Select your primary source of income</option>
                    <option value="SALARIED">Salaried</option>
                    <option value="SELF_EMPLOYED">Self Employed</option>
                    <option value="BUSINESS_OWNER">Business Owner</option>
                    <option value="STUDENT">Student</option>
                    <option value="RETIRED">Retired</option>
                    <option value="OTHER">Other</option>
                  </select>
                  <p className="text-sm text-gray-500 mt-2">
                    Your income source helps us understand your financial stability and risk profile
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tax Residency <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="taxResidency"
                    value={formData.taxResidency}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    required
                  >
                    <option value="">Select your tax residency status</option>
                    <option value="INDIA">India</option>
                    <option value="NRI">NRI (Non-Resident Indian)</option>
                    <option value="FOREIGN_NATIONAL">Foreign National</option>
                  </select>
                  <p className="text-sm text-gray-500 mt-2">
                    Tax residency determines the applicable tax regulations for your investments
                  </p>
                </div>
              </div>
            </div>

            {/* Information Box */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex items-start">
                <svg className="w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                <div className="text-sm text-blue-800">
                  <p className="font-medium mb-1">Why we ask for this information?</p>
                  <p className="text-blue-700">
                    Your financial information helps us provide personalized investment recommendations 
                    and ensure compliance with regulatory requirements. All data is kept confidential and secure.
                  </p>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end pt-4">
              <button
                type="submit"
                disabled={submitting}
                className="px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {submitting ? "Saving..." : "Save and Continue"}
              </button>
            </div>
          </form>

          <div className="mt-6 pt-6 border-t text-center text-sm text-gray-500">
            <p>🔒 Your financial information is encrypted and stored securely</p>
          </div>
        </div>
      </div>
    </div>
  )
}
