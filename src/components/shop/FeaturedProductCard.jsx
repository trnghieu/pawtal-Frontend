import PillButton from "../common/PillButton";

export default function FeaturedProductCard({ item }) {
  return (
    <article className="featured-card-v2">
      <div className={`featured-card-v2__panel ${item.large ? "featured-card-v2__panel--large" : ""}`}>
        <div
          className={`featured-card-v2__image ${
            item.large ? "featured-card-v2__image--large" : "featured-card-v2__image--small"
          }`}
        >
          <img src={item.image} alt={item.name} />
        </div>

        <div className="featured-card-v2__info">
          <h4>{item.name}</h4>
          <p>{item.price}</p>
        </div>
      </div>

      <div className="featured-card-v2__action">
        <PillButton to="/dich-vu/mua-sam" className="buy-btn-v2">
          MUA NGAY
        </PillButton>
      </div>
    </article>
  );
}