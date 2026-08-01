"use client";

import { BookOpen, ChevronLeft, ChevronRight } from "lucide-react";

interface ReaderHeaderProps {
  title: string;
  currentPage: number;
  totalPages: number;
  onPrevious: () => void;
  onNext: () => void;
  disablePrevious?: boolean;
  disableNext?: boolean;
}

export default function ReaderHeader({
  title,
  currentPage,
  totalPages,
  onPrevious,
  onNext,
  disablePrevious = false,
  disableNext = false,
}: ReaderHeaderProps) {
  const progress =
    totalPages > 0
      ? Math.round((currentPage / totalPages) * 100)
      : 0;

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800 bg-black/90 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* LEFT */}

        <div className="flex items-center gap-4">

          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-black shadow-lg">
            <BookOpen size={24} />
          </div>

          <div>

            <h1 className="text-lg font-bold text-white">
              {title}
            </h1>

            <p className="text-sm text-zinc-400">
              Secure Reader
            </p>

          </div>

        </div>

        {/* CENTER */}

        <div className="hidden lg:flex flex-col items-center w-[360px]">

          <div className="mb-2 flex w-full items-center justify-between text-xs text-zinc-500">

            <span>
              Page {currentPage}
            </span>

            <span>
              {totalPages}
            </span>

          </div>

          <div className="h-2 w-full overflow-hidden rounded-full bg-zinc-800">

            <div
              className="h-full rounded-full bg-gradient-to-r from-blue-500 via-cyan-500 to-emerald-400 transition-all duration-300"
              style={{
                width: `${progress}%`,
              }}
            />

          </div>

          <p className="mt-2 text-xs text-zinc-400">
            {progress}% Completed
          </p>

        </div>

        {/* RIGHT */}

        <div className="flex items-center gap-3">

          <button
            onClick={onPrevious}
            disabled={disablePrevious}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-700 bg-zinc-900 transition hover:bg-zinc-800 disabled:cursor-not-allowed disabled:opacity-40"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={onNext}
            disabled={disableNext}
            className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-black transition hover:scale-105 disabled:cursor-not-allowed disabled:opacity-40"
          >
            <ChevronRight size={20} />
          </button>

        </div>

      </div>

      {/* Mobile Progress */}

      <div className="px-6 pb-4 lg:hidden">

        <div className="mb-2 flex justify-between text-xs text-zinc-500">

          <span>
            {currentPage} / {totalPages}
          </span>

          <span>
            {progress}%
          </span>

        </div>

        <div className="h-2 overflow-hidden rounded-full bg-zinc-800">

          <div
            className="h-full rounded-full bg-gradient-to-r from-blue-500 via-cyan-500 to-emerald-400 transition-all duration-300"
            style={{
              width: `${progress}%`,
            }}
          />

        </div>

      </div>

    </header>
  );
}