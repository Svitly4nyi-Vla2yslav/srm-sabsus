import React, { lazy, Suspense, useEffect, useRef, useState } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import HeroIcon from '../../../assets/icons/HeroMarketing.png';
import { styled } from 'styled-components';
import { motion } from 'framer-motion';
import Control from '../../../assets/icons/Marketing&Customization/Artist Palette.png';
import { CardButtonText } from '../../AllinOneSRM/AllinOneSRM.styled';
import {
  HeroInnovative,
  HeroTitle,
  ButtonContainer,
  HeroButton,
  HeroButtonGrey,
} from '../../Hero/Hero.styled';
import { useTranslation } from 'react-i18next';
const Spline = lazy(() => import('@splinetool/react-spline'));

export const HeroWrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
     margin-bottom: 0px;
  @media screen and (min-width: 1440px) {
   margin-bottom: 0px;
   
  }

    @media (min-width: 1920px) {

  } 
`;

export const FullScreenContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;

  @media screen and (min-width: 768px) {
    margin-top: 0px;
    iframe,
    canvas {
      position: relative;
      width: 100vw !important; /* Дозволяємо розширення за межі екрану */
      height: 120vh !important;
      left: 50%;
      top: 0px;
      bottom: 90vh;
      transform: translateX(-50%);
    }
  }
`;

const SplineContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  @media screen and (min-width: 1440px) {
  margin-top: 0px;
  }

  @media (min-width: 1920px) {

  } 
`;

const SplinePlaceholder = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  transition: opacity 0.5s ease-out;
`;

interface SplineWrapperProps {
  $visible: boolean;
}

const SplineWrapper = styled.div<SplineWrapperProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transition: opacity 0.5s ease-out;
`;

const ImageBox = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeroImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Sparkle = styled(motion.div)`
  position: absolute;
  width: 4px;
  height: 4px;
  background: white;
  border-radius: 50%;
  filter: drop-shadow(0 0 6px white);
  opacity: 0.8;
  z-index: 2;
`;

const SparkleLayer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 2;
`;

export const CostomerWrapp = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 1300px;
  padding: 0 20px;
  text-align: center;
  z-index: 10;
  @media screen and (min-width: 1440px) {
  margin-top: 0px;
  padding-bottom: 120px;
  
  }
    @media (min-width: 1920px) {

  } 
`;

const FallbackImage = () => {
  const sparkles = Array.from({ length: 100 }, () => ({
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    delay: Math.random() * 3,
    duration: 1 + Math.random() * 2,
  }));

  return (
    <ImageBox>
      <HeroImage src={HeroIcon} alt="3D Scene" />
      <SparkleLayer>
        {sparkles.map((pos, index) => (
          <Sparkle
            key={index}
            style={{ top: pos.top, left: pos.left }}
            animate={{ opacity: [0, 1, 0], scale: [0.3, 0.6, 0.3] }}
            transition={{
              duration: pos.duration,
              repeat: Infinity,
              repeatType: 'loop',
              delay: pos.delay,
            }}
          />
        ))}
      </SparkleLayer>
    </ImageBox>
  );
};

const Hero: React.FC = () => {
  const isMobile = useMediaQuery('(max-width: 767px)');
  const { t } = useTranslation();
  const [splineLoaded, setSplineLoaded] = useState(false);
  const [showPlaceholder, setShowPlaceholder] = useState(true);
  const minLoadTimeRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    return () => {
      if (minLoadTimeRef.current) {
        clearTimeout(minLoadTimeRef.current);
      }
    };
  }, []);

  const handleSplineLoad = () => {
    minLoadTimeRef.current = setTimeout(() => {
      setSplineLoaded(true);
      setShowPlaceholder(false);
    }, 2000);
  };

  return (
    <HeroWrapper  id='ap'>
      <FullScreenContainer>
        {isMobile ? (
          <FallbackImage />
        ) : (
          <SplineContainer>
            {showPlaceholder && (
              <SplinePlaceholder style={{ opacity: splineLoaded ? 0 : 1 }}>
                <FallbackImage />
              </SplinePlaceholder>
            )}

            <Suspense fallback={null}>
              <SplineWrapper $visible={splineLoaded}>
                <Spline
                  scene="https://prod.spline.design/xuwX0qwENokWyrTw/scene.splinecode"
                  onLoad={handleSplineLoad}
                  style={{
                    width: '100vw',
                    height: '100vh',
                    transform: "rotate(180deg)"
                  }}
                />
              </SplineWrapper>
            </Suspense>
          </SplineContainer>
        )}
      </FullScreenContainer>

      <CostomerWrapp>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: false, amount: 0.3 }}
          style={{
            position: 'relative',
            zIndex: 1,
            width: '100%',
          }}
        >
          <HeroInnovative>
            {t('brandEngineHero.innovativeText')}
            <CardButtonText src={Control} alt="💰" />
          </HeroInnovative>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <HeroTitle>{t('brandEngineHero.title')}</HeroTitle>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.9 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <ButtonContainer>
            <a
              href="https://sabsus.app/registrcompany/web"
              target="_blank"
              rel="noopener noreferrer"
            >
              <HeroButton>{t('brandEngineHero.buttons.tryFree')}</HeroButton>
            </a>
            <a
              href="https://sabsus.app/login/demo@sabsus.com/demo2025"
              target="_blank"
              rel="noopener noreferrer"
            >
              <HeroButtonGrey>
                {t('brandEngineHero.buttons.viewDemo')}
              </HeroButtonGrey>
            </a>
          </ButtonContainer>
        </motion.div>
      </CostomerWrapp>
    </HeroWrapper>
  );
};

export default Hero;
