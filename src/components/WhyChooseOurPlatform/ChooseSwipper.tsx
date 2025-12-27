import React, { useEffect, useRef, useState } from 'react';
import { Swiper as SwiperCore } from 'swiper/types';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';

import point from '../../assets/icons/Traffic Lights (Big Sur).svg';
import slide1 from '../../assets/icons/Sales Dashboard.png';
import slide2 from '../../assets/icons/RestaurantDashboard.png';
import slide3 from '../../assets/icons/ProductDashboard.png';
import slide4 from '../../assets/icons/Frame 3479-3.png';
import logo from '../../assets/icons/logo-srm.svg';
import Tools from '../../assets/icons/Toolbar Group.svg';

import {
  ButtonContainer,
  HeroButton,
  HeroButtonGrey,
} from '../Hero/Hero.styled';

import {
  HeaderContainer,
  Divider,
  FeatureCard,
  BadgeWrapper,
  AbsoluteBadge,
  BadgeOutline,
  BadgeContent,
  IconWrapper,
  BadgeButton,
  BadgeText,
  Title,
  Subtitle,
  SlideContainer,
  SlideHeader,
  SlideLogo,
  LogoImage,
  ToolGroup,
  SlideContent,
  SlideImage,
  ContentOverlay,
  OverlayTitle,
  OverlayText,
  Overlay,
} from './Swipper.styled';

import { useTranslation } from 'react-i18next';
import { styled } from 'styled-components';

/* ---------------------- Lightbox styles ---------------------- */

const LightboxOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
  z-index: 9999999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

const LightboxContent = styled.div`
  position: relative;
  max-width: min(1100px, 95vw);
  max-height: 90vh;
  width: 100%;
`;

const LightboxImg = styled.img`
  width: 100%;
  height: auto;
  max-height: 90vh;
  object-fit: contain;
  display: block;
  border-radius: 14px;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1%;
  right: -8%;
  width: 40px;
  height: 40px;
  border-radius: 999px;
  border: none;
  background: rgba(0, 0, 0, 0.55);
  color: #fff;
  cursor: pointer;
  display: grid;
  place-items: center;
  font-size: 22px;
  line-height: 1;
  border: 2px solid rgba(245, 245, 245, 0.592);

  &:hover {
    background: rgba(0, 0, 0, 0.75);
  }
`;

/* ------------------------------------------------------------ */

const FeatureSwiper = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const swiperRef = useRef<SwiperCore | null>(null);

  // lightbox state
  const [openedImage, setOpenedImage] = useState<string | null>(null);

  const { t } = useTranslation();

  const featuresData = t('featureSwiper.features', {
    returnObjects: true,
  }) as Array<{
    id: string;
    title: string;
    subtitle: string;
    overlay: {
      title: string;
      text: string;
    };
  }>;

  const features = featuresData.map((feature, index) => ({
    ...feature,
    icon: ['🎆', '👨‍💼', '🤖', '🔌'][index],
    smallIcon: [
      '/Fireworks(1).png',
      '/ManOfficeWorker(1).png',
      '/Robot(1).png',
      '/ElectricPlug(1).png',
    ][index],
    image: [slide1, slide2, slide3, slide4][index],
    active: activeSlide === index,
  }));

  const handleSlideChange = (swiper: SwiperCore) => {
    setActiveSlide(swiper.activeIndex);
  };

  const navigateToSlide = (index: number) => {
    setActiveSlide(index);
    if (swiperRef.current) {
      swiperRef.current.slideTo(index);
    }
  };

  const closeLightbox = () => setOpenedImage(null);

  // close on ESC + block body scroll while lightbox is open
  useEffect(() => {
    if (!openedImage) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
    };

    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [openedImage]);

  return (
    <div className="flex flex-col items-center">
      <HeaderContainer>
        {features.map((feature, index) => (
          <React.Fragment key={feature.id}>
            {index !== 0 && <Divider />}
            <FeatureCard onClick={() => navigateToSlide(index)}>
              <BadgeWrapper>
                <AbsoluteBadge>
                  <BadgeOutline opacity="0.06" />
                  <BadgeOutline />
                </AbsoluteBadge>
                <BadgeContent>
                  <IconWrapper>
                    <p>{feature.icon}</p>
                  </IconWrapper>

                  <BadgeButton
                    className={feature.active ? 'active' : ''}
                    aria-selected={feature.active}
                    style={{
                      boxShadow: feature.active
                        ? 'inset 0 0 20px 0 rgba(41, 111, 241, 0.88), inset 0 -10px 25px 0 rgba(255, 255, 255, 0.15), inset 0 -5px 10px 0 rgba(255, 255, 255, 0.1), 0 0 10px 6px rgba(38, 96, 166, 0.49), 0 15px 30px -10px rgba(0, 0, 0, 0.25), 0 5px 10px -5px rgba(0, 0, 0, 0.2)'
                        : 'none',
                    }}
                  >
                    <BadgeText>{feature.id}</BadgeText>
                  </BadgeButton>
                </BadgeContent>

                <AbsoluteBadge>
                  <BadgeOutline opacity="0.66" />
                  <BadgeOutline />
                </AbsoluteBadge>
              </BadgeWrapper>

              <div>
                <Title>{feature.title}</Title>
                <Subtitle>{feature.subtitle}</Subtitle>
              </div>
            </FeatureCard>
          </React.Fragment>
        ))}
      </HeaderContainer>

      <div style={{ width: '100%', margin: '40px auto' }}>
        <Swiper
          id="benefits"
          onSwiper={swiper => {
            swiperRef.current = swiper;
          }}
          spaceBetween={0}
          slidesPerView={1}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={false}
          modules={[Autoplay, Navigation]}
          onSlideChange={handleSlideChange}
          initialSlide={activeSlide}
        >
          {features.map((feature, index) => (
            <SwiperSlide key={index}>
              <SlideContainer>
                <SlideHeader>
                  <SlideLogo src={point} alt="Logo" />
                  <LogoImage src={logo} alt="Logo" />
                  <ToolGroup src={Tools} alt="Tools" />
                </SlideHeader>

                <SlideContent>
                  {/* Click to open fullscreen */}
                  <div
                    onClick={() => setOpenedImage(feature.image)}
                    style={{ cursor: 'zoom-in' }}
                    role="button"
                    aria-label="Open image fullscreen"
                  >
                    <SlideImage $image={feature.image} />
                  </div>

                  {/* Overlay section (commented in your code) */}
                  <ContentOverlay>
                    <Overlay>
                      <OverlayTitle>{feature.overlay.title}</OverlayTitle>
                      <OverlayText>{feature.overlay.text}</OverlayText>
                      <ButtonContainer>
                        <a
                          href="https://sabsus.app/registrcompany/web/PRO"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <HeroButton>
                            {t('featureSwiper.buttons.tryFree')}
                          </HeroButton>
                        </a>{' '}
                        <a
                          href="https://sabsus.app/login/demo@sabsus.com/demo2025"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <HeroButtonGrey>
                            {t('featureSwiper.buttons.viewDemo')}
                          </HeroButtonGrey>
                        </a>
                      </ButtonContainer>
                    </Overlay>
                  </ContentOverlay>
                </SlideContent>
              </SlideContainer>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Lightbox */}
      {openedImage && (
        <LightboxOverlay
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
        >
          <LightboxContent onClick={e => e.stopPropagation()}>
            <CloseButton onClick={closeLightbox} aria-label="Close image">
              ×
            </CloseButton>
            <LightboxImg src={openedImage} alt="Preview" />
          </LightboxContent>
        </LightboxOverlay>
      )}
    </div>
  );
};

export default FeatureSwiper;
