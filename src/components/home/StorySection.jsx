import { Link } from "react-router-dom";
import { cloudinaryUrl, imageOrFallback } from "../../utils/cloudinary";

const PAWTAL_LOGO =
  "https://res.cloudinary.com/dlipnztpt/image/upload/v1774662844/Screenshot_2026-03-17_111732-removebg-preview_oqju55.png";

export default function StorySection() {
  const storyImage = imageOrFallback(
    cloudinaryUrl(import.meta.env.VITE_CLOUDINARY_HOME_STORY, {
      transforms: "f_auto,q_auto,w_900",
    }),
    "https://res.cloudinary.com/dlipnztpt/image/upload/v1774673417/IMG_3066_1_lvl3tj.jpg"
  );

  return (
    <section className="story-section-desktop">
      <div className="story-section-desktop__inner">
        <div className="story-section-desktop__image-wrap">
          <img
            src={storyImage}
            alt="Người dùng Pawtal"
            className="story-section-desktop__image"
          />
        </div>

        <div className="story-section-desktop__content">
          <div className="story-section-desktop__logo">
            <img src={PAWTAL_LOGO} alt="Pawtal" className="pawtal-inline-logo" />
          </div>

          <h2 className="story-section-desktop__title">
            ĐỊNH DANH VỮNG VÀNG
            <br />
            AN TÂM DẪN LỐI
          </h2>

          <div className="story-section-desktop__text">
            <p>
              Hệ thống quản lý thông minh tiên phong, kết hợp giữa vòng cổ công
              nghệ và ứng dụng di động tạo nên một “hộ chiếu số” cho người bạn
              bốn chân.
            </p>
            <p>
              Chúng tôi không chỉ định danh, mà còn xây dựng một cộng đồng thú
              cưng an toàn, hiện đại và tràn đầy tình thương.
            </p>
          </div>

          <div className="story-section-desktop__actions">
            <Link className="primary-btn" to="/dich-vu">
              DỊCH VỤ
            </Link>
            <Link className="secondary-btn" to="/cong-dong">
              CỘNG ĐỒNG
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}