export default function SecurityPage() {
  return (
    <div className="page-shell page-stack">
      <section className="page-banner cream-card">
        <h1>Bảo mật</h1>
        <p>Quản lý thông báo mất tích, quyền truy cập và xác thực tài khoản.</p>
      </section>
      <div className="simple-grid">
        <article className="card-soft simple-card"><h3>Xác thực 2 bước</h3><p>Kích hoạt xác thực để bảo vệ hồ sơ và vị trí thú cưng.</p></article>
        <article className="card-soft simple-card"><h3>Thông báo mất tích</h3><p>Nhận cảnh báo khi thú cưng rời khỏi vùng an toàn.</p></article>
        <article className="card-soft simple-card"><h3>Thiết bị đáng tin cậy</h3><p>Quản lý danh sách thiết bị đã từng đăng nhập.</p></article>
      </div>
    </div>
  );
}
