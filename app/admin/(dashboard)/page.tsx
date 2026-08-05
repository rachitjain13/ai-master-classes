"use client";

import { useEffect, useState } from "react";
import DashboardCard from "@/components/admin/DashboardCard";

interface DashboardData {
  success: boolean;
  stats: {
    revenue: number;
    orders: number;
    customers: number;
    paidOrders: number;
    pendingOrders: number;
    failedOrders: number;
  };
  recentOrders: {
    id: string;
    name: string;
    email: string;
    amount: number;
    paymentStatus: "PAID" | "PENDING" | "FAILED";
    createdAt: string;
  }[];
}

export default function AdminDashboard() {

  const [loading, setLoading] = useState(true);

  const [dashboard, setDashboard] =
    useState<DashboardData | null>(null);

  useEffect(() => {

    let mounted = true;

    const loadDashboard = async () => {

      try {

        const res = await fetch("/api/admin/dashboard");

        const data = await res.json();

        if (mounted) {

          setDashboard(data);

        }

      } catch (error) {

        if (mounted) {

          console.error(error);

        }

      } finally {

        if (mounted) {

          setLoading(false);

        }

      }

    };

    void loadDashboard();

    return () => {

      mounted = false;

    };

  }, []);

  if (loading) {

    return (

      <div className="flex h-[70vh] items-center justify-center text-black">

        <p className="text-sm text-neutral-500 text-black">

          Loading Dashboard...

        </p>

      </div>

    );

  }

  if (!dashboard) {

    return (

      <div>

        Unable to load dashboard.

      </div>

    );

  }

  return (

    <div className="space-y-8">

      {/* Heading */}

      <div>

        <h2 className="text-2xl font-semibold text-black">

          Dashboard

        </h2>

        <p className="mt-1 text-sm text-neutral-500 text-black">

          Live statistics from your database.

        </p>

      </div>

      {/* Cards */}

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3 text-black">

        <DashboardCard
          title="Revenue"
          value={`₹${dashboard.stats.revenue}`}
        />

        <DashboardCard
          title="Orders"
          value={dashboard.stats.orders}
        />

        <DashboardCard
          title="Customers"
          value={dashboard.stats.customers}
        />

        <DashboardCard
          title="Paid Orders"
          value={dashboard.stats.paidOrders}
        />

        <DashboardCard
          title="Pending Orders"
          value={dashboard.stats.pendingOrders}
        />

        <DashboardCard
          title="Failed Orders"
          value={dashboard.stats.failedOrders}
        />

      </div>

      {/* Recent Orders */}

      <div className="overflow-hidden rounded-xl border border-neutral-200 bg-white text-black shadow-sm">

        <div className="border-b border-neutral-200 px-6 py-4 text-black">

          <h3 className="font-semibold text-black">

            Recent Orders

          </h3>

        </div>

        <div className="overflow-x-auto text-black">

          <table className="w-full text-black">

            <thead>

              <tr className="border-b border-neutral-200 bg-neutral-50 text-black">

                <th className="px-6 py-3 text-left text-xs font-semibold uppercase text-black">

                  Customer

                </th>

                <th className="px-6 py-3 text-left text-xs font-semibold uppercase text-black">

                  Email

                </th>

                <th className="px-6 py-3 text-left text-xs font-semibold uppercase text-black">

                  Amount

                </th>

                <th className="px-6 py-3 text-left text-xs font-semibold uppercase text-black">

                  Status

                </th>

                <th className="px-6 py-3 text-left text-xs font-semibold uppercase text-black">

                  Date

                </th>

              </tr>

            </thead>

            <tbody>

              {dashboard.recentOrders.map((order) => (

                <tr
                  key={order.id}
                  className="border-b border-neutral-100"
                >

                  <td className="px-6 py-4 text-sm text-black">

                    {order.name}

                  </td>

                  <td className="px-6 py-4 text-sm text-neutral-500 text-black">

                    {order.email}

                  </td>

                  <td className="px-6 py-4 text-sm font-medium text-black">

                    ₹{order.amount}

                  </td>

                  <td className="px-6 py-4">

                    <span
                      className={`rounded-full px-3 py-1 text-xs font-medium ${
                        order.paymentStatus === "PAID"
                          ? "bg-green-100 text-green-700"
                          : order.paymentStatus === "PENDING"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {order.paymentStatus}
                    </span>

                  </td>

                  <td className="px-6 py-4 text-sm text-neutral-500">

                    {new Date(
                      order.createdAt
                    ).toLocaleDateString()}

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>

  );

}