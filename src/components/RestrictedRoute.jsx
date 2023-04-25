const { Navigate, Outlet } = require('react-router-dom');
const { useAuth } = require('../hooks/useAuth');

export const RestrictedRoute = () => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? <Navigate to="/calendar" /> : <Outlet />;
};
