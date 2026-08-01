"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import { cn } from "@/lib/utils";

interface HeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
}

export default function Heading({
  badge,
  title,
  subtitle,
  align = "center",
  className,
  titleClassName,
  subtitleClassName,
}: HeadingProps) {
  const alignment =
    align === "center"
      ? "items-center text-center"
      : "items-start text-left";

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className={cn(
        "mx-auto flex max-w-3xl flex-col gap-5",
        alignment,
        className
      )}
    >
      {badge && (
        <div className="inline-flex w-fit items-center rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-cyan-300 backdrop-blur-md">
          {badge}
        </div>
      )}

      <h2
        className={cn(
          "text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl",
          titleClassName
        )}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={cn(
            "max-w-2xl text-base leading-8 text-white/65 sm:text-lg",
            subtitleClassName
          )}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}