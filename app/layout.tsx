import type { Metadata, Viewport } from "next";
import { Toaster } from "sonner";
import { cormorant, inter, parisienne } from "@/lib/fonts";
import { siteConfig } from "@/lib/data";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { resolveLogoImage } from "@/lib/media";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Event Styling & Decor in Surrey, BC`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "event styling Surrey BC",
    "wedding decor Surrey",
    "backdrop rentals Vancouver",
    "event decor company",
    "The Dream Decor",
  ],
  authors: [{ name: siteConfig.name }],
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name}, Event Styling & Decor in Surrey, BC`,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name}, Event Styling & Decor in Surrey, BC`,
    description: siteConfig.description,
  },
  alternates: {
    canonical: "/",
  },
};

export const viewport: Viewport = {
  themeColor: "#f6f2ec",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const logoSrc = resolveLogoImage();

  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${parisienne.variable} ${inter.variable} antialiased`}
    >
      <body className="flex min-h-screen flex-col bg-ivory font-sans text-charcoal">
        <Nav logoSrc={logoSrc} />
        <main className="flex-1">{children}</main>
        <Footer logoSrc={logoSrc} />
        <Toaster
          position="bottom-center"
          toastOptions={{
            style: {
              background: "#2b2a28",
              color: "#f6f2ec",
              border: "1px solid #55524a",
              fontFamily: "var(--font-sans)",
            },
          }}
        />
      </body>
    </html>
  );
}
