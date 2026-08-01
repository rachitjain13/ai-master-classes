"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface MasterCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

export default function MasterCard({
  icon: Icon,
  title,
  description,
  className,
}: MasterCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{
        duration: 0.25,
        ease: "easeOut",
      }}
      className={cn(
        "group relative overflow-hidden rounded-3xl border border-black/10 bg-white p-8 shadow-sm transition-all",
        "hover:border-black/20 hover:shadow-xl",
        className
      )}
    >
      {/* Background Glow */}
      <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-black/[0.03] blur-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      {/* Icon */}
      <motion.div
        whileHover={{
          rotate: 4,
          scale: 1.08,
        }}
        className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl border border-black/10 bg-black/[0.03]"
      >
        <Icon className="h-7 w-7 text-black" strokeWidth={1.8} />
      </motion.div>

      {/* Title */}
      <h3 className="mb-3 text-2xl font-semibold tracking-tight text-black">
        {title}
      </h3>

      {/* Description */}
      <p className="mb-8 leading-7 text-neutral-600">
        {description}
      </p>

      {/* Footer */}
      <div className="flex items-center gap-2 text-sm font-medium text-black">
        Learn More

        <motion.div
          whileHover={{
            x: 4,
          }}
        >
          <ArrowRight
            className="h-4 w-4"
            strokeWidth={2}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}