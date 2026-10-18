import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

/**
 * Повертає функцію переходу до секції з урахуванням поточного маршруту й фіксованого хедера.
 * На цільовій сторінці виконує плавну прокрутку, а для іншого маршруту спочатку додає hash до URL.
 * Ефект також обробляє hash після навігації з короткою затримкою для завершення рендерингу DOM.
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

  // Автоматичний скрол при завантаженні сторінки з hash
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