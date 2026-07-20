import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/Reveal";
import { siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with The Dream Decor to start planning your event styling, backdrop, or full decor package in Surrey, BC.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's start planning"
        description="Share a few details about your event and we'll follow up within 1–2 business days."
      />

      <Section>
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] lg:gap-20">
          <Reveal className="space-y-10">
            <div>
              <p className="text-label mb-3 text-gold-dark">Instagram</p>
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring font-display text-2xl italic text-charcoal transition-colors hover:text-gold-dark"
              >
                {siteConfig.instagramHandle}
              </a>
              <p className="mt-2 text-sm text-charcoal-soft">
                Prefer to browse first? Our feed is the fastest way to see recent work.
              </p>
            </div>

            <div>
              <p className="text-label mb-3 text-gold-dark">Email</p>
              <a
                href={`mailto:${siteConfig.email}`}
                className="focus-ring font-display text-2xl italic text-charcoal transition-colors hover:text-gold-dark"
              >
                {siteConfig.email}
              </a>
            </div>

            <div>
              <p className="text-label mb-3 text-gold-dark">Service Area</p>
              <p className="text-charcoal-soft">
                Based in {siteConfig.location}, styling events across {siteConfig.serviceArea}.
              </p>
            </div>

            <div className="border-t border-line pt-8">
              <p className="text-sm text-charcoal-faint">
                Booking 4–8 weeks out is typical for full decor packages; peak wedding season (May–September) fills
                up faster, so reach out early.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-line bg-ivory-soft p-8 sm:p-10">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
