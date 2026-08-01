"use client";

import {
  Bell,
  Search,
  Sun,
  UserCircle2,
} from "lucide-react";

export default function Topbar() {
  return (
    <header className="sticky top-0 z-40 flex h-20 items-center justify-between border-b border-white/10 bg-[#060816]/80 px-8 backdrop-blur-xl">

      {/* Left */}

      <div className="relative w-[420px]">

        <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />

        <input
          type="text"
          placeholder="Search customers, payments..."
          className="h-12 w-full rounded-xl border border-white/10 bg-white/5 pl-12 pr-4 text-white outline-none transition-all focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20"
        />

      </div>

      {/* Right */}

      <div className="flex items-center gap-4">

        {/* Theme */}

        <button className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-300 transition hover:bg-white/10">
          <Sun className="h-5 w-5" />
        </button>

        {/* Notifications */}

        <button className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-300 transition hover:bg-white/10">

          <Bell className="h-5 w-5" />

          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-cyan-400"></span>

        </button>

        {/* Profile */}

        <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-2">

          <UserCircle2 className="h-10 w-10 text-cyan-400" />

          <div>

            <h3 className="text-sm font-semibold text-white">
              Admin
            </h3>

            <p className="text-xs text-gray-400">
              Super Admin
            </p>

          </div>

        </div>

      </div>

    </header>
  );
}