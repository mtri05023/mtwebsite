# Fashion Store — Website Bán Hàng Thời Trang

## Mục đích

Thư mục này là dữ liệu project demo để Codex bổ sung **Fashion Store / Website bán hàng thời trang** vào website portfolio **MTWebsite**.

Ảnh `01-fashion-store-full-demo.png` là ảnh showcase tổng hợp của project, thể hiện cả giao diện khách hàng và hệ thống quản trị.

## Yêu cầu bắt buộc cho Codex

- Thêm Fashion Store như **một project riêng** trong dữ liệu dự án hiện có của MTWebsite.
- Dùng ảnh trong thư mục này làm ảnh thật cho project; không dùng placeholder hoặc ảnh của Cinemax, Bookstore hay Rental Room.
- Giữ nguyên design system, responsive, animation, carousel và cấu trúc project card hiện có của MTWebsite.
- Không redesign website chỉ để thêm project này.
- Nếu MTWebsite đang có trang `/du-an` và `/du-an/[slug]`, project phải xuất hiện ở danh sách và có trang chi tiết tương ứng.
- Copy ảnh sang thư mục public phù hợp của project nếu kiến trúc hiện tại yêu cầu, ví dụ `public/images/projects/fashion-store/`.
- Tối ưu kích thước hiển thị bằng CSS/Next Image nhưng không kéo méo ảnh.
- Không tự bịa khách hàng thật, doanh thu thật, lượt bán thật, review thật hoặc URL production.
- Đây là **demo project**, vì vậy trên portfolio phải dùng cách diễn đạt rõ là dự án demo/mẫu giao diện.

## Tên project

**Fashion Store — Website Bán Hàng Thời Trang**

Slug đề xuất:

```text
fashion-store
```

Loại:

```text
Website bán hàng / E-commerce
```

## Mô tả ngắn dùng cho card

> Demo website bán hàng thời trang hiện đại với danh mục sản phẩm, bộ lọc, chi tiết sản phẩm, giỏ hàng và dashboard quản trị bán hàng.

## Mô tả chi tiết dùng cho trang project

Fashion Store là project demo website thương mại điện tử dành cho cửa hàng thời trang. Giao diện tập trung vào trải nghiệm mua sắm trực quan, từ khám phá sản phẩm, lọc theo nhu cầu, xem chi tiết đến quản lý giỏ hàng. Project đồng thời minh họa khu vực quản trị để theo dõi sản phẩm, đơn hàng, khách hàng và các chỉ số bán hàng.

Thiết kế sử dụng bố cục sáng, nhiều khoảng trắng, hình sản phẩm lớn và CTA rõ ràng. Dashboard quản trị sử dụng giao diện tối để phân biệt với storefront và giúp các số liệu vận hành dễ quan sát.

## Các màn hình được thể hiện trong ảnh demo

### 1. Trang chủ

- Header và navigation.
- Hero/New Collection.
- CTA mua hàng.
- Danh mục nổi bật.
- Chính sách giao hàng/đổi trả/thanh toán/hỗ trợ.

### 2. Danh sách sản phẩm

- Grid sản phẩm.
- Danh mục.
- Khoảng giá.
- Kích cỡ.
- Màu sắc.
- Sắp xếp sản phẩm.
- Giá hiện tại/giá khuyến mãi.

### 3. Chi tiết sản phẩm

- Gallery ảnh.
- Tên và giá sản phẩm.
- Rating minh họa.
- Chọn màu.
- Chọn size.
- Chọn số lượng.
- Thêm vào giỏ.
- Mua ngay.
- Yêu thích/so sánh ở mức giao diện demo.

### 4. Giỏ hàng

- Danh sách sản phẩm.
- Biến thể màu/size.
- Số lượng.
- Thành tiền.
- Phí vận chuyển.
- Tổng đơn.
- CTA thanh toán.

### 5. Admin Dashboard

Ảnh demo minh họa khu vực quản trị với:

- Dashboard.
- Sản phẩm.
- Danh mục.
- Đơn hàng.
- Khách hàng.
- Mã giảm giá.
- Banner.
- Báo cáo.
- Cài đặt.
- KPI doanh thu.
- Đơn hàng mới.
- Khách hàng mới.
- Tổng sản phẩm.
- Biểu đồ doanh thu.
- Trạng thái đơn hàng.
- Đơn hàng mới nhất.
- Sản phẩm bán chạy.

Các số liệu xuất hiện trong screenshot chỉ là **dữ liệu demo của giao diện**, không được mô tả trên MTWebsite như kết quả kinh doanh thật.

## Công nghệ đề xuất cho demo

Nếu MTWebsite cần hiển thị tech stack, sử dụng:

- Next.js App Router
- TypeScript
- Tailwind CSS
- Prisma ORM
- MySQL

Chỉ mô tả đây là stack của **demo project**, không gán cho khách hàng thật.

## Ảnh project

| File | Vai trò |
|---|---|
| `01-fashion-store-full-demo.png` | Cover + gallery tổng hợp: homepage, catalog, product detail, cart và admin dashboard |

### Cover

Ưu tiên sử dụng:

```text
01-fashion-store-full-demo.png
```

Khi hiển thị card nhỏ, dùng `object-fit: cover` và chọn vùng storefront làm trọng tâm nếu cấu trúc hiện tại hỗ trợ `object-position`.

Khi vào trang chi tiết, cho phép xem ảnh lớn để người xem thấy cả public UI và admin dashboard.

## Nội dung nên hiển thị trên MTWebsite

### Tiêu đề

```text
Fashion Store — Website Bán Hàng Thời Trang
```

### Subtitle

```text
Demo E-commerce thời trang với storefront và hệ thống quản trị.
```

### Điểm nổi bật

- Thiết kế storefront hiện đại và responsive.
- Danh mục và bộ lọc sản phẩm.
- Trang chi tiết với biến thể màu, size và số lượng.
- Giỏ hàng và luồng chuẩn bị checkout.
- Dashboard quản trị bán hàng.
- Quản lý sản phẩm, danh mục, đơn hàng và khách hàng.
- Minh họa báo cáo doanh thu và sản phẩm bán chạy.

## CTA

Vì đây là project demo và chưa có URL production được cung cấp:

- Không tự tạo link “Xem website” đến một domain không tồn tại.
- Có thể dùng CTA `Xem chi tiết dự án`.
- Nếu component bắt buộc có demo URL, hãy ẩn/disable CTA demo thay vì bịa URL.

## SEO cho trang project

Nếu cấu trúc SEO hiện tại của MTWebsite hỗ trợ metadata:

**Title đề xuất:**

```text
Fashion Store - Demo Website Bán Hàng Thời Trang | MTWebsite
```

**Description đề xuất:**

```text
Demo website bán hàng thời trang với danh mục sản phẩm, bộ lọc, trang chi tiết, giỏ hàng và dashboard quản trị bán hàng.
```

Không thay canonical/domain chung của MTWebsite.

## Kiểm tra sau khi Codex triển khai

1. Project Fashion Store xuất hiện trong danh sách dự án.
2. Card sử dụng đúng ảnh `01-fashion-store-full-demo.png`.
3. Click card mở đúng trang chi tiết Fashion Store.
4. Trang chi tiết hiển thị ảnh rõ nét và không méo.
5. Mobile không overflow ngang.
6. Không ảnh hưởng carousel/project hiện có.
7. Cinemax, Bookstore và Rental Room vẫn giữ nguyên dữ liệu/ảnh.
8. Không thay đổi hotline, Zalo, branding hoặc CTA chung của MTWebsite.
9. Build và lint phải pass.
