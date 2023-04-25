import { Route, Routes } from 'react-router-dom';
import Account from 'pages/Account/Account';
import Calendar from 'pages/Calendar/Calendar';
import Login from 'pages/Login/Login';
import Register from 'pages/Register/Register';
import MainLayout from './MainLayout/MainLayout';
import { ToastContainer } from 'react-toastify';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks/useAuth';
import { useEffect } from 'react';
import { refreshUser } from 'redux/auth/auth.operations';

const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return isRefreshing ? (
    <p>Loader</p>
  ) : (
    <>
      <Routes>
        <Route path="" element={<RestrictedRoute />}>
          <Route path="auth/login" element={<Login />} />
          <Route path="auth/register" element={<Register />} />
        </Route>
        <Route path="" element={<PrivateRoute />}>
          <Route path="/" element={<MainLayout />}>
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/account" element={<Account />} />
            <Route path="/calendar/:month/:day" element={<Calendar />} />
          </Route>
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
};

export default App;
