import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Section, SectionHeading } from "@/components/Section";
import { PlaceholderMedia } from "@/components/PlaceholderMedia";
import { CtaBanner } from "@/components/CtaBanner";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About",
  description:
    "The Dream Decor is a Surrey, BC event styling studio. Learn our story, our style philosophy, and the areas we serve across the Lower Mainland.",
};

const pillars = [
  {
    title: "Considered, Not Cluttered",
    description: "Every piece earns its place. We design toward clarity, not excess.",
  },
  {
    title: "Colour With Intention",
    description: "Palettes are chosen to suit your venue, your season, and your story.",
  },
  {
    title: "Built To Be Photographed",
    description: "We style with the camera in mind, from every angle guests will capture.",
  },
  {
    title: "Every Detail, Handled",
    description: "From first sketch to final teardown, our team manages the full experience.",
  },
];

const serviceCities = [
  "Surrey",
  "Cloverdale",
  "Langley",
  "Delta",
  "White Rock",
  "Abbotsford",
  "Vancouver",
  "Burnaby",
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Us"
        title="A studio built around how a room feels"
        description="Based in Surrey, BC, The Dream Decor designs and builds event styling that feels personal, never off-the-shelf."
      />

      <Section>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <div className="aspect-[4/5] overflow-hidden rounded-2xl">
              <PlaceholderMedia hue={30} label="Behind the Scenes" sample className="h-full w-full" />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-label mb-4 text-gold-dark">Our Story</p>
            <h2 className="text-balance text-4xl font-medium sm:text-5xl">From weekend passion to full studio</h2>
            <div className="mt-5 space-y-4 text-balance leading-relaxed text-charcoal-soft">
              <p>
                The Dream Decor started small, styling friends&apos; and family&apos;s celebrations around Surrey,
                one backdrop and one tablescape at a time. What stayed consistent was the reaction: guests walking
                in and pausing, just for a second, to take it all in.
              </p>
              <p>
                That reaction is still what we design for. Today we work across weddings, milestone birthdays,
                baby showers, corporate events, and cultural celebrations, but the process hasn&apos;t changed.
                We listen first, then build a styling plan around your venue, your palette, and the moments that
                matter most to you.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section tone="soft">
        <SectionHeading title="What guides every setup we design" align="center" />

        <RevealGroup className="mt-14 grid grid-cols-1 divide-y divide-line border border-line sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x">
          {pillars.map((pillar) => (
            <RevealItem key={pillar.title}>
              <div className="flex h-full flex-col gap-6 p-8">
                <span className="block h-px w-8 bg-gold" aria-hidden="true" />
                <div>
                  <h3 className="font-display text-xl italic">{pillar.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-charcoal-soft">{pillar.description}</p>
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>

      <Section>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <h2 className="text-balance text-4xl font-medium sm:text-5xl">Proudly based in Surrey, BC</h2>
            <p className="mt-5 max-w-md text-balance leading-relaxed text-charcoal-soft">
              We&apos;re rooted in Surrey and travel throughout Metro Vancouver and the Fraser Valley for the right
              event. Don&apos;t see your city listed? Reach out, we likely still cover it.
            </p>
            <ul className="mt-8 flex flex-wrap gap-2">
              {serviceCities.map((city) => (
                <li
                  key={city}
                  className="text-label rounded-full border border-line px-4 py-2 text-charcoal-soft"
                >
                  {city}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="aspect-square overflow-hidden rounded-2xl">
              <PlaceholderMedia hue={205} label="Serving the Lower Mainland" caption="Surrey, BC & Beyond" className="h-full w-full" />
            </div>
          </Reveal>
        </div>
      </Section>

      <CtaBanner
        title="Let's bring your vision to life"
        description="We'd love to hear about your event. Reach out and let's start designing."
      />
    </>
  );
}
