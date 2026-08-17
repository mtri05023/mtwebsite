import { websiteStyleSamples } from "@/data/site";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ShowcaseCarousel } from "@/components/ui/ShowcaseCarousel";

export function DesignShowcase() {
  return (
    <section className="section-spacing bg-white">
      <div className="container-page">
        <SectionTitle
          title="Mẫu giao diện & dự án nổi bật"
          description="Chọn phong cách website phù hợp với thương hiệu, dịch vụ hoặc sản phẩm bạn đang muốn giới thiệu."
        />
        <ShowcaseCarousel kind="styles" items={websiteStyleSamples} />
      </div>
    </section>
  );
}
