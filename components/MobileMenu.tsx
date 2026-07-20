"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { navLinks, siteConfig } from "@/lib/data";
import { Button } from "@/components/Button";

const EASE = [0.16, 1, 0.3, 1] as const;

export function MobileMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const pathname = usePathname();

  useEffect(() => {
    if (!open) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = original;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  useEffect(() => {
    onClose();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[60] flex flex-col bg-ivory md:hidden"
          initial={{ clipPath: "circle(0% at calc(100% - 2.5rem) 2.5rem)" }}
          animate={{ clipPath: "circle(150% at calc(100% - 2.5rem) 2.5rem)" }}
          exit={{ clipPath: "circle(0% at calc(100% - 2.5rem) 2.5rem)" }}
          transition={{ duration: 0.6, ease: EASE }}
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
        >
          <div className="flex items-center justify-end px-6 pt-6">
            <button
              onClick={onClose}
              className="focus-ring flex h-11 w-11 items-center justify-center rounded-full text-charcoal transition-transform duration-300 hover:rotate-90"
              aria-label="Close menu"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M2 2L18 18M18 2L2 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          <nav className="flex flex-1 flex-col items-start justify-center gap-2 px-10">
            {navLinks.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: EASE, delay: 0.15 + i * 0.05 }}
              >
                <Link
                  href={link.href}
                  className="focus-ring font-display text-4xl italic text-charcoal transition-colors hover:text-gold-dark"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </nav>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASE, delay: 0.45 }}
            className="flex flex-col gap-4 border-t border-line px-10 py-8"
          >
            <Button href="/contact" withArrow>
              Book a Consultation
            </Button>
            <a
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-label focus-ring text-charcoal-soft transition-colors hover:text-gold-dark"
            >
              {siteConfig.instagramHandle} on Instagram
            </a>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
