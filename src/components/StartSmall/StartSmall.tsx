import React from 'react';
import { useTranslation } from 'react-i18next';
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
  const { t } = useTranslation();
  const buttonLink = "https://sabsus.app/";

  return (
    <ContainerStart>
      <StartTitle>{t('startSmall.title')}</StartTitle>
      <StartText>{t('startSmall.text')}</StartText>
      <ButtonContainer>
        <a href={buttonLink} target="_blank" rel="noopener noreferrer">
          <HeroButton>{t('startSmall.buttons.getStarted')}</HeroButton>
        </a>
        <a href={buttonLink} target="_blank" rel="noopener noreferrer">
          <HeroButtonGrey>{t('startSmall.buttons.viewDemo')}</HeroButtonGrey>
        </a>
      </ButtonContainer>
      <BackroundGradient />
    </ContainerStart>
  );
};

export default StartSmall;