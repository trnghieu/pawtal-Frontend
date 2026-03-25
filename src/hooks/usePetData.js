import { useEffect, useState } from 'react';
import { HealthAPI, PetAPI, VaccinationAPI, VisitAPI } from '../api/services';

export default function usePetData() {
  const [pets, setPets] = useState([]);
  const [selectedPetId, setSelectedPetId] = useState('');
  const [health, setHealth] = useState(null);
  const [vaccinations, setVaccinations] = useState([]);
  const [visits, setVisits] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let ignore = false;

    async function loadPets() {
      try {
        setLoading(true);
        const petRes = await PetAPI.list();
        const nextPets = petRes.data?.data || [];
        if (ignore) return;
        setPets(nextPets);
        const firstId = nextPets[0]?._id || '';
        setSelectedPetId((prev) => prev || firstId);
      } catch {
        if (!ignore) setPets([]);
      } finally {
        if (!ignore) setLoading(false);
      }
    }

    loadPets();
    return () => {
      ignore = true;
    };
  }, []);

  useEffect(() => {
    if (!selectedPetId) return;
    let ignore = false;

    async function loadDetails() {
      try {
        const [healthRes, vaxRes, visitRes] = await Promise.all([
          HealthAPI.get(selectedPetId).catch(() => ({ data: { data: null } })),
          VaccinationAPI.list(selectedPetId).catch(() => ({ data: { data: [] } })),
          VisitAPI.list(selectedPetId).catch(() => ({ data: { data: [] } }))
        ]);
        if (ignore) return;
        setHealth(healthRes.data?.data || null);
        setVaccinations(vaxRes.data?.data || []);
        setVisits(visitRes.data?.data || []);
      } catch {
        if (!ignore) {
          setHealth(null);
          setVaccinations([]);
          setVisits([]);
        }
      }
    }

    loadDetails();
    return () => {
      ignore = true;
    };
  }, [selectedPetId]);

  const selectedPet = pets.find((pet) => pet._id === selectedPetId) || pets[0] || null;

  return { pets, selectedPet, selectedPetId, setSelectedPetId, health, vaccinations, visits, loading };
}
