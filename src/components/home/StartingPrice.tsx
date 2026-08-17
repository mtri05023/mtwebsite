import { Button } from "@/components/ui/Button";
import { SectionTitle } from "@/components/ui/SectionTitle";

const priceOptions = [
  {
    title: "Website giới thiệu",
    price: "1 - 4 triệu"
  },
  {
    title: "Website quảng cáo",
    price: "4 - 5 triệu"
  },
  {
    title: "Website bán hàng",
    price: "5 - 7 triệu"
  },
  {
    title: "Website theo yêu cầu",
    price: "Từ 8 triệu"
  }
];

export function StartingPrice() {
  return (
    <section className="section-spacing bg-navy-50">
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <SectionTitle
            title="Bắt đầu website riêng với ngân sách phù hợp"
            description="Từ website giới thiệu đơn giản đến website quảng cáo, bán hàng hoặc hệ thống theo yêu cầu, MT WEBSITE có nhiều phương án để phù hợp với mục tiêu và ngân sách của bạn."
          />
          <div className="grid gap-3 sm:grid-cols-2">
            {priceOptions.map((option) => (
              <div key={option.title} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="text-base font-bold text-navy-900">{option.title}</h3>
                <p className="mt-2 text-xl font-black text-accent-600">{option.price}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8">
          <Button href="/bang-gia" variant="secondary">
            Xem bảng giá chi tiết
          </Button>
        </div>
      </div>
    </section>
  );
}
