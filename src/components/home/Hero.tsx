"use client";

import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";

const HERO_AUTOPLAY_MS = 1500;

const trustPoints = ["Báo giá trước khi làm", "Responsive điện thoại", "Zalo & gọi điện", "Hỗ trợ sau bàn giao"];

type HeroSlide = {
  eyebrow: string;
  badge?: string;
  heading: ReactNode;
  description: string;
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta: {
    label: string;
    href: string;
  };
  visual: "mockup" | "healthcare" | "bookstore" | "collage";
};

const slides: HeroSlide[] = [
  {
    eyebrow: "THIẾT KẾ WEBSITE CHUYÊN NGHIỆP",
    badge: "Chi phí khởi điểm từ 1 triệu",
    heading: (
      <>
        Website chuyên nghiệp, <span className="text-accent-600">chi phí dễ bắt đầu.</span>
      </>
    ),
    description: "Chỉ từ 1 triệu, bạn đã có thể sở hữu một website riêng để giới thiệu thương hiệu, dịch vụ và tiếp cận khách hàng chuyên nghiệp hơn.",
    primaryCta: { label: "Nhận tư vấn miễn phí", href: "/lien-he" },
    secondaryCta: { label: "Xem website đã làm", href: "/du-an" },
    visual: "mockup"
  },
  {
    eyebrow: "WEBSITE DOANH NGHIỆP",
    heading: (
      <>
        Xây dựng hình ảnh <span className="text-accent-600">chuyên nghiệp trên Internet.</span>
      </>
    ),
    description: "Website giới thiệu doanh nghiệp, dịch vụ, sản phẩm và thông tin liên hệ với giao diện hiện đại, rõ ràng và phù hợp trên mọi thiết bị.",
    primaryCta: { label: "Xem mẫu giao diện", href: "/dich-vu#website-doanh-nghiep" },
    secondaryCta: { label: "Nhận báo giá", href: "/lien-he" },
    visual: "healthcare"
  },
  {
    eyebrow: "WEBSITE BÁN HÀNG",
    heading: (
      <>
        Đưa sản phẩm của bạn <span className="text-accent-600">đến gần khách hàng hơn.</span>
      </>
    ),
    description: "Website bán hàng với danh mục sản phẩm, tìm kiếm, giỏ hàng, đặt hàng và giao diện quản lý thuận tiện.",
    primaryCta: { label: "Xem website bán hàng", href: "/du-an/bookstore" },
    secondaryCta: { label: "Tư vấn miễn phí", href: "/lien-he" },
    visual: "bookstore"
  },
  {
    eyebrow: "DỰ ÁN ĐÃ THỰC HIỆN",
    heading: (
      <>
        Không chỉ thiết kế. <span className="text-accent-600">MT WEBSITE tạo ra sản phẩm thực tế.</span>
      </>
    ),
    description: "Từ website dịch vụ đến hệ thống quản lý, mỗi dự án được xây dựng dựa trên nhu cầu sử dụng thực tế.",
    primaryCta: { label: "Xem dự án", href: "/du-an" },
    secondaryCta: { label: "Liên hệ với tôi", href: "/lien-he" },
    visual: "collage"
  }
];

export function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const pointerStartX = useRef<number | null>(null);
  const maxIndex = slides.length - 1;

  const prefersReducedMotion = useMemo(() => {
    if (typeof window === "undefined") return true;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  const goTo = useCallback(
    (index: number) => {
      setActiveIndex(index < 0 ? maxIndex : index > maxIndex ? 0 : index);
    },
    [maxIndex]
  );

  useEffect(() => {
    if (paused || prefersReducedMotion) return undefined;
    const timer = window.setInterval(() => goTo(activeIndex + 1), HERO_AUTOPLAY_MS);
    return () => window.clearInterval(timer);
  }, [activeIndex, goTo, paused, prefersReducedMotion]);

  function handlePointerDown(event: React.PointerEvent<HTMLElement>) {
    pointerStartX.current = event.clientX;
  }

  function handlePointerUp(event: React.PointerEvent<HTMLElement>) {
    if (pointerStartX.current === null) return;
    const deltaX = event.clientX - pointerStartX.current;
    pointerStartX.current = null;

    if (Math.abs(deltaX) < 48) return;
    setPaused(true);
    goTo(deltaX > 0 ? activeIndex - 1 : activeIndex + 1);
  }

  return (
    <section
      className="hero-slider-section overflow-hidden bg-gradient-to-b from-navy-50 to-white"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
    >
      <div className="container-page relative">
        <div className="hero-slider-window">
          {slides.map((slide, index) => (
            <article key={slide.eyebrow} className={`hero-slide ${index === activeIndex ? "is-active" : ""}`} aria-hidden={index !== activeIndex}>
              <div className="hero-copy min-w-0">
                <p className="mb-4 text-sm font-bold uppercase tracking-wide text-accent-600">{slide.eyebrow}</p>
                {slide.badge ? <div className="mb-5 inline-flex rounded-full border border-accent-200 bg-white px-4 py-2 text-sm font-bold text-navy-900 shadow-sm">{slide.badge}</div> : null}
                <h1 className="max-w-3xl text-[1.9rem] font-black leading-tight text-navy-900 sm:text-4xl md:text-6xl">{slide.heading}</h1>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">{slide.description}</p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button href={slide.primaryCta.href}>{slide.primaryCta.label}</Button>
                  <Button href={slide.secondaryCta.href} variant="secondary">
                    {slide.secondaryCta.label}
                  </Button>
                </div>
              </div>
              <HeroVisual visual={slide.visual} priority={index === 0} />
            </article>
          ))}
        </div>

        <button type="button" className="hero-arrow hero-arrow-left" aria-label="Slide trước" onClick={() => goTo(activeIndex - 1)}>
          ←
        </button>
        <button type="button" className="hero-arrow hero-arrow-right" aria-label="Slide sau" onClick={() => goTo(activeIndex + 1)}>
          →
        </button>

        <div className="hero-slider-footer">
          <ul className="flex flex-wrap gap-3 text-sm font-bold text-slate-700">
            {trustPoints.map((point) => (
              <li key={point} className="inline-flex max-w-full items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 shadow-sm">
                <span className="text-accent-600" aria-hidden="true">
                  ✓
                </span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
          <div className="flex gap-2" aria-label="Chọn banner">
            {slides.map((slide, index) => (
              <button
                type="button"
                key={`${slide.eyebrow}-dot`}
                className={`hero-dot ${index === activeIndex ? "is-active" : ""}`}
                aria-label={`Chuyển đến slide ${index + 1}`}
                onClick={() => {
                  setPaused(true);
                  goTo(index);
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroVisual({ visual, priority }: { visual: HeroSlide["visual"]; priority: boolean }) {
  if (visual === "mockup") {
    return <MockupVisual />;
  }

  if (visual === "collage") {
    return (
      <div className="hero-visual hero-collage" aria-label="Ảnh dự án MT WEBSITE">
        <HeroImage src="/assets/references/demo-homepage.png" alt="Website sửa điện lạnh tại nhà" priority={priority} />
        <HeroImage src="/assets/references/cinemax-home.png" alt="Cinemax" />
        <HeroImage src="/assets/references/bookstore.png" alt="Bookstore" />
      </div>
    );
  }

  const image = visual === "healthcare" ? "/assets/references/healthcare-demo.png" : "/assets/references/bookstore.png";
  const alt = visual === "healthcare" ? "Mẫu website doanh nghiệp y tế" : "Website bán hàng Bookstore";

  return (
    <div className="hero-visual hero-image-card">
      <HeroImage src={image} alt={alt} priority={priority} />
    </div>
  );
}

function HeroImage({ src, alt, priority = false }: { src: string; alt: string; priority?: boolean }) {
  return (
    <div className="hero-image-frame">
      <Image src={src} alt={alt} fill sizes="(min-width: 1024px) 44vw, 100vw" priority={priority} />
    </div>
  );
}

function MockupVisual() {
  return (
    <div className="hero-visual relative min-h-[440px] lg:justify-self-end">
      <div className="absolute inset-x-4 bottom-2 top-8 rounded-[32px] bg-accent-500/10 blur-3xl" aria-hidden="true" />
      <div className="relative rounded-[24px] border border-slate-200 bg-white p-3 shadow-[0_24px_70px_rgba(7,29,51,0.16)]">
        <div className="overflow-hidden rounded-[18px] border border-slate-200 bg-white">
          <div className="flex items-center gap-2 border-b border-slate-200 bg-slate-50 px-4 py-3">
            <span className="h-3 w-3 rounded-full bg-red-300" />
            <span className="h-3 w-3 rounded-full bg-amber-300" />
            <span className="h-3 w-3 rounded-full bg-emerald-300" />
            <span className="ml-3 h-7 flex-1 rounded-full bg-white px-4 text-xs font-bold leading-7 text-slate-400">www.mtwebsite.io.vn</span>
          </div>
          <div className="grid gap-5 p-5">
            <div className="rounded-2xl bg-navy-900 p-6 text-white">
              <div className="flex items-center justify-between gap-4">
                <div className="text-sm font-black">
                  <span className="text-accent-500">MT</span> WEBSITE
                </div>
                <div className="hidden gap-3 text-[11px] font-semibold text-slate-300 sm:flex">
                  <span>Dịch vụ</span>
                  <span>Dự án</span>
                  <span>Bảng giá</span>
                </div>
              </div>
              <div className="mt-8 max-w-sm">
                <p className="text-xs font-bold uppercase tracking-wide text-cyan-100">Website dịch vụ</p>
                <div className="mt-3 h-7 w-4/5 rounded bg-white" />
                <div className="mt-2 h-7 w-3/5 rounded bg-white/90" />
                <div className="mt-4 h-3 w-full rounded bg-white/30" />
                <div className="mt-2 h-3 w-2/3 rounded bg-white/30" />
                <div className="mt-6 flex gap-3">
                  <div className="h-11 w-32 rounded-full bg-accent-500" />
                  <div className="h-11 w-28 rounded-full border border-white/30" />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {["Doanh nghiệp", "Dịch vụ", "Landing"].map((item) => (
                <div key={item} className="rounded-xl border border-slate-200 bg-white p-3">
                  <div className="h-8 w-8 rounded-lg bg-navy-50" />
                  <p className="mt-3 text-xs font-bold text-navy-900">{item}</p>
                  <div className="mt-2 h-2 rounded bg-slate-100" />
                  <div className="mt-1.5 h-2 w-2/3 rounded bg-slate-100" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Link href="/lien-he" className="absolute bottom-0 right-0 hidden w-44 rounded-[24px] border border-slate-200 bg-navy-900 p-2 shadow-[0_18px_45px_rgba(7,29,51,0.2)] sm:block">
        <span className="block rounded-[18px] bg-white p-3 text-center text-sm font-bold text-navy-900">Liên hệ nhanh</span>
      </Link>
    </div>
  );
}
