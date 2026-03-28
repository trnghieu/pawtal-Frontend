export default function ProfileHero({ selectedPet }) {
  return (
    <section className="profile-hero">
      <div className="profile-hero__cover">
        <img
          src={
            selectedPet?.avatar?.url ||
            selectedPet?.avatar ||
            "https://placehold.co/1200x420/ece4d5/0b5d91?text=Pawtal"
          }
          alt={selectedPet?.name || "Pet"}
        />
      </div>

      <div className="profile-hero__badge">
        <div className="profile-hero__avatar">
          <img
            src={
              selectedPet?.avatar?.url ||
              selectedPet?.avatar ||
              "https://placehold.co/400x400/ece4d5/0b5d91?text=Pawtal"
            }
            alt={selectedPet?.name || "Pet"}
          />
        </div>
        <div className="profile-hero__name">{selectedPet?.name || "Thú cưng"}</div>
        <div className="profile-hero__meta">{selectedPet?.breed || "Pawtal member"}</div>
      </div>
    </section>
  );
}