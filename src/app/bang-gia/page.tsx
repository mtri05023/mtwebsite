import type { Metadata } from "next";
import { CostEstimator } from "@/components/home/CostEstimator";
import { PricingCard } from "@/components/ui/PricingCard";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { faq, pricingPlans, siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Bảng giá thiết kế website",
  description: "Bảng giá tham khảo cho landing page, website cơ bản, website doanh nghiệp và website theo yêu cầu.",
  alternates: {
    canonical: "/bang-gia"
  },
  openGraph: {
    title: "Bảng giá thiết kế website | MT WEBSITE",
    description: "Giá rõ ràng, phạm vi công việc minh bạch, không cam kết SEO Top Google.",
    url: `${siteConfig.siteUrl}/bang-gia`
  }
};

export default function PricingPage() {
  return (
    <>
      <section className="bg-navy-50 py-16 md:py-24">
        <div className="container-page max-w-4xl">
          <p className="text-sm font-bold uppercase tracking-wide text-accent-600">Bảng giá</p>
          <h1 className="mt-4 text-4xl font-black leading-tight text-navy-900 md:text-6xl">Bảng giá thiết kế website</h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Mức giá tham khảo để bạn dự trù ngân sách. Báo giá chính xác phụ thuộc vào giao diện, số trang và chức năng cần làm.
          </p>
        </div>
      </section>

      <section className="section-spacing">
        <div className="container-page">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {pricingPlans.map((plan) => (
              <PricingCard key={plan.name} plan={plan} />
            ))}
          </div>
          <p className="mx-auto mt-6 max-w-3xl text-center text-sm leading-6 text-slate-600">
            Không cam kết “Top Google”. SEO cơ bản trong gói là phần nền tảng on-page và kỹ thuật ban đầu để website dễ được Google đọc hơn.
          </p>
        </div>
      </section>

      <CostEstimator />

      <section className="section-spacing">
        <div className="container-page">
          <SectionTitle title="Câu hỏi thường gặp" description="Các câu hỏi thường gặp trước khi bắt đầu làm website." />
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {faq.map((item) => (
              <article key={item.question} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
                <h2 className="text-lg font-bold text-navy-900">{item.question}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

