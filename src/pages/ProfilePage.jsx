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
        <div className="profile-left-stack">
          <div className="profile-owner-avatar">
            <div className="profile-owner-avatar__circle">👤</div>
            <div className="profile-owner-avatar__actions">📷 🖼️</div>
          </div>

          <div className="pet-qr-card">
            <div className="pet-qr-card__head">
              <h3>MÃ QR THÚ CƯNG</h3>
            </div>

            {selectedPet?.qrCode?.url ? (
              <>
                <div className="pet-qr-card__image-wrap">
                  <img
                    src={selectedPet.qrCode.url}
                    alt={`QR ${selectedPet.name}`}
                    className="pet-qr-card__image"
                  />
                </div>

                <div className="pet-qr-card__meta">
                  <strong>{selectedPet?.name || "--"}</strong>
                  <span>{selectedPet?.publicCode || "QR định danh"}</span>
                </div>

                <a
                  href={selectedPet.qrCode.url}
                  target="_blank"
                  rel="noreferrer"
                  className="primary-btn small"
                >
                  Xem QR
                </a>
              </>
            ) : (
              <div className="pet-qr-card__empty">
                Chưa có mã QR cho thú cưng này
              </div>
            )}
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