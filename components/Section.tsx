import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/Reveal";

type Tone = "ivory" | "soft" | "charcoal";
type Spacing = "normal" | "top-only" | "bottom-only" | "none";

const tones: Record<Tone, string> = {
  ivory: "bg-ivory text-charcoal",
  soft: "bg-ivory-soft text-charcoal",
  charcoal: "bg-charcoal text-ivory",
};

const spacings: Record<Spacing, string> = {
  normal: "py-20 sm:py-28",
  "top-only": "pt-20 sm:pt-28",
  "bottom-only": "pb-20 sm:pb-28",
  none: "",
};

export function Section({
  id,
  tone = "ivory",
  className,
  children,
  border = true,
  spacing = "normal",
}: {
  id?: string;
  tone?: Tone;
  className?: string;
  children: ReactNode;
  border?: boolean;
  spacing?: Spacing;
}) {
  return (
    <section
      id={id}
      className={cn(spacings[spacing], tones[tone], border && "border-t border-line", className)}
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "dark",
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
}) {
  return (
    <Reveal
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center"
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            "text-label mb-4",
            tone === "dark" ? "text-gold-dark" : "text-gold-light"
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2 className="text-balance text-4xl font-medium sm:text-5xl">{title}</h2>
      {description && (
        <p
          className={cn(
            "mt-5 text-balance text-base leading-relaxed sm:text-lg",
            tone === "dark" ? "text-charcoal-soft" : "text-ivory/75"
          )}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
