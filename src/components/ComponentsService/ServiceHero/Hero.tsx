import React from 'react';
import {
  ButtonContainer,
  Container,
  HeroButton,
  HeroButtonGrey,
  HeroInnovative,
  HeroTitle,
  HeroWrapper,
} from '../../Hero/Hero.styled';

import phone from '../../../assets/icons/cards/Mobile Phone.svg';
import styled, { keyframes } from 'styled-components';
import costomer from '../../../assets/icons/costomer.png';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { CardButtonText } from '../../PricePlan/PricePlan.styled';
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
`;

const Hero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <HeroWrapper style={{ marginTop: 450, marginBottom: 250 }}>
      <Container style={{ display: 'flex', justifyContent: 'center' }}>
        <PerspectiveWrapper>
          <Image3DBox>
            <Front src={costomer} />
            <Back src={costomer} />
          </Image3DBox>
        </PerspectiveWrapper>
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
