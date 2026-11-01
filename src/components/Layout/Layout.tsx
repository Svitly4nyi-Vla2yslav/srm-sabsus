import { Suspense, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

/**
 * Формує спільний каркас сторінок із Header, дочірнім Outlet і Footer.
 * Після зміни pathname керує позицією прокручування:
 * Якщо URL містить hash, ефект після короткої затримки шукає відповідний елемент у DOM;
 * без hash сторінка повертається на початок. Побічні ефекти обмежені window.scrollTo,
 * scrollIntoView і відкладеним таймером; локального стану компонент не має.
 */
export const Layout: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    // Hash читається під час зміни pathname; окрема зміна hash на тому самому шляху ефект не перезапускає.
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
