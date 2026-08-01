import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  id?: string;
  spacing?: "sm" | "md" | "lg";
}

export default function Section({
  children,
  id,
  spacing = "lg",
  className,
  ...props
}: SectionProps) {
  const spacingClasses = {
    sm: "py-16 md:py-20",
    md: "py-20 md:py-28",
    lg: "py-24 md:py-32",
  };

  return (
    <section
      id={id}
      className={cn(
        "relative overflow-hidden",
        spacingClasses[spacing],
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
}