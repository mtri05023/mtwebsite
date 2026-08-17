import Link from "next/link";
import { contact, services, siteConfig } from "@/data/site";
import { Wordmark } from "@/components/layout/Wordmark";

export function Footer() {
  const year = new Date().getFullYear();
  const serviceLinks = services.slice(0, 5).map((service) => ({ label: service.title, href: service.href }));
  const exploreLinks = [
    { label: "Dự án", href: "/du-an" },
    { label: "Bảng giá", href: "/bang-gia" },
    { label: "Blog", href: "/blog" },
    { label: "Giới thiệu", href: "/gioi-thieu" }
  ];

  return (
    <footer className="border-t border-slate-200 bg-navy-900 pb-24 pt-12 text-white md:pb-12">
      <div className="container-page grid gap-10 md:grid-cols-[1.15fr_1fr_1fr_1fr]">
        <div>
          <Wordmark className="text-2xl [&_span:last-child]:text-white" />
          <p className="mt-3 text-sm text-slate-300">{siteConfig.role}</p>
          <p className="mt-6 max-w-sm text-sm leading-6 text-slate-300">
            Thiết kế website freelance cho doanh nghiệp nhỏ, hộ kinh doanh, cá nhân và người bán dịch vụ.
          </p>
        </div>
        <div>
          <h2 className="text-sm font-bold uppercase tracking-wide text-slate-200">Dịch vụ</h2>
          <nav className="mt-4 grid gap-3 text-sm text-slate-300" aria-label="Dịch vụ footer">
            {serviceLinks.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-white">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div>
          <h2 className="text-sm font-bold uppercase tracking-wide text-slate-200">Khám phá</h2>
          <nav className="mt-4 grid gap-3 text-sm text-slate-300" aria-label="Khám phá footer">
            {exploreLinks.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-white">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div>
          <h2 className="text-sm font-bold uppercase tracking-wide text-slate-200">Liên hệ</h2>
          <address className="mt-4 grid gap-3 text-sm not-italic text-slate-300">
            <a href={`tel:${contact.phone}`} className="hover:text-white">
              Điện thoại: {contact.phone}
            </a>
            <a href={`https://zalo.me/${contact.zalo}`} className="hover:text-white">
              Zalo: {contact.zalo}
            </a>
            <a href={`mailto:${contact.email}`} className="break-words hover:text-white">
              Email: {contact.email}
            </a>
          </address>
        </div>
      </div>
      <div className="container-page mt-10 border-t border-white/10 pt-6 text-sm text-slate-400">© {year} MT WEBSITE. All rights reserved.</div>
    </footer>
  );
}
