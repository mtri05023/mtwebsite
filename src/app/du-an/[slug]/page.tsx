import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { JsonLd } from "@/components/seo/JsonLd";
import { ProjectImageFrame } from "@/components/ui/ProjectImageFrame";
import { ProjectPreview } from "@/components/ui/ProjectPreview";
import type { Project, ProjectGalleryImage, ProjectSolution } from "@/data/site";
import { portfolioProjects, siteConfig } from "@/data/site";
import { breadcrumbSchema } from "@/lib/seo";

type ProjectDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return portfolioProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = portfolioProjects.find((item) => item.slug === slug);

  if (!project) {
    return {
      title: "Dự án"
    };
  }

  const description = project.seoDescription ?? project.description;

  return {
    title: project.name,
    description,
    alternates: {
      canonical: `${siteConfig.siteUrl}/du-an/${project.slug}`
    },
    openGraph: {
      title: `${project.name} | MT WEBSITE`,
      description,
      url: `${siteConfig.siteUrl}/du-an/${project.slug}`,
      type: "article"
    },
    twitter: {
      card: "summary",
      title: `${project.name} | MT WEBSITE`,
      description
    }
  };
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = portfolioProjects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  const techs = getProjectTechs(project);
  const relatedServiceHref = getRelatedServiceHref(project);
  const gallery = getProjectGallery(project);
  const solutions = getProjectSolutions(project);

  return (
    <>
      <JsonLd
        id="project-creative-work-schema"
        data={{
          "@context": "https://schema.org",
          "@type": "CreativeWork",
          name: project.name,
          url: `${siteConfig.siteUrl}/du-an/${project.slug}`,
          description: project.seoDescription ?? project.description,
          creator: {
            "@type": "Person",
            name: siteConfig.owner,
            jobTitle: siteConfig.role
          }
        }}
      />
      <JsonLd
        id="project-breadcrumb-schema"
        data={breadcrumbSchema([
          { name: "Trang chủ", path: "/" },
          { name: "Dự án", path: "/du-an" },
          { name: project.name, path: `/du-an/${project.slug}` }
        ])}
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
            {project.subtitle ? <p className="mt-3 text-xl font-bold text-accent-600">{project.subtitle}</p> : null}
            <p className="mt-6 text-lg leading-8 text-slate-600">{project.description}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/lien-he" variant="primary">
                Tôi muốn website tương tự
              </Button>
              <Button href={relatedServiceHref} variant="secondary">
                Xem dịch vụ phù hợp
              </Button>
            </div>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-3 shadow-soft">
            {project.images?.[0] ? (
              <ProjectImageFrame src={project.images[0]} alt={`Ảnh cover thực tế của ${project.name}`} priority />
            ) : (
              <ProjectPreview preview={project.preview} accent={project.accent} />
            )}
          </div>
        </div>
      </section>

      <section className="section-spacing">
        <div className="container-page">
          <div className="grid gap-8 lg:grid-cols-[0.36fr_0.64fr]">
            <aside className="h-fit rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-bold text-navy-900">Tổng quan dự án</h2>
              <dl className="mt-5 grid gap-4 text-sm">
                <ProjectMeta label="Tên dự án" value={project.name} />
                <ProjectMeta label="Loại" value={project.type ?? project.category} />
                <ProjectMeta label="Trạng thái" value={project.status ?? (project.isDemo ? "Dự án cá nhân/demo" : "Đã triển khai")} />
                <ProjectMeta label="Ngành" value={project.industry} />
                <ProjectMeta label="Website" value={project.website ?? "Dự án cá nhân/demo"} />
              </dl>
            </aside>

            <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm md:p-8">
              <p className="text-sm font-bold uppercase tracking-wide text-accent-600">Tổng quan dự án</p>
              <h2 className="mt-3 text-3xl font-black text-navy-900">Điểm nổi bật</h2>
              <p className="mt-4 text-base leading-7 text-slate-600">
                Các hạng mục bên dưới tập trung vào giá trị sử dụng và phạm vi chức năng chính của project, không trình bày theo kiểu tài liệu kỹ thuật.
              </p>
              <ul className="mt-6 grid gap-3 text-sm text-slate-700 sm:grid-cols-2">
                {(project.features ?? project.scope).map((item) => (
                  <li key={item} className="flex gap-3 rounded-md bg-slate-50 p-3">
                    <span className="mt-0.5 text-accent-600" aria-hidden="true">
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>

          {gallery.length ? <ProjectGallerySection gallery={gallery} projectName={project.name} /> : null}
          <SolutionsSection solutions={solutions} />
          {techs.length ? <TechStackSection techs={techs} /> : null}
          <FinalProjectCta />
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

function ProjectGallerySection({ gallery, projectName }: { gallery: ProjectGalleryImage[]; projectName: string }) {
  return (
    <section className="mt-14">
      <div className="max-w-3xl">
        <p className="text-sm font-bold uppercase tracking-wide text-accent-600">Giao diện thực tế</p>
        <h2 className="mt-3 text-3xl font-black text-navy-900">Giao diện thực tế</h2>
        <p className="mt-4 text-base leading-7 text-slate-600">
          Khám phá các màn hình nổi bật của hệ thống, từ trải nghiệm người dùng đến khu vực quản trị.
        </p>
      </div>
      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        {gallery.map((image, index) => (
          <article key={`${image.src}-${index}`} className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
            <Link href={image.src} target="_blank" rel="noopener noreferrer" className="block focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2">
              <ProjectImageFrame src={image.src} alt={image.alt || `Ảnh giao diện ${projectName}`} gallery contain />
            </Link>
            <div className="p-5">
              <h3 className="text-lg font-black text-navy-900">{image.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{image.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function SolutionsSection({ solutions }: { solutions: ProjectSolution[] }) {
  return (
    <section className="mt-14">
      <div className="max-w-3xl">
        <p className="text-sm font-bold uppercase tracking-wide text-accent-600">Giải pháp</p>
        <h2 className="mt-3 text-3xl font-black text-navy-900">Giải pháp đã triển khai</h2>
      </div>
      <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {solutions.map((solution, index) => (
          <article key={solution.title} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm font-black text-accent-600">{String(index + 1).padStart(2, "0")}</p>
            <h3 className="mt-4 text-lg font-black text-navy-900">{solution.title}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">{solution.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function TechStackSection({ techs }: { techs: string[] }) {
  return (
    <section className="mt-14 rounded-lg border border-slate-200 bg-white p-6 shadow-sm md:p-8">
      <p className="text-sm font-bold uppercase tracking-wide text-accent-600">Công nghệ</p>
      <h2 className="mt-3 text-3xl font-black text-navy-900">Tech stack</h2>
      <div className="mt-6 flex flex-wrap gap-2">
        {techs.map((tech) => (
          <span key={tech} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm font-bold text-slate-700">
            {tech}
          </span>
        ))}
      </div>
    </section>
  );
}

function FinalProjectCta() {
  return (
    <section className="mt-14 rounded-lg bg-navy-900 p-6 text-white shadow-soft md:p-8">
      <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
        <div>
          <h2 className="text-3xl font-black">Bạn muốn một website tương tự?</h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-200">
            MTWebsite có thể xây dựng website theo nhu cầu thực tế của bạn, từ website giới thiệu, bán hàng đến hệ thống quản lý có trang quản trị riêng.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row md:flex-col lg:flex-row">
          <Button href="/lien-he" variant="primary">
            Nhận tư vấn miễn phí
          </Button>
          <Button href="/bang-gia" variant="secondary">
            Xem bảng giá
          </Button>
        </div>
      </div>
    </section>
  );
}

function getProjectTechs(project: Project) {
  return project.technologies?.length ? project.technologies : project.technology ? project.technology.split(" / ") : [];
}

function getProjectGallery(project: Project): ProjectGalleryImage[] {
  if (project.gallery?.length) return project.gallery;

  return (project.images ?? []).map((image) => ({
    src: image,
    alt: `Ảnh giao diện ${project.name}`,
    title: project.name,
    description: "Ảnh giao diện thực tế của project được dùng để khách hàng xem nhanh cách website hiển thị."
  }));
}

function getProjectSolutions(project: Project): ProjectSolution[] {
  if (project.solutions?.length) return project.solutions;

  return [
    {
      title: "Giao diện khách hàng",
      description: "Thông tin chính được trình bày rõ ràng để người xem nhanh chóng hiểu dịch vụ hoặc nội dung cần tìm."
    },
    {
      title: "CTA liên hệ",
      description: "Các hành động liên hệ như gọi, Zalo hoặc form được đặt ở vị trí dễ thao tác."
    },
    {
      title: "Nội dung có cấu trúc",
      description: "Trang được tổ chức theo nhóm thông tin để khách hàng dễ đọc và dễ ra quyết định."
    },
    {
      title: "Responsive",
      description: "Bố cục được tối ưu để sử dụng tốt trên desktop, tablet và điện thoại."
    }
  ];
}

function getRelatedServiceHref(project: Project) {
  if (project.category.includes("bán hàng")) return "/dich-vu/website-ban-hang";
  if (project.category.includes("Landing")) return "/dich-vu/landing-page";
  if (project.category.includes("dịch vụ")) return "/dich-vu/website-dich-vu";
  return "/dich-vu";
}
