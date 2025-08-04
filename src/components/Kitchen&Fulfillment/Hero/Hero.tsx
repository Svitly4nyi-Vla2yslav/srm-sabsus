import React, { useMemo } from 'react';
import { styled, keyframes } from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import cooking from '../../../assets/icons/Kitchen/Cooking.svg';
import big from '../../../assets/icons/Kitchen/big.png';
import big1 from '../../../assets/icons/Kitchen/big1.png';
import big2 from '../../../assets/icons/Kitchen/big2.png';
import big3 from '../../../assets/icons/Kitchen/big3.png';
import big4 from '../../../assets/icons/Kitchen/big4.png';
import smoll from '../../../assets/icons/Kitchen/smoll.png';
import smoll1 from '../../../assets/icons/Kitchen/smoll1.png';
import smoll2 from '../../../assets/icons/Kitchen/smoll2.png';
import smoll3 from '../../../assets/icons/Kitchen/smoll3.png';
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

const getRandomAmplitude = () => Math.floor(Math.random() * 40 + 20);
const getRandomDuration = () => Math.random() * 3 + 3;

const createFloat = (amplitude: number) => keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-${amplitude}px); }
  100% { transform: translateY(0); }
`;

const HeroWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  overflow: visible;
  margin-top: 78px;
`;

const SwiperLayer = styled(Swiper)<{ $position: 'top' | 'middle' | 'bottom' }>`
  overflow: visible !important;
  position: absolute;
  width: 100%;
  top: ${({ $position }) =>
    $position === 'top' ? '10%' : $position === 'bottom' ? '80%' : '50%'};
  transform: ${({ $position }) =>
    $position === 'middle' ? 'translateY(-50%)' : 'none'};
  z-index: ${({ $position }) => ($position === 'middle' ? 2 : 1)};
`;

const ImageWrapper = styled.div<{ $small?: boolean }>`
  width: ${({ $small }) => ($small ? '50px' : '255px')};
  height: ${({ $small }) => ($small ? '50px' : '171px')};
  margin: 0 15px;
`;

const FloatingImage = styled.img<{
  $small?: boolean;
  $amplitude: number;
  $duration: number;
}>`
  width: 100%;
  height: 100%;
  overflow: visible;
  object-fit: cover;
  border-radius: ${({ $small }) => ($small ? '50%' : '16px')};
  animation: ${({ $amplitude }) => createFloat($amplitude)}
    ${({ $duration }) => $duration}s ease-in-out infinite;
`;

export const CostomerWrapp = styled.div`
  position: absolute;
  top: 120%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 1200px;
  padding: 0 20px;
  text-align: center;
  z-index: 3;
`;

const Hero: React.FC = () => {
  const { t } = useTranslation();
  const isMobile = useMediaQuery({ query: '(max-width: 743px)' });
  const isTablet = useMediaQuery({
    query: '(min-width: 744px) and (max-width: 1439px)',
  });
  const isDesktop = useMediaQuery({ query: '(min-width: 1440px)' });

  const slidesPerView = isMobile ? 1 : isTablet ? 2 : isDesktop ? 4 : 4;

  const imageSwipper = [
    { id: 1, src: big, alt: 'Image 1' },
    { id: 2, src: big1, alt: 'Image 2' },
    { id: 3, src: big2, alt: 'Image 3' },
    { id: 4, src: big3, alt: 'Image 4' },
    { id: 5, src: big4, alt: 'Image 5' },
    { id: 12, src: big2, alt: 'Image 1' },
  ];

  const small = [
    { id: 6, src: smoll, alt: 'Image 6' },
    { id: 7, src: smoll1, alt: 'Image 7' },
    { id: 8, src: smoll2, alt: 'Image 8' },
    { id: 9, src: smoll3, alt: 'Image 9' },
    { id: 10, src: smoll1, alt: 'Image 10' },
    { id: 11, src: smoll2, alt: 'Image 6' },
  ];

  const randomizedSmallTop = useMemo(
    () =>
      small.map(img => ({
        ...img,
        amplitude: getRandomAmplitude(),
        duration: getRandomDuration(),
      })),
    []
  );

  const randomizedSmallBottom = useMemo(
    () =>
      small.map(img => ({
        ...img,
        amplitude: getRandomAmplitude(),
        duration: getRandomDuration(),
      })),
    []
  );

  return (
    <HeroWrapper>
      <SwiperLayer 
        $position="top"
        slidesPerView={slidesPerView}
        loop
        autoplay={{ delay: 110, disableOnInteraction: false }}
        speed={5000}
        modules={[Autoplay]}
      >
        {randomizedSmallTop.map(i => (
          <SwiperSlide key={i.id} style={{ width: 'auto' }}>
            <ImageWrapper   $small>
              <FloatingImage 
                src={i.src}
                alt={i.alt}
                $small
                $amplitude={i.amplitude}
                $duration={i.duration}
              />
            </ImageWrapper>
          </SwiperSlide>
        ))}
      </SwiperLayer>

      <SwiperLayer
        $position="middle"
        slidesPerView={slidesPerView}
        loop
        autoplay={{ delay: 220, disableOnInteraction: false }}
        speed={3000}
        modules={[Autoplay]}
      >
        {imageSwipper.map(i => (
          <SwiperSlide key={i.id} style={{ width: 'auto' }}>
            <ImageWrapper>
              <FloatingImage
                src={i.src}
                alt={i.alt}
                $amplitude={getRandomAmplitude()}
                $duration={getRandomDuration()}
              />
            </ImageWrapper>
          </SwiperSlide>
        ))}
      </SwiperLayer>

      <SwiperLayer
        $position="bottom"
        slidesPerView={slidesPerView}
        loop
        autoplay={{ delay: 330, disableOnInteraction: false }}
        speed={6000}
        modules={[Autoplay]}
      >
        {randomizedSmallBottom.map(i => (
          <SwiperSlide key={i.id} style={{ width: 'auto' }}>
            <ImageWrapper $small>
              <FloatingImage
                src={i.src}
                alt={i.alt}
                $small
                $amplitude={i.amplitude}
                $duration={i.duration}
              />
            </ImageWrapper>
          </SwiperSlide>
        ))}
      </SwiperLayer>
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
            {t('kitchenHero1.title')} <CardButtonText src={cooking} alt="💰" />
          </HeroInnovative>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <HeroTitle>{t('kitchenHero1.heading')}</HeroTitle>
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
              <HeroButton>{t('kitchenHero1.buttons.tryFree')}</HeroButton>
            </a>
            <a
              href="https://sabsus.app/login/demo@sabsus.com/demo2025"
              target="_blank"
              rel="noopener noreferrer"
            >
              <HeroButtonGrey>{t('kitchenHero1.buttons.viewDemo')}</HeroButtonGrey>
            </a>
          </ButtonContainer>
        </motion.div>
      </CostomerWrapp>
    </HeroWrapper>
  );
};

export default Hero;