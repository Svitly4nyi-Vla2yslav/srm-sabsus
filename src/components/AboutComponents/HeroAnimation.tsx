import { motion } from 'framer-motion';
import React from 'react';
import { styled, keyframes } from 'styled-components';
import { CardButtonText } from '../AllinOneSRM/AllinOneSRM.styled';
import { HeroInnovative, HeroTitle } from '../Hero/Hero.styled';
import book from '../../assets/icons/Books.svg';
import { ResultMainTextDescription } from '../ResultsFromBusinesses/ResultsFromBusinesses.styled';

// Анімації
const float = keyframes`
  0%, 100% { transform: translateY(0) rotateX(0deg) scale(1); }
  50% { transform: translateY(-30px) rotateX(10deg) scale(1.05); }
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
`;

const FastParticle = styled.circle<{ cx: number; cy: number; delay: number }>`
  animation: ${fastParticlesMove} ${props => 1 + props.delay * 0.9}s linear
    infinite;
  animation-delay: ${props => props.delay * 0.7}s;
  will-change: transform, opacity;
  z-index: -5;
`;

const HeroWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 486px;
  overflow: visible; /* Дозволяємо вихід за межі контейнера */
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 600px;
  @media screen and (min-width: 768px) {
    height: 704px;
  }

  @media screen and (min-width: 1440px) {
    height: 873px;
  }
`;

const SvgContainer = styled.div`
  position: relative;
  width: auto; /* Змінюємо на auto для адаптації до контенту */
  height: auto;
  display: flex;
  z-index: 1;
  justify-content: center;
  overflow: visible; /* Вимкнути обрізання */
`;

const ParticlesBackground = styled.svg`
  position: absolute;
  width: 100vw;
  height: 100%;
  z-index: -4555; /* Нижчий рівень, ніж основна картинка */
`;

const AnimatedSvg = styled.svg`
  height: auto;
  min-width: 375px;
  animation:
    ${float} 8s ease-in-out infinite,
    ${pulse} 3s ease-in-out infinite;
  filter: drop-shadow(0 0 90px rgba(94, 94, 243, 0.7))
    drop-shadow(0 0 60px rgba(94, 94, 243, 0.3))
    drop-shadow(0 0 120px rgba(94, 94, 243, 0.4)); /* Додаємо третій шар тіні */
  position: relative;
  top: 300px;
  z-index: 551;

  @media screen and (min-width: 768px) {
    top: 200px;

    min-width: 768px;
    filter: drop-shadow(0 0 100px rgba(94, 94, 243, 0.7))
      drop-shadow(0 0 80px rgba(94, 94, 243, 0.4))
      drop-shadow(0 0 150px rgba(94, 94, 243, 0.3));
  }

  @media screen and (min-width: 1440px) {
    top: 230px;
    max-width: 1440px;
    height: 1000px;
    filter: drop-shadow(0 0 220px rgba(94, 94, 243, 0.7))
      drop-shadow(0 0 200px rgba(94, 94, 243, 0.5))
      drop-shadow(0 0 400px rgba(94, 94, 243, 0.3));
  }
`;

const ScaledPath = styled.path`
  transform: scale(1.4);
  transform-origin: center;
  /* Видаляємо translate, щоб уникнути зсуву */
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

  @media screen and (min-width: 1440px) {
    // top: 50%;
  }
`;

export const NumberWrapp = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  position: relative;
  top: 300px;
  bottom: 500px;
  gap: 20px;
  width: 100%;
  @media screen and (min-width: 768px) {
    bottom: 0;
    top: -300px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
  }

  @media screen and (min-width: 1440px) {
    top: -150px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-evenly;
    max-width: 1440px;
  }
`;

export const Number = styled.h2`
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 96px;
  line-height: 100%;
  text-align: center;
  color: var(--white-100);
  @media screen and (min-width: 768px) {
    font-size: 113px;
  }
  @media screen and (min-width: 1440px) {
  }
`;

export const NumberText = styled.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 17px;
  line-height: 130%;
  text-align: center;
  color: var(--white-50);
  width: 70%;
  margin: 0 auto;
`;

const HeroAnimation: React.FC = () => {
  // Генеруємо частинки з урахуванням масштабу
  const generateParticles = () => {
    const isLargeScreen = window.innerWidth >= 1440;
    const count = isLargeScreen ? 100 : 50; // Більше частинок для фону

    return Array.from({ length: count }).map((_, i) => ({
      id: i,
      cx: Math.random() * window.innerWidth,
      cy: Math.random() * window.innerHeight,
      r: Math.random() * 1.2 + 0.2,
      delay: Math.random(),
      opacity: Math.random() * 0.5 + 0.3, // Менша прозорість для фону
    }));
  };

  const particles = generateParticles();

  return (
    <HeroWrapper>
      <SvgContainer>
        <AnimatedSvg
          viewBox="0 0 375 486"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid meet"
          style={{ overflow: 'visible' }}
        >
          <WaveWrapper>
            <g filter="url(#filter0_f_536_51994)">
              <ScaledPath
                d="M167.567 460.116C148.106 294.453 167.567 196.218 -36.2227 -42.2329H407.778C208.715 196.657 241.799 293.479 208.715 460.116H167.567Z"
                fill="url(#paint0_linear_536_51994)"
              />
            </g>
          </WaveWrapper>

          <ParticlesBackground
            viewBox={`0 0 ${window.innerWidth} ${window.innerHeight}`}
            preserveAspectRatio="none"
          >
            {particles.map(particle => (
              <FastParticle
                key={particle.id}
                cx={particle.cx}
                cy={particle.cy}
                r={particle.r}
                delay={particle.delay}
                fill="#a6a6f5ff"
              />
            ))}{' '}
          </ParticlesBackground>

          <defs>
            <filter
              id="filter0_f_536_51994"
              x="-61.229"
              y="-67.2392"
              width="494.015"
              height="552.362"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="12.5032"
                result="effect1_foregroundBlur_536_51994"
              />
            </filter>

            <linearGradient
              id="paint0_linear_536_51994"
              x1="192.311"
              y1="48.3946"
              x2="192.311"
              y2="533.69"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#5E5EF3">
                <animate
                  attributeName="stop-color"
                  values="#5E5EF3; #9E5EF3; #5E5EF3"
                  dur="10s"
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="0.80738" stopColor="#5E5EF3" stopOpacity="0">
                <animate
                  attributeName="stop-color"
                  values="#5E5EF3; #9E5EF3; #5E5EF3"
                  dur="10s"
                  repeatCount="indefinite"
                />
              </stop>
            </linearGradient>

            <filter id="glow" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="5" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>
        </AnimatedSvg>
      </SvgContainer>

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
            About us <CardButtonText src={book} alt="💰" />
          </HeroInnovative>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <HeroTitle>
            We believe in clarity, innovation, and integrity
          </HeroTitle>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <ResultMainTextDescription>
            Our mission is to empower businesses by simplifying operations and
            enhancing customer experiences through cutting-edge technology and
            solutions.
          </ResultMainTextDescription>
        </motion.div>
      </CostomerWrapp>
      <NumberWrapp>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.45 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <div>
            <Number>98%</Number>
            <NumberText>Client satisfaction in all segments</NumberText>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.35 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <div>
            <Number>3x</Number>
            <NumberText>Faster launch than traditional systems</NumberText>
          </div>{' '}
        </motion.div>{' '}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.25 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <div>
            <Number>70%</Number>
            <NumberText>Customers say we help them scale</NumberText>
          </div>{' '}
        </motion.div>
      </NumberWrapp>
    </HeroWrapper>
  );
};

export default HeroAnimation;
