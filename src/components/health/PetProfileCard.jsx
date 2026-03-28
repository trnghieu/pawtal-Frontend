export default function PetProfileCard({
  pets,
  selectedPet,
  selectedPetId,
  setSelectedPetId,
}) {
  return (
    <div className="health-pet-panel">
      <div className="health-pet-image-wrap">
        <img
          src={
            selectedPet?.avatar?.url ||
            selectedPet?.avatar ||
            "https://placehold.co/700x700/ece4d5/0b5d91?text=Pawtal"
          }
          alt={selectedPet?.name || "Pet"}
          className="health-pet-image"
        />
      </div>

      <div className="health-pet-actions">
        <button type="button" className="health-icon-btn">📷</button>
        <button type="button" className="health-icon-btn">🖼️</button>
      </div>

      <div className="pet-switch-row">
        {pets.map((pet) => (
          <button
            key={pet._id}
            type="button"
            className={`dot-name ${selectedPetId === pet._id ? "active" : ""}`}
            onClick={() => setSelectedPetId(pet._id)}
          >
            {pet.name}
          </button>
        ))}
      </div>
    </div>
  );
}