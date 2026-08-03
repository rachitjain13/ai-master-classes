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

        <div
          
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

        </div>

        {/* FAQ */}

        <div className="mx-auto mt-14 max-w-4xl space-y-4">

          {faqs.map((faq, index) => {

            const isOpen = open === index;

            return (

              <div
                key={faq.question}
                
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

                  <div
                    
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-violet-100"
                  >

                    <Plus className="h-4 w-4 text-violet-700" />

                  </div>

                </button>

                <AnimatePresence>

                  {isOpen && (

                    <div
                     
                      className="overflow-hidden"
                    >

                      <div className="border-t border-neutral-100 px-6 pb-6 pt-5">

                        <p className="text-[15px] leading-7 text-neutral-600">

                          {faq.answer}

                        </p>

                      </div>

                    </div>

                  )}
                        

                </AnimatePresence>

              </div>

            );

          })}

        </div>

      </Container>

      {/* Ambient Glow */}

      <div
        
        className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-violet-300 blur-[150px]"
      />

      <div
        
        className="pointer-events-none absolute -right-24 bottom-20 h-80 w-80 rounded-full bg-violet-200 blur-[170px]"
      />

      {/* Bottom Divider */}

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-neutral-300 to-transparent" />

    </Section>
  );
}