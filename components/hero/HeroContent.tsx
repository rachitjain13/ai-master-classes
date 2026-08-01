"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";

export default function HeroContent() {
  return (
    <div className="grid w-full items-center gap-20 lg:grid-cols-2">

      {/* LEFT */}

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: .7 }}
      >

        <div className="mb-6 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300 backdrop-blur-xl">
          🚀 Indias Complete AI Masterclass Book
        </div>

        <h1 className="text-5xl font-black leading-[1.05] tracking-tight text-white md:text-7xl">

          Master

          <br />

          Artificial Intelligence

          <br />

          <span className="text-zinc-400">
            Before Everyone Else.
          </span>

        </h1>

        <p className="mt-8 max-w-xl text-lg leading-8 text-zinc-400">

          Learn ChatGPT, Prompt Engineering, AI Business,
          Automation, AI Careers and more in one premium
          practical guide.

          No fluff.

          No coding required.

        </p>

        {/* CTA */}

        <div className="mt-10 flex flex-wrap gap-4">

          <Link
            href="/checkout"
            className="group inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 font-semibold text-black transition-all duration-300 hover:scale-105"
          >

            Buy Now ₹149

            <ArrowRight
              className="transition group-hover:translate-x-1"
              size={18}
            />

          </Link>

          <button className="rounded-full border border-white/10 px-8 py-4 text-white transition hover:bg-white/5">

            Read Preview

          </button>

        </div>

        {/* FEATURES */}

        <div className="mt-12 grid gap-4 sm:grid-cols-2">

          {[
            "300+ Practical AI Pages",
            "150+ AI Tools",
            "Lifetime Updates",
            "Instant Download"
          ].map((item) => (

            <div
              key={item}
              className="flex items-center gap-3 text-zinc-300"
            >

              <CheckCircle
                size={18}
                className="text-green-500"
              />

              {item}

            </div>

          ))}

        </div>

      </motion.div>

      {/* RIGHT */}

      <motion.div
        initial={{ opacity: 0, scale: .9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: .8 }}
        className="flex justify-center"
      >

        <div className="relative">

          <div className="absolute inset-0 rounded-[40px] bg-green-500/20 blur-[100px]" />

          <img src="/images/book.png"
            alt="AI Book"
            className="relative w-[340px] drop-shadow-[0_40px_80px_rgba(0,0,0,.55)]"
          />

        </div>

      </motion.div>

    </div>
  );
}