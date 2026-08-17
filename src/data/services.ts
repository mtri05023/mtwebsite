export type ServiceCategory = "THIẾT KẾ WEBSITE" | "TỐI ƯU WEBSITE" | "HỖ TRỢ & VẬN HÀNH";

export type ServiceIcon =
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

export type ServiceDetail = {
  slug: string;
  title: string;
  shortTitle: string;
  category: ServiceCategory;
  description: string;
  heroDescription: string;
  icon: ServiceIcon;
  image?: string;
  whatIs: string[];
  suitableFor: string[];
  deliverables: string[];
  process: string[];
  pricing: string;
  faq: { question: string; answer: string }[];
  relatedServices: string[];
  metadata: {
    title: string;
    description: string;
  };
  formType: string;
  primaryCta?: string;
  secondaryHref?: string;
  secondaryCta?: string;
};

export const serviceDetails: ServiceDetail[] = [
  {
    slug: "website-doanh-nghiep",
    title: "Website doanh nghiệp",
    shortTitle: "Doanh nghiệp",
    category: "THIẾT KẾ WEBSITE",
    description: "Website giới thiệu công ty, năng lực, sản phẩm/dịch vụ và thông tin liên hệ một cách chuyên nghiệp.",
    heroDescription: "MT WEBSITE xây dựng website doanh nghiệp rõ ràng, responsive và có nền tảng SEO cơ bản để khách hàng dễ tìm hiểu về công ty của bạn.",
    icon: "building",
    image: "/images/templates/healthcare-demo.png",
    whatIs: [
      "Website doanh nghiệp là hồ sơ online giúp khách hàng hiểu bạn là ai, đang cung cấp sản phẩm/dịch vụ gì và có thể liên hệ bằng cách nào.",
      "Trang thường bao gồm giới thiệu, dịch vụ, năng lực, dự án, đối tác, tin tức, tuyển dụng nếu cần và trang liên hệ.",
      "Mục tiêu không chỉ là có mặt trên Internet, mà là tạo cảm giác đáng tin cậy khi khách hàng tìm kiếm doanh nghiệp."
    ],
    suitableFor: ["Công ty", "SME", "Startup", "Doanh nghiệp cần xây dựng hình ảnh online"],
    deliverables: ["Cấu trúc trang giới thiệu doanh nghiệp", "Trang sản phẩm/dịch vụ", "Khu vực năng lực, dự án hoặc đối tác", "Trang liên hệ có form, gọi điện hoặc Zalo", "Responsive điện thoại/tablet/desktop", "Title, meta description và heading cơ bản"],
    process: ["Tiếp nhận thông tin doanh nghiệp", "Tư vấn cấu trúc nội dung", "Thiết kế giao diện chính", "Phát triển website responsive", "Kiểm tra và bàn giao"],
    pricing: "Chi phí phụ thuộc số trang, nội dung và mức độ tùy chỉnh. Có thể tham khảo nhóm website giới thiệu/doanh nghiệp trong bảng giá.",
    faq: [
      { question: "Website doanh nghiệp cần bao nhiêu trang?", answer: "Thông thường cần trang chủ, giới thiệu, dịch vụ/sản phẩm, dự án hoặc năng lực và liên hệ. Số trang có thể điều chỉnh theo quy mô doanh nghiệp." },
      { question: "Có hỗ trợ SEO không?", answer: "Có hỗ trợ SEO nền tảng như title, meta description, heading, sitemap và cấu trúc nội dung cơ bản." },
      { question: "Có làm responsive không?", answer: "Có. Website được kiểm tra trên điện thoại, tablet và desktop." }
    ],
    relatedServices: ["website-dich-vu", "seo-ky-thuat", "google-search-console"],
    metadata: {
      title: "Thiết kế Website Doanh nghiệp | MT WEBSITE",
      description: "Thiết kế website giới thiệu doanh nghiệp chuyên nghiệp, responsive, dễ quản lý và hỗ trợ SEO cơ bản."
    },
    formType: "Website giới thiệu",
    primaryCta: "Tư vấn website doanh nghiệp"
  },
  {
    slug: "website-dich-vu",
    title: "Website dịch vụ",
    shortTitle: "Dịch vụ",
    category: "THIẾT KẾ WEBSITE",
    description: "Website tập trung giới thiệu dịch vụ, CTA gọi/Zalo, form tư vấn và khả năng tạo khách hàng tiềm năng.",
    heroDescription: "Phù hợp cho dịch vụ địa phương hoặc đội nhóm cần website rõ dịch vụ, dễ liên hệ và hỗ trợ chạy quảng cáo.",
    icon: "cursor",
    image: "/images/projects/suadienlanh-home.png",
    whatIs: [
      "Website dịch vụ giúp khách hàng hiểu nhanh bạn đang giải quyết vấn đề gì, khu vực phục vụ ở đâu và nên liên hệ qua kênh nào.",
      "Nội dung thường được chia theo từng dịch vụ để khách dễ đọc và để chạy quảng cáo hiệu quả hơn.",
      "MT WEBSITE ưu tiên CTA gọi điện, Zalo và form tư vấn rõ ràng, đặc biệt trên mobile."
    ],
    suitableFor: ["Dịch vụ sửa chữa", "Dịch vụ địa phương", "Đội nhóm tư vấn", "Hộ kinh doanh", "Doanh nghiệp nhỏ"],
    deliverables: ["Trang giới thiệu dịch vụ", "Landing page theo nhóm dịch vụ khi cần", "Nút gọi nhanh và Zalo", "Form tư vấn", "Google Maps nếu phù hợp", "Tracking hành động liên hệ"],
    process: ["Nắm dịch vụ và khu vực phục vụ", "Xây cấu trúc nội dung theo nhu cầu tìm kiếm", "Thiết kế CTA và form liên hệ", "Phát triển responsive", "Kiểm tra trước khi chạy quảng cáo"],
    pricing: "Chi phí tùy số lượng dịch vụ, số trang landing và nhu cầu tracking quảng cáo.",
    faq: [
      { question: "Website dịch vụ có phù hợp chạy Google Ads không?", answer: "Có. Website có thể bố trí CTA, form và tracking để hỗ trợ đo lường hành động sau khi khách bấm quảng cáo." },
      { question: "Có thể xem dự án thực tế không?", answer: "Có thể tham khảo website sửa điện lạnh tại nhà đã triển khai trong portfolio." },
      { question: "Có cần nhiều landing page không?", answer: "Tùy số nhóm dịch vụ. Nếu mỗi dịch vụ có nhu cầu tìm kiếm riêng, landing page riêng sẽ giúp trình bày rõ hơn." }
    ],
    relatedServices: ["landing-page", "google-ads-tracking", "google-analytics"],
    metadata: {
      title: "Thiết kế Website Dịch vụ | MT WEBSITE",
      description: "Thiết kế website dịch vụ tối ưu CTA gọi điện, Zalo, form tư vấn và hỗ trợ triển khai quảng cáo."
    },
    formType: "Website phục vụ quảng cáo",
    primaryCta: "Tư vấn website dịch vụ",
    secondaryHref: "/du-an/website-sua-dien-lanh-tai-nha",
    secondaryCta: "Xem dự án thực tế"
  },
  {
    slug: "landing-page",
    title: "Landing Page",
    shortTitle: "Landing Page",
    category: "THIẾT KẾ WEBSITE",
    description: "Trang đích tập trung cho một sản phẩm, một dịch vụ hoặc một chiến dịch quảng cáo.",
    heroDescription: "Landing Page giúp khách tập trung vào một thông điệp chính và một hành động chính như gọi điện, gửi form hoặc chat Zalo.",
    icon: "target",
    image: "/images/templates/service-suadienlanh.png",
    whatIs: [
      "Landing Page là một trang độc lập được thiết kế để phục vụ một mục tiêu cụ thể.",
      "Thay vì trình bày quá nhiều thông tin, landing page tập trung vào hero, điểm khác biệt, lợi ích, bằng chứng nếu có, CTA, form và tracking.",
      "Đây là lựa chọn phổ biến khi chạy Google Ads, Facebook Ads hoặc một chiến dịch ra mắt sản phẩm/dịch vụ."
    ],
    suitableFor: ["Người chạy Google Ads", "Chiến dịch Facebook Ads", "Dịch vụ cần nhận tư vấn", "Sản phẩm cần giới thiệu nhanh"],
    deliverables: ["Hero rõ thông điệp", "USP và lợi ích", "CTA chính", "Form tư vấn", "Khu vực bằng chứng nếu có", "Tracking click/form khi cần"],
    process: ["Xác định mục tiêu chuyển đổi", "Sắp xếp nội dung landing page", "Thiết kế giao diện", "Gắn form và CTA", "Kiểm tra mobile và tracking"],
    pricing: "Landing page thường có chi phí dễ bắt đầu hơn website nhiều trang. Chi phí cụ thể phụ thuộc nội dung và tracking.",
    faq: [
      { question: "Landing page có khác website thường không?", answer: "Có. Landing page tập trung vào một mục tiêu, còn website thường có nhiều trang và nhiều nhóm nội dung hơn." },
      { question: "Có gắn form và Zalo được không?", answer: "Có thể gắn form, nút gọi nhanh, Zalo và tracking hành động liên hệ." },
      { question: "Landing page có cần SEO không?", answer: "Có thể làm SEO nền tảng, nhưng landing page thường phục vụ quảng cáo nhiều hơn SEO dài hạn." }
    ],
    relatedServices: ["website-dich-vu", "google-ads-tracking", "google-analytics"],
    metadata: {
      title: "Thiết kế Landing Page | MT WEBSITE",
      description: "Thiết kế Landing Page cho sản phẩm, dịch vụ và chiến dịch quảng cáo với CTA rõ ràng, responsive và tracking cơ bản."
    },
    formType: "Website phục vụ quảng cáo"
  },
  {
    slug: "website-ban-hang",
    title: "Website bán hàng",
    shortTitle: "Bán hàng",
    category: "THIẾT KẾ WEBSITE",
    description: "Website trình bày sản phẩm, danh mục, giỏ hàng, đặt hàng và quản lý sản phẩm tùy nhu cầu.",
    heroDescription: "MT WEBSITE xây dựng website bán hàng phù hợp cho shop nhỏ, hộ kinh doanh hoặc demo hệ thống bán hàng có quản lý sản phẩm.",
    icon: "shop",
    image: "/images/projects/bookstore.png",
    whatIs: [
      "Website bán hàng giúp khách xem sản phẩm, đọc thông tin chi tiết, tìm kiếm, thêm giỏ hàng và gửi đơn đặt hàng.",
      "Với nhu cầu đơn giản, website có thể tập trung trưng bày sản phẩm và nhận liên hệ. Với nhu cầu cao hơn, có thể phát triển thêm quản lý đơn và sản phẩm.",
      "Bookstore là ví dụ demo cho mô hình sản phẩm, giỏ hàng, đặt hàng và quản lý."
    ],
    suitableFor: ["Shop nhỏ", "Hộ kinh doanh", "Người bán sản phẩm online", "Dự án cần demo bán hàng"],
    deliverables: ["Danh mục sản phẩm", "Trang chi tiết sản phẩm", "Tìm kiếm", "Giỏ hàng", "Đặt hàng", "Quản lý sản phẩm khi có phạm vi phù hợp"],
    process: ["Khảo sát nhóm sản phẩm", "Tư vấn luồng mua hàng", "Thiết kế danh mục và chi tiết", "Phát triển chức năng cần thiết", "Kiểm tra đặt hàng trên mobile"],
    pricing: "Chi phí phụ thuộc số chức năng như giỏ hàng, đặt hàng, quản trị sản phẩm và tích hợp thanh toán nếu có.",
    faq: [
      { question: "Website bán hàng có cần thanh toán online không?", answer: "Không bắt buộc. Có thể bắt đầu bằng form đặt hàng hoặc Zalo, sau đó mở rộng thanh toán khi cần." },
      { question: "Có trang quản lý sản phẩm không?", answer: "Có thể làm nếu phạm vi dự án yêu cầu quản trị sản phẩm." },
      { question: "Có dùng được trên điện thoại không?", answer: "Có. Giao diện sản phẩm, giỏ hàng và đặt hàng cần được tối ưu mobile." }
    ],
    relatedServices: ["responsive", "toi-uu-toc-do", "google-analytics"],
    metadata: {
      title: "Thiết kế Website Bán hàng | MT WEBSITE",
      description: "Thiết kế website bán hàng có danh mục sản phẩm, chi tiết, giỏ hàng, đặt hàng và giao diện quản lý theo nhu cầu."
    },
    formType: "Website bán hàng"
  },
  {
    slug: "website-ca-nhan",
    title: "Website cá nhân",
    shortTitle: "Cá nhân",
    category: "THIẾT KẾ WEBSITE",
    description: "Portfolio, CV online hoặc website thương hiệu cá nhân cho người làm dịch vụ chuyên môn.",
    heroDescription: "Website cá nhân giúp bạn giới thiệu hồ sơ, kinh nghiệm, dịch vụ, dự án và kênh liên hệ chuyên nghiệp hơn.",
    icon: "user",
    whatIs: [
      "Website cá nhân là không gian riêng để trình bày năng lực, phong cách làm việc và những dự án bạn đã thực hiện.",
      "Khác với mạng xã hội, website cho phép bạn kiểm soát cấu trúc thông tin và tạo một hồ sơ online nghiêm túc.",
      "Trang có thể bao gồm giới thiệu, CV, dịch vụ, portfolio, bài viết và form liên hệ."
    ],
    suitableFor: ["Freelancer", "Designer", "Developer", "Photographer", "Chuyên gia", "Người làm dịch vụ cá nhân"],
    deliverables: ["Trang giới thiệu bản thân", "Khu vực kinh nghiệm hoặc kỹ năng", "Portfolio/dự án", "Dịch vụ cung cấp", "Form liên hệ", "Responsive"],
    process: ["Xác định mục tiêu thương hiệu cá nhân", "Sắp xếp hồ sơ và dự án", "Thiết kế phong cách giao diện", "Phát triển website", "Hướng dẫn cập nhật nội dung"],
    pricing: "Chi phí tùy số trang, mức độ cá nhân hóa giao diện và nội dung cần trình bày.",
    faq: [
      { question: "Website cá nhân có cần blog không?", answer: "Không bắt buộc. Blog phù hợp nếu bạn muốn chia sẻ chuyên môn hoặc xây dựng nội dung dài hạn." },
      { question: "Có thể làm portfolio dự án không?", answer: "Có. Portfolio là phần quan trọng với freelancer, designer, developer hoặc photographer." },
      { question: "Có thể dùng domain riêng không?", answer: "Có thể dùng domain riêng và được hỗ trợ cấu hình khi cần." }
    ],
    relatedServices: ["domain-hosting", "seo-ky-thuat", "responsive"],
    metadata: {
      title: "Thiết kế Website Cá nhân | MT WEBSITE",
      description: "Thiết kế website cá nhân, portfolio và CV online cho freelancer, chuyên gia và người làm dịch vụ."
    },
    formType: "Website giới thiệu"
  },
  {
    slug: "website-theo-yeu-cau",
    title: "Website theo yêu cầu",
    shortTitle: "Theo yêu cầu",
    category: "THIẾT KẾ WEBSITE",
    description: "Website hoặc web app có nghiệp vụ riêng như tài khoản, phân quyền, dashboard, booking hoặc quản lý dữ liệu.",
    heroDescription: "Dịch vụ phù hợp khi website của bạn cần chức năng riêng, không chỉ là trang giới thiệu thông thường.",
    icon: "code",
    image: "/images/templates/webapp-dashboard.png",
    whatIs: [
      "Website theo yêu cầu là dự án được thiết kế theo nghiệp vụ cụ thể của bạn.",
      "Ví dụ có thể gồm đăng nhập, tài khoản, phân quyền, dashboard, quản lý dữ liệu, workflow, booking hoặc chức năng riêng.",
      "MT WEBSITE sẽ khảo sát phạm vi trước khi báo giá, không cam kết chức năng khi chưa làm rõ yêu cầu."
    ],
    suitableFor: ["Doanh nghiệp có quy trình riêng", "Dự án cần dashboard", "Hệ thống booking", "Website cần đăng nhập", "Ứng dụng quản lý dữ liệu"],
    deliverables: ["Phân tích yêu cầu", "Luồng chức năng", "Thiết kế giao diện nghiệp vụ", "Phát triển chức năng", "Kiểm tra dữ liệu và thao tác", "Bàn giao theo phạm vi đã thống nhất"],
    process: ["Tiếp nhận yêu cầu sơ bộ", "Khảo sát nghiệp vụ", "Đề xuất phạm vi", "Báo giá và timeline", "Phát triển và kiểm thử"],
    pricing: "Dịch vụ này cần báo giá theo phạm vi vì mỗi hệ thống có nghiệp vụ và độ phức tạp khác nhau.",
    faq: [
      { question: "Có báo giá ngay được không?", answer: "Cần nắm phạm vi chức năng trước. Các chức năng riêng nên được mô tả rõ để báo giá hợp lý." },
      { question: "Có làm dashboard quản lý không?", answer: "Có thể làm dashboard nếu nằm trong phạm vi yêu cầu." },
      { question: "Có thể phát triển theo từng giai đoạn không?", answer: "Có. Với dự án phức tạp nên chia giai đoạn để giảm rủi ro và dễ kiểm tra." }
    ],
    relatedServices: ["responsive", "google-analytics", "bao-tri-website"],
    metadata: {
      title: "Thiết kế Website Theo Yêu cầu | MT WEBSITE",
      description: "Phát triển website theo yêu cầu với chức năng riêng, dashboard, quản lý dữ liệu và workflow theo phạm vi đã thống nhất."
    },
    formType: "Website theo yêu cầu",
    primaryCta: "Gửi yêu cầu để báo giá"
  },
  {
    slug: "seo-ky-thuat",
    title: "SEO kỹ thuật",
    shortTitle: "SEO kỹ thuật",
    category: "TỐI ƯU WEBSITE",
    description: "Tối ưu nền tảng kỹ thuật để công cụ tìm kiếm dễ thu thập, hiểu và lập chỉ mục website.",
    heroDescription: "SEO kỹ thuật giúp website có cấu trúc rõ hơn cho Google, nhưng không cam kết thứ hạng hay Top 1.",
    icon: "search",
    whatIs: [
      "SEO kỹ thuật là phần nền tảng giúp công cụ tìm kiếm thu thập và hiểu nội dung website thuận lợi hơn.",
      "Công việc có thể gồm title, meta description, heading, canonical, sitemap, robots.txt, URL, internal link cơ bản và structured data khi phù hợp.",
      "Dịch vụ này tập trung xử lý lỗi kỹ thuật cơ bản và khả năng index, không hứa hẹn vị trí xếp hạng."
    ],
    suitableFor: ["Website mới hoàn thiện", "Website chưa index tốt", "Website cần rà soát SEO nền tảng", "Doanh nghiệp chuẩn bị làm nội dung SEO"],
    deliverables: ["Kiểm tra title/meta/heading", "Canonical", "Sitemap và robots.txt", "URL và internal link cơ bản", "Structured data khi phù hợp", "Kiểm tra indexability"],
    process: ["Kiểm tra hiện trạng", "Liệt kê vấn đề kỹ thuật", "Ưu tiên hạng mục cần xử lý", "Thực hiện tối ưu", "Bàn giao ghi chú sau kiểm tra"],
    pricing: "Chi phí tùy quy mô website và số lỗi cần xử lý.",
    faq: [
      { question: "SEO kỹ thuật có đảm bảo lên Top Google không?", answer: "Không. SEO kỹ thuật là nền tảng hỗ trợ thu thập và hiểu nội dung, không cam kết thứ hạng." },
      { question: "Có tạo sitemap không?", answer: "Có thể kiểm tra hoặc cấu hình sitemap phù hợp với website." },
      { question: "Có cần Search Console không?", answer: "Nên có để theo dõi index, hiệu suất tìm kiếm và lỗi cơ bản từ Google." }
    ],
    relatedServices: ["google-search-console", "google-analytics", "toi-uu-toc-do"],
    metadata: {
      title: "Dịch vụ SEO Kỹ thuật Website | MT WEBSITE",
      description: "Tối ưu SEO kỹ thuật cho website: title, meta, heading, canonical, sitemap, robots.txt, indexability và lỗi nền tảng."
    },
    formType: "Chưa xác định"
  },
  {
    slug: "google-analytics",
    title: "Google Analytics",
    shortTitle: "Google Analytics",
    category: "TỐI ƯU WEBSITE",
    description: "Cài đặt và kiểm tra GA4 để theo dõi lượt truy cập, nguồn truy cập và hành vi cơ bản trên website.",
    heroDescription: "Google Analytics giúp bạn biết khách đến từ đâu và họ tương tác với website như thế nào.",
    icon: "chart",
    whatIs: [
      "Google Analytics GA4 là công cụ đo lường giúp theo dõi lượt truy cập, nguồn truy cập và hành vi cơ bản trên website.",
      "Dữ liệu này giúp bạn hiểu trang nào được xem nhiều, người dùng đến từ kênh nào và CTA nào cần được quan tâm.",
      "MT WEBSITE hỗ trợ cài đặt, kiểm tra tracking và cấu hình event phù hợp ở mức cần thiết."
    ],
    suitableFor: ["Website mới", "Website chạy quảng cáo", "Doanh nghiệp muốn đo lường", "Website có nhiều CTA"],
    deliverables: ["Cài GA4", "Kiểm tra page view", "Theo dõi nguồn truy cập", "Event phù hợp", "Kiểm tra dữ liệu cơ bản", "Hướng dẫn xem báo cáo cơ bản"],
    process: ["Kiểm tra website", "Tạo hoặc nhận tài khoản GA4", "Gắn mã đo lường", "Kiểm tra dữ liệu", "Bàn giao hướng dẫn"],
    pricing: "Chi phí tùy việc chỉ cài đặt cơ bản hay cần cấu hình event chi tiết.",
    faq: [
      { question: "GA4 cho biết điều gì?", answer: "GA4 giúp xem lượt truy cập, nguồn truy cập, trang được xem và một số hành vi quan trọng." },
      { question: "Có đo click Zalo được không?", answer: "Có thể cấu hình event click Zalo nếu website cho phép gắn tracking." },
      { question: "Dữ liệu có hiện ngay không?", answer: "Một số dữ liệu realtime có thể thấy sớm, báo cáo đầy đủ thường cần thêm thời gian xử lý." }
    ],
    relatedServices: ["google-ads-tracking", "google-search-console", "seo-ky-thuat"],
    metadata: {
      title: "Cài đặt Google Analytics GA4 | MT WEBSITE",
      description: "Cài đặt Google Analytics GA4, kiểm tra tracking, page view, nguồn truy cập, hành vi cơ bản và event phù hợp."
    },
    formType: "Chưa xác định"
  },
  {
    slug: "google-search-console",
    title: "Google Search Console",
    shortTitle: "Search Console",
    category: "TỐI ƯU WEBSITE",
    description: "Xác minh website, gửi sitemap và theo dõi tình trạng hiển thị website trên Google.",
    heroDescription: "Search Console giúp bạn biết Google đang index website ra sao, trang nào có lỗi và truy vấn nào tạo lượt hiển thị.",
    icon: "console",
    whatIs: [
      "Google Search Console là công cụ theo dõi sự hiện diện của website trên Google Search.",
      "Bạn có thể xem hiệu suất tìm kiếm, query, page, tình trạng index và các lỗi cơ bản.",
      "Dịch vụ này hỗ trợ xác minh website, gửi sitemap và hướng dẫn theo dõi dữ liệu, không hứa tăng thứ hạng."
    ],
    suitableFor: ["Website mới", "Website làm SEO", "Website cần kiểm tra index", "Doanh nghiệp muốn theo dõi tìm kiếm"],
    deliverables: ["Xác minh website", "Gửi sitemap", "Kiểm tra index", "Theo dõi hiệu suất tìm kiếm", "Kiểm tra lỗi index cơ bản", "Hướng dẫn đọc dữ liệu chính"],
    process: ["Xác định phương thức xác minh", "Kết nối Search Console", "Gửi sitemap", "Kiểm tra coverage/index", "Bàn giao ghi chú theo dõi"],
    pricing: "Chi phí phụ thuộc vào việc chỉ cài đặt cơ bản hay cần rà soát lỗi index hiện có.",
    faq: [
      { question: "Search Console có làm website lên hạng không?", answer: "Không trực tiếp. Đây là công cụ theo dõi và phát hiện vấn đề, không phải công cụ cam kết tăng thứ hạng." },
      { question: "Có gửi sitemap được không?", answer: "Có. Sitemap giúp Google có danh sách URL cần thu thập." },
      { question: "Có xem được khách tìm từ khóa gì không?", answer: "Có thể xem query tạo hiển thị/click trong phạm vi dữ liệu Google cung cấp." }
    ],
    relatedServices: ["seo-ky-thuat", "google-analytics", "toi-uu-toc-do"],
    metadata: {
      title: "Cài đặt Google Search Console | MT WEBSITE",
      description: "Xác minh Google Search Console, gửi sitemap, kiểm tra index, theo dõi query, page và lỗi index cơ bản."
    },
    formType: "Chưa xác định"
  },
  {
    slug: "google-ads-tracking",
    title: "Google Ads Tracking",
    shortTitle: "Ads Tracking",
    category: "TỐI ƯU WEBSITE",
    description: "Theo dõi hành động quan trọng như gọi điện, click Zalo, gửi form, click CTA và conversion.",
    heroDescription: "Tracking giúp biết quảng cáo có tạo ra hành động thực hay chỉ tạo lượt click vào website.",
    icon: "ads",
    whatIs: [
      "Google Ads Tracking là việc đo các hành động quan trọng sau khi khách truy cập website từ quảng cáo.",
      "Các hành động thường cần theo dõi gồm click gọi điện, click Zalo, gửi form, click CTA hoặc conversion phù hợp.",
      "MT WEBSITE hỗ trợ cấu hình theo phạm vi website, không tự nhận là Google Partner hay cam kết hiệu quả quảng cáo."
    ],
    suitableFor: ["Website chạy Google Ads", "Landing page quảng cáo", "Dịch vụ cần đo cuộc gọi", "Doanh nghiệp muốn biết hiệu quả CTA"],
    deliverables: ["Kiểm tra CTA cần đo", "Tracking click gọi điện", "Tracking click Zalo", "Tracking gửi form khi phù hợp", "Kiểm tra conversion", "Ghi chú cách đọc dữ liệu"],
    process: ["Xác định hành động cần đo", "Kiểm tra cấu trúc website", "Gắn tracking", "Test sự kiện", "Bàn giao ghi chú kiểm tra"],
    pricing: "Chi phí tùy số lượng hành động cần đo và cấu trúc website hiện tại.",
    faq: [
      { question: "Có đo được click gọi điện không?", answer: "Có thể đo click vào link gọi điện nếu website có CTA rõ ràng." },
      { question: "Có đo được click Zalo không?", answer: "Có thể đo click Zalo ở mức sự kiện nếu cấu trúc website hỗ trợ." },
      { question: "Tracking có làm quảng cáo hiệu quả hơn ngay không?", answer: "Tracking không tự tối ưu quảng cáo, nhưng giúp có dữ liệu để đánh giá hành động thực." }
    ],
    relatedServices: ["landing-page", "website-dich-vu", "google-analytics"],
    metadata: {
      title: "Cài đặt Google Ads Tracking | MT WEBSITE",
      description: "Cài đặt tracking cho click gọi điện, Zalo, form, CTA và conversion để đo hành động từ quảng cáo."
    },
    formType: "Website phục vụ quảng cáo"
  },
  {
    slug: "toi-uu-toc-do",
    title: "Tối ưu tốc độ",
    shortTitle: "Tốc độ",
    category: "TỐI ƯU WEBSITE",
    description: "Rà soát và cải thiện tốc độ tải trang, asset, hình ảnh, lazy loading và trải nghiệm mobile.",
    heroDescription: "Tốc độ tốt giúp người dùng đỡ chờ đợi và giảm rủi ro rời trang, đặc biệt trên điện thoại.",
    icon: "speed",
    whatIs: [
      "Tối ưu tốc độ là quá trình kiểm tra những yếu tố khiến website tải chậm và xử lý trong phạm vi phù hợp.",
      "Các hạng mục có thể gồm tối ưu hình ảnh, lazy loading, JS/CSS, caching và Core Web Vitals ở mức hợp lý.",
      "Dịch vụ không cam kết điểm PageSpeed 100 tuyệt đối vì kết quả còn phụ thuộc hosting, mã nguồn và dịch vụ bên thứ ba."
    ],
    suitableFor: ["Website tải chậm", "Website nhiều hình ảnh", "Website bán hàng", "Website chạy quảng cáo", "Website cần cải thiện mobile"],
    deliverables: ["Kiểm tra asset", "Tối ưu hình ảnh", "Lazy loading", "Rà soát JS/CSS khi phù hợp", "Gợi ý caching", "Kiểm tra trải nghiệm mobile"],
    process: ["Đo hiện trạng", "Xác định nguyên nhân chính", "Tối ưu hạng mục ưu tiên", "Kiểm tra lại", "Bàn giao ghi chú"],
    pricing: "Chi phí tùy mã nguồn, số trang và mức độ tối ưu cần thực hiện.",
    faq: [
      { question: "Có đảm bảo PageSpeed 100 không?", answer: "Không cam kết điểm tuyệt đối. Mục tiêu là cải thiện trải nghiệm và xử lý vấn đề hợp lý." },
      { question: "Có tối ưu hình ảnh không?", answer: "Có. Hình ảnh thường là nguyên nhân phổ biến khiến website nặng." },
      { question: "Có ảnh hưởng giao diện không?", answer: "Các thay đổi sẽ được kiểm tra để tránh phá layout hiện tại." }
    ],
    relatedServices: ["responsive", "seo-ky-thuat", "website-ban-hang"],
    metadata: {
      title: "Dịch vụ Tối ưu Tốc độ Website | MT WEBSITE",
      description: "Tối ưu tốc độ website, hình ảnh, lazy loading, JS/CSS khi phù hợp, caching và trải nghiệm mobile."
    },
    formType: "Chỉnh sửa website hiện có"
  },
  {
    slug: "responsive",
    title: "Responsive",
    shortTitle: "Responsive",
    category: "TỐI ƯU WEBSITE",
    description: "Tối ưu giao diện để website hiển thị phù hợp trên điện thoại, tablet, laptop và desktop.",
    heroDescription: "Responsive giúp người dùng đọc nội dung, bấm CTA, điền form và xem hình ảnh dễ dàng trên nhiều kích thước màn hình.",
    icon: "devices",
    whatIs: [
      "Responsive là cách thiết kế và chỉnh giao diện để website thích ứng với nhiều kích thước màn hình.",
      "Không chỉ là co nhỏ nội dung, responsive cần xử lý navigation, typography, image, button, form và table nếu có.",
      "Dịch vụ phù hợp khi website desktop ổn nhưng mobile bị vỡ layout hoặc khó thao tác."
    ],
    suitableFor: ["Website cũ", "Website bị lỗi mobile", "Landing page quảng cáo", "Website có form", "Website bán hàng"],
    deliverables: ["Breakpoint phù hợp", "Navigation mobile", "Typography dễ đọc", "Image không méo", "Button dễ bấm", "Form/table không overflow"],
    process: ["Kiểm tra các breakpoint", "Liệt kê lỗi layout", "Chỉnh CSS/giao diện", "Test mobile/tablet/desktop", "Bàn giao sau kiểm tra"],
    pricing: "Chi phí tùy số lượng trang và mức độ lỗi responsive hiện tại.",
    faq: [
      { question: "Responsive có cần làm lại toàn bộ website không?", answer: "Không luôn luôn. Nhiều trường hợp chỉ cần chỉnh lại CSS và cấu trúc một số section." },
      { question: "Có kiểm tra form trên mobile không?", answer: "Có. Form là phần cần ưu tiên vì ảnh hưởng trực tiếp đến liên hệ." },
      { question: "Có xử lý bảng dữ liệu không?", answer: "Có thể xử lý table bằng cuộn ngang, layout lại hoặc cách trình bày phù hợp hơn." }
    ],
    relatedServices: ["toi-uu-toc-do", "chinh-sua-website", "nang-cap-website"],
    metadata: {
      title: "Dịch vụ Responsive Website | MT WEBSITE",
      description: "Chỉnh responsive website cho điện thoại, tablet, laptop và desktop; xử lý navigation, typography, hình ảnh, button và form."
    },
    formType: "Chỉnh sửa website hiện có"
  },
  {
    slug: "chinh-sua-website",
    title: "Chỉnh sửa website",
    shortTitle: "Chỉnh sửa",
    category: "HỖ TRỢ & VẬN HÀNH",
    description: "Sửa giao diện, nội dung, responsive, CTA, form, hình ảnh hoặc lỗi frontend trên website hiện có.",
    heroDescription: "Dành cho khách đã có website nhưng cần chỉnh sửa để hiển thị tốt hơn, rõ CTA hơn hoặc cập nhật nội dung nhanh.",
    icon: "edit",
    whatIs: [
      "Chỉnh sửa website là dịch vụ xử lý các thay đổi nhỏ đến trung bình trên website hiện có.",
      "Công việc có thể gồm sửa giao diện, sửa nội dung, chỉnh responsive, thêm section, sửa CTA, form, lỗi frontend hoặc thay hình ảnh.",
      "Nếu phạm vi thay đổi quá lớn, MT WEBSITE sẽ tư vấn chuyển sang hướng nâng cấp website."
    ],
    suitableFor: ["Website đang vận hành", "Website bị lỗi giao diện", "Website cần sửa nội dung", "Website cần thêm CTA", "Chủ website không có đội kỹ thuật"],
    deliverables: ["Sửa giao diện", "Cập nhật nội dung", "Chỉnh responsive", "Thêm section", "Sửa CTA/form", "Thay hình ảnh", "Cải thiện UX cơ bản"],
    process: ["Nhận URL website cần chỉnh", "Kiểm tra lỗi và phạm vi", "Báo hướng xử lý", "Thực hiện chỉnh sửa", "Kiểm tra và bàn giao"],
    pricing: "Chi phí báo theo hạng mục sau khi xem website và phạm vi chỉnh sửa.",
    faq: [
      { question: "Có cần gửi URL website không?", answer: "Có. URL giúp kiểm tra hiện trạng và đánh giá phạm vi chỉnh sửa." },
      { question: "Có sửa được website code sẵn không?", answer: "Tùy mã nguồn và quyền truy cập. Cần kiểm tra trước khi nhận." },
      { question: "Khác gì với nâng cấp website?", answer: "Chỉnh sửa là thay đổi nhỏ/trung bình; nâng cấp là cải tiến lớn hơn về cấu trúc, giao diện hoặc chức năng." }
    ],
    relatedServices: ["nang-cap-website", "bao-tri-website", "responsive"],
    metadata: {
      title: "Dịch vụ Chỉnh sửa Website | MT WEBSITE",
      description: "Chỉnh sửa website hiện có: sửa giao diện, nội dung, responsive, CTA, form, hình ảnh và lỗi frontend."
    },
    formType: "Chỉnh sửa website hiện có",
    primaryCta: "Gửi website cần chỉnh sửa"
  },
  {
    slug: "bao-tri-website",
    title: "Bảo trì website",
    shortTitle: "Bảo trì",
    category: "HỖ TRỢ & VẬN HÀNH",
    description: "Kiểm tra website, xử lý lỗi, cập nhật nội dung nhỏ, kiểm tra link, form và hỗ trợ kỹ thuật sau bàn giao.",
    heroDescription: "Bảo trì giúp website ổn định hơn trong quá trình vận hành mà không cần bạn tự xử lý mọi vấn đề kỹ thuật.",
    icon: "tools",
    whatIs: [
      "Bảo trì website là các công việc hỗ trợ sau khi website đã đi vào sử dụng.",
      "Nội dung có thể gồm kiểm tra website, xử lý lỗi, cập nhật nội dung nhỏ, kiểm tra link, kiểm tra form và hỗ trợ kỹ thuật.",
      "Dịch vụ không mặc định cam kết trực 24/7 nếu chưa có thỏa thuận riêng."
    ],
    suitableFor: ["Website đã bàn giao", "Doanh nghiệp nhỏ", "Chủ website không có kỹ thuật", "Website cần cập nhật định kỳ"],
    deliverables: ["Kiểm tra website", "Xử lý lỗi phát sinh", "Cập nhật nội dung nhỏ", "Kiểm tra link", "Kiểm tra form", "Hỗ trợ kỹ thuật trong phạm vi thống nhất"],
    process: ["Thống nhất phạm vi hỗ trợ", "Kiểm tra định kỳ hoặc theo yêu cầu", "Xử lý hạng mục phát sinh", "Báo lại kết quả", "Đề xuất cải thiện khi cần"],
    pricing: "Chi phí có thể theo tháng hoặc theo hạng mục tùy nhu cầu hỗ trợ.",
    faq: [
      { question: "Có hỗ trợ 24/7 không?", answer: "Không mặc định. Thời gian hỗ trợ cần được thống nhất trước theo phạm vi cụ thể." },
      { question: "Có cập nhật nội dung không?", answer: "Có thể cập nhật nội dung nhỏ nếu nằm trong phạm vi bảo trì." },
      { question: "Có kiểm tra form liên hệ không?", answer: "Có. Form và link CTA là hạng mục nên kiểm tra định kỳ." }
    ],
    relatedServices: ["sao-luu-website", "ssl-https", "nang-cap-website"],
    metadata: {
      title: "Dịch vụ Bảo trì Website | MT WEBSITE",
      description: "Bảo trì website: kiểm tra hoạt động, xử lý lỗi, cập nhật nội dung nhỏ, kiểm tra link, form và hỗ trợ kỹ thuật."
    },
    formType: "Chỉnh sửa website hiện có"
  },
  {
    slug: "domain-hosting",
    title: "Domain & Hosting",
    shortTitle: "Domain & Hosting",
    category: "HỖ TRỢ & VẬN HÀNH",
    description: "Tư vấn và hỗ trợ cấu hình tên miền, DNS, hosting, trỏ domain và triển khai website.",
    heroDescription: "MT WEBSITE hỗ trợ bạn chọn hướng cấu hình domain/hosting phù hợp và triển khai website đúng môi trường sử dụng.",
    icon: "globe",
    whatIs: [
      "Domain là tên miền để khách truy cập website, còn hosting là nơi lưu trữ website.",
      "MT WEBSITE tư vấn và hỗ trợ cấu hình, không tự nhận là nhà đăng ký domain/hosting nếu chỉ hỗ trợ kỹ thuật.",
      "Công việc thường gồm DNS, trỏ domain, cấu hình hosting và hỗ trợ triển khai website."
    ],
    suitableFor: ["Khách mới làm website", "Website cần trỏ domain", "Website đổi hosting", "Chủ website cần hỗ trợ DNS"],
    deliverables: ["Tư vấn tên miền", "Tư vấn hosting", "Cấu hình DNS", "Trỏ domain", "Hỗ trợ triển khai website", "Kiểm tra sau cấu hình"],
    process: ["Xác định nhu cầu website", "Tư vấn domain/hosting phù hợp", "Cấu hình DNS", "Triển khai website", "Kiểm tra truy cập"],
    pricing: "Chi phí hỗ trợ kỹ thuật tách biệt với phí domain/hosting của nhà cung cấp.",
    faq: [
      { question: "MT WEBSITE có bán domain không?", answer: "Nội dung dịch vụ là tư vấn và hỗ trợ cấu hình, không tự nhận là nhà đăng ký domain nếu chưa có thỏa thuận riêng." },
      { question: "Có hỗ trợ trỏ domain không?", answer: "Có. Có thể hỗ trợ cấu hình DNS và trỏ domain về hosting hoặc nền tảng triển khai." },
      { question: "Có tư vấn hosting phù hợp không?", answer: "Có thể tư vấn theo nhu cầu website, dung lượng, traffic và ngân sách." }
    ],
    relatedServices: ["ssl-https", "sao-luu-website", "bao-tri-website"],
    metadata: {
      title: "Tư vấn Domain & Hosting | MT WEBSITE",
      description: "Tư vấn và hỗ trợ cấu hình domain, DNS, hosting, trỏ domain và triển khai website."
    },
    formType: "Chưa xác định"
  },
  {
    slug: "ssl-https",
    title: "SSL & HTTPS",
    shortTitle: "SSL & HTTPS",
    category: "HỖ TRỢ & VẬN HÀNH",
    description: "Hỗ trợ cấu hình HTTPS, SSL, redirect HTTP sang HTTPS và kiểm tra mixed content cơ bản.",
    heroDescription: "HTTPS giúp mã hóa kết nối giữa trình duyệt và website, tạo trải nghiệm truy cập đáng tin cậy hơn.",
    icon: "lock",
    whatIs: [
      "SSL là chứng chỉ giúp bật HTTPS cho website, mã hóa kết nối giữa người dùng và máy chủ.",
      "Dịch vụ có thể gồm cấu hình HTTPS, redirect HTTP sang HTTPS, kiểm tra mixed content và hỗ trợ chứng chỉ phù hợp.",
      "SSL là lớp bảo vệ quan trọng nhưng không làm website an toàn tuyệt đối trước mọi rủi ro."
    ],
    suitableFor: ["Website chưa có HTTPS", "Website báo không bảo mật", "Website đổi hosting", "Website cần kiểm tra mixed content"],
    deliverables: ["Kiểm tra SSL hiện tại", "Cấu hình HTTPS", "Redirect HTTP sang HTTPS", "Kiểm tra mixed content cơ bản", "Hỗ trợ chứng chỉ phù hợp", "Kiểm tra sau cấu hình"],
    process: ["Kiểm tra domain/hosting", "Xác định loại chứng chỉ", "Cấu hình SSL", "Thiết lập redirect", "Kiểm tra trình duyệt"],
    pricing: "Chi phí phụ thuộc môi trường hosting và loại chứng chỉ cần dùng.",
    faq: [
      { question: "SSL có làm website an toàn tuyệt đối không?", answer: "Không. SSL mã hóa kết nối, nhưng website vẫn cần cấu hình và vận hành đúng." },
      { question: "Mixed content là gì?", answer: "Đó là khi trang HTTPS vẫn tải một số tài nguyên HTTP, có thể gây cảnh báo bảo mật." },
      { question: "Có redirect HTTP sang HTTPS không?", answer: "Có thể cấu hình để người dùng luôn truy cập bản HTTPS." }
    ],
    relatedServices: ["domain-hosting", "bao-tri-website", "sao-luu-website"],
    metadata: {
      title: "Cấu hình SSL & HTTPS Website | MT WEBSITE",
      description: "Hỗ trợ cấu hình SSL, HTTPS, redirect HTTP sang HTTPS và kiểm tra mixed content cơ bản cho website."
    },
    formType: "Chưa xác định"
  },
  {
    slug: "sao-luu-website",
    title: "Sao lưu website",
    shortTitle: "Sao lưu",
    category: "HỖ TRỢ & VẬN HÀNH",
    description: "Hỗ trợ backup source, database nếu có, lưu bản sao và tư vấn lịch sao lưu phù hợp.",
    heroDescription: "Sao lưu giúp giảm rủi ro mất dữ liệu, đặc biệt trước khi chỉnh sửa, nâng cấp hoặc chuyển hosting.",
    icon: "backup",
    whatIs: [
      "Sao lưu website là việc tạo bản copy của source code, dữ liệu và cấu hình quan trọng.",
      "Với website có database, cần sao lưu cả database nếu có quyền truy cập phù hợp.",
      "Backup nên được thực hiện trước khi chỉnh sửa/nâng cấp để có phương án phục hồi khi cần."
    ],
    suitableFor: ["Website chuẩn bị chỉnh sửa", "Website chuẩn bị nâng cấp", "Website có dữ liệu quan trọng", "Website chuyển hosting"],
    deliverables: ["Backup source", "Backup database nếu có", "Lưu bản sao", "Tư vấn lịch backup", "Hỗ trợ phục hồi khi có bản backup phù hợp", "Ghi chú phạm vi backup"],
    process: ["Kiểm tra loại website", "Xác định dữ liệu cần sao lưu", "Tạo bản backup", "Kiểm tra file backup", "Bàn giao hoặc lưu theo thỏa thuận"],
    pricing: "Chi phí tùy loại website, dung lượng và yêu cầu phục hồi.",
    faq: [
      { question: "Có cần backup trước khi sửa website không?", answer: "Nên có. Backup giúp có phương án quay lại nếu chỉnh sửa gây lỗi." },
      { question: "Có backup database không?", answer: "Có thể backup database nếu website có database và có quyền truy cập phù hợp." },
      { question: "Có phục hồi website từ backup không?", answer: "Có thể hỗ trợ phục hồi nếu bản backup đầy đủ và môi trường triển khai phù hợp." }
    ],
    relatedServices: ["chinh-sua-website", "nang-cap-website", "bao-tri-website"],
    metadata: {
      title: "Dịch vụ Sao lưu Website | MT WEBSITE",
      description: "Sao lưu website: backup source, database nếu có, lưu bản sao, tư vấn lịch backup và hỗ trợ phục hồi khi phù hợp."
    },
    formType: "Chỉnh sửa website hiện có"
  },
  {
    slug: "nang-cap-website",
    title: "Nâng cấp website",
    shortTitle: "Nâng cấp",
    category: "HỖ TRỢ & VẬN HÀNH",
    description: "Cải tiến lớn hơn chỉnh sửa: redesign, thêm module, thêm chức năng, cải thiện UX, responsive và cấu trúc website.",
    heroDescription: "Phù hợp khi website hiện tại vẫn dùng được nhưng cần nâng cấp rõ rệt về giao diện, chức năng hoặc trải nghiệm.",
    icon: "upgrade",
    whatIs: [
      "Nâng cấp website khác với chỉnh sửa nhỏ. Đây là quá trình cải tiến lớn hơn về giao diện, cấu trúc hoặc chức năng.",
      "Ví dụ gồm redesign, thêm module, thêm chức năng, cải thiện responsive, cải thiện UX hoặc mở rộng website.",
      "MT WEBSITE sẽ đánh giá hiện trạng để đề xuất nên chỉnh sửa từng phần hay nâng cấp theo giai đoạn."
    ],
    suitableFor: ["Website cũ", "Website cần redesign", "Website cần thêm chức năng", "Doanh nghiệp mở rộng dịch vụ", "Website mobile chưa tốt"],
    deliverables: ["Đánh giá hiện trạng", "Đề xuất hướng nâng cấp", "Redesign khi cần", "Thêm module/chức năng", "Cải thiện responsive", "Cải thiện UX và cấu trúc"],
    process: ["Nhận URL website", "Đánh giá vấn đề chính", "Đề xuất phạm vi nâng cấp", "Báo giá theo giai đoạn", "Triển khai và kiểm tra"],
    pricing: "Chi phí phụ thuộc mức độ nâng cấp và có thể chia theo giai đoạn để dễ kiểm soát.",
    faq: [
      { question: "Khi nào nên nâng cấp thay vì chỉnh sửa?", answer: "Khi website có nhiều vấn đề về cấu trúc, UX hoặc cần thêm chức năng lớn, nâng cấp sẽ hợp lý hơn." },
      { question: "Có giữ lại nội dung cũ được không?", answer: "Có thể giữ, chỉnh sửa hoặc sắp xếp lại nội dung cũ tùy mục tiêu mới." },
      { question: "Có thể nâng cấp từng phần không?", answer: "Có. Chia giai đoạn giúp giảm rủi ro và dễ kiểm tra kết quả." }
    ],
    relatedServices: ["chinh-sua-website", "responsive", "bao-tri-website"],
    metadata: {
      title: "Dịch vụ Nâng cấp Website | MT WEBSITE",
      description: "Nâng cấp website: redesign, thêm module, chức năng, cải thiện responsive, UX và cấu trúc website."
    },
    formType: "Chỉnh sửa website hiện có",
    primaryCta: "Yêu cầu đánh giá website"
  }
];

export const serviceCategories: { heading: ServiceCategory; services: ServiceDetail[] }[] = [
  { heading: "THIẾT KẾ WEBSITE", services: serviceDetails.filter((service) => service.category === "THIẾT KẾ WEBSITE") },
  { heading: "TỐI ƯU WEBSITE", services: serviceDetails.filter((service) => service.category === "TỐI ƯU WEBSITE") },
  { heading: "HỖ TRỢ & VẬN HÀNH", services: serviceDetails.filter((service) => service.category === "HỖ TRỢ & VẬN HÀNH") }
];

export function getServiceBySlug(slug: string) {
  return serviceDetails.find((service) => service.slug === slug);
}

export function getRelatedServices(service: ServiceDetail) {
  return service.relatedServices.map((slug) => getServiceBySlug(slug)).filter((item): item is ServiceDetail => Boolean(item));
}
