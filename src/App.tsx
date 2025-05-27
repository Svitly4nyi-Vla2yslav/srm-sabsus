import { useEffect } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Layout } from './components/Layout/Layout';
import Home from './pages/HomePage/HomePage';
import AboutUs from './pages/AboutUs/AboutUs';
import Contact from './pages/Contact/Contact';
import Work from './pages/Work/Work';
import Photo from './pages/Photo/Photo';
import Info from './pages/Info/Info';
import CollectionPage from './pages/CollectionPage/CollectionPage';

const AnimatedPage = ({ children }: { children: React.ReactNode }) => {
  // Автоматичне прокручування до верху при монтажі компонента
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ 
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={{
        width: '100%',
        top: 0,
      }}
    >
      {children}
    </motion.div>
  );
};

export const App: React.FC = () => {
  const location = useLocation();

  // Додаткове прокручування до верху при зміні маршруту
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route 
          path="/" 
          element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Layout />
            </motion.div>
          }
        >
          <Route index element={<AnimatedPage><Home /></AnimatedPage>} />
          <Route path="/home" element={<AnimatedPage><Home /></AnimatedPage>} />
          <Route path="/work" element={<AnimatedPage><Work /></AnimatedPage>} />
          <Route path="/photo" element={<AnimatedPage><Photo /></AnimatedPage>} />
          <Route path="/info" element={<AnimatedPage><Info /></AnimatedPage>} />
          <Route path="/contact" element={<AnimatedPage><Contact /></AnimatedPage>} />
          <Route path="/about" element={<AnimatedPage><AboutUs /></AnimatedPage>} />
          <Route 
            path="/collections/:id" 
            element={<AnimatedPage><CollectionPage /></AnimatedPage>} 
          />
          <Route path="*" element={<AnimatedPage><Home /></AnimatedPage>} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};