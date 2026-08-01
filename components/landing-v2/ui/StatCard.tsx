"use client";

import { motion } from "framer-motion";

interface StatCardProps {
  value: string;
  label: string;
  description?: string;
}

export default function StatCard({
  value,
  label,
  description,
}: StatCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -6,
        scale: 1.02,
      }}
      transition={{
        duration: 0.25,
      }}
      className="
        rounded-3xl
        border
        border-neutral-200
        bg-white
        p-8
        text-center
        shadow-sm
        transition-shadow
        hover:shadow-xl
      "
    >
      <h3 className="text-5xl font-bold tracking-tight text-black">
        {value}
      </h3>

      <p className="mt-3 text-lg font-semibold text-black">
        {label}
      </p>

      {description && (
        <p className="mt-2 text-sm leading-6 text-neutral-600">
          {description}
        </p>
      )}
    </motion.div>
  );
}