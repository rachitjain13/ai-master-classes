"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends HTMLMotionProps<"button"> {
  children: ReactNode;
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  loading?: boolean;
  showArrow?: boolean;
}



export default function Button({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  loading = false,
  showArrow = false,
  className,
  disabled,
//   formAction,
  form,
  ...props
}: ButtonProps) {
  const baseStyles =
    "group inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 disabled:cursor-not-allowed disabled:opacity-50";

  const variants = {
    primary:
      "bg-white text-black hover:shadow-[0_0_30px_rgba(255,255,255,0.12)] hover:scale-[1.02]",

    secondary:
      "border border-white/15 bg-white/5 text-white backdrop-blur-sm hover:border-cyan-400/40 hover:bg-white/10",
  };

  const sizes = {
    sm: "h-10 px-5 text-sm",

    md: "h-12 px-6 text-[15px]",

    lg: "h-14 px-8 text-base",
  };

  return (
    <motion.button
  whileHover={{ scale: 1.02 }}
  whileTap={{ scale: 0.98 }}
  disabled={disabled || loading}
  className={cn(
    baseStyles,
    variants[variant],
    sizes[size],
    fullWidth && "w-full",
    className
  )}
  form={form}
  {...props}
>
      {loading ? (
        <span className="h-5 w-5 animate-spin rounded-full border-2 border-current border-t-transparent" />
      ) : (
        <>
          <span>{children}</span>

          {showArrow && (
            <ArrowRight
              size={18}
              className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
            />
          )}
        </>
      )}
    </motion.button>
  );
}