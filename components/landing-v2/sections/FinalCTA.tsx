"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Clock3,
} from "lucide-react";

import Section from "../ui/Section";
import Container from "../ui/Container";

export default function FinalCTA() {
  return (
    <Section className="relative overflow-hidden bg-white py-24">

      {/* Background */}

      <div className="absolute inset-0 -z-10">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(124,58,237,.04),transparent_65%)]" />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,.025)_1px,transparent_1px)] bg-[size:72px_72px]" />

      </div>

      <Container>

        <motion.div
          initial={{
            opacity: 0,
            y: 18,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: .45,
          }}
          className="mx-auto max-w-5xl"
        >

          <div className="relative overflow-hidden rounded-[30px] border border-violet-200 bg-gradient-to-br from-white via-violet-50/40 to-white p-8 md:p-10">

            {/* Glow */}

            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-violet-300/20 blur-[140px]" />

            <div className="relative z-10">

              <div className="flex flex-col items-center text-center">

                <span className="inline-flex rounded-full border border-violet-200 bg-violet-100 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.32em] text-violet-700">

                  READY TO START?

                </span>

                <h2 className="mt-5 text-3xl font-bold leading-[1.08] tracking-[-0.03em] text-black md:text-4xl xl:text-[42px]">

                  Your AI Journey
                  <br />

                  Starts Today.

                </h2>

                <p className="mt-4 max-w-xl text-[15px] leading-7 text-neutral-600">

                  Stop wasting time searching through random
                  tutorials. Learn AI through one structured,
                  practical roadmap built for real results.

                </p>

                {/* Trust */}

                <div className="mt-8 flex flex-wrap items-center justify-center gap-3">

                  <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-2">

                    <Sparkles className="h-4 w-4 text-violet-600" />

                    <span className="text-xs font-medium text-neutral-700">

                      Beginner Friendly

                    </span>

                  </div>

                  <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-2">

                    <ShieldCheck className="h-4 w-4 text-violet-600" />

                    <span className="text-xs font-medium text-neutral-700">

                      Lifetime Access

                    </span>

                  </div>

                  <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-2">

                    <Clock3 className="h-4 w-4 text-violet-600" />

                    <span className="text-xs font-medium text-neutral-700">

                      Instant Delivery

                    </span>

                  </div>

                </div>

                {/* CTA */}

                <Link
                  href="/checkout"
                  className="
                    group
                    mt-10
                    inline-flex
                    items-center
                    gap-3
                    rounded-full
                    bg-black
                    px-8
                    py-3.5
                    text-sm
                    font-semibold
                    text-white
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:bg-neutral-900
                    hover:shadow-[0_20px_60px_rgba(0,0,0,.18)]
                  "
                >

                  Get Instant Access

                  <ArrowRight
                    className="
                      h-4
                      w-4
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  />

                </Link>
                                {/* Small Trust Line */}

                <div className="mt-7 flex flex-wrap items-center justify-center gap-5 text-xs text-neutral-500">

                  <span>✓ One-Time Payment</span>

                  <span>•</span>

                  <span>✓ Lifetime Updates</span>

                  <span>•</span>

                  <span>✓ Secure Checkout</span>

                </div>

              </div>

            </div>

          </div>

        </motion.div>

      </Container>

      {/* Ambient Glow */}

      <motion.div
        animate={{
          opacity: [0.03, 0.08, 0.03],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -left-24 top-20 h-72 w-72 rounded-full bg-violet-300 blur-[160px]"
      />

      <motion.div
        animate={{
          opacity: [0.02, 0.07, 0.02],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-violet-200 blur-[170px]"
      />

      {/* Bottom Divider */}

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-neutral-300 to-transparent" />

    </Section>
  );
}