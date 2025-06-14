import React from 'react';
import {
  BackroundGradient,
  ContainerStart,
  StartText,
  StartTitle,
} from './StartSmall.styled';
import {
  ButtonContainer,
  HeroButton,
  HeroButtonGrey,
} from '../Hero/Hero.styled';

const StartSmall: React.FC = () => {
  return (
    <ContainerStart>
      <StartTitle>Start small, grow without limits</StartTitle>
      <StartText>
        Launch your CRM and App platform in minutes — no code, no stress. We
        scale with you.
      </StartText>
      <ButtonContainer>
        <a href="https://sabsus.app/" target="_blank" rel="noopener noreferrer">
          <HeroButton>Get started</HeroButton>
        </a>
        <a href="https://sabsus.app/" target="_blank" rel="noopener noreferrer">
          {' '}
          <HeroButtonGrey>View demo</HeroButtonGrey>
        </a>
      </ButtonContainer>
      <BackroundGradient />
    </ContainerStart>
  );
};

export default StartSmall;
