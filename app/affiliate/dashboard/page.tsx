"use client";

import { useEffect, useState } from "react";

interface Affiliate {
  name: string;
  email: string;
  affiliateCode: string;
  commissionType: "PERCENTAGE" | "FIXED";
  commissionValue: number;
  clicks: number;
  sales: number;
  revenue: number;
  commissionEarned: number;
  commissionPaid: number;
}

export default function AffiliateDashboardPage() {
  const [loading, setLoading] = useState(true);

  const [affiliate, setAffiliate] =
    useState<Affiliate | null>(null);

  useEffect(() => {
    async function loadAffiliate() {
      try {
        const res = await fetch("/api/affiliate/me");

        const data = await res.json();

        if (data.success) {
          setAffiliate(data.affiliate);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    loadAffiliate();
  }, []);

  if (loading) {
    return (
      <div className="p-10 text-lg">
        Loading...
      </div>
    );
  }

  if (!affiliate) {
    return (
      <div className="p-10 text-red-600">
        Unable to load dashboard.
      </div>
    );
  }

  const affiliateLink =
  `${process.env.NEXT_PUBLIC_APP_URL}/?ref=${affiliate.affiliateCode}`;

  const pending =
    affiliate.commissionEarned -
    affiliate.commissionPaid;

  return (
    <main className="p-8 space-y-8 text-black">

      <div>

        <h1 className="text-3xl font-bold text-black">
          Welcome, {affiliate.name} 👋
        </h1>

        <p className="text-neutral-500 mt-2 text-black">
          Affiliate Dashboard
        </p>

      </div>

      {/* Affiliate Link */}

      <div className="rounded-xl border bg-white p-6 text-black">

        <h2 className="text-lg font-semibold text-black">
          Your Affiliate Link
        </h2>

        <div className="mt-4 flex gap-3 text-black">

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

              alert("Link Copied");
            }}
            className="rounded-lg bg-black px-5 text-white text-black"
          >
            Copy
          </button>

        </div>

      </div>

      {/* Stats */}

      <div className="grid gap-6 md:grid-cols-3 text-black">

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
          value={`₹${pending}`}
        />

      </div>

    </main>
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
    <div className="rounded-xl border bg-white p-6 text-black ">

      <p className="text-sm text-neutral-500 text-black">
        {title}
      </p>

      <h2 className="mt-2 text-3xl font-bold text-black">
        {value}
      </h2>

    </div>
  );
}