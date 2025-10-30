"use client"

import { useEffect, useState, useRef } from "react"
import axios from "axios"
import { useRouter } from "next/navigation"

export default function MobilePage() {
  const router = useRouter()

  const [loading, setLoading] = useState(true)
  const [mobile, setMobile] = useState("")
  const [otp, setOtp] = useState(["", "", "", "", "", ""])
  const [message, setMessage] = useState({ text: "", type: "" as "success" | "error" | "" })
  const [sendingOtp, setSendingOtp] = useState(false)
  const [verifyingOtp, setVerifyingOtp] = useState(false)
  const [otpSent, setOtpSent] = useState(false)
  const [resendTimer, setResendTimer] = useState(0)
  const [mobileError, setMobileError] = useState("")

  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const otpInputRefs = useRef<(HTMLInputElement | null)[]>([])

  // Mobile validation
  const validateMobile = (value: string) => {
    if (!value) {
      setMobileError("")
      return false
    }
    if (!/^\d{10}$/.test(value)) {
      setMobileError("Please enter a valid 10-digit mobile number")
      return false
    }
    setMobileError("")
    return true
  }

  const handleMobileChange = (value: string) => {
    const numericValue = value.replace(/\D/g, "")
    if (numericValue.length <= 10) {
      setMobile(numericValue)
      if (numericValue.length === 10) {
        validateMobile(numericValue)
      } else {
        setMobileError("")
      }
    }
  }

  // OTP input handling
  const handleOtpChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return

    const newOtp = [...otp]
    newOtp[index] = value.slice(-1)
    setOtp(newOtp)

    // Auto-focus next input
    if (value && index < 5) {
      otpInputRefs.current[index + 1]?.focus()
    }
  }

  const handleOtpKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      otpInputRefs.current[index - 1]?.focus()
    }
  }

  const handleOtpPaste = (e: React.ClipboardEvent) => {
    e.preventDefault()
    const pastedData = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, 6)
    const newOtp = [...otp]
    pastedData.split("").forEach((char, i) => {
      if (i < 6) newOtp[i] = char
    })
    setOtp(newOtp)
    if (pastedData.length === 6) {
      otpInputRefs.current[5]?.focus()
    }
  }

  useEffect(() => {
    async function checkStatus() {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/user/status`,
          { withCredentials: true }
        )
        const data = res.data
        if (data.currentStep < 1) router.push("/dashboard")
        else if (data.currentStep > 1) router.push("/kyc")
      } catch (err) {
        router.push("/dashboard")
      } finally {
        setLoading(false)
      }
    }
    checkStatus()
  }, [router])


  useEffect(() => {
    if (resendTimer === 0 && timerRef.current) {
      clearInterval(timerRef.current)
      timerRef.current = null
    }
  }, [resendTimer])

  const startResendTimer = () => {
    setResendTimer(30)
    timerRef.current = setInterval(() => {
      setResendTimer((prev) => prev - 1)
    }, 1000)
  }

  const handleSendOtp = async () => {
    if (!validateMobile(mobile)) return
    try {
      setSendingOtp(true)
      setMessage({ text: "", type: "" })
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/otp`,
        { mobile },
        { withCredentials: true }
      )
      if (res.data.success) {
        setMessage({ text: "OTP sent successfully to your mobile!", type: "success" })
        setOtpSent(true)
        startResendTimer()
      }
    } catch (err: any) {
      console.error(err)
      setMessage({ text: err?.response?.data?.message || "Failed to send OTP", type: "error" })
    } finally {
      setSendingOtp(false)
    }
  }

  const handleResendOtp = async () => {
    if (resendTimer > 0) return
    setOtp(["", "", "", "", "", ""])
    handleSendOtp()
  }

  const handleVerifyOtp = async () => {
    const otpString = otp.join("")
    if (otpString.length !== 6) {
      setMessage({ text: "Please enter complete 6-digit OTP", type: "error" })
      return
    }
    try {
      setVerifyingOtp(true)
      setMessage({ text: "", type: "" })
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/otp/verify`,
        { mobile, otp: otpString },
        { withCredentials: true }
      )
      if (res.data.success) {
        setMessage({ text: "Mobile verified successfully! Redirecting...", type: "success" })
        setTimeout(() => router.push("/kyc"), 1500)
      }
    } catch (err: any) {
      console.error(err)
      setMessage({ text: err?.response?.data?.message || "OTP verification failed", type: "error" })
    } finally {
      setVerifyingOtp(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Verify Mobile Number</h1>
          <p className="text-gray-600">
            {!otpSent 
              ? "Enter your mobile number to receive an OTP"
              : "Enter the 6-digit OTP sent to your mobile"}
          </p>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6 sm:p-8">
          {/* Message Display */}
          {message.text && (
            <div className={`mb-6 p-4 rounded-lg flex items-start gap-3 ${
              message.type === "success" 
                ? "bg-green-50 border border-green-200" 
                : "bg-red-50 border border-red-200"
            }`}>
              {message.type === "success" ? (
                <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                <svg className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              )}
              <p className={`text-sm font-medium ${
                message.type === "success" ? "text-green-800" : "text-red-800"
              }`}>
                {message.text}
              </p>
            </div>
          )}

          {/* Mobile Input Section */}
          {!otpSent && (
            <div className="space-y-6">
              <div>
                <label htmlFor="mobile" className="block text-sm font-semibold text-gray-900 mb-2">
                  Mobile Number <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <span className="text-gray-500 text-sm font-medium">+91</span>
                  </div>
                  <input
                    id="mobile"
                    type="text"
                    value={mobile}
                    onChange={(e) => handleMobileChange(e.target.value)}
                    placeholder="9876543210"
                    className={`w-full pl-14 pr-4 py-3 text-sm font-medium text-gray-900 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all placeholder:opacity-40 ${
                      mobileError ? "border-red-500 bg-red-50" : "border-gray-300 bg-white"
                    }`}
                    maxLength={10}
                    required
                  />
                  {mobile.length === 10 && !mobileError && (
                    <div className="absolute right-3 top-1/2 -translate-y-1/2">
                      <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  )}
                </div>
                {mobileError && (
                  <p className="mt-2 text-xs text-red-600 flex items-center gap-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    {mobileError}
                  </p>
                )}
                <p className="mt-2 text-xs text-gray-500">
                  We'll send a 6-digit OTP to verify your number
                </p>
              </div>

              <button
                onClick={handleSendOtp}
                disabled={sendingOtp || mobile.length !== 10 || !!mobileError}
                className={`w-full py-3 px-6 rounded-lg font-semibold text-white transition-all duration-200 flex items-center justify-center gap-2 ${
                  mobile.length === 10 && !mobileError && !sendingOtp
                    ? "bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                    : "bg-gray-300 cursor-not-allowed"
                }`}
              >
                {sendingOtp ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Sending OTP...</span>
                  </>
                ) : (
                  <>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>Send OTP</span>
                  </>
                )}
              </button>
            </div>
          )}

          {/* OTP Input Section */}
          {otpSent && (
            <div className="space-y-6">
              {/* Mobile Display */}
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <p className="text-xs font-medium text-gray-500 mb-1">OTP sent to</p>
                <p className="text-sm font-semibold text-gray-900">+91 {mobile}</p>
                <button
                  onClick={() => {
                    setOtpSent(false)
                    setOtp(["", "", "", "", "", ""])
                    setMessage({ text: "", type: "" })
                    setResendTimer(0)
                    if (timerRef.current) clearInterval(timerRef.current)
                  }}
                  className="text-xs text-blue-600 hover:text-blue-700 font-medium mt-2"
                >
                  Change number
                </button>
              </div>

              {/* OTP Inputs */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-3">
                  Enter OTP <span className="text-red-500">*</span>
                </label>
                <div className="flex gap-2 justify-between" onPaste={handleOtpPaste}>
                  {otp.map((digit, index) => (
                    <input
                      key={index}
                      ref={(el) => { otpInputRefs.current[index] = el }}
                      type="text"
                      inputMode="numeric"
                      maxLength={1}
                      value={digit}
                      onChange={(e) => handleOtpChange(index, e.target.value)}
                      onKeyDown={(e) => handleOtpKeyDown(index, e)}
                      className="w-12 h-12 text-center text-lg font-bold text-gray-900 border-2 border-gray-300 rounded-lg focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all"
                    />
                  ))}
                </div>
                <p className="mt-2 text-xs text-gray-500">
                  OTP is valid for 10 minutes
                </p>
              </div>

              {/* Resend OTP */}
              <div className="flex items-center justify-between">
                <button
                  onClick={handleResendOtp}
                  disabled={resendTimer > 0}
                  className={`text-sm font-medium ${
                    resendTimer > 0
                      ? "text-gray-400 cursor-not-allowed"
                      : "text-blue-600 hover:text-blue-700"
                  }`}
                >
                  Resend OTP
                </button>
                {resendTimer > 0 && (
                  <span className="text-sm text-gray-600 flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Retry in {resendTimer}s
                  </span>
                )}
              </div>

              {/* Verify Button */}
              <button
                onClick={handleVerifyOtp}
                disabled={verifyingOtp || otp.join("").length !== 6}
                className={`w-full py-3 px-6 rounded-lg font-semibold text-white transition-all duration-200 flex items-center justify-center gap-2 ${
                  otp.join("").length === 6 && !verifyingOtp
                    ? "bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                    : "bg-gray-300 cursor-not-allowed"
                }`}
              >
                {verifyingOtp ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Verifying...</span>
                  </>
                ) : (
                  <>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Verify OTP</span>
                  </>
                )}
              </button>
            </div>
          )}

          {/* Security Note */}
          <div className="mt-6 pt-6 border-t border-gray-200">
            <div className="flex items-start gap-2 text-xs text-gray-500">
              <svg className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <p>
                Your mobile number will be kept confidential and used only for account verification and important updates.
              </p>
            </div>
          </div>
        </div>

        {/* Info Card */}
        <div className="mt-6 bg-blue-50 rounded-lg p-4 border border-blue-100">
          <div className="flex items-start gap-3">
            <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <h3 className="text-sm font-semibold text-blue-900 mb-1">Why verify mobile?</h3>
              <p className="text-xs text-blue-800">
                Mobile verification ensures secure account access and enables important transaction alerts.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
