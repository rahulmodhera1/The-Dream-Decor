import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

// The real uploaded lockup (monogram + "Dream Decor" script + tagline, all
// one piece) is ~386x206. Update these if a differently-proportioned logo
// file replaces it.
const LOGO_WIDTH = 393;
const LOGO_HEIGHT = 225;

/**
 * Renders the site's real uploaded logo (full lockup: monogram, script
 * wordmark, and tagline together) when `src` is given. Sized by height with
 * width auto so it keeps its true proportions instead of being squeezed
 * into a square icon slot.
 */
export function LogoMark({ className, src, alt = "" }: { className?: string; src: string; alt?: string }) {
  if (src.endsWith(".svg")) {
    // Local SVGs render as a plain <img>: vector art doesn't benefit from
    // next/image's raster optimization, and the browser sizes it from its
    // own intrinsic aspect ratio.
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={src} alt={alt} className={cn("h-9 w-auto object-contain", className)} />;
  }
  return (
    <Image
      src={src}
      alt={alt}
      width={LOGO_WIDTH}
      height={LOGO_HEIGHT}
      className={cn("h-9 w-auto object-contain", className)}
    />
  );
}

/** Hand-drawn placeholder monogram, used only until a real logo is uploaded. */
export function Monogram({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={cn("aspect-square h-9", className)} aria-hidden="true">
      <circle cx="32" cy="32" r="30" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.55" />
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
      <Monogram className="mb-4 h-14" />
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
        "focus-ring flex items-center rounded-sm text-charcoal transition-opacity hover:opacity-70",
        !logoSrc && "gap-2.5",
        className
      )}
      aria-label="The Dream Decor, home"
    >
      {logoSrc ? (
        <LogoMark src={logoSrc} className="h-14 sm:h-16" />
      ) : (
        <>
          <Monogram className="h-8" />
          <Wordmark />
        </>
      )}
    </Link>
  );
}
