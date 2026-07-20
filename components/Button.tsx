import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

const base =
  "focus-ring group relative inline-flex items-center justify-center rounded-full font-sans text-label transition-all duration-300 ease-out active:scale-[0.97] disabled:pointer-events-none disabled:opacity-50";

const variants: Record<Variant, string> = {
  primary: "bg-charcoal text-ivory hover:bg-gold hover:text-charcoal shadow-lift",
  secondary:
    "border border-charcoal/70 text-charcoal hover:border-charcoal hover:bg-charcoal hover:text-ivory",
  ghost: "text-charcoal hover:text-gold-dark",
};

const sizes: Record<Size, { plain: string; withArrow: string; chip: string }> = {
  md: { plain: "px-6 py-3", withArrow: "py-2 pl-6 pr-2", chip: "ml-3 h-8 w-8" },
  lg: { plain: "px-8 py-4", withArrow: "py-3 pl-8 pr-3", chip: "ml-4 h-10 w-10" },
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

  const sizing = sizes[size];
  const classes = cn(base, variants[variant], withArrow ? sizing.withArrow : sizing.plain, className);
  const content = (
    <>
      <span>{children}</span>
      {withArrow && (
        <span
          aria-hidden="true"
          className={cn(
            "flex shrink-0 items-center justify-center rounded-full bg-current/10 transition-all duration-300 ease-out group-hover:translate-x-0.5 group-hover:bg-current/15",
            sizing.chip
          )}
        >
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
            <path
              d="M4 8h8M8.5 4.5 12 8l-3.5 3.5"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
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
