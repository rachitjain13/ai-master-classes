"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Sparkles,
  Clock3,
  ArrowRight,
} from "lucide-react";

import Section from "../ui/Section";
import Container from "../ui/Container";

const features = [
  "20 Practical AI Chapters",
  "100+ Ready-to-use Prompts",
  "Real AI Workflows",
  "Lifetime Updates",
  "Instant Digital Access",
];

export default function Pricing() {
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
            y: 20,
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
              text-[10px]
              font-semibold
              uppercase
              tracking-[0.32em]
              text-violet-700
            "
          >

            SIMPLE PRICING

          </span>

          <h2
            className="
              mt-5
              text-3xl
              font-bold
              leading-[1.08]
              tracking-[-0.03em]
              text-black
              md:text-4xl
              xl:text-[42px]
            "
          >

            One Price.
            <br />

            Lifetime Learning.

          </h2>

          <p
            className="
              mx-auto
              mt-4
              max-w-xl
              text-[15px]
              leading-7
              text-neutral-600
            "
          >

            Everything included.
            No subscriptions.
            No hidden charges.
            Pay once and enjoy lifetime access.

          </p>

        </motion.div>

        {/* Pricing Layout */}

        <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_420px]">
                    {/* LEFT */}

          <motion.div
            initial={{
              opacity: 0,
              x: -30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.55,
            }}
          >

            <div className="rounded-[28px] border border-neutral-200 bg-white p-7 shadow-[0_15px_50px_rgba(0,0,0,.05)]">

              <span className="rounded-full bg-violet-100 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-violet-700">

                INCLUDED

              </span>

              <h3 className="mt-5 text-2xl font-bold tracking-tight text-black">

                Everything You Need
                <br />

                To Master AI.

              </h3>

              <p className="mt-4 max-w-lg text-[15px] leading-7 text-neutral-600">

                One purchase unlocks the complete learning
                experience with practical lessons, prompts,
                workflows and lifetime future updates.

              </p>

              {/* Feature List */}

              <div className="mt-8 space-y-4">

                {features.map((feature) => (

                  <motion.div
                    key={feature}
                    whileHover={{
                      x: 4,
                    }}
                    transition={{
                      duration: 0.2,
                    }}
                    className="
                      flex
                      items-center
                      gap-4
                      rounded-2xl
                      border
                      border-neutral-100
                      bg-neutral-50
                      px-5
                      py-4
                      transition-all
                      duration-300
                      hover:border-violet-200
                      hover:bg-white
                    "
                  >

                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-violet-100">

                      <ShieldCheck
                        className="h-5 w-5 text-violet-700"
                        strokeWidth={2}
                      />

                    </div>

                    <span className="text-[15px] font-medium text-neutral-800">

                      {feature}

                    </span>

                  </motion.div>

                ))}

              </div>

              {/* Trust Row */}

              <div className="mt-8 flex flex-wrap gap-3">

                <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 px-4 py-2">

                  <Sparkles
                    className="h-4 w-4 text-violet-600"
                  />

                  <span className="text-xs font-medium text-neutral-700">

                    Beginner Friendly

                  </span>

                </div>

                <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 px-4 py-2">

                  <Clock3
                    className="h-4 w-4 text-violet-600"
                  />

                  <span className="text-xs font-medium text-neutral-700">

                    Instant Access

                  </span>

                </div>

              </div>

            </div>

          </motion.div>
                    {/* RIGHT */}

          <motion.div
            initial={{
              opacity: 0,
              x: 30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.55,
            }}
          >

            <div className="sticky top-28 rounded-[28px] border border-violet-200 bg-white p-7 shadow-[0_20px_70px_rgba(0,0,0,.08)]">

              {/* Badge */}

              <span className="rounded-full bg-violet-100 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.30em] text-violet-700">

                LIMITED OFFER

              </span>

              {/* Title */}

              <h3 className="mt-5 text-2xl font-bold tracking-tight text-black">

                AI Masterclass

              </h3>

              <p className="mt-2 text-[15px] leading-7 text-neutral-600">

                Complete AI learning roadmap with lifetime
                access and future updates.

              </p>

              {/* Price */}

              <div className="mt-8 flex items-end gap-3">

                <span className="text-5xl font-bold tracking-tight text-black">

                  ₹149

                </span>

                <span className="mb-1 text-lg text-neutral-400 line-through">

                  ₹999

                </span>

              </div>

              <p className="mt-2 text-sm text-violet-700">

                One-time payment • Lifetime access

              </p>

              {/* Divider */}

              <div className="my-8 h-px bg-neutral-200" />

              {/* Order Summary */}

              <div className="space-y-4">

                <div className="flex items-center justify-between">

                  <span className="text-[15px] text-neutral-600">

                    AI Masterclass

                  </span>

                  <span className="font-semibold text-black">

                    ₹149

                  </span>

                </div>

                <div className="flex items-center justify-between">

                  <span className="text-[15px] text-neutral-600">

                    Platform Fee

                  </span>

                  <span className="font-semibold text-green-600">

                    Free

                  </span>

                </div>

                <div className="flex items-center justify-between border-t border-neutral-200 pt-4">

                  <span className="font-semibold text-black">

                    Total

                  </span>

                  <span className="text-xl font-bold text-black">

                    ₹149

                  </span>

                </div>

              </div>

              {/* Secure Notice */}

              <div className="mt-7 rounded-2xl border border-neutral-200 bg-neutral-50 p-4">

                <div className="flex items-center gap-3">

                  <ShieldCheck
                    className="h-5 w-5 text-violet-700"
                    strokeWidth={2}
                  />

                  <div>

                    <p className="text-sm font-semibold text-black">

                      Secure Checkout

                    </p>

                    <p className="text-xs text-neutral-500">

                      Powered by Razorpay

                    </p>

                  </div>

                </div>

              </div>
                            {/* Primary CTA */}

              <Link
                href="/checkout"
                className="
                  group
                  mt-8
                  flex
                  w-full
                  items-center
                  justify-center
                  gap-3
                  rounded-full
                  bg-black
                  px-7
                  py-3.5
                  text-sm
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:bg-neutral-900
                  hover:shadow-[0_18px_45px_rgba(0,0,0,.18)]
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

              {/* Small Note */}

              <p className="mt-4 text-center text-xs leading-6 text-neutral-500">

                Instant access after successful payment.

              </p>

              {/* Trust Items */}

              <div className="mt-7 grid grid-cols-2 gap-3">

                <div
                  className="
                    rounded-2xl
                    border
                    border-neutral-200
                    bg-neutral-50
                    px-4
                    py-3
                  "
                >

                  <p className="text-xs font-semibold uppercase tracking-[0.20em] text-neutral-500">

                    ACCESS

                  </p>

                  <p className="mt-2 text-sm font-semibold text-black">

                    Lifetime

                  </p>

                </div>

                <div
                  className="
                    rounded-2xl
                    border
                    border-neutral-200
                    bg-neutral-50
                    px-4
                    py-3
                  "
                >

                  <p className="text-xs font-semibold uppercase tracking-[0.20em] text-neutral-500">

                    SUPPORT

                  </p>

                  <p className="mt-2 text-sm font-semibold text-black">

                    Future Updates

                  </p>

                </div>

              </div>

              {/* Payment Logos */}

              <div className="mt-7 border-t border-neutral-200 pt-6">

                <p className="text-center text-[11px] uppercase tracking-[0.26em] text-neutral-500">

                  Secure Payment Methods

                </p>

                <div className="mt-4 flex flex-wrap items-center justify-center gap-3">

                  {[
                    "Visa",
                    "Mastercard",
                    "UPI",
                    "Razorpay",
                  ].map((item) => (

                    <span
                      key={item}
                      className="
                        rounded-full
                        border
                        border-neutral-200
                        bg-white
                        px-3
                        py-1.5
                        text-[11px]
                        font-medium
                        text-neutral-600
                      "
                    >

                      {item}

                    </span>

                  ))}

                </div>

              </div>

            </div>

          </motion.div>

        </div>
              </Container>

      {/* Section Divider */}

      <motion.div
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.7,
        }}
        className="relative mt-24 flex justify-center"
      >

        <div className="h-px w-full max-w-6xl bg-gradient-to-r from-transparent via-neutral-300 to-transparent" />

      </motion.div>

      {/* Ambient Glow */}

      <motion.div
        animate={{
          opacity: [0.02, 0.08, 0.02],
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
          -left-32
          top-32
          h-80
          w-80
          rounded-full
          bg-violet-300
          blur-[170px]
        "
      />

      <motion.div
        animate={{
          opacity: [0.03, 0.09, 0.03],
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
          -right-28
          bottom-20
          h-96
          w-96
          rounded-full
          bg-violet-200
          blur-[180px]
        "
      />

      {/* Decorative Pattern */}

      <div className="pointer-events-none absolute left-16 top-40 hidden lg:block">

        <div className="grid grid-cols-6 gap-3 opacity-10">

          {Array.from({ length: 36 }).map((_, index) => (

            <div
              key={index}
              className="h-1.5 w-1.5 rounded-full bg-violet-400"
            />

          ))}

        </div>

      </div>

      <div className="pointer-events-none absolute right-16 bottom-28 hidden lg:block">

        <div className="grid grid-cols-5 gap-3 opacity-10">

          {Array.from({ length: 25 }).map((_, index) => (

            <div
              key={index}
              className="h-1.5 w-1.5 rounded-full bg-violet-400"
            />

          ))}

        </div>

      </div>

    </Section>
  );
}