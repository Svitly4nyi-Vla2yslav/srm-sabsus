import React, { lazy, Suspense } from 'react';
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
  margin: 0 auto;
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 768px) {
    width: 100%;
    margin-top: 100px;
    margin-bottom: 100px;
    padding-top: 0;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 100px;
    margin-bottom: 150px;
  }
`;

export const Container = styled.div`
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 140vw;
  max-width: 1440px;
  overflow: visible;
  z-index: -1;

  @media screen and (min-width: 768px) {
    position: absolute;
    top: -100px;
    left: 50%;
    transform: translate(-50%, -50%);
    // width: ;
    height: 900px;
    max-width: 1440px;
    overflow: visible;
    z-index: -1;

    iframe,
    canvas {
      width: 100% !important;
      height: 100vh !important;
      display: block;
      position: relative;
      z-index: 1;
      object-fit: cover;
      pointer-events: auto;
      // filter: blur(0.5px);
      overflow: visible;
    }
  }
  @media screen and (min-width: 767px) {
    z-index: -2;

    iframe,
    canvas {
      pointer-events: none;
      z-index: -1;
      opacity: 0.7;
    }
  }

  @media screen and (min-width: 1440px) {
    top: -50px;
    margin-top: 50px;
    margin-bottom: 50px;

    iframe,
    canvas {
      // pointer-events: none;
      z-index: -1;
      opacity: 0.7;
      max-width: 1440px;
      width: 100% !important;
    }
  }
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
  top: -202px;
  left: 50%;
  transform: translate(-50%, 0); // Змінив translateY на 0
  width: 100%;
  max-width: 1200px;
  padding: 0 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center; // Додав для центрування вмісту

  @media screen and (min-width: 1440px) {
    top: -200px; // Корегуємо положення для десктопу
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
    <div style={{ position: 'relative', width: '100%', bottom: '60%' }}>
      <img
        src={HeroIcon}
        alt="3D Scene"
        style={{
          width: 'auto',
          height: '664px',
          filter: 'blur(0.5px)',
          display: 'block',
          margin: '0 auto',
        }}
      />
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
    </div>
  );
};

const Hero: React.FC = () => {
  const isMobile = useMediaQuery('(max-width: 767px)');
  const { t } = useTranslation();

  return (
    <HeroWrapper style={{ marginTop: 370 }}>
      <Container>
        {isMobile ? (
          <FallbackImage />
        ) : (
          <Suspense fallback={<FallbackImage />}>
            <Spline
              scene="https://prod.spline.design/xuwX0qwENokWyrTw/scene.splinecode"
              style={{
                width: '100%',
                transition: 'transform 0.5s ease-out',
                transform: 'rotate(180deg)',
              }}
            />
          </Suspense>
        )}
      </Container>
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
              <HeroButtonGrey>{t('brandEngineHero.buttons.viewDemo')}</HeroButtonGrey>
            </a>
          </ButtonContainer>
        </motion.div>
      </CostomerWrapp>
    </HeroWrapper>
  );
};

export default Hero;
