const { Navigate, Outlet } = require('react-router-dom');
const { useAuth } = require('../../hooks/useAuth');

export const PublicRoute = () => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? <Navigate to="/calendar" /> : <Outlet />;
};
