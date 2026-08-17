"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import {
  projectFeaturedCard,
  projectMenuItems,
  serviceBottomLinks,
  serviceFeaturedCard,
  serviceMenuGroups,
  solutionMenuGroups,
  type MenuIcon,
  type MenuItem
} from "@/data/navigation";

type MegaMenuProps = {
  menu: "services" | "solutions" | "projects";
  id: string;
  onNavigate: () => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
};

const iconPaths: Record<MenuIcon, ReactNode> = {
  building: (
    <>
      <path d="M4 20V5.5A1.5 1.5 0 0 1 5.5 4h9A1.5 1.5 0 0 1 16 5.5V20" />
      <path d="M8 8h4M8 12h4M8 16h4M3 20h18M16 10h2.5A1.5 1.5 0 0 1 20 11.5V20" />
    </>
  ),
  cursor: <path d="m5 4 13 7-5.7 1.4L15 19l-2.2.9-2.8-6.5L5 17V4Z" />,
  target: (
    <>
      <circle cx="12" cy="12" r="7" />
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
    </>
  ),
  shop: (
    <>
      <path d="M4 10h16l-1.4-5.2A1.2 1.2 0 0 0 17.4 4H6.6a1.2 1.2 0 0 0-1.2.8L4 10Z" />
      <path d="M6 10v9h12v-9M9 14h6" />
    </>
  ),
  user: (
    <>
      <circle cx="12" cy="8" r="3.5" />
      <path d="M5 20a7 7 0 0 1 14 0" />
    </>
  ),
  code: <path d="m8 8-4 4 4 4M16 8l4 4-4 4M14 4l-4 16" />,
  search: (
    <>
      <circle cx="10.5" cy="10.5" r="5.5" />
      <path d="m15 15 5 5" />
    </>
  ),
  chart: <path d="M4 19V5M4 19h16M8 16v-5M12 16V8M16 16v-8" />,
  console: <path d="m5 8 4 4-4 4M11 17h8M4 4h16v16H4z" />,
  ads: <path d="M4 15V9l9-4v14l-9-4ZM13 15h2.5a4 4 0 0 0 0-8H13M7 16l1 4" />,
  speed: (
    <>
      <path d="M4 15a8 8 0 1 1 16 0" />
      <path d="m12 15 4-5M7 15h.01M17 15h.01" />
    </>
  ),
  devices: <path d="M4 6h12v9H4zM8 19h4M10 15v4M18 10h2v9h-6v-2" />,
  edit: <path d="M4 16.5V20h3.5L18.2 9.3l-3.5-3.5L4 16.5ZM13.5 7 15 5.5a2 2 0 0 1 3 3L16.5 10" />,
  tools: <path d="m14 6 4 4M4 20l7-7M13 5l6 6-3 3-6-6 3-3ZM5 5l4 4" />,
  globe: (
    <>
      <circle cx="12" cy="12" r="8" />
      <path d="M4 12h16M12 4a12 12 0 0 1 0 16M12 4a12 12 0 0 0 0 16" />
    </>
  ),
  lock: <path d="M6 10h12v10H6zM8 10V8a4 4 0 0 1 8 0v2M12 14v3" />,
  backup: <path d="M6 17a5 5 0 1 1 1.4-9.8A6 6 0 0 1 19 10.5 3.5 3.5 0 0 1 18 17h-2M12 12v8M9 17l3 3 3-3" />,
  upgrade: <path d="M12 20V5M6 11l6-6 6 6M5 20h14" />
};

function MenuItemIcon({ name }: { name: MenuIcon }) {
  return (
    <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-white text-accent-600">
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8">
        {iconPaths[name]}
      </svg>
    </span>
  );
}

function MenuLink({ item, onNavigate, compact = false }: { item: MenuItem; onNavigate: () => void; compact?: boolean }) {
  return (
    <Link
      href={item.href}
      onClick={onNavigate}
      className={`group flex rounded-xl transition hover:bg-navy-50 focus-visible:bg-navy-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent-500 ${
        compact ? "px-3 py-2.5" : "gap-3 p-3"
      }`}
    >
      {item.icon ? <MenuItemIcon name={item.icon} /> : null}
      <span>
        <span className="block text-sm font-bold text-navy-900 group-hover:text-accent-600">{item.title}</span>
        {item.description ? <span className="mt-1 block text-xs leading-5 text-slate-500">{item.description}</span> : null}
      </span>
    </Link>
  );
}

