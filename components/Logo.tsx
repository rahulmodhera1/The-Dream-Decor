import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

// Real mark.png/mark-light.png are ~303x144 (a wide "DD" monogram, not
// square), so it's sized by height with width auto rather than forced into
// a square box. Update these if the uploaded mark's proportions change.
const MARK_WIDTH = 303;
const MARK_HEIGHT = 144;

export function Monogram({ className, src }: { className?: string; src?: string | null }) {
  if (src) {
    // Local SVGs render as a plain <img>: vector art doesn't benefit from
    // next/image's raster optimization pipeline, so this skips it entirely,
    // and the browser sizes it from its own intrinsic aspect ratio.
    if (src.endsWith(".svg")) {
      return (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt="" className={cn("h-9 w-auto object-contain", className)} />
      );
    }
    return (
      <Image
        src={src}
        alt=""
        width={MARK_WIDTH}
        height={MARK_HEIGHT}
        className={cn("h-9 w-auto object-contain", className)}
      />
    );
  }

  return (
    <svg
      viewBox="0 0 64 64"
      className={cn("aspect-square h-9", className)}
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

export function StackedLockup({ className, logoSrc }: { className?: string; logoSrc?: string | null }) {
  return (
    <div className={cn("flex flex-col items-center text-center", className)}>
      <Monogram src={logoSrc} className="mb-4 h-14" />
      <span className="text-label mb-1">The</span>
      <span className="font-script text-5xl leading-none sm:text-6xl">Dream Decor</span>
      <span className="text-label mt-4 opacity-70">Event Styling &amp; Design · Surrey, BC</span>
    </div>
  );
}

export function Logo({ className, logoSrc }: { className?: string; logoSrc?: string | null }) {
  return (
    <Link
      href="/"
      className={cn(
        "focus-ring flex items-center gap-2.5 rounded-sm text-charcoal transition-opacity hover:opacity-70",
        className
      )}
      aria-label="The Dream Decor, home"
    >
      <Monogram src={logoSrc} className="h-8" />
      <Wordmark />
    </Link>
  );
}
