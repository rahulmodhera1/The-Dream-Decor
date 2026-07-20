"use client";

import { Fragment } from "react";
import { motion } from "framer-motion";
import { occasions } from "@/lib/data";

const EASE = [0.16, 1, 0.3, 1] as const;

const items = occasions.map((o) => o.title);

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const word = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

export function OccasionsBand() {
  return (
    <section className="border-y border-line bg-ivory-soft">
      <div className="mx-auto max-w-5xl px-6 py-14 text-center sm:py-16">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 0.6, ease: EASE }}
          className="text-label mb-6 text-gold-dark"
        >
          An Occasion For Everything
        </motion.p>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-15% 0px" }}
          className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 sm:gap-x-5"
        >
          {items.map((title, i) => (
            <Fragment key={title}>
              {i > 0 && (
                <motion.span
                  variants={word}
                  aria-hidden="true"
                  className="text-[0.5rem] text-gold"
                >
                  ◆
                </motion.span>
              )}
              <motion.span
                variants={word}
                className="font-display text-2xl italic text-charcoal-soft transition-colors duration-300 hover:text-gold-dark sm:text-3xl"
              >
                {title}
              </motion.span>
            </Fragment>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
