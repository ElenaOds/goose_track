import { useAuth } from '../../hooks/useAuth';
import { Navigate, Outlet } from 'react-router-dom';

export const PrivateRoute = () => {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? <Outlet /> : <Navigate to="/" />;
};
