import React, { useEffect } from 'react';
// import { getPartners, Partner } from '../../firabase';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';
import 'swiper/css/bundle';
import { useMediaQuery } from 'react-responsive';
// import { useTranslation } from 'react-i18next';
import {
  CardContainer,
  ContentWrapper,
  DescriptionText,
  GradientLine,
  PercentageText,
  SmallLine,
  SwiperContainer,
} from './Swipper.styled';

const partners = [
  {
    id: 1,
    procent: '2M+',
    link: '#',
    text: "users daily",
  },
  {
    id: 2,
    procent: '$1B+',
    link: '#',
    text: "in processed transactions",
  },
  {
    id: 3,
    procent: '99%',
    link: '#',
    text: "Acceleration of business processes",
  },
  {
    id: 4,
    procent: ' 4+',
    link: '#',
    text:  "Languages Fully Multilingual Interface"
  },
  {
    id: 5,
     procent: '2M+',
    link: '#',
    text: "users daily",

  },
  {
    id: 6,
   procent: '$1B+',
    link: '#',
    text: "in processed transactions",
  },
  {
    id: 7,
    procent: '99%',
    link: '#',
    text: "Acceleration of business processes",
  },
];

const Swipper: React.FC = () => {
  //   const { t } = useTranslation();
  const isMobile = useMediaQuery({ query: '(max-width: 743px)' });
  const isTablet = useMediaQuery({
    query: '(min-width: 744px) and (max-width: 1023px)',
  });
  const isDesktop = useMediaQuery({ query: '(min-width: 1024px)' });

  //   const [partners, setPartners] = useState<Partner[]>([]);

  useEffect(() => {
    // getPartners().then(setPartners);
  }, []);

  const slidesPerView = isMobile ? 2 : isTablet ? 3 : isDesktop ? 4 : 4;
  const shouldLoop = partners.length > slidesPerView;

  return (
    <SwiperContainer>
      <Swiper
        loop={shouldLoop}
        slidesPerView={slidesPerView}
        spaceBetween={20}
        autoplay=
        {{
          delay: 2000, // Збільшено затримку для нормальної прокрутки
          disableOnInteraction: false,
          waitForTransition: true, // Додано для плавності
          pauseOnMouseEnter: true, // Додано для зупинки при наведенні
        }}
        speed={4000} // Зменшено швидкість для плавності
        modules={[Autoplay]}
        className="mySwiper"
        style={{ width: '100%' }}
      >
        {partners.map(partner => (
          <SwiperSlide
            key={partner.id}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: 'auto',
              padding: 20,
            }}
          >
            {partner.link ? (
              <CardContainer
                href={partner.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ContentWrapper>
                  <DescriptionText>
                    {partner.text}
                  </DescriptionText>
                  <PercentageText>{partner.procent}</PercentageText>
                </ContentWrapper>
                <GradientLine />
                <SmallLine />
              </CardContainer>
            ) : (
              <CardContainer
                href={partner.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ContentWrapper>
                  <DescriptionText>
                   {partner.text}
                  </DescriptionText>
                  <PercentageText>{partner.procent}</PercentageText>
                </ContentWrapper>
                <GradientLine />
                <SmallLine />
              </CardContainer>
            )}
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Другий слайдер - відображається тільки на мобільних */}
      {isMobile && (
        <Swiper
          loop={shouldLoop}
          slidesPerView={slidesPerView}
          spaceBetween={20}
          autoplay={{
            delay: 0, // Збільшено затримку для нормальної прокрутки
            disableOnInteraction: false,
            waitForTransition: true, // Додано для плавності
            pauseOnMouseEnter: true, // Додано для зупинки при наведенні
          }}
          speed={4000} // Зменшено швидкість для плавності
          modules={[Autoplay]}
          className="mySwiper"
          style={{ width: '100%' }}
        ></Swiper>
      )}
    </SwiperContainer>
  );
};

export default Swipper;
