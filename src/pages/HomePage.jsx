import { Link } from 'react-router-dom';
import { cloudinaryUrl, imageOrFallback } from '../utils/cloudinary';

export default function HomePage() {
  const hero = imageOrFallback(
    cloudinaryUrl(import.meta.env.VITE_CLOUDINARY_HOME_HERO, { transforms: 'f_auto,q_auto,w_1600' }),
    'https://res.cloudinary.com/dlipnztpt/image/upload/v1774416114/pawtal/pets/nlfd8twrjtiljpvl2y7l.png'
  );

  const storyImage = imageOrFallback(
    cloudinaryUrl(import.meta.env.VITE_CLOUDINARY_HOME_STORY, { transforms: 'f_auto,q_auto,w_900' }),
    'https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&w=900&q=80'
  );

  const collar1 = imageOrFallback(
    cloudinaryUrl(import.meta.env.VITE_CLOUDINARY_HOME_COLLAR_1, { transforms: 'f_auto,q_auto,w_420' }),
    'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=420&q=80'
  );
  const collar2 = imageOrFallback(
    cloudinaryUrl(import.meta.env.VITE_CLOUDINARY_HOME_COLLAR_2, { transforms: 'f_auto,q_auto,w_420' }),
    'https://images.unsplash.com/photo-1534361960057-19889db9621e?auto=format&fit=crop&w=420&q=80'
  );
  const collar3 = imageOrFallback(
    cloudinaryUrl(import.meta.env.VITE_CLOUDINARY_HOME_COLLAR_3, { transforms: 'f_auto,q_auto,w_420' }),
    'https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=420&q=80'
  );

  const bottomImages = [
    imageOrFallback(cloudinaryUrl(import.meta.env.VITE_CLOUDINARY_HOME_CARD_1, { transforms: 'f_auto,q_auto,w_700' }), 'https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?auto=format&fit=crop&w=700&q=80'),
    imageOrFallback(cloudinaryUrl(import.meta.env.VITE_CLOUDINARY_HOME_CARD_2, { transforms: 'f_auto,q_auto,w_700' }), 'https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=700&q=80'),
    imageOrFallback(cloudinaryUrl(import.meta.env.VITE_CLOUDINARY_HOME_CARD_3, { transforms: 'f_auto,q_auto,w_1000' }), 'https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?auto=format&fit=crop&w=1000&q=80')
  ];

  return (
    <div className="page-shell page-stack home-page">
      <section className="home-hero" style={{ backgroundImage: `url(${hero})` }}>
        <div className="hero-actions">
          <Link className="pill-cta" to="/dang-nhap">Đăng nhập</Link>
          <Link className="pill-cta" to="/dang-nhap">Đăng ký</Link>
        </div>
      </section>

      <div className="gold-band">Chất lượng - Bảo mật - Uy tín</div>

      <section className="home-story">
        <div className="story-photo-wrap">
          <img src={storyImage} alt="Người dùng Pawtal" className="story-photo" />
        </div>
        <div className="story-content">
          <div className="mini-brand">Pawtal</div>
          <h1>ĐỊNH DANH VỮNG VÀNG AN TÂM DẪN LỐI</h1>
          <p>
            Với vòng định vị thông minh tích hợp QR/NFC, chủ nuôi dễ dàng quản lý hồ sơ, theo dõi sức khỏe,
            kết nối cộng đồng và an tâm hơn trên mọi hành trình cùng thú cưng.
          </p>
          <div className="cta-row">
            <Link className="primary-btn" to="/dich-vu">Dịch vụ</Link>
            <Link className="secondary-btn" to="/cong-dong">Cộng đồng</Link>
          </div>
        </div>
      </section>

      <section className="collar-showcase">
        <div className="collar-copy">
          <div className="section-kicker">MẪU SẢN</div>
          <h2>VÒNG CỔ THÔNG MINH</h2>
          <div className="product-info-title">THÔNG TIN SẢN PHẨM</div>
          <ul>
            <li>Vòng cổ thông minh GPS/NFC</li>
            <li>Thời gian pin 3 - 7 ngày</li>
            <li>Có chống sốc, chống nước nhẹ</li>
            <li>Thiết kế nhiều màu pastel</li>
          </ul>
        </div>
        <div className="collar-visuals">
          <div className="collar-stripes">
            <span className="stripe pink"></span>
            <span className="stripe mint"></span>
            <span className="stripe cream"></span>
          </div>
          <div className="collar-gallery home-collar-gallery">
            <img src={collar1} alt="Vòng cổ 1" />
            <img src={collar2} alt="Vòng cổ 2" />
            <img src={collar3} alt="Vòng cổ 3" />
          </div>
          <Link className="primary-btn small" to="/dich-vu/mua-sam">Mua hàng</Link>
        </div>
      </section>

      <section className="home-promo-grid">
        <article className="promo-small pink-card">
          <img src={bottomImages[0]} alt="Cộng đồng" />
          <span className="badge">Cộng đồng</span>
        </article>
        <article className="promo-small cream-card">
          <img src={bottomImages[1]} alt="Hồ sơ thú cưng" />
          <span className="badge">Hồ sơ thú cưng</span>
        </article>
        <article className="promo-service">
          <div>
            <h3>KHÁM PHÁ GÓI DỊCH VỤ MỚI</h3>
            <p>Định vị, nhận diện, quản lý hồ sơ và chăm sóc cộng đồng trong cùng một hệ sinh thái.</p>
            <Link className="primary-btn small" to="/dich-vu/goi-dich-vu">Dịch vụ</Link>
          </div>
        </article>
        <article className="promo-large">
          <img src={bottomImages[2]} alt="Tham gia cộng đồng" />
          <Link className="primary-btn small floating-cta" to="/cong-dong">Tham gia cộng đồng</Link>
        </article>
      </section>

      <footer className="site-footer compact-footer">
        <div>
          <div className="footer-title">LIÊN HỆ</div>
          <div className="footer-text">0963 562 567</div>
          <div className="footer-text">www.pawtal.local</div>
        </div>
        <div>
          <div className="footer-title">MẠNG XÃ HỘI</div>
          <div className="social-row">
            <span>f</span>
            <span>◎</span>
            <span>◉</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
