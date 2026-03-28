import OwnerInfoCard from "../components/profile/OwnerInfoCard";
import PetTabs from "../components/profile/PetTabs";
import ProfileHero from "../components/profile/ProfileHero";
import usePetData from "../hooks/usePetData";
import useAuth from "../hooks/useAuth";

export default function ProfilePage() {
  const { user } = useAuth();
  const { pets, selectedPet, selectedPetId, setSelectedPetId } = usePetData();

  return (
    <div className="page-shell page-stack">
      <ProfileHero selectedPet={selectedPet} />
      <PetTabs />

      <section className="profile-owner-grid">
        <div className="profile-owner-side">
          <div className="profile-owner-avatar">
            <div className="profile-owner-avatar__circle">👤</div>
            <div className="profile-owner-avatar__actions">📷 🖼️</div>
          </div>
        </div>

        <OwnerInfoCard user={user} selectedPet={selectedPet} />
      </section>

      <section className="pet-switch-panel">
        <h3>Thú cưng của tôi</h3>
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
      </section>
    </div>
  );
}