import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ProjectImageFrame } from "@/components/ui/ProjectImageFrame";
import { ProjectPreview } from "@/components/ui/ProjectPreview";
import { ProjectFilterGrid } from "@/components/projects/ProjectFilterGrid";
import { portfolioProjects, siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Dự án website đã thực hiện",
  description: "Portfolio website freelance MT WEBSITE, bao gồm dự án thực tế và các dự án cá nhân/demo được gắn nhãn rõ ràng.",
  alternates: {
    canonical: `${siteConfig.siteUrl}/du-an`
  },
  openGraph: {
    title: "Dự án website đã thực hiện | MT WEBSITE",
    description: "Website sửa điện lạnh tại nhà, Cinemax, Bookstore và các mẫu demo có nhãn rõ ràng.",
    url: `${siteConfig.siteUrl}/du-an`
  }
};

export default function ProjectsPage() {
  const firstProject = portfolioProjects[0];

  return (
    <>
      <section className="bg-navy-50 py-16 md:py-24">
        <div className="container-page grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-accent-600">DỰ ÁN</p>
            <h1 className="mt-4 text-4xl font-black leading-tight text-navy-900 md:text-6xl">Một số website và hệ thống đã thực hiện</h1>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Từ website dịch vụ đến web app quản lý, mỗi dự án được xây dựng theo nhu cầu và mục tiêu sử dụng khác nhau.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href={`/du-an/${firstProject.slug}`}>
                Xem case study
              </Button>
              {firstProject.website ? (
                <Link href={firstProject.website} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center rounded-md border border-slate-200 bg-white px-5 text-sm font-bold text-navy-900 hover:border-accent-500 hover:text-accent-600">
                  Truy cập website
                </Link>
              ) : null}
            </div>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-3 shadow-soft">
            {firstProject.images?.[0] ? (
              <ProjectImageFrame src={firstProject.images[0]} alt={`Ảnh giao diện ${firstProject.name}`} priority />
            ) : (
              <ProjectPreview preview={firstProject.preview} accent={firstProject.accent} />
            )}
          </div>
        </div>
      </section>

      <section className="section-spacing">
        <div className="container-page">
          <ProjectFilterGrid projects={portfolioProjects} />
        </div>
      </section>
    </>
  );
}
