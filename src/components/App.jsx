import Account from 'pages/Account/Account';
import Calendar from 'pages/Calendar/Calendar';
import Login from 'pages/Login/Login';
import Register from 'pages/Register/Register';
import MainLayout from './MainLayout/MainLayout';
import Home from 'pages/Home/Home';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { RestrictedRoute } from './RestrictedRoute';
import { setAuthHeader } from 'redux/auth/auth.operations';
import { useSelector } from 'react-redux';
import { selectToken } from 'redux/auth/auth.selectors';

const App = () => {
  const token = useSelector(selectToken);
  setAuthHeader(token);

  return (
    <>
      <div id="user-modal"></div>
      <Routes>
        <Route path="home" element={<Home />} />
        <Route
          path="register"
          element={
            <RestrictedRoute redirectTo="/calendar" component={<Register />} />
          }
        />
        <Route
          path="login"
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
