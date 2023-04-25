const { Navigate } = require('react-router-dom');
const { useAuth } = require('../hooks/useAuth');

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};
