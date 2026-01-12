"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { signIn } from "next-auth/react";
import axios from "axios";
import { useRouter } from "next/navigation";

interface InvestNowProps {
  schemeCode: string;
  schemeName: string;
}

export function InvestNow({ schemeCode, schemeName }: InvestNowProps) {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [investmentType, setInvestmentType] = useState<"sip" | "lumpsum">("sip");
  const [amount, setAmount] = useState<number>(5000);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sync = async () => {
    if (!session?.user) return
    try 
    {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/sync`,
        { email: session.user.email, name: session.user.name },
        { withCredentials: true }
      )
      const { currentStep,kycStatus } = res.data
      if (currentStep === 1) router.push("/mobile")
      else if (currentStep === 2) router.push("/kyc")
      else if (currentStep === 3) router.push("/personal")
      else if (currentStep === 4) router.push("/finance")
      else if (currentStep === 5) router.push("/bankdetails")
      else if(currentStep === 6) router.push("/sign")
      else if(kycStatus==="VERIFIED")
      {
        //TODO check bank verified.
        //Redirect to payment page OR NSE Payment
        router.push(`/payment?scheme=${schemeCode}&type=${investmentType}&amount=${amount}`);
      }
    } catch (err) {
      console.error("Sync error:", err)
    }
  }
  const handleInvest = async () => {
    if (status === "unauthenticated") {
      signIn("google");
      return;
    }

    setLoading(true);
    setError(null);

    try 
    {
      sync()
    } catch (err: any) {
      console.error("Investment redirect error:", err);
      setError(err.response?.data?.message || "Failed to process investment request");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full bg-white rounded-lg shadow-sm border border-gray-200 p-4 md:p-6">
      <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Invest Now</h2>

      <div className="flex bg-gray-100 rounded-lg p-1 mb-6">
        <button
          onClick={() => setInvestmentType("sip")}
          className={`flex-1 py-2.5 px-4 rounded-md text-sm font-medium transition-all ${
            investmentType === "sip"
              ? "bg-white text-gray-900 shadow-sm"
              : "text-gray-600 hover:text-gray-900"
          }`}
        >
          SIP
        </button>
        <button
          onClick={() => setInvestmentType("lumpsum")}
          className={`flex-1 py-2.5 px-4 rounded-md text-sm font-medium transition-all ${
            investmentType === "lumpsum"
              ? "bg-white text-gray-900 shadow-sm"
              : "text-gray-600 hover:text-gray-900"
          }`}
        >
          Lumpsum
        </button>
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {investmentType === "sip" ? "Monthly Investment" : "Investment Amount"}
        </label>
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 font-medium">
            ₹
          </span>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent text-lg font-semibold"
            min={investmentType === "sip" ? 500 : 1000}
            step={investmentType === "sip" ? 500 : 1000}
          />
        </div>
        <p className="text-xs text-gray-500 mt-2">
          {investmentType === "sip" ? "Minimum: ₹500" : "Minimum: ₹1,000"}
        </p>
      </div>

      <div className="grid grid-cols-3 gap-2 mb-6">
        {investmentType === "sip" ? (
          <>
            <button
              onClick={() => setAmount(1000)}
              className="py-2 px-3 border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors"
            >
              ₹1,000
            </button>
            <button
              onClick={() => setAmount(5000)}
              className="py-2 px-3 border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors"
            >
              ₹5,000
            </button>
            <button
              onClick={() => setAmount(10000)}
              className="py-2 px-3 border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors"
            >
              ₹10,000
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => setAmount(10000)}
              className="py-2 px-3 border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors"
            >
              ₹10,000
            </button>
            <button
              onClick={() => setAmount(50000)}
              className="py-2 px-3 border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors"
            >
              ₹50,000
            </button>
            <button
              onClick={() => setAmount(100000)}
              className="py-2 px-3 border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors"
            >
              ₹1,00,000
            </button>
          </>
        )}
      </div>

      {error && (
        <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-sm text-red-600">{error}</p>
        </div>
      )}

      <button
        onClick={handleInvest}
        disabled={loading || amount < (investmentType === "sip" ? 500 : 1000)}
        className="w-full py-3.5 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
      >
        {loading ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            Processing...
          </span>
        ) : status === "unauthenticated" ? (
          "Sign in to Invest"
        ) : (
          "Invest Now"
        )}
      </button>

      <p className="text-xs text-gray-500 text-center mt-4">
        By clicking "Invest Now", you agree to our{" "}
        <a href="/terms" className="text-blue-600 hover:underline">
          Terms & Conditions
        </a>{" "}
        and{" "}
        <a href="/privacy" className="text-blue-600 hover:underline">
          Privacy Policy
        </a>
      </p>

      <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-100">
        <p className="text-xs text-gray-700">
          <span className="font-semibold">Note:</span> You'll be guided through KYC and bank verification if not completed yet.
        </p>
      </div>
    </div>
  );
}
