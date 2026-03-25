import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ProductAPI } from '../api/services';
import { cloudinaryUrl, imageOrFallback } from '../utils/cloudinary';
import { formatCurrency } from '../utils/format';

const petTypes = [
  { name: 'Chó', image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=500&q=80' },
  { name: 'Mèo', image: 'https://images.unsplash.com/photo-1519052537078-e6302a4968d4?auto=format&fit=crop&w=500&q=80' }
];

export default function ServicesPage() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    ProductAPI.list().then((res) => setProducts(res.data?.data || [])).catch(() => setProducts([]));
  }, []);
  const hero = imageOrFallback(cloudinaryUrl(import.meta.env.VITE_CLOUDINARY_HERO_SERVICES, { transforms: 'f_auto,q_auto,w_1600' }), 'https://images.unsplash.com/photo-1548681528-6a5c45b66b42?auto=format&fit=crop&w=1600&q=80');
  const featured = products.slice(0, 3);

  return (
    <div className="page-shell page-stack">
      <section className="service-hero split-hero">
        <div className="split-copy blue-block">
          <img className="hero-logo" src="/src/assets/logo.png" alt="" style={{ display: 'none' }} />
          <h1>ĐỊNH DANH VỮNG VÀNG AN TÂM DẪN LỐI</h1>
          <p>Giúp việc chăm sóc thú cưng trở nên thông minh và đơn giản.</p>
        </div>
        <div className="split-image" style={{ backgroundImage: `url(${hero})` }} />
      </section>
      <div className="sub-band">Giúp việc chăm sóc thú cưng trở nên thông minh và đơn giản</div>

      <section className="section-block center">
        <h2 className="section-title blue">THÚ CƯNG</h2>
        <div className="pet-type-grid">
          {petTypes.map((pet) => (
            <article key={pet.name} className="pet-type-card">
              <img src={pet.image} alt={pet.name} />
              <h3>{pet.name}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block center">
        <h2 className="section-title blue">SẢN PHẨM PHỔ BIẾN</h2>
        <div className="popular-grid">
          {featured.map((item) => (
            <Link className="popular-card" key={item._id} to="/dich-vu/mua-sam">
              <div className="popular-image"><img src={imageOrFallback(item.image, 'https://placehold.co/280x280/f2e9d6/0b5d91?text=Pawtal')} alt={item.name} /></div>
              <h4>{item.name}</h4>
            </Link>
          ))}
        </div>
      </section>

      <section className="section-block">
        <div className="section-heading with-line"><h3>Nổi bật</h3></div>
        <div className="feature-products-grid">
          {products.slice(0, 3).map((item, index) => (
            <article className={`feature-product ${index === 0 ? 'tall' : ''}`} key={item._id}>
              <div className="feature-product-image"><img src={imageOrFallback(item.image, 'https://placehold.co/600x820/ece4d5/0b5d91?text=Pawtal')} alt={item.name} /></div>
              <h4>{item.name}</h4>
              <p>{formatCurrency(item.price)}</p>
              <button className="primary-btn small">Mua ngay</button>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
