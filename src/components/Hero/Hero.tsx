import React, { lazy, Suspense } from 'react';
import {
  // AvatarContainer,
  ButtonContainer,
  Container,
  HeroButton,
  HeroButtonGrey,
  HeroContainerContent,
  HeroImage,
  HeroInnovative,
  HeroText,
  HeroTitle,
  HeroWrapper,
  // ImageAvatar,
  // ImageContainer,
  SpanUnicorn,
  // TextImageAvatar,
} from './Hero.styled';
// import Avatar from '../../assets/icons/avatar/Image-36-1.svg';
// import Avatar1 from '../../assets/icons/avatar/Image-36.svg';
// import Avatar2 from '../../assets/icons/avatar/Image-36-2.svg';
// import Avatar3 from '../../assets/icons/avatar/Image-36-3.svg';
// import Avatar4 from '../../assets/icons/avatar/Image-36-4.svg';
// import Spline from '@splinetool/react-spline';
import Swipper from './Swipper';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import HeroIcon from '../../assets/icons/HeroSplayn.png';
import useMediaQuery from '@mui/material/useMediaQuery';
const Spline = lazy(() => import('@splinetool/react-spline'));

const FallbackImage = () => (
  <HeroImage
    src={HeroIcon}
    alt="3D Scene"
  />
);

const Hero: React.FC = () => {
  const { t } = useTranslation();
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <>
      <HeroWrapper>
        <Container>
          {isMobile ? (
            <FallbackImage />
          ) : (
            <Suspense fallback={<FallbackImage />}>
              <Spline
                scene="https://prod.spline.design/xDMwKEPv7aTOBHEg/scene.splinecode"
                style={{
                  transition: 'transform 0.5s ease-out',
                  filter: 'blur(0.5px)',
                }}
              />
            </Suspense>
          )}
        </Container>
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
            {t('hero.innovative')} <SpanUnicorn> 🦄</SpanUnicorn>
          </HeroInnovative>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          {' '}
          <HeroTitle>{t('hero.title')}</HeroTitle>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          {' '}
          <HeroText>{t('hero.description')}</HeroText>
        </motion.div>
        <HeroContainerContent>
          {/* <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.7 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            {' '}
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
          </motion.div> */}
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
        </HeroContainerContent>
      </HeroWrapper>
      <Swipper />
    </>
  );
};

export default Hero;
