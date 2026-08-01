"use client";

import {
  BookOpen,
  IndianRupee,
  Users,
  Eye,
  Trophy,
  Clock3,
} from "lucide-react";

import StatCard from "./StatCard";

export default function DashboardCards() {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

      <StatCard
        title="Books Sold"
        value="132"
        subtitle="+12 Today"
        icon={BookOpen}
        color="#06b6d4"
      />

      <StatCard
        title="Revenue"
        value="₹1,31,868"
        subtitle="+18%"
        icon={IndianRupee}
        color="#10b981"
      />

      <StatCard
        title="Customers"
        value="132"
        subtitle="All Users"
        icon={Users}
        color="#8b5cf6"
      />

      <StatCard
        title="Readers"
        value="87"
        subtitle="Currently Active"
        icon={Eye}
        color="#f59e0b"
      />

      <StatCard
        title="Completion"
        value="82%"
        subtitle="Excellent"
        icon={Trophy}
        color="#ef4444"
      />

      <StatCard
        title="Avg Reading"
        value="2h 18m"
        subtitle="Per User"
        icon={Clock3}
        color="#6366f1"
      />

    </div>
  );
}