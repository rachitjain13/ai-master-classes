"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Plus } from "lucide-react";

import Section from "../ui/Section";
import Container from "../ui/Container";

const faqs = [
  {
    question: "How do I access the AI Masterclass after payment?",
    answer:
      "Immediately after successful payment, your AI Masterclass becomes available inside your account. No waiting, no manual approval.",
  },
  {
    question: "Is this beginner friendly?",
    answer:
      "Yes. The roadmap starts from AI basics and gradually moves towards practical AI workflows, automation and real-world use cases.",
  },
  {
    question: "Do I need coding knowledge?",
    answer:
      "No. Everything is explained in simple language. Coding is completely optional.",
  },
  {
    question: "Will I receive future updates?",
    answer:
      "Yes. Every future update of this AI Masterclass will be available to you without any additional payment.",
  },
  {
    question: "Can I use it on mobile?",
    answer:
      "Absolutely. Your account works on desktop, laptop, tablet and mobile devices.",
  },
  {
    question: "Is this a one-time payment?",
    answer:
      "Yes. Pay once and enjoy lifetime access with no recurring subscription.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <Section className="relative overflow-hidden bg-white py-24">

      {/* Background */}

      <div className="absolute inset-0 -z-10">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(124,58,237,.04),transparent_65%)]" />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,.025)_1px,transparent_1px)] bg-[size:72px_72px]" />

      </div>

      <Container>

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .45 }}
          className="mx-auto max-w-3xl text-center"
        >

          <span className="inline-flex rounded-full border border-violet-200 bg-violet-50 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.32em] text-violet-700">

            FAQ

          </span>

          <h2 className="mt-5 text-3xl font-bold leading-[1.08] tracking-[-0.03em] text-black md:text-4xl xl:text-[42px]">

            Frequently Asked
            <br />

            Questions

          </h2>

          <p className="mx-auto mt-4 max-w-xl text-[15px] leading-7 text-neutral-600">

            Everything you should know before getting
            instant access to the AI Masterclass.

          </p>

        </motion.div>

        {/* FAQ */}

        <div className="mx-auto mt-14 max-w-4xl space-y-4">

          {faqs.map((faq, index) => {

            const isOpen = open === index;

            return (

              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * .05,
                }}
                className={`
                  overflow-hidden
                  rounded-[26px]
                  border
                  bg-white
                  transition-all
                  duration-300

                  ${
                    isOpen
                      ? "border-violet-200 shadow-[0_15px_45px_rgba(124,58,237,.08)]"
                      : "border-neutral-200 hover:border-violet-200 hover:shadow-[0_15px_45px_rgba(0,0,0,.05)]"
                  }
                `}
              >

                <button
                  onClick={() =>
                    setOpen(isOpen ? -1 : index)
                  }
                  className="flex w-full items-center justify-between px-6 py-5 text-left"
                >

                  <h3 className="pr-6 text-[17px] font-semibold leading-7 text-black">

                    {faq.question}

                  </h3>

                  <motion.div
                    animate={{
                      rotate: isOpen ? 45 : 0,
                    }}
                    transition={{
                      duration: .25,
                    }}
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-violet-100"
                  >

                    <Plus className="h-4 w-4 text-violet-700" />

                  </motion.div>

                </button>

                <AnimatePresence>

                  {isOpen && (

                    <motion.div
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{
                        duration: .3,
                      }}
                      className="overflow-hidden"
                    >

                      <div className="border-t border-neutral-100 px-6 pb-6 pt-5">

                        <p className="text-[15px] leading-7 text-neutral-600">

                          {faq.answer}

                        </p>

                      </div>

                    </motion.div>

                  )}
                        

                </AnimatePresence>

              </motion.div>

            );

          })}

        </div>

        {/* Bottom CTA */}

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
            duration: 0.45,
          }}
          className="mt-16"
        >

          <div className="rounded-[28px] border border-violet-200 bg-gradient-to-br from-white via-violet-50/40 to-white p-7">

            <div className="flex flex-col items-center text-center">

              <span className="rounded-full bg-violet-100 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.30em] text-violet-700">

                STILL HAVE QUESTIONS?

              </span>

              <h3 className="mt-5 text-2xl font-bold tracking-tight text-black">

                We are Here To Help.

              </h3>

              <p className="mt-3 max-w-lg text-[15px] leading-7 text-neutral-600">

                If you still have any questions before purchasing,
                feel free to contact us. Otherwise, start learning AI
                today with instant lifetime access.

              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">

                <Link
                  href="/contact"
                  className="
                    inline-flex
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-neutral-300
                    bg-white
                    px-6
                    py-3
                    text-sm
                    font-semibold
                    text-neutral-800
                    transition-all
                    duration-300
                    hover:border-violet-300
                    hover:text-violet-700
                  "
                >
                  Contact Us
                </Link>

                <Link
                  href="/checkout"
                  className="
                    group
                    inline-flex
                    items-center
                    justify-center
                    gap-2
                    rounded-full
                    bg-black
                    px-7
                    py-3
                    text-sm
                    font-semibold
                    text-white
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:bg-neutral-900
                    hover:shadow-[0_15px_40px_rgba(0,0,0,.15)]
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

              </div>

              <div className="mt-7 flex flex-wrap items-center justify-center gap-5 text-xs text-neutral-500">

                <span>✓ One-Time Payment</span>

                <span>•</span>

                <span>✓ Lifetime Access</span>

                <span>•</span>

                <span>✓ Instant Delivery</span>

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
        className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-violet-300 blur-[150px]"
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
        className="pointer-events-none absolute -right-24 bottom-20 h-80 w-80 rounded-full bg-violet-200 blur-[170px]"
      />

      {/* Bottom Divider */}

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-neutral-300 to-transparent" />

    </Section>
  );
}