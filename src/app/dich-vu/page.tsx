import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { serviceCategories } from "@/data/services";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Dịch vụ MT WEBSITE",
  description:
    "Giải pháp website từ thiết kế, tối ưu hiệu quả đến hỗ trợ vận hành cho cá nhân, hộ kinh doanh và doanh nghiệp nhỏ.",
  alternates: {
    canonical: `${siteConfig.siteUrl}/dich-vu`
  },
  openGraph: {
    title: "Dịch vụ MT WEBSITE",
    description:
      "Từ xây dựng website mới, tối ưu hiệu quả đến hỗ trợ vận hành, MT WEBSITE cung cấp dịch vụ phù hợp theo nhu cầu.",
    url: `${siteConfig.siteUrl}/dich-vu`
  }
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-navy-50 py-16 md:py-24">
        <div className="container-page max-w-4xl">
          <p className="text-sm font-bold uppercase tracking-wide text-accent-600">DỊCH VỤ MT WEBSITE</p>
          <h1 className="mt-4 text-4xl font-black leading-tight text-navy-900 md:text-6xl">Giải pháp website từ thiết kế đến vận hành</h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Từ xây dựng website mới, tối ưu hiệu quả đến hỗ trợ vận hành, MT WEBSITE cung cấp các dịch vụ phù hợp cho cá nhân, hộ kinh doanh và doanh nghiệp nhỏ.
          </p>
        </div>
      </section>

      <section className="section-spacing">
        <div className="container-page grid gap-14">
          {serviceCategories.map((group) => (
            <section key={group.heading} className="grid gap-6">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.14em] text-accent-600">{group.heading}</p>
                <div className="mt-3 h-px w-full bg-slate-200" />
              </div>
              <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {group.services.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/dich-vu/${service.slug}`}
                    className="group rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-accent-500 hover:shadow-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent-500"
                  >
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-md bg-navy-50 text-sm font-black text-accent-600">
                      {service.shortTitle.slice(0, 2).toUpperCase()}
                    </span>
                    <h2 className="mt-5 text-xl font-black text-navy-900 group-hover:text-accent-600">{service.title}</h2>
                    <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-600">{service.description}</p>
                    <span className="mt-5 inline-flex text-sm font-black text-navy-900 group-hover:text-accent-600">
                      Xem chi tiết <span aria-hidden="true">→</span>
                    </span>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>

      <section className="section-spacing bg-navy-900 text-white">
        <div className="container-page text-center">
          <SectionTitle
            title="Bạn cần tư vấn dịch vụ nào?"
            description="Gửi mô tả ngắn về nhu cầu, tôi sẽ tư vấn hướng làm phù hợp và báo giá trước khi thực hiện."
            align="center"
            tone="dark"
          />
          <Button href="/lien-he#form-bao-gia" className="mt-8">Nhận tư vấn miễn phí</Button>
        </div>
      </section>
    </>
  );
}
