import { siteConfig } from "@/data/site";

export function AboutMe() {
  return (
    <section className="section-spacing" id="gioi-thieu">
      <div className="container-page grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="mx-auto flex h-56 w-56 items-center justify-center rounded-full border border-slate-200 bg-navy-50 text-5xl font-black text-navy-900 shadow-soft lg:mx-0">
          MT
        </div>
        <div>
          <p className="text-sm font-bold uppercase tracking-wide text-accent-600">Giới thiệu freelancer</p>
          <h2 className="mt-3 text-3xl font-bold text-navy-900 md:text-4xl">Người trực tiếp làm website cho bạn</h2>
          <div className="mt-6 rounded-lg border border-slate-200 bg-white p-6">
            <h3 className="text-xl font-bold text-navy-900">{siteConfig.owner}</h3>
            <p className="mt-1 text-sm font-semibold text-accent-600">{siteConfig.role}</p>
            <p className="mt-5 text-base leading-8 text-slate-600">
              Tôi trực tiếp tư vấn, thiết kế và phát triển website cho khách hàng. Mục tiêu không chỉ là tạo một website đẹp mà là xây dựng một website dễ sử dụng, dễ tìm kiếm và phù hợp với mục tiêu kinh doanh.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
