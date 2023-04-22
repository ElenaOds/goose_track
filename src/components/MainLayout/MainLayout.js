import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Header from 'components/Header/Header';
import SideBar from 'components/SideBar/SideBar';

const MainLayout = () => {
  return (
    <>
      <Header />
      <SideBar />
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MainLayout;
