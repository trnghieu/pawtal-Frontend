import FooterCompact from "../components/common/FooterCompact";
import FeaturedProductsSection from "../components/shop/FeaturedProductsSection";
import PetCategorySection from "../components/shop/PetCategorySection";
import PopularProductsSection from "../components/shop/PopularProductsSection";
import ShopHero from "../components/shop/ShopHero";
import { cloudinaryUrl, imageOrFallback } from "../utils/cloudinary";

export default function ShopPage() {
  const petCategories = [
    {
      id: "dog",
      name: "CHÓ",
      image: imageOrFallback(
        cloudinaryUrl(import.meta.env.VITE_CLOUDINARY_SHOP_DOG, {
          transforms: "f_auto,q_auto,w_700",
        }),
        "https://res.cloudinary.com/dlipnztpt/image/upload/v1774672612/image_152_cnsiik.jpg"
      ),
    },
    {
      id: "cat",
      name: "MÈO",
      image: imageOrFallback(
        cloudinaryUrl(import.meta.env.VITE_CLOUDINARY_SHOP_CAT, {
          transforms: "f_auto,q_auto,w_700",
        }),
        "https://res.cloudinary.com/dlipnztpt/image/upload/v1774672612/image_153_zdsapl.jpg"
      ),
    },
  ];

  const popularProducts = [
    {
      id: "food",
      name: "ĐỒ ĂN",
      image: imageOrFallback(
        cloudinaryUrl(import.meta.env.VITE_CLOUDINARY_SHOP_FOOD, {
          transforms: "f_auto,q_auto,w_500",
        }),
        "https://res.cloudinary.com/dlipnztpt/image/upload/v1774678593/B98A38AA-6235-4CE9-9578-C2EF1749801F_1-removebg-preview_mwrm4c.png"
      ),
    },
    {
      id: "collar",
      name: "VÒNG CỔ",
      accent: true,
      image: imageOrFallback(
        cloudinaryUrl(import.meta.env.VITE_CLOUDINARY_SHOP_COLLAR, {
          transforms: "f_auto,q_auto,w_500",
        }),
        "https://res.cloudinary.com/dlipnztpt/image/upload/v1774672873/Untitled_design__4_-removebg-preview_slr7lr.png"
      ),
    },
    {
      id: "toy",
      name: "ĐỒ CHƠI",
      image: imageOrFallback(
        cloudinaryUrl(import.meta.env.VITE_CLOUDINARY_SHOP_TOY, {
          transforms: "f_auto,q_auto,w_500",
        }),
        "https://res.cloudinary.com/dlipnztpt/image/upload/v1774678588/E51DC3C4-450C-4AB3-B742-B2ED80890D2E_1-removebg-preview_voghsr.png"
      ),
    },
  ];

  const featuredProducts = [
    {
      id: "gps-collar",
      name: "VÒNG CỔ KÈM ĐỊNH VỊ",
      price: "550.000 VND",
      large: true,
      image: imageOrFallback(
        cloudinaryUrl(import.meta.env.VITE_CLOUDINARY_SHOP_FEATURED_1, {
          transforms: "f_auto,q_auto,w_700",
        }),
        "https://res.cloudinary.com/dlipnztpt/image/upload/v1774672613/ChatGPT_Image_22_22_34_23_thg_1_2026_1_xgxfyq.jpg"
      ),
    },
    {
      id: "strap",
      name: "DÂY ĐEO",
      price: "150.000 VND",
      image: imageOrFallback(
        cloudinaryUrl(import.meta.env.VITE_CLOUDINARY_SHOP_FEATURED_2, {
          transforms: "f_auto,q_auto,w_700",
        }),
        "https://res.cloudinary.com/dlipnztpt/image/upload/v1774678795/image-removebg-preview_1_vpprsn.png"
      ),
    },
    {
      id: "tracker",
      name: "ĐỊNH VỊ",
      price: "450.000 VND",
      image: imageOrFallback(
        cloudinaryUrl(import.meta.env.VITE_CLOUDINARY_SHOP_FEATURED_3, {
          transforms: "f_auto,q_auto,w_700",
        }),
        "https://res.cloudinary.com/dlipnztpt/image/upload/v1774678798/image-removebg-preview_ezlct5.png"
      ),
    },
  ];

  return (
    <div className="page-shell page-stack">
      <div className="shop-page-v2 shop-page-v2--boxed">
        <ShopHero />
        <PetCategorySection items={petCategories} />
        <PopularProductsSection items={popularProducts} />
        <FeaturedProductsSection items={featuredProducts} />
      </div>

      <FooterCompact />
    </div>
  );
}