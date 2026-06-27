import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;

  size?: "sm" | "md" | "lg";
}

export default function Section({
  children,
  className,
  size = "md",
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        size === "sm" && "py-16",
        size === "md" && "py-24",
        size === "lg" && "py-32",
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
}
