import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

/**
 * Повертає `scrollTo` для переходу до секції з урахуванням маршруту та 100 px фіксованого хедера.
 * @returns Об'єкт із функцією, яка або прокручує поточну сторінку, або запускає навігацію з hash.
 * @sideEffects Після зміни location ефект читає DOM і відкладає прокрутку на 50 ms,
 * щоб цільова сторінка встигла відрендеритися; відсутній елемент безпечно не спричиняє дії.
 */
export const useSmoothScroll = () => {
  const navigate = useNavigate();
  const location = useLocation();

  /**
   * Приймає id секції та необов'язковий шлях; нічого не повертає.
   * Побічний ефект — прокрутка window або навігація через React Router.
   */
  const scrollTo = (id: string, path: string = location.pathname) => {
    // Якщо ми вже на потрібній сторінці
    if (location.pathname === path) {
      const element = document.getElementById(id);
      if (element) {
        // Плавний скрол з offset для фіксованого хедера
        window.scrollTo({
          top: element.offsetTop - 100,
          behavior: 'smooth'
        });
      }
    } 
    // Якщо потрібно перейти на іншу сторінку
    else {
      navigate(`${path}#${id}`);
    }
  };

  // Обробляє hash після кожної зміни location; відкладений callback не має окремого cleanup.
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      
      if (element) {
        // Невелика затримка для коректного рендеру сторінки
        setTimeout(() => {
          window.scrollTo({
            top: element.offsetTop - 100,
            behavior: 'smooth'
          });
        }, 50);
      }
    }
  }, [location]);

  return { scrollTo };
};