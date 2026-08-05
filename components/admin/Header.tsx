"use client";

export default function Header() {
  return (
    <header className="flex h-16 items-center justify-between border-b border-neutral-200 bg-white px-8">

      <div>

        <h1 className="text-lg font-semibold text-black">
          Dashboard
        </h1>

        <p className="mt-1 text-xs text-neutral-500 text-black">
          Welcome to AI Masterclasses Admin
        </p>

      </div>

      <div className="flex items-center gap-4 text-black">

        <input
          type="text"
          placeholder="Search..."
          className="h-10 w-64 rounded-lg border border-neutral-300 px-3 text-black outline-none focus:border-black text-black"
        />

        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-300 bg-white text-sm font-semibold text-black">
          R
        </div>

      </div>

    </header>
  );
}