"use client";

import { AnimatePresence, motion, type PanInfo } from "framer-motion";
import { useEffect, useState } from "react";
import { testimonials } from "@/lib/data";
import { cn } from "@/lib/utils";

const EASE = [0.16, 1, 0.3, 1] as const;

export function TestimonialCarousel() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setDirection(1);
      setIndex((i) => (i + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(id);
  }, [paused]);

  const go = (next: number) => {
    setDirection(next > index || (index === testimonials.length - 1 && next === 0) ? 1 : -1);
    setIndex((next + testimonials.length) % testimonials.length);
  };

  const onDragEnd = (_: unknown, info: PanInfo) => {
    if (info.offset.x < -80) go(index + 1);
    else if (info.offset.x > 80) go(index - 1);
  };

  const current = testimonials[index];

  return (
    <div
      className="mx-auto max-w-3xl text-center"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="relative min-h-[220px] overflow-hidden sm:min-h-[180px]">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.figure
            key={current.id}
            custom={direction}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.6}
            onDragEnd={onDragEnd}
            initial={{ opacity: 0, x: direction * 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction * -40 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="cursor-grab px-4 active:cursor-grabbing"
          >
            <blockquote className="font-display text-balance text-2xl italic leading-snug text-charcoal sm:text-3xl">
              &ldquo;{current.quote}&rdquo;
            </blockquote>
            <figcaption className="text-label mt-6 text-charcoal-soft">
              {current.name} · {current.event}
            </figcaption>
          </motion.figure>
        </AnimatePresence>
      </div>

      <div className="mt-8 flex items-center justify-center gap-2.5" role="tablist" aria-label="Testimonials">
        {testimonials.map((t, i) => (
          <button
            key={t.id}
            role="tab"
            aria-selected={i === index}
            aria-label={`Show testimonial from ${t.name}`}
            onClick={() => go(i)}
            className="focus-ring rounded-full p-1.5"
          >
            <span
              className={cn(
                "block h-1.5 rounded-full bg-charcoal/25 transition-all duration-400 ease-out",
                i === index ? "w-6 bg-gold" : "w-1.5"
              )}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
