"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  animate?: boolean;
}

export default function Badge({
  children,
  className,
  animate = true,
}: BadgeProps) {
  const badge = (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-cyan-300 backdrop-blur-md",
        className
      )}
    >
      {children}
    </span>
  );

  if (!animate) return badge;

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.45,
        ease: "easeOut",
      }}
      className="inline-flex"
    >
      {badge}
    </motion.div>
  );
}