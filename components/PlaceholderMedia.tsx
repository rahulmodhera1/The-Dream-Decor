import { cn } from "@/lib/utils";

/**
 * Stand-in visual for real photography. Renders a brand-toned gradient with
 * corner ornament + label so the layout reads as intentional, not broken.
 * Swap with next/image once real photos are available — the `hue` prop just
 * varies the placeholder tone per item.
 */
export function PlaceholderMedia({
  hue = 30,
  label,
  caption,
  sample = false,
  className,
}: {
  hue?: number;
  label?: string;
  caption?: string;
  sample?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "bg-grain relative flex h-full w-full items-center justify-center overflow-hidden",
        className
      )}
      style={{
        background: `linear-gradient(140deg, hsl(${hue} 38% 93%) 0%, hsl(${hue + 24} 42% 82%) 45%, hsl(${hue - 12} 30% 34%) 100%)`,
      }}
    >
      <svg
        viewBox="0 0 100 100"
        className="absolute inset-0 h-full w-full opacity-90"
        aria-hidden="true"
      >
        <g stroke="rgba(246,242,236,0.55)" strokeWidth="0.4" fill="none">
          <path d="M6 6 L6 18 M6 6 L18 6" />
          <path d="M94 6 L94 18 M94 6 L82 6" />
          <path d="M6 94 L6 82 M6 94 L18 94" />
          <path d="M94 94 L94 82 M94 94 L82 94" />
        </g>
        <circle cx="50" cy="46" r="14" stroke="rgba(43,42,40,0.22)" strokeWidth="0.5" fill="none" />
      </svg>

      {sample && (
        <span className="text-label absolute right-3 top-3 rounded-full bg-charcoal/70 px-2.5 py-1 text-[0.55rem] text-ivory backdrop-blur-sm">
          Sample
        </span>
      )}

      {(label || caption) && (
        <div className="absolute inset-x-0 bottom-0 flex flex-col items-center gap-1 px-4 pb-4 text-center">
          {label && (
            <span className="font-display text-sm italic text-ivory/95 drop-shadow-sm sm:text-base">
              {label}
            </span>
          )}
          {caption && <span className="text-label text-ivory/75">{caption}</span>}
        </div>
      )}
    </div>
  );
}
