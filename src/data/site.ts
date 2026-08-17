export type NavItem = {
  label: string;
  href: string;
};

export type Service = {
  id: string;
  title: string;
  icon: string;
  description: string;
  audience: string;
  features: string[];
  price: string;
  href: string;
};

export type Project = {
  slug: string;
  name: string;
  website?: string;
  url?: string;
  category: string;
  type?: string;
  status?: string;
  industry: string;
  technology: string;
  technologies?: string[];
  description: string;
  scope: string[];
  features?: string[];
  images?: string[];
  accent: string;
  preview?: "service" | "cinema" | "bookstore" | "business" | "medical" | "real-estate" | "education" | "portfolio";
  featured?: boolean;
  isDemo?: boolean;
};

export type WebsiteStyleSample = {
  id?: string;
  title: string;
  category: string;
  description: string;
  image?: string;
  badge?: string;
  ctaLabel?: string;
  preview: NonNullable<Project["preview"]>;
  accent: string;
  href: string;
};

export type PricingPlan = {
  name: string;
  price: string;
  pages: string;
  features: string[];
  suitableFor: string[];
  cta: string;
  popular?: boolean;
};

export type ProcessStep = {
  step: string;
  title: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type BlogPost = {
  title: string;
  description: string;
  date: string;
  slug: string;
};

export type EstimatorWebsiteType = {
  label: string;
  basePrice: number | null;
};

export type EstimatorOption = {
  label: string;
  price: number;
  suffix?: string;
};

export const siteConfig = {
  brand: "MT WEBSITE",
  role: "Thiết kế Website & Phát triển Web",
  owner: "Minh Trí",
  siteUrl: "https://www.mtwebsite.io.vn",
  description:
    "Thiết kế website freelance cho doanh nghiệp nhỏ, hộ kinh doanh và cá nhân. Website responsive, SEO cơ bản, báo giá rõ ràng và hỗ trợ sau bàn giao."
};

export const contact = {
  phone: "0326757053",
  zalo: "0326757053",
  email: "mtri.sgu.cntt0502@gmail.com"
};

export const navigation: NavItem[] = [
  { label: "Trang chủ", href: "/" },
  { label: "Dịch vụ", href: "/dich-vu" },
  { label: "Dự án", href: "/du-an" },
  { label: "Bảng giá", href: "/bang-gia" },
  { label: "Blog", href: "/blog" },
  { label: "Giới thiệu", href: "/gioi-thieu" },
  { label: "Liên hệ", href: "/lien-he" }
];

export const services: Service[] = [
  {
    id: "landing-page",
    title: "Landing Page",
    icon: "LP",
    description: "Trang giới thiệu một sản phẩm, dịch vụ hoặc chiến dịch quảng cáo với CTA rõ ràng.",
    audience: "Phù hợp cho quảng cáo Google, giới thiệu dịch vụ, thu thập khách hàng tiềm năng.",
    features: ["Thiết kế 1 trang", "CTA gọi/Zalo", "Form liên hệ", "Responsive", "SEO on-page cơ bản"],
    price: "Từ 1.500.000đ",
    href: "/dich-vu/landing-page"
  },
  {
    id: "website-doanh-nghiep",
    title: "Website doanh nghiệp",
    icon: "DN",
    description: "Website giới thiệu thương hiệu, dịch vụ, năng lực và thông tin liên hệ của doanh nghiệp nhỏ.",
    audience: "Phù hợp cho doanh nghiệp cần hồ sơ online rõ ràng và dễ tìm kiếm.",
    features: ["Trang chủ", "Dịch vụ", "Giới thiệu", "Liên hệ", "Google Maps", "SEO cơ bản"],
    price: "Từ 3.500.000đ",
    href: "/dich-vu/website-doanh-nghiep"
  },
  {
    id: "website-dich-vu",
    title: "Website dịch vụ",
    icon: "DV",
    description: "Website cho cá nhân hoặc đội nhóm bán dịch vụ, tập trung vào cuộc gọi, Zalo và form tư vấn.",
    audience: "Phù hợp cho sửa chữa, tư vấn, đào tạo, chăm sóc, thi công và dịch vụ địa phương.",
    features: ["Landing theo dịch vụ", "Nút gọi nhanh", "Zalo", "Form liên hệ", "Google Maps", "Tracking CTA"],
    price: "Từ 2.500.000đ",
    href: "/dich-vu/website-dich-vu"
  },
  {
    id: "website-ban-hang",
    title: "Website bán hàng",
    icon: "BH",
    description: "Website trưng bày sản phẩm, danh mục, thông tin mua hàng và kênh liên hệ tư vấn.",
    audience: "Phù hợp cho shop nhỏ, hộ kinh doanh hoặc người bán hàng cần website riêng.",
    features: ["Danh mục sản phẩm", "Trang chi tiết sản phẩm", "Form/Zalo", "Responsive", "SEO cơ bản"],
    price: "Từ 5.000.000đ",
    href: "/dich-vu/website-ban-hang"
  },
  {
    id: "chinh-sua-website",
    title: "Chỉnh sửa website",
    icon: "CS",
    description: "Sửa lỗi giao diện, tối ưu mobile, cập nhật nội dung hoặc cải thiện cấu trúc trang hiện có.",
    audience: "Phù hợp khi website đã có nhưng hiển thị chưa tốt hoặc cần chỉnh nội dung nhanh.",
    features: ["Sửa giao diện", "Tối ưu mobile", "Thêm CTA", "Cập nhật nội dung", "Kiểm tra lỗi cơ bản"],
    price: "Báo giá theo hạng mục",
    href: "/dich-vu/chinh-sua-website"
  },
  {
    id: "bao-tri-website",
    title: "Bảo trì website",
    icon: "BT",
    description: "Hỗ trợ cập nhật nội dung, kiểm tra website và xử lý vấn đề kỹ thuật sau bàn giao.",
    audience: "Phù hợp cho khách cần người hỗ trợ lâu dài thay vì tự xử lý kỹ thuật.",
    features: ["Cập nhật nội dung", "Kiểm tra hiển thị", "Hỗ trợ kỹ thuật", "Tư vấn cải thiện", "Theo dõi cơ bản"],
    price: "Liên hệ",
    href: "/dich-vu/bao-tri-website"
  }
];

export const whyChooseMe = [
  {
    title: "Báo giá rõ ràng",
    description: "Biết chi phí trước khi bắt đầu."
  },
  {
    title: "Thiết kế responsive",
    description: "Tối ưu desktop, tablet và điện thoại."
  },
  {
    title: "Hỗ trợ trực tiếp",
    description: "Làm việc trực tiếp với người phát triển website."
  },
  {
    title: "Hỗ trợ sau bàn giao",
    description: "Không bỏ khách sau khi website hoàn thành."
  }
];

export const trustItems = [
  "Báo giá trước khi thực hiện.",
  "Thống nhất phạm vi công việc.",
  "Khách hàng được kiểm tra trước khi bàn giao.",
  "Website và source code được bàn giao theo thỏa thuận.",
  "Không phát sinh chức năng ngoài phạm vi mà không báo trước."
];

export const projects: Project[] = [
  {
    slug: "website-sua-dien-lanh-tai-nha",
    name: "Website sửa điện lạnh tại nhà",
    website: "https://suadienlanh.com.vn",
    category: "Website dịch vụ",
    industry: "Sửa chữa điện lạnh tại TP.HCM",
    technology: "HTML / CSS / JavaScript",
    description:
      "Website phục vụ khách hàng cần sửa chữa điện lạnh tại TP.HCM. Website được thiết kế responsive, xây dựng landing page riêng theo từng dịch vụ, tối ưu SEO cơ bản và hỗ trợ triển khai Google Ads.",
    scope: [
      "Responsive",
      "Landing page theo dịch vụ",
      "SEO cơ bản",
      "Google Search Console",
      "Sitemap",
      "Tracking nút gọi/Zalo",
      "Tối ưu cho Google Ads"
    ],
    accent: "#16a3d8"
  },
  {
    slug: "landing-page-dich-vu-dia-phuong-demo",
    name: "Landing Page dịch vụ địa phương",
    website: undefined,
    category: "Landing Page",
    industry: "Dịch vụ địa phương",
    technology: "Next.js / Tailwind CSS",
    description:
      "Dự án demo mô phỏng landing page cho dịch vụ nhỏ, tập trung vào CTA gọi nhanh, Zalo và form nhận tư vấn.",
    scope: ["Responsive", "CTA rõ ràng", "Form liên hệ", "Google Maps", "SEO cơ bản"],
    accent: "#235789",
    isDemo: true
  },
  {
    slug: "website-ca-nhan-chuyen-gia-demo",
    name: "Website cá nhân chuyên gia",
    website: undefined,
    category: "Website cá nhân",
    industry: "Tư vấn dịch vụ",
    technology: "Next.js / TypeScript",
    description:
      "Dự án demo mô phỏng website cá nhân cho người bán dịch vụ cần giới thiệu hồ sơ, dịch vụ và bài viết chuyên môn.",
    scope: ["Trang giới thiệu", "Trang dịch vụ", "Blog", "Form liên hệ", "Responsive"],
    accent: "#07906b",
    isDemo: true
  }
];

export const portfolioProjects: Project[] = [
  {
    slug: "website-sua-dien-lanh-tai-nha",
    name: "Website sửa điện lạnh tại nhà",
    website: "https://suadienlanh.com.vn",
    url: "https://suadienlanh.com.vn",
    category: "Website dịch vụ",
    type: "Website thực tế",
    status: "Đã triển khai thực tế",
    industry: "Dịch vụ sửa điện lạnh tại nhà",
    technology: "HTML / CSS / JavaScript",
    technologies: ["HTML", "CSS", "JavaScript"],
    description: "Website dịch vụ sửa điện lạnh, tối ưu CTA gọi/Zalo và hỗ trợ triển khai quảng cáo.",
    scope: ["Responsive điện thoại", "Landing page theo dịch vụ", "SEO cơ bản", "Google Search Console", "Sitemap", "Tracking nút gọi/Zalo", "Tối ưu cho Google Ads"],
    features: ["Dịch vụ sửa điện lạnh", "Nút gọi nhanh", "Zalo", "Form tư vấn", "Google Ads"],
    images: ["/images/projects/suadienlanh-home.png"],
    accent: "#16a3d8",
    preview: "service",
    featured: true,
    isDemo: false
  },
  {
    slug: "cinemax",
    name: "Cinemax",
    category: "Web App",
    type: "Dự án cá nhân / Demo",
    status: "Dự án cá nhân",
    industry: "Rạp chiếu phim",
    technology: "",
    technologies: [],
    description: "Website đặt vé và quản lý rạp chiếu phim gồm giao diện người dùng và trang quản trị.",
    scope: ["Danh sách phim", "Lịch chiếu", "Rạp chiếu", "Đặt vé", "Quản lý phim", "Quản lý lịch chiếu", "Dashboard", "Quản lý đơn đặt vé"],
    features: ["Danh sách phim", "Lịch chiếu", "Rạp chiếu", "Đặt vé", "Dashboard", "Quản lý đơn đặt vé"],
    images: ["/images/projects/cinemax-home.png", "/images/projects/cinemax-movies.png", "/images/projects/cinemax-admin-dashboard.png", "/images/projects/cinemax-admin-movies.png"],
    accent: "#7c3aed",
    preview: "cinema",
    featured: true,
    isDemo: true
  },
  {
    slug: "bookstore",
    name: "Bookstore",
    category: "Website bán hàng",
    type: "Dự án cá nhân / Demo",
    status: "Dự án cá nhân",
    industry: "Bán sách",
    technology: "",
    technologies: [],
    description: "Website bán sách có sản phẩm, giỏ hàng, đặt hàng và giao diện quản lý.",
    scope: ["Danh sách sách", "Chi tiết sách", "Tìm kiếm", "Giỏ hàng", "Đặt hàng", "Quản lý sản phẩm"],
    features: ["Danh sách sách", "Chi tiết sách", "Tìm kiếm", "Giỏ hàng", "Đặt hàng", "Quản lý sản phẩm"],
    images: ["/images/projects/bookstore.png"],
    accent: "#b45309",
    preview: "bookstore",
    featured: true,
    isDemo: true
  },
  {
    slug: "landing-page-dich-vu-dia-phuong-demo",
    name: "Landing Page dịch vụ địa phương",
    category: "Website dịch vụ",
    type: "Dự án cá nhân / Demo",
    status: "Dự án cá nhân",
    industry: "Dịch vụ địa phương",
    technology: "Next.js / Tailwind CSS",
    technologies: ["Next.js", "Tailwind CSS"],
    description: "Dự án demo mô phỏng landing page cho dịch vụ nhỏ, tập trung vào CTA gọi nhanh, Zalo và form nhận tư vấn.",
    scope: ["Responsive", "CTA rõ ràng", "Form liên hệ", "Google Maps", "SEO cơ bản"],
    features: ["CTA gọi nhanh", "Zalo", "Form tư vấn", "Google Maps"],
    images: [],
    accent: "#235789",
    preview: "business",
    featured: false,
    isDemo: true
  },
  {
    slug: "website-ca-nhan-chuyen-gia-demo",
    name: "Website cá nhân chuyên gia",
    category: "Dự án cá nhân",
    type: "Dự án cá nhân / Demo",
    status: "Dự án cá nhân",
    industry: "Tư vấn dịch vụ",
    technology: "Next.js / TypeScript",
    technologies: ["Next.js", "TypeScript"],
    description: "Dự án demo mô phỏng website cá nhân cho người bán dịch vụ cần giới thiệu hồ sơ, dịch vụ và bài viết chuyên môn.",
    scope: ["Trang giới thiệu", "Trang dịch vụ", "Blog", "Form liên hệ", "Responsive"],
    features: ["Hồ sơ cá nhân", "Dịch vụ", "Blog", "Form liên hệ"],
    images: [],
    accent: "#07906b",
    preview: "portfolio",
    featured: false,
    isDemo: true
  }
];

export const websiteStyleSamples: WebsiteStyleSample[] = [
  {
    id: "business",
    title: "Doanh nghiệp",
    category: "Website giới thiệu",
    description: "Website giới thiệu doanh nghiệp, năng lực và dịch vụ.",
    image: "/images/templates/healthcare-demo.png",
    badge: "Doanh nghiệp",
    ctaLabel: "Xem mẫu",
    preview: "business",
    accent: "#2563eb",
    href: "/dich-vu/website-doanh-nghiep"
  },
  {
    id: "service",
    title: "Dịch vụ",
    category: "Website dịch vụ",
    description: "Website tối ưu Call, Zalo và form liên hệ.",
    image: "/images/templates/service-suadienlanh.png",
    badge: "Dịch vụ",
    ctaLabel: "Xem mẫu",
    preview: "service",
    accent: "#16a3d8",
    href: "/dich-vu/website-dich-vu"
  },
  {
    id: "store",
    title: "Bán hàng",
    category: "Website bán hàng",
    description: "Website sản phẩm, giỏ hàng và đặt hàng.",
    image: "/images/templates/bookstore.png",
    badge: "Bán hàng",
    ctaLabel: "Xem mẫu",
    preview: "bookstore",
    accent: "#b45309",
    href: "/dich-vu/website-ban-hang"
  },
  {
    id: "healthcare",
    title: "Y tế",
    category: "Dịch vụ chuyên môn",
    description: "Website doanh nghiệp/dịch vụ trong lĩnh vực chăm sóc sức khỏe.",
    image: "/images/templates/healthcare-demo.png",
    badge: "Y tế",
    ctaLabel: "Xem mẫu",
    preview: "medical",
    accent: "#0f766e",
    href: "/lien-he"
  },
  {
    id: "webapp",
    title: "Web App",
    category: "Hệ thống / Web App",
    description: "Dashboard và hệ thống quản lý theo nghiệp vụ.",
    image: "/images/templates/webapp-dashboard.png",
    badge: "Hệ thống",
    ctaLabel: "Xem chi tiết",
    preview: "cinema",
    accent: "#7c3aed",
    href: "/du-an/cinemax"
  },
  {
    id: "entertainment",
    title: "Giải trí",
    category: "Website nội dung",
    description: "Website nội dung, phim và đặt dịch vụ trực tuyến.",
    image: "/images/templates/cinemax-home.png",
    badge: "Giải trí",
    ctaLabel: "Xem chi tiết",
    preview: "cinema",
    accent: "#ef4444",
    href: "/du-an/cinemax"
  }
];

export const workProcess: ProcessStep[] = [
  { step: "01", title: "Tiếp nhận yêu cầu" },
  { step: "02", title: "Tư vấn giải pháp" },
  { step: "03", title: "Báo giá" },
  { step: "04", title: "Thiết kế & phát triển" },
  { step: "05", title: "Khách hàng kiểm tra" },
  { step: "06", title: "Bàn giao & hỗ trợ" }
];

export const pricingPlans: PricingPlan[] = [
  {
    name: "Landing Page",
    price: "Từ 1.500.000đ",
    pages: "1 trang",
    suitableFor: ["Quảng cáo", "Giới thiệu sản phẩm", "Thu thập khách hàng"],
    features: ["Responsive", "Form liên hệ", "Zalo", "Google Maps", "SEO cơ bản", "Hỗ trợ bàn giao"],
    cta: "Nhận tư vấn"
  },
  {
    name: "Website cơ bản",
    price: "Từ 2.500.000đ",
    pages: "3 - 5 trang",
    suitableFor: ["Cá nhân", "Hộ kinh doanh", "Dịch vụ nhỏ"],
    features: ["Responsive", "Form liên hệ", "Zalo", "Google Maps", "SEO cơ bản", "Hỗ trợ bàn giao"],
    cta: "Nhận tư vấn",
    popular: true
  },
  {
    name: "Website doanh nghiệp",
    price: "Từ 3.500.000đ",
    pages: "5 - 8 trang",
    suitableFor: ["Doanh nghiệp nhỏ", "Công ty dịch vụ", "Hồ sơ năng lực online"],
    features: ["Responsive", "Form liên hệ", "Zalo", "Google Maps", "SEO cơ bản", "Hỗ trợ bàn giao"],
    cta: "Nhận tư vấn"
  },
  {
    name: "Website theo yêu cầu",
    price: "Liên hệ",
    pages: "Theo phạm vi",
    suitableFor: ["Chức năng riêng", "Website phức tạp", "Tích hợp theo nhu cầu"],
    features: ["Responsive", "Form liên hệ", "Zalo", "Google Maps", "SEO cơ bản", "Hỗ trợ bàn giao"],
    cta: "Yêu cầu báo giá"
  }
];

export const faq: FaqItem[] = [
  {
    question: "Thời gian làm website bao lâu?",
    answer: "Landing page thường mất khoảng vài ngày đến một tuần. Website nhiều trang hoặc có chức năng riêng sẽ cần thêm thời gian tùy phạm vi."
  },
  {
    question: "Có phát sinh chi phí không?",
    answer: "Chi phí được báo trước theo phạm vi đã thống nhất. Nếu có yêu cầu mới ngoài phạm vi, tôi sẽ báo lại trước khi thực hiện."
  },
  {
    question: "Domain/hosting tính thế nào?",
    answer: "Domain và hosting có thể dùng nhà cung cấp của khách hàng hoặc tôi hỗ trợ đăng ký. Các khoản này thường tính theo năm."
  },
  {
    question: "Tôi có sở hữu website không?",
    answer: "Website và source code được bàn giao theo thỏa thuận. Quyền sở hữu sẽ được nói rõ trước khi bắt đầu."
  },
  {
    question: "Có hỗ trợ sau bàn giao không?",
    answer: "Có. Sau bàn giao tôi hỗ trợ kiểm tra, hướng dẫn sử dụng và xử lý các vấn đề trong phạm vi đã thống nhất."
  }
];

export const blogPosts: BlogPost[] = [
  {
    title: "Thiết kế website doanh nghiệp giá bao nhiêu?",
    description: "Các yếu tố ảnh hưởng đến chi phí làm website doanh nghiệp nhỏ: số trang, giao diện, nội dung và chức năng cần có.",
    date: "2026-08-16",
    slug: "thiet-ke-website-doanh-nghiep-gia-bao-nhieu"
  },
  {
    title: "Landing Page khác website thông thường như thế nào?",
    description: "Landing page tập trung vào một mục tiêu chuyển đổi, còn website thông thường trình bày nhiều nhóm thông tin hơn.",
    date: "2026-08-16",
    slug: "landing-page-khac-website-thong-thuong-nhu-the-nao"
  },
  {
    title: "Website chạy Google Ads cần chuẩn bị những gì?",
    description: "Trước khi chạy quảng cáo, website cần thông tin rõ, CTA dễ thao tác, tốc độ ổn và tracking chuyển đổi cơ bản.",
    date: "2026-08-16",
    slug: "website-chay-google-ads-can-chuan-bi-nhung-gi"
  },
  {
    title: "Chi phí duy trì website mỗi năm gồm những gì?",
    description: "Những khoản thường gặp gồm domain, hosting, bảo trì kỹ thuật, cập nhật nội dung và các công cụ theo nhu cầu.",
    date: "2026-08-16",
    slug: "chi-phi-duy-tri-website-moi-nam-gom-nhung-gi"
  }
];

export const websiteTypes: EstimatorWebsiteType[] = [
  { label: "Landing Page", basePrice: 1500000 },
  { label: "Website giới thiệu", basePrice: 2500000 },
  { label: "Website doanh nghiệp", basePrice: 3500000 },
  { label: "Website bán hàng", basePrice: 5000000 },
  { label: "Website theo yêu cầu", basePrice: null }
];

export const estimatorOptions: EstimatorOption[] = [
  { label: "SEO cơ bản", price: 500000 },
  { label: "Form liên hệ", price: 300000 },
  { label: "Google Maps", price: 0 },
  { label: "Zalo", price: 0 },
  { label: "Google Analytics", price: 200000 },
  { label: "Google Search Console", price: 200000 },
  { label: "Viết nội dung", price: 800000 },
  { label: "Hosting", price: 800000, suffix: "/ năm" },
  { label: "Domain", price: 500000, suffix: "/ năm" }
];

export function formatVnd(value: number) {
  return new Intl.NumberFormat("vi-VN").format(value) + "đ";
}
