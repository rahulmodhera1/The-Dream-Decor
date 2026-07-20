"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

const EASE = [0.16, 1, 0.3, 1] as const;

/**
 * Reveals text one character at a time with a left-to-right clip wipe plus a
 * quick blur-to-sharp settle, so a cursive/script wordmark reads as if it's
 * being written by hand. Honors prefers-reduced-motion by rendering statically.
 */
export function HandwriteText({
  text,
  className,
  delay = 0,
  stagger = 0.08,
  duration = 0.55,
}: {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  duration?: number;
}) {
  const reduce = useReducedMotion();
  const chars = Array.from(text);

  if (reduce) {
    return <span className={className}>{text}</span>;
  }

  return (
    <span className={cn("inline-block", className)} aria-label={text} role="text">
      {chars.map((ch, i) => (
        <motion.span
          key={`${ch}-${i}`}
          aria-hidden="true"
          className="inline-block will-change-[clip-path,filter,opacity]"
          style={{ whiteSpace: "pre" }}
          initial={{ opacity: 0, clipPath: "inset(-18% 100% -18% 0)", filter: "blur(3px)" }}
          animate={{ opacity: 1, clipPath: "inset(-18% 0% -18% 0)", filter: "blur(0px)" }}
          transition={{ duration, ease: EASE, delay: delay + i * stagger }}
        >
          {ch}
        </motion.span>
      ))}
    </span>
  );
}
