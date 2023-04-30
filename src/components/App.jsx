import { useEffect, lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import ChosenMonth from './ChosenMonth/ChosenMonth';
import ChosenDay from './ChosenDay/ChosenDay';
import { ToastContainer } from 'react-toastify';
import { refreshUser, setAuthHeader } from 'redux/auth/auth.operations';
import { useDispatch, useSelector } from 'react-redux';
import { selectToken } from 'redux/auth/auth.selectors';
import { PrivateRoute } from './AuthRouts/PrivateRoute';
import { PublicRoute } from './AuthRouts/PublicRoute';
import { Loading } from './Loading/Loading';
import 'react-datepicker/dist/react-datepicker.css';

const Home = lazy(() => import('pages/Home/Home'));
const Account = lazy(() => import('pages/Account/Account'));
const Calendar = lazy(() => import('pages/Calendar/Calendar'));
const Login = lazy(() => import('pages/Login/Login'));
const Register = lazy(() => import('pages/Register/Register'));
const MainLayout = lazy(() => import('./MainLayout/MainLayout'));

const App = () => {
  const token = useSelector(selectToken);
  setAuthHeader(token);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [token, dispatch]);

  return (
    <>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="" element={<PublicRoute />}>
            <Route path="" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>

          <Route path="" element={<PrivateRoute />}>
            <Route path="" element={<MainLayout />}>
              <Route path="/account" element={<Account />} />
              <Route path="/calendar" element={<Calendar />}>
                {/* <Route index element={<ChosenMonth />} /> */}
                <Route path="month/:currentDate" element={<ChosenMonth />} />
                <Route path="day/:currentDay" element={<ChosenDay />} />
              </Route>
            </Route>
          </Route>
        </Routes>
        <ToastContainer />
      </Suspense>
    </>
  );
};

export default App;
