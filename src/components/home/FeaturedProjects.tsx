import Link from "next/link";
import { portfolioProjects } from "@/data/site";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ShowcaseCarousel } from "@/components/ui/ShowcaseCarousel";

export function FeaturedProjects() {
  const featuredProjects = portfolioProjects.filter((project) => project.featured);

  return (
    <section className="section-spacing bg-navy-50" id="du-an">
      <div className="container-page">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <SectionTitle title="Dự án nổi bật" description="Một số website và hệ thống MT WEBSITE đã trực tiếp xây dựng." />
          <Link href="/du-an" className="text-sm font-semibold text-accent-600 hover:text-accent-500">
            Xem tất cả dự án
          </Link>
        </div>
        <ShowcaseCarousel kind="projects" items={featuredProjects} />
      </div>
    </section>
  );
}
