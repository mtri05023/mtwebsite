import { trustItems } from "@/data/site";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function TrustTransparency() {
  return (
    <section className="section-spacing bg-navy-50">
      <div className="container-page grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <SectionTitle
          title="Bạn biết mình đang trả tiền cho điều gì"
          description="Uy tín đến từ cách làm minh bạch: phạm vi rõ, báo giá trước và khách hàng được kiểm tra trước khi bàn giao."
        />
        <div className="grid gap-4">
          {trustItems.map((item) => (
            <div key={item} className="flex gap-3 rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
              <span className="mt-0.5 text-accent-600" aria-hidden="true">✓</span>
              <p className="text-sm font-medium leading-6 text-slate-700">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
