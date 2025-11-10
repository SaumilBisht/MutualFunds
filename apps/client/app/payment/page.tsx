"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import Link from "next/link";

export default function PaymentPage() {
  const searchParams = useSearchParams();
  const schemeCode = searchParams.get("scheme");
  const investmentType = searchParams.get("type");
  const amount = searchParams.get("amount");
  
  const [processing, setProcessing] = useState(false);

  const handlePayment = () => {
    setProcessing(true);
    // TODO: Integrate Razorpay here
    setTimeout(() => {
      alert("Payment integration coming soon!");
      setProcessing(false);
    }, 1500);
  };

  return (
    <main className="py-6 px-4 md:px-8 max-w-4xl mx-auto">
      <Link href={`/dashboard/${schemeCode}`} className="text-blue-600 hover:underline inline-block mb-6">
        ← Back to scheme
      </Link>

      <div className="bg-white rounded-lg shadow-md border p-6 md:p-8">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Complete Your Payment
          </h1>
          <p className="text-gray-600">
            All steps completed! You're ready to invest.
          </p>
        </div>

        {/* Order Summary */}
        <div className="bg-gray-50 rounded-lg p-6 mb-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Order Summary</h2>
          <div className="space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Scheme Code:</span>
              <span className="font-medium text-gray-900">{schemeCode}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Investment Type:</span>
              <span className="font-medium text-gray-900 uppercase">{investmentType}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">
                {investmentType === "sip" ? "Monthly Amount:" : "Lumpsum Amount:"}
              </span>
              <span className="font-medium text-gray-900">₹{Number(amount).toLocaleString('en-IN')}</span>
            </div>
            <div className="pt-3 border-t border-gray-300">
              <div className="flex justify-between">
                <span className="font-semibold text-gray-900">Total Amount:</span>
                <span className="text-xl font-bold text-gray-900">₹{Number(amount).toLocaleString('en-IN')}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Integration Placeholder */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
          <div className="flex items-start gap-3">
            <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Razorpay Integration Coming Soon</h3>
              <p className="text-sm text-gray-700">
                This is a placeholder payment page. Razorpay payment gateway will be integrated here to process your investment securely.
              </p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={handlePayment}
            disabled={processing}
            className="flex-1 py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
          >
            {processing ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Processing...
              </span>
            ) : (
              "Proceed to Payment (Demo)"
            )}
          </button>
          <Link
            href={`/dashboard/${schemeCode}`}
            className="flex-1 py-3 bg-white border-2 border-gray-300 text-gray-900 font-semibold rounded-lg hover:bg-gray-50 transition-colors text-center"
          >
            Cancel
          </Link>
        </div>

        {/* Security Note */}
        <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
          <div className="flex items-start gap-2">
            <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <p className="text-xs text-gray-700">
              <span className="font-semibold">Secure Payment:</span> Your payment information is encrypted and secure. We never store your card details.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
