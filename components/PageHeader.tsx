import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";

export function PageHeader({
  eyebrow,
  title,
  description,
  tone = "charcoal",
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  tone?: "charcoal" | "ivory";
  align?: "left" | "center";
}) {
  return (
    <section
      className={cn(
        "pt-36 pb-16 sm:pt-44 sm:pb-20",
        tone === "charcoal" ? "bg-charcoal text-ivory" : "bg-ivory text-charcoal"
      )}
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <Reveal className={cn("max-w-2xl", align === "center" && "mx-auto text-center")}>
          {eyebrow && (
            <p className={cn("text-label mb-4", tone === "charcoal" ? "text-gold-light" : "text-gold-dark")}>
              {eyebrow}
            </p>
          )}
          <h1 className="text-balance text-5xl font-medium sm:text-6xl">{title}</h1>
          {description && (
            <p
              className={cn(
                "mt-6 max-w-xl text-balance leading-relaxed",
                tone === "charcoal" ? "text-ivory/75" : "text-charcoal-soft",
                align === "center" && "mx-auto"
              )}
            >
              {description}
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
