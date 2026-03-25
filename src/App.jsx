import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import ProtectedRoute from './components/ProtectedRoute';
import HomePage from './pages/HomePage';
import CommunityPage from './pages/CommunityPage';
import ServicesPage from './pages/ServicesPage';
import ShopPage from './pages/ShopPage';
import ServicePackagesPage from './pages/ServicePackagesPage';
import TrackingPage from './pages/TrackingPage';
import ProfilePage from './pages/ProfilePage';
import HealthPage from './pages/HealthPage';
import SecurityPage from './pages/SecurityPage';
import MembersPage from './pages/MembersPage';
import SupportPage from './pages/SupportPage';
import LoginPage from './pages/LoginPage';

export default function App() {
  return (
    <Routes>
      <Route path="/dang-nhap" element={<LoginPage />} />
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/cong-dong" element={<CommunityPage />} />
        <Route path="/dich-vu" element={<ServicesPage />} />
        <Route path="/dich-vu/mua-sam" element={<ShopPage />} />
        <Route path="/dich-vu/goi-dich-vu" element={<ServicePackagesPage />} />
        <Route path="/cskh" element={<SupportPage />} />
        <Route path="/dich-vu/dinh-vi" element={<ProtectedRoute><TrackingPage /></ProtectedRoute>} />
        <Route path="/ho-so/dinh-danh" element={<ProtectedRoute><ProfilePage /></ProtectedRoute>} />
        <Route path="/ho-so/suc-khoe" element={<ProtectedRoute><HealthPage /></ProtectedRoute>} />
        <Route path="/ho-so/bao-mat" element={<ProtectedRoute><SecurityPage /></ProtectedRoute>} />
        <Route path="/ho-so/thanh-vien" element={<ProtectedRoute><MembersPage /></ProtectedRoute>} />
      </Route>
      <Route path="*" element={<Navigate to="/dich-vu" replace />} />
    </Routes>
  );
}
