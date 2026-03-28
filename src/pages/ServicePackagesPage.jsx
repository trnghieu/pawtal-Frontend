const packages = [
  {
    id: "basic",
    name: "GÓI CƠ BẢN",
    price: "199.000 VND",
    features: ["Hồ sơ thú cưng", "Lưu lịch sử sức khỏe", "QR định danh"],
  },
  {
    id: "plus",
    name: "GÓI PLUS",
    price: "399.000 VND",
    features: ["Toàn bộ gói cơ bản", "Nhắc lịch tiêm", "Định vị cơ bản"],
  },
  {
    id: "pro",
    name: "GÓI PRO",
    price: "699.000 VND",
    features: ["Toàn bộ gói plus", "Theo dõi GPS nâng cao", "Hỗ trợ ưu tiên"],
  },
];

export default function ServicePackagesPage() {
  return (
    <div className="page-shell page-stack">
      <section className="packages-hero">
        <h1>Gói dịch vụ Pawtal</h1>
        <p>
          Lựa chọn giải pháp phù hợp cho nhu cầu chăm sóc, nhận diện và định vị thú cưng.
        </p>
      </section>

      <section className="packages-grid">
        {packages.map((pkg) => (
          <article key={pkg.id} className="package-card">
            <div className="package-card__head">
              <h2>{pkg.name}</h2>
              <div className="package-card__price">{pkg.price}</div>
            </div>
            <ul>
              {pkg.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
            <button className="primary-btn">Chọn gói</button>
          </article>
        ))}
      </section>
    </div>
  );
}