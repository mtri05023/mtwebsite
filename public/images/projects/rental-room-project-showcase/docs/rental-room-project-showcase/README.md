# Website Quản Lý Nhà Trọ — Project Showcase Assets

## Mục đích

Thư mục này chứa thông tin dự án và 2 ảnh demo giao diện của **Website Quản Lý Nhà Trọ**.
Codex dùng dữ liệu này để cập nhật project Rental Room Management System trên website portfolio MTWebsite.

## Quy tắc cho Codex

- Dùng đúng thông tin kỹ thuật/chức năng trong tài liệu này khi cập nhật project.
- Hai ảnh trong thư mục là ảnh demo đại diện cho hệ thống quản lý nhà trọ.
- Có thể dùng làm cover/gallery cho project trên portfolio.
- Không dùng ảnh của Cinemax hoặc Bookstore cho project này.
- Không tự bịa thêm công nghệ, chức năng hoặc số liệu.
- Có thể crop/resize bằng CSS để đồng bộ card/carousel nhưng không làm biến dạng ảnh.
- Nếu copy ảnh sang `public/images/projects/...`, giữ bản gốc trong thư mục tài liệu.
- Không redesign toàn bộ MTWebsite nếu nhiệm vụ chỉ là bổ sung/cập nhật project.

## Ảnh demo

| File | Nội dung |
|---|---|
| `01-rental-room-demo-dark.png` | Demo tổng hợp giao diện public + admin theo phong cách dark |
| `02-rental-room-demo-light.png` | Demo tổng hợp public, dashboard admin, danh sách/chi tiết phòng, đặt phòng và mobile |

## Project

**Tên:** Website Quản Lý Nhà Trọ  
**Repository:** Rental-Room-Management-System  
**Stack:** Next.js App Router, TypeScript, Tailwind CSS, Prisma ORM, MySQL qua XAMPP/phpMyAdmin.  
**Lưu ý:** Project không dùng SQLite.

## Chức năng chính

### Public

- Xem danh sách nhà trọ.
- Xem danh sách phòng.
- Xem chi tiết phòng.
- Lọc theo khu vực, trạng thái, giá và sức chứa.
- Gửi yêu cầu xem phòng.
- Public chỉ hiển thị phòng `AVAILABLE` và `MAINTENANCE`.
- Phòng `RENTED` bị ẩn khỏi trang chủ, `/rooms`, chi tiết nhà trọ và chi tiết phòng.
- Chỉ phòng `AVAILABLE` mới cho gửi yêu cầu đặt lịch xem phòng.

### Admin

- Đăng nhập.
- Dashboard.
- Quản lý nhà trọ.
- Quản lý phòng.
- Quản lý ảnh phòng.
- Quản lý tiện ích.
- Quản lý yêu cầu đặt phòng.
- Quản lý khách thuê.
- Quản lý hợp đồng.
- Thu tiền trọ.
- Quản lý/thống kê doanh thu.
- Xuất báo cáo doanh thu Excel `.xlsx`.

## Công nghệ

- Next.js App Router
- TypeScript
- Tailwind CSS
- Prisma ORM
- MySQL qua XAMPP/phpMyAdmin
- `bcryptjs` cho hash password admin
- `exceljs` cho xuất báo cáo doanh thu

## Cấu hình local với XAMPP/MySQL

Database:

```text
nha_tro_db
```

`.env`:

```env
DATABASE_URL="mysql://root:@localhost:3306/nha_tro_db"
ADMIN_SESSION_SECRET="change-this-secret"
```

Với XAMPP mặc định, MySQL thường dùng user `root` và password để trống.

## Cài đặt và chạy

```bash
npm install
npx prisma generate
npx prisma migrate dev
npx prisma db seed
npm run dev
```

Website local:

```text
http://localhost:3000
```

Build production:

```bash
npm run build
```

Nếu database đã import SQL thủ công và Prisma báo `Drift detected`, cần sao lưu dữ liệu trước. Với database development có thể:

```bash
npx prisma migrate reset
npx prisma db seed
```

Lưu ý: reset sẽ xóa dữ liệu database hiện tại.

## Tài khoản admin mẫu

```text
Email: admin@nha-tro.local
Password: 123456
```

Login:

```text
http://localhost:3000/admin/login
```

Sau login, hệ thống lưu session bằng cookie `admin_session` và chuyển về `/admin`.

Toàn bộ `/admin` và `/api/admin/*` được bảo vệ. Chưa login sẽ redirect về `/admin/login` hoặc trả `401`.

