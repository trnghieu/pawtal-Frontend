export default function SecurityPage() {
  return (
    <div className="page-shell page-stack">
      <section className="settings-page-card">
        <div className="settings-page-card__head">
          <h1>Bảo mật tài khoản</h1>
          <span className="lang-chip">SECURITY</span>
        </div>

        <div className="settings-list">
          <article className="settings-item">
            <div>
              <h3>Đổi mật khẩu</h3>
              <p>Cập nhật mật khẩu định kỳ để đảm bảo an toàn cho tài khoản.</p>
            </div>
            <button className="primary-btn small">Cập nhật</button>
          </article>

          <article className="settings-item">
            <div>
              <h3>Thiết bị đăng nhập</h3>
              <p>Kiểm tra những thiết bị gần đây đã truy cập Pawtal.</p>
            </div>
            <button className="secondary-btn small">Xem danh sách</button>
          </article>

          <article className="settings-item">
            <div>
              <h3>Xác thực 2 bước</h3>
              <p>Tăng cường bảo mật bằng mã xác nhận khi đăng nhập.</p>
            </div>
            <button className="secondary-btn small">Bật tính năng</button>
          </article>
        </div>
      </section>
    </div>
  );
}