import { Navigate, useLocation } from 'react-router';
import LoadingSpinner from '../components/Loading/LoadingSpinner';
import useAdmin from '../hooks/useAdmin';
import useAuth from '../hooks/useAuth';

function AdminRoute({ children }) {
  const { user, loading } = useAuth();
  const [isAdmin, isAdminLoading] = useAdmin();
  const location = useLocation();

  if (loading && isAdminLoading) return <LoadingSpinner />;
  if (user && isAdmin) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace />;
}

export default AdminRoute;
