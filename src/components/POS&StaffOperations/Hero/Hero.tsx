import React, { Suspense, useEffect, useRef, useState } from 'react';
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

export const HeroWrapper = styled.section`
  margin: 0 auto;
  margin-top: 100px;
  width: 100%;
  position: relative;

  /* ключ: резервуємо висоту одразу */
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  /* ключ: відсікаємо “наїзди” по стеку */
  isolation: isolate;

  /* ключ: щоб не було дивних накладань під час завантаження */
  overflow: hidden;

  margin-bottom: 100px;

  @media screen and (min-width: 768px) {
    margin-top: 0px;
    margin-bottom: 100px;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 0px !important;
    margin-bottom: 450px;
  }
`;

export const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;

  display: flex;
  justify-content: center;
  align-items: center;

  /* ключ: НІЯКОГО -1 */
  z-index: 0;

  /* ключ: стабільна висота секції */
  height: 100vh;
  min-height: 100vh;

  overflow: hidden;
  top: 0px;

  iframe,
  canvas {
    width: 100% !important;

    /* ключ: не auto, інакше Hero “стискається” */
    height: 100% !important;

    display: block;
    position: relative;
    z-index: 1;

    /* лишаємо як у тебе: без жорсткого кропу */
    object-fit: contain;

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
      width: 100vw !important;
      height: 100vh !important;
      left: 50%;
      top: 0px;
      transform: translateX(-50%);
    }
  }

  @media screen and (min-width: 1440px) {
    iframe,
    canvas {
      width: 100vw !important;
      height: 100vh !important;
      left: 50%;
      top: 0px;

      /* якщо тобі треба було підняти сцену, роби так, але без зламу layout */
      transform: translate(-50%, -70px);
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
  inset: 0;
  pointer-events: none;
  z-index: 2;
`;

export const CostomerWrapp = styled.div`
  position: relative;
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
  padding: 27px 20px 0;
  box-sizing: border-box;
  z-index: 2;

  @media screen and (min-width: 768px) {
    padding-top: 0px;
  }

  @media screen and (min-width: 1440px) {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    padding-top: 0;
    margin-top: 550px;
    width: 100%;
    max-width: 1440px;
  }
`;

/* ========= стабільний stage (як у минулому фіксі) ========= */

const SplineStage = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 100vh;
`;

const FallbackLayer = styled.div<{ $hidden: boolean }>`
  position: absolute;
  inset: 0;
  z-index: 3;

  opacity: ${p => (p.$hidden ? 0 : 1)};
  transition: opacity 320ms ease;

  /* ключ: поки видима заглушка, вона блокує кліки “крізь себе” */
  pointer-events: ${p => (p.$hidden ? 'none' : 'auto')};

  display: flex;
  justify-content: center;
  align-items: center;
`;

const FallbackImage: React.FC = () => {
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
          opacity: 0.7,
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
  const isDesktopSpline = useMediaQuery('(min-width: 1440px)', { noSsr: true });
  const { t } = useTranslation();

  const [splineLoaded, setSplineLoaded] = useState(false);
  const [, setTimeoutDone] = useState(false);
  const stageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!isDesktopSpline) return;

    setSplineLoaded(false);
    setTimeoutDone(false);

    const el = stageRef.current;
    if (!el) return;

    const check = () => {
      const hasCanvasOrIframe = el.querySelector('canvas, iframe');
      if (hasCanvasOrIframe) setSplineLoaded(true);
    };

    check();

    const obs = new MutationObserver(check);
    obs.observe(el, { childList: true, subtree: true });

    const timer = window.setTimeout(() => setTimeoutDone(true), 6000);

    return () => {
      obs.disconnect();
      window.clearTimeout(timer);
    };
  }, [isDesktopSpline]);

  const showFallback = !splineLoaded;

  return (
    <HeroWrapper>
      <Container>
        {!isDesktopSpline ? (
          <FallbackImage />
        ) : (
          <SplineStage ref={stageRef}>
            const showFallback = !splineLoaded;
            <FallbackLayer $hidden={!showFallback}>
              <FallbackImage />
            </FallbackLayer>
            <Suspense fallback={null}>
              <Spline
                scene="https://prod.spline.design/weK184EAiAKpQ3YI/scene.splinecode"
                onLoad={() => setSplineLoaded(true)}
                style={{
                  width: '100%',
                  height: '100%',
                  maxWidth: '100%',
                  overflow: 'hidden',
                  filter: 'blur(0.5px)',
                  opacity: splineLoaded ? 1 : 0,
                  transition: 'opacity 320ms ease',
                }}
              />
            </Suspense>
          </SplineStage>
        )}
      </Container>

      <CostomerWrapp>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true, amount: 0.3 }}
          style={{ position: 'relative', zIndex: 1, width: '100%' }}
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
