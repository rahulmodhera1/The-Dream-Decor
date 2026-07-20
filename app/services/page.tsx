import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/Section";
import { PageHeader } from "@/components/PageHeader";
import { Card } from "@/components/Card";
import { PlaceholderMedia } from "@/components/PlaceholderMedia";
import { CtaBanner } from "@/components/CtaBanner";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import { occasions, services } from "@/lib/data";
import { resolveImage } from "@/lib/media";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Event styling, custom backdrops, and full decor packages for weddings, birthdays, baby showers, corporate events, and cultural celebrations in Surrey, BC.",
};

const occasionIcons: Record<string, string> = {
  weddings: "M8 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm8 0a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm-5.2-6.4L12 8",
  birthdays: "M12 3v3M8 6h8l1.5 4h-11L8 6ZM6 10h12l-1 10H7L6 10Zm2 3v4m4-4v4m4-4v4",
  "baby-showers": "M9 3h6l1 4H8l1-4Zm-2 4h10l1 13a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L7 7Zm2 5.5c1 1 2 1 3 0s2-1 3 0",
  corporate: "M4 8h16v11a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8Zm3 0V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2M4 13h16",
  cultural: "M12 3l1.8 4.6L18.5 9l-4 3 1 5-3.5-2.6L8.5 17l1-5-4-3 4.7-1.4L12 3Z",
};

function OccasionIcon({ slug }: { slug: string }) {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d={occasionIcons[slug]} stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const [eventStyling, backdrops, fullDecorPackages] = services;

export default function ServicesPage() {
  const eventStylingImage = resolveImage(`services/${eventStyling.slug}`);
  const backdropsImage = resolveImage(`services/${backdrops.slug}`);
  const fullDecorPackagesImage = resolveImage(`services/${fullDecorPackages.slug}`);

  return (
    <>
      <PageHeader
        eyebrow="What We Do"
        title="Styling & decor for every kind of celebration"
        description="Whether you need a single statement backdrop or a fully transformed venue, we tailor every service to your event, your space, and your story."
      />

      <Section id={eventStyling.slug} className="scroll-mt-24">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <div className="aspect-[4/3] overflow-hidden rounded-2xl">
              <PlaceholderMedia
                src={eventStylingImage}
                alt={eventStyling.title}
                hue={20}
                label={eventStyling.title}
                sample
                className="h-full w-full"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <span className="mb-4 block h-px w-8 bg-gold" aria-hidden="true" />
            <h2 className="text-balance text-4xl font-medium sm:text-5xl">{eventStyling.title}</h2>
            <p className="mt-5 text-balance leading-relaxed text-charcoal-soft">{eventStyling.description}</p>
            <ul className="mt-8 space-y-3">
              {eventStyling.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-sm text-charcoal">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gold" aria-hidden="true" />
                  {feature}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Section>

      <Section id={backdrops.slug} tone="soft" className="scroll-mt-24">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal className="lg:order-2">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl">
              <PlaceholderMedia
                src={backdropsImage}
                alt={backdrops.title}
                hue={60}
                label={backdrops.title}
                sample
                className="h-full w-full"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1} className="lg:order-1">
            <span className="mb-4 block h-px w-8 bg-gold" aria-hidden="true" />
            <h2 className="text-balance text-4xl font-medium sm:text-5xl">{backdrops.title}</h2>
            <p className="mt-5 text-balance leading-relaxed text-charcoal-soft">{backdrops.description}</p>
            <ul className="mt-8 space-y-3">
              {backdrops.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-sm text-charcoal">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gold" aria-hidden="true" />
                  {feature}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Section>

      <Section id={fullDecorPackages.slug} tone="charcoal" className="relative scroll-mt-24 overflow-hidden">
        <div className="absolute inset-0">
          <PlaceholderMedia src={fullDecorPackagesImage} alt={fullDecorPackages.title} hue={150} className="h-full w-full" />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/85 to-charcoal/50" />
        </div>

        <Reveal className="relative mx-auto max-w-2xl text-center">
          <span className="mx-auto mb-4 block h-px w-8 bg-gold" aria-hidden="true" />
          <h2 className="text-balance text-4xl font-medium sm:text-5xl">{fullDecorPackages.title}</h2>
          <p className="mx-auto mt-5 max-w-xl text-balance leading-relaxed text-ivory/80">
            {fullDecorPackages.description}
          </p>
          <ul className="mx-auto mt-9 grid max-w-lg grid-cols-1 gap-x-8 gap-y-3 text-left sm:grid-cols-2">
            {fullDecorPackages.features.map((feature) => (
              <li key={feature} className="flex items-start gap-3 text-sm text-ivory/90">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gold" aria-hidden="true" />
                {feature}
              </li>
            ))}
          </ul>
        </Reveal>
      </Section>

      <Section id="occasions" tone="soft" className="scroll-mt-24">
        <SectionHeading
          title="Every milestone, thoughtfully styled"
          description="Our styling approach flexes to the occasion. Here's where we spend most of our time."
          align="center"
        />

        <RevealGroup className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {occasions.map((occasion) => (
            <RevealItem key={occasion.slug}>
              <Card className="h-full">
                <span className="text-gold-dark">
                  <OccasionIcon slug={occasion.slug} />
                </span>
                <h3 className="font-display mt-5 text-xl italic">{occasion.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal-soft">{occasion.description}</p>
              </Card>
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>

      <CtaBanner
        title="Have an occasion in mind?"
        description="Share your date and vision, and we'll put together a styling plan built around it."
      />
    </>
  );
}
