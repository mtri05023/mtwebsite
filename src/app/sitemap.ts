import type { MetadataRoute } from "next";
import { blogPosts, portfolioProjects, siteConfig } from "@/data/site";
import { serviceDetails } from "@/data/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/dich-vu", "/du-an", "/bang-gia", "/gioi-thieu", "/lien-he", "/blog"];
  const now = new Date();

  return [
    ...staticRoutes.map((route) => ({
      url: `${siteConfig.siteUrl}${route}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: route === "" ? 1 : 0.8
    })),
    ...portfolioProjects.map((project) => ({
      url: `${siteConfig.siteUrl}/du-an/${project.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7
    })),
    ...serviceDetails.map((service) => ({
      url: `${siteConfig.siteUrl}/dich-vu/${service.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.75
    })),
    ...blogPosts.map((post) => ({
      url: `${siteConfig.siteUrl}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "monthly" as const,
      priority: 0.6
    }))
  ];
}
