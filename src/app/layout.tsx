import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { MobileContactBar } from "@/components/layout/MobileContactBar";
import { FloatingContact } from "@/components/layout/FloatingContact";
import { contact, siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: {
    default: "MT WEBSITE | Thiết kế Website Freelance",
    template: "%s | MT WEBSITE"
  },
  description:
    "Thiết kế website cho doanh nghiệp nhỏ, hộ kinh doanh và cá nhân. Website responsive, SEO cơ bản, báo giá rõ ràng và hỗ trợ sau bàn giao.",
  metadataBase: new URL(siteConfig.siteUrl),
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "MT WEBSITE | Thiết kế Website Freelance",
    description:
      "Thiết kế website cho doanh nghiệp nhỏ, hộ kinh doanh và cá nhân. Website responsive, SEO cơ bản, báo giá rõ ràng và hỗ trợ sau bàn giao.",
    siteName: "MT WEBSITE",
    locale: "vi_VN",
    type: "website",
    url: siteConfig.siteUrl
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingContact phone={contact.phone} zalo={contact.zalo} />
        <MobileContactBar phone={contact.phone} zalo={contact.zalo} />
      </body>
    </html>
  );
}
