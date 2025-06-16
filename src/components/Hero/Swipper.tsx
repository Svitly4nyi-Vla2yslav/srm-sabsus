import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';
import 'swiper/css/bundle';
import { useMediaQuery } from 'react-responsive';
import { useTranslation } from 'react-i18next';
import {
  ArrowIcon,
  CardContainer,
  ContentWrapper,
  DescriptionText,
  GradientLine,
  PercentageText,
  SmallLine,
  SwiperContainer,
} from './Swipper.styled';
import Arrow from '../../assets/icons/arrow-narrow-up-right.svg';

const Swipper: React.FC = () => {
  const { t } = useTranslation();
  const isMobile = useMediaQuery({ query: '(max-width: 743px)' });
  const isTablet = useMediaQuery({
    query: '(min-width: 744px) and (max-width: 1023px)',
  });
  const isDesktop = useMediaQuery({ query: '(min-width: 1024px)' });

  const stats = t('swipper.stats', { returnObjects: true }) as Array<{
    value: string;
    description: string;
  }>;

  // Дублюємо дані для безперервного циклу
  const partners = [...stats, ...stats.slice(0, 3)];

  useEffect(() => {
    // getPartners().then(setPartners);
  }, []);

  const slidesPerView = isMobile ? 1 : isTablet ? 2 : isDesktop ? 4 : 4;
  const shouldLoop = partners.length > slidesPerView;

  return (
    <SwiperContainer>
      <Swiper
        loop={shouldLoop}
        slidesPerView={slidesPerView}
        spaceBetween={1}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
          waitForTransition: true,
          pauseOnMouseEnter: true,
        }}
        speed={4000}
        modules={[Autoplay]}
        className="mySwiper"
        style={{ width: '100%' }}
      >
        {partners.map((partner, index) => (
          <SwiperSlide
            key={index}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: 'auto',
              padding: 20,
            }}
          >
            <CardContainer>
              <ArrowIcon src={Arrow} alt="↗️" />
              <ContentWrapper>
                <DescriptionText>{partner.description}</DescriptionText>
                <PercentageText>{partner.value}</PercentageText>
              </ContentWrapper>
              <GradientLine />
              <SmallLine />
            </CardContainer>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Другий слайдер - відображається тільки на мобільних */}
      {isMobile && (
        <Swiper
          loop={shouldLoop}
          slidesPerView={slidesPerView}
          spaceBetween={10}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            waitForTransition: true,
            pauseOnMouseEnter: true,
          }}
          speed={4000}
          modules={[Autoplay]}
          className="mySwiper"
          style={{ width: '100vh' }}
        ></Swiper>
      )}
    </SwiperContainer>
  );
};

export default Swipper;