import { Suspense, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

/**
 * Формує спільний каркас сторінок і керує позицією прокручування після зміни маршруту.
 * Якщо URL містить hash, ефект після короткої затримки шукає відповідний елемент у DOM;
 * без hash сторінка повертається на початок. Дочірній маршрут показується через Outlet.
 */
export const Layout: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);

      if (element) {
        // Затримка дає дочірній сторінці час змонтувати секцію, до якої веде hash.
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 400);
      }
    } else {
      window.scrollTo({
        top: 0,
        behavior: 'auto',
      });
    }
  }, [location.pathname]);

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
