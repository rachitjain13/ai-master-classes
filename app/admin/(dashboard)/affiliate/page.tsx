"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface Affiliate {
  _id: string;
  name: string;
  email: string;
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

export default function AffiliatePage() {
  const [loading, setLoading] = useState(true);

  const [affiliates, setAffiliates] = useState<Affiliate[]>([]);

  async function loadAffiliates() {
    try {
      const res = await fetch(
        "/api/admin/affiliate/list"
      );

      const data = await res.json();

      if (data.success) {
        setAffiliates(data.affiliates);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    void Promise.resolve().then(loadAffiliates);
  }, []);

  return (
    <div className="space-y-6">

      <div className="flex items-center justify-between">

        <div>

          <h1 className="text-2xl font-semibold text-black">
            Affiliates
          </h1>

          <p className="mt-1 text-sm text-neutral-500 text-black">
            Manage all affiliate partners.
          </p>

        </div>

        <Link
          href="/admin/affiliate/create"
          className="rounded-lg bg-black px-5 py-2 text-sm font-medium text-white hover:bg-neutral-900 text-black"
        >
          + Create Affiliate
        </Link>

      </div>

      <div className="overflow-hidden rounded-xl border border-neutral-200 bg-white text-black">

        <table className="w-full">

          <thead className="border-b border-neutral-200 bg-neutral-50 text-black" >

            <tr>

              <th className="px-6 py-4 text-left text-xs font-semibold uppercase text-black">
                Name
              </th>
    
              <th className="px-6 py-4 text-left text-xs font-semibold uppercase text-black">
                Email
              </th>

              <th className="px-6 py-4 text-left text-xs font-semibold uppercase text-black">
                Code
              </th>

              <th className="px-6 py-4 text-left text-xs font-semibold uppercase text-black">
                Commission
              </th>

              <th className="px-6 py-4 text-left text-xs font-semibold uppercase text-black">
                Status
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold uppercase">
  Clicks
</th>

<th className="px-6 py-4 text-left text-xs font-semibold uppercase">
  Sales
</th>

<th className="px-6 py-4 text-left text-xs font-semibold uppercase">
  Revenue
</th>

<th className="px-6 py-4 text-left text-xs font-semibold uppercase">
  Earned
</th>

<th className="px-6 py-4 text-left text-xs font-semibold uppercase">
  Pending
</th>

<th className="px-6 py-4 text-left text-xs font-semibold uppercase">
  Action
</th>

            </tr>

          </thead>

          <tbody>

            {loading ? (

              <tr>

                <td
                  colSpan={5}
                  className="px-6 py-12 text-center text-sm text-neutral-500 text-black"
                >
                  Loading...
                </td>

              </tr>

            ) : affiliates.length === 0 ? (

              <tr>

                <td
                  colSpan={5}
                  className="px-6 py-12 text-center text-sm text-neutral-500 text-black "
                >
                  No affiliates found.
                </td>

              </tr>

            ) : (

              affiliates.map((affiliate) => (

                <tr
                  key={affiliate._id}
                  className="border-t border-neutral-200 text-black"
                >

                  <td className="px-6 py-4">

                    {affiliate.name}

                  </td>

                  <td className="px-6 py-4">

                    {affiliate.email}

                  </td>

                  <td className="px-6 py-4 font-medium">

                    {affiliate.affiliateCode}

                  </td>

                  <td className="px-6 py-4">

                    {affiliate.commissionType ===
                    "PERCENTAGE"
                      ? `${affiliate.commissionValue}%`
                      : `₹${affiliate.commissionValue}`}

                  </td>

                  <td className="px-6 py-4">

                    <span
                      className={`rounded-full px-3 py-1 text-xs font-medium text-black ${
                        affiliate.status === "ACTIVE"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {affiliate.status}
                    </span>

                  </td>
                  <td className="px-6 py-4 text-black">
  {affiliate.clicks}
</td>

<td className="px-6 py-4 text-black">
  {affiliate.sales}
</td>

<td className="px-6 py-4 text-black">
  ₹{affiliate.revenue}
</td>

<td className="px-6 py-4 text-black">
  ₹{affiliate.commissionEarned}
</td>

<td className="px-6 py-4 text-black ">
  ₹
  {affiliate.commissionEarned -
    affiliate.commissionPaid}
</td>

<td className="px-6 py-4 text-black">

  <Link
    href={`/admin/affiliate/${affiliate.affiliateCode}`}
    className="rounded-lg bg-black px-4 py-2 text-white text-sm text-black hover:bg-neutral-900"
  >
    View
  </Link>

</td>

                </tr>

              ))

            )}

          </tbody>

        </table>

      </div>

    </div>
  );
}