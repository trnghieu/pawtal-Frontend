import { cloudinaryUrl, imageOrFallback } from "../../utils/cloudinary";

export default function HealthBanner() {
  const banner = imageOrFallback(
    cloudinaryUrl(import.meta.env.VITE_CLOUDINARY_HEALTH_BANNER, {
      transforms: "f_auto,q_auto,w_1600",
    }),
    "https://images.unsplash.com/photo-1583512603806-077998240c7a?auto=format&fit=crop&w=1600&q=80"
  );

  return (
    <section className="health-banner" style={{ backgroundImage: `url(${banner})` }}>
      <div className="health-banner-copy">
        <div className="mini-brand">Pawtal x PETPRO</div>
        <h2>Lịch trình tiêm phòng & lưu ý</h2>
        <button className="primary-btn small">Xem thêm</button>
      </div>
    </section>
  );
}