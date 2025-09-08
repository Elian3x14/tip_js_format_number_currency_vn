<!--title-->
# Format số thành tiền tệ trong JavaScript
<!--/title-->

Khi làm việc với **giá cả, hóa đơn, doanh thu**, hiển thị số ở dạng tiền tệ giúp giao diện dễ đọc và chuyên nghiệp hơn.

Trong JavaScript, có 2 hướng phổ biến:

1. **Tự code thủ công (dễ lỗi, mất công).**
2. **Dùng `Intl.NumberFormat` (ngắn gọn, chuẩn quốc tế).**

---

## 1. Cách thủ công

Nhiều bạn hay viết hàm nhỏ để chèn dấu chấm `.` ngăn cách hàng nghìn:

```js
function formatCurrencyManual(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

console.log(formatCurrencyManual(900000)); 
// 900.000
```

Nếu muốn thêm ký hiệu tiền, lại phải nối chuỗi:

```js
console.log(formatCurrencyManual(900000) + " ₫");
// 900.000 ₫
```

Nhược điểm:

* Khó mở rộng cho nhiều loại tiền (USD, EUR, …).
* Phải tự xử lý dấu `,` hoặc `.` tùy quốc gia.
* Cần viết thêm code nếu muốn hiển thị số lẻ thập phân.

---

## 2. Cách hiện đại với `Intl.NumberFormat`

Chỉ cần vài dòng, kết quả chuẩn quốc tế:

```js
const number = 900000;

const formatted = new Intl.NumberFormat("vi-VN", {
  style: "currency",
  currency: "VND"
}).format(number);

console.log(formatted);
// 900.000 ₫
```

Ưu điểm:

* Tự động chèn dấu phân cách đúng theo locale.
* Hỗ trợ nhiều loại tiền tệ (`USD`, `EUR`, `JPY`, …).
* Có thể điều chỉnh số thập phân, kiểu hiển thị.
* Được tối ưu sẵn trong JavaScript, không cần thêm thư viện.

---

## 3. So sánh nhanh

| Tiêu chí          | Cách thủ công | `Intl.NumberFormat` |
| ----------------- | ------------- | ------------------- |
| Viết code         | Dài, dễ lỗi   | Ngắn gọn, rõ ràng   |
| Hỗ trợ đa tiền tệ | Không         | Có                  |
| Locale (quốc gia) | Phải tự xử lý | Tích hợp sẵn        |
| Tính linh hoạt    | Hạn chế       | Rất cao             |

---

## 4. Khi nào dùng?

* **Thủ công:** chỉ khi bạn muốn học regex hoặc xử lý đơn giản, cố định (ví dụ chỉ hiển thị VND).
* **`Intl.NumberFormat`:** gần như luôn nên dùng, đặc biệt với app thương mại điện tử, dashboard, hệ thống quốc tế.

Bạn có muốn mình thêm **một demo code sandbox (dùng HTML + JS nhỏ) cho phép người dùng nhập số và chọn loại tiền để xem kết quả trực tiếp** không?
