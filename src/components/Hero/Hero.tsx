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

const Hero: React.FC = () => {
  return (
    <>
      <Container>
        <Spline
          scene="https://prod.spline.design/xDMwKEPv7aTOBHEg/scene.splinecode"
          style={{
            transition: 'transform 0.5s ease-out',
            filter: 'blur(0.5px)',
          }}
        />
      </Container>
      <HeroWrapper>
        <HeroInnovative>
          Innovative Solutions <SpanUnicorn>🦄</SpanUnicorn>
        </HeroInnovative>
        <HeroTitle>You’re building your own system</HeroTitle>
        <HeroText>
          A complete ecosystem of CRM, POS, mobile apps (iOS & Android) and web
          to manage cafés, restaurants, and retail stores — anytime, anywhere.
        </HeroText>
        <HeroContainerContent>
          <AvatarContainer>
            <ImageContainer>
              <ImageAvatar src={Avatar} alt="😎" />
              <ImageAvatar src={Avatar1} alt="😀" />
              <ImageAvatar src={Avatar2} alt="😁" />
              <ImageAvatar src={Avatar3} alt="😶‍🌫️" />
              <ImageAvatar src={Avatar4} alt="😨" />
            </ImageContainer>
            <TextImageAvatar>
              Over 1200 businesses already trust us
            </TextImageAvatar>
          </AvatarContainer>
          <ButtonContainer>
            <HeroButton>Try For Free</HeroButton>
            <HeroButtonGrey>View demo</HeroButtonGrey>
          </ButtonContainer>
        </HeroContainerContent>
        <Swipper />
      </HeroWrapper>
    </>
  );
};

export default Hero;
