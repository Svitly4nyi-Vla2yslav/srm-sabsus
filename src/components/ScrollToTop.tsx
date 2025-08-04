import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export const Time = () => {
  const [isActive, setIsActive] = useState(false);
// !
  const activationDate = new Date(2025, 9, 1, 0, 0); // 1 вересня 2024, 00:00

  useEffect(() => {
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

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // або 'smooth'
  }, [pathname]);

  return null;
};

export default ScrollToTop;
