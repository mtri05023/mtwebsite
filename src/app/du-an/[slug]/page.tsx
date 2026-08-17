import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { JsonLd } from "@/components/seo/JsonLd";
import { ProjectImageFrame } from "@/components/ui/ProjectImageFrame";
import { ProjectPreview } from "@/components/ui/ProjectPreview";
import { contact, portfolioProjects, siteConfig } from "@/data/site";

type ProjectDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: ProjectDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = portfolioProjects.find((item) => item.slug === slug);

  if (!project) {
    return {
      title: "Dự án"
    };
  }

  return {
    title: project.name,
    description: project.description,
    alternates: {
      canonical: `/du-an/${project.slug}`
    },
    openGraph: {
      title: `${project.name} | MT WEBSITE`,
      description: project.description,
      url: `${siteConfig.siteUrl}/du-an/${project.slug}`
    }
  };
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = portfolioProjects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  const techs = project.technologies?.length ? project.technologies : project.technology ? project.technology.split(" / ") : [];

  return (
    <>
      <JsonLd
        id="project-creative-work-schema"
        data={{
          "@context": "https://schema.org",
          "@type": "CreativeWork",
          name: project.name,
          url: `${siteConfig.siteUrl}/du-an/${project.slug}`,
          description: project.description,
          creator: {
            "@type": "Person",
            name: siteConfig.owner,
            jobTitle: siteConfig.role
          }
        }}
      />
      <section className="bg-navy-50 py-16 md:py-24">
        <div className="container-page grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-accent-600">Case study</p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className={`rounded-full px-3 py-1 text-xs font-bold ${project.isDemo ? "bg-white text-slate-700" : "bg-accent-500 text-white"}`}>
                {project.status ?? (project.isDemo ? "Dự án cá nhân" : "Đã triển khai")}
              </span>
              <span className="rounded-full bg-white px-3 py-1 text-xs font-bold text-navy-900">{project.type ?? project.category}</span>
            </div>
            <h1 className="mt-5 text-4xl font-black leading-tight text-navy-900 md:text-6xl">{project.name}</h1>
            <p className="mt-6 text-lg leading-8 text-slate-600">{project.description}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/lien-he" variant="primary">
                Tôi muốn website tương tự
              </Button>
              {project.website ? (
                <Link href={project.website} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center rounded-md border border-slate-200 bg-white px-5 text-sm font-bold text-navy-900 hover:border-accent-500 hover:text-accent-600">
                  Truy cập website
                </Link>
              ) : null}
            </div>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-3 shadow-soft">
            {project.images?.[0] ? (
              <ProjectImageFrame src={project.images[0]} alt={`Ảnh giao diện ${project.name}`} priority />
            ) : (
              <ProjectPreview preview={project.preview} accent={project.accent} />
            )}
          </div>
        </div>
      </section>

      <section className="section-spacing">
        <div className="container-page grid gap-8 lg:grid-cols-[0.78fr_1.22fr]">
          <aside className="h-fit rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-navy-900">Tổng quan dự án</h2>
            <dl className="mt-5 grid gap-4 text-sm">
              <ProjectMeta label="Tên dự án" value={project.name} />
              <ProjectMeta label="Loại" value={project.type ?? project.category} />
              <ProjectMeta label="Trạng thái" value={project.status ?? (project.isDemo ? "Dự án cá nhân" : "Đã triển khai")} />
              <ProjectMeta label="Ngành" value={project.industry} />
              <ProjectMeta label="Website" value={project.website ?? "Dự án cá nhân/demo"} />
            </dl>
            {techs.length ? (
              <div className="mt-6">
                <h3 className="text-sm font-bold text-slate-500">Công nghệ</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {techs.map((tech) => (
                    <span key={tech} className="rounded-full border border-slate-200 px-2.5 py-1 text-xs font-bold text-slate-600">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ) : null}
          </aside>

          <div className="grid gap-8">
            {project.slug === "website-sua-dien-lanh-tai-nha" ? <RepairServiceCaseStudy /> : null}
            {project.slug === "cinemax" ? <CinemaxCaseStudy /> : null}
            {project.slug === "bookstore" ? <BookstoreCaseStudy /> : null}
            {project.slug !== "website-sua-dien-lanh-tai-nha" && project.slug !== "cinemax" && project.slug !== "bookstore" ? <DefaultCaseStudy projectName={project.name} features={project.scope} /> : null}

            <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-navy-900">Hình ảnh</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">Ảnh giao diện được lấy từ bộ reference bạn cung cấp trong thư mục Downloads.</p>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {project.images?.length ? (
                  project.images.map((image) => (
                    <Link key={image} href={image} target="_blank" rel="noopener noreferrer" className="block rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2">
                      <ProjectImageFrame src={image} alt={`Ảnh giao diện ${project.name}`} gallery />
                    </Link>
                  ))
                ) : (
                  <>
                    <ProjectPreview preview={project.preview} accent={project.accent} compact />
                    <ProjectPreview preview={project.preview} accent={project.accent} compact />
                  </>
                )}
              </div>
            </article>

            {project.slug === "website-sua-dien-lanh-tai-nha" ? <RepairServiceCta /> : null}
          </div>
        </div>
      </section>
    </>
  );
}

function ProjectMeta({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="font-bold text-slate-500">{label}</dt>
      <dd className="mt-1 break-words text-navy-900">{value}</dd>
    </div>
  );
}

function RepairServiceCaseStudy() {
  return (
    <>
      <CaseArticle title="Tổng quan" items={["Tên: Website sửa điện lạnh tại nhà", "Loại: Website dịch vụ", "Status: Đã triển khai", "Technology: HTML / CSS / JavaScript"]} />
      <CaseArticle title="Mục tiêu" items={["Giới thiệu dịch vụ", "Nhận cuộc gọi", "Nhận liên hệ Zalo", "Hỗ trợ chạy Google Ads", "Phát triển SEO"]} />
      <CaseArticle title="Giải pháp" items={["Landing page theo dịch vụ", "Responsive", "CTA gọi/Zalo", "SEO nền tảng", "Sitemap", "Search Console", "Tracking hành động liên hệ"]} />
    </>
  );
}

function RepairServiceCta() {
  return (
    <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-2xl font-bold text-navy-900">Bạn cần website tương tự?</h2>
      <p className="mt-3 text-sm leading-6 text-slate-600">MT WEBSITE có thể tư vấn cấu trúc landing page, CTA liên hệ và hướng triển khai phù hợp với dịch vụ của bạn.</p>
      <div className="mt-5 flex flex-wrap gap-3">
        <Button href="/lien-he">Nhận tư vấn</Button>
        <Link href={`https://zalo.me/${contact.zalo}`} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center rounded-md border border-slate-200 bg-white px-5 text-sm font-bold text-navy-900 hover:border-accent-500 hover:text-accent-600">
          Chat Zalo
        </Link>
      </div>
    </article>
  );
}

function CinemaxCaseStudy() {
  return (
    <>
      <CaseArticle title="Tổng quan" items={["Dự án quản lý và đặt vé rạp chiếu phim.", "Bao gồm giao diện người dùng và khu vực quản trị."]} />
      <CaseArticle title="Chức năng người dùng" items={["Trang chủ", "Danh sách phim", "Lịch chiếu", "Rạp chiếu", "Đặt vé"]} />
      <CaseArticle title="Trang quản trị" items={["Dashboard", "Quản lý phim", "Quản lý thể loại", "Quản lý rạp", "Quản lý phòng chiếu", "Quản lý lịch chiếu", "Quản lý đơn đặt vé"]} />
    </>
  );
}

function BookstoreCaseStudy() {
  return (
    <>
      <CaseArticle title="Tổng quan" items={["Website bán sách có chức năng xem sản phẩm, giỏ hàng, đặt hàng và quản lý sản phẩm."]} />
      <CaseArticle title="Chức năng" items={["Danh sách sách", "Chi tiết", "Tìm kiếm", "Giỏ hàng", "Đặt hàng", "Quản lý sản phẩm"]} />
    </>
  );
}

function DefaultCaseStudy({ projectName, features }: { projectName: string; features: string[] }) {
  return (
    <>
      <CaseArticle title="Tổng quan" items={[`${projectName} được xây dựng để trình bày thông tin rõ ràng, dễ thao tác trên điện thoại và hỗ trợ khách hàng liên hệ nhanh.`]} />
      <CaseArticle title="Các hạng mục" items={features} />
    </>
  );
}

function CaseArticle({ title, items }: { title: string; items: string[] }) {
  return (
    <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-2xl font-bold text-navy-900">{title}</h2>
      <ul className="mt-5 grid gap-3 text-sm text-slate-700 sm:grid-cols-2">
        {items.map((item) => (
          <li key={item} className="flex gap-2">
            <span className="text-accent-600" aria-hidden="true">
              ✓
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
