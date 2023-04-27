import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Header } from 'components/Header/Header';
import SideBar from 'components/SideBar/SideBar';
import styles from './MainLayout.module.css';
import { useState } from 'react';

const MainLayout = () => {
  const [isActivPage, setActivPage] = useState(false);
  const [isOpenSidebarMobile, setIsOpenSidebarMobile] = useState(false);

  const toggleSidebar = () => {
    setIsOpenSidebarMobile(!isOpenSidebarMobile);   
  };

  const doActiveCalendar = () => {
    setActivPage(false);
  };
  const doActiveAccount= () => {
    setActivPage(true);
  };  

  return (
    <div className={styles.flex}>
      <SideBar doActiveCalendar={doActiveCalendar} doActiveAccount={doActiveAccount} toggleSidebar={toggleSidebar} isOpenSidebarMobile={isOpenSidebarMobile} />
      <div>
        <Header isActivPage={isActivPage} toggleSidebar={toggleSidebar}/>
        <Suspense>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};
export default MainLayout;
