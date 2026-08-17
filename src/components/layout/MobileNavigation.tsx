"use client";

import Link from "next/link";
import { useState } from "react";
import { mobileNavigationGroups, mobileSingleLinks } from "@/data/navigation";
import { Button } from "@/components/ui/Button";

type MobileNavigationProps = {
  open: boolean;
  onNavigate: () => void;
};

export function MobileNavigation({ open, onNavigate }: MobileNavigationProps) {
  const [activeGroup, setActiveGroup] = useState<string | null>(null);
  const homeLink = mobileSingleLinks.find((item) => item.href === "/");
  const secondaryLinks = mobileSingleLinks.filter((item) => item.href !== "/");

  const handleNavigate = () => {
    setActiveGroup(null);
    onNavigate();
  };

  if (!open) {
    return null;
  }

  return (
    <div className="fixed inset-0 top-[var(--header-height)] z-50 bg-navy-900/35 lg:hidden" onClick={handleNavigate}>
      <div
        className="ml-auto h-[calc(100vh-var(--header-height))] w-full max-w-md overflow-y-auto border-l border-slate-200 bg-white shadow-[0_24px_70px_rgba(7,29,51,0.18)]"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-slate-200 px-4 py-3">
          <p className="text-sm font-black uppercase tracking-wide text-navy-900">Menu</p>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-200 text-xl font-bold text-navy-900 hover:border-accent-500 hover:text-accent-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent-500"
            aria-label="Đóng menu"
            onClick={handleNavigate}
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <nav className="grid gap-2 p-4" aria-label="Điều hướng mobile">
          {homeLink ? (
            <Link
              href={homeLink.href}
              className="rounded-xl px-3 py-3 text-base font-bold text-slate-800 hover:bg-navy-50 hover:text-accent-600"
              onClick={handleNavigate}
            >
              {homeLink.title}
            </Link>
          ) : null}
          {mobileNavigationGroups.map((group, index) => {
            const isOpen = activeGroup === group.heading;
            const panelId = `mobile-nav-panel-${index}`;

            return (
              <section key={group.heading} className="rounded-xl border border-slate-200">
                <button
                  type="button"
                  className="flex w-full items-center justify-between px-3 py-3 text-left text-base font-bold text-navy-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-accent-500"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setActiveGroup(isOpen ? null : group.heading)}
                >
                  <span>{group.heading}</span>
                  <span className={`text-lg transition ${isOpen ? "rotate-180" : ""}`} aria-hidden="true">
                    ˅
                  </span>
                </button>
                {isOpen ? (
                  <div id={panelId} className="grid gap-1 border-t border-slate-200 bg-slate-50 p-2">
                    {group.items.map((item) => (
                      <Link
                        key={item.title}
                        href={item.href}
                        className="rounded-lg px-3 py-2.5 text-sm font-semibold text-slate-700 hover:bg-white hover:text-accent-600"
                        onClick={handleNavigate}
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </section>
            );
          })}
          {secondaryLinks.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="rounded-xl px-3 py-3 text-base font-bold text-slate-800 hover:bg-navy-50 hover:text-accent-600"
              onClick={handleNavigate}
            >
              {item.title}
            </Link>
          ))}
          <Button href="/lien-he" className="mt-2 w-full" onClick={handleNavigate}>
            Nhận tư vấn
          </Button>
        </nav>
      </div>
    </div>
  );
}
