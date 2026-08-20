"use client";

import Link from "next/link";
import { useCallback, useMemo, useRef, useState } from "react";
import type { Project, WebsiteStyleSample } from "@/data/site";
import { ProjectImageFrame } from "@/components/ui/ProjectImageFrame";
import { ProjectPreview } from "@/components/ui/ProjectPreview";

type ShowcaseCarouselProps =
  | {
      kind: "projects";
      items: Project[];
    }
  | {
      kind: "styles";
      items: WebsiteStyleSample[];
    };

export function ShowcaseCarousel(props: ShowcaseCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const viewportRef = useRef<HTMLDivElement>(null);
  const items = props.items;
  const maxIndex = Math.max(items.length - 1, 0);

  const prefersReducedMotion = useMemo(() => {
    if (typeof window === "undefined") return true;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  const goTo = useCallback(
    (index: number) => {
      const nextIndex = index < 0 ? maxIndex : index > maxIndex ? 0 : index;
      setActiveIndex(nextIndex);
      viewportRef.current?.children[nextIndex]?.scrollIntoView({
        behavior: prefersReducedMotion ? "auto" : "smooth",
        inline: "start",
        block: "nearest"
      });
    },
    [maxIndex, prefersReducedMotion]
  );

  return (
    <div className="mt-10">
      <div ref={viewportRef} className="carousel-track">
        {props.kind === "projects"
          ? props.items.map((item, index) => (
              <div className="carousel-slide" key={item.slug}>
                <ProjectCarouselCard project={item} featured={index === 0} />
              </div>
            ))
          : props.items.map((item) => (
              <div className="carousel-slide" key={item.id ?? item.title}>
                <StyleCarouselCard sample={item} />
              </div>
            ))}
      </div>
      <div className="mt-6 flex items-center justify-between gap-4">
        <div className="flex gap-2">
          <button type="button" className="carousel-button" aria-label="Trước" onClick={() => goTo(activeIndex - 1)}>
            ←
          </button>
          <button type="button" className="carousel-button" aria-label="Sau" onClick={() => goTo(activeIndex + 1)}>
            →
          </button>
        </div>
        <div className="flex gap-2" aria-label="Chọn slide">
          {items.map((item, index) => (
            <button
              type="button"
              key={props.kind === "projects" ? `${(item as Project).slug}-dot` : `${(item as WebsiteStyleSample).title}-dot`}
              className={`carousel-dot ${index === activeIndex ? "is-active" : ""}`}
              aria-label={`Slide ${index + 1}`}
              onClick={() => goTo(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function ProjectCarouselCard({ project, featured }: { project: Project; featured: boolean }) {
  const techs = project.technologies?.length ? project.technologies : project.technology ? project.technology.split(" / ") : [];
  const statusLabel = project.isDemo ? "Dự án cá nhân" : project.status ?? "Đã triển khai";

  return (
    <article className={`showcase-card flex h-full flex-col ${featured ? "showcase-card-featured" : ""}`}>
      <ProjectCarouselVisual project={project} featured={featured} />
      <div className="flex flex-1 flex-col p-5">
        <div className="flex flex-wrap items-center gap-2">
          <span className={`rounded-full px-3 py-1 text-xs font-bold ${project.isDemo ? "bg-slate-100 text-slate-700" : "bg-accent-500 text-white"}`}>
            {statusLabel}
          </span>
          <span className="rounded-full bg-navy-50 px-3 py-1 text-xs font-bold text-navy-900">{project.category}</span>
        </div>
        <h3 className="mt-4 text-xl font-black text-navy-900">{project.name}</h3>
        <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-600 md:line-clamp-2">{project.cardDescription ?? project.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {techs.map((tech) => (
            <span key={tech} className="rounded-full border border-slate-200 px-2.5 py-1 text-xs font-bold text-slate-600">
              {tech}
            </span>
          ))}
        </div>
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

function ProjectCarouselVisual({ project, featured }: { project: Project; featured: boolean }) {
  const image = project.images?.[0];

  if (!image) {
    return <ProjectPreview preview={project.preview} accent={project.accent} compact={!featured} />;
  }

  return (
    <ProjectImageFrame src={image} alt={`Ảnh giao diện ${project.name}`} compact={!featured} />
  );
}

function StyleCarouselCard({ sample }: { sample: WebsiteStyleSample }) {
  return (
    <article className="showcase-card template-showcase-card">
      {sample.image ? (
        <ProjectImageFrame src={sample.image} alt={`Ảnh mẫu giao diện ${sample.title}`} compact />
      ) : null}
      <div className="p-5">
        <div className="flex flex-wrap items-center gap-2">
          <p className="text-xs font-bold uppercase tracking-wide text-accent-600">{sample.category}</p>
          {sample.badge ? <span className="rounded-full bg-navy-50 px-2.5 py-1 text-xs font-bold text-navy-900">{sample.badge}</span> : null}
        </div>
        <h3 className="mt-2 text-xl font-black text-navy-900">{sample.title}</h3>
        <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-600">{sample.description}</p>
        <Link href={sample.href} className="mt-5 inline-flex min-h-10 items-center justify-center rounded-md bg-navy-900 px-4 text-sm font-bold text-white hover:bg-navy-700">
          {sample.ctaLabel ?? "Xem mẫu"}
        </Link>
      </div>
    </article>
  );
}
