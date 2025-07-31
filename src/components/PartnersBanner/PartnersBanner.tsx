import React from 'react';
import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css/bundle';
import { useTranslation } from 'react-i18next';
import {
  AvatarIcon,
  IconPartners,
  PartnersIcon,
  SwiperContainer,
  UserText,
} from './PartnersBanner.styled';

// import banner2 from '../../assets/icons/banner/banner2.svg';
// import banner3 from '../../assets/icons/banner/banner3.svg';
// import banner4 from '../../assets/icons/banner/banner4.svg';
// import banner5 from '../../assets/icons/banner/banner5.svg';
// import banner6 from '../../assets/icons/banner/banner6.svg';
// import banner7 from '../../assets/icons/banner/banner7.svg';
// import banner8 from '../../assets/icons/banner/banner8.svg';
// import banner9 from '../../assets/icons/banner/banner.svg';
// import banner10 from '../../assets/icons/banner/banner1.svg';
// import banner11 from '../../assets/icons/banner/banner6.svg';

// import partner from '../../assets/icons/partners/userpartner.svg';
// import partner0 from '../../assets/icons/partners/userpartner0.svg';
// import partner1 from '../../assets/icons/partners/userpartner1.svg';
// import partner2 from '../../assets/icons/partners/userpartner2.svg';
// import partner3 from '../../assets/icons/partners/userpartner3.svg';
// import partner4 from '../../assets/icons/partners/userpartner4.svg';
// import partner5 from '../../assets/icons/partners/userpartner5.svg';
// import partner6 from '../../assets/icons/partners/userpartner6.svg';
// import partner7 from '../../assets/icons/partners/userpartner7.svg';
// import partner8 from '../../assets/icons/partners/userpartner8.svg';
// import partner9 from '../../assets/icons/partners/userpartner9.svg';
// import partner10 from '../../assets/icons/partners/userpartner10.svg';
// import partner11 from '../../assets/icons/partners/userpartner11.svg';
// import partner12 from '../../assets/icons/partners/userpartner12.svg';
// import partner13 from '../../assets/icons/partners/userpartner13.svg';
import { usePartnersBannerData } from '../../firebase';
import ErrorScreen from '../ErrorScreen';
import LoadingScreen from '../LoadingScreen';

// const partnersImages = [
//   partner,
//   partner0,
//   partner1,
//   partner2,
//   partner3,
//   partner4,
//   partner5,
//   partner6,
//   partner7,
//   partner8,
//   partner9,
//   partner10,
//   partner11,
//   partner12,
//   partner13,
// ];

// const partners = [
//   { id: 1, imageUrl: banner4, link: '#' },
//   { id: 2, imageUrl: banner11, link: '#' },
//   { id: 3, imageUrl: banner2, link: '#' },
//   { id: 4, imageUrl: banner3, link: '#' },
//   { id: 5, imageUrl: banner4, link: '#' },
//   { id: 6, imageUrl: banner5, link: '#' },
//   { id: 7, imageUrl: banner6, link: '#' },
//   { id: 8, imageUrl: banner7, link: '#' },
//   { id: 9, imageUrl: banner8, link: '#' },
//   { id: 10, imageUrl: banner9, link: '#' },
//   { id: 11, imageUrl: banner5, link: '#' },
//   { id: 12, imageUrl: banner10, link: '#' },
//   { id: 13, imageUrl: banner9, link: '#' },
// ];

const PartnersBanner: React.FC = () => {
  const { data, loading, error } = usePartnersBannerData();
  const { t } = useTranslation();
  const isMobile = useMediaQuery({ query: '(max-width: 743px)' });
  const isTablet = useMediaQuery({
    query: '(min-width: 744px) and (max-width: 1223px)',
  });
  const isDesktop = useMediaQuery({ query: '(min-width: 1224px)' });
  if (loading) return <LoadingScreen />;
  if (error) return <ErrorScreen message={error} />;
  if (!data) return null;
  const { carousels, partners } = data;

  const slidesPerView = isMobile ? 2 : isTablet ? 3 : isDesktop ? 6 : 6;

  const shouldLoop = partners.length > slidesPerView;

  const slidesToShow = isMobile ? 3 : isTablet ? 6 : isDesktop ? 15 : 15;

  const partnersList = partners.slice(0, slidesToShow);

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
          {carousels.map(partner => (
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
          {[...carousels].reverse().map(partner => (
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
          />
        ))}
        <UserText
          as={motion.p}
          variants={itemAnimation}
          whileHover={{ scale: 1.02 }}
        >
          {t('partnersBanner.trustedText')}
        </UserText>
      </IconPartners>
    </SwiperContainer>
  );
};

export default PartnersBanner;
