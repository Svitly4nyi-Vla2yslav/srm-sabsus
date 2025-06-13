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
        <HeroButton>Get started</HeroButton>
        <HeroButtonGrey>View demo</HeroButtonGrey>
      </ButtonContainer>
      <BackroundGradient />
    </ContainerStart>
  );
};

export default StartSmall;
