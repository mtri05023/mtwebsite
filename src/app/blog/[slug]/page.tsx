import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { blogPosts, siteConfig } from "@/data/site";

type BlogDetailPageProps = {
  params: Promise<{ slug: string }>;
};

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
      url: `${siteConfig.siteUrl}/blog/${post.slug}`
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
      <div className="container-page max-w-3xl">
        <time dateTime={post.date} className="text-sm font-bold uppercase tracking-wide text-accent-600">
          {new Intl.DateTimeFormat("vi-VN").format(new Date(post.date))}
        </time>
        <h1 className="mt-4 text-4xl font-black leading-tight text-navy-900 md:text-5xl">{post.title}</h1>
        <p className="mt-6 text-lg leading-8 text-slate-600">{post.description}</p>
        <div className="mt-8 rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <p className="text-base leading-8 text-slate-700">
            Nội dung chi tiết cho bài viết này sẽ được mở rộng ở Phase 3. Hiện tại bài viết được chuẩn bị sẵn cấu trúc SEO cơ bản, tiêu đề, mô tả và URL riêng để phát triển nội dung dài sau này.
          </p>
        </div>
        <Button href="/lien-he" className="mt-8">Trao đổi nhu cầu website</Button>
      </div>
    </article>
  );
}

