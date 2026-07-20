import Link from "next/link";
import { navLinks, services, siteConfig } from "@/lib/data";
import { Monogram } from "@/components/Logo";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-charcoal text-ivory">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:pr-8">
            <Link href="/" className="focus-ring flex items-center gap-2.5 rounded-sm" aria-label="The Dream Decor, home">
              <Monogram className="h-8 w-8 text-ivory" />
              <span className="font-script text-2xl">Dream Decor</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ivory/70">
              {siteConfig.description}
            </p>
          </div>

          <div>
            <h3 className="text-label mb-5 text-ivory/70">Explore</h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="focus-ring text-sm text-ivory/85 transition-colors hover:text-gold-light">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-label mb-5 text-ivory/70">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services#${service.slug}`}
                    className="focus-ring text-sm text-ivory/85 transition-colors hover:text-gold-light"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-label mb-5 text-ivory/70">Get in Touch</h3>
            <ul className="space-y-3 text-sm text-ivory/85">
              <li>
                <a href={siteConfig.instagramUrl} target="_blank" rel="noopener noreferrer" className="focus-ring transition-colors hover:text-gold-light">
                  {siteConfig.instagramHandle}
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.email}`} className="focus-ring transition-colors hover:text-gold-light">
                  {siteConfig.email}
                </a>
              </li>
              <li className="text-ivory/60">Serving {siteConfig.serviceArea}</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center gap-4 border-t border-ivory/15 pt-8 text-xs text-ivory/70 sm:flex-row sm:justify-between">
          <p>© {year} {siteConfig.name}. All rights reserved.</p>
          <p>Designed &amp; styled in {siteConfig.location}.</p>
        </div>
      </div>
    </footer>
  );
}
