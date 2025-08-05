import React from 'react';
import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css/bundle';
import {
  AvatarIcon,
  IconPartners,
  PartnersIcon,
  SwiperContainer,
  UserText,
} from './PartnersBanner.styled';
import { usePartnersBannerData } from '../../firebase';
import ErrorScreen from '../ErrorScreen';
import LoadingScreen from '../LoadingScreen';

const PartnersBanner: React.FC = () => {
  const { data, loading, error } = usePartnersBannerData();
  const isMobile = useMediaQuery({ query: '(max-width: 743px)' });
  const isTablet = useMediaQuery({
    query: '(min-width: 744px) and (max-width: 1223px)',
  });
  const isDesktop = useMediaQuery({ query: '(min-width: 1224px)' });

  if (loading) return <LoadingScreen />;
  if (error) {
    console.error('Error loading partners data:', error);
    return <ErrorScreen message={error} />;
  }
  if (!data?.carousels?.length || !data?.partners?.length) {
    return null;
  }

  // Фільтруємо карусельні елементи з валідними зображеннями
  const validCarousels = data.carousels.filter(
    partner => partner?.imageUrl && partner.imageUrl.startsWith('http')
  );

  // Фільтруємо партнерів з валідними зображеннями
  const validPartners = data.partners.filter(
    image => image && image.startsWith('http')
  );

  // Якщо після фільтрації немає даних - не рендеримо компонент
  if (!validCarousels.length || !validPartners.length) {
    return null;
  }

  const slidesPerView = isMobile ? 2 : isTablet ? 3 : isDesktop ? 6 : 6;
  const shouldLoop = validPartners.length > slidesPerView;
  const slidesToShow = isMobile ? 3 : isTablet ? 6 : isDesktop ? 15 : 15;
  const partnersList = validPartners.slice(0, slidesToShow);

  // Анімації
  const containerAnimation = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemAnimation = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <SwiperContainer
      as={motion.div}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.2 }}
      variants={containerAnimation}
    >
      {/* Swiper - рухається вправо */}
      <motion.div variants={itemAnimation}>
        <Swiper
          loop={shouldLoop}
          slidesPerView={slidesPerView}
          spaceBetween={10}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            reverseDirection: false,
          }}
          speed={4000}
          modules={[Autoplay]}
          className="mySwiper"
        >
          {validCarousels.map(partner => (
            <SwiperSlide key={`right-${partner.id}`}>
              <a href={partner.link} target="_blank" rel="noopener noreferrer">
                <PartnersIcon
                  as={motion.img}
                  src={partner.imageUrl}
                  alt={`Partner ${partner.id}`}
                  loading="lazy"
                  whileHover={{
                    scale: 1.05,
                    boxShadow:
                      '0 0 5px 4px #494BEC, 0 0 5px 0px #4F51ED, inset 0 0 16px 8px #6567EF',
                  }}
                  transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                  onError={e => {
                    console.error(
                      'Error loading partner image:',
                      partner.imageUrl
                    );
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>

      {/* Swiper - рухається вліво */}
      <motion.div variants={itemAnimation}>
        <Swiper
          loop={shouldLoop}
          slidesPerView={slidesPerView}
          spaceBetween={10}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            reverseDirection: true,
          }}
          speed={4000}
          modules={[Autoplay]}
          className="mySwiper reverse-swiper"
        >
          {[...validCarousels].reverse().map(partner => (
            <SwiperSlide key={`left-${partner.id}`}>
              <a href={partner.link} target="_blank" rel="noopener noreferrer">
                <PartnersIcon
                  as={motion.img}
                  src={partner.imageUrl}
                  alt={`Partner ${partner.id}`}
                  loading="lazy"
                  whileHover={{
                    scale: 1.05,
                    boxShadow:
                      '0 0 5px 4px #494BEC, 0 0 5px 0px #4F51ED, inset 0 0 16px 8px #6567EF',
                  }}
                  transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                  onError={e => {
                    console.error(
                      'Error loading partner image:',
                      partner.imageUrl
                    );
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>

      <IconPartners as={motion.div} variants={containerAnimation}>
        {partnersList.map((image, index) => (
          <AvatarIcon
            as={motion.img}
            key={`partner-${index}`}
            src={image}
            alt={`Partner ${index}`}
            loading="lazy"
            variants={itemAnimation}
            whileHover={{ rotate: 10, scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 300, damping: 10 }}
            onError={e => {
              console.error('Error loading partner image:', image);
              e.currentTarget.style.display = 'none';
            }}
          />
        ))}
        {data?.trustedText && (
          <UserText
            as={motion.p}
            variants={itemAnimation}
            whileHover={{ scale: 1.02 }}
          >
            {data.trustedText}
          </UserText>
        )}
      </IconPartners>
    </SwiperContainer>
  );
};

export default PartnersBanner;
