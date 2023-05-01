import { Outlet } from 'react-router-dom';
import { Suspense, useEffect, useState } from 'react';
import { Header } from 'components/Header/Header';
import SideBar from 'components/SideBar/SideBar';
import styles from './MainLayout.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/auth.selectors';
import { getUser } from 'redux/user/user.operations';

const MainLayout = () => {
  const [isActivPage, setActivPage] = useState(false);
  const [isOpenSidebarMobile, setIsOpenSidebarMobile] = useState(false);
  const userInfo = useSelector(selectUser);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch, userInfo]);

  const toggleSidebar = () => {
    setIsOpenSidebarMobile(!isOpenSidebarMobile);
  };

  const doActiveCalendar = () => {
    setActivPage(false);
  };
  const doActiveAccount = () => {
    setActivPage(true);
  };

  return (
    <div className={styles.flex}>
      <SideBar
        doActiveCalendar={doActiveCalendar}
        doActiveAccount={doActiveAccount}
        toggleSidebar={toggleSidebar}
        isOpenSidebarMobile={isOpenSidebarMobile}
      />
      <div>
        <Header isActivPage={isActivPage} toggleSidebar={toggleSidebar} />
        <Suspense>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};
export default MainLayout;
