import { Suspense } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

export const Layout: React.FC = () => {
  const location = useLocation();

  return (
    <>
      <Header />
      <Suspense>
        <Outlet />
      </Suspense>
      {(location.pathname !== '/' && location.pathname !== '/home') && <Footer />}
    </>
  );
};