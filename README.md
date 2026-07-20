# The Dream Decor

Marketing website for The Dream Decor, an event styling and decor studio based in Surrey, BC — built with Next.js 16 (App Router), TypeScript, and Tailwind CSS v4.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Stack

- **Next.js 16** (App Router, Turbopack) + TypeScript
- **Tailwind CSS v4** — theme tokens live in `app/globals.css` (`@theme`)
- **Framer Motion** — scroll reveals, page/section transitions, lightbox, mobile menu
- **Sonner** — toast notifications on the contact form
- Fonts via `next/font`: Cormorant Garamond (display), Parisienne (script), Inter (sans)

## Project Structure

- `app/` — routes (`/`, `/services`, `/portfolio`, `/about`, `/testimonials`, `/contact`) plus SEO file conventions (`sitemap.ts`, `robots.ts`, `icon.tsx`, `apple-icon.tsx`, `opengraph-image.tsx`)
- `components/` — reusable UI (`Section`, `Card`, `Button`, `Reveal`, `Nav`, `Footer`, gallery/lightbox, testimonial carousel, contact form, etc.)
- `lib/data.ts` — all site copy and content (services, occasions, gallery items, testimonials, contact/social details)
- `lib/fonts.ts`, `lib/utils.ts` — font setup and small helpers

## Before Launch — Placeholder Content to Replace

This project ships with clearly-marked placeholder content so the structure and design system are ready to go, but the following need real content before going live:

1. **Photography** — `components/PlaceholderMedia.tsx` renders brand-toned gradient placeholders (tagged "Sample") anywhere a real photo should go (hero, portfolio, about, service images). Swap these for `next/image` with real photography from [@the__dream_decor](https://www.instagram.com/the__dream_decor/).
2. **Contact details** — `lib/data.ts` (`siteConfig.email`, `siteConfig.phone`) uses placeholder values. Replace with verified business contact info.
3. **Contact form backend** — `app/contact/actions.ts` validates and "succeeds" but does not send an email yet. Wire it up to a real provider (Resend, SendGrid, Formspree, etc.) before launch.
4. **Domain** — `siteConfig.url` in `lib/data.ts` is used for canonical URLs, the sitemap, and Open Graph tags. Update it once a custom domain is connected.
5. **Testimonials & copy** — testimonial quotes and studio-story copy in `lib/data.ts` are placeholder text and should be replaced with client-approved quotes.

## Deployment

Deployed on [Vercel](https://vercel.com). Push to the connected branch (or run `vercel --prod`) to deploy.
