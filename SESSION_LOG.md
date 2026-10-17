# NHẬT KÝ PHIÊN LÀM VIỆC (SESSION LOG)
**Dự án:** Portfolio & CV Cập nhật - Trịnh Quang Tâm  
**Workspace:** `c:\Users\ngtam\Downloads\pof`  
**Khởi tạo:** 2026-10-15  
**Cập nhật lần cuối:** 2026-10-16 13:02  

---

## 1. Trạng Thái Hiện Tại (Current Status)
- Đã cập nhật bổ sung liên kết Portfolio chính thức: `https://tamagok4.vercel.app/` vào toàn bộ các file CV nguồn LaTeX và biên dịch lại toàn bộ các bản PDF:
  1. [`cv/main_example_vi.tex`](file:///c:/Users/ngtam/Downloads/pof/cv/main_example_vi.tex) -> [`cv/Trinh-Quang-Tam-CV-VI.pdf`](file:///c:/Users/ngtam/Downloads/pof/cv/Trinh-Quang-Tam-CV-VI.pdf) & [`public/Trinh-Quang-Tam-CV-VI.pdf`](file:///c:/Users/ngtam/Downloads/pof/public/Trinh-Quang-Tam-CV-VI.pdf).
  2. [`cv/main_example.tex`](file:///c:/Users/ngtam/Downloads/pof/cv/main_example.tex) -> [`cv/Trinh-Quang-Tam-CV-EN.pdf`](file:///c:/Users/ngtam/Downloads/pof/cv/Trinh-Quang-Tam-CV-EN.pdf) & [`public/Trinh-Quang-Tam-CV-EN.pdf`](file:///c:/Users/ngtam/Downloads/pof/public/Trinh-Quang-Tam-CV-EN.pdf).
  3. [`cv/cv_ai_thuc_chien_vinuni.tex`](file:///c:/Users/ngtam/Downloads/pof/cv/cv_ai_thuc_chien_vinuni.tex) -> [`cv/Trinh-Quang-Tam-CV-AI-Thuc-Chien-VinUni.pdf`](file:///c:/Users/ngtam/Downloads/pof/cv/Trinh-Quang-Tam-CV-AI-Thuc-Chien-VinUni.pdf) & [`public/Trinh-Quang-Tam-CV-AI-Thuc-Chien-VinUni.pdf`](file:///c:/Users/ngtam/Downloads/pof/public/Trinh-Quang-Tam-CV-AI-Thuc-Chien-VinUni.pdf).
  4. [`cv/cv_ai_thuc_chien_vinuni_en.tex`](file:///c:/Users/ngtam/Downloads/pof/cv/cv_ai_thuc_chien_vinuni_en.tex) -> [`public/Trinh-Quang-Tam-CV-AI-Thuc-Chien-VinUni-EN.pdf`](file:///c:/Users/ngtam/Downloads/pof/public/Trinh-Quang-Tam-CV-AI-Thuc-Chien-VinUni-EN.pdf).
- Đã xác thực trích xuất nội dung và link annotation trong file PDF qua `pypdf`:
  - 100% các file PDF đều chuẩn xác đúng 1 trang A4 duy nhất, không tràn dòng.
  - Link Portfolio `https://tamagok4.vercel.app/` được nhúng trực tiếp, nhấp vào hoạt động chính xác.
- Đã chạy kiểm thử `npm run build`: Hoàn tất 100% thành công không lỗi (14/14 static pages prerendered).

---

## 2. Lịch Sử Làm Việc (History / Timeline)

### [2026-10-15 14:10] - Khảo sát & Phân tích ban đầu
- Đọc và phân tích yêu cầu của User về CV và dự án.
- Khảo sát repo `c:\Users\ngtam\Downloads\dressroom` và trích xuất bullet points.

### [2026-10-15 14:13] - Hoàn thiện CV và đồng bộ dữ liệu Portfolio
- Biên dịch 2 bản CV LaTeX sang PDF 1 trang A4.
- Cập nhật profile, kỹ năng, kinh nghiệm và giao diện chatbot. Build Next.js thành công.

### [2026-10-15 17:25] - Edit và gắn Video Auto-play trên từng Project
- Xử lý nén video: TMPMS (5.14 MB), Việt Phục Các (2.15 MB), Tracking Phượt (9.26 MB).
- Phát triển component `VideoPreview.tsx` tự động chạy khi lướt tới viewport.
- Tích hợp vào toàn bộ trang chủ và trang chi tiết dự án. Build Next.js thành công.

### [2026-10-16 10:10] - Tạo CV chuyên biệt nộp Chương trình AI Thực Chiến VinUni - Vingroup
- Khảo sát chương trình VinUni từ link tuyển sinh `https://vinuni.edu.vn/aithucchien/`.
- Tạo file CV ứng tuyển.

### [2026-10-16 10:19] - Điều chỉnh nghiêm ngặt theo đúng 100% CV gốc (Zero Hallucination)
- Loại bỏ toàn bộ các câu chữ và kỹ năng tự suy diễn.
- Khôi phục chính xác 100% cấu trúc và nội dung gốc từ [`cv/main_example_vi.tex`](file:///c:/Users/ngtam/Downloads/pof/cv/main_example_vi.tex) và [`cv/main_example.tex`](file:///c:/Users/ngtam/Downloads/pof/cv/main_example.tex).

### [2026-10-16 13:02] - Bổ sung liên kết Portfolio vào toàn bộ CV
- **Yêu cầu của User:** Cập nhật link portfolio `[Trịnh Quang Tâm - Frontend Developer](https://tamagok4.vercel.app/)` vào toàn bộ CV.
- **Thực hiện:**
  - Cập nhật trường `\extrainfo` với `\href{https://tamagok4.vercel.app/}{Portfolio}` trên tất cả 4 file LaTeX: `main_example_vi.tex`, `main_example.tex`, `cv_ai_thuc_chien_vinuni.tex`, `cv_ai_thuc_chien_vinuni_en.tex`.
  - Biên dịch toàn bộ bằng `lualatex`, đồng bộ đầy đủ các file PDF ra cả thư mục `cv/` và thư mục `public/`.
  - Kiểm tra link annotations trong PDF: xác nhận URI `https://tamagok4.vercel.app/` đã được nhúng và kích hoạt chuẩn xác.
  - Chạy `npm run build`: Thành công 100%.

---

## 3. Các Bước Tiếp Theo (Next Steps)
- Người dùng có thể sử dụng các file PDF đã cập nhật link portfolio để ứng tuyển hoặc gửi nhà tuyển dụng.
