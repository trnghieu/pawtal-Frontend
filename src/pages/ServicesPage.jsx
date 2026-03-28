import { Link } from "react-router-dom";
import useServices from "../hooks/useServices";

export default function ServicesPage() {
  const { services } = useServices();

  return (
    <div className="page-shell page-stack">
      <section className="services-hero">
        <div className="services-hero__copy">
          <h1>DỊCH VỤ PAWTAL</h1>
          <p>
            Định vị, hồ sơ sức khỏe, nhận diện thú cưng và kết nối cộng đồng
            trong một nền tảng duy nhất.
          </p>
        </div>
      </section>

      <section className="services-grid">
        <Link to="/dich-vu/dinh-vi" className="service-nav-card">Định vị</Link>
        <Link to="/dich-vu/mua-sam" className="service-nav-card">Mua sắm</Link>
        <Link to="/dich-vu/goi-dich-vu" className="service-nav-card">Gói dịch vụ</Link>
      </section>

      <section className="service-list-grid">
        {services.map((service) => (
          <article key={service._id || service.id} className="service-card">
            <div className="service-card__image">
              <img
                src={
                  service?.image?.url ||
                  service?.image ||
                  "https://placehold.co/600x400/ece4d5/0b5d91?text=Service"
                }
                alt={service.name}
              />
            </div>

            <div className="service-card__body">
              <h3>{service.name}</h3>
              <p>{service.description || "Dịch vụ trong hệ sinh thái Pawtal."}</p>
              <div className="service-card__meta">
                <span>{service.duration ? `${service.duration} phút` : "Linh hoạt"}</span>
                <strong>
                  {service.price
                    ? `${Number(service.price).toLocaleString("vi-VN")} VND`
                    : "Liên hệ"}
                </strong>
              </div>
              <button className="primary-btn small">Đặt lịch</button>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}