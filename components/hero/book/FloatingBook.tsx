"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function FloatingBook() {
  return (
    <motion.div
      animate={{
        y: [0, -15, 0],
        rotate: [0, 1.5, 0, -1.5, 0],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="relative"
    >
      <Image
        src="/images/book.png"
        alt="AI Masterclass Book"
        width={420}
        height={580}
        priority
        className="drop-shadow-[0_60px_120px_rgba(0,0,0,.28)]"
      />
    </motion.div>
  );
}