import { Link } from "react-router-dom";
import { cloudinaryUrl, imageOrFallback } from "../../utils/cloudinary";

const COLLAR_1 =
  "https://res.cloudinary.com/dlipnztpt/image/upload/v1774672618/E349BF3F-20AA-4587-89F5-B4CEBB66DB52_2_1_ywfswh.png";


export default function SmartCollarSection() {
  const collarTop = imageOrFallback(
    cloudinaryUrl(import.meta.env.VITE_CLOUDINARY_HOME_COLLAR_GREEN, {
      transforms: "f_auto,q_auto,h_100",
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
    "https://res.cloudinary.com/dlipnztpt/image/upload/v1774673104/IMG_0932_1_1_xtaqkt.png"
  );

  const dogPreview = imageOrFallback(
    cloudinaryUrl(import.meta.env.VITE_CLOUDINARY_HOME_COLLAR_DOG, {
      transforms: "f_auto,q_auto,w_800",
    }),
    "https://res.cloudinary.com/dlipnztpt/image/upload/v1774673093/ChatGPT_Image_22_22_34_23_thg_1_2026_1_2_la6syz.png"
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