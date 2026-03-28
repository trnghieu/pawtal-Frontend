const faqItems = [
  {
    id: 1,
    q: "Làm sao để định vị thú cưng?",
    a: "Bạn có thể truy cập mục Dịch vụ > Định vị để xem vị trí gần nhất của thú cưng đã kích hoạt thiết bị.",
  },
  {
    id: 2,
    q: "Tôi có thể cập nhật hồ sơ sức khỏe ở đâu?",
    a: "Trong mục Hồ sơ > Sức khỏe, bạn sẽ xem được lịch sử tiêm chủng, thăm khám và thông tin y tế cơ bản.",
  },
  {
    id: 3,
    q: "Làm sao để mua vòng cổ thông minh?",
    a: "Truy cập Dịch vụ > Mua sắm, chọn sản phẩm và bấm Mua ngay để bắt đầu đặt hàng.",
  },
];

export default function SupportPage() {
  return (
    <div className="page-shell page-stack">
      <section className="support-hero">
        <div>
          <h1>Chăm sóc khách hàng</h1>
          <p>Chúng tôi luôn đồng hành cùng bạn trong quá trình chăm sóc và bảo vệ thú cưng.</p>
        </div>
      </section>

      <section className="support-grid">
        <div className="support-card">
          <h2>Liên hệ nhanh</h2>
          <ul>
            <li>Hotline: 0963 562 567</li>
            <li>Email: hello@pawtal.vn</li>
            <li>Thời gian hỗ trợ: 8:00 - 20:00</li>
          </ul>
        </div>

        <div className="support-card">
          <h2>Câu hỏi thường gặp</h2>
          <div className="faq-list">
            {faqItems.map((item) => (
              <article key={item.id} className="faq-item">
                <h3>{item.q}</h3>
                <p>{item.a}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}