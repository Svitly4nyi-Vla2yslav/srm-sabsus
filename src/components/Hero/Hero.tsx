import React from 'react';
import {
  AvatarContainer,
  ButtonContainer,
  Container,
  HeroButton,
  HeroButtonGrey,
  HeroContainerContent,
  HeroInnovative,
  HeroText,
  HeroTitle,
  HeroWrapper,
  ImageAvatar,
  ImageContainer,
  SpanUnicorn,
  TextImageAvatar,
} from './Hero.styled';
import Avatar from '../../assets/icons/avatar/Image-36-1.svg';
import Avatar1 from '../../assets/icons/avatar/Image-36.svg';
import Avatar2 from '../../assets/icons/avatar/Image-36-2.svg';
import Avatar3 from '../../assets/icons/avatar/Image-36-3.svg';
import Avatar4 from '../../assets/icons/avatar/Image-36-4.svg';
import Spline from '@splinetool/react-spline';
import Swipper from './Swipper';
import { useTranslation } from 'react-i18next';

const Hero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <HeroWrapper>
        <Container>
          <Spline
            scene="https://prod.spline.design/xDMwKEPv7aTOBHEg/scene.splinecode"
            style={{
              transition: 'transform 0.5s ease-out',
              filter: 'blur(0.5px)',
            }}
          />
        </Container>
        <HeroInnovative>
          {t('hero.innovative')}  <SpanUnicorn> 🦄</SpanUnicorn>
        </HeroInnovative>
        <HeroTitle>{t('hero.title')}</HeroTitle>
        <HeroText>{t('hero.description')}</HeroText>
        <HeroContainerContent>
          <AvatarContainer>
            <ImageContainer>
              <ImageAvatar src={Avatar} alt="😎" />
              <ImageAvatar src={Avatar1} alt="😀" />
              <ImageAvatar src={Avatar2} alt="😁" />
              <ImageAvatar src={Avatar3} alt="😶‍🌫️" />
              <ImageAvatar src={Avatar4} alt="😨" />
            </ImageContainer>
            <TextImageAvatar>{t('hero.trustText')}</TextImageAvatar>
          </AvatarContainer>
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
        </HeroContainerContent>
      </HeroWrapper>
      <Swipper />
    </>
  );
};

export default Hero;