// ОПТИМІЗОВАНИЙ КОД HeroAnimation.tsx для iOS / Android / Windows

import { motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';
import { styled, keyframes } from 'styled-components';
import { CardButtonText } from '../AllinOneSRM/AllinOneSRM.styled';
import { HeroInnovative, HeroTitle } from '../Hero/Hero.styled';
import book from '../../assets/icons/Books.svg';
import { ResultMainTextDescription } from '../ResultsFromBusinesses/ResultsFromBusinesses.styled';
import { useTranslation } from 'react-i18next';

const float = keyframes`
  0%, 100% {
    transform: translateY(0) rotateX(0deg) scale(1);
  }
  50% {
    transform: translateY(-30px) rotateX(10deg) scale(1.05);
  }
`;

const pulse = keyframes`
  0%, 100% { opacity: 0.8; }
  50% { opacity: 1; }
`;

const wave = keyframes`
  0% { transform: translateX(0) translateY(0); }
  25% { transform: translateX(-5px) translateY(-5px); }
  50% { transform: translateX(5px) translateY(0); }
  75% { transform: translateX(0) translateY(5px); }
`;

const fastParticlesMove = keyframes`
  0% { transform: translateY(100px) translateX(0); opacity: 0; }
  10% { opacity: 1; }
  90% { opacity: 1; }
  100% { transform: translateY(-150px) translateX(30px); opacity: 0; }
`;

const WaveWrapper = styled.g`
  animation: ${wave} 7s ease-in-out infinite;
  will-change: transform;
`;

const FastParticle = styled.circle.attrs<{ delay: number }>(props => ({
  style: { animationDelay: `${props.delay * 0.7}s`, willChange: 'transform, opacity' }
}))<{ cx: number; cy: number; delay: number }>`
  animation: ${fastParticlesMove} ${props => 1 + props.delay * 0.9}s linear infinite;
  will-change: transform, opacity;
`;

const HeroWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 486px;
  margin: 0 auto 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  will-change: transform;
  top: -50px;

  @media screen and (min-width: 768px) {
    height: 704px;
  }
  @media screen and (min-width: 1440px) {
    height: 873px;
    top: 40px;
  }
`;

const SvgContainer = styled.div`
  position: relative;
  width: auto;
  height: auto;
  display: flex;
  z-index: 1;
  justify-content: center;
  will-change: transform;
`;

const ParticlesBackground = styled.svg`
  position: absolute;
  width: 100vw;
  height: 100%;
  z-index: -4555;
`;

const AnimatedSvg = styled.svg`
  height: auto;
  min-width: 375px;
  animation: ${float} 8s ease-in-out infinite, ${pulse} 3s ease-in-out infinite;
  filter: drop-shadow(0 0 90px rgba(94, 94, 243, 0.5));
  position: relative;
  top: 300px;
  z-index: 551;
  will-change: transform, opacity;

  @media screen and (min-width: 768px) {
    top: 200px;
    min-width: 768px;
    filter: drop-shadow(0 0 100px rgba(94, 94, 243, 0.5));
  }

  @media screen and (min-width: 1440px) {
    top: 230px;
    max-width: 1440px;
    height: 1000px;
    filter: drop-shadow(0 0 180px rgba(94, 94, 243, 0.4));
  }
`;

const ScaledPath = styled.path`
  transform: scale(1.4);
  transform-origin: center;
`;

export const CostomerWrapp = styled.div`
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 1200px;
  padding: 0 20px;
  text-align: center;
  z-index: 3;

  @media screen and (min-width: 768px) {
    top: 45%;
  }
`;

export const NumberWrapp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  top: 300px;
  gap: 20px;
  width: 100%;
  will-change: transform;

  @media screen and (min-width: 768px) {
    top: -300px;
    flex-direction: row;
    justify-content: space-between;
  }

  @media screen and (min-width: 1440px) {
    top: -150px;
    justify-content: space-evenly;
    max-width: 1440px;
  }
`;

export const Number = styled.h2`
  font-weight: 500;
  font-size: 96px;
  text-align: center;
  color: var(--white-100);
  @media screen and (min-width: 768px) {
    font-size: 113px;
  }
`;

export const NumberText = styled.p`
  font-weight: 400;
  font-size: 17px;
  text-align: center;
  color: var(--white-50);
  width: 70%;
  margin: 0 auto;
`;

interface Particle {
  id: number;
  cx: number;
  cy: number;
  r: number;
  delay: number;
}

const HeroAnimation: React.FC = () => {
  const { t } = useTranslation();
 const [particles, setParticles] = useState<Particle[]>([]);
  const svgRef = useRef(null);

  useEffect(() => {
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    const count = isIOS ? 10 : (window.innerWidth >= 1440 ? 100 : 50);

    const generateParticles = () => Array.from({ length: count }).map((_, i) => ({
      id: i,
      cx: Math.random() * window.innerWidth,
      cy: Math.random() * window.innerHeight,
      r: Math.random() * 1.2 + 0.2,
      delay: Math.random(),
    }));

    setParticles(generateParticles());
    const resize = () => setParticles(generateParticles());
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, []);

  return (
    <HeroWrapper>
      <SvgContainer>
        <AnimatedSvg viewBox="0 0 375 486" ref={svgRef} xmlns="http://www.w3.org/2000/svg">
          <WaveWrapper>
            <g filter="url(#filter0_f_536_51994)">
              <ScaledPath d="M167.567 460.116C148.106 294.453 167.567 196.218 -36.2227 -42.2329H407.778C208.715 196.657 241.799 293.479 208.715 460.116H167.567Z" fill="url(#paint0_linear_536_51994)" />
            </g>
          </WaveWrapper>
          <ParticlesBackground>
            {particles.map(p => (
              <FastParticle key={p.id} cx={p.cx} cy={p.cy} r={p.r} delay={p.delay} fill="#a6a6f5ff" />
            ))}
          </ParticlesBackground>
          <defs>
            <filter id="filter0_f_536_51994">
              <feGaussianBlur stdDeviation="12.5" />
            </filter>
            <linearGradient id="paint0_linear_536_51994" x1="192.3" y1="48.4" x2="192.3" y2="533.7" gradientUnits="userSpaceOnUse">
              <stop stopColor="#5E5EF3">
                <animate attributeName="stop-color" values="#5E5EF3; #9E5EF3; #5E5EF3" dur="10s" repeatCount="indefinite" />
              </stop>
              <stop offset="0.8" stopColor="#5E5EF3" stopOpacity="0">
                <animate attributeName="stop-color" values="#5E5EF3; #9E5EF3; #5E5EF3" dur="10s" repeatCount="indefinite" />
              </stop>
            </linearGradient>
          </defs>
        </AnimatedSvg>
      </SvgContainer>

      <CostomerWrapp>
        <motion.div initial={false} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: false, amount: 0.3 }}>
          <HeroInnovative>{t('hero1.aboutUs')} <CardButtonText src={book} alt="book" /></HeroInnovative>
        </motion.div>
        <motion.div initial={false} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: false, amount: 0.3 }}>
          <HeroTitle>{t('hero1.title')}</HeroTitle>
        </motion.div>
        <motion.div initial={false} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: false, amount: 0.3 }}>
          <ResultMainTextDescription>{t('hero1.description')}</ResultMainTextDescription>
        </motion.div>
      </CostomerWrapp>

      <NumberWrapp>
        {[{ value: '98%', text: 'satisfaction', delay: 0.45 }, { value: '3x', text: 'launchSpeed', delay: 0.35 }, { value: '70%', text: 'scaling', delay: 0.25 }].map(({ value, text, delay }, i) => (
          <motion.div key={i} initial={false} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4, delay }} viewport={{ once: false, amount: 0.3 }}>
            <div>
              <Number>{value}</Number>
              <NumberText>{t(`hero1.stats.${text}`)}</NumberText>
            </div>
          </motion.div>
        ))}
      </NumberWrapp>
    </HeroWrapper>
  );
};

export default HeroAnimation;
