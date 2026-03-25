import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function ProtectedRoute({ children }) {
  const { isAuthenticated, loading } = useAuth();
  const location = useLocation();

  if (loading) return <div className="page-shell"><div className="loading-card">Đang tải...</div></div>;
  if (!isAuthenticated) return <Navigate to="/dang-nhap" replace state={{ from: location.pathname }} />;
  return children;
}
