import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
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
    query: '(min-width: 744px) and (max-width: 1439px)',
  });
  const isDesktop = useMediaQuery({ query: '(min-width: 1440px)' });

  const stats = t('swipper.stats', { returnObjects: true }) as Array<{
    value: string;
    description: string;
  }>;

  const partners = [...stats, ...stats.slice(0, 3)];

  useEffect(() => {
    // getPartners().then(setPartners);
  }, []);

  const slidesPerView = isMobile ? 1 : isTablet ? 2 : isDesktop ? 4 : 4;
  const shouldLoop = partners.length > slidesPerView;

  return (
    <SwiperContainer>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0, delay: 0.3 }}
        viewport={{ once: false, amount: 0.3 }}
      >
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
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.1 * index }}
                viewport={{ once: false, amount: 0.3 }}
              >
                <CardContainer>
                  <motion.div
                    initial={{ opacity: 0, rotate: -45 }}
                    whileInView={{ opacity: 1, rotate: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 + 0.1 * index }}
                    viewport={{ once: false, amount: 0.3 }}
                  >
                    <ArrowIcon src={Arrow} alt="↗️" />
                  </motion.div>
                  
                  <ContentWrapper>
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.3 + 0.1 * index }}
                      viewport={{ once: false, amount: 0.3 }}
                    >
                      <DescriptionText>{partner.description}</DescriptionText>
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.7, delay: 0.4 + 0.1 * index }}
                      viewport={{ once: false, amount: 0.3 }}
                    >
                      <PercentageText>{partner.value}</PercentageText>
                    </motion.div>
                  </ContentWrapper>
                  
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.6, delay: 0.5 + 0.1 * index }}
                    viewport={{ once: false, amount: 0.3 }}
                  >
                    <GradientLine />
                  </motion.div>
                  
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 + 0.1 * index }}
                    viewport={{ once: false, amount: 0.3 }}
                  >
                    <SmallLine />
                  </motion.div>
                </CardContainer>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>

      {isMobile && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.7 }}
          viewport={{ once: false, amount: 0.3 }}
        >
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
          />
        </motion.div>
      )}
    </SwiperContainer>
  );
};

export default Swipper;