import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Header } from 'components/Header/Header';
import SideBar from 'components/SideBar/SideBar';
import styles from './MainLayout.module.css';
import { useState } from 'react';

const MainLayout = () => {
  const [isActivPage, setisActivPage] = useState(false);

  const changePageFalse = () => {
    setisActivPage(false);
  };
  const changePageTrue = () => {
    setisActivPage(true);
  };

  const changePage = [changePageFalse, changePageTrue];

  return (
    <div className={styles.flex}>
      <SideBar changePage={changePage} />
      <div>
        <Header isActivPage={isActivPage} />
        <Suspense>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};
export default MainLayout;
