import FeaturedProductCard from "./FeaturedProductCard";

export default function FeaturedProductsSection({ items = [] }) {
  return (
    <section className="shop-page-v2__section shop-page-v2__featured">
      <div className="featured-v2__header">
        <h3>NỔI BẬT</h3>
      </div>

      <div className="featured-v2__grid">
        {items.map((item) => (
          <FeaturedProductCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}