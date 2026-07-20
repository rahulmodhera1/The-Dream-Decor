import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

const base =
  "focus-ring group relative inline-flex items-center justify-center gap-2 rounded-full font-sans text-label transition-all duration-300 ease-out active:scale-[0.97] disabled:pointer-events-none disabled:opacity-50";

const variants: Record<Variant, string> = {
  primary:
    "bg-charcoal text-ivory hover:bg-gold hover:text-charcoal shadow-lift",
  secondary:
    "border border-charcoal/70 text-charcoal hover:border-charcoal hover:bg-charcoal hover:text-ivory",
  ghost: "text-charcoal hover:text-gold-dark",
};

const sizes: Record<Size, string> = {
  md: "px-6 py-3",
  lg: "px-8 py-4",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
  withArrow?: boolean;
};

type ButtonAsLink = CommonProps & {
  href: string;
  external?: boolean;
};

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

export function Button(props: ButtonAsLink | ButtonAsButton) {
  const {
    variant = "primary",
    size = "md",
    className,
    children,
    withArrow,
    ...rest
  } = props;

  const classes = cn(base, variants[variant], sizes[size], className);
  const content = (
    <>
      <span>{children}</span>
      {withArrow && (
        <span aria-hidden="true" className="inline-block transition-transform duration-300 ease-out group-hover:translate-x-1">
          →
        </span>
      )}
    </>
  );

  if ("href" in props && props.href) {
    const { href, external } = props as ButtonAsLink;
    if (external) {
      return (
        <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  const buttonRest = rest as ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button className={classes} {...buttonRest}>
      {content}
    </button>
  );
}
