import type { Metadata } from "next";
import { ContactQuoteForm } from "@/components/contact/ContactQuoteForm";
import { contact, siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Liên hệ báo giá website",
  description: "Liên hệ MT WEBSITE qua điện thoại, Zalo hoặc email để nhận tư vấn và báo giá thiết kế website.",
  alternates: {
    canonical: `${siteConfig.siteUrl}/lien-he`
  },
  openGraph: {
    title: "Liên hệ báo giá website | MT WEBSITE",
    description: "Gửi mô tả nhu cầu website để nhận tư vấn và báo giá trước khi thực hiện.",
    url: `${siteConfig.siteUrl}/lien-he`
  }
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-navy-50 py-16 md:py-24">
        <div className="container-page grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-accent-600">Liên hệ</p>
            <h1 className="mt-4 text-4xl font-black leading-tight text-navy-900 md:text-6xl">Hãy mô tả website bạn đang cần</h1>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Gửi thông tin cơ bản về website bạn muốn làm. Tôi sẽ tư vấn hướng phù hợp và báo giá trước khi thực hiện.
            </p>
            <div className="mt-8 grid gap-3 text-sm font-semibold text-navy-900">
              <a href={`tel:${contact.phone}`} className="rounded-md border border-slate-200 bg-white p-4 hover:border-accent-500">
                Điện thoại/Zalo: {contact.phone}
              </a>
              <a href={`mailto:${contact.email}`} className="break-words rounded-md border border-slate-200 bg-white p-4 hover:border-accent-500">
                Email: {contact.email}
              </a>
            </div>
          </div>
          <ContactQuoteForm />
        </div>
      </section>
    </>
  );
}

