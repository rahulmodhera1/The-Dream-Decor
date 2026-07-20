import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/data";

const routes = ["", "/services", "/portfolio", "/about", "/testimonials", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
