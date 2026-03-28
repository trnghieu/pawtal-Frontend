import HealthBanner from "../components/health/HealthBanner";
import HealthSummarySection from "../components/health/HealthSummarySection";
import VaccinationTable from "../components/health/VaccinationTable";
import VisitTable from "../components/health/VisitTable";
import usePetData from "../hooks/usePetData";

export default function HealthPage() {
  const petData = usePetData();

  return (
    <div className="page-shell page-stack">
      <HealthSummarySection {...petData} />
      <VaccinationTable items={petData.vaccinations} />
      <HealthBanner />
      <VisitTable items={petData.visits} />
    </div>
  );
}