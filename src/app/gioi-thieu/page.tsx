import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { siteConfig } from "@/data/site";

const principles = [
  {
    title: "Rõ ràng",
    description: "Trao đổi phạm vi, chi phí và cách bàn giao trước khi bắt đầu."
  },
  {
    title: "Thực tế",
    description: "Tư vấn theo nhu cầu kinh doanh, không thêm chức năng chỉ để website có vẻ phức tạp."
  },
  {
    title: "Dễ sử dụng",
    description: "Giao diện ưu tiên khách truy cập dễ đọc, dễ liên hệ và dễ thao tác trên điện thoại."
  },
  {
    title: "Hỗ trợ lâu dài",
    description: "Sau bàn giao vẫn có kênh hỗ trợ để xử lý các vấn đề trong phạm vi đã thống nhất."
  }
];

export const metadata: Metadata = {
  title: "Giới thiệu Minh Trí",
  description: "Minh Trí - Freelance Web Developer, người trực tiếp tư vấn, thiết kế và phát triển website MT WEBSITE.",
  alternates: {
    canonical: "/gioi-thieu"
  },
  openGraph: {
    title: "Giới thiệu Minh Trí | MT WEBSITE",
    description: "Làm việc trực tiếp, báo giá rõ ràng, website responsive và hỗ trợ sau bàn giao.",
    url: `${siteConfig.siteUrl}/gioi-thieu`
  }
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-navy-50 py-16 md:py-24">
        <div className="container-page grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div className="mx-auto flex h-64 w-64 items-center justify-center rounded-full border border-slate-200 bg-white text-6xl font-black text-navy-900 shadow-soft lg:mx-0">
            MT
          </div>
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-accent-600">{siteConfig.brand}</p>
            <h1 className="mt-4 text-4xl font-black leading-tight text-navy-900 md:text-6xl">{siteConfig.owner}</h1>
            <p className="mt-3 text-xl font-bold text-accent-600">{siteConfig.role}</p>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Tôi làm việc trực tiếp với khách hàng từ bước tư vấn, báo giá, thiết kế đến phát triển website. Mục tiêu là xây dựng website dễ sử dụng, responsive và phù hợp với mục tiêu kinh doanh, không chỉ là một giao diện nhìn đẹp.
            </p>
          </div>
        </div>
      </section>

      <section className="section-spacing">
        <div className="container-page grid gap-8 lg:grid-cols-3">
          {[
            "Làm việc trực tiếp với khách hàng.",
            "Tư vấn dựa trên nhu cầu thực tế.",
            "Báo giá trước khi thực hiện.",
            "Website responsive trên desktop, tablet và điện thoại.",
            "Hỗ trợ sau bàn giao.",
            "Quan tâm tới mục tiêu kinh doanh chứ không chỉ giao diện."
          ].map((item) => (
            <div key={item} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold leading-6 text-slate-700">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-spacing bg-navy-50">
        <div className="container-page">
          <SectionTitle title="Cách tôi làm việc" description="Bốn nguyên tắc giữ cho dự án rõ ràng và dễ phối hợp." />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {principles.map((item) => (
              <article key={item.title} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
                <h2 className="text-lg font-bold text-navy-900">{item.title}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
              </article>
            ))}
          </div>
          <Button href="/lien-he" className="mt-10">Trao đổi nhu cầu website</Button>
        </div>
      </section>
    </>
  );
}

