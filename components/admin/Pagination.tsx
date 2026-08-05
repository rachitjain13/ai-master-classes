"use client";

interface PaginationProps {
  page: number;
  pages: number;
  onChange: (page: number) => void;
}

export default function Pagination({
  page,
  pages,
  onChange,
}: PaginationProps) {
  return (
    <div className="mt-6 flex items-center justify-end gap-2">

      <button
        disabled={page === 1}
        onClick={() => onChange(page - 1)}
        className="rounded-lg border border-neutral-300 px-4 py-2 text-sm disabled:opacity-50"
      >
        Previous
      </button>

      <span className="text-sm text-neutral-600">
        {page} / {pages}
      </span>

      <button
        disabled={page === pages}
        onClick={() => onChange(page + 1)}
        className="rounded-lg border border-neutral-300 px-4 py-2 text-sm disabled:opacity-50"
      >
        Next
      </button>

    </div>
  );
} 