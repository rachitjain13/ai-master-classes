"use client";

import { motion } from "framer-motion";

const widgets = [
  {
    title: "12K+",
    subtitle: "Learners",
    className: "-left-12 top-16",
  },
  {
    title: "ChatGPT",
    subtitle: "AI Assistant",
    className: "-left-8 bottom-20",
  },
  {
    title: "₹149",
    subtitle: "Lifetime",
    className: "-right-10 top-24",
  },
  {
    title: "20+",
    subtitle: "Chapters",
    className: "-right-8 bottom-16",
  },
];

export default function HeroWidgets() {
  return (
    <>
      {widgets.map((widget, index) => (
        <motion.div
          key={widget.title}
          animate={{ y: [0, -8, 0] }}
          transition={{
            repeat: Infinity,
            duration: 3 + index,
          }}
          className={`absolute hidden rounded-3xl border border-neutral-200 bg-white/90 px-5 py-4 shadow-2xl backdrop-blur-xl lg:block ${widget.className}`}
        >
          <h3 className="text-xl font-bold">{widget.title}</h3>
          <p className="text-sm text-neutral-500">{widget.subtitle}</p>
        </motion.div>
      ))}
    </>
  );
}