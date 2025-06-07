import React, { useState, useRef } from 'react';
import { Swiper as SwiperCore } from 'swiper/types';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import point from '../../assets/icons/Traffic Lights (Big Sur).svg';
import slide1 from '../../assets/icons/Frame 3479.png';
import slide2 from '../../assets/icons/Frame 3479-1.png';
import slide3 from '../../assets/icons/Frame 3479-2.png';
import slide4 from '../../assets/icons/Frame 3479-3.png';
import logo from '../../assets/icons/logo-srm.svg';
import Tools from '../../assets/icons/Toolbar Group.svg';
import {
  ButtonContainer,
  HeroButton,
  HeroButtonGrey,
} from '../Hero/Hero.styled';
import { HeaderContainer, Divider, FeatureCard, BadgeWrapper, AbsoluteBadge, BadgeOutline, BadgeContent, IconWrapper, BadgeButton, BadgeText, Title, Subtitle, SlideContainer, SlideHeader, SlideLogo, LogoImage, ToolGroup, SlideContent, SlideImage, ContentOverlay, OverlayTitle, OverlayText } from './Swipper.styled';

// Styled Components for the Header

const FeatureSwiper = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const swiperRef = useRef<SwiperCore | null>(null);

  const features = [
    {
      id: 'Custom Identity',
      title: 'White-label Branding',
      subtitle: 'Custom app, site & receipts',
      icon: '🎆',
      smallIcon: '/Fireworks(1).png',
      image: slide1,
      active: activeSlide === 0,
    },
    {
      id: 'Role Access',
      title: 'Smart Permissions',
      subtitle: 'Access for cashiers and chefs',
      icon: '👨‍💼',
      smallIcon: '/ManOfficeWorker(1).png',
      image: slide2,
      active: activeSlide === 1,
    },
    {
      id: 'Dynamic Offers',
      title: 'AI & Automation',
      subtitle: 'Dynamic offers & upsells',
      icon: '🤖',
      smallIcon: '/Robot(1).png',
      image: slide3,
      active: activeSlide === 2,
    },
    {
      id: 'Expandability',
      title: 'Open API Integration',
      subtitle: 'Connect tools, terminals & more',
      icon: '🔌',
      smallIcon: '/ElectricPlug(1).png',
      image: slide4,
      active: activeSlide === 3,
    },
  ];

  const handleSlideChange = (swiper: SwiperCore) => {
    setActiveSlide(swiper.activeIndex);
  };
  const navigateToSlide = (index: number) => {
    setActiveSlide(index);
    if (swiperRef.current) {
      swiperRef.current.slideTo(index);
    }
  };

  return (
    <div className="flex flex-col items-center">
      {/* Header with anchor links */}
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
                    style={{
                      boxShadow: feature.active
                        ? ' inset 0 0 20px 0 rgba(191, 123, 246, 0.7), inset 0 -10px 25px 0 rgba(255, 255, 255, 0.15), inset 0 -5px 10px 0 rgba(255, 255, 255, 0.1), 0 0 10px 6px rgba(191, 123, 246, 0.4) , 0 15px 30px -10px rgba(0, 0, 0, 0.25), 0 5px 10px -5px rgba(0, 0, 0, 0.2)'
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

      {/* Swiper component */}
      <div style={{ width: '100%', maxWidth: '800px', margin: '40px auto' }}>
        <Swiper
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
                  <SlideImage $image={feature.image} />
                  <ContentOverlay>
                    <OverlayTitle>Explore our CRM system!</OverlayTitle>
                    <OverlayText>Access available for cashiers and chefs alike.</OverlayText>
                    <ButtonContainer>
                      <HeroButton>Try For Free</HeroButton>
                      <HeroButtonGrey>View demo</HeroButtonGrey>
                    </ButtonContainer>
                  </ContentOverlay>
                </SlideContent>
              </SlideContainer>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default FeatureSwiper;
