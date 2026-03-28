import SectionTitle from "../common/SectionTitle";
import PetCategoryCard from "./PetCategoryCard";

export default function PetCategorySection({ items = [] }) {
  return (
    <section className="shop-page-v2__section">
      <SectionTitle className="shop-page-v2__title">THÚ CƯNG</SectionTitle>
      <div className="shop-page-v2__pet-grid">
        {items.map((item) => (
          <PetCategoryCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}