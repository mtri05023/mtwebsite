import { Button } from "@/components/ui/Button";
import { contact } from "@/data/site";

export function FinalCTA() {
  return (
    <section className="section-spacing bg-navy-900 text-white">
      <div className="container-page text-center">
        <h2 className="text-3xl font-black md:text-5xl">Bạn đang cần một website?</h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-300">
          Mô tả nhu cầu của bạn, tôi sẽ tư vấn và báo giá trước khi thực hiện.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button href="/lien-he">Nhận báo giá miễn phí</Button>
          <Button href={`https://zalo.me/${contact.zalo}`} variant="secondary">Liên hệ Zalo</Button>
        </div>
      </div>
    </section>
  );
}
