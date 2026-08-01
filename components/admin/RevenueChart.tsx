"use client";

import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import {
//   TooltipProps,
} from "recharts";

// import {
//   NameType,
//   ValueType,
// } from "recharts/types/component/DefaultTooltipContent";
const data = [
  { month: "Jan", revenue: 12000 },
  { month: "Feb", revenue: 18000 },
  { month: "Mar", revenue: 26000 },
  { month: "Apr", revenue: 32000 },
  { month: "May", revenue: 41000 },
  { month: "Jun", revenue: 48000 },
  { month: "Jul", revenue: 56000 },
  { month: "Aug", revenue: 63000 },
  { month: "Sep", revenue: 72000 },
  { month: "Oct", revenue: 81000 },
  { month: "Nov", revenue: 92000 },
  { month: "Dec", revenue: 108000 },
];

type CustomTooltipProps = {
  active?: boolean;
  payload?: {
    value: number;
  }[];
  label?: string;
};

function CustomTooltip({
  active,
  payload,
  label,
}: CustomTooltipProps) {
  if (!active || !payload?.length) return null;

  return (
    <div className="rounded-xl border border-cyan-500/20 bg-[#0b1220] px-4 py-3 shadow-xl">
      <p className="mb-1 text-sm text-gray-400">{label}</p>

      <h3 className="text-lg font-bold text-cyan-400">
        ₹ {payload[0].value.toLocaleString()}
      </h3>
    </div>
  );
}
export default function RevenueChart() {
  return (
    <div className="glass rounded-3xl border border-white/10 p-6">

      <div className="mb-6 flex items-center justify-between">

        <div>

          <h2 className="text-2xl font-bold text-white">
            Revenue Overview
          </h2>

          <p className="mt-1 text-sm text-gray-400">
            Monthly revenue generated from book sales
          </p>

        </div>

        <div className="rounded-xl bg-cyan-500/10 px-4 py-2">

          <span className="text-sm font-semibold text-cyan-400">
            +18.6%
          </span>

        </div>

      </div>

      <div className="h-[360px]">

        <ResponsiveContainer width="100%" height="100%">

          <AreaChart data={data}>

            <defs>

              <linearGradient
                id="revenueGradient"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="5%"
                  stopColor="#06b6d4"
                  stopOpacity={0.45}
                />

                <stop
                  offset="95%"
                  stopColor="#06b6d4"
                  stopOpacity={0}
                />

              </linearGradient>

            </defs>

            <CartesianGrid
              stroke="#334155"
              strokeDasharray="3 3"
            />

            <XAxis
              dataKey="month"
              tick={{ fill: "#94a3b8" }}
              axisLine={false}
              tickLine={false}
            />

            <YAxis
              tick={{ fill: "#94a3b8" }}
              axisLine={false}
              tickLine={false}
              tickFormatter={(v) => `₹${v / 1000}k`}
            />

            <Tooltip content={<CustomTooltip />} />

            <Area
              type="monotone"
              dataKey="revenue"
              stroke="#06b6d4"
              strokeWidth={4}
              fill="url(#revenueGradient)"
              activeDot={{
                r: 7,
                fill: "#06b6d4",
              }}
            />

          </AreaChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}