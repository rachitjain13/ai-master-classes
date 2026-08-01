"use client";

import { motion } from "framer-motion";

const cards = [
  {
    title: "ChatGPT",
    sub: "AI Assistant",
    top: "10%",
    left: "-8%",
  },
  {
    title: "Midjourney",
    sub: "AI Images",
    top: "58%",
    left: "-6%",
  },
  {
    title: "Claude",
    sub: "Writing",
    top: "18%",
    right: "-8%",
  },
  {
    title: "Gemini",
    sub: "Google AI",
    top: "65%",
    right: "-6%",
  },
];

export default function FloatingCards() {
  return (
    <>
      {cards.map((card, index) => (
        <motion.div
          key={card.title}
          animate={{
            y: [0, -12, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 4 + index,
          }}
          className="absolute hidden rounded-2xl border border-neutral-200 bg-white/90 px-4 py-3 shadow-xl backdrop-blur lg:block"
          style={{
            top: card.top,
            left: card.left,
            right: card.right,
          }}
        >
          <p className="font-semibold">{card.title}</p>
          <p className="text-sm text-neutral-500">{card.sub}</p>
        </motion.div>
      ))}
    </>
  );
}