import type { Metadata } from "next";
import { siteConfig } from "@/data/site";

export function pageMetadata(title: string, description: string, path: string): Metadata {
  const url = `${siteConfig.siteUrl}${path}`;

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} | MT WEBSITE`,
      description,
      url,
      siteName: siteConfig.brand,
      locale: "vi_VN",
      type: "website"
    },
    twitter: {
      card: "summary",
      title: `${title} | MT WEBSITE`,
      description
    }
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.siteUrl}${item.path}`
    }))
  };
}
