"use client";

import { motion } from "framer-motion";

const tools = [
  "ChatGPT",
  "Claude",
  "Gemini",
  "Midjourney",
  "Perplexity",
  "Canva AI",
];

export default function TrustBar() {
  return (
    <section className="mt-16">
      <p className="mb-6 text-center text-sm uppercase tracking-[0.3em] text-neutral-500">
        Powered By The Worlds Best AI Tools
      </p>

      <div className="overflow-hidden">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex w-max gap-6"
        >
          {[...tools, ...tools].map((tool, index) => (
            <div
              key={index}
              className="rounded-full border border-neutral-200 bg-white px-6 py-3 shadow-sm"
            >
              <span className="font-medium text-neutral-700">{tool}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}