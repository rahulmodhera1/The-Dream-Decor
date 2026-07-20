import Link from "next/link";
import { highlights } from "@/lib/data";
import { RevealGroup, RevealItem } from "@/components/Reveal";

export function ServiceHighlights() {
  return (
    <RevealGroup className="grid grid-cols-1 divide-y divide-line border border-line sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
      {highlights.map((h) => (
        <RevealItem key={h.title}>
          <Link
            href={h.href}
            className="focus-ring group flex h-full flex-col justify-between gap-8 p-8 transition-colors duration-300 hover:bg-ivory-soft sm:p-10"
          >
            <span className="block h-px w-8 bg-gold transition-all duration-300 group-hover:w-14" aria-hidden="true" />
            <div>
              <h3 className="font-display text-xl italic">{h.title}</h3>
              <p className="mt-2 text-sm text-charcoal-soft">{h.description}</p>
            </div>
            <span
              aria-hidden="true"
              className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-current/10 transition-all duration-300 ease-out group-hover:translate-x-0.5"
            >
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path
                  d="M4 8h8M8.5 4.5 12 8l-3.5 3.5"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </Link>
        </RevealItem>
      ))}
    </RevealGroup>
  );
}
