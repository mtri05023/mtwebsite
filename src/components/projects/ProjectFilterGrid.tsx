"use client";

import { useMemo, useState } from "react";
import type { Project } from "@/data/site";
import { ProjectCard } from "@/components/ui/ProjectCard";

const filters = ["Tất cả", "Website thực tế", "Website dịch vụ", "Website bán hàng", "Web App", "Dự án cá nhân"];

export function ProjectFilterGrid({ projects }: { projects: Project[] }) {
  const [activeFilter, setActiveFilter] = useState(filters[0]);

  const filteredProjects = useMemo(() => {
    if (activeFilter === "Tất cả") return projects;
    if (activeFilter === "Dự án cá nhân") return projects.filter((project) => project.isDemo);
    if (activeFilter === "Website thực tế") return projects.filter((project) => !project.isDemo);
    return projects.filter((project) => project.category === activeFilter || project.type === activeFilter);
  }, [activeFilter, projects]);

  return (
    <div>
      <div className="project-filter-tabs flex gap-2 overflow-x-auto pb-2" role="tablist" aria-label="Lọc dự án">
        {filters.map((filter) => (
          <button
            type="button"
            key={filter}
            role="tab"
            aria-selected={activeFilter === filter}
            className={`shrink-0 rounded-full border px-4 py-2 text-sm font-bold transition ${
              activeFilter === filter ? "border-accent-500 bg-accent-500 text-white" : "border-slate-200 bg-white text-navy-900 hover:border-accent-500 hover:text-accent-600"
            }`}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>
      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={project.slug} project={project} featured={index === 0 && activeFilter === "Tất cả"} />
        ))}
      </div>
    </div>
  );
}
