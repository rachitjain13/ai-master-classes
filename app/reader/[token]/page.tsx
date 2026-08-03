"use client";

import { useCallback, useEffect, useState } from "react";
import { useParams } from "next/navigation";
import dynamic from "next/dynamic";
import { BookOpen, ShieldCheck } from "lucide-react";

import ReaderHeader from "@/components/reader/ReaderHeader";

const PDFViewer = dynamic(
  () => import("@/components/reader/PDFViewer"),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-[80vh] items-center justify-center bg-[#f6f7fb]">

        <div className="flex flex-col items-center gap-5">

          <div className="h-12 w-12 animate-spin rounded-full border-[3px] border-neutral-300 border-t-black" />

          <p className="text-sm font-medium text-neutral-500">
            Loading PDF...
          </p>

        </div>

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

        const response = await fetch(`/api/reader/${token}`);

        const text = await response.text();

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

      } catch {

        if (cancelled) return;

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

      <main className="flex min-h-screen items-center justify-center bg-[#f6f7fb] px-6">

        <div className="w-full max-w-md rounded-3xl border border-neutral-200 bg-white p-10 shadow-xl">

          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-black">

            <BookOpen
              size={28}
              className="text-white"
            />

          </div>

          <h2 className="mt-8 text-center text-3xl font-bold text-black">

            Preparing Your Book

          </h2>

          <p className="mt-4 text-center leading-7 text-neutral-500">

            Verifying your secure access and preparing
            your reading experience.

          </p>

          <div className="mt-8 h-2 overflow-hidden rounded-full bg-neutral-200">

            <div className="h-full w-1/2 animate-pulse rounded-full bg-black" />

          </div>

          <div className="mt-6 flex items-center justify-center gap-2 text-sm text-neutral-500">

            <ShieldCheck size={16} />

            Secure Reader Enabled

          </div>

        </div>

      </main>

    );

  }
    if (error) {

    return (

      <main className="flex min-h-screen items-center justify-center bg-[#f6f7fb] px-6">

        <div className="w-full max-w-md rounded-3xl border border-red-200 bg-white p-10 shadow-xl">

          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-red-100">

            <ShieldCheck
              size={28}
              className="text-red-500"
            />

          </div>

          <h1 className="mt-8 text-center text-3xl font-bold text-black">

            Unable to Open Book

          </h1>

          <p className="mt-4 text-center leading-7 text-neutral-500">

            {error}

          </p>

          <button
            onClick={() => window.location.reload()}
            className="
              mt-8
              w-full
              rounded-xl
              bg-black
              py-3
              font-semibold
              text-white
              transition
              hover:bg-neutral-900
            "
          >

            Retry

          </button>

        </div>

      </main>

    );

  }

  return (

    <main className="min-h-screen bg-[#f6f7fb]">

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

      <div className="mx-auto max-w-[1550px] px-4 py-6 lg:px-8">

        {/* Reader Card */}

        <div
          className="
            overflow-hidden
            rounded-[28px]
            border
            border-neutral-200
            bg-white
            shadow-[0_15px_50px_rgba(0,0,0,.08)]
          "
        >

          <PDFViewer
            pdfUrl={pdfUrl}
            currentPage={currentPage}
            onPageChange={handlePageChange}
            customerName={customerName}
            customerEmail={customerEmail}
          />

        </div>
                {/* End Reader Card */}

      </div>

      {/* Security Overlay */}

      <div
        className="pointer-events-none fixed inset-0 z-[9999] select-none"
        aria-hidden="true"
      />

    </main>

  );

}