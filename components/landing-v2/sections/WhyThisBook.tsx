"use client";

import { motion } from "framer-motion";
import {
  CheckCircle2,
  XCircle,
} from "lucide-react";

import Section from "../ui/Section";
import Container from "../ui/Container";

const comparisons = [
  {
    old: "Random YouTube videos",
    modern: "Step-by-step structured roadmap",
  },
  {
    old: "Too much theory",
    modern: "Practical AI workflows",
  },
  {
    old: "No real projects",
    modern: "Build while learning",
  },
  {
    old: "Outdated information",
    modern: "Future-ready AI skills",
  },
  {
    old: "One-time learning",
    modern: "Lifetime updates",
  },
];

export default function WhyThisBook() {
  return (
    <Section className="relative overflow-hidden bg-white py-24">

      {/* Background */}

      <div className="absolute inset-0 -z-10">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(124,58,237,0.04),transparent_65%)]" />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.025)_1px,transparent_1px)] bg-[size:72px_72px]" />

      </div>

      <Container>

        {/* Heading */}

        <motion.div
          initial={{
            opacity: 0,
            y: 24,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.55,
          }}
          className="mx-auto max-w-3xl text-center"
        >

          <span
            className="
              inline-flex
              rounded-full
              border
              border-violet-200
              bg-violet-50
              px-4
              py-1.5
              text-[11px]
              font-semibold
              uppercase
              tracking-[0.30em]
              text-violet-700
            "
          >

            WHY THIS BOOK

          </span>

          <h2
            className="
              mt-6
              text-3xl
              font-bold
              tracking-tight
              text-black
              md:text-4xl
              xl:text-5xl
            "
          >

            Learn Faster.
            <br />

            Build Better.

          </h2>

          <p
            className="
              mx-auto
              mt-5
              max-w-2xl
              text-base
              leading-7
              text-neutral-600
            "
          >

            Instead of jumping between random resources,
            follow one practical roadmap designed to help
            you learn, build and start using AI confidently.

          </p>

        </motion.div>

        {/* Comparison */}

        <div className="mx-auto mt-16 max-w-6xl overflow-hidden rounded-[28px] border border-neutral-200 bg-white shadow-[0_18px_60px_rgba(0,0,0,0.05)]">

          {/* Header */}

          <div className="grid grid-cols-2 border-b border-neutral-200">

            <div className="px-8 py-5">

              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-neutral-500">

                Traditional Learning

              </p>

            </div>

            <div className="border-l border-neutral-200 px-8 py-5">

              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-violet-700">

                AI Masterclass

              </p>

            </div>

          </div>
                    {/* Comparison Rows */}

          <div>

            {comparisons.map((item, index) => (

              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: index * 0.08,
                  duration: 0.45,
                }}
                className="
                  group
                  grid
                  grid-cols-2
                  border-b
                  border-neutral-100
                  transition-all
                  duration-300
                  hover:bg-neutral-50
                "
              >

                {/* Left */}

                <div
                  className="
                    flex
                    items-center
                    gap-4
                    px-8
                    py-6
                  "
                >

                  <div
                    className="
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-full
                      bg-red-50
                    "
                  >

                    <XCircle
                      className="h-5 w-5 text-red-500"
                      strokeWidth={2}
                    />

                  </div>

                  <p
                    className="
                      text-[15px]
                      font-medium
                      text-neutral-500
                    "
                  >

                    {item.old}

                  </p>

                </div>

                {/* Right */}

                <div
                  className="
                    flex
                    items-center
                    gap-4
                    border-l
                    border-neutral-200
                    px-8
                    py-6
                  "
                >

                  <motion.div
                    whileHover={{
                      scale: 1.08,
                    }}
                    className="
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-full
                      bg-violet-100
                    "
                  >

                    <CheckCircle2
                      className="h-5 w-5 text-violet-700"
                      strokeWidth={2}
                    />

                  </motion.div>

                  <p
                    className="
                      text-[15px]
                      font-semibold
                      text-black
                    "
                  >

                    {item.modern}

                  </p>

                </div>

              </motion.div>

            ))}

          </div>
        </div>
                  {/* Premium Insight */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="mt-16"
        >

          <div className="relative overflow-hidden rounded-[30px] border border-violet-100 bg-gradient-to-br from-white via-violet-50/40 to-white p-8">

            {/* Glow */}

            <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-violet-200/20 blur-3xl" />

            <div className="relative z-10">

              <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">

                {/* Left */}

                <div className="max-w-2xl">

                  <span className="rounded-full bg-violet-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-violet-700">

                    WHY IT WORKS

                  </span>

                  <h3 className="mt-5 text-2xl font-bold tracking-tight text-black md:text-3xl">

                    Learn Once.
                    <br />

                    Apply Everywhere.

                  </h3>

                  <p className="mt-5 text-base leading-7 text-neutral-600">

                    Every chapter is connected to real-world
                    use cases so you dont just understand AI —
                    you learn how to apply it in your studies,
                    work, freelancing and business.

                  </p>

                </div>

                {/* Right */}

                <div className="grid grid-cols-3 gap-4">

                  <div className="rounded-2xl border border-white bg-white p-5 shadow-sm">

                    <p className="text-3xl font-bold text-violet-600">

                      20

                    </p>

                    <p className="mt-2 text-xs uppercase tracking-[0.20em] text-neutral-500">

                      Chapters

                    </p>

                  </div>

                  <div className="rounded-2xl border border-white bg-white p-5 shadow-sm">

                    <p className="text-3xl font-bold text-violet-600">

                      100+

                    </p>

                    <p className="mt-2 text-xs uppercase tracking-[0.20em] text-neutral-500">

                      Prompts

                    </p>

                  </div>

                  <div className="rounded-2xl border border-white bg-white p-5 shadow-sm">

                    <p className="text-3xl font-bold text-violet-600">

                      ∞

                    </p>

                    <p className="mt-2 text-xs uppercase tracking-[0.20em] text-neutral-500">

                      Updates

                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </motion.div>
              </Container>

      {/* Bottom Fade */}

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white via-white/90 to-transparent" />

      {/* Ambient Glow - Left */}

      <motion.div
        animate={{
          opacity: [0.03, 0.08, 0.03],
          scale: [1, 1.06, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          -left-28
          top-28
          h-72
          w-72
          rounded-full
          bg-violet-300
          blur-[150px]
        "
      />

      {/* Ambient Glow - Right */}

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
        className="
          pointer-events-none
          absolute
          -right-24
          bottom-16
          h-80
          w-80
          rounded-full
          bg-violet-200
          blur-[160px]
        "
      />

      {/* Decorative Dot Pattern */}

      <div className="pointer-events-none absolute left-16 top-32 hidden lg:block">

        <div className="grid grid-cols-6 gap-3 opacity-15">

          {Array.from({ length: 36 }).map((_, index) => (

            <div
              key={index}
              className="h-1.5 w-1.5 rounded-full bg-violet-300"
            />

          ))}

        </div>

      </div>

      <div className="pointer-events-none absolute right-20 bottom-24 hidden lg:block">

        <div className="grid grid-cols-5 gap-3 opacity-15">

          {Array.from({ length: 25 }).map((_, index) => (

            <div
              key={index}
              className="h-1.5 w-1.5 rounded-full bg-violet-300"
            />

          ))}

        </div>

      </div>

    </Section>
  );
}