"use client";

import { useCallback, useEffect, useState } from "react";
import { useParams } from "next/navigation";
import dynamic from "next/dynamic";

import ReaderHeader from "@/components/reader/ReaderHeader";

const PDFViewer = dynamic(
  () => import("@/components/reader/PDFViewer"),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-[80vh] items-center justify-center">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-zinc-700 border-t-white" />
      </div>
    ),
  }
);

interface ReaderApiResponse {
  success: boolean;
  pdfUrl: string;
  customer: {
    id: string;
    name: string;
    email: string;
    lastReadPage: number;
    totalPages: number;
    completed: boolean;
  };
}

export default function ReaderPage() {
  const params = useParams();

  const token = params.token as string;

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  const [pdfUrl, setPdfUrl] = useState("");

  const [customerName, setCustomerName] = useState("");

  const [customerEmail, setCustomerEmail] = useState("");

  const [currentPage, setCurrentPage] = useState(1);

  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    if (!token) return;

    let cancelled = false;

    async function fetchBook() {
      try {
        setLoading(true);
        console.log("Token:", token);
        const response = await fetch(`/api/reader/${token}`);

const text = await response.text();

console.log("Status:", response.status);
console.log("Response:", text);

let data: ReaderApiResponse;

try {
  data = JSON.parse(text);
} catch {
  throw new Error("API did not return JSON");
}

if (!response.ok || !data.success) {
  throw new Error(`API Error (${response.status})`);
}

        if (cancelled) return;

        setPdfUrl(data.pdfUrl);

        setCustomerName(data.customer.name);

        setCustomerEmail(data.customer.email);

        setCurrentPage(
          data.customer.lastReadPage || 1
        );

        setTotalPages(
          data.customer.totalPages || 0
        );

        setError("");

      } catch (err) {
        if (cancelled) return;

        console.error(err);

        setError("Unable to load your book.");

      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    void fetchBook();

    return () => {
      cancelled = true;
    };

  }, [token]);

  const handlePageChange = useCallback(
    (page: number) => {
      setCurrentPage(page);
    },
    []
  );

  const handleNext = useCallback(() => {
    setCurrentPage((prev) =>
      Math.min(prev + 1, totalPages || prev + 1)
    );
  }, [totalPages]);

  const handlePrevious = useCallback(() => {
    setCurrentPage((prev) =>
      Math.max(prev - 1, 1)
    );
  }, []);
    if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-black">
        <div className="flex flex-col items-center gap-5">
          <div className="h-14 w-14 animate-spin rounded-full border-4 border-zinc-700 border-t-white" />

          <h2 className="text-2xl font-bold text-white">
            Loading Your Book...
          </h2>

          <p className="text-sm text-zinc-400">
            Verifying your secure access...
          </p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-black px-6">
        <div className="w-full max-w-md rounded-2xl border border-red-500/20 bg-zinc-900 p-8 text-center">

          <h1 className="mb-3 text-3xl font-bold text-red-500">
            Access Denied
          </h1>

          <p className="text-zinc-300">
            {error}
          </p>

          <button
            onClick={() => window.location.reload()}
            className="mt-8 rounded-xl bg-white px-6 py-3 font-semibold text-black transition hover:scale-105"
          >
            Retry
          </button>

        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white">

      <ReaderHeader
        title="AI Master Classes"
        currentPage={currentPage}
        totalPages={totalPages}
        onPrevious={handlePrevious}
        onNext={handleNext}
        disablePrevious={currentPage <= 1}
        disableNext={
          totalPages > 0 &&
          currentPage >= totalPages
        }
      />

      <div className="mx-auto max-w-7xl px-5 py-6">

        <PDFViewer
          pdfUrl={pdfUrl}
          currentPage={currentPage}
          onPageChange={handlePageChange}
          customerName={customerName}
          customerEmail={customerEmail}
        />

      </div>
            {/* Security Overlay */}
      <div
        className="pointer-events-none fixed inset-0 z-[9999] select-none"
        aria-hidden="true"
      />

    </main>
  );
}