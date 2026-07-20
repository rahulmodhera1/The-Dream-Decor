import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Section, SectionHeading } from "@/components/Section";
import { ServiceHighlights } from "@/components/ServiceHighlights";
import { Card } from "@/components/Card";
import { PlaceholderMedia } from "@/components/PlaceholderMedia";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";
import { InstagramStrip } from "@/components/InstagramStrip";
import { CtaBanner } from "@/components/CtaBanner";
import { Button } from "@/components/Button";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import { galleryItems, siteConfig } from "@/lib/data";
import { resolveImage, resolveVideo, resolveLogoImage } from "@/lib/media";

const teaserItems = galleryItems.slice(0, 4);

export default function Home() {
  const heroImage = resolveImage("hero/hero");
  const heroVideo = resolveVideo("hero/hero");
  const heroLogo = resolveLogoImage("logo/mark-light");
  const studioImage = resolveImage("about/studio");

  return (
    <>
      <Hero imageSrc={heroImage} videoSrc={heroVideo} logoSrc={heroLogo} />

      <Marquee />

      <Section border={false} spacing="none">
        <ServiceHighlights />
      </Section>

      <Section tone="soft">
        <SectionHeading
          title="A glimpse of the moments we've styled"
          description="From intimate baby showers to full wedding transformations, every setup is designed around the story you want to tell."
        />

        <RevealGroup className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {teaserItems.map((item) => (
            <RevealItem key={item.id}>
              <Card href="/portfolio" className="aspect-[3/4] overflow-hidden p-0">
                <PlaceholderMedia
                  src={resolveImage(`portfolio/${item.slug}`)}
                  alt={item.title}
                  hue={item.hue}
                  label={item.title}
                  caption={item.tags}
                  sample
                  className="h-full w-full"
                />
              </Card>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal className="mt-12 flex justify-center">
          <Button href="/portfolio" variant="secondary" withArrow>
            View Full Portfolio
          </Button>
        </Reveal>
      </Section>

      <Section>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <div className="aspect-[4/5] overflow-hidden rounded-2xl">
              <PlaceholderMedia
                src={studioImage}
                alt="The Dream Decor studio"
                hue={26}
                label="The Dream Decor Studio"
                sample
                className="h-full w-full"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-label mb-4 text-gold-dark">Our Story</p>
            <h2 className="text-balance text-4xl font-medium sm:text-5xl">
              Designed in Surrey, styled across the Lower Mainland
            </h2>
            <p className="mt-5 text-balance leading-relaxed text-charcoal-soft">
              The Dream Decor began with a simple belief: the way a room feels matters as much as how it looks.
              What started as styling for friends&apos; celebrations has grown into a full-service studio, trusted
              to bring weddings, milestone birthdays, and corporate events to life across Surrey, BC and beyond.
            </p>
            <div className="mt-8">
              <Button href="/about" variant="secondary" withArrow>
                Our Philosophy
              </Button>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section tone="soft">
        <SectionHeading title="What our clients say" align="center" />
        <div className="mt-14">
          <TestimonialCarousel />
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow={siteConfig.instagramHandle}
          title="Follow the journey"
          description="Behind-the-scenes styling, finished setups, and everything in between."
          align="center"
        />
        <div className="mt-12">
          <InstagramStrip />
        </div>
      </Section>

      <CtaBanner />
    </>
  );
}
