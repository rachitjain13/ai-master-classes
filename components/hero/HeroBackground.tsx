"use client";

import { motion } from "framer-motion";

export default function HeroBackground() {
  return (
    <>
      {/* Radial Glow */}
      <div className="absolute left-1/2 top-24 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-green-500/10 blur-[180px]" />

      {/* Left Glow */}
      <motion.div
        animate={{
          x: [-25, 20, -25],
          y: [-20, 20, -20],
        }}
        transition={{
          repeat: Infinity,
          duration: 18,
          ease: "easeInOut",
        }}
        className="absolute -left-52 top-40 h-[500px] w-[500px] rounded-full bg-white/[0.03] blur-[150px]"
      />

      {/* Right Glow */}
      <motion.div
        animate={{
          x: [25, -20, 25],
          y: [20, -20, 20],
        }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: "easeInOut",
        }}
        className="absolute -right-52 top-32 h-[500px] w-[500px] rounded-full bg-green-500/5 blur-[160px]"
      />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(to right,#fff 1px,transparent 1px),
            linear-gradient(to bottom,#fff 1px,transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Top Fade */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black via-black/60 to-transparent" />

      {/* Bottom Fade */}
      <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-black to-transparent" />
    </>
  );
}