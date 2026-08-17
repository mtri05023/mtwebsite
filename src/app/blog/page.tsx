import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts, siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Blog thiết kế website",
  description: "Các bài viết ngắn về chi phí website, landing page, Google Ads và chi phí duy trì website.",
  alternates: {
    canonical: "/blog"
  },
  openGraph: {
    title: "Blog thiết kế website | MT WEBSITE",
    description: "Kiến thức ngắn, thực tế cho cá nhân và doanh nghiệp nhỏ chuẩn bị làm website.",
    url: `${siteConfig.siteUrl}/blog`
  }
};

export default function BlogPage() {
  return (
    <>
      <section className="bg-navy-50 py-16 md:py-24">
        <div className="container-page max-w-4xl">
          <p className="text-sm font-bold uppercase tracking-wide text-accent-600">Blog</p>
          <h1 className="mt-4 text-4xl font-black leading-tight text-navy-900 md:text-6xl">Kiến thức làm website</h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Một số bài viết ngắn giúp bạn chuẩn bị nội dung, ngân sách và mục tiêu trước khi làm website.
          </p>
        </div>
      </section>

      <section className="section-spacing">
        <div className="container-page grid gap-6 md:grid-cols-2">
          {blogPosts.map((post) => (
            <article key={post.slug} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
              <time dateTime={post.date} className="text-sm font-semibold text-accent-600">
                {new Intl.DateTimeFormat("vi-VN").format(new Date(post.date))}
              </time>
              <h2 className="mt-3 text-2xl font-bold leading-tight text-navy-900">{post.title}</h2>
              <p className="mt-4 text-sm leading-6 text-slate-600">{post.description}</p>
              <Link href={`/blog/${post.slug}`} className="mt-6 inline-flex text-sm font-bold text-accent-600 hover:text-accent-500">
                Đọc tiếp
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

