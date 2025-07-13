import React from 'react';
import {
  ButtonContainer,
  HeroButton,
  HeroButtonGrey,
  HeroInnovative,
  HeroTitle,
} from '../../Hero/Hero.styled';

import phone from '../../../assets/icons/cards/Mobile Phone.svg';
import styled, { keyframes } from 'styled-components';
import costomer from '../../../assets/icons/costomer.png';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { CardButtonText } from '../../PricePlan/PricePlan.styled';
import useMediaQuery from '@mui/material/useMediaQuery';
import Spline from '@splinetool/react-spline';
import { ShadowRight } from '../../Feedback/Feedback.styled';

export const HeroWrapper = styled.div`
  margin: 0 auto;
  margin-top: 450px;
  width: 100%;
  height: 100%;
  margin-bottom: 200px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: visible;

  @media screen and (min-width: 768px) {
    margin-top: 100px;
    margin-bottom: 100px;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 370px;
    margin-bottom: 450px;
  }
`;
// Анімація обертання навколо осі Y
const rotateY = keyframes`
  from {
    transform: rotateY(0deg);
  }
  to {
    transform: rotateY(360deg);
  }
`;

// Батьківський контейнер з перспективою
const PerspectiveWrapper = styled.div`
  perspective: 1900px;
  display: flex;
  justify-content: center;
`;

// Зображення з 3D-ефектом
const Image3DBox = styled.div`
  width: 100vh;
  height: 100vh;
  position: relative;
  transform-style: preserve-3d;
  animation: ${rotateY} 15s linear infinite;
  backface-visibility: hidden;
`;

const Front = styled.img`
  position: absolute;
  left: 17%;
  width: 70%;
  height: 70%;
  backface-visibility: hidden;
`;

const Back = styled.img`
  position: absolute;
  left: 11%;
  width: 70%;
  height: 70%;
  transform: rotateY(180deg);
  backface-visibility: hidden;
`;

export const CostomerWrapp = styled.div`
  position: absolute;
  top: 127px;
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
    margin-top: 100px;
  }
`;

export const Container = styled.div`
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 1400px;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  z-index: -1;

  /* Тіні */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100px;
    background: linear-gradient(to bottom, rgb(0, 0, 0) 0%, transparent 100%);
    z-index: 2;
    pointer-events: none;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100px;
    background: linear-gradient(to top, rgb(0, 0, 0) 0%, transparent 100%);
    z-index: 2;
    pointer-events: none;
  }

  iframe,
  canvas {
    width: 100% !important;
    height: 100% !important;
    display: block;
    position: relative;
    z-index: 1;
    object-fit: cover;
    pointer-events: auto;
  }

  /* Мобільні пристрої */
  @media screen and (max-width: 767px) {
    height: 100vh;
    z-index: -2; /* Поміщаємо під інші елементи */

    &::before,
    &::after {
      height: 50px;
    }

    iframe,
    canvas {
      pointer-events: none; /* Вимкнення клікабельності */
      z-index: -1; /* Нижчий z-index для iframe/canvas */
      opacity: 0.7; /* Додаткове затемнення для мобільних */
    }
  }
`;

const Hero: React.FC = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const { t } = useTranslation();
  return (
    <HeroWrapper>
      <Container style={{ display: 'flex', justifyContent: 'center' }}>
        {isMobile ? (
          <PerspectiveWrapper>
            <Image3DBox>
              <Front src={costomer} />
              <Back src={costomer} />
            </Image3DBox>
          </PerspectiveWrapper>
        ) : (
          <>
            <Spline
              scene="https://prod.spline.design/IkvUuAcfU3TUW6Zw/scene.splinecode"
              style={{
                position: 'absolute', // Абсолютне позиціонування
                top: 0,
                left: 0,
                width: '100%', // На всю ширину
                height: '100vh', // На всю висоту
                transform: 'scale(0.6)', // Можна регулювати масштаб
                transformOrigin: 'center',
                transition: 'transform 0.5s ease-out',
                filter: 'blur(0.5px)',
                overflow: 'visible', // Щоб не обрізало
                zIndex: 0, // Нижчий z-index, щоб контент був зверху
              }}
            />
            <ShadowRight style={{ width: 400, backgroundColor: 'black' }} />
          </>
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
            Mobile UX <CardButtonText src={phone} alt="💰" />
          </HeroInnovative>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          {' '}
          <HeroTitle>Create personalized customer journeys</HeroTitle>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.9 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          {' '}
          <ButtonContainer>
            <a
              href="https://sabsus.app/registrcompany/web"
              target="_blank"
              rel="noopener noreferrer"
            >
              <HeroButton>{t('hero.buttons.tryFree')}</HeroButton>
            </a>
            <a
              href="https://sabsus.app/login/demo@sabsus.com/demo2025"
              target="_blank"
              rel="noopener noreferrer"
            >
              <HeroButtonGrey>{t('hero.buttons.viewDemo')}</HeroButtonGrey>
            </a>
          </ButtonContainer>
        </motion.div>
      </CostomerWrapp>
    </HeroWrapper>
  );
};

export default Hero;
