import { cloudinaryUrl, imageOrFallback } from "../../utils/cloudinary";

const PAWTAL_LOGO =
  "https://res.cloudinary.com/dlipnztpt/image/upload/v1774662844/Screenshot_2026-03-17_111732-removebg-preview_oqju55.png";

export default function ShopHero() {
  const heroBackground = imageOrFallback(
    cloudinaryUrl(import.meta.env.VITE_CLOUDINARY_SHOP_HERO, {
      transforms: "f_auto,q_auto,w_1800",
    }),
    "https://res.cloudinary.com/dlipnztpt/image/upload/v1774416114/pawtal/pets/nlfd8twrjtiljpvl2y7l.png"
  );

  return (
    <>
      <section
        className="shop-hero-v4"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="shop-hero-v4__overlay">
          <div className="shop-hero-v4__logo">
            <img
              src={PAWTAL_LOGO}
              alt="Pawtal"
              className="pawtal-inline-logo pawtal-inline-logo--light"
            />
          </div>

          <div className="shop-hero-v4__copy">
            <p>ĐỊNH DANH VỮNG VÀNG</p>
            <p>AN TÂM DẪN LỐI</p>
          </div>
        </div>
      </section>

      <div className="shop-hero-v4__tagline">
        Giúp việc chăm sóc thú cưng trở nên thông minh và đơn giản
      </div>
    </>
  );
}