import { Suspense, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

export const Layout: React.FC = () => {
  const location = useLocation();

  // useEffect(() => {
  //   window.scrollTo({ top: 0, behavior: 'auto' });
  // }, [location.pathname]);

useEffect(() => {
  if (location.hash) {
    const id = location.hash.replace('#', '');
    const element = document.getElementById(id);

    if (element) {
      setTimeout(() => {
        // Прокручує плавно до елемента
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 400);
    }
  } else {
    // Тут ти керуєш точкою скролу
    window.scrollTo({
      top: 0,       // <– хочеш іншу висоту? наприклад: 100, 300 і т.д.
      behavior: 'auto', // або 'smooth'
    });
  }
}, [location.pathname]); // важливо: слухаємо тільки pathname, не весь location

  return (
    <>
      <Header />
      <Suspense>
        <Outlet />
      </Suspense>
      <Footer />
    </>
  );
};
