import { useEffect, useState } from 'react';
import { ServiceAPI } from '../api/services';
import { imageOrFallback } from '../utils/cloudinary';
import { formatCurrency } from '../utils/format';

export default function ServicePackagesPage() {
  const [services, setServices] = useState([]);
  useEffect(() => {
    ServiceAPI.list().then((res) => setServices(res.data?.data || [])).catch(() => setServices([]));
  }, []);

  return (
    <div className="page-shell page-stack">
      <section className="page-banner blue-card inverse">
        <h1>Gói dịch vụ Pawtal</h1>
        <p>Tổng hợp hồ sơ số, định vị, lịch tiêm và chăm sóc cộng đồng trong các gói linh hoạt.</p>
      </section>
      <div className="services-grid">
        {services.map((item) => (
          <article key={item._id} className="service-card">
            <div className="service-card-image"><img src={imageOrFallback(item.image, 'https://placehold.co/800x520/dcecf7/0b5d91?text=Pawtal')} alt={item.name} /></div>
            <div className="service-card-body">
              <h3>{item.name}</h3>
              <p>{item.description || 'Gói dịch vụ chăm sóc và quản lý toàn diện cho thú cưng.'}</p>
              <div className="service-card-foot">
                <span>{item.duration} phút</span>
                <strong>{formatCurrency(item.price)}</strong>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
