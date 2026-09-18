import type { MetadataRoute } from "next";
import { serviceAreas } from "@/data/areas";
import { allServices } from "@/data/services";
import { site } from "@/data/site";

/**
 * Lists every page for search engines, at /sitemap.xml (linked from public/robots.txt).
 * Service and area pages come from their data files, so new ones are included automatically.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const page = (
    path: string,
    priority: number,
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"],
  ) => ({ url: `${site.url}${path}`, lastModified, changeFrequency, priority });

  return [
    page("/", 1, "weekly"),
    page("/services", 0.9, "monthly"),
    ...allServices.map((service) => page(`/services/${service.slug}`, 0.8, "monthly")),
    page("/areas", 0.9, "monthly"),
    ...serviceAreas.map((area) => page(`/areas/${area.slug}`, 0.7, "monthly")),
    page("/about", 0.6, "yearly"),
    page("/gallery", 0.6, "monthly"),
    page("/reviews", 0.6, "monthly"),
    page("/contact", 0.8, "yearly"),
  ];
}
