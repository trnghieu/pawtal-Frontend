import http from './http';

export const AuthAPI = {
  login: (data) => http.post('/auth/login', data),
  me: () => http.get('/auth/me')
};

export const PetAPI = {
  list: () => http.get('/pets'),
  get: (id) => http.get(`/pets/${id}`)
};

export const HealthAPI = {
  get: (petId) => http.get(`/health-records/${petId}`)
};

export const VaccinationAPI = {
  list: (petId) => http.get(`/vaccinations/pet/${petId}`)
};

export const VisitAPI = {
  list: (petId) => http.get(`/visits/pet/${petId}`)
};

export const ProductAPI = {
  list: () => http.get('/products')
};

export const ServiceAPI = {
  list: () => http.get('/services')
};

export const OrderAPI = {
  my: () => http.get('/orders/my')
};

export const AppointmentAPI = {
  my: () => http.get('/appointments/my')
};
