import { useEffect, useLayoutEffect, useRef } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Layout } from './components/Layout/Layout';
import Home from './pages/HomePage/HomePage';
import AboutUs from './pages/AboutUs/AboutUs';
import Contact from './pages/Contact/Contact';
import Info from './pages/Info/Info';
import ParticlesBackground from './components/Background/StarrySky';
import CustomerExperience from './pages/ServicePages/CustomerExperience';
import PosStaffOperations from './pages/ServicePages/PosStaffOperations';
import KitchenFulfillment from './pages/ServicePages/KitchenFulfillment';
import InventoryWarehousing from './pages/ServicePages/InventoryWarehousing';
import AnalyticsManagement from './pages/ServicePages/AnalyticsManagement';
import MarketingCustomization from './pages/ServicePages/MarketingCustomization';
import IntegrationScaling from './pages/ServicePages/IntegrationScaling';
import ServicesMain from './pages/ServicePages/ServicesMain';
import styled from 'styled-components';
import { uploadPricingToFirestore } from './scripts/uploadPricing';
import { Time } from './components/ScrollToTop';

const StyledMotionDiv = styled(motion.div)`
  width: 100%;
  top: 0;
  position: relative;
`;
const ScrollToTop = () => {
  const { pathname } = useLocation();
  const topRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    // Два методи для максимальної сумісності
    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: 'auto' });
    }
    window.scrollTo({ top: -950, behavior: 'smooth' });
  }, [pathname]);

  return <div ref={topRef} style={{ position: 'absolute', top: "-950px", height: 0 }} />;
};

export const UploadPricingButton = () => {
  useEffect(() => {
    uploadPricingToFirestore();
  }, []);

  return <div>Uploading pricing…</div>;
};

const AnimatedPage = ({ children }: { children: React.ReactNode }) => {
  return (
    <StyledMotionDiv
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ 
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <ScrollToTop />
      {children}
    </StyledMotionDiv>
  );
};

export const App: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <AnimatePresence mode="wait">
       {/* <UploadPricingButton /> */}
      <ParticlesBackground />
      <ScrollToTop key="global-scroll-top" />
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
          
          {/* Сторінки сервісів */}
          <Route path="/service" element={<AnimatedPage><ServicesMain /></AnimatedPage>} />
          <Route path="/service/customer-experience" element={<AnimatedPage><CustomerExperience /></AnimatedPage>} />
          <Route path="/service/pos-staff-operations" element={<AnimatedPage><PosStaffOperations /></AnimatedPage>} />
          <Route path="/service/kitchen-fulfillment" element={<AnimatedPage><KitchenFulfillment /></AnimatedPage>} />
          <Route path="/service/inventory-warehousing" element={<AnimatedPage><InventoryWarehousing /></AnimatedPage>} />
          <Route path="/service/analytics-management" element={<AnimatedPage><AnalyticsManagement /></AnimatedPage>} />
          <Route path="/service/marketing-customization" element={<AnimatedPage><MarketingCustomization /></AnimatedPage>} />
          <Route path="/service/integration-scaling" element={<AnimatedPage><IntegrationScaling /></AnimatedPage>} />
          
          <Route path="/about" element={<AnimatedPage><AboutUs /></AnimatedPage>} />
          <Route path="/pricing" element={<AnimatedPage><Info /></AnimatedPage>} />
          <Route path="/contact" element={<AnimatedPage><Contact /></AnimatedPage>} />
          
          <Route path="*" element={<AnimatedPage><Home /></AnimatedPage>} />
        </Route>
      </Routes>
      <Time/>
    </AnimatePresence>
  );
};