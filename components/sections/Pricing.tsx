"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Check,
  ShieldCheck,
  Sparkles,
  ArrowRight,
} from "lucide-react";

const features = [
  "300+ Pages AI Masterclass",
  "150+ AI Tools",
  "Prompt Engineering Guide",
  "AI Automation Workflows",
  "Future Lifetime Updates",
  "Instant PDF Download",
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="relative bg-black py-32"
    >
      <div className="mx-auto max-w-6xl px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >

          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300">

            <Sparkles size={16} />

            Lifetime Access

          </div>

          <h2 className="mt-8 text-5xl font-black text-white md:text-6xl">

            One Price.

            <br />

            Lifetime Value.

          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-400">

            Everything you need to master Artificial Intelligence,
            packed into one premium guide.

          </p>

        </motion.div>

        {/* CARD */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mt-20 max-w-xl rounded-[36px] border border-white/10 bg-zinc-900 p-10 shadow-2xl"
        >

          <div className="flex items-center justify-between">

            <span className="rounded-full bg-green-500/10 px-4 py-2 text-sm font-semibold text-green-400">

              Launch Offer

            </span>

            <div className="flex items-center gap-2 text-sm text-zinc-400">

              <ShieldCheck
                size={18}
                className="text-green-500"
              />

              Secure Checkout

            </div>

          </div>

          <div className="mt-10 text-center">

            <p className="text-lg text-zinc-500 line-through">

              ₹2,999

            </p>

            <h3 className="mt-3 text-7xl font-black text-white">

              ₹999

            </h3>

            <p className="mt-3 text-zinc-400">

              Pay once. Lifetime access.

            </p>

          </div>

          <div className="mt-12 space-y-5">

            {features.map((item) => (

              <div
                key={item}
                className="flex items-center gap-3"
              >

                <Check
                  size={18}
                  className="text-green-500"
                />

                <span className="text-zinc-200">

                  {item}

                </span>

              </div>

            ))}

          </div>

          <Link
            href="/checkout"
            className="group mt-12 flex w-full items-center justify-center gap-3 rounded-full bg-white py-4 text-lg font-semibold text-black transition hover:scale-[1.02]"
          >

            Get Instant Access

            <ArrowRight
              size={20}
              className="transition group-hover:translate-x-1"
            />

          </Link>

          <div className="mt-6 text-center text-sm text-zinc-500">

            Instant delivery after successful payment.

          </div>

        </motion.div>

      </div>
    </section>
  );
}