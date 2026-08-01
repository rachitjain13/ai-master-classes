"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface Props {
  title: string;
  value: string;
  subtitle: string;
  icon: LucideIcon;
  color: string;
}

export default function StatCard({
  title,
  value,
  subtitle,
  icon: Icon,
  color,
}: Props) {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ duration: 0.25 }}
      className="glass rounded-3xl p-6 border border-white/10"
    >
      <div className="flex items-center justify-between">

        <div>

          <p className="text-gray-400 text-sm">
            {title}
          </p>

          <h2 className="mt-3 text-4xl font-bold">
            {value}
          </h2>

          <p className="mt-2 text-sm text-gray-500">
            {subtitle}
          </p>

        </div>

        <div
          className="flex h-16 w-16 items-center justify-center rounded-2xl"
          style={{ background: color }}
        >
          <Icon className="h-8 w-8 text-white" />
        </div>

      </div>
    </motion.div>
  );
}