import styled from "styled-components";
import { motion } from 'framer-motion';

export const BackroundGradient = styled(motion.div)`
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100vh;
    height: 200vw;
    border-radius: 50%;
    background: radial-gradient(
      ellipse at center,
      var(--purple-500) 0%,
      rgba(76, 78, 236, 0.1) 100%,
      transparent 100%
    );
    filter: blur(180px);
    z-index: -5000;
    opacity: 0;
    will-change: opacity;
  }

  @media screen and (min-width: 768px) {
    &::after {
      height: 100vh;
    }
  }
`;

export const ContainerStart = styled(motion.div)`
  position: relative;
  margin: 0 auto;
  -webkit-overflow-scrolling: touch;
  margin-top: 100px;
  margin-bottom: 154px;
  z-index: 1;
  will-change: transform, opacity;

  @media screen and (min-width: 768px) {
    /* Додаткові стилі для планшетів */
  }
`;

export const StartTitle = styled(motion.h2)`
  width: 343px;
  height: auto;
  margin: 0 auto;
  font-family: var(--font-family);
  font-weight: 600;
  font-size: 36px;
  line-height: 110%;
  text-align: center;
  background: linear-gradient(142deg, #fff 0%, #f7f8fd 28.77%, #b6b8ee 40.91%, #6a82fc 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 24px;
  will-change: transform, opacity;

  @media screen and (min-width: 768px) {
    font-size: 48px;
  }
`;

export const StartText = styled(motion.p)`
  width: 343px;
  height: 80px;
  margin: 0 auto;
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 16px;
  text-align: center;
  color: var(--white-75);
  margin-bottom: 24px;
  will-change: transform, opacity;
`;