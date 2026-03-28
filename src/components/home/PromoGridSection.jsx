import { Link } from "react-router-dom";
import { cloudinaryUrl, imageOrFallback } from "../../utils/cloudinary";

export default function PromoGridSection() {
  const supportImage = imageOrFallback(
    cloudinaryUrl(import.meta.env.VITE_CLOUDINARY_HOME_CARD_1, {
      transforms: "f_auto,q_auto,w_800",
    }),
    "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=800&q=80"
  );

  const profileImage = imageOrFallback(
    cloudinaryUrl(import.meta.env.VITE_CLOUDINARY_HOME_CARD_2, {
      transforms: "f_auto,q_auto,w_800",
    }),
    "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=800&q=80"
  );

  const communityImage = imageOrFallback(
    cloudinaryUrl(import.meta.env.VITE_CLOUDINARY_HOME_CARD_3, {
      transforms: "f_auto,q_auto,w_1200",
    }),
    "https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?auto=format&fit=crop&w=1200&q=80"
  );

  const servicePetsImage = imageOrFallback(
    cloudinaryUrl(import.meta.env.VITE_CLOUDINARY_HOME_SERVICE_CARD, {
      transforms: "f_auto,q_auto,w_1200",
    }),
    "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=1200&q=80"
  );

  return (
    <section className="promo-grid-v2">
      <div className="promo-grid-v2__left">
        <article className="promo-card-v2 promo-card-v2--small promo-card-v2--support">
          <div className="promo-card-v2__image-wrap">
            <img src={supportImage} alt="CSKH" className="promo-card-v2__image" />
          </div>
          <div className="promo-card-v2__footer">
            <Link to="/cskh" className="promo-pill-btn">
              CSKH
            </Link>
          </div>
        </article>

        <article className="promo-card-v2 promo-card-v2--small promo-card-v2--profile">
          <div className="promo-card-v2__image-wrap">
            <img src={profileImage} alt="Hồ sơ thú cưng" className="promo-card-v2__image" />
          </div>
          <div className="promo-card-v2__footer">
            <Link to="/ho-so/dinh-danh" className="promo-pill-btn">
              HỒ SƠ THÚ CƯNG
            </Link>
          </div>
        </article>

        <article className="promo-service-card-v2">
          <div className="promo-service-card-v2__content">
            <div className="promo-service-card-v2__copy">
              <h3>
                KHÁM PHÁ
                <br />
                GÓI DỊCH VỤ MỚI
              </h3>
              <p>Cập nhật những thông tin tâm đắc đi làm</p>
              <span className="promo-deal-tag">DEAL MỚI 03.03 - 23.03.2026</span>
            </div>

            <div className="promo-service-card-v2__pets">
              <img src={servicePetsImage} alt="Dịch vụ Pawtal" />
            </div>
          </div>

          <div className="promo-card-v2__footer promo-card-v2__footer--service">
            <Link to="/dich-vu/goi-dich-vu" className="promo-pill-btn">
              DỊCH VỤ
            </Link>
          </div>
        </article>
      </div>

      <div className="promo-grid-v2__right">
        <article className="promo-community-card-v2">
          <div className="promo-community-card-v2__image-wrap">
            <img
              src={communityImage}
              alt="Tham gia cộng đồng"
              className="promo-community-card-v2__image"
            />
          </div>

          <div className="promo-card-v2__footer promo-card-v2__footer--community">
            <Link to="/cong-dong" className="promo-pill-btn">
              THAM GIA CỘNG ĐỒNG
            </Link>
          </div>
        </article>
      </div>
    </section>
  );
}