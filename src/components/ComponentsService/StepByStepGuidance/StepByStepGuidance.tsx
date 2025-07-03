import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';
import Cassette from '../../../assets/icons/Costomer/Videocassette.svg';

export const StepWrapp = styled.div`
  margin: 0 auto;
  margin-top: 100px;
  width: 100%;
  height: 100%;
  margin-bottom: 100px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StepMainText = styled(motion.p)`
  margin: 0 auto;
  border-radius: 24px;
  padding: 4px 4px 4px 14px;
  width: max-content;
  height: 28px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
  margin-top: 50px;
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 12px;
  color: var(--white-100);
  backdrop-filter: blur(16px);
  box-shadow:
    inset 0 -8px 24px 0 rgba(255, 255, 255, 0.03),
    inset 0 -5px 6px 0 rgba(255, 255, 255, 0.03),
    0 8px 16px -8px rgba(0, 0, 0, 0.03),
    0 2px 4px -2px rgba(0, 0, 0, 0.08);
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.12) 7%,
    rgba(255, 255, 255, 0) 86%
  );
  align-items: center;
  will-change: transform, opacity; /* Оптимізація анімації */

  @media screen and (min-width: 768px) {
    /* Додаткові стилі для планшетів */
  }

  @media screen and (min-width: 1440px) {
    /* Додаткові стилі для десктопів */
  }
`;

export const StepMainTitle = styled(motion.h2)`
  font-family: var(--font-family);
  font-weight: 600;
  font-size: 36px;
  line-height: 110%;
  text-align: center;
  color: var(--white-100);
  margin-bottom: 16px;
  will-change: transform, opacity;

  @media screen and (min-width: 768px) {
    font-size: 44px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 800px;
    width: 100%;
    margin: 0 auto 26px;
  }
`;

export const StepMainTextDescription = styled(motion.p)`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 16px;
  text-align: center;
  color: var(--white-80);
  margin-bottom: 56px;
  will-change: transform, opacity;

  @media screen and (min-width: 768px) {
    font-size: 17px;
    line-height: 130%;
  }

  @media screen and (min-width: 1440px) {
    max-width: 800px;
    width: 100%;
    margin: 0 auto 26px;
  }
`;

export const StepSpanIcon = styled.img`
  border-radius: 25px;
  padding: 4px;
  overflow: visible;
  font-size: 13px;
  width: 20px;
  margin-left: 6px;

  box-shadow:
    inset 0 -8px 24px 0 rgba(255, 255, 255, 0.18),
    inset 0 -5px 6px 0 rgba(255, 255, 255, 0.03),
    0 4px 8px rgba(0, 0, 0, 0.08),
    0 1px 2px rgba(0, 0, 0, 0.06);

  background: linear-gradient(
      315deg,
      rgba(122, 121, 122, 0) 7%,
      rgba(172, 172, 172, 0) 86%
    )
    rgba(255, 255, 255, 0.03);

  -webkit-transform: translateZ(0);
`;

const StepByStepGuidance: React.FC = () => {
  return (
    <StepWrapp>
      <StepMainText>
        Step-by-step guidance <StepSpanIcon src={Cassette} alt="⏺️" />
      </StepMainText>
      <StepMainTitle>Master your CRM in minutes</StepMainTitle>
      <StepMainTextDescription>
        Watch a walkthrough of our CRM system — from setting up profiles to
        managing your pipeline. This guide shows how to maximize every feature.
      </StepMainTextDescription>
      
    </StepWrapp>
  );
};

export default StepByStepGuidance;
