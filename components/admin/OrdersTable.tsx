"use client";

import StatusBadge from "./StatusBadge";
import EmptyState from "./EmptyState";
import Pagination from "./Pagination";

export interface Order {
  _id: string;
  name: string;
  email: string;
  orderId: string;
  amount: number;
  paymentStatus: "PAID" | "PENDING" | "FAILED";
  affiliateCode?: string | null;
  createdAt: string;
}

interface OrdersTableProps {
  orders: Order[];

  page: number;

  pages: number;

  onPageChange: (page: number) => void;
}

export default function OrdersTable({
  orders,
  page,
  pages,
  onPageChange,
}: OrdersTableProps) {

  if (!orders.length) {
    return (
      <EmptyState
        title="No Orders Found"
        description="There are no orders matching your search."
      />
    );
  }

  return (

    <div className="overflow-hidden rounded-xl border border-neutral-200 bg-white text-black shadow-sm">

      <div className="overflow-x-auto ">

        <table className="min-w-full text-black">

          <thead className="border-b border-neutral-200 bg-neutral-50 text-black">

            <tr>

              <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-neutral-600">

                Customer

              </th>

              <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-neutral-600">

                Email

              </th>

              <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-neutral-600">

                Amount

              </th>

              <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-neutral-600">

                Status

              </th>

              <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-neutral-600">

                Affiliate

              </th>

              <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-neutral-600">

                Date

              </th>

              <th className="px-6 py-4 text-center text-xs font-semibold uppercase tracking-wide text-neutral-600">

                Action

              </th>

            </tr>

          </thead>

          <tbody>
                        {orders.map((order) => (

              <tr
                key={order._id}
                className="border-b border-neutral-100 hover:bg-neutral-50 text-black"
              >

                <td className="px-6 py-4">

                  <div className="font-medium text-black">

                    {order.name}

                  </div>

                </td>

                <td className="px-6 py-4 text-sm text-neutral-600">

                  {order.email}

                </td>

                <td className="px-6 py-4 font-medium text-black">

                  ₹{order.amount}

                </td>

                <td className="px-6 py-4">

                  <StatusBadge
                    status={order.paymentStatus}
                  />

                </td>

                <td className="px-6 py-4 text-sm">

                  {order.affiliateCode || "—"}

                </td>

                <td className="px-6 py-4 text-sm text-neutral-500">

                  {new Date(
                    order.createdAt
                  ).toLocaleDateString("en-IN", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  })}

                </td>

                <td className="px-6 py-4 text-center text-black">

                  <button
                    onClick={() =>
                      alert(
                        `Order ID: ${order.orderId}`
                      )
                    }
                    className="rounded-lg border border-neutral-300 px-3 py-1.5 text-xs font-medium hover:bg-neutral-100 text-black"
                  >
                    View
                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>
            <div className="border-t border-neutral-200 bg-white px-6 py-4">

        <Pagination
          page={page}
          pages={pages}
          onChange={onPageChange}
        />

      </div>

    </div>

  );

}