import BasicInfoCard from "./BasicInfoCard";
import PetProfileCard from "./PetProfileCard";

export default function HealthSummarySection({
  pets,
  selectedPet,
  selectedPetId,
  setSelectedPetId,
  health,
  vaccinations,
}) {
  return (
    <>
      <div className="page-header-row">
        <h1>Hồ sơ sức khỏe thú cưng</h1>
        <span className="lang-chip">VIE/ENG</span>
      </div>

      <section className="health-summary-row">
        <PetProfileCard
          pets={pets}
          selectedPet={selectedPet}
          selectedPetId={selectedPetId}
          setSelectedPetId={setSelectedPetId}
        />
        <BasicInfoCard
          selectedPet={selectedPet}
          health={health}
          vaccinations={vaccinations}
        />
      </section>
    </>
  );
}