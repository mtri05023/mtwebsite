import { whyChooseMe } from "@/data/site";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function WhyChooseMe() {
  return (
    <section className="section-spacing bg-navy-50">
      <div className="container-page">
        <SectionTitle title="Lợi ích website" description="Một website tốt cần dễ xem, dễ liên hệ và hỗ trợ mục tiêu kinh doanh thực tế." />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {whyChooseMe.map((item) => (
            <article key={item.title} className="rounded-lg border border-slate-200 bg-white p-6">
              <h3 className="text-lg font-bold text-navy-900">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
