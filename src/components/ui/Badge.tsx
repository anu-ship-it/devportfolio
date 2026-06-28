import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";

const badgeVariants = cva(
  [
    "inline-flex",
    "items-center",
    "rounded-full",
    "border",
    "px-3",
    "py-1",
    "text-xs",
    "font-medium",
  ],
  {
    variants: {
      variant: {
        default:
          "border-[var(--border)] bg-[var(--surface)] text-[var(--foreground-secondary)]",

        primary:
          "border-transparent bg-[var(--primary)] text-white",

        outline:
          "border-[var(--border)] bg-transparent text-[var(--foreground)]",
      },
    },

    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

export default function Badge({
  className,
  variant,
  ...props
}: BadgeProps) {
  return (
    <div
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  );
}
