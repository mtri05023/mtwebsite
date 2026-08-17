import { services } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ServiceCard } from "@/components/ui/ServiceCard";

export function Services() {
  const featuredIds = ["website-doanh-nghiep", "website-dich-vu", "website-ban-hang", "landing-page"];
  const featuredServices = featuredIds.flatMap((id) => services.filter((service) => service.id === id));

  return (
    <section className="section-spacing" id="dich-vu">
      <div className="container-page">
        <SectionTitle title="Dịch vụ nổi bật" description="Những nhóm website thường được khách hàng cần trước: giới thiệu, quảng cáo, bán hàng và website theo yêu cầu." />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {featuredServices.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
        <div className="mt-8 text-center">
          <Button href="/dich-vu" variant="secondary">
            Xem tất cả dịch vụ
          </Button>
        </div>
      </div>
    </section>
  );
}
