import SectionTitle from "../common/SectionTitle";
import PopularProductCard from "./PopularProductCard";

export default function PopularProductsSection({ items = [] }) {
  return (
    <section className="shop-page-v2__section">
      <SectionTitle className="shop-page-v2__title">SẢN PHẨM PHỔ BIẾN</SectionTitle>
      <div className="shop-page-v2__popular-grid">
        {items.map((item) => (
          <PopularProductCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}