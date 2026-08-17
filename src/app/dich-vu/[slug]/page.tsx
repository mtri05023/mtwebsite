import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { JsonLd } from "@/components/seo/JsonLd";
import { contact, siteConfig } from "@/data/site";
import { getRelatedServices, getServiceBySlug, serviceDetails } from "@/data/services";
import { breadcrumbSchema } from "@/lib/seo";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

function formHref(formType: string) {
  return `/lien-he?loai=${encodeURIComponent(formType)}#form-bao-gia`;
}

export function generateStaticParams() {
  return serviceDetails.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return { title: "Dịch vụ" };
  }

  return {
    title: service.metadata.title,
    description: service.metadata.description,
    alternates: { canonical: `/dich-vu/${service.slug}` },
    openGraph: {
      title: service.metadata.title,
      description: service.metadata.description,
      url: `${siteConfig.siteUrl}/dich-vu/${service.slug}`,
      type: "website"
    },
    twitter: {
      card: "summary",
      title: `${service.metadata.title}`,
      description: service.metadata.description
    }
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const relatedServices = getRelatedServices(service);
  const primaryCta = service.primaryCta ?? "Nhận tư vấn miễn phí";

  return (
    <>
      <JsonLd
        id="service-schema"
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: service.title,
          url: `${siteConfig.siteUrl}/dich-vu/${service.slug}`,
          description: service.description,
          provider: { "@type": "ProfessionalService", name: siteConfig.brand, url: siteConfig.siteUrl },
          areaServed: "Vietnam",
          serviceType: service.title
        }}
      />
      <JsonLd
        id="service-breadcrumb-schema"
        data={breadcrumbSchema([
          { name: "Trang chủ", path: "/" },
          { name: "Dịch vụ", path: "/dich-vu" },
          { name: service.title, path: `/dich-vu/${service.slug}` }
        ])}
      />
      <JsonLd
        id="service-faq-schema"
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: service.faq.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: { "@type": "Answer", text: item.answer }
          }))
        }}
      />
      <section className="service-hero">
        <div className="service-container service-hero-grid">
          <div className="service-hero-copy">
            <nav className="service-breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Trang chủ</Link>
              <span aria-hidden="true">/</span>
              <Link href="/dich-vu">Dịch vụ</Link>
              <span aria-hidden="true">/</span>
              <span>{service.title}</span>
            </nav>
            <span className="service-eyebrow">{service.category}</span>
            <h1>{service.title}</h1>
            <p className="service-hero-description">{service.heroDescription}</p>
            <div className="service-hero-actions">
              <Button href={formHref(service.formType)}>{primaryCta}</Button>
              <Link className="service-zalo-button" href={`https://zalo.me/${contact.zalo}`} target="_blank" rel="noopener noreferrer">
                Chat Zalo
              </Link>
            </div>
            <div className="service-trust-list" aria-label="Cam kết dịch vụ">
              <span>✓ Tư vấn trước khi làm</span>
              <span>✓ Báo giá rõ ràng</span>
              <span>✓ Hỗ trợ sau bàn giao</span>
            </div>
          </div>

          <ServiceVisual serviceTitle={service.title} shortTitle={service.shortTitle} category={service.category} image={service.image} description={service.description} />
        </div>
      </section>

      <section className="service-section service-overview">
        <div className="service-container service-overview-grid">
          <div className="service-section-intro">
            <span className="service-kicker">TỔNG QUAN</span>
            <h2>{service.title} là gì?</h2>
            <p className="service-highlight">Một nền tảng rõ ràng giúp bạn hiểu website đang hoạt động ra sao và cần cải thiện điều gì.</p>
          </div>
          <div className="service-prose">
            {service.whatIs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </div>
      </section>

      <section className="service-section service-details-section">
        <div className="service-container">
          <div className="service-section-heading">
            <span className="service-kicker">ĐỐI TƯỢNG & PHẠM VI</span>
            <h2>Dịch vụ này phù hợp với ai?</h2>
            <p>MT WEBSITE tập trung vào những đầu việc thiết thực, dễ kiểm tra và phù hợp với tình trạng hiện tại của từng website.</p>
          </div>

          <div className="service-suitable-list">
            {service.suitableFor.map((item, index) => (
              <div key={item} className="service-suitable-item">
                <span className="service-number">{String(index + 1).padStart(2, "0")}</span>
                <p>{item}</p>
              </div>
            ))}
          </div>

          <div className="service-deliverables">
            <div className="service-subsection-heading">
              <span className="service-kicker">PHẠM VI THỰC HIỆN</span>
              <h2>MT WEBSITE sẽ thực hiện những gì?</h2>
            </div>
            <CheckList items={service.deliverables} />
          </div>
        </div>
      </section>

      <section className="service-section service-process-section">
        <div className="service-container">
          <div className="service-section-heading">
            <span className="service-kicker">QUY TRÌNH</span>
            <h2>Quy trình triển khai</h2>
            <p>Từng bước được trao đổi rõ trước khi thực hiện để bạn dễ theo dõi tiến độ và phạm vi công việc.</p>
          </div>
          <div className="service-process-list">
            {service.process.map((step, index) => (
              <div key={step} className="service-process-step">
                <span className="service-process-index">{String(index + 1).padStart(2, "0")}</span>
                <p>{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="service-quote-section">
        <div className="service-container service-quote-inner">
          <div>
            <span className="service-kicker service-kicker-light">CHI PHÍ THAM KHẢO</span>
            <h2>Chi phí được báo theo tình trạng và nhu cầu thực tế.</h2>
            <p>{service.pricing}</p>
          </div>
          <div className="service-quote-actions">
            <Button href={formHref(service.formType)}>Nhận báo giá theo nhu cầu</Button>
            <Link href="/bang-gia" className="service-quote-zalo">Xem bảng giá thiết kế website</Link>
            <Link className="service-quote-zalo" href={`https://zalo.me/${contact.zalo}`} target="_blank" rel="noopener noreferrer">Chat Zalo</Link>
          </div>
        </div>
      </section>

      <section className="service-section service-faq-section">
        <div className="service-container service-narrow-container">
          <div className="service-section-heading">
            <span className="service-kicker">GIẢI ĐÁP</span>
            <h2>Câu hỏi thường gặp</h2>
          </div>
          <div className="service-faq-list">
            {service.faq.map((item) => (
              <details key={item.question} className="service-faq-item">
                <summary><span>{item.question}</span><span className="service-faq-plus" aria-hidden="true">+</span></summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="service-section service-related-section">
        <div className="service-container">
          <div className="service-section-heading service-related-heading">
            <div>
              <span className="service-kicker">CÓ THỂ BẠN CŨNG QUAN TÂM</span>
              <h2>Dịch vụ liên quan</h2>
            </div>
            <Link href="/dich-vu" className="service-text-link">Xem tất cả dịch vụ →</Link>
          </div>
          <div className="service-related-grid">
            {relatedServices.map((item) => (
              <Link key={item.slug} href={`/dich-vu/${item.slug}`} className="service-related-card">
                <span className="service-related-icon" aria-hidden="true">↗</span>
                <span className="service-related-category">{item.category}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <span className="service-text-link">Xem chi tiết →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="service-final-cta">
        <div className="service-container service-final-cta-inner">
          <div>
            <span className="service-kicker service-kicker-light">BẮT ĐẦU TỪ NHU CẦU CỦA BẠN</span>
            <h2>Bạn đang cần {service.title.toLowerCase()}?</h2>
            <p>Gửi nhu cầu hiện tại, MT WEBSITE sẽ tư vấn hướng làm phù hợp và báo giá rõ ràng trước khi thực hiện.</p>
          </div>
          <div className="service-final-actions">
            <Button href={formHref(service.formType)}>Nhận tư vấn miễn phí</Button>
            <Link className="service-final-zalo" href={`https://zalo.me/${contact.zalo}`} target="_blank" rel="noopener noreferrer">Chat Zalo</Link>
          </div>
        </div>
      </section>
    </>
  );
}

function ServiceVisual({ serviceTitle, shortTitle, category, image, description }: { serviceTitle: string; shortTitle: string; category: string; image?: string; description: string }) {
  if (image) {
    return (
      <div className="service-visual service-visual-image">
        <div className="service-visual-browser-bar"><span /><span /><span /><b>MT WEBSITE / {shortTitle}</b></div>
        <div className="service-visual-image-frame">
          <Image src={image} alt={`Minh họa ${serviceTitle}`} fill sizes="(min-width: 1024px) 42vw, 100vw" className="object-cover object-top" priority />
        </div>
      </div>
    );
  }

  return (
    <div className="service-visual service-visual-interface">
      <div className="service-visual-interface-top"><span>{category}</span><span>MT WEBSITE</span></div>
      <div className="service-visual-interface-body">
        <div className="service-interface-sidebar"><i /><i /><i /><i /></div>
        <div className="service-interface-content">
          <span className="service-interface-label">DỊCH VỤ WEBSITE</span>
          <strong>{shortTitle}</strong>
          <p>{description}</p>
          <div className="service-interface-lines"><i /><i /><i /></div>
        </div>
      </div>
    </div>
  );
}

function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="service-checklist">
      {items.map((item) => <li key={item}><span aria-hidden="true">✓</span><p>{item}</p></li>)}
    </ul>
  );
}
