import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";

export function CtaBanner({
  eyebrow = "Let's Create Something Beautiful",
  title = "Ready to start planning your event?",
  description = "Tell us your date, your vision, and your venue — we'll take it from there.",
  buttonLabel = "Book a Consultation",
}: {
  eyebrow?: string;
  title?: string;
  description?: string;
  buttonLabel?: string;
}) {
  return (
    <Section tone="charcoal" border={false} className="text-center">
      <Reveal>
        <p className="text-label mb-4 text-gold-light">{eyebrow}</p>
        <h2 className="mx-auto max-w-2xl text-balance text-4xl font-medium sm:text-5xl">{title}</h2>
        <p className="mx-auto mt-5 max-w-xl text-balance text-ivory/75">{description}</p>
        <div className="mt-9 flex justify-center">
          <Button href="/contact" size="lg" withArrow>
            {buttonLabel}
          </Button>
        </div>
      </Reveal>
    </Section>
  );
}
