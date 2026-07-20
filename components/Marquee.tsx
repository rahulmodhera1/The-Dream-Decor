import { occasions } from "@/lib/data";

const items = [...occasions.map((o) => o.title), "Backdrops"];
const loop = [...items, ...items];

export function Marquee() {
  return (
    <div className="overflow-hidden border-y border-line bg-ivory-soft py-6" aria-hidden="true">
      <div className="animate-marquee flex w-max items-center gap-10 whitespace-nowrap">
        {loop.map((item, i) => (
          <span key={i} className="flex items-center gap-10">
            <span className="font-display text-2xl italic text-charcoal-soft sm:text-3xl">{item}</span>
            <span className="text-gold">•</span>
          </span>
        ))}
      </div>
    </div>
  );
}
