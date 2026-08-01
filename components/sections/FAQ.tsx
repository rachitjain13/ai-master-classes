
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Who is this book for?",
    a: "Students, professionals, freelancers, entrepreneurs and anyone who wants practical AI skills.",
  },
  {
    q: "Do I need coding experience?",
    a: "No. The book starts from the fundamentals and gradually introduces advanced topics.",
  },
  {
    q: "Is this a physical book?",
    a: "This is a digital ebook delivered instantly after purchase.",
  },
  {
    q: "Will I receive updates?",
    a: "Yes. Future revisions and bonus resources are included.",
  },
  {
    q: "What payment methods are supported?",
    a: "You can integrate Razorpay or Stripe to accept cards, UPI and other supported methods.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="relative overflow-hidden py-32">
      <div className="mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="font-semibold uppercase tracking-[0.3em] text-cyan-400">
            FAQ
          </p>
          <h2 className="mt-5 text-4xl font-black text-white md:text-6xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-6 text-lg text-slate-400">
            Everything you need to know before purchasing.
          </p>
        </motion.div>

        <div className="mt-16 space-y-4">
          {faqs.map((item, index) => {
            const active = open === index;
            return (
              <div
                key={item.q}
                className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl"
              >
                <button
                  onClick={() => setOpen(active ? -1 : index)}
                  className="flex w-full items-center justify-between p-6 text-left"
                >
                  <span className="text-lg font-semibold text-white">
                    {item.q}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 text-cyan-400 transition-transform ${
                      active ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {active && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-6 leading-7 text-slate-400">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
