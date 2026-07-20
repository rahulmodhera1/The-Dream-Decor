import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Section, SectionHeading } from "@/components/Section";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";
import { Card } from "@/components/Card";
import { CtaBanner } from "@/components/CtaBanner";
import { RevealGroup, RevealItem } from "@/components/Reveal";
import { testimonials } from "@/lib/data";

export const metadata: Metadata = {
  title: "Testimonials",
  description: "Kind words from clients The Dream Decor has styled weddings, birthdays, and events for across Surrey, BC.",
};

export default function TestimonialsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Testimonials"
        title="Kind words from our clients"
        description="The moments we design are only as good as how they feel to the people living them."
        align="center"
      />

      <Section spacing="bottom-only" border={false}>
        <TestimonialCarousel />
      </Section>

      <Section tone="soft">
        <SectionHeading eyebrow="In Their Words" title="More from clients we've styled for" align="center" />

        <RevealGroup className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <RevealItem key={t.id}>
              <Card className="flex h-full flex-col justify-between">
                <p className="font-display text-lg italic leading-relaxed text-charcoal">&ldquo;{t.quote}&rdquo;</p>
                <p className="text-label mt-6 text-charcoal-soft">
                  {t.name} · {t.event}
                </p>
              </Card>
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>

      <CtaBanner
        eyebrow="Join Our Clients"
        title="Ready to plan your own celebration?"
        description="Let's talk about your date, your vision, and how we can bring it to life."
      />
    </>
  );
}
