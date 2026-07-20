import { Monogram } from "@/components/Logo";
import { Button } from "@/components/Button";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-6 py-32 text-center">
      <Monogram className="mb-8 h-14 text-charcoal-faint" />
      <p className="text-label mb-4 text-gold-dark">404</p>
      <h1 className="text-balance text-4xl font-medium sm:text-5xl">This page hasn&apos;t been styled yet</h1>
      <p className="mt-5 max-w-md text-balance text-charcoal-soft">
        The page you&apos;re looking for doesn&apos;t exist. Let&apos;s get you back to something beautiful.
      </p>
      <div className="mt-9">
        <Button href="/" withArrow>
          Back to Home
        </Button>
      </div>
    </div>
  );
}
