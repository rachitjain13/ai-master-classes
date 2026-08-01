"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  Cell,
} from "recharts";


const data = [
  { day: "Mon", sales: 8 },
  { day: "Tue", sales: 14 },
  { day: "Wed", sales: 11 },
  { day: "Thu", sales: 19 },
  { day: "Fri", sales: 24 },
  { day: "Sat", sales: 31 },
  { day: "Sun", sales: 27 },
];

const colors = [
  "#06b6d4",
  "#0ea5e9",
  "#3b82f6",
  "#6366f1",
  "#8b5cf6",
  "#a855f7",
  "#d946ef",
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

export default function SalesChart() {
  return (
    <div className="glass rounded-3xl border border-white/10 p-6">

      <div className="mb-6 flex items-center justify-between">

        <div>

          <h2 className="text-2xl font-bold text-white">
            Weekly Sales
          </h2>

          <p className="mt-1 text-sm text-gray-400">
            Books sold during this week
          </p>

        </div>

        <div className="rounded-xl bg-green-500/10 px-4 py-2">

          <span className="text-sm font-semibold text-green-400">
            +12.4%
          </span>

        </div>

      </div>

      <div className="h-[340px]">

        <ResponsiveContainer width="100%" height="100%">

          <BarChart data={data}>

            <CartesianGrid
              stroke="#334155"
              strokeDasharray="3 3"
            />

            <XAxis
              dataKey="day"
              tick={{ fill: "#94a3b8" }}
              axisLine={false}
              tickLine={false}
            />

            <YAxis
              tick={{ fill: "#94a3b8" }}
              axisLine={false}
              tickLine={false}
            />

            <Tooltip content={<CustomTooltip />} />

            <Bar
              dataKey="sales"
              radius={[8, 8, 0, 0]}
              animationDuration={1200}
            >
              {data.map((_, index) => (
                <Cell
                  key={index}
                  fill={colors[index % colors.length]}
                />
              ))}
            </Bar>

          </BarChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}