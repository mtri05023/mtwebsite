import type { Metadata } from "next";
import { AboutMe } from "@/components/home/AboutMe";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { FinalCTA } from "@/components/home/FinalCTA";
import { Hero } from "@/components/home/Hero";
import { DesignShowcase } from "@/components/home/DesignShowcase";
import { Services } from "@/components/home/Services";
import { StartingPrice } from "@/components/home/StartingPrice";
import { TrustValueStrip } from "@/components/home/TrustValueStrip";
import { WhyChooseMe } from "@/components/home/WhyChooseMe";
import { WorkProcess } from "@/components/home/WorkProcess";
import { JsonLd } from "@/components/seo/JsonLd";
import { contact, services, siteConfig } from "@/data/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(
  "Thiết kế website chuyên nghiệp",
  "Dịch vụ thiết kế website chuyên nghiệp cho doanh nghiệp, hộ kinh doanh và cá nhân. Responsive, SEO nền tảng, báo giá rõ ràng và hỗ trợ sau bàn giao.",
  "/"
);

export default function HomePage() {
  return (
    <>
      <JsonLd
        id="homepage-person-service-schema"
        data={{
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: siteConfig.brand,
          url: siteConfig.siteUrl,
          description: siteConfig.description,
          founder: {
            "@type": "Person",
            name: siteConfig.owner,
            jobTitle: siteConfig.role,
            email: contact.email,
            telephone: contact.phone
          },
          areaServed: "Vietnam",
          serviceType: services.map((service) => service.title)
        }}
      />
      <JsonLd
        id="homepage-website-schema"
        data={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: siteConfig.brand,
          url: siteConfig.siteUrl,
          inLanguage: "vi-VN",
          publisher: { "@type": "Person", name: siteConfig.owner }
        }}
      />
      <Hero />
      <TrustValueStrip />
      <Services />
      <DesignShowcase />
      <FeaturedProjects />
      <StartingPrice />
      <WhyChooseMe />
      <WorkProcess />
      <AboutMe />
      <FinalCTA />
    </>
  );
}
