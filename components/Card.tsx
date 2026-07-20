import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Card({
  children,
  className,
  href,
}: {
  children: ReactNode;
  className?: string;
  href?: string;
}) {
  const classes = cn(
    "group relative rounded-2xl border border-line bg-ivory p-8 transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-lift",
    className
  );

  if (href) {
    return (
      <Link href={href} className={cn(classes, "focus-ring block")}>
        {children}
      </Link>
    );
  }

  return <div className={classes}>{children}</div>;
}
