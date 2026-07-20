import { galleryItems, siteConfig } from "@/lib/data";
import { PlaceholderMedia } from "@/components/PlaceholderMedia";
import { RevealGroup, RevealItem } from "@/components/Reveal";
import { Button } from "@/components/Button";
import { resolveImage } from "@/lib/media";

const tiles = galleryItems.slice(0, 6);

export function InstagramStrip() {
  return (
    <div>
      <RevealGroup className="grid grid-cols-3 gap-2 sm:gap-3 md:grid-cols-6">
        {tiles.map((item) => (
          <RevealItem key={item.id}>
            <a
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring group relative block aspect-square overflow-hidden rounded-lg"
              aria-label={`View more like "${item.title}" on Instagram`}
            >
              <PlaceholderMedia
                src={resolveImage(`portfolio/${item.slug}`)}
                alt={item.title}
                hue={item.hue}
                className="transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-charcoal/0 opacity-0 transition-all duration-300 group-hover:bg-charcoal/40 group-hover:opacity-100">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" stroke="#F6F2EC" strokeWidth="1.5" />
                  <circle cx="12" cy="12" r="4.5" stroke="#F6F2EC" strokeWidth="1.5" />
                  <circle cx="17.2" cy="6.8" r="1.1" fill="#F6F2EC" />
                </svg>
              </div>
            </a>
          </RevealItem>
        ))}
      </RevealGroup>

      <div className="mt-10 flex justify-center">
        <Button href={siteConfig.instagramUrl} external variant="secondary" withArrow>
          Follow {siteConfig.instagramHandle}
        </Button>
      </div>
    </div>
  );
}
