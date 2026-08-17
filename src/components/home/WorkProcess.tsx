import { workProcess } from "@/data/site";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function WorkProcess() {
  return (
    <section className="section-spacing bg-navy-900 text-white">
      <div className="container-page">
        <SectionTitle title="Quy trình làm việc" description="Quy trình ngắn gọn để khách hàng biết mỗi giai đoạn đang làm gì và cần chuẩn bị gì." tone="dark" />
        <div className="mt-12 grid gap-5 md:grid-cols-3 lg:grid-cols-6">
          {workProcess.map((item) => (
            <article key={item.step} className="relative rounded-lg border border-white/15 bg-white/5 p-5">
              <span className="text-sm font-bold text-accent-500">{item.step}</span>
              <h3 className="mt-4 text-base font-bold leading-6 text-white">{item.title}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
