"use client";

import { useState } from "react";

export function SipCalculator() {
  const [calculatorType, setCalculatorType] = useState<"sip" | "lumpsum">("sip");
  const [monthlyAmount, setMonthlyAmount] = useState(5000);
  const [lumpsumAmount, setLumpsumAmount] = useState(100000);
  const [expectedReturn, setExpectedReturn] = useState(12);
  const [timePeriod, setTimePeriod] = useState(10);

  const calculateSIP = () => {
    const annualRate = expectedReturn / 100;
    const monthlyRate = annualRate / 12;
    const months = timePeriod * 12;
    
    const futureValue = monthlyAmount * 
      (Math.pow(1 + monthlyRate, months) - 1) / 
      monthlyRate * 
      (1 + monthlyRate);
    
    const totalInvestment = monthlyAmount * months;
    const expectedReturns = futureValue - totalInvestment;
    
    return {
      totalValue: Math.round(futureValue),
      totalInvestment: Math.round(totalInvestment),
      expectedReturns: Math.round(expectedReturns),
    };
  };

  const calculateLumpsum = () => {
    const annualRate = expectedReturn / 100;
    const years = timePeriod;
    
    // Lumpsum formula: FV = P × (1 + r)^n
    const futureValue = lumpsumAmount * Math.pow(1 + annualRate, years);
    const totalInvestment = lumpsumAmount;
    const expectedReturns = futureValue - totalInvestment;
    
    return {
      totalValue: Math.round(futureValue),
      totalInvestment: Math.round(totalInvestment),
      expectedReturns: Math.round(expectedReturns),
    };
  };

  const results = calculatorType === "sip" ? calculateSIP() : calculateLumpsum();

  return (
    <div className="w-full bg-white rounded-lg shadow-sm border border-gray-200 p-4 md:p-6">
      {/* Header with Toggle */}
      <div className="flex items-center gap-4 mb-6 md:mb-2">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900">Returns Calculator</h2>
        
        <div className="inline-flex rounded-lg border border-gray-300 p-0.5 bg-gray-50">
          <button
            onClick={() => setCalculatorType("sip")}
            className={`px-4 md:px-6 py-1.5 md:py-2 text-sm font-medium rounded-md transition-all ${
              calculatorType === "sip"
                ? "bg-gray-900 text-white shadow-sm"
                : "text-gray-700 hover:text-gray-900"
            }`}
          >
            SIP
          </button>
          <button
            onClick={() => setCalculatorType("lumpsum")}
            className={`px-4 md:px-6 py-1.5 md:py-2 text-sm font-medium rounded-md transition-all ${
              calculatorType === "lumpsum"
                ? "bg-gray-900 text-white shadow-sm"
                : "text-gray-700 hover:text-gray-900"
            }`}
          >
            Lumpsum
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
        <div className="space-y-6 flex flex-col justify-center">
          {calculatorType === "sip" ? (
            <div>
              <div className="flex justify-between items-center mb-3">
                <label className="text-sm font-medium text-gray-700">
                  Monthly Investment
                </label>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-500">₹</span>
                  <input
                    type="number"
                    value={monthlyAmount}
                    onChange={(e) => setMonthlyAmount(Number(e.target.value))}
                    className="w-24 px-3 py-1.5 text-sm font-semibold text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                    min="500"
                    max="100000"
                    step="500"
                  />
                </div>
              </div>
              <input
                type="range"
                value={monthlyAmount}
                onChange={(e) => setMonthlyAmount(Number(e.target.value))}
                min="500"
                max="100000"
                step="500"
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-gray-900"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>₹500</span>
                <span>₹1,00,000</span>
              </div>
            </div>
          ) : (
            <div>
              <div className="flex justify-between items-center mb-3">
                <label className="text-sm font-medium text-gray-700">
                  Lumpsum Amount
                </label>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-500">₹</span>
                  <input
                    type="number"
                    value={lumpsumAmount}
                    onChange={(e) => setLumpsumAmount(Number(e.target.value))}
                    className="w-28 px-3 py-1.5 text-sm font-semibold text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                    min="10000"
                    max="10000000"
                    step="10000"
                  />
                </div>
              </div>
              <input
                type="range"
                value={lumpsumAmount}
                onChange={(e) => setLumpsumAmount(Number(e.target.value))}
                min="10000"
                max="10000000"
                step="10000"
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-gray-900"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>₹10,000</span>
                <span>₹1,00,00,000</span>
              </div>
            </div>
          )}

          <div>
            <div className="flex justify-between items-center mb-3">
              <label className="text-sm font-medium text-gray-700">
                Expected Annual Return
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  value={expectedReturn}
                  onChange={(e) => setExpectedReturn(Number(e.target.value))}
                  className="w-20 px-3 py-1.5 text-sm font-semibold text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                  min="1"
                  max="30"
                  step="0.5"
                />
                <span className="text-xs text-gray-500">%</span>
              </div>
            </div>
            <input
              type="range"
              value={expectedReturn}
              onChange={(e) => setExpectedReturn(Number(e.target.value))}
              min="1"
              max="30"
              step="0.5"
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-gray-900"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>1%</span>
              <span>30%</span>
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center mb-3">
              <label className="text-sm font-medium text-gray-700">
                Time Period
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  value={timePeriod}
                  onChange={(e) => setTimePeriod(Number(e.target.value))}
                  className="w-20 px-3 py-1.5 text-sm font-semibold text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                  min="1"
                  max="40"
                  step="1"
                />
                <span className="text-xs text-gray-500">Years</span>
              </div>
            </div>
            <input
              type="range"
              value={timePeriod}
              onChange={(e) => setTimePeriod(Number(e.target.value))}
              min="1"
              max="40"
              step="1"
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-gray-900"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>1 Year</span>
              <span>40 Years</span>
            </div>
          </div>
        </div>

        <div className="space-y-4 flex flex-col justify-center">
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-5 border border-gray-200">
            <div className="space-y-4">
              <div>
                <p className="text-xs text-gray-600 mb-1">Total Value</p>
                <p className="text-3xl md:text-4xl font-bold text-gray-900">
                  ₹{results.totalValue.toLocaleString('en-IN')}
                </p>
              </div>
              
              <div className="h-px bg-gray-300"></div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-gray-600 mb-1">Your Investment</p>
                  <p className="text-lg md:text-xl font-semibold text-gray-900">
                    ₹{results.totalInvestment.toLocaleString('en-IN')}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-gray-600 mb-1">Expected Returns</p>
                  <p className="text-lg md:text-xl font-semibold text-green-600">
                    ₹{results.expectedReturns.toLocaleString('en-IN')}
                  </p>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex h-8 rounded-lg overflow-hidden">
                  <div
                    className="bg-gray-400 flex items-center justify-center text-xs font-medium text-white"
                    style={{
                      width: `${(results.totalInvestment / results.totalValue) * 100}%`,
                    }}
                  >
                    {((results.totalInvestment / results.totalValue) * 100).toFixed(0)}%
                  </div>
                  <div
                    className="bg-green-500 flex items-center justify-center text-xs font-medium text-white"
                    style={{
                      width: `${(results.expectedReturns / results.totalValue) * 100}%`,
                    }}
                  >
                    {((results.expectedReturns / results.totalValue) * 100).toFixed(0)}%
                  </div>
                </div>
                <div className="flex justify-between text-xs">
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 bg-gray-400 rounded"></div>
                    <span className="text-gray-600">Invested</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 bg-green-500 rounded"></div>
                    <span className="text-gray-600">Returns</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
            <h3 className="text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Risk & Return Fundamentals
            </h3>
            <ul className="space-y-2 text-xs text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-0.5">•</span>
                <span>
                  {calculatorType === "sip" 
                    ? "SIP helps average out market volatility through rupee cost averaging"
                    : "Lumpsum investment is ideal when you have a large amount to invest at once"}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-0.5">•</span>
                <span>Past performance doesn't guarantee future returns</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-0.5">•</span>
                <span>Longer investment periods typically reduce risk and improve returns</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-0.5">•</span>
                <span>Market-linked returns can vary significantly year-on-year</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
