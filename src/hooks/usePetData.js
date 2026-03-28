import { useEffect, useMemo, useState } from "react";
import {
  getHealthRecordByPet,
  getMedicalVisitsByPet,
  getMyPets,
  getVaccinationsByPet,
} from "../api/services";

function normalizeArray(res) {
  if (Array.isArray(res)) return res;
  if (Array.isArray(res?.data)) return res.data;
  if (Array.isArray(res?.items)) return res.items;
  return [];
}

function normalizeObject(res) {
  if (!res) return null;
  if (res.data && !Array.isArray(res.data)) return res.data;
  return res;
}

export default function usePetData() {
  const [pets, setPets] = useState([]);
  const [selectedPetId, setSelectedPetId] = useState("");
  const [health, setHealth] = useState(null);
  const [vaccinations, setVaccinations] = useState([]);
  const [visits, setVisits] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await getMyPets();
      const petList = normalizeArray(res);
      setPets(petList);
      if (petList[0]?._id) setSelectedPetId(petList[0]._id);
    })();
  }, []);

  useEffect(() => {
    if (!selectedPetId) return;

    (async () => {
      const [healthRes, vaccineRes, visitRes] = await Promise.all([
        getHealthRecordByPet(selectedPetId),
        getVaccinationsByPet(selectedPetId),
        getMedicalVisitsByPet(selectedPetId),
      ]);

      setHealth(normalizeObject(healthRes));
      setVaccinations(normalizeArray(vaccineRes));
      setVisits(normalizeArray(visitRes));
    })();
  }, [selectedPetId]);

  const selectedPet = useMemo(
    () => pets.find((item) => item._id === selectedPetId) || null,
    [pets, selectedPetId]
  );

  return {
    pets,
    selectedPet,
    selectedPetId,
    setSelectedPetId,
    health,
    vaccinations,
    visits,
  };
}