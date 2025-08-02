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
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; /* Додаємо для вертикального центрування */
  top: 584px;
  overflow: visible;
  @media screen and (min-width: 768px) {
    width: 100%;
    // margin-top: 400px;
    margin-bottom: 100px;
    height: auto;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 0px;
    margin-bottom: 150px;
  }

  @media (min-width: 1920px) {
    max-width: 1920px;
    margin: 0px auto ;
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
  top: -750px;

 

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
    height: 100vh;



    iframe,
    canvas {
      height: 100% !important;
      object-fit: cover;
      pointer-events: none;
      opacity: 0.7;
    }
  }

  @media screen and (min-width: 768px) {
    iframe,
    canvas {
      width: 100vw !important; /* Дозволяємо розширення за межі екрану */
      height: 100vh !important;
      left: 50%;
      top: 30px;
      transform: translateX(-50%);
    }
  }

  @media screen and (min-width: 1440px) {
    iframe,
    canvas {
    top: 50px;
      // max-width: 80vw;
    }
  }

  @media (min-width: 1920px) {
    iframe,
    canvas {
    top: -140px;
     
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
  top: -100px;
  // top: 100%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media screen and (min-width: 768px) {
    top: -0px;
  }

  @media (min-width: 1920px) {
    top: 350px;
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
          viewport={{ once: false, amount: 0.3 }}
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
          viewport={{ once: false, amount: 0.3 }}
        >
          <HeroTitle>{t('terminalControlSection.heading')}</HeroTitle>
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
