import { useEffect, useMemo, useState } from 'react';
import { ProductAPI } from '../api/services';
import { imageOrFallback } from '../utils/cloudinary';
import { formatCurrency } from '../utils/format';

export default function ShopPage() {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState('all');

  useEffect(() => {
    ProductAPI.list().then((res) => setProducts(res.data?.data || [])).catch(() => setProducts([]));
  }, []);

  const filtered = useMemo(() => category === 'all' ? products : products.filter((item) => item.category === category), [products, category]);

  return (
    <div className="page-shell page-stack">
      <section className="page-banner cream-card">
        <h1>Mua sắm cho thú cưng</h1>
        <p>Chọn sản phẩm phù hợp với hồ sơ sức khỏe và thói quen vận động của bé.</p>
      </section>
      <div className="filter-row">
        {['all', 'food', 'accessory', 'toy'].map((item) => (
          <button key={item} className={`filter-chip ${category === item ? 'active' : ''}`} onClick={() => setCategory(item)}>
            {item === 'all' ? 'Tất cả' : item}
          </button>
        ))}
      </div>
      <div className="product-grid shop-grid">
        {filtered.map((item) => (
          <article className="product-card shop-card" key={item._id}>
            <div className="product-image-wrap"><img src={imageOrFallback(item.image, 'https://placehold.co/640x760/f1e8d6/0b5d91?text=Pawtal')} alt={item.name} /></div>
            <div className="product-info">
              <span className="category-tag">{item.category}</span>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <div className="product-foot">
                <strong>{formatCurrency(item.price)}</strong>
                <button className="primary-btn small">Mua ngay</button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
