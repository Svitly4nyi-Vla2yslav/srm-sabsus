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
import HeroIcon from '../../../assets/icons/Integration&Scaling/HeroIcon.png';
import Control from '../../../assets/icons/Integration&Scaling/Paperclip.svg';
import Spline from '@splinetool/react-spline';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { CardButtonText } from '../../AllinOneSRM/AllinOneSRM.styled';

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
  }

  @media screen and (min-width: 1440px) {
    margin-top: 100px;
    margin-bottom: 250px;
  }
`;

export const Container = styled.div`
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 1400px;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  z-index: -1;
  margin-top: 350px;

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

  @media screen and (max-width: 767px) {
    height: 70vh;
    z-index: -2;

    iframe,
    canvas {
      pointer-events: none;
      z-index: -1;
      opacity: 0.7;
    }
  }

  @media screen and (min-width: 768px) {
    iframe,
    canvas {
      width: 100% !important;
      height: 100vh !important;
      display: block;
      position: relative;
      z-index: 111;
      object-fit: cover;
      pointer-events: auto;
    }
    &::before {
      content: '';
      position: absolute;
      bottom: 0;
      right: 0;
      width: 150px;
      height: 150px;
      background: rgba(0, 0, 0, 1) 80%;
      transform: rotate(344deg);
      transform-origin: 100% 100%;
      z-index: 11111112;
    }
  }
  margin-top: 250px;
  @media screen and (min-width: 1440px) {
    margin-top: 350px;
    margin-bottom: 150px;

    iframe,
    canvas {
      width: 100% !important;
      height: 100vh !important;
      display: block;
      position: relative;
      z-index: 111;
      object-fit: cover;
      pointer-events: auto;
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
  top: 307px;
  left: 50%;
  transform: translate(-50%, 0);
  @media screen and (min-width: 768px) {
    top: 407px;
  }

  @media screen and (min-width: 1440px) {
    top: 557px;
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
    <div style={{ position: 'relative', width: '130%', margin: '0 auto' }}>
      <img
        src={HeroIcon}
        alt="3D Scene"
        style={{
          width: '140%',
          height: 'auto',
          filter: 'blur(0.5px)',
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
    <HeroWrapper style={{ marginTop: 50 }}>
      <Container>
        {isMobile ? (
          <FallbackImage />
        ) : (
          <Suspense fallback={<FallbackImage />}>
            <Spline
              scene="https://prod.spline.design/o3TwCRELc5TibQQE/scene.splinecode"
              style={{
                maxWidth: '1440px',
                width: '100%',
                height: 'auto',
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
            {t('integrationScalingHero.title')}{' '}
            <CardButtonText src={Control} alt="Control icon" />
          </HeroInnovative>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <HeroTitle>{t('integrationScalingHero.heading')}</HeroTitle>
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
                {t('integrationScalingHero.buttons.tryFree')}
              </HeroButton>
            </a>
            <a
              href="https://sabsus.app/login/demo@sabsus.com/demo2025"
              target="_blank"
              rel="noopener noreferrer"
            >
              <HeroButtonGrey>
                {t('integrationScalingHero.buttons.viewDemo')}
              </HeroButtonGrey>
            </a>
          </ButtonContainer>
        </motion.div>
      </CostomerWrapp>
    </HeroWrapper>
  );
};

export default Hero;
