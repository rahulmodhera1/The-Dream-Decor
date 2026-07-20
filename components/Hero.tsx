"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/Button";
import { MagneticButton } from "@/components/MagneticButton";

const EASE = [0.16, 1, 0.3, 1] as const;

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14, delayChildren: 0.2 } },
};

const item = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE } },
};

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative flex h-[100svh] min-h-[640px] w-full items-center justify-center overflow-hidden bg-charcoal text-ivory"
    >
      <motion.div style={{ y: bgY }} className="absolute inset-0">
        <div
          className="animate-drift absolute inset-0 opacity-80"
          style={{
            background:
              "radial-gradient(circle at 22% 28%, rgba(205,168,119,0.35), transparent 45%), radial-gradient(circle at 78% 18%, rgba(179,135,79,0.28), transparent 42%), radial-gradient(circle at 50% 85%, rgba(246,242,236,0.1), transparent 55%)",
          }}
        />
        <div
          className="animate-drift-slow absolute inset-0 opacity-60"
          style={{
            background:
              "radial-gradient(circle at 82% 72%, rgba(179,135,79,0.22), transparent 40%), radial-gradient(circle at 12% 78%, rgba(246,242,236,0.08), transparent 45%)",
          }}
        />
        <div className="bg-grain absolute inset-0" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/55 to-charcoal/35" />
      </motion.div>

      <motion.div
        style={{ y: contentY, opacity }}
        className="relative z-10 mx-auto flex max-w-3xl flex-col items-center px-6 text-center"
      >
        <motion.div variants={container} initial="hidden" animate="visible" className="flex flex-col items-center">
          <motion.span variants={item} className="text-label mb-6 text-ivory/70">
            Event Styling & Decor, Surrey BC
          </motion.span>

          <motion.h1 variants={item} className="flex flex-col items-center leading-none">
            <span className="text-label mb-2 text-ivory/85">The</span>
            <span className="font-script text-6xl sm:text-8xl">Dream Decor</span>
          </motion.h1>

          <motion.p variants={item} className="mt-8 max-w-xl text-balance text-base leading-relaxed text-ivory/80 sm:text-lg">
            Bespoke event styling, backdrops, and full decor packages for weddings, birthdays, baby showers,
            corporate events, and cultural celebrations across the Lower Mainland.
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-col gap-4 sm:flex-row">
            <MagneticButton>
              <Button href="/contact" size="lg" withArrow>
                Book a Consultation
              </Button>
            </MagneticButton>
            <Button
              href="/portfolio"
              size="lg"
              variant="secondary"
              className="border-ivory/60 text-ivory hover:bg-ivory hover:text-charcoal"
            >
              View Portfolio
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
