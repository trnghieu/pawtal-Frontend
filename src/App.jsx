import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import ProtectedRoute from "./components/layout/ProtectedRoute";

import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import HealthPage from "./pages/HealthPage";
import ProfilePage from "./pages/ProfilePage";
import TrackingPage from "./pages/TrackingPage";
import CommunityPage from "./pages/CommunityPage";
import ServicesPage from "./pages/ServicesPage";
import ServicePackagesPage from "./pages/ServicePackagesPage";
import SupportPage from "./pages/SupportPage";
import SecurityPage from "./pages/SecurityPage";
import MembersPage from "./pages/MembersPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import PublicPetPage from "./pages/PublicPetPage";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/pet/:publicCode" element={<PublicPetPage />} />
        <Route path="/dich-vu/mua-sam" element={<ShopPage />} />
        <Route path="/dich-vu/goi-dich-vu" element={<ServicePackagesPage />} />
        <Route path="/cong-dong" element={<CommunityPage />} />
        <Route path="/cskh" element={<SupportPage />} />
        <Route
          path="/dich-vu/dinh-vi"
          element={
            <ProtectedRoute>
              <TrackingPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/ho-so/dinh-danh"
          element={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/ho-so/suc-khoe"
          element={
            <ProtectedRoute>
              <HealthPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/ho-so/bao-mat"
          element={
            <ProtectedRoute>
              <SecurityPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/ho-so/thanh-vien"
          element={
            <ProtectedRoute>
              <MembersPage />
            </ProtectedRoute>
          }
        />
      </Route>

      <Route path="/dang-nhap" element={<LoginPage />} />
      <Route path="/dang-ky" element={<RegisterPage />} />
    </Routes>
  );
}