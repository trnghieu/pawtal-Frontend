import { Link } from "react-router-dom";
import { cloudinaryUrl, imageOrFallback } from "../utils/cloudinary";

export default function CommunityPage() {
  const hero = imageOrFallback(
    cloudinaryUrl(import.meta.env.VITE_CLOUDINARY_COMMUNITY_HERO, {
      transforms: "f_auto,q_auto,w_1600",
    }),
    "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=1600&q=80"
  );

  const cards = [
    imageOrFallback(
      cloudinaryUrl(import.meta.env.VITE_CLOUDINARY_COMMUNITY_1, { transforms: "f_auto,q_auto,w_900" }),
      "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=900&q=80"
    ),
    imageOrFallback(
      cloudinaryUrl(import.meta.env.VITE_CLOUDINARY_COMMUNITY_2, { transforms: "f_auto,q_auto,w_900" }),
      "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&w=900&q=80"
    ),
    imageOrFallback(
      cloudinaryUrl(import.meta.env.VITE_CLOUDINARY_COMMUNITY_3, { transforms: "f_auto,q_auto,w_900" }),
      "https://images.unsplash.com/photo-1444212477490-ca407925329e?auto=format&fit=crop&w=900&q=80"
    ),
  ];

  return (
    <div className="page-shell page-stack">
      <section className="community-hero" style={{ backgroundImage: `url(${hero})` }}>
        <div className="community-hero__overlay">
          <h1>CỘNG ĐỒNG PAWTAL</h1>
          <p>Kết nối chủ nuôi, chia sẻ câu chuyện và tìm lại thú cưng an toàn hơn.</p>
          <Link className="primary-btn" to="/dang-ky">Tham gia ngay</Link>
        </div>
      </section>

      <section className="community-grid">
        {cards.map((src, idx) => (
          <article key={idx} className="community-card">
            <img src={src} alt={`Community ${idx + 1}`} />
            <div className="community-card__body">
              <h3>Bài viết cộng đồng #{idx + 1}</h3>
              <p>Chia sẻ kinh nghiệm chăm sóc, huấn luyện và bảo vệ thú cưng mỗi ngày.</p>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}