import { pricingPlans } from "@/data/site";

export type MenuIcon =
  | "building"
  | "cursor"
  | "target"
  | "shop"
  | "user"
  | "code"
  | "search"
  | "chart"
  | "console"
  | "ads"
  | "speed"
  | "devices"
  | "edit"
  | "tools"
  | "globe"
  | "lock"
  | "backup"
  | "upgrade";

export type MenuItem = {
  title: string;
  description?: string;
  href: string;
  icon?: MenuIcon;
};

export type MenuGroup = {
  heading: string;
  items: MenuItem[];
};

export type MainNavigationItem = {
  label: string;
  href: string;
  menu?: "services" | "solutions" | "projects";
  activeMatch: string[];
};

const featuredPlan = pricingPlans.find((plan) => plan.popular);

export const mainNavigation: MainNavigationItem[] = [
  { label: "Trang chủ", href: "/", activeMatch: ["/"] },
  { label: "Dịch vụ", href: "/dich-vu", menu: "services", activeMatch: ["/dich-vu"] },
  { label: "Giải pháp", href: "/dich-vu", menu: "solutions", activeMatch: [] },
  { label: "Dự án", href: "/du-an", menu: "projects", activeMatch: ["/du-an"] },
  { label: "Bảng giá", href: "/bang-gia", activeMatch: ["/bang-gia"] },
  { label: "Blog", href: "/blog", activeMatch: ["/blog"] },
  { label: "Giới thiệu", href: "/gioi-thieu", activeMatch: ["/gioi-thieu"] }
];

export const serviceMenuGroups: MenuGroup[] = [
  {
    heading: "THIẾT KẾ WEBSITE",
    items: [
      { title: "Website doanh nghiệp", description: "Website giới thiệu công ty, dịch vụ và năng lực.", href: "/dich-vu/website-doanh-nghiep", icon: "building" },
      { title: "Website dịch vụ", description: "Tối ưu Call, Zalo, form và khách hàng tiềm năng.", href: "/dich-vu/website-dich-vu", icon: "cursor" },
      { title: "Landing Page", description: "Trang đích dành cho quảng cáo và chiến dịch.", href: "/dich-vu/landing-page", icon: "target" },
      { title: "Website bán hàng", description: "Website giới thiệu và bán sản phẩm trực tuyến.", href: "/dich-vu/website-ban-hang", icon: "shop" },
      { title: "Website cá nhân", description: "Portfolio cho freelancer, chuyên gia và cá nhân.", href: "/dich-vu/website-ca-nhan", icon: "user" },
      { title: "Website theo yêu cầu", description: "Thiết kế chức năng theo nhu cầu riêng.", href: "/dich-vu/website-theo-yeu-cau", icon: "code" }
    ]
  },
  {
    heading: "TỐI ƯU WEBSITE",
    items: [
      { title: "SEO kỹ thuật", description: "Tối ưu cấu trúc, metadata, sitemap và nền tảng SEO.", href: "/dich-vu/seo-ky-thuat", icon: "search" },
      { title: "Google Analytics", description: "Thiết lập đo lường lượt truy cập website.", href: "/dich-vu/google-analytics", icon: "chart" },
      { title: "Google Search Console", description: "Theo dõi khả năng hiển thị website trên Google.", href: "/dich-vu/google-search-console", icon: "console" },
      { title: "Google Ads Tracking", description: "Theo dõi cuộc gọi, form và hành động chuyển đổi.", href: "/dich-vu/google-ads-tracking", icon: "ads" },
      { title: "Tối ưu tốc độ", description: "Cải thiện trải nghiệm tải trang.", href: "/dich-vu/toi-uu-toc-do", icon: "speed" },
      { title: "Responsive", description: "Tối ưu giao diện điện thoại, tablet và desktop.", href: "/dich-vu/responsive", icon: "devices" }
    ]
  },
  {
    heading: "HỖ TRỢ & VẬN HÀNH",
    items: [
      { title: "Chỉnh sửa website", description: "Sửa giao diện, nội dung hoặc lỗi website hiện tại.", href: "/dich-vu/chinh-sua-website", icon: "edit" },
      { title: "Bảo trì website", description: "Theo dõi và xử lý các vấn đề kỹ thuật.", href: "/dich-vu/bao-tri-website", icon: "tools" },
      { title: "Domain & Hosting", description: "Tư vấn domain và hosting phù hợp.", href: "/dich-vu/domain-hosting", icon: "globe" },
      { title: "SSL & HTTPS", description: "Hỗ trợ cấu hình bảo mật HTTPS.", href: "/dich-vu/ssl-https", icon: "lock" },
      { title: "Sao lưu website", description: "Tư vấn backup dữ liệu và source code.", href: "/dich-vu/sao-luu-website", icon: "backup" },
      { title: "Nâng cấp website", description: "Cải tiến giao diện hoặc mở rộng chức năng.", href: "/dich-vu/nang-cap-website", icon: "upgrade" }
    ]
  }
];

export const serviceFeaturedCard = {
  eyebrow: "DỊCH VỤ NỔI BẬT",
  title: "Website cho doanh nghiệp nhỏ",
  description:
    "Gói website phù hợp cho doanh nghiệp, hộ kinh doanh và người bán dịch vụ cần một website chuyên nghiệp để giới thiệu thương hiệu và tìm kiếm khách hàng.",
  points: ["Responsive", "SEO nền tảng", "Call & Zalo"],
  cta: "Xem chi tiết",
  href: "/dich-vu/website-doanh-nghiep",
  price: featuredPlan?.price
};