## Quản lý phòng

Trang:

```text
/admin/rooms
```

Trạng thái:

- `AVAILABLE`: còn trống, hiển thị public và cho đặt lịch.
- `RENTED`: đã thuê, ẩn khỏi public.
- `MAINTENANCE`: bảo trì, vẫn hiển thị thông tin public nhưng không cho đặt lịch.

Ảnh phòng:

```text
/admin/rooms/[roomId]/images
```

Hỗ trợ:

- Thêm URL ảnh.
- Xóa ảnh.
- Chọn ảnh chính.
- Sắp xếp bằng `sortOrder`.

## Thu tiền trọ

```text
/admin/tenants
/admin/contracts
/admin/rent-payments
```

- Quản lý khách thuê.
- Tạo hợp đồng, chọn phòng và khách thuê.
- Nhập ngày bắt đầu, tiền thuê tháng, tiền cọc và trạng thái.
- Khi hợp đồng `ACTIVE`, phòng chuyển sang `RENTED`.
- Tạo/cập nhật khoản thu tiền trọ theo tháng.

Trạng thái thanh toán theo `paidAmount`:

- `UNPAID`: chưa thu.
- `PARTIAL`: thu một phần.
- `PAID`: đã thu đủ.

## Doanh thu và xuất Excel

Trang:

```text
/admin/revenue
```

Có thể lọc theo:

- Tháng.
- Năm.
- Nhà trọ.
- Trạng thái.

API export:

```text
GET /api/admin/revenue/export?month=6&year=2026
```

Tên file:

```text
doanh-thu-thang-MM-YYYY.xlsx
```

## API public

```text
GET  /api/houses
GET  /api/houses/[houseId]
GET  /api/rooms
GET  /api/rooms/[roomId]
GET  /api/areas
GET  /api/amenities
POST /api/booking-requests
```

`POST /api/booking-requests` chỉ chấp nhận phòng `AVAILABLE`.

## API admin

Tất cả API sau yêu cầu đăng nhập admin:

```text
/api/admin/dashboard
/api/admin/houses
/api/admin/rooms
/api/admin/amenities
/api/admin/booking-requests
/api/admin/tenants
/api/admin/contracts
/api/admin/rent-payments
/api/admin/revenue
/api/admin/revenue/export
/api/admin/room-images
```

## Model database chính

- `User`: tài khoản admin, password hash bằng bcryptjs.
- `BoardingHouse`: nhà trọ.
- `Room`: phòng trọ.
- `RoomImage`: ảnh phòng.
- `Amenity` và `RoomAmenity`: tiện ích phòng.
- `BookingRequest`: yêu cầu xem phòng/đặt phòng.
- `Tenant`: khách thuê.
- `RentalContract`: hợp đồng thuê phòng.
- `RentPayment`: khoản thu tiền trọ theo tháng.

## Kiểm thử nhanh

### Login admin

Vào `/admin/login`, đăng nhập bằng tài khoản mẫu và kiểm tra redirect về `/admin`.

### Public ẩn phòng đã thuê

Vào `/rooms`, kiểm tra bộ lọc không có `RENTED`.

Request:

```text
/api/rooms?status=RENTED
```

phải bị từ chối.

### Chi tiết phòng đã thuê

Truy cập `/rooms/[roomId]` của phòng `RENTED` phải báo:

```text
Phòng này hiện không khả dụng
```

### Thu tiền trọ

Vào `/admin/rent-payments`, tạo/cập nhật `paidAmount` và kiểm tra trạng thái tự đổi theo số tiền đã thu.

### Xuất Excel

Vào `/admin/revenue` và dùng nút xuất Excel hoặc gọi:

```text
/api/admin/revenue/export?month=6&year=2026
```

sau khi đăng nhập.

## Gợi ý hiển thị trên MTWebsite

**Tên project:** Website Quản Lý Nhà Trọ

**Mô tả ngắn:** Hệ thống quản lý và cho thuê phòng trọ xây dựng bằng Next.js, TypeScript, Prisma và MySQL, gồm website tìm phòng cho khách hàng và hệ thống quản trị nhà trọ, phòng, khách thuê, hợp đồng, thu tiền và doanh thu.

**Cover đề xuất:** `02-rental-room-demo-light.png`

**Gallery đề xuất:**

1. `02-rental-room-demo-light.png`
2. `01-rental-room-demo-dark.png`

Hai ảnh này là demo trực quan để portfolio thể hiện phạm vi giao diện của hệ thống.
