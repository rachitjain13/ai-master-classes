"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const navItems = [
  { name: "Features", href: "#features" },
  { name: "Inside", href: "#inside" },
  { name: "Reviews", href: "#reviews" },
  { name: "Pricing", href: "#pricing" },
];

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div className="mx-auto max-w-7xl px-5 pt-5">
        <div className="flex h-16 items-center justify-between rounded-full border border-white/10 bg-black/70 px-7 backdrop-blur-2xl">

          {/* Logo */}
          <Link
            href="/"
            className="group flex items-center gap-2"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-black font-bold">
              AI
            </div>

            <div className="leading-tight">
              <h2 className="text-base font-bold tracking-tight text-white">
                AI Masterclass
              </h2>

              <p className="text-xs text-zinc-400">
                Premium AI Guide
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-zinc-400 transition-all duration-300 hover:text-white"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Right */}
          <div className="flex items-center gap-3">

            <Link
              href="#preview"
              className="hidden rounded-full border border-white/10 px-5 py-2 text-sm text-zinc-300 transition hover:border-white/20 hover:bg-white/5 md:block"
            >
              Preview
            </Link>

            <Link
              href="/checkout"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-black transition-all duration-300 hover:scale-105"
            >
              Buy Now

              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

          </div>
        </div>
      </div>
    </motion.header>
  );
}