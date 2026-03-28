export default function PetCategoryCard({ item }) {
  return (
    <article className="pet-card-v2">
      <div className="pet-card-v2__image">
        <img src={item.image} alt={item.name} />
      </div>
      <div className="pet-card-v2__name">{item.name}</div>
    </article>
  );
}