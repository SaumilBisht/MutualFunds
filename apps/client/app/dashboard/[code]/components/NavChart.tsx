"use client";

import { useState, useMemo, useEffect } from "react";
import {XAxis, YAxis, Tooltip, ResponsiveContainer, Area, AreaChart } from "recharts";
import axios from "axios";

interface NavDataPoint {
  date: string;
  nav: string;
}

interface NavHistoryData {
  schemeCode: string;
  schemeName: string;
  fundHouse: string;
  category: string;
  navData: NavDataPoint[];
  stats: {
    currentNav: number;
    changeToday: number;
    changeTodayPercent: string;
    weekHigh: number;
    weekLow: number;
    yearHigh: number;
    yearLow: number;
  };
  cachedAt: string;
}

const PERIODS = [
  { label: "1M", days: 30 },
  { label: "3M", days: 90 },
  { label: "6M", days: 180 },
  { label: "1Y", days: 365 },
  { label: "3Y", days: 1095 },
  { label: "5Y", days: 1825 },
  { label: "All", days: null },
];

export function NavChart({ schemeCode }: { schemeCode: string }) {
  const [selectedPeriod, setSelectedPeriod] = useState("1Y");
  const [data, setData] = useState<NavHistoryData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchNavHistory = async () => {
      setLoading(true);
      setError(false);
      try {
        const res = await axios.get(`http://localhost:3002/mf/nav-history/${schemeCode}`);
        if (res.data.success) {
          setData(res.data.data);
        } else {
          setError(true);
        }
      } catch (err) {
        console.error("Error fetching NAV history:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchNavHistory();
  }, [schemeCode]);

  const filteredData = useMemo(() => {
    if (!data?.navData) return [];

    const period = PERIODS.find((p) => p.label === selectedPeriod);
    if (!period?.days) return data.navData; // 'All' period

    return data.navData.slice(0, period.days);
  }, [data, selectedPeriod]);// filtered NAV(nav+date) data based on selected period

  const chartData = useMemo(() => {
    return filteredData.map((item) => ({
      date: item.date,
      nav: parseFloat(item.nav),
    }));
  }, [filteredData]);

  if (loading) {
    return (
      <div className="w-full bg-white rounded-lg shadow-sm p-6 border border-gray-200 animate-pulse">
        <div className="h-8 bg-gray-200 rounded w-1/4 mb-4"></div>
        <div className="h-64 bg-gray-200 rounded mb-4"></div>
        <div className="flex gap-2">
          {[1, 2, 3, 4, 5, 6, 7].map((i) => (
            <div key={i} className="h-9 w-14 bg-gray-200 rounded"></div>
          ))}
        </div>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="w-full bg-white rounded-lg shadow-sm p-6 border border-gray-200">
        <p className="text-gray-500 text-center">Unable to load NAV history</p>
      </div>
    );
  }

  const isPositive = data.stats.changeToday >= 0;

  return (
    <div className="w-full bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      
      <div className="mb-6">
        <div className="flex items-baseline gap-3 mb-1">
          <span className="text-4xl font-bold text-gray-900">
            ₹{data.stats.currentNav.toFixed(2)}
          </span>
          <span
            className={`text-lg font-semibold ${
              isPositive ? "text-green-600" : "text-red-600"
            }`}
          >
            {isPositive ? "+" : ""}
            {data.stats.changeToday.toFixed(2)} ({data.stats.changeTodayPercent}%)
          </span>
        </div>
        <p className="text-sm text-gray-500">Net Asset Value</p>
      </div>

      <div className="flex gap-2 mb-6 flex-wrap">
        {PERIODS.map((period) => (
          <button
            key={period.label}
            onClick={() => setSelectedPeriod(period.label)}
            className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${
              selectedPeriod === period.label
                ? "bg-gray-900 text-white shadow-md"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {period.label}
          </button>
        ))}
      </div>

      <div className="w-full h-80 mb-6">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={chartData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="navGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#1f2937" stopOpacity={0.15} />
                <stop offset="95%" stopColor="#1f2937" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis
              dataKey="date"
              stroke="#9ca3af"
              style={{ fontSize: "12px" }}
              tickFormatter={(date) => {
                const d = new Date(date);
                const month = d.toLocaleString("default", { month: "short" });
                return `${month} ${d.getDate()}`;
              }}
              tickLine={false}
            />
            <YAxis
              stroke="#9ca3af"
              style={{ fontSize: "12px" }}
              domain={["auto", "auto"]}
              tickFormatter={(value) => `₹${value.toFixed(0)}`}
              tickLine={false}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "#fff",
                border: "1px solid #e5e7eb",
                borderRadius: "8px",
                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
              }}
              labelFormatter={(date) => {
                const d = new Date(date);
                return d.toLocaleDateString("en-IN", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                });
              }}
              formatter={(value: number) => [`₹${value.toFixed(2)}`, "NAV"]}
            />
            <Area
              type="monotone"
              dataKey="nav"
              stroke="#1f2937"
              strokeWidth={2.5}
              fill="url(#navGradient)"
              animationDuration={800}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-gray-200">
        <div>
          <p className="text-xs text-gray-500 mb-1">1 Year High</p>
          <p className="text-lg font-semibold text-gray-900">
            ₹{data.stats.weekHigh.toFixed(2)}
          </p>
        </div>
        <div>
          <p className="text-xs text-gray-500 mb-1">1 Year Low</p>
          <p className="text-lg font-semibold text-gray-900">
            ₹{data.stats.weekLow.toFixed(2)}
          </p>
        </div>
        <div>
          <p className="text-xs text-gray-500 mb-1">All-Time High</p>
          <p className="text-lg font-semibold text-gray-900">
            ₹{data.stats.yearHigh.toFixed(2)}
          </p>
        </div>
        <div>
          <p className="text-xs text-gray-500 mb-1">All-Time Low</p>
          <p className="text-lg font-semibold text-gray-900">
            ₹{data.stats.yearLow.toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
}
