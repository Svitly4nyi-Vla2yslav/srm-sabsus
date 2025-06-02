import React, { useEffect} from 'react';
// import { getPartners, Partner } from '../../firabase';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';
import 'swiper/css/bundle';
import { useMediaQuery } from 'react-responsive';
// import { useTranslation } from 'react-i18next';
import { Border } from '../Footer/Footer.styled';
import { SwiperContainer } from './Swipper.styled';

const partners: any[] = [];

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

  const slidesPerView = isMobile ? 2 : isTablet ? 4 : isDesktop ? 5 : 5;
    const shouldLoop = partners.length > slidesPerView;

  return (
    <SwiperContainer>
      <Border />
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
      >
        {partners.map(partner => (
          <SwiperSlide
            key={partner.id}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: 'auto',
              paddingTop: 10,
            }}
          >
            {partner.link ? (
              <a href={partner.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={partner.imageUrl}
                  alt={`Partner ${partner.id}`}
                  loading="lazy"
                />
              </a>
            ) : (
              <img
                src={partner.imageUrl}
                alt={`Partner ${partner.id}`}
                loading="lazy"
              />
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
