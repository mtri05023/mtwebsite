# Online Bookstore Management System — Project Showcase Assets

## Mục đích

Thư mục này chứa **ảnh chụp thực tế và thông tin thật của dự án Online Bookstore Management System**.
Codex dùng dữ liệu này để cập nhật project Bookstore trên website portfolio MTWebsite.

## Quy tắc cho Codex

- Đây là project thật, không phải template minh họa.
- Ưu tiên sử dụng chính các screenshot trong thư mục này cho cover, gallery và trang chi tiết dự án.
- Không thay bằng placeholder, ảnh stock hoặc screenshot dự án khác.
- Không tự bịa thêm chức năng, công nghệ, số liệu hoặc kết quả kinh doanh.
- Có thể crop/resize bằng CSS để phù hợp card/carousel nhưng không làm sai nội dung screenshot.
- Giữ nguyên file gốc; nếu cần tối ưu production, tạo bản copy trong `public/images/projects/...`.
- Khi cập nhật portfolio, giữ giao diện hiện tại của MTWebsite nếu không có yêu cầu redesign.

## Project

**Tên:** Online Bookstore Management System  
**Loại:** Website bán sách và quản lý nhà sách online

### Công nghệ

- PHP 8+
- MySQL / MariaDB
- PDO prepared statements
- HTML
- CSS
- JavaScript
- XAMPP trên Windows

### Chức năng chính

- Khách hàng xem danh sách sách.
- Lọc sách theo danh mục.
- Xem chi tiết sách.
- Giỏ hàng dùng PHP session.
- Đăng ký, đăng nhập, đăng xuất.
- Checkout với thông tin người nhận, chi nhánh, mã khuyến mãi.
- Hỗ trợ COD hoặc Bank Transfer.
- Tạo đơn hàng và lưu chi tiết đơn.
- Trừ tồn kho khi đặt hàng.
- Xem lịch sử và chi tiết đơn hàng.
- Admin dashboard.
- Quản lý sách và danh mục.
- Quản lý đơn hàng.
- Quản lý tồn kho theo chi nhánh.
- Quản lý mã khuyến mãi.
- Quản lý chi nhánh và khách hàng.
- Báo cáo doanh thu và sách bán chạy.
- Bán hàng tại quầy.
- Chatbox hỗ trợ khách hàng rule-based, không cần API bên ngoài.

### Bảo mật/kỹ thuật

- Mật khẩu sử dụng `password_hash()` và `password_verify()`.
- Truy vấn động sử dụng PDO prepared statements.
- Cấu hình database local không commit lên Git.
- Có file cấu hình mẫu cho môi trường mới.

## Screenshot thực tế

| File | Nội dung |
|---|---|
| `01-admin-pos.png` | Admin — Bán hàng tại quầy, tìm sách, kiểm tra tồn chi nhánh và tạo đơn |
| `02-store-catalog.png` | User — Trang danh sách sách, tìm kiếm và lọc theo danh mục |
| `03-store-products.png` | User — Các card sản phẩm, giá, tồn kho và thêm vào giỏ |

## Gợi ý dùng trên MTWebsite

### Cover
Ưu tiên `02-store-catalog.png` vì thể hiện rõ giao diện website bán sách.

### Gallery
1. `02-store-catalog.png` — danh sách/tìm kiếm sách.
2. `03-store-products.png` — card sản phẩm và giỏ hàng.
3. `01-admin-pos.png` — hệ thống bán hàng tại quầy/admin.

### Mô tả ngắn đề xuất

> Website bán sách và quản lý nhà sách online xây dựng bằng PHP thuần và MySQL/MariaDB, gồm khu vực khách hàng, giỏ hàng, checkout, quản lý đơn hàng, tồn kho theo chi nhánh và hệ thống quản trị.

## Source repository

Repository được người dùng cung cấp: `mtri05023/bookstore`.

Codex chỉ dùng repository/source thực tế nếu nó có sẵn trong workspace. Không tự suy đoán nội dung file ngoài dữ liệu được cung cấp.

## Hướng nâng cấp đã xác định

- Phân trang danh sách sách, đơn hàng và khách hàng.
- Gửi email xác nhận đơn hàng.
- Rollback tồn kho khi hủy đơn.
- Xóa ảnh cũ khi admin thay ảnh.
- Thống kê doanh thu theo tháng, năm và chi nhánh.
