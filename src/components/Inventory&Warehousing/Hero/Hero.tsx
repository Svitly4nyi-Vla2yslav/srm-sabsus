import React from 'react';
import { styled, keyframes } from 'styled-components';
import Logo from '../../../assets/icons/Inventory/logoIcon.png';
import Brocoly from '../../../assets/icons/Inventory/brocoly.png';
import Tomato from '../../../assets/icons/Inventory/tomato.png';
import Mais from '../../../assets/icons/Inventory/mais.png';
import Box from '../../../assets/icons/Inventory/box.png';
import Orang from '../../../assets/icons/Inventory/orang.png';
import HotDog from '../../../assets/icons/Inventory/hotdog.png';
import Salt from '../../../assets/icons/Inventory/salz.png';
import Package from '../../../assets/icons/Inventory/Package.svg';
import { useMediaQuery } from 'react-responsive';
import { motion } from 'framer-motion';
import {
  ButtonContainer,
  HeroButton,
  HeroButtonGrey,
  HeroInnovative,
  HeroTitle,
} from '../../Hero/Hero.styled';
import { CardButtonText } from '../../AllinOneSRM/AllinOneSRM.styled';
import { useTranslation } from 'react-i18next';

// Animations
const pulse = keyframes`
  0% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.1); opacity: 0.8; }
  100% { transform: scale(1); opacity: 1; }
`;

const glow = keyframes`
  0% { filter: drop-shadow(0 0 5px rgba(73, 75, 236, 0.7)); }
  50% { filter: drop-shadow(0 0 15px rgba(73, 75, 236, 1)); }
  100% { filter: drop-shadow(0 0 5px rgba(73, 75, 236, 0.7)); }
`;

const borderGlow = keyframes`
  0% { border-color: rgba(51, 51, 51, 0.55); color: rgba(51, 51, 51, 0.55);}
  50% { border-color: rgba(73, 75, 236, 0.8); color: rgba(73, 75, 236, 0.8);}
  100% { border-color: rgba(51, 51, 51, 0.55); color: rgba(51, 51, 51, 0.55);}
`;

const float = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0); }
`;

const energyFlow = keyframes`
  0% {
    stroke-dashoffset: 2000;
    stroke-opacity: 0;
  }
  20% {
    stroke-opacity: 1;
  }
  80% {
    stroke-opacity: 1;
  }
  100% {
    stroke-dashoffset: 0;
    stroke-opacity: 0;
  }
`;

const energyPulse = keyframes`
  0% {
    r: 0;
    opacity: 0;
  }
  10% {
    r: 3;
    opacity: 1;
  }
  100% {
    r: 0;
    opacity: 0;
  }
`;

export const HeroWrapper = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  overflow: visible;
  margin-top: 100px;
`;

export const CostomerWrapp = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  align-content: space-around;
  gap: 135px;
  margin: 0 auto;
`;

const lineGlow = keyframes`
  0% { background-color: rgba(51, 51, 51, 0.55);  }
  50% { background-color: rgba(73, 75, 236, 0.8); }
  100% { background-color: rgba(51, 51, 51, 0.55); }
`;

export const TextIcon = styled.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 12px;
  text-align: center;
  color: rgba(51, 51, 51, 0.55);
  padding-bottom: 20px;
  margin-bottom: 20px;
  width: 80px;
  border-bottom: 1px solid rgba(51, 51, 51, 0.55);
  position: relative;
  animation: ${borderGlow} 3s infinite ease-in-out;

  &:hover {
    animation:
      ${borderGlow} 1s infinite ease-in-out,
      ${float} 2s infinite ease-in-out;

    &::after {
      animation: ${lineGlow} 1s infinite ease-in-out;
    }
  }

  @media screen and (min-width: 768px) {
    width: 284px;
    text-align: center;
    padding-bottom: 30px;
    margin-bottom: 30px;

    &::after {
      content: '';
      position: absolute;
      left: 50%;
      top: 80%;
      height: 20px;
      width: 1px;
      background: rgba(51, 51, 51, 0.55);
      transform: translateX(-50%) translateY(-50%);
      animation: ${lineGlow} 3s infinite ease-in-out;
    }
  }
`;

export const IconsFoodsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: nowrap;
  max-width: 350px;
  width: 100%;

  @media screen and (min-width: 768px) {
    max-width: 742px;
  }
`;

export const IconFoods = styled.img`
  width: 80px;
  height: 80px;
  animation: ${pulse} 3s infinite ease-in-out;

  &:nth-child(1) {
    animation-delay: 0.3s;
  }
  &:nth-child(2) {
    animation-delay: 0.6s;
  }
  &:nth-child(3) {
    animation-delay: 0.9s;
  }

  @media screen and (min-width: 768px) {
    margin-top: -8%;
  }
