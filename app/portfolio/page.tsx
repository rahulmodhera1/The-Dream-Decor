import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { GalleryGrid } from "@/components/GalleryGrid";
import { CtaBanner } from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "A curated look at weddings, birthdays, baby showers, corporate events, and cultural celebrations styled by The Dream Decor in Surrey, BC.",
};

export default function PortfolioPage() {
  return (
    <>
      <PageHeader
        eyebrow="Portfolio"
        title="A curated look at our work"
        description="Filter by occasion to see how we've styled celebrations across Surrey and the Lower Mainland. Sample imagery shown — full gallery coming soon."
        align="center"
      />

      <Section border={false} spacing="bottom-only">
        <GalleryGrid />
      </Section>

      <CtaBanner
        eyebrow="Like What You See?"
        title="Let's design something just as beautiful for you"
        description="Every setup starts with a conversation. Tell us about your event and we'll take it from there."
      />
    </>
  );
}
