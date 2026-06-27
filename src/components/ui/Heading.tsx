import { cn } from "@/lib/cn";

interface HeadingProps {
  eyebrow?: string;

  title: string;

  description?: string;

  align?: "left" | "center";

  className?: string;
}

export default function Heading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: HeadingProps) {
  return (
    <div
      className={cn(
        "space-y-5",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
          {eyebrow}
        </span>
      )}

      <h2 className="max-w-4xl text-4xl font-bold tracking-tight text-[var(--foreground)] md:text-5xl lg:text-6xl">
        {title}
      </h2>

      {description && (
        <p className="max-w-2xl text-lg leading-8 text-[var(--foreground-secondary)]">
          {description}
        </p>
      )}
    </div>
  );
}
