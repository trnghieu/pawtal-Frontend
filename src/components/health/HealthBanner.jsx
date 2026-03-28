import { cloudinaryUrl, imageOrFallback } from "../../utils/cloudinary";

export default function HealthBanner() {
  const banner = imageOrFallback(
    cloudinaryUrl(import.meta.env.VITE_CLOUDINARY_HEALTH_BANNER, {
      transforms: "f_auto,q_auto,w_1600",
    }),
    "https://res.cloudinary.com/dlipnztpt/image/upload/v1774673103/pawtal1_1_qovujq.png"
  );

  return (
    <section className="health-banner" style={{ backgroundImage: `url(${banner})` }}>

    </section>
  );
}