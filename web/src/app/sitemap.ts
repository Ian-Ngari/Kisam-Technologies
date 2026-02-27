import type { MetadataRoute } from "next";
import { counties } from "@/lib/counties";
import { services } from "@/lib/services";

const baseUrl = "https://kisamtechnologies.co.ke";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    "",
    "/about",
    "/contact",
    "/services",
    "/service-areas",
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
  }));

  const servicePages: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(),
  }));

  const countyPages: MetadataRoute.Sitemap = counties.map((county) => ({
    url: `${baseUrl}/service-areas/${county.slug}`,
    lastModified: new Date(),
  }));

  return [...staticPages, ...servicePages, ...countyPages];
}
