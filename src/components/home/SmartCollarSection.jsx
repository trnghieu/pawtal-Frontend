import { Link } from "react-router-dom";
import { cloudinaryUrl, imageOrFallback } from "../../utils/cloudinary";

const COLLAR_1 =
  "https://res.cloudinary.com/dlipnztpt/image/upload/v1774662844/Screenshot_2026-03-17_111732-removebg-preview_oqju55.png";

export default function SmartCollarSection() {
  const collarTop = imageOrFallback(
    cloudinaryUrl(import.meta.env.VITE_CLOUDINARY_HOME_COLLAR_GREEN, {
      transforms: "f_auto,q_auto,w_500",
    }),
    COLLAR_1
  );

  const collarMiddle = imageOrFallback(
    cloudinaryUrl(import.meta.env.VITE_CLOUDINARY_HOME_COLLAR_PINK, {
      transforms: "f_auto,q_auto,w_500",
    }),
    COLLAR_1
  );

  const collarBottom = imageOrFallback(
    cloudinaryUrl(import.meta.env.VITE_CLOUDINARY_HOME_COLLAR_BLUE, {
      transforms: "f_auto,q_auto,w_500",
    }),
    COLLAR_1
  );

  const catPreview = imageOrFallback(
    cloudinaryUrl(import.meta.env.VITE_CLOUDINARY_HOME_COLLAR_CAT, {
      transforms: "f_auto,q_auto,w_700",
    }),
    "https://images.unsplash.com/photo-1519052537078-e6302a4968d4?auto=format&fit=crop&w=700&q=80"
  );

  const dogPreview = imageOrFallback(
    cloudinaryUrl(import.meta.env.VITE_CLOUDINARY_HOME_COLLAR_DOG, {
      transforms: "f_auto,q_auto,w_800",
    }),
    "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=800&q=80"
  );

  return (
    <section className="smart-collar-section-v2">
      <div className="smart-collar-section-v2__heading">
        <h2>MUA SẮM</h2>
      </div>

      <div className="smart-collar-section-v2__grid">
        <div className="smart-collar-section-v2__info">
          <h3>THÔNG TIN SẢN PHẨM</h3>
          <ul>
            <li>Vòng cổ thông minh (GPS/NFC):</li>
            <li>Thời gian pin: 3–7 ngày</li>
            <li>Độ chính xác GPS: ±5–10m</li>
            <li>Trọng lượng vòng: {"<"} 50g</li>
            <li>Chất liệu: cao su/vải</li>
            <li>Màu sắc: lựa chọn màu yêu thích</li>
          </ul>
        </div>

        <div className="smart-collar-section-v2__collars">
          <div className="smart-collar-swatch">
            <img src={collarTop} alt="Vòng cổ xanh mint" />
          </div>
          <div className="smart-collar-swatch">
            <img src={collarMiddle} alt="Vòng cổ hồng" />
          </div>
          <div className="smart-collar-swatch">
            <img src={collarBottom} alt="Vòng cổ xanh dương" />
          </div>
        </div>

        <div className="smart-collar-section-v2__previews">
          <div className="smart-collar-preview smart-collar-preview--small">
            <img src={catPreview} alt="Mèo đeo vòng cổ" />
          </div>

          <div className="smart-collar-preview smart-collar-preview--small">
            <img src={dogPreview} alt="Chó đeo vòng cổ" />
          </div>

          <div className="smart-collar-section-v2__cta">
            <Link to="/dich-vu/mua-sam" className="smart-collar-buy-outline">
              MUA HÀNG
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}