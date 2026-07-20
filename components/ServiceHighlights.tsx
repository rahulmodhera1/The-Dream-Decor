import Link from "next/link";
import { highlights } from "@/lib/data";
import { RevealGroup, RevealItem } from "@/components/Reveal";

export function ServiceHighlights() {
  return (
    <RevealGroup className="grid grid-cols-1 divide-y divide-line border border-line sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
      {highlights.map((h, i) => (
        <RevealItem key={h.title}>
          <Link
            href={h.href}
            className="focus-ring group flex h-full flex-col justify-between gap-8 p-8 transition-colors duration-300 hover:bg-ivory-soft sm:p-10"
          >
            <span className="text-label text-gold-dark">{String(i + 1).padStart(2, "0")}</span>
            <div>
              <h3 className="font-display text-xl italic">{h.title}</h3>
              <p className="mt-2 text-sm text-charcoal-soft">{h.description}</p>
            </div>
            <span
              aria-hidden="true"
              className="inline-block w-fit text-lg transition-transform duration-300 ease-out group-hover:translate-x-1.5"
            >
              →
            </span>
          </Link>
        </RevealItem>
      ))}
    </RevealGroup>
  );
}
