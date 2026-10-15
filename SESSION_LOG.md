# NHẬT KÝ PHIÊN LÀM VIỆC (SESSION LOG)
**Dự án:** Portfolio & CV Cập nhật - Trịnh Quang Tâm  
**Workspace:** `c:\Users\ngtam\Downloads\pof`  
**Khởi tạo:** 2026-10-15  
**Cập nhật lần cuối:** 2026-10-15 14:21  

---

## 1. Trạng Thái Hiện Tại (Current Status)
- Đã hoàn thành 100% yêu cầu xử lý/edit và gắn video demo tự động chạy khi lướt tới (scroll-in-view auto-play) cho toàn bộ các dự án:
  1. **TMPMS:** Video demo sản phẩm thực tế được nén và tối ưu từ screen recording thành `public/videos/tmpms.mp4` (5.14 MB, web-optimized faststart H.264).
  2. **Việt Phục Các – Phòng Thử Đồ Cổ Phục:** Video demo tương tác thay đồ, nhuộm gấm và xuất lookbook từ screen recording thành `public/videos/viet-phuc-cac.mp4` (2.15 MB, web-optimized faststart H.264).
  3. **Tracking Phượt:** Tải từ YouTube `https://youtu.be/56dwJ55X3eY`, tối ưu thành `public/videos/tracking-phuot.mp4` (9.26 MB) để tự động phát mượt mà khi cuộn tới; kèm nút liên kết trực tiếp "YouTube" dẫn thẳng đến video YouTube gốc.
- Đã xây dựng component `VideoPreview.tsx` chuẩn responsive, tích hợp `IntersectionObserver` tự động play khi cuộn vào tầm nhìn (>30%) và pause khi cuộn ra ngoài để tiết kiệm CPU/GPU/băng thông. Có thanh progress bar trực quan, hiệu ứng hover nút Play/Pause và badge trạng thái.
- Đã tích hợp đồng bộ vào `FeaturedProject.tsx`, `ProjectCard.tsx`, trang case study `TmpmsView.tsx`, `TrackingPhuotView.tsx`, và dữ liệu `lib/data.ts` cùng `static-version/js/data.js`.
- Cập nhật `.gitignore` cho phép push video `!public/videos/*.mp4`.
- Kiểm thử build production (`npm run build`) thành công 100% không có bất kỳ lỗi nào.

---

## 2. Lịch Sử Làm Việc (History / Timeline)

### [2026-10-15 14:10] - Khảo sát & Phân tích ban đầu
- Đọc và phân tích yêu cầu của User về CV và dự án.
- Khảo sát repo `c:\Users\ngtam\Downloads\dressroom` và trích xuất bullet points.

### [2026-10-15 14:13] - Hoàn thiện CV và đồng bộ dữ liệu Portfolio
- Biên dịch 2 bản CV LaTeX sang PDF 1 trang A4.
- Cập nhật profile, kỹ năng, kinh nghiệm và giao diện chatbot. Build Next.js thành công.

### [2026-10-15 17:25] - Edit và gắn Video Auto-play trên từng Project
- **Phân tích nguồn video:**
  - `Screen Recording 2026-10-15 152424.mp4` (48 MB) -> Website TMPMS (Trang chủ, chi tiết sản phẩm Đông Y, trang quản trị).
  - `Screen Recording 2026-10-15 153735.mp4` (67 MB) -> Việt Phục Các (Giao diện thử đồ 3D, đổi màu sắc triều Nguyễn).
  - YouTube `https://youtu.be/56dwJ55X3eY` -> Tracking Phượt (Demo tái hiện bản đồ GPS, timeline ảnh).
- **Xử lý & Biên tập Video:**
  - Nâng cấp `yt-dlp` và tải video HLS của Tracking Phượt.
  - Dùng `ffmpeg` chuẩn hóa cả 3 video sang định dạng H.264 Web (720p/1280px, CRF 24-26, `-movflags +faststart`, không chứa track audio nặng gây block autoplay trình duyệt).
  - Kết quả nén siêu nhẹ: TMPMS: 5.14 MB (giảm ~90%), Việt Phục Các: 2.15 MB (giảm ~97%), Tracking Phượt: 9.26 MB.
- **Phát triển UI/UX (Scroll Autoplay Component):**
  - Tạo `components/VideoPreview.tsx`: Sử dụng `IntersectionObserver` tự động phát mượt mà khi cuộn vào khung nhìn, tạm dừng khi cuộn ra; hỗ trợ poster thumbnail mượt mà tránh giật lag; badge trạng thái "Playing" / "Demo" nhấp nháy; nút Play/Pause khi rê chuột; thanh progress bar mảnh đồng điệu tone màu thiết kế.
  - Nâng cấp `components/FeaturedProject.tsx` hiển thị video demo lớn cho TMPMS.
  - Nâng cấp `components/ProjectCard.tsx` hiển thị video demo tự chạy cho Tracking Phượt và Việt Phục Các, tích hợp nút "YouTube" với icon `SiYoutube` cho Tracking Phượt.
  - Nâng cấp trang Case Study `TmpmsView.tsx` và `TrackingPhuotView.tsx` dùng `VideoPreview` sắc nét.
  - Cập nhật `lib/data.ts` và `static-version/js/data.js` bổ sung trường `video` và `youtubeUrl`.
  - Cập nhật `.gitignore` mở ngoại lệ `!public/videos/*.mp4`.
- **Kiểm thử thực tế (Mandatory Verification):**
  - Chạy lệnh `npm run build`: Thành công 100% (Compiled successfully in Turbopack, Typecheck OK, 14/14 static pages prerendered).

---

## 3. Các Bước Tiếp Theo (Next Steps)
- Người dùng có thể kiểm tra trực tiếp giao diện bằng cách chạy dev server hoặc deploy lên Vercel.
- Các video demo sẽ tự động chạy mượt mà ngay khi người dùng cuộn chuột tới từng project.
