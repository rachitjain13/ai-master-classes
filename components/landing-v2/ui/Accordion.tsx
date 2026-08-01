"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, CheckCircle2 } from "lucide-react";

interface AccordionItem {
  chapter: string;
  title: string;
  preview: string;
  points: string[];
}

interface AccordionProps {
  items: AccordionItem[];
}

export default function Accordion({ items }: AccordionProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="space-y-4">
      {items.map((item, index) => {
        const isOpen = activeIndex === index;

        return (
          <motion.div
            key={item.chapter}
            layout
            transition={{
              layout: {
                duration: 0.35,
              },
            }}
            className="overflow-hidden rounded-3xl border border-neutral-200 bg-white"
          >
            <button
              onClick={() =>
                setActiveIndex(isOpen ? -1 : index)
              }
              className="flex w-full items-center justify-between p-6 text-left transition-colors hover:bg-neutral-50"
            >
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500">
                  {item.chapter}
                </p>

                <h3 className="mt-2 text-xl font-semibold text-black">
                  {item.title}
                </h3>
              </div>

              <motion.div
                animate={{
                  rotate: isOpen ? 180 : 0,
                }}
                transition={{
                  duration: 0.25,
                }}
              >
                <ChevronDown className="h-5 w-5 text-neutral-500" />
              </motion.div>
            </button>

            <AnimatePresence initial={false}>
                              {isOpen && (
                <motion.div
                  key="content"
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
                    duration: 0.3,
                  }}
                  className="overflow-hidden"
                >
                  <div className="border-t border-neutral-200 px-6 pb-6 pt-5">
                    <p className="leading-7 text-neutral-600">
                      {item.preview}
                    </p>

                    <div className="mt-6 grid gap-3">
                      {item.points.map((point) => (
                        <div
                          key={point}
                          className="flex items-start gap-3"
                        >
                          <CheckCircle2
                            className="mt-0.5 h-5 w-5 flex-shrink-0 text-black"
                            strokeWidth={2}
                          />

                          <span className="text-sm leading-6 text-neutral-700">
                            {point}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}
