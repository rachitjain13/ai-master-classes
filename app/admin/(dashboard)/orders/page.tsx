"use client";

import {
  useCallback,
  useEffect,
  useState,
} from "react";

import OrdersTable, {
  Order,
} from "@/components/admin/OrdersTable";

import SearchBar from "@/components/admin/SearchBar";

interface OrdersResponse {
  success: boolean;

  pagination: {
    page: number;
    limit: number;
    total: number;
    pages: number;
  };

  orders: Order[];
}

export default function OrdersPage() {

  const [loading, setLoading] = useState(true);

  const [orders, setOrders] = useState<Order[]>([]);

  const [page, setPage] = useState(1);

  const [pages, setPages] = useState(1);

  const [status, setStatus] = useState("ALL");

  const [search, setSearch] = useState("");


  useEffect(() => {
    let isCancelled = false;

    const fetchOrders = async () => {
      try {
        setLoading(true);

        const res = await fetch(
          `/api/admin/orders?page=${page}&status=${status}&search=${encodeURIComponent(search)}`
        );

        const data: OrdersResponse = await res.json();

        if (!data.success || isCancelled) return;

        setOrders(data.orders);
        setPages(data.pagination.pages);
      } catch (err) {
        console.error(err);
      } finally {
        if (!isCancelled) {
          setLoading(false);
        }
      }
    };

    fetchOrders();

    return () => {
      isCancelled = true;
    };
  }, [page, status, search]);

  return (

    <div className="space-y-6">

      <div>

        <h2 className="text-2xl font-semibold text-black">

          Orders

        </h2>

        <p className="mt-1 text-sm text-neutral-500 text-black">

          Manage all customer orders.

        </p>

      </div>

      <div className="flex flex-wrap items-center justify-between gap-4 text-black">

        <SearchBar
          value={search}
          onChange={(value) => {
            setSearch(value);
            setPage(1);
          }}
        />

        <select
          value={status}
          onChange={(e) => {
            setStatus(e.target.value);
            setPage(1);
          }}
          className="h-10 rounded-lg border border-neutral-300 bg-white px-3 text-sm"
        >

          <option value="ALL">
            All Orders
          </option>

          <option value="PAID">
            Paid
          </option>

          <option value="PENDING">
            Pending
          </option>

          <option value="FAILED">
            Failed
          </option>

        </select>

      </div>

      {loading ? (

        <div className="flex h-64 items-center justify-center rounded-xl border border-neutral-200 bg-white">

          <p className="text-sm text-neutral-500">

            Loading orders...

          </p>

        </div>

      ) : (

        <OrdersTable
          orders={orders}
          page={page}
          pages={pages}
          onPageChange={setPage}
        />

      )}

    </div>

  );

}