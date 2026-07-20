// All copy, imagery labels, and contact details below are placeholder content
// for initial launch. Swap in real photography, verified contact details, and
// client-approved testimonials before going live.

export const siteConfig = {
  name: "The Dream Decor",
  shortName: "Dream Decor",
  tagline: "Event styling, backdrops & decor for the moments you'll replay forever.",
  description:
    "The Dream Decor is a Surrey, BC event styling studio crafting bespoke backdrops, florals, and full decor packages for weddings, birthdays, baby showers, corporate events, and cultural celebrations.",
  url: "https://thedreamdecor.ca",
  location: "Surrey, BC",
  serviceArea: "Surrey, Metro Vancouver & the Fraser Valley",
  instagramHandle: "@the__dream_decor",
  instagramUrl: "https://www.instagram.com/the__dream_decor/",
  // Placeholder contact details — replace with verified business email & phone before launch.
  email: "hello@thedreamdecor.ca",
  phone: "+1 (604) 555-0142",
  phoneDisplay: "(604) 555-0142",
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact" },
];

export type Service = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  features: string[];
};

export const services: Service[] = [
  {
    slug: "event-styling",
    title: "Event Styling",
    summary: "Creative direction and on-site styling from first sketch to final teardown.",
    description:
      "From mood board to move-out, we design a cohesive visual story for your event — palette, texture, and flow — then bring it to life on site so every corner feels considered.",
    features: [
      "Concept development & mood boards",
      "Colour palette & theme design",
      "Tablescape & lounge styling",
      "On-site setup, styling & teardown",
      "Day-of styling coordination",
    ],
  },
  {
    slug: "backdrops",
    title: "Backdrops",
    summary: "Statement backdrops built to be photographed from every angle.",
    description:
      "Backdrops are where your event's first impression lives. We design and build custom installations — floral, draped, or illuminated — sized and styled for your exact space.",
    features: [
      "Floral & greenery walls",
      "Drape & frame installations",
      "Balloon garlands & arches",
      "Custom signage & acrylic details",
      "Photo-op & welcome backdrops",
    ],
  },
  {
    slug: "full-decor-packages",
    title: "Full Decor Packages",
    summary: "End-to-end venue transformation, handled entirely by our team.",
    description:
      "For hosts who want to hand off the full vision, our decor packages bundle styling, rentals, florals, and lighting into one seamless, fully-managed experience.",
    features: [
      "Venue walkthrough & design plan",
      "Furniture & prop rentals",
      "Florals, linens & tableware",
      "Ambient & accent lighting",
      "Full setup, styling & breakdown",
    ],
  },
];

export type Occasion = {
  slug: string;
  title: string;
  description: string;
};

export const occasions: Occasion[] = [
  {
    slug: "weddings",
    title: "Weddings",
    description:
      "Ceremony arches, sweetheart tables, and reception styling — traditional, modern, or a blend of both.",
  },
  {
    slug: "birthdays",
    title: "Birthdays",
    description:
      "Milestone birthdays and kids' parties styled with themed backdrops, balloon installs, and dessert tables.",
  },
  {
    slug: "baby-showers",
    title: "Baby Showers",
    description:
      "Gender reveals and welcome-baby celebrations in soft palettes with custom floral and balloon accents.",
  },
  {
    slug: "corporate",
    title: "Corporate Events",
    description:
      "Brand launches, galas, and holiday parties with polished step-and-repeats and on-brand styling.",
  },
  {
    slug: "cultural",
    title: "Cultural Celebrations",
    description:
      "Mehndi, sangeet, Diwali, Eid, quinceañeras and more — styled with cultural authenticity and care.",
  },
];

export type GalleryItem = {
  id: string;
  title: string;
  category: "wedding" | "birthday" | "baby-shower" | "corporate" | "cultural" | "backdrop";
  tags: string;
  hue: number;
};

export const galleryCategories: { value: GalleryItem["category"] | "all"; label: string }[] = [
  { value: "all", label: "All" },
  { value: "wedding", label: "Weddings" },
  { value: "birthday", label: "Birthdays" },
  { value: "baby-shower", label: "Baby Showers" },
  { value: "corporate", label: "Corporate" },
  { value: "cultural", label: "Cultural" },
  { value: "backdrop", label: "Backdrops" },
];

// Placeholder gallery set — swap `hue` styling for real photography via next/image.
export const galleryItems: GalleryItem[] = [
  { id: "g1", title: "Blush Garden Wedding", category: "wedding", tags: "Reception · Surrey, BC", hue: 18 },
  { id: "g2", title: "Golden Hour Mandap", category: "cultural", tags: "Ceremony · Cloverdale, BC", hue: 38 },
  { id: "g3", title: "Pastel Baby Shower Arch", category: "baby-shower", tags: "Balloon Install", hue: 200 },
  { id: "g4", title: "Sequin Backdrop — Milestone 30th", category: "birthday", tags: "Backdrop", hue: 320 },
  { id: "g5", title: "Corporate Gala Stage", category: "corporate", tags: "Step & Repeat", hue: 230 },
  { id: "g6", title: "Sangeet Night Florals", category: "cultural", tags: "Stage Styling", hue: 12 },
  { id: "g7", title: "Boho Bridal Lounge", category: "wedding", tags: "Lounge Styling", hue: 28 },
  { id: "g8", title: "Gender Reveal Balloon Arch", category: "baby-shower", tags: "Backdrop", hue: 190 },
  { id: "g9", title: "Ivory & Gold Reception", category: "wedding", tags: "Tablescape", hue: 44 },
  { id: "g10", title: "Neon Welcome Sign", category: "backdrop", tags: "Custom Signage", hue: 340 },
  { id: "g11", title: "Dessert Table Styling", category: "birthday", tags: "Full Decor Package", hue: 8 },
  { id: "g12", title: "Diwali Themed Décor", category: "cultural", tags: "Full Decor Package", hue: 34 },
  { id: "g13", title: "Quinceañera Court of Honor", category: "birthday", tags: "Full Decor Package", hue: 300 },
  { id: "g14", title: "Product Launch Backdrop", category: "corporate", tags: "Backdrop", hue: 210 },
];

export type Testimonial = {
  id: string;
  name: string;
  event: string;
  quote: string;
};

// Placeholder testimonials — replace with client-approved quotes before launch.
export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Amrit K.",
    event: "Wedding, Surrey BC",
    quote:
      "The Dream Decor turned our reception into exactly what we pictured, and then some. Every single detail felt intentional, from the florals down to the table numbers.",
  },
  {
    id: "t2",
    name: "Priya S.",
    event: "Baby Shower, Cloverdale BC",
    quote:
      "They understood the vibe we wanted immediately. The balloon arch and dessert table were the most photographed corner of the whole party.",
  },
  {
    id: "t3",
    name: "Marcus D.",
    event: "Corporate Launch, Vancouver BC",
    quote:
      "Professional from the first call to the final teardown. Our brand launch backdrop looked like it belonged in a magazine.",
  },
  {
    id: "t4",
    name: "Simran & Raj",
    event: "Sangeet, Surrey BC",
    quote:
      "They wove our traditions into the styling so naturally. Guests are still talking about the stage design.",
  },
  {
    id: "t5",
    name: "Olivia T.",
    event: "30th Birthday, Langley BC",
    quote:
      "I told them 'romantic but fun' and they nailed it. The sequin backdrop alone was worth every penny.",
  },
  {
    id: "t6",
    name: "Harjit B.",
    event: "Wedding, Abbotsford BC",
    quote:
      "From the mandap to the reception lounge, everything felt cohesive. Booking The Dream Decor was the best decision we made.",
  },
];

export const highlights = [
  {
    title: "Event Styling",
    description: "Full creative direction, on site.",
    href: "/services#event-styling",
  },
  {
    title: "Backdrops",
    description: "Statement installs, built to be photographed.",
    href: "/services#backdrops",
  },
  {
    title: "Full Decor Packages",
    description: "End-to-end styling, fully managed.",
    href: "/services#full-decor-packages",
  },
  {
    title: "Every Occasion",
    description: "Weddings to corporate galas.",
    href: "/services#occasions",
  },
];
