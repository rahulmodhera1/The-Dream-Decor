"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navLinks } from "@/lib/data";
import { Logo } from "@/components/Logo";
import { Button } from "@/components/Button";
import { MobileMenu } from "@/components/MobileMenu";
import { cn } from "@/lib/utils";

export function Nav({
  logoSrc,
  logoSrcLight,
}: {
  logoSrc?: string | null;
  logoSrcLight?: string | null;
}) {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const transparent = isHome && !scrolled;

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          transparent
            ? "border-b border-transparent bg-transparent"
            : "border-b border-line bg-ivory/90 backdrop-blur-md"
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8 lg:px-12">
          <Logo
            logoSrc={transparent ? logoSrcLight : logoSrc}
            className={cn(transparent && "text-ivory")}
          />

          <nav
            className={cn(
              "hidden items-center gap-8 md:flex",
              transparent ? "text-ivory" : "text-charcoal"
            )}
            aria-label="Primary"
          >
            {navLinks.slice(1, -1).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-label focus-ring relative py-1 transition-opacity hover:opacity-70",
                  pathname === link.href && "opacity-100"
                )}
              >
                {link.label}
                <span
                  className={cn(
                    "absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-current transition-transform duration-300 ease-out",
                    pathname === link.href && "scale-x-100"
                  )}
                  aria-hidden="true"
                />
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button
              href="/contact"
              size="md"
              variant={transparent ? "secondary" : "primary"}
              className={transparent ? "border-ivory text-ivory hover:bg-ivory hover:text-charcoal" : ""}
            >
              Book a Consultation
            </Button>
          </div>

          <button
            onClick={() => setMenuOpen(true)}
            className={cn(
              "focus-ring flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full md:hidden",
              transparent ? "text-ivory" : "text-charcoal"
            )}
            aria-label="Open menu"
          >
            <span className="h-px w-5 bg-current" />
            <span className="h-px w-5 bg-current" />
          </button>
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
