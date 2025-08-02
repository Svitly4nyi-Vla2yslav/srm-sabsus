import React, { useEffect, useRef, useState } from 'react';
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
  margin-bottom: -450px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: visible;

  @media screen and (min-width: 768px) {
    margin-top: 400px;
    margin-bottom: 100px;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 370px;
    
  }

    @media (min-width: 1920px) {
   margin-top: 400px;
  }
`;

const rotateY = keyframes`
  from {
    transform: rotateY(0deg);
  }
  to {
    transform: rotateY(360deg);
  }
`;

const PerspectiveWrapper = styled.div`
  perspective: 1900px;
  display: flex;
  justify-content: center;
`;

const Image3DBox = styled.div`
  width: 94vh;
  height: 100vw;
margin-bottom: -400px;
  position: relative;
  transform-style: preserve-3d;
  // animation: ${rotateY} 15s linear infinite;
  backface-visibility: hidden;

    @media screen and (min-width: 768px) {
    top: 400px;
    left: 20%;
   width: 100vh;
  height: 100vh;

  }

  @media screen and (min-width: 1440px) {
   top: 500px;
  }
`;

const Front = styled.img`
  // position: absolute;
  // left: 0%;
  // width: 70%;
  // height: 70%;
  transform: rotate(347deg);
  backface-visibility: hidden;
      @media screen and (min-width: 768px) {
   width: 60vh;
  height: 60vh;

  }

  @media screen and (min-width: 1440px) {
  
  }
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
  position: absolute;
  top: 127px;

  @media screen and (min-width: 1440px) {
    margin-top: 100px;
  }

  @media (min-width: 1920px) {
   margin-top: 500px;
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
      top: 430px;
      transform: translateX(-50%);
    }
  }

  @media screen and (min-width: 1440px) {
    iframe,
    canvas {
    top: 550px;
      // max-width: 80vw;
    }
  }

  @media (min-width: 1920px) {
  margin-bottom: 800px;
    iframe,
    canvas {
    top: -140px;
    margin-top: 300px;
     
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
            <div style={{
             
              display: (minLoadingTimePassed && splineReady) ? 'none' : 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: 10,
              transition: 'opacity 0.5s ease-out',
              opacity: (minLoadingTimePassed && splineReady) ? 0 : 1
            }}>
              <PerspectiveWrapper>
                <Image3DBox>
                  <Front 
                    src={costomer} 
                    alt="Loading illustration" 
                    style={{ 
                
                    }}
                  />
                </Image3DBox>
              </PerspectiveWrapper>
            </div>

            <Spline
              scene="https://prod.spline.design/IkvUuAcfU3TUW6Zw/scene.splinecode"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100vh',
                transform: 'scale(0.6)',
                transformOrigin: 'center',
                transition: 'opacity 0.5s ease-out',
                filter: 'blur(0.5px)',
                overflow: 'visible',
                zIndex: 0,
                opacity: (minLoadingTimePassed && splineReady) ? 1 : 0
              }}
              onLoad={handleSplineLoad}
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
