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
  subtitle?: string;
  website?: string;
  url?: string;
  category: string;
  type?: string;
  status?: string;
  industry: string;
  technology: string;
  technologies?: string[];
  description: string;
  cardDescription?: string;
  seoDescription?: string;
  scope: string[];
  features?: string[];
  images?: string[];
  gallery?: ProjectGalleryImage[];
  solutions?: ProjectSolution[];
  accent: string;
  preview?: "service" | "cinema" | "bookstore" | "business" | "medical" | "real-estate" | "education" | "portfolio";
  featured?: boolean;
  isDemo?: boolean;
};

export type ProjectGalleryImage = {
  src: string;
  alt: string;
  title: string;
  description: string;
};

export type ProjectSolution = {
  title: string;
  description: string;
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
  content: string[];
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
    subtitle: "Website đặt vé & quản lý rạp chiếu phim",
    category: "Web App",
    type: "Dự án cá nhân / Demo",
    status: "Dự án cá nhân",
    industry: "Rạp chiếu phim",
    technology: "PHP / HTML / CSS / XAMPP",
    technologies: ["PHP", "HTML", "CSS", "XAMPP"],
    description: "Giải pháp website đặt vé rạp chiếu phim kết hợp giao diện khách hàng và hệ thống quản trị. Khách hàng có thể khám phá phim, xem thông tin và lịch chiếu, trong khi quản trị viên quản lý phim, rạp, phòng chiếu, đơn đặt vé và chương trình khuyến mãi trên cùng một hệ thống.",
    cardDescription: "Website đặt vé rạp chiếu phim với giao diện khách hàng, lịch chiếu, quản lý phim, đơn vé và dashboard quản trị.",
    seoDescription: "Cinemax là demo website đặt vé và quản lý rạp chiếu phim với trang phim, lịch chiếu, dashboard, quản lý phim, rạp, đơn đặt vé và khuyến mãi.",
    scope: ["Website xem phim và lịch chiếu trực quan", "Trang chi tiết phim và trailer", "Quản lý phim và thể loại", "Quản lý cụm rạp và phòng chiếu", "Quản lý loại ghế và giá vé", "Quản lý lịch chiếu", "Theo dõi đơn đặt vé và thanh toán", "Quản lý chương trình khuyến mãi", "Dashboard tổng quan hoạt động"],
    features: ["Website xem phim và lịch chiếu trực quan", "Trang chi tiết phim và trailer", "Quản lý phim và thể loại", "Quản lý cụm rạp và phòng chiếu", "Quản lý loại ghế và giá vé", "Quản lý lịch chiếu", "Theo dõi đơn đặt vé và thanh toán", "Quản lý chương trình khuyến mãi", "Dashboard tổng quan hoạt động"],
    images: ["/images/projects/cinemax-project-showcase/docs/project-showcase/09-home-hero-1.png"],
    gallery: [
      { src: "/images/projects/cinemax-project-showcase/docs/project-showcase/09-home-hero-1.png", alt: "Trang chủ đặt vé Cinemax", title: "Trang chủ đặt vé", description: "Giao diện người dùng giúp khách khám phá phim nổi bật và truy cập nhanh vào lịch chiếu." },
      { src: "/images/projects/cinemax-project-showcase/docs/project-showcase/10-home-movies.png", alt: "Danh sách phim đang chiếu Cinemax", title: "Danh sách phim", description: "Các phim đang chiếu được trình bày trực quan để khách dễ chọn nội dung phù hợp." },
      { src: "/images/projects/cinemax-project-showcase/docs/project-showcase/12-movie-detail.png", alt: "Trang chi tiết phim Cinemax", title: "Chi tiết phim", description: "Thông tin phim, thể loại, thời lượng, nội dung và trailer được trình bày rõ ràng trước khi khách đặt vé." },
      { src: "/images/projects/cinemax-project-showcase/docs/project-showcase/07-dashboard.png", alt: "Giao diện dashboard quản trị Cinemax", title: "Dashboard quản trị", description: "Tổng hợp hoạt động vận hành như doanh thu demo, vé bán, phim đang chiếu và đơn hàng mới trên một màn hình." },
      { src: "/images/projects/cinemax-project-showcase/docs/project-showcase/06-movies-admin.png", alt: "Trang quản lý phim Cinemax", title: "Quản lý phim", description: "Quản trị danh sách phim, poster, thể loại, thời lượng và trạng thái để cập nhật nội dung nhanh hơn." },
      { src: "/images/projects/cinemax-project-showcase/docs/project-showcase/05-cinemas.png", alt: "Trang quản lý rạp Cinemax", title: "Quản lý rạp", description: "Quản lý nhiều cụm rạp và phòng chiếu trên cùng hệ thống, phù hợp cho mô hình có nhiều địa điểm." },
      { src: "/images/projects/cinemax-project-showcase/docs/project-showcase/03-schedule.png", alt: "Trang quản lý lịch chiếu Cinemax", title: "Lịch chiếu", description: "Theo dõi và tổ chức lịch chiếu theo rạp, phòng và khung giờ để giảm thao tác vận hành thủ công." },
      { src: "/images/projects/cinemax-project-showcase/docs/project-showcase/02-orders.png", alt: "Trang quản lý đơn đặt vé Cinemax", title: "Đơn đặt vé", description: "Theo dõi đơn hàng và trạng thái thanh toán để đội vận hành nắm được giao dịch phát sinh." },
      { src: "/images/projects/cinemax-project-showcase/docs/project-showcase/01-promotions.png", alt: "Trang quản lý khuyến mãi Cinemax", title: "Khuyến mãi", description: "Quản lý mã giảm giá và thời gian áp dụng cho các chương trình bán vé theo từng giai đoạn." },
      { src: "/images/projects/cinemax-project-showcase/docs/project-showcase/04-seat-pricing.png", alt: "Trang quản lý loại ghế và giá vé Cinemax", title: "Loại ghế & giá vé", description: "Thiết lập loại ghế và giá vé để hệ thống linh hoạt với từng phòng chiếu hoặc chính sách bán hàng." },
      { src: "/images/projects/cinemax-project-showcase/docs/project-showcase/08-genres.png", alt: "Trang quản lý thể loại phim Cinemax", title: "Thể loại phim", description: "Tổ chức thể loại phim có cấu trúc để khách lọc nội dung và quản trị viên cập nhật catalogue dễ hơn." },
      { src: "/images/projects/cinemax-project-showcase/docs/project-showcase/11-home-hero-2.png", alt: "Giao diện hero khác của Cinemax", title: "Hero phim nổi bật", description: "Không gian giới thiệu phim nổi bật giúp website tạo điểm nhấn ngay khi khách truy cập." }
    ],
    solutions: [
      { title: "Giao diện khách hàng", description: "Luồng khám phá phim, xem chi tiết và truy cập lịch chiếu được tổ chức rõ để khách ra quyết định nhanh." },
      { title: "Hệ thống quản trị rạp", description: "Các nghiệp vụ phim, rạp, phòng chiếu, lịch chiếu, đơn vé và khuyến mãi được gom trong dashboard quản trị." },
      { title: "Quản lý vận hành", description: "Dữ liệu phim, lịch chiếu, giá vé và đơn đặt vé được phân nhóm theo nghiệp vụ để giảm sai sót khi cập nhật." },
      { title: "Responsive", description: "Giao diện portfolio hiển thị rõ trên desktop, tablet và điện thoại để khách xem được nhiều màn hình demo." }
    ],
    accent: "#7c3aed",
    preview: "cinema",
    featured: true,
    isDemo: true
  },
  {
    slug: "bookstore",
    name: "Online Bookstore Management System",
    subtitle: "Website bán sách & quản lý nhà sách",
    category: "Website bán hàng",
    type: "Dự án cá nhân / Demo",
    status: "Dự án cá nhân",
    industry: "Bán sách",
    technology: "PHP / MySQL/MariaDB / HTML / CSS / JavaScript / PDO",
    technologies: ["PHP", "MySQL/MariaDB", "HTML", "CSS", "JavaScript", "PDO"],
    description: "Website thương mại điện tử dành cho nhà sách, hỗ trợ khách hàng tìm kiếm, xem và đặt mua sách trực tuyến. Hệ thống đồng thời cung cấp khu vực quản trị để quản lý sản phẩm, tồn kho, đơn hàng, chi nhánh và hoạt động bán hàng tại quầy.",
    cardDescription: "Website bán sách với catalogue, giỏ hàng, đặt hàng và quản trị nhà sách.",
    seoDescription: "Online Bookstore Management System là website bán sách và quản lý nhà sách với catalogue, tìm kiếm, giỏ hàng, đơn hàng, tồn kho chi nhánh, POS và chat hỗ trợ.",
    scope: ["Danh mục sách trực tuyến", "Tìm kiếm và lọc sách", "Chi tiết sản phẩm", "Giỏ hàng và đặt hàng", "Quản lý đơn hàng", "Quản lý tồn kho theo chi nhánh", "Bán hàng tại quầy", "Quản lý khuyến mãi", "Dashboard và báo cáo", "Chat hỗ trợ khách hàng"],
    features: ["Danh mục sách trực tuyến", "Tìm kiếm và lọc sách", "Chi tiết sản phẩm", "Giỏ hàng và đặt hàng", "Quản lý đơn hàng", "Quản lý tồn kho theo chi nhánh", "Bán hàng tại quầy", "Quản lý khuyến mãi", "Dashboard và báo cáo", "Chat hỗ trợ khách hàng"],
    images: ["/images/projects/bookstore-project-showcase/docs/bookstore-project-showcase/02-store-catalog.png"],
    gallery: [
      { src: "/images/projects/bookstore-project-showcase/docs/bookstore-project-showcase/02-store-catalog.png", alt: "Website bán sách Bookstore", title: "Danh mục sách trực tuyến", description: "Khách hàng có thể xem danh sách sách, tìm kiếm và lọc theo danh mục để nhanh chóng tìm đúng sản phẩm." },
      { src: "/images/projects/bookstore-project-showcase/docs/bookstore-project-showcase/03-store-products.png", alt: "Card sản phẩm và giỏ hàng Bookstore", title: "Card sản phẩm", description: "Thông tin giá, tồn kho và nút thêm vào giỏ được đặt ngay trên card để rút ngắn thao tác mua hàng." },
      { src: "/images/projects/bookstore-project-showcase/docs/bookstore-project-showcase/01-admin-pos.png", alt: "Màn hình bán hàng tại quầy Bookstore", title: "Bán hàng tại quầy", description: "Khu vực quản trị hỗ trợ tìm sách, kiểm tra tồn kho theo chi nhánh và tạo đơn cho giao dịch trực tiếp." }
    ],
    solutions: [
      { title: "Giao diện mua sách", description: "Catalogue, bộ lọc và card sản phẩm giúp khách hàng tìm sách và đưa vào giỏ hàng thuận tiện." },
      { title: "Quản trị nhà sách", description: "Đơn hàng, sản phẩm, chi nhánh, khuyến mãi và khách hàng được quản lý tập trung trong hệ thống." },
      { title: "Tồn kho & bán tại quầy", description: "Tồn kho được theo dõi theo chi nhánh, đồng thời hỗ trợ luồng bán hàng tại quầy cho cửa hàng vật lý." },
      { title: "Nền tảng kỹ thuật rõ ràng", description: "PHP, PDO và MySQL/MariaDB được dùng để tổ chức dữ liệu đơn hàng, sản phẩm và tồn kho có cấu trúc." }
    ],
    accent: "#b45309",
    preview: "bookstore",
    featured: true,
    isDemo: true
  },
  {
    slug: "website-quan-ly-nha-tro",
    name: "Website Quản Lý Nhà Trọ",
    subtitle: "Website tìm phòng & hệ thống quản lý cho thuê",
    category: "Web App",
    type: "Dự án cá nhân / Demo",
    status: "Dự án cá nhân",
    industry: "Quản lý nhà trọ và cho thuê phòng",
    technology: "Next.js / TypeScript / Tailwind CSS / Prisma ORM / MySQL",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma ORM", "MySQL", "ExcelJS"],
    description: "Giải pháp quản lý nhà trọ kết hợp website tìm phòng dành cho khách thuê và hệ thống quản trị dành cho chủ nhà. Toàn bộ phòng, khách thuê, hợp đồng, khoản thu và doanh thu được quản lý tập trung.",
    cardDescription: "Website tìm phòng kết hợp dashboard quản lý phòng, khách thuê, hợp đồng và khoản thu.",
    seoDescription: "Website Quản Lý Nhà Trọ là demo hệ thống tìm phòng và quản trị nhà trọ với quản lý phòng, khách thuê, hợp đồng, tiền thuê, doanh thu và xuất Excel.",
    scope: ["Danh sách nhà trọ và phòng", "Bộ lọc khu vực, giá, sức chứa và trạng thái", "Chi tiết phòng và tiện ích", "Gửi yêu cầu xem phòng", "Dashboard quản trị", "Quản lý phòng và hình ảnh", "Quản lý khách thuê", "Quản lý hợp đồng", "Theo dõi tiền thuê hàng tháng", "Báo cáo doanh thu", "Xuất Excel"],
    features: ["Danh sách nhà trọ và phòng", "Bộ lọc khu vực, giá, sức chứa và trạng thái", "Chi tiết phòng và tiện ích", "Gửi yêu cầu xem phòng", "Dashboard quản trị", "Quản lý phòng và hình ảnh", "Quản lý khách thuê", "Quản lý hợp đồng", "Theo dõi tiền thuê hàng tháng", "Báo cáo doanh thu", "Xuất Excel"],
    images: ["/images/projects/rental-room-project-showcase/docs/rental-room-project-showcase/02-rental-room-demo-light.png"],
    gallery: [
      { src: "/images/projects/rental-room-project-showcase/docs/rental-room-project-showcase/02-rental-room-demo-light.png", alt: "Dashboard quản lý nhà trọ bản sáng", title: "Tổng quan giao diện sáng", description: "Ảnh tổng hợp thể hiện website tìm phòng, dashboard quản trị, danh sách phòng, chi tiết phòng và giao diện mobile." },
      { src: "/images/projects/rental-room-project-showcase/docs/rental-room-project-showcase/01-rental-room-demo-dark.png", alt: "Dashboard quản lý nhà trọ bản tối", title: "Tổng quan giao diện tối", description: "Bản demo giao diện tối cho thấy phạm vi quản lý public và admin trong một hệ thống quản lý nhà trọ." }
    ],
    solutions: [
      { title: "Website tìm phòng", description: "Khách thuê có thể xem danh sách phòng, lọc theo nhu cầu và gửi yêu cầu xem phòng ngay trên website." },
      { title: "Quản trị cho chủ nhà", description: "Phòng, hình ảnh, tiện ích, khách thuê, hợp đồng và khoản thu được quản lý tập trung trong dashboard." },
      { title: "Theo dõi doanh thu", description: "Khoản thu tiền trọ theo tháng và báo cáo doanh thu được tổ chức để chủ nhà dễ kiểm tra tình hình vận hành." },
      { title: "Responsive", description: "Các màn hình public và quản trị được trình bày rõ trên desktop, tablet và điện thoại." }
    ],
    accent: "#0f766e",
    preview: "real-estate",
    featured: true,
    isDemo: true
  },
  {
    slug: "fashion-store",
    name: "Fashion Store",
    subtitle: "Website bán hàng thời trang / E-commerce",
    category: "Website bán hàng",
    type: "Dự án cá nhân / Demo",
    status: "Dự án demo",
    industry: "Thời trang",
    technology: "Next.js App Router / TypeScript / Tailwind CSS / Prisma ORM / MySQL",
    technologies: ["Next.js App Router", "TypeScript", "Tailwind CSS", "Prisma ORM", "MySQL"],
    description: "Demo website bán hàng thời trang với trải nghiệm mua sắm hiện đại từ khám phá sản phẩm, lọc theo nhu cầu, xem chi tiết đến giỏ hàng. Khu vực quản trị hỗ trợ theo dõi sản phẩm, đơn hàng, khách hàng và hoạt động bán hàng.",
    cardDescription: "Demo e-commerce thời trang với storefront, bộ lọc, giỏ hàng và dashboard quản trị.",
    seoDescription: "Fashion Store là demo website bán hàng thời trang với homepage, danh mục sản phẩm, bộ lọc, chi tiết sản phẩm, giỏ hàng và dashboard quản trị.",
    scope: ["Homepage bán hàng hiện đại", "Danh mục sản phẩm", "Filter sản phẩm", "Chi tiết sản phẩm", "Chọn màu và kích thước", "Giỏ hàng", "Dashboard quản trị", "Quản lý sản phẩm", "Quản lý đơn hàng", "Quản lý khách hàng", "Báo cáo bán hàng"],
    features: ["Homepage bán hàng hiện đại", "Danh mục sản phẩm", "Filter sản phẩm", "Chi tiết sản phẩm", "Chọn màu và kích thước", "Giỏ hàng", "Dashboard quản trị", "Quản lý sản phẩm", "Quản lý đơn hàng", "Quản lý khách hàng", "Báo cáo bán hàng"],
    images: ["/images/projects/fashion-store-project-showcase/docs/fashion-store-project-showcase/01-fashion-store-full-demo.png"],
    gallery: [
      { src: "/images/projects/fashion-store-project-showcase/docs/fashion-store-project-showcase/01-fashion-store-full-demo.png", alt: "Giao diện Fashion Store", title: "Showcase tổng hợp", description: "Ảnh demo thể hiện storefront, danh mục sản phẩm, chi tiết sản phẩm, giỏ hàng và dashboard quản trị bán hàng trong cùng một trải nghiệm." }
    ],
    solutions: [
      { title: "Storefront bán hàng", description: "Homepage, danh mục, bộ lọc và trang chi tiết giúp khách khám phá sản phẩm thời trang theo nhu cầu." },
      { title: "Luồng giỏ hàng", description: "Màu sắc, kích thước, số lượng và tổng đơn được trình bày rõ để mô phỏng trải nghiệm mua sắm hoàn chỉnh." },
      { title: "Dashboard quản trị", description: "Sản phẩm, đơn hàng, khách hàng và báo cáo được minh họa trong khu vực admin dành cho vận hành bán hàng." },
      { title: "Demo responsive", description: "Project được trình bày như demo giao diện, không mô tả các số liệu trong screenshot là kết quả kinh doanh thật." }
    ],
    accent: "#db2777",
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
    slug: "thiet-ke-website-doanh-nghiep-gia-bao-nhieu",
    content: [
      "Chi phí làm website doanh nghiệp thường phụ thuộc vào số lượng trang, mức độ tùy biến giao diện, nội dung cần chuẩn bị và các chức năng như form, bản đồ hoặc tích hợp riêng.",
      "Một website giới thiệu cơ bản có thể bắt đầu với các trang Trang chủ, Giới thiệu, Dịch vụ và Liên hệ. Khi cần nhiều nhóm dịch vụ, blog, catalogue hoặc quy trình riêng, phạm vi thiết kế và kiểm thử sẽ tăng theo.",
      "Trước khi nhận báo giá, nên xác định mục tiêu chính của website, nhóm khách hàng cần tiếp cận và những hành động muốn khách thực hiện như gọi điện, nhắn Zalo hoặc gửi form."
    ]
  },
  {
    title: "Landing Page khác website thông thường như thế nào?",
    description: "Landing page tập trung vào một mục tiêu chuyển đổi, còn website thông thường trình bày nhiều nhóm thông tin hơn.",
    date: "2026-08-16",
    slug: "landing-page-khac-website-thong-thuong-nhu-the-nao",
    content: [
      "Landing page là một trang tập trung vào một mục tiêu, thường là giới thiệu một dịch vụ, sản phẩm hoặc chiến dịch quảng cáo. Nội dung được sắp xếp để người xem nhanh chóng hiểu lợi ích và thực hiện một CTA rõ ràng.",
      "Website thông thường có nhiều trang và nhiều nhóm thông tin hơn, phù hợp khi doanh nghiệp cần giới thiệu thương hiệu, năng lực, nhiều dịch vụ hoặc nội dung chuyên môn lâu dài.",
      "Lựa chọn giữa hai loại nên dựa trên mục tiêu và ngân sách. Landing page phù hợp để bắt đầu một chiến dịch cụ thể; website nhiều trang phù hợp để xây dựng nền tảng hiện diện lâu dài."
    ]
  },
  {
    title: "Website chạy Google Ads cần chuẩn bị những gì?",
    description: "Trước khi chạy quảng cáo, website cần thông tin rõ, CTA dễ thao tác, tốc độ ổn và tracking chuyển đổi cơ bản.",
    date: "2026-08-16",
    slug: "website-chay-google-ads-can-chuan-bi-nhung-gi",
    content: [
      "Trước khi chạy Google Ads, website cần mô tả rõ dịch vụ, khu vực phục vụ, cách liên hệ và thông tin tạo niềm tin. Người dùng nên tìm thấy câu trả lời cho nhu cầu của họ ngay sau khi truy cập từ quảng cáo.",
      "CTA gọi điện, Zalo hoặc form cần dễ nhìn và thao tác tốt trên điện thoại. Hãy kiểm tra cả nội dung sau khi gửi form để khách biết yêu cầu đã được tiếp nhận hay chưa.",
      "Nên cài tracking cơ bản cho các hành động quan trọng như click gọi, click Zalo và gửi form để đánh giá chất lượng chuyển đổi thay vì chỉ nhìn số lượt click."
    ]
  },
  {
    title: "Chi phí duy trì website mỗi năm gồm những gì?",
    description: "Những khoản thường gặp gồm domain, hosting, bảo trì kỹ thuật, cập nhật nội dung và các công cụ theo nhu cầu.",
    date: "2026-08-16",
    slug: "chi-phi-duy-tri-website-moi-nam-gom-nhung-gi",
    content: [
      "Chi phí duy trì website thường gồm domain, hosting và những công việc phát sinh theo nhu cầu như cập nhật nội dung, kiểm tra form, sửa lỗi hoặc sao lưu dữ liệu.",
      "Domain và hosting có chu kỳ gia hạn khác nhau. Ngoài phí gia hạn, nên dự trù thời gian kiểm tra website sau các lần cập nhật để phát hiện sớm lỗi hiển thị hoặc liên kết.",
      "Nếu không có người phụ trách kỹ thuật, gói bảo trì theo phạm vi rõ ràng có thể giúp việc cập nhật và xử lý lỗi dễ dự đoán hơn."
    ]
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