`;

export const LogoContainer = styled.div`
  border-radius: 12px;
  padding: 13px 9px;
  width: 66px;
  height: 66px;
  margin-bottom: 100px;
  box-shadow: inset 0 0 3px 0 rgba(255, 255, 255, 0.54);
  background: linear-gradient(139deg, #494bec 0%, #292b86 100%);
  animation: ${glow} 2s infinite ease-in-out;
`;

const smoothRotate = keyframes`
  0% {
    transform: rotate(0deg) scale(1);
    animation-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
  }
  100% {
    transform: rotate(360deg) scale(1);
  }
`;

export const LogoIcon = styled.img`
  width: 48px;
  height: 40px;
  animation: ${smoothRotate} 4s infinite;
  transform-origin: center center;
  will-change: transform;
  backface-visibility: hidden;
`;

export const BorderIcon = styled.div`
  border: 1px solid rgba(51, 51, 51, 0.55);
  border-radius: 16px;
  width: 80px;
  height: 80px;
  padding-top: 2%;
  animation: ${borderGlow} 4s infinite ease-in-out;

  &:hover {
    animation: ${borderGlow} 1s infinite ease-in-out;
  }
`;

export const LinieContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  position: relative;
`;

export const PathBase = styled.path`
  stroke: #333333;
  stroke-opacity: 0.2;
  stroke-width: 1;
  fill: none;
`;

export const EnergyPath = styled.path`
  stroke: #494bec;
  stroke-width: 2;
  stroke-dasharray: 2000;
  stroke-dashoffset: 2000;
  fill: none;
  animation: ${energyFlow} 4s infinite ease-in-out;
`;

export const EnergyPulse = styled.circle`
  fill: #494bec;
  animation: ${energyPulse} 4s infinite ease-in-out;
`;

const Hero: React.FC = () => {
  const { t } = useTranslation();
  const isMobile = useMediaQuery({ query: '(max-width: 743px)' });
  const isTablet = useMediaQuery({ query: '(min-width: 744px)' });

  return (
    <HeroWrapper>
      {isMobile && (
        <CostomerWrapp>
          <TextContainer>
            <TextIcon>{t('inventoryHero.features.inventorySync')}</TextIcon>
            <TextIcon>{t('inventoryHero.features.smartFlow')}</TextIcon>
          </TextContainer>

          <IconsFoodsContainer>
            <BorderIcon>
              <IconFoods src={Tomato} alt="Tomato" />
            </BorderIcon>
            <BorderIcon>
              <IconFoods src={Brocoly} alt="Broccoli" />
            </BorderIcon>
            <BorderIcon>
              <IconFoods src={Salt} alt="Salt" />
            </BorderIcon>
          </IconsFoodsContainer>

          <LinieContainer>
            <svg
              width="206"
              height="122"
              viewBox="0 0 206 122"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <PathBase d="M102.5 122V0M205 2.52766e-08V29C205 46.6731 190.673 61 173 61H135C117.327 61 103 75.3269 103 93M103 93V122M103 93C103 75.3269 88.6731 61 71 61H33C15.3269 61 1 46.6731 1 29V2.52766e-08" />
              <EnergyPath d="M102.5 122V0M205 2.52766e-08V29C205 46.6731 190.673 61 173 61H135C117.327 61 103 75.3269 103 93M103 93V122M103 93C103 75.3269 88.6731 61 71 61H33C15.3269 61 1 46.6731 1 29V2.52766e-08" />
              <EnergyPulse
                cx="102.5"
                cy="122"
                r="0"
                style={{ animationDelay: '0.1s' }}
              />
              <EnergyPulse
                cx="102.5"
                cy="100"
                r="0"
                style={{ animationDelay: '0.3s' }}
              />
              <EnergyPulse
                cx="102.5"
                cy="80"
                r="0"
                style={{ animationDelay: '0.5s' }}
              />
              <EnergyPulse
                cx="102.5"
                cy="60"
                r="0"
                style={{ animationDelay: '0.7s' }}
              />
              <EnergyPulse
                cx="102.5"
                cy="40"
                r="0"
                style={{ animationDelay: '0.9s' }}
              />
              <EnergyPulse
                cx="102.5"
                cy="20"
                r="0"
                style={{ animationDelay: '1.1s' }}
              />
            </svg>
          </LinieContainer>

          <LogoContainer>
            <LogoIcon src={Logo} alt="Logo" />
          </LogoContainer>
        </CostomerWrapp>
      )}
      {isTablet && (
        <CostomerWrapp>
          <TextContainer>
            <TextIcon>{t('inventoryHero.features.inventorySync')}</TextIcon>
            <TextIcon>{t('inventoryHero.features.smartFlow')}</TextIcon>
          </TextContainer>

          <IconsFoodsContainer>
            <BorderIcon>
              <IconFoods src={Mais} alt="Corn" />
            </BorderIcon>
            <BorderIcon>
              <IconFoods src={Box} alt="Box" />
            </BorderIcon>
            <BorderIcon>
              <IconFoods src={Tomato} alt="Tomato" />
            </BorderIcon>
            <BorderIcon>
              <IconFoods src={Brocoly} alt="Broccoli" />
            </BorderIcon>
            <BorderIcon>
              <IconFoods src={Salt} alt="Salt" />
            </BorderIcon>
            <BorderIcon>
              <IconFoods src={Orang} alt="Orange" />
            </BorderIcon>
            <BorderIcon>
              <IconFoods src={HotDog} alt="Hot Dog" />
            </BorderIcon>
          </IconsFoodsContainer>

          <LinieContainer>
            <svg
              width="614"
              height="122"
              viewBox="0 0 614 122"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <PathBase d="M306.5 122V0M409 2.52766e-08V29C409 46.6731 394.673 61 377 61H339M339 61C321.327 61 307 75.3269 307 93M339 61H479C496.673 61 511 46.6731 511 29V2.52766e-08M339 61H581C598.673 61 613 46.6731 613 29V2.52766e-08M307 93V122M307 93C307 75.3269 292.673 61 275 61M205 2.52766e-08V29C205 46.6731 219.327 61 237 61H275M275 61H135C117.327 61 103 46.6731 103 29V2.52766e-08M275 61H33C15.3269 61 1 46.6731 1 29V2.52766e-08" />
              <EnergyPath d="M306.5 122V0M409 2.52766e-08V29C409 46.6731 394.673 61 377 61H339M339 61C321.327 61 307 75.3269 307 93M339 61H479C496.673 61 511 46.6731 511 29V2.52766e-08M339 61H581C598.673 61 613 46.6731 613 29V2.52766e-08M307 93V122M307 93C307 75.3269 292.673 61 275 61M205 2.52766e-08V29C205 46.6731 219.327 61 237 61H275M275 61H135C117.327 61 103 46.6731 103 29V2.52766e-08M275 61H33C15.3269 61 1 46.6731 1 29V2.52766e-08" />
              <EnergyPulse
                cx="306.5"
                cy="122"
                r="0"
                style={{ animationDelay: '0.1s' }}
              />
              <EnergyPulse
                cx="306.5"
                cy="100"
                r="0"
                style={{ animationDelay: '0.3s' }}
              />
              <EnergyPulse
                cx="306.5"
                cy="80"
                r="0"
                style={{ animationDelay: '0.5s' }}
              />
              <EnergyPulse
                cx="306.5"
                cy="60"
                r="0"
                style={{ animationDelay: '0.7s' }}
              />
              <EnergyPulse
                cx="306.5"
                cy="40"
                r="0"
                style={{ animationDelay: '0.9s' }}
              />
              <EnergyPulse
                cx="306.5"
                cy="20"
                r="0"
                style={{ animationDelay: '1.1s' }}
              />
              <EnergyPulse
                cx="409"
                cy="20"
                r="0"
                style={{ animationDelay: '1.3s' }}
              />
              <EnergyPulse
                cx="377"
                cy="40"
                r="0"
                style={{ animationDelay: '1.5s' }}
              />
              <EnergyPulse
                cx="339"
                cy="60"
                r="0"
                style={{ animationDelay: '1.7s' }}
              />
              <EnergyPulse
                cx="307"
                cy="80"
                r="0"
                style={{ animationDelay: '1.9s' }}
              />
              <EnergyPulse
                cx="275"
                cy="60"
                r="0"
                style={{ animationDelay: '2.1s' }}
              />
              <EnergyPulse
                cx="237"
                cy="40"
                r="0"
                style={{ animationDelay: '2.3s' }}
              />
              <EnergyPulse
                cx="205"
                cy="20"
                r="0"
                style={{ animationDelay: '2.5s' }}
              />
            </svg>
          </LinieContainer>

          <LogoContainer>
            <LogoIcon src={Logo} alt="Logo" />
          </LogoContainer>
        </CostomerWrapp>
      )}
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
            {t('inventoryHero.title')}{' '}
            <CardButtonText src={Package} alt="Package icon" />
          </HeroInnovative>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <HeroTitle>{t('inventoryHero.heading')}</HeroTitle>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.9 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <ButtonContainer>
            <a
              href="https://sabsus.app/registrcompany/web/PRO"
              target="_blank"
              rel="noopener noreferrer"
            >
              <HeroButton>{t('inventoryHero.buttons.tryFree')}</HeroButton>
            </a>
            <a
              href="https://sabsus.app/login/demo@sabsus.com/demo2025"
              target="_blank"
              rel="noopener noreferrer"
            >
              <HeroButtonGrey>
                {t('inventoryHero.buttons.viewDemo')}
              </HeroButtonGrey>
            </a>
          </ButtonContainer>
        </motion.div>
      </CostomerWrapp>
    </HeroWrapper>
  );
};

export default Hero;
