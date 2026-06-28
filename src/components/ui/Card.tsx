import * as React from "react";
import { cn } from "@/lib/cn";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function Card({
  className,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        [
          "rounded-2xl",
          "border",
          "border-[var(--border)]",
          "bg-[var(--surface)]",
          "p-6",
          "transition-all",
          "duration-300",
          "hover:-translate-y-1",
          "hover:border-[var(--border-light)]",
          "hover:bg-[var(--surface-secondary)]",
        ],
        className
      )}
      {...props}
    />
  );
}
