"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { mainNavigation } from "@/data/navigation";
import { Button } from "@/components/ui/Button";
import { MegaMenu } from "@/components/layout/MegaMenu";
import { MobileNavigation } from "@/components/layout/MobileNavigation";
import { Wordmark } from "@/components/layout/Wordmark";

type DesktopMenu = "services" | "solutions" | "projects";

function isActive(pathname: string, href: string, matches: string[]) {
  if (href === "/" && pathname === "/") {
    return true;
  }

  return matches.some((match) => pathname === match || pathname.startsWith(`${match}/`));
}

export function Header() {
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [desktopMenu, setDesktopMenu] = useState<DesktopMenu | null>(null);

  const clearCloseTimer = useCallback(() => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  }, []);

  const openDesktopMenu = (menu: DesktopMenu) => {
    clearCloseTimer();
    setDesktopMenu(menu);
  };

  const scheduleCloseDesktopMenu = () => {
    clearCloseTimer();
    closeTimer.current = setTimeout(() => setDesktopMenu(null), 180);
  };

  const closeAllMenus = useCallback(() => {
    clearCloseTimer();
    setDesktopMenu(null);
    setMobileOpen(false);
  }, [clearCloseTimer]);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        closeAllMenus();
      }
    }

    function handlePointerDown(event: PointerEvent) {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        closeAllMenus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("pointerdown", handlePointerDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("pointerdown", handlePointerDown);
      clearCloseTimer();
    };
  }, [closeAllMenus, clearCloseTimer]);

  return (
    <header ref={headerRef} className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="container-page flex h-[var(--header-height)] items-center justify-between">
        <div onClick={closeAllMenus}>
          <Wordmark className="text-xl" />
        </div>
        <nav className="hidden items-center gap-2 lg:flex" aria-label="Điều hướng chính">
          {mainNavigation.map((item) => {
            const active = isActive(pathname, item.href, item.activeMatch);
            const menuId = item.menu ? `desktop-${item.menu}-menu` : undefined;

            if (item.menu) {
              return (
                <button
                  key={item.label}
                  type="button"
                  className={`rounded-full px-3.5 py-2 text-sm font-bold transition hover:bg-navy-50 hover:text-accent-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent-500 ${
                    active || desktopMenu === item.menu ? "bg-navy-50 text-accent-600" : "text-slate-700"
                  }`}
                  aria-expanded={desktopMenu === item.menu}
                  aria-controls={menuId}
                  aria-haspopup="menu"
                  onMouseEnter={() => openDesktopMenu(item.menu as DesktopMenu)}
                  onMouseLeave={scheduleCloseDesktopMenu}
                  onFocus={() => openDesktopMenu(item.menu as DesktopMenu)}
                  onClick={() => setDesktopMenu((current) => (current === item.menu ? null : (item.menu as DesktopMenu)))}
                >
                  {item.label} <span aria-hidden="true">↓</span>
                </button>
              );
            }

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-3.5 py-2 text-sm font-bold transition hover:bg-navy-50 hover:text-accent-600 ${
                  active ? "bg-navy-50 text-accent-600" : "text-slate-700"
                }`}
                onClick={closeAllMenus}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="hidden lg:block">
          <Button href="/lien-he" onClick={closeAllMenus}>
            Nhận tư vấn
          </Button>
        </div>
        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-slate-200 text-navy-900 lg:hidden"
          aria-label={mobileOpen ? "Đóng menu" : "Mở menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMobileOpen((value) => !value)}
        >
          <span className="flex flex-col gap-1.5" aria-hidden="true">
            <span className={`h-0.5 w-5 bg-current transition ${mobileOpen ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`h-0.5 w-5 bg-current transition ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`h-0.5 w-5 bg-current transition ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`} />
          </span>
        </button>
      </div>
      {desktopMenu ? (
        <MegaMenu
          id={`desktop-${desktopMenu}-menu`}
          menu={desktopMenu}
          onNavigate={closeAllMenus}
          onMouseEnter={clearCloseTimer}
          onMouseLeave={scheduleCloseDesktopMenu}
        />
      ) : null}
      <div id="mobile-navigation">
        <MobileNavigation open={mobileOpen} onNavigate={closeAllMenus} />
      </div>
    </header>
  );
}
