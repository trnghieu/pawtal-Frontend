import { Link } from "react-router-dom";
import { cloudinaryUrl, imageOrFallback } from "../../utils/cloudinary";
import useAuth from "../../hooks/useAuth";

export default function HeroSection() {
  const { isAuthenticated } = useAuth();

  const hero = imageOrFallback(
    cloudinaryUrl(import.meta.env.VITE_CLOUDINARY_HOME_HERO, {
      transforms: "f_auto,q_auto,w_1800",
    }),
    "https://res.cloudinary.com/dlipnztpt/image/upload/v1774416114/pawtal/pets/nlfd8twrjtiljpvl2y7l.png"
  );

  return (
    <>
      <section className="home-hero" style={{ backgroundImage: `url(${hero})` }}>
        <div className="hero-actions">
          {isAuthenticated ? (
            <Link to="/ho-so/dinh-danh" className="hero-user-entry" aria-label="Hồ sơ người dùng">
              👤
            </Link>
          ) : (
            <>
              <Link className="pill-cta" to="/dang-nhap">Đăng nhập</Link>
              <Link className="pill-cta" to="/dang-ky">Đăng ký</Link>
            </>
          )}
        </div>
      </section>

      <div className="gold-band">Chất lượng - Bảo mật - Uy tín</div>
    </>
  );
}