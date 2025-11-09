import React, { Suspense } from 'react';
import { styled } from 'styled-components';
import {
  ButtonContainer,
  HeroButton,
  HeroButtonGrey,
  HeroInnovative,
  HeroTitle,
} from '../../Hero/Hero.styled';
import useMediaQuery from '@mui/material/useMediaQuery';
import HeroIcon from '../../../assets/icons/POS&Staf/hero-pos.png';
import Control from '../../../assets/icons/POS&Staf/ControlKnobs.svg';
import Spline from '@splinetool/react-spline';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { CardButtonText } from '../../AllinOneSRM/AllinOneSRM.styled';

export const HeroWrapper = styled.div`
  margin: 0 auto;
  margin-top: 100px;
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: visible;
  margin-bottom: 100px;
  @media screen and (min-width: 768px) {
    padding-top: 0px;
    margin-bottom: 100px;
    margin-top: 0px;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 0%;
    margin-top: 0%;
    margin-bottom: 450px;
    margin-top: 0px !important;
  }

  @media (min-width: 1920px) {
  }
`;

export const Container = styled.div`
  position: relative; /* Змінюємо на relative */
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  z-index: -1;
  overflow: visible;
  top: 0px;

  iframe,
  canvas {
    width: 100% !important;
    height: auto !important;
    display: block;
    position: relative;
    z-index: 1;
    object-fit: contain; /* Змінюємо на contain для коректного відображення */
    margin: 0 auto;
  }

  @media screen and (max-width: 767px) {
    iframe,
    canvas {
      pointer-events: none;
      opacity: 0.7;
    }
  }

  @media screen and (min-width: 768px) {
    iframe,
    canvas {
      width: 100vh !important; /* Дозволяємо розширення за межі екрану */
      height: 100% !important;
      left: 50%;
      top: 0px;
      transform: translateX(-50%);
    }
  }

  @media screen and (min-width: 1440px) {
    iframe,
    canvas {
    top: -70px !important; 
      width: 100% !important; /* Дозволяємо розширення за межі екрану */
      height: 100% !important;
      left: 0;
      transform: none !important;
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
  position: relative; /* Змінюємо absolute на relative */
  width: 100%;
  max-width: 1920px; /* Фіксуємо максимальну ширину контенту */
  margin: 0 auto; /* Центруємо контент */
  padding: 27px 20px 0; /* Відступи: зверху, з боків */
  box-sizing: border-box;
  z-index: 2;

  @media screen and (min-width: 768px) {
    padding-top: 0px;
  }

  @media screen and (min-width: 1440px) {
     position: absolute; /* Тільки для 1440px+ */
    top: 0; /* Піднімаємо до верху */
    left: 50%;
    transform: translateX(-50%); /* Точне центрування */
    padding-top: 0;
    margin-top: 550px;
    width: 100%;
    max-width: 1440px; /* Оптимальна ширина для великих екранів */
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
    <div style={{ position: 'relative', width: '100%' }}>
      <img
        src={HeroIcon}
        alt="3D Scene"
        style={{
          width: '100%',
          height: 'auto',
          filter: 'blur(0.5px)',
          transform: 'rotate(-10deg)',
          display: 'block',
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
    <HeroWrapper style={{}}>
      <Container>
        {isMobile ? (
          <FallbackImage />
        ) : (
          <Suspense fallback={<FallbackImage />}>
            <Spline
              scene="https://prod.spline.design/weK184EAiAKpQ3YI/scene.splinecode"
              style={{
                transition: 'transform 0.5s ease-out',
                filter: 'blur(0.5px)',
                maxWidth: '100%',
                overflow: 'visible',
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
          viewport={{ once: true, amount: 0.3 }}
          style={{
            position: 'relative',
            zIndex: 1,
            width: '100%',
          }}
        >
          <HeroInnovative>
            {t('terminalControlSection.title')}{' '}
            <CardButtonText src={Control} alt="💰" />
          </HeroInnovative>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <HeroTitle>{t('terminalControlSection.heading')}</HeroTitle>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.9 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <ButtonContainer>
            <a
              href="https://sabsus.app/registrcompany/web"
              target="_blank"
              rel="noopener noreferrer"
            >
              <HeroButton>
                {t('terminalControlSection.buttons.tryFree')}
              </HeroButton>
            </a>
            <a
              href="https://sabsus.app/login/demo@sabsus.com/demo2025"
              target="_blank"
              rel="noopener noreferrer"
            >
              <HeroButtonGrey>
                {t('terminalControlSection.buttons.viewDemo')}
              </HeroButtonGrey>
            </a>
          </ButtonContainer>
        </motion.div>
      </CostomerWrapp>
    </HeroWrapper>
  );
};

export default Hero;
