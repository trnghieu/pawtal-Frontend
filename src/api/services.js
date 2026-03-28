import http from "./http";

export const login = async (payload) => (await http.post("/auth/login", payload)).data;
export const register = async (payload) => (await http.post("/auth/register", payload)).data;

export const getMyPets = async () => (await http.get("/pets")).data;
export const getPetById = async (id) => (await http.get(`/pets/${id}`)).data;

export const getHealthRecordByPet = async (petId) =>
  (await http.get(`/health-records/${petId}`)).data;

export const getVaccinationsByPet = async (petId) =>
  (await http.get(`/vaccinations/pet/${petId}`)).data;

export const getMedicalVisitsByPet = async (petId) =>
  (await http.get(`/visits/pet/${petId}`)).data;

export const getProducts = async () => (await http.get("/products")).data;
export const getServices = async () => (await http.get("/services")).data;
export const getOrdersMy = async () => (await http.get("/orders/my")).data;
export const getAppointmentsMy = async () => (await http.get("/appointments/my")).data;