import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ProductAPI } from '../api/services';
import { cloudinaryUrl, imageOrFallback } from '../utils/cloudinary';
import { formatCurrency } from '../utils/format';

export default function CommunityPage() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    ProductAPI.list().then((res) => setProducts(res.data?.data || [])).catch(() => setProducts([]));
  }, []);

  const hero = imageOrFallback(cloudinaryUrl(import.meta.env.VITE_CLOUDINARY_COMMUNITY_BANNER, { transforms: 'f_auto,q_auto,w_1600' }), 'https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=1400&q=80');
  const topProducts = products.slice(0, 3);

  return (
    <div className="page-shell page-stack">
      <section className="community-hero" style={{ backgroundImage: `url(${hero})` }}>
        <div className="community-overlay">
          <div className="community-pill-row">
            <span className="community-pill">Đăng nhập</span>
            <span className="community-pill">Đăng ký</span>
          </div>
        </div>
      </section>
      <div className="gold-band">Chất lượng - Bảo mật - Uy tín</div>

      <section className="community-story card-soft two-col">
        <img className="story-image" src="https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&w=800&q=80" alt="pet owner" />
        <div className="story-copy">
          <div className="mini-brand">Pawtal</div>
          <h2>ĐỊNH DANH VỮNG VÀNG AN TÂM DẪN LỐI</h2>
          <p>Với vòng định vị thông minh tích hợp QR/NFC, chủ nuôi dễ dàng quản lý hồ sơ, theo dõi sức khỏe và kết nối cộng đồng chăm sóc thú cưng trong cùng một nền tảng.</p>
          <div className="cta-row">
            <Link className="primary-btn" to="/dich-vu">Dịch vụ</Link>
            <Link className="secondary-btn" to="/cong-dong">Cộng đồng</Link>
          </div>
        </div>
      </section>

      <section className="smart-collar-section">
        <div>
          <div className="section-kicker">MẪU SẢN</div>
          <h3 className="section-title">VÒNG CỔ THÔNG MINH</h3>
          <p className="muted">Vòng cổ thông minh tích hợp định vị, thẻ nhận diện và đồng bộ hồ sơ sức khỏe để chăm sóc thú cưng an toàn hơn mỗi ngày.</p>
        </div>
        <div className="collar-gallery">
          {['https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=500&q=80','https://images.unsplash.com/photo-1534361960057-19889db9621e?auto=format&fit=crop&w=500&q=80','https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=500&q=80'].map((img) => (
            <img key={img} src={img} alt="smart collar" />
          ))}
          <Link className="primary-btn small" to="/dich-vu/mua-sam">Mua hàng</Link>
        </div>
      </section>

      <section className="feature-grid-2">
        <article className="feature-card pink">
          <img src="https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?auto=format&fit=crop&w=500&q=80" alt="dịch vụ" />
          <span className="badge">Cộng đồng</span>
        </article>
        <article className="feature-card cream">
          <img src="https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=500&q=80" alt="hồ sơ" />
          <span className="badge">Hồ sơ thú cưng</span>
        </article>
        <article className="feature-card blue promo-card">
          <div>
            <h3>Khám phá gói dịch vụ mới</h3>
            <p>Định vị - hồ sơ số - chăm sóc cộng đồng trong một trải nghiệm thống nhất.</p>
            <Link className="primary-btn small" to="/dich-vu/goi-dich-vu">Dịch vụ</Link>
          </div>
        </article>
        <article className="feature-card beige">
          <img src="https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=800&q=80" alt="community" />
          <Link className="secondary-btn small floating" to="/cong-dong">Tham gia cộng đồng</Link>
        </article>
      </section>

      {topProducts.length ? (
        <section className="section-block">
          <div className="section-heading">
            <h3>Nổi bật</h3>
            <Link to="/dich-vu/mua-sam">Xem tất cả</Link>
          </div>
          <div className="product-grid home-grid">
            {topProducts.map((item) => (
              <article className="product-card" key={item._id}>
                <div className="product-image-wrap"><img src={imageOrFallback(item.image, 'https://placehold.co/600x720/ece4d5/0b5d91?text=Pawtal')} alt={item.name} /></div>
                <h4>{item.name}</h4>
                <p>{formatCurrency(item.price)}</p>
              </article>
            ))}
          </div>
        </section>
      ) : null}
    </div>
  );
}
