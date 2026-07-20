import Link from "next/link";
import { cn } from "@/lib/utils";

export function Monogram({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={cn("h-9 w-9", className)}
      aria-hidden="true"
    >
      <circle
        cx="32"
        cy="32"
        r="30"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.55"
      />
      <text
        x="24"
        y="41"
        textAnchor="middle"
        fontFamily="var(--font-display)"
        fontSize="30"
        fontWeight="500"
        fill="currentColor"
        opacity="0.9"
      >
        D
      </text>
      <text
        x="40"
        y="41"
        textAnchor="middle"
        fontFamily="var(--font-display)"
        fontSize="30"
        fontWeight="500"
        fill="currentColor"
        opacity="0.55"
      >
        D
      </text>
    </svg>
  );
}

export function Wordmark({ className }: { className?: string }) {
  return (
    <span className={cn("flex items-baseline gap-1.5", className)}>
      <span className="text-label text-[0.6rem]">The</span>
      <span className="font-script text-2xl leading-none">Dream Decor</span>
    </span>
  );
}

export function StackedLockup({ className }: { className?: string }) {
  return (
    <div className={cn("flex flex-col items-center text-center", className)}>
      <Monogram className="mb-4 h-14 w-14 text-current" />
      <span className="text-label mb-1">The</span>
      <span className="font-script text-5xl leading-none sm:text-6xl">Dream Decor</span>
      <span className="text-label mt-4 opacity-70">Event Styling &amp; Design · Surrey, BC</span>
    </div>
  );
}

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn(
        "focus-ring flex items-center gap-2.5 rounded-sm text-charcoal transition-opacity hover:opacity-70",
        className
      )}
      aria-label="The Dream Decor, home"
    >
      <Monogram className="h-8 w-8" />
      <Wordmark />
    </Link>
  );
}
