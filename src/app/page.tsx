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

export const metadata: Metadata = {
  title: "MT WEBSITE | Thiết kế Website chuyên nghiệp",
  description:
    "Thiết kế website doanh nghiệp, website dịch vụ, landing page và website theo yêu cầu. Chi phí từ 1 triệu, responsive, báo giá rõ ràng và hỗ trợ sau bàn giao."
};

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
