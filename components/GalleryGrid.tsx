"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { galleryCategories, galleryItems, type GalleryItem } from "@/lib/data";
import { PlaceholderMedia } from "@/components/PlaceholderMedia";
import { Lightbox } from "@/components/Lightbox";
import { cn } from "@/lib/utils";

const EASE = [0.16, 1, 0.3, 1] as const;

export function GalleryGrid() {
  const [filter, setFilter] = useState<GalleryItem["category"] | "all">("all");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const filtered = filter === "all" ? galleryItems : galleryItems.filter((i) => i.category === filter);

  const navigate = (direction: 1 | -1) => {
    setOpenIndex((curr) => {
      if (curr === null) return curr;
      return (curr + direction + filtered.length) % filtered.length;
    });
  };

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2" role="tablist" aria-label="Filter portfolio by occasion">
        {galleryCategories.map((cat) => (
          <button
            key={cat.value}
            role="tab"
            aria-selected={filter === cat.value}
            onClick={() => {
              setFilter(cat.value);
              setOpenIndex(null);
            }}
            className={cn(
              "focus-ring text-label rounded-full border px-4 py-2 transition-colors duration-300",
              filter === cat.value
                ? "border-charcoal bg-charcoal text-ivory"
                : "border-line text-charcoal-soft hover:border-charcoal hover:text-charcoal"
            )}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <motion.div layout className="mt-12 columns-1 gap-4 sm:columns-2 lg:columns-3">
        <AnimatePresence>
          {filtered.map((item, i) => (
            <motion.button
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.4, ease: EASE }}
              onClick={() => setOpenIndex(i)}
              aria-label={`View "${item.title}" in the lightbox`}
              className="focus-ring group mb-4 block w-full break-inside-avoid overflow-hidden rounded-lg text-left"
            >
              <div className={i % 5 === 0 ? "aspect-[3/4]" : i % 3 === 0 ? "aspect-square" : "aspect-[4/5]"}>
                <PlaceholderMedia
                  hue={item.hue}
                  sample
                  className="h-full w-full transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
              <span className="font-display mt-3 block text-base italic">{item.title}</span>
              <span className="text-label text-charcoal-faint">{item.tags}</span>
            </motion.button>
          ))}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 && (
        <p className="mt-16 text-center text-charcoal-soft">No pieces in this category just yet — check back soon.</p>
      )}

      <Lightbox items={filtered} index={openIndex} onClose={() => setOpenIndex(null)} onNavigate={navigate} />
    </div>
  );
}