export const serviceBottomLinks: MenuItem[] = [
  { title: "Dự án thực tế", description: "Xem các website đã được triển khai", href: "/du-an" },
  { title: "Bảng giá", description: "Tham khảo chi phí trước khi thực hiện", href: "/bang-gia" },
  { title: "Nhận tư vấn", description: "Mô tả nhu cầu để được tư vấn", href: "/lien-he" }
];

export const solutionMenuGroups: MenuGroup[] = [
  {
    heading: "Theo mục tiêu",
    items: [
      { title: "Website giới thiệu doanh nghiệp", href: "/dich-vu/website-doanh-nghiep" },
      { title: "Website chạy Google Ads", href: "/dich-vu/landing-page" },
      { title: "Website tìm kiếm khách hàng", href: "/dich-vu/website-dich-vu" },
      { title: "Website bán hàng", href: "/dich-vu/website-ban-hang" },
      { title: "Website thương hiệu cá nhân", href: "/dich-vu/website-ca-nhan" }
    ]
  },
  {
    heading: "Theo ngành nghề",
    items: [
      { title: "Dịch vụ sửa chữa", href: "/dich-vu/website-dich-vu" },
      { title: "Bất động sản", href: "/dich-vu/landing-page" },
      { title: "Nhà hàng & F&B", href: "/dich-vu/website-dich-vu" },
      { title: "Giáo dục", href: "/dich-vu/website-doanh-nghiep" },
      { title: "Làm đẹp", href: "/dich-vu/website-dich-vu" },
      { title: "Doanh nghiệp", href: "/dich-vu/website-doanh-nghiep" }
    ]
  }
];

export const projectMenuItems: MenuItem[] = [
  { title: "Tất cả dự án", href: "/du-an" },
  { title: "Website dịch vụ", href: "/du-an" },
  { title: "Website doanh nghiệp", href: "/du-an" },
  { title: "Landing Page", href: "/du-an" }
];

export const projectFeaturedCard = {
  title: "Website sửa điện lạnh tại nhà",
  description: "Dự án thực tế đã triển khai.",
  cta: "Xem Case Study",
  href: "/du-an/website-sua-dien-lanh-tai-nha"
};

export const mobileNavigationGroups = [
  {
    heading: "Thiết kế website",
    items: [
      { title: "Website doanh nghiệp", href: "/dich-vu/website-doanh-nghiep" },
      { title: "Website dịch vụ", href: "/dich-vu/website-dich-vu" },
      { title: "Landing Page", href: "/dich-vu/landing-page" },
      { title: "Website bán hàng", href: "/dich-vu/website-ban-hang" },
      { title: "Website cá nhân", href: "/dich-vu/website-ca-nhan" },
      { title: "Website theo yêu cầu", href: "/dich-vu/website-theo-yeu-cau" },
      { title: "Xem tất cả dịch vụ", href: "/dich-vu" }
    ]
  },
  {
    heading: "Tối ưu website",
    items: [
      { title: "SEO kỹ thuật", href: "/dich-vu/seo-ky-thuat" },
      { title: "Google Analytics", href: "/dich-vu/google-analytics" },
      { title: "Google Search Console", href: "/dich-vu/google-search-console" },
      { title: "Google Ads Tracking", href: "/dich-vu/google-ads-tracking" },
      { title: "Tối ưu tốc độ", href: "/dich-vu/toi-uu-toc-do" },
      { title: "Responsive", href: "/dich-vu/responsive" }
    ]
  },
  {
    heading: "Hỗ trợ & vận hành",
    items: [
      { title: "Chỉnh sửa website", href: "/dich-vu/chinh-sua-website" },
      { title: "Bảo trì website", href: "/dich-vu/bao-tri-website" },
      { title: "Domain & Hosting", href: "/dich-vu/domain-hosting" },
      { title: "SSL & HTTPS", href: "/dich-vu/ssl-https" },
      { title: "Sao lưu website", href: "/dich-vu/sao-luu-website" },
      { title: "Nâng cấp website", href: "/dich-vu/nang-cap-website" }
    ]
  },
  {
    heading: "Giải pháp",
    items: [
      { title: "Website chạy quảng cáo", href: "/dich-vu/landing-page" },
      { title: "Website tìm khách hàng", href: "/dich-vu/website-dich-vu" },
      { title: "Website bán hàng", href: "/dich-vu/website-ban-hang" },
      { title: "Website thương hiệu cá nhân", href: "/dich-vu/website-ca-nhan" }
    ]
  },
  {
    heading: "Dự án",
    items: [
      { title: "Tất cả dự án", href: "/du-an" },
      { title: "Case study sửa điện lạnh", href: "/du-an/website-sua-dien-lanh-tai-nha" }
    ]
  }
];

export const mobileSingleLinks: MenuItem[] = [
  { title: "Trang chủ", href: "/" },
  { title: "Bảng giá", href: "/bang-gia" },
  { title: "Blog", href: "/blog" },
  { title: "Giới thiệu", href: "/gioi-thieu" }
];
