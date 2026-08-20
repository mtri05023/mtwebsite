import Link from "next/link";
import type { Project } from "@/data/site";
import { ProjectImageFrame } from "@/components/ui/ProjectImageFrame";
import { ProjectPreview } from "@/components/ui/ProjectPreview";

export function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) {
  const techs = project.technologies?.length ? project.technologies : project.technology ? project.technology.split(" / ") : [];
  const statusLabel = project.isDemo ? "Dự án cá nhân" : project.status ?? "Đã triển khai";

  return (
    <article className={`portfolio-card flex h-full flex-col overflow-hidden border border-slate-200 bg-white transition hover:-translate-y-1 hover:shadow-soft ${featured ? "lg:col-span-2" : ""}`}>
      <ProjectVisual project={project} compact={!featured} />
      <div className="flex flex-1 flex-col p-5">
        <div className="flex flex-wrap items-center gap-2">
          <span className={`rounded-full px-3 py-1 text-xs font-bold ${project.isDemo ? "bg-slate-100 text-slate-700" : "bg-accent-500 text-white"}`}>
            {statusLabel}
          </span>
          <p className="rounded-full bg-navy-50 px-3 py-1 text-xs font-bold text-navy-900">{project.category}</p>
        </div>
        <h3 className="mt-4 text-xl font-black text-navy-900">{project.name}</h3>
        <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-600 md:line-clamp-2">{project.cardDescription ?? project.description}</p>
        {techs.length ? (
          <div className="mt-4 flex flex-wrap gap-2">
            {techs.map((tech) => (
              <span key={tech} className="rounded-full border border-slate-200 px-2.5 py-1 text-xs font-bold text-slate-600">
                {tech}
              </span>
            ))}
          </div>
        ) : null}
        <div className="mt-auto flex flex-wrap gap-3 pt-5">
          <Link href={`/du-an/${project.slug}`} className="inline-flex min-h-10 items-center justify-center rounded-md bg-navy-900 px-4 text-sm font-bold text-white hover:bg-navy-700">
            Xem dự án
          </Link>
          {project.website ? (
            <Link href={project.website} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-10 items-center justify-center rounded-md border border-slate-200 bg-white px-4 text-sm font-bold text-navy-900 hover:border-accent-500 hover:text-accent-600">
              Xem website
            </Link>
          ) : null}
        </div>
      </div>
    </article>
  );
}

function ProjectVisual({ project, compact }: { project: Project; compact: boolean }) {
  const image = project.images?.[0];

  if (!image) {
    return <ProjectPreview preview={project.preview} accent={project.accent} compact={compact} />;
  }

  return (
    <ProjectImageFrame src={image} alt={`Ảnh giao diện ${project.name}`} compact={compact} />
  );
}
