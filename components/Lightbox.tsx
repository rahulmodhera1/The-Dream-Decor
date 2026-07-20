"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { PlaceholderMedia } from "@/components/PlaceholderMedia";
import type { GalleryItem } from "@/lib/data";

const EASE = [0.16, 1, 0.3, 1] as const;

export function Lightbox({
  items,
  index,
  onClose,
  onNavigate,
}: {
  items: GalleryItem[];
  index: number | null;
  onClose: () => void;
  onNavigate: (direction: 1 | -1) => void;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const open = index !== null;
  const item = open ? items[index] : null;

  useEffect(() => {
    if (!open) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNavigate(1);
      if (e.key === "ArrowLeft") onNavigate(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = original;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose, onNavigate]);

  return (
    <AnimatePresence>
      {item && (
        <motion.div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-charcoal/92 p-4 backdrop-blur-sm sm:p-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: EASE }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={item.title}
        >
          <button
            ref={closeRef}
            onClick={onClose}
            aria-label="Close lightbox"
            className="focus-ring absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full text-ivory/80 transition-colors hover:bg-ivory/10 hover:text-ivory"
          >
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M2 2L18 18M18 2L2 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>

          {items.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onNavigate(-1);
                }}
                aria-label="Previous image"
                className="focus-ring absolute left-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full text-ivory/80 transition-colors hover:bg-ivory/10 hover:text-ivory sm:left-6"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path d="M12 4L6 10l6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onNavigate(1);
                }}
                aria-label="Next image"
                className="focus-ring absolute right-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full text-ivory/80 transition-colors hover:bg-ivory/10 hover:text-ivory sm:right-6"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path d="M8 4l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </>
          )}

          <motion.div
            key={item.id}
            className="relative w-full max-w-3xl"
            initial={{ opacity: 0, scale: 0.96, y: 14 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.45, ease: EASE }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="aspect-[4/5] overflow-hidden rounded-lg sm:aspect-[16/10]">
              <PlaceholderMedia hue={item.hue} label={item.title} caption={item.tags} className="h-full w-full" />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
