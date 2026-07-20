import Link from "next/link";
import type { ReactNode } from "react";
import { highlights } from "@/lib/data";
import { RevealGroup, RevealItem } from "@/components/Reveal";

const icons: Record<string, ReactNode> = {
  "Event Styling": (
    <path
      d="M4 20 14.5 9.5M17 4l.9 2.1L20 7l-2.1.9L17 10l-.9-2.1L14 7l2.1-.9L17 4Zm-9 9 .6 1.4 1.4.6-1.4.6L8 17l-.6-1.4L6 15l1.4-.6L8 13Z"
      stroke="currentColor"
      strokeWidth="1.1"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  Backdrops: (
    <path
      d="M4 21V10a8 8 0 0 1 16 0v11M3 21h18M9 21v-8m6 8v-8"
      stroke="currentColor"
      strokeWidth="1.1"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  "Full Decor Packages": (
    <path
      d="M12 3.5 20 8v8l-8 4.5L4 16V8l8-4.5Zm0 0v17M4 8l8 4.5M20 8l-8 4.5"
      stroke="currentColor"
      strokeWidth="1.1"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  "Every Occasion": (
    <path
      d="m12 3 2.5 5.9L21 9.3l-4.8 4.1L17.6 20 12 16.6 6.4 20l1.4-6.6L3 9.3l6.5-.4L12 3Z"
      stroke="currentColor"
      strokeWidth="1.1"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
};

export function ServiceHighlights() {
  return (
    <RevealGroup className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {highlights.map((h) => (
        <RevealItem key={h.title} className="h-full">
          <Link
            href={h.href}
            className="focus-ring group relative flex h-full flex-col gap-7 overflow-hidden rounded-2xl border border-line bg-ivory p-8 transition-all duration-500 ease-out hover:-translate-y-1.5 hover:border-gold/50 hover:shadow-lift sm:p-9"
          >
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-gold/0 blur-2xl transition-all duration-500 group-hover:bg-gold/20"
            />

            <span className="text-gold-dark transition-transform duration-500 ease-out group-hover:-translate-y-0.5">
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                {icons[h.title]}
              </svg>
            </span>

            <div className="flex-1">
              <h3 className="font-display text-2xl italic">{h.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-charcoal-soft">{h.description}</p>
            </div>

            <span className="text-label inline-flex items-center gap-2 text-charcoal-faint transition-colors duration-300 group-hover:text-gold-dark">
              Explore
              <span aria-hidden="true" className="inline-block transition-transform duration-300 ease-out group-hover:translate-x-1">
                &rarr;
              </span>
            </span>
          </Link>
        </RevealItem>
      ))}
    </RevealGroup>
  );
}