function ServicesMenu({ onNavigate }: { onNavigate: () => void }) {
  return (
    <div className="overflow-hidden rounded-[22px] border border-slate-200 bg-white shadow-[0_24px_70px_rgba(7,29,51,0.16)]">
      <div className="grid gap-4 p-5 lg:grid-cols-[1fr_1fr_1fr_0.95fr]">
        {serviceMenuGroups.map((group) => (
          <section key={group.heading}>
            <h2 className="px-3 pb-2 text-xs font-black uppercase tracking-[0.14em] text-slate-500">{group.heading}</h2>
            <div className="grid gap-1">
              {group.items.map((item) => (
                <MenuLink key={item.title} item={item} onNavigate={onNavigate} />
              ))}
            </div>
          </section>
        ))}
        <aside className="rounded-2xl bg-[linear-gradient(145deg,#061a30,#0d3f66_58%,#0787ba)] p-5 text-white">
          <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-100">{serviceFeaturedCard.eyebrow}</p>
          <h2 className="mt-4 text-2xl font-black leading-tight">{serviceFeaturedCard.title}</h2>
          <p className="mt-3 text-sm leading-6 text-slate-100">{serviceFeaturedCard.description}</p>
          <div className="mt-5 grid gap-2">
            {serviceFeaturedCard.points.map((point) => (
              <span key={point} className="inline-flex items-center gap-2 text-sm font-semibold text-white">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-200" aria-hidden="true" />
                {point}
              </span>
            ))}
          </div>
          <Link href={serviceFeaturedCard.href} onClick={onNavigate} className="mt-6 inline-flex gap-1 text-sm font-black text-white underline-offset-4 hover:underline">
            {serviceFeaturedCard.cta} <span aria-hidden="true">→</span>
          </Link>
          {serviceFeaturedCard.price ? <p className="mt-4 text-sm font-bold text-cyan-100">{serviceFeaturedCard.price}</p> : null}
        </aside>
      </div>
      <div className="grid border-t border-slate-200 bg-slate-50 md:grid-cols-3">
        {serviceBottomLinks.map((item) => (
          <Link key={item.title} href={item.href} onClick={onNavigate} className="group border-slate-200 px-6 py-4 hover:bg-white md:border-r md:last:border-r-0">
            <span className="text-sm font-black text-navy-900 group-hover:text-accent-600">{item.title}</span>
            <span className="mt-1 block text-xs text-slate-500">{item.description}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

function SolutionsMenu({ onNavigate }: { onNavigate: () => void }) {
  return (
    <div className="grid overflow-hidden rounded-[22px] border border-slate-200 bg-white shadow-[0_24px_70px_rgba(7,29,51,0.16)] md:grid-cols-2">
      {solutionMenuGroups.map((group) => (
        <section key={group.heading} className="p-5">
          <h2 className="px-3 pb-2 text-xs font-black uppercase tracking-[0.14em] text-slate-500">{group.heading}</h2>
          <div className="grid gap-1">
            {group.items.map((item) => (
              <MenuLink key={item.title} item={item} onNavigate={onNavigate} compact />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

function ProjectsMenu({ onNavigate }: { onNavigate: () => void }) {
  return (
    <div className="grid overflow-hidden rounded-[22px] border border-slate-200 bg-white shadow-[0_24px_70px_rgba(7,29,51,0.16)] md:grid-cols-[1fr_1.1fr]">
      <section className="p-5">
        <h2 className="px-3 pb-2 text-xs font-black uppercase tracking-[0.14em] text-slate-500">Dự án</h2>
        <div className="grid gap-1">
          {projectMenuItems.map((item) => (
            <MenuLink key={item.title} item={item} onNavigate={onNavigate} compact />
          ))}
        </div>
      </section>
      <aside className="bg-navy-50 p-5">
        <p className="text-xs font-black uppercase tracking-[0.14em] text-accent-600">Dự án thực tế</p>
        <h2 className="mt-3 text-xl font-black text-navy-900">{projectFeaturedCard.title}</h2>
        <p className="mt-2 text-sm text-slate-600">{projectFeaturedCard.description}</p>
        <Link href={projectFeaturedCard.href} onClick={onNavigate} className="mt-5 inline-flex rounded-md bg-navy-900 px-4 py-3 text-sm font-bold text-white hover:bg-navy-700">
          {projectFeaturedCard.cta}
        </Link>
      </aside>
    </div>
  );
}

export function MegaMenu({ menu, id, onNavigate, onMouseEnter, onMouseLeave }: MegaMenuProps) {
  const widthClass = menu === "services" ? "w-[min(1180px,calc(100vw-32px))]" : "w-[min(720px,calc(100vw-32px))]";

  return (
    <div
      id={id}
      role="menu"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`absolute left-1/2 top-[calc(var(--header-height)-2px)] hidden -translate-x-1/2 pt-4 lg:block ${widthClass}`}
    >
      {menu === "services" ? <ServicesMenu onNavigate={onNavigate} /> : null}
      {menu === "solutions" ? <SolutionsMenu onNavigate={onNavigate} /> : null}
      {menu === "projects" ? <ProjectsMenu onNavigate={onNavigate} /> : null}
    </div>
  );
}
