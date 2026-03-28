export default function PopularProductCard({ item }) {
  return (
    <article
      className={`popular-card-v2 ${item.accent ? "popular-card-v2--accent" : ""}`}
    >
      <div className="popular-card-v2__panel">
        <div className="popular-card-v2__image">
          <img src={item.image} alt={item.name} />
        </div>

        <div className="popular-card-v2__info">
          <div className="popular-card-v2__name">{item.name}</div>
        </div>
      </div>
    </article>
  );
}