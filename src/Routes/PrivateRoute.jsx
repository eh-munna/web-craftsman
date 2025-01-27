import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router';
import LoadingSkeleton from '../components/Loading/LoadingSkeleton';
import { AuthContext } from '../providers/AuthProvider';

// function PrivateRoute({ children }) {
//   const { user, loading } = useContext(AuthContext);
//   const location = useLocation();
//   if (loading) return <LoadingSkeleton />;
//   if (user) {
//     return children;
//   } else {
//     return <Navigate to={'/login'} state={{ from: location }} replace />;
//   }
// }
// export default PrivateRoute;

function PrivateRoute({ children }) {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  console.log(`routing from private route`);
  if (loading) return <LoadingSkeleton />;

  return user ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
}
export default PrivateRoute;
