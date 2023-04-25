import { Route, Routes } from 'react-router-dom';
import Account from 'pages/Account/Account';
import Calendar from 'pages/Calendar/Calendar';
import Login from 'pages/Login/Login';
import Register from 'pages/Register/Register';
import MainLayout from './MainLayout/MainLayout';
import { ToastContainer } from 'react-toastify';
import { RestrictedRoute } from './RestrictedRoute';

const App = () => {
  return (
    <>
      <Routes>
        <Route
          path="auth/register"
          element={
            <RestrictedRoute redirectTo="/calendar" component={<Register />} />
          }
        />
        <Route
          path="auth/login"
          element={
            <RestrictedRoute redirectTo="/calendar" component={<Login />} />
          }
        />
        <Route path="/" element={<MainLayout />}>
          <Route path="/account" element={<Account />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/calendar/:month/:day" element={<Calendar />} />

        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
};

export default App;
