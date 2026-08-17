import { pricingPlans } from "@/data/site";
import { PricingCard } from "@/components/ui/PricingCard";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function Pricing() {
  return (
    <section className="section-spacing" id="bang-gia">
      <div className="container-page">
        <SectionTitle title="Bảng giá tham khảo" description="Mức giá rõ ràng để bạn ước lượng ngân sách trước khi trao đổi chi tiết." align="center" />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {pricingPlans.map((plan) => (
            <PricingCard key={plan.name} plan={plan} />
          ))}
        </div>
        <p className="mx-auto mt-6 max-w-3xl text-center text-sm leading-6 text-slate-600">
          Chi phí trên là mức tham khảo. Báo giá chính xác phụ thuộc vào giao diện, số lượng trang và chức năng yêu cầu.
        </p>
      </div>
    </section>
  );
}
