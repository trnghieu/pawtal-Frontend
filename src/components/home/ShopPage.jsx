import ShopHero from '../components/shop/ShopHero';
import PetCategorySection from '../components/shop/PetCategorySection';
import PopularProductsSection from '../components/shop/PopularProductsSection';
import FeaturedProductsSection from '../components/shop/FeaturedProductsSection';
import FooterCompact from '../components/common/FooterCompact';
import { cloudinaryUrl, imageOrFallback } from '../utils/cloudinary';

export default function ShopPage() {
  const hero = imageOrFallback(cloudinaryUrl(import.meta.env.VITE_CLOUDINARY_SHOP_HERO, { transforms: 'f_auto,q_auto,w_1600' }), 'https://res.cloudinary.com/dlipnztpt/image/upload/v1774416114/pawtal/pets/nlfd8twrjtiljpvl2y7l.png');

  const petCategories = [
    { id: 'dog', name: 'CHÓ', image: imageOrFallback(cloudinaryUrl(import.meta.env.VITE_CLOUDINARY_SHOP_DOG, { transforms: 'f_auto,q_auto,w_700' }), 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=700&q=80') },
    { id: 'cat', name: 'MÈO', image: imageOrFallback(cloudinaryUrl(import.meta.env.VITE_CLOUDINARY_SHOP_CAT, { transforms: 'f_auto,q_auto,w_700' }), 'https://images.unsplash.com/photo-1519052537078-e6302a4968d4?auto=format&fit=crop&w=700&q=80') },
  ];

  const popularProducts = [
    { id: 'food', name: 'ĐỒ ĂN', image: imageOrFallback(cloudinaryUrl(import.meta.env.VITE_CLOUDINARY_SHOP_FOOD, { transforms: 'f_auto,q_auto,w_500' }), 'https://images.unsplash.com/photo-1583511655826-05700d52f4d9?auto=format&fit=crop&w=500&q=80') },
    { id: 'collar', name: 'VÒNG CỔ', accent: true, image: imageOrFallback(cloudinaryUrl(import.meta.env.VITE_CLOUDINARY_SHOP_COLLAR, { transforms: 'f_auto,q_auto,w_500' }), 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&w=500&q=80') },
    { id: 'toy', name: 'ĐỒ CHƠI', image: imageOrFallback(cloudinaryUrl(import.meta.env.VITE_CLOUDINARY_SHOP_TOY, { transforms: 'f_auto,q_auto,w_500' }), 'https://images.unsplash.com/photo-1560743173-567a3b5658b1?auto=format&fit=crop&w=500&q=80') },
  ];

  const featuredProducts = [
    { id: 'gps-collar', name: 'VÒNG CỔ KÈM ĐỊNH VỊ', price: '550.000 VND', large: true, image: imageOrFallback(cloudinaryUrl(import.meta.env.VITE_CLOUDINARY_SHOP_FEATURED_1, { transforms: 'f_auto,q_auto,w_700' }), 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=700&q=80') },
    { id: 'strap', name: 'DÂY ĐEO', price: '150.000 VND', image: imageOrFallback(cloudinaryUrl(import.meta.env.VITE_CLOUDINARY_SHOP_FEATURED_2, { transforms: 'f_auto,q_auto,w_700' }), 'https://images.unsplash.com/photo-1601758174114-e711c0cbaa69?auto=format&fit=crop&w=700&q=80') },
    { id: 'tracker', name: 'ĐỊNH VỊ', price: '450.000 VND', image: imageOrFallback(cloudinaryUrl(import.meta.env.VITE_CLOUDINARY_SHOP_FEATURED_3, { transforms: 'f_auto,q_auto,w_700' }), 'https://images.unsplash.com/photo-1583512603806-077998240c7a?auto=format&fit=crop&w=700&q=80') },
  ];

  return (
    <div className='shop-page-v2'>
      <ShopHero hero={hero} />
      <PetCategorySection items={petCategories} />
      <PopularProductsSection items={popularProducts} />
      <FeaturedProductsSection items={featuredProducts} />
      <FooterCompact />
    </div>
  );
}