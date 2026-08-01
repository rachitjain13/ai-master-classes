"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

interface PDFViewerProps {
  pdfUrl: string;

  currentPage: number;

  onPageChange: (page: number) => void;

  customerName: string;

  customerEmail: string;
}

export default function PDFViewer({
  pdfUrl,
  currentPage,
  onPageChange,
  customerName,
  customerEmail,
}: PDFViewerProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const [numPages, setNumPages] = useState(0);

  const [pageWidth, setPageWidth] = useState(900);

  const [scale, setScale] = useState(1);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  const watermark = useMemo(() => {
    return `${customerName}\n${customerEmail}`;
  }, [customerName, customerEmail]);

  useEffect(() => {
    const updateWidth = () => {
      if (!containerRef.current) return;

      const width = containerRef.current.clientWidth;

      if (width < 640) {
        setPageWidth(width - 24);
      } else if (width < 1024) {
        setPageWidth(width - 40);
      } else {
        setPageWidth(900);
      }
    };

    updateWidth();

    window.addEventListener("resize", updateWidth);

    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        onPageChange(Math.max(currentPage - 1, 1));
      }

      if (e.key === "ArrowRight") {
        onPageChange(
          Math.min(currentPage + 1, numPages || currentPage + 1)
        );
      }

      if (
        (e.ctrlKey || e.metaKey) &&
        ["s", "p", "c"].includes(e.key.toLowerCase())
      ) {
        e.preventDefault();
      }
    };

    window.addEventListener("keydown", handler);

    return () => {
      window.removeEventListener("keydown", handler);
    };
  }, [currentPage, numPages, onPageChange]);

  const handleLoadSuccess = ({
    numPages,
  }: {
    numPages: number;
  }) => {
    setNumPages(numPages);

    setLoading(false);

    setError("");
  };

  const handleLoadError = (err: Error) => {
    console.error(err);

    setLoading(false);

    setError("Unable to load PDF.");
  };
    return (
    <div
      ref={containerRef}
      className="relative flex w-full flex-col items-center overflow-hidden rounded-2xl bg-zinc-950"
      onContextMenu={(e) => e.preventDefault()}
    >
      {loading && (
        <div className="flex h-[70vh] w-full items-center justify-center">
          <div className="flex flex-col items-center gap-4">
            <div className="h-12 w-12 animate-spin rounded-full border-4 border-zinc-700 border-t-white" />

            <p className="text-sm text-zinc-400">
              Loading your book...
            </p>
          </div>
        </div>
      )}

      {error && (
        <div className="flex h-[70vh] w-full items-center justify-center">
          <div className="rounded-xl border border-red-500/20 bg-red-500/10 p-8 text-center">
            <h2 className="text-xl font-semibold text-red-400">
              Failed to load PDF
            </h2>

            <p className="mt-2 text-zinc-400">
              {error}
            </p>
          </div>
        </div>
      )}

      {!error && (
        <Document
          file={pdfUrl}
          loading={
  <div className="flex h-[70vh] items-center justify-center">
    <div className="h-12 w-12 animate-spin rounded-full border-4 border-zinc-700 border-t-white" />
  </div>
}
          onLoadSuccess={handleLoadSuccess}
          onLoadError={handleLoadError}
        >
          <div className="relative">

            <Page
              pageNumber={currentPage}
              width={pageWidth}
              scale={scale}
              renderAnnotationLayer
              renderTextLayer
            />

            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">

              <div
                className="select-none whitespace-pre-line text-center text-4xl font-bold uppercase tracking-[8px]"
                style={{
                  color: "rgba(255,255,255,0.08)",
                  transform: "rotate(-35deg)",
                  userSelect: "none",
                }}
              >
                {watermark}
              </div>

            </div>

          </div>
        </Document>
      )}

      {!loading && !error && (
        <div className="mt-6 flex w-full max-w-5xl items-center justify-between px-4">

          <button
            onClick={() =>
              onPageChange(Math.max(currentPage - 1, 1))
            }
            disabled={currentPage === 1}
            className="rounded-xl bg-zinc-800 px-5 py-3 text-sm font-semibold transition hover:bg-zinc-700 disabled:cursor-not-allowed disabled:opacity-40"
          >
            ← Previous
          </button>

          <div className="text-center">

            <p className="text-lg font-semibold">
              Page {currentPage} / {numPages}
            </p>

            <p className="mt-1 text-sm text-zinc-400">
              {numPages > 0
                ? `${Math.round((currentPage / numPages) * 100)}% Completed`
                : "Loading..."}
            </p>

          </div>

          <button
            onClick={() =>
              onPageChange(
                Math.min(currentPage + 1, numPages)
              )
            }
            disabled={
              numPages === 0 || currentPage >= numPages
            }
            className="rounded-xl bg-white px-5 py-3 text-sm font-bold text-black transition hover:scale-105 disabled:cursor-not-allowed disabled:opacity-40"
          >
            Next →
          </button>

        </div>
      )}
            {!loading && !error && (
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">

          <button
            onClick={() =>
              setScale((prev) => Math.max(0.5, prev - 0.1))
            }
            className="rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-2 text-sm font-medium transition hover:bg-zinc-800"
          >
            Zoom -
          </button>

          <span className="min-w-[80px] text-center text-sm font-medium text-zinc-300">
            {(scale * 100).toFixed(0)}%
          </span>

          <button
            onClick={() =>
              setScale((prev) => Math.min(3, prev + 0.1))
            }
            className="rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-2 text-sm font-medium transition hover:bg-zinc-800"
          >
            Zoom +
          </button>

          <button
            onClick={() => setScale(1)}
            className="rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-2 text-sm font-medium transition hover:bg-zinc-800"
          >
            Reset
          </button>

        </div>
      )}

    </div>
  );
}