import React, { useEffect, useRef, useState } from 'react';
import {
  ButtonContainer,
  HeroButton,
  HeroButtonGrey,
  HeroInnovative,
  HeroTitle,
} from '../../Hero/Hero.styled';
import phone from '../../../assets/icons/cards/Mobile Phone.svg';
import styled from 'styled-components';
import costomer from '../../../assets/icons/costomer.png';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { CardButtonText } from '../../PricePlan/PricePlan.styled';
import useMediaQuery from '@mui/material/useMediaQuery';
import Spline from '@splinetool/react-spline';

export const HeroWrapper = styled.div`
  margin: 0 auto;
  margin-top: 100px;
  width: 100%;
  height: 100%;
  margin-bottom: 0px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: visible;

  @media screen and (min-width: 768px) {
    padding-top: 120px;
    margin-bottom: 100px;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 0%;
    margin-top: 0;
    margin-bottom: 0px;
    margin-top: 0px !important;
  }

  @media (min-width: 1920px) {
  }
`;


const PerspectiveWrapper = styled.div`
  perspective: 1900px;
  display: flex;
  justify-content: center;
   margin: 0 auto;
`;

const Image3DBox = styled.div`
  width: 100vh; /* Змінюємо на 100% ширини батьківського контейнера */
  max-width: 600px; /* Максимальна ширина для більших екранів */
  aspect-ratio: 1/1; /* Зберігаємо квадратні пропорції */
  position: relative;
  transform-style: preserve-3d;
  backface-visibility: hidden;
  margin: 0 auto; /* Центруємо по горизонталі */

  @media screen and (min-width: 768px) {
    max-width: 800px;
    margin-left: 10%;
    margin-top: 0;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1900px;
      width: 100% !important;
    height: 100% !important;
   left: 40%;
    margin-top: 10%;
  }
`;

const Front = styled.img`
  width: 100%; /* Займає всю ширину контейнера */
  height: auto; /* Автоматична висота для збереження пропорцій */
  transform: rotate(347deg);
  z-index: 1;
  backface-visibility: visible;
  object-fit: contain; /* Забезпечує повне відображення зображення */
`;

// const Back = styled.img`
//   position: absolute;
//   left: 11%;
//   width: 70%;
//   height: 70%;
//   transform: rotateY(180deg);
//   backface-visibility: hidden;
// `;

export const CostomerWrapp = styled.div`
  position: relative; /* Змінюємо absolute на relative */
  width: 100%;
  max-width: 1200px; /* Фіксуємо максимальну ширину контенту */
  margin: 0 auto; /* Центруємо контент */
  padding: 327px 20px 0; /* Відступи: зверху, з боків */
  box-sizing: border-box;
  z-index: 2;

  @media screen and (min-width: 768px) {
    padding-top: 400px;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 527px;
  }

  @media (min-width: 1920px) {
    padding-top: 650px; /* Замість 500px для кращої адаптації */
  }
`;

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vw;
  z-index: 0;

  iframe,
  canvas {
    width: 100% !important;
    height: 100% !important;
    object-fit: cover;
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
      position: relative;
      top: 0;
      z-index: 69;
      bottom: 100px;
      transform: none;
    }
  }

  @media screen and (min-width: 1440px) {
    iframe,
    canvas {
     width: 40% !important;
    height: 40% !important;
    object-fit: cover;
    left: 30% !important; /* Центруємо по горизонталі */
    top: 0 !important; /* Перевизначаємо будь-які інші стилі */
      transform: none !important; 
    }
  }
`;

const Hero: React.FC = () => {
  const isMobile = useMediaQuery('(max-width: 767px)');
  const { t } = useTranslation();
  const [splineReady, setSplineReady] = useState(false);
  const [minLoadingTimePassed, setMinLoadingTimePassed] = useState(false);
  const MIN_LOADING_TIME = 4000; // 3 секунди мінімального часу заставки
  const startTimeRef = useRef(Date.now());
  const timerRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    // Встановлюємо таймер для мінімального часу завантаження
    timerRef.current = setTimeout(() => {
      setMinLoadingTimePassed(true);
    }, MIN_LOADING_TIME);

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  const handleSplineLoad = () => {
    const elapsed = Date.now() - startTimeRef.current;
    const remainingTime = Math.max(0, MIN_LOADING_TIME - elapsed);

    // Встановлюємо таймер для оновлення стану після залишкового часу
    timerRef.current = setTimeout(() => {
      setSplineReady(true);
    }, remainingTime);
  };

  return (
    <HeroWrapper>
      <Container style={{ display: 'flex', justifyContent: 'center' }}>
        {isMobile ? (
          <PerspectiveWrapper>
            <Image3DBox>
              <Front src={costomer} alt="Customer illustration" />
            </Image3DBox>
          </PerspectiveWrapper>
        ) : (
          <>
            <div
              style={{
                display: minLoadingTimePassed && splineReady ? 'none' : 'flex',
                justifyContent: 'center',
                alignItems: 'flex-start', // Змінено з 'center' на 'flex-start'
                zIndex: 60,
                transition: 'opacity 0.5s ease-out',
                opacity: minLoadingTimePassed && splineReady ? 0 : 1,
                marginTop: 0, // Додано для чіткого позиціонування
              }}
            >
              <PerspectiveWrapper>
                <Image3DBox>
                  <Front src={costomer} alt="Loading illustration" />
                </Image3DBox>
              </PerspectiveWrapper>
            </div>

            <Spline
              scene="https://prod.spline.design/IkvUuAcfU3TUW6Zw/scene.splinecode"
              style={{
    
                opacity: minLoadingTimePassed && splineReady ? 1 : 0,
              }}
              onLoad={handleSplineLoad}
            />
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
            {t('mobileUXSection1.title')}{' '}
            <CardButtonText src={phone} alt="Phone icon" />
          </HeroInnovative>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <HeroTitle>{t('mobileUXSection1.heading')}</HeroTitle>
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
              <HeroButton>{t('mobileUXSection1.buttons.tryFree')}</HeroButton>
            </a>
            <a
              href="https://sabsus.app/login/demo@sabsus.com/demo2025"
              target="_blank"
              rel="noopener noreferrer"
            >
              <HeroButtonGrey>
                {t('mobileUXSection1.buttons.viewDemo')}
              </HeroButtonGrey>
            </a>
          </ButtonContainer>
        </motion.div>
      </CostomerWrapp>
    </HeroWrapper>
  );
};

export default Hero;
