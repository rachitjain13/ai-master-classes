"use client";

import { useCallback, useEffect, useState } from "react";
import { useParams } from "next/navigation";

interface Affiliate {
  name: string;
  email: string;
  phone?: string;
  affiliateCode: string;
  commissionType: "PERCENTAGE" | "FIXED";
  commissionValue: number;
  status: "ACTIVE" | "INACTIVE";
  clicks: number;
  sales: number;
  revenue: number;
  commissionEarned: number;
  commissionPaid: number;
}
interface Order {
  orderId: string;
  name: string;
  email: string;
  amount: number;
  paymentStatus: string;
  createdAt: string;
}

export default function AffiliateDetailsPage() {
  const { code } = useParams<{ code: string }>();

  const [loading, setLoading] = useState(true);

  const [affiliate, setAffiliate] =
    useState<Affiliate | null>(null);
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    if (!code) {
      return;
    }

    async function fetchAffiliate() {
      try {
        const res = await fetch(`/api/admin/affiliate/${code}`);
        const data = await res.json();
        const orderRes = await fetch(
          `/api/admin/affiliate/${code}/orders`
        );

        const orderData = await orderRes.json();

        if (orderData.success) {
          setOrders(orderData.orders);
        }

        if (data.success) {
          setAffiliate(data.affiliate);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchAffiliate();
  }, [code]);


  if (loading) {
    return (
      <div className="text-neutral-500">
        Loading...
      </div>
    );
  }

  if (!affiliate) {
    return (
      <div className="text-red-600">
        Affiliate not found.
      </div>
    );
  }


  const affiliateLink =
    `${process.env.NEXT_PUBLIC_APP_URL}/?ref=${affiliate.affiliateCode}`;

  return (
    <div className="space-y-8">

      <div>

        <h1 className="text-2xl font-semibold text-black">
          Affiliate Details
        </h1>

        <p className="mt-1 text-sm text-neutral-500 text-black">
          Manage affiliate account.
        </p>

      </div>

      {/* Basic Information */}

      <div className="rounded-xl border bg-white p-6 text-black">

        <h2 className="mb-6 text-lg font-semibold text-black" >
          Basic Information
        </h2>

        <div className="grid grid-cols-2 gap-6 text-black">

          <Info
            label="Name"
            value={affiliate.name}
          />

          <Info
            label="Email"
            value={affiliate.email}
          />

          <Info
            label="Phone"
            value={
              affiliate.phone || "-"
            }
          />

          <Info
            label="Affiliate Code"
            value={
              affiliate.affiliateCode
            }
          />

          <Info
            label="Commission"
            value={
              affiliate.commissionType ===
                "PERCENTAGE"
                ? `${affiliate.commissionValue}%`
                : `₹${affiliate.commissionValue}`
            }
          />

          <Info
            label="Status"
            value={affiliate.status}
          />

        </div>

      </div>

      {/* Affiliate Link */}

      <div className="rounded-xl border bg-white p-6 text-black">

        <h2 className="mb-4 text-lg font-semibold text-black">
          Affiliate Link
        </h2>

        <div className="flex gap-3">

          <input
            readOnly
            value={affiliateLink}
            className="flex-1 rounded-lg border px-3 py-2 text-black"
          />

          <button
            onClick={() => {
              navigator.clipboard.writeText(
                affiliateLink
              );

              alert("Link copied.");
            }}
            className="rounded-lg bg-black px-5 text-white"
          >
            Copy
          </button>

        </div>

      </div>

      {/* Analytics */}

      <div className="grid grid-cols-3 gap-6 text-black">

        <Card
          title="Clicks"
          value={affiliate.clicks}
        />

        <Card
          title="Sales"
          value={affiliate.sales}
        />

        <Card
          title="Revenue"
          value={`₹${affiliate.revenue}`}
        />

        <Card
          title="Commission"
          value={`₹${affiliate.commissionEarned}`}
        />

        <Card
          title="Paid"
          value={`₹${affiliate.commissionPaid}`}
        />

        <Card
          title="Pending"
          value={`₹${affiliate.commissionEarned -
            affiliate.commissionPaid
            }`}
        />

      </div>
      <div className="rounded-xl border bg-white p-6 text-black">

        <h2 className="mb-4 text-lg font-semibold">
          Orders
        </h2>

        {orders.length === 0 ? (

          <p className="text-neutral-500">
            No orders yet.
          </p>

        ) : (

          <table className="w-full">

            <thead>

              <tr className="border-b">

                <th className="p-3 text-left">
                  Order
                </th>

                <th className="p-3 text-left">
                  Customer
                </th>

                <th className="p-3 text-left">
                  Amount
                </th>

                <th className="p-3 text-left">
                  Status
                </th>

                <th className="p-3 text-left">
                  Date
                </th>

              </tr>

            </thead>

            <tbody>

              {orders.map((order) => (

                <tr
                  key={order.orderId}
                  className="border-b"
                >

                  <td className="p-3">
                    {order.orderId}
                  </td>

                  <td className="p-3">
                    {order.name}
                  </td>

                  <td className="p-3">
                    ₹{order.amount}
                  </td>

                  <td className="p-3">
                    {order.paymentStatus}
                  </td>

                  <td className="p-3">
                    {new Date(
                      order.createdAt
                    ).toLocaleDateString()}
                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        )}

      </div>

    </div>
  );
}

function Info({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div>
      <p className="text-sm text-neutral-500 text-black">
        {label}
      </p>

      <p className="mt-1 font-medium text-black">
        {value}
      </p>
    </div>
  );
}

function Card({
  title,
  value,
}: {
  title: string;
  value: string | number;
}) {
  return (
    <div className="rounded-xl border bg-white p-6 text-black">

      <p className="text-sm text-neutral-500 text-black">
        {title}
      </p>

      <h2 className="mt-2 text-2xl font-bold text-black">
        {value}
      </h2>

    </div>
  );
}