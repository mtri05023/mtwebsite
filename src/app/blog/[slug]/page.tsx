import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { blogPosts, siteConfig } from "@/data/site";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/seo";

type BlogDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    return {
      title: "Blog"
    };
  }

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: `/blog/${post.slug}`
    },
    openGraph: {
      title: `${post.title} | MT WEBSITE`,
      description: post.description,
      url: `${siteConfig.siteUrl}/blog/${post.slug}`,
      type: "article"
    },
    twitter: {
      card: "summary",
      title: `${post.title} | MT WEBSITE`,
      description: post.description
    }
  };
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="section-spacing bg-navy-50">
      <JsonLd
        id="blog-article-schema"
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: post.title,
          description: post.description,
          datePublished: post.date,
          dateModified: post.date,
          mainEntityOfPage: `${siteConfig.siteUrl}/blog/${post.slug}`,
          author: { "@type": "Person", name: siteConfig.owner },
          publisher: { "@type": "Organization", name: siteConfig.brand, url: siteConfig.siteUrl }
        }}
      />
      <JsonLd id="blog-breadcrumb-schema" data={breadcrumbSchema([
        { name: "Trang chủ", path: "/" },
        { name: "Blog", path: "/blog" },
        { name: post.title, path: `/blog/${post.slug}` }
      ])} />
      <div className="container-page max-w-3xl">
        <time dateTime={post.date} className="text-sm font-bold uppercase tracking-wide text-accent-600">
          {new Intl.DateTimeFormat("vi-VN").format(new Date(post.date))}
        </time>
        <h1 className="mt-4 text-4xl font-black leading-tight text-navy-900 md:text-5xl">{post.title}</h1>
        <p className="mt-6 text-lg leading-8 text-slate-600">{post.description}</p>
        <div className="mt-8 rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          {post.content.map((paragraph) => <p key={paragraph} className="mt-4 first:mt-0 text-base leading-8 text-slate-700">{paragraph}</p>)}
          <h2 className="mt-8 text-xl font-bold text-navy-900">Cần tư vấn theo website thực tế?</h2>
          <p className="mt-3 text-base leading-8 text-slate-700">Bạn có thể gửi số trang, mục tiêu và chức năng cần có để MT WEBSITE tư vấn phạm vi phù hợp trước khi báo giá.</p>
          <Link href="/dich-vu" className="mt-5 inline-flex font-bold text-accent-600 hover:text-accent-500">Xem các dịch vụ thiết kế website</Link>
        </div>
        <Button href="/lien-he" className="mt-8">Trao đổi nhu cầu website</Button>
      </div>
    </article>
  );
}

