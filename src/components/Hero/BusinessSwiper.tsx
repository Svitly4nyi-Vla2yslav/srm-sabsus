import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';
import 'swiper/css/bundle';
import { useMediaQuery } from 'react-responsive';
import {
  CardContainer,
  ContentWrapper,
  BusinessName,
  BusinessImage,
  ArrowIcon,
  GradientLine,
  SmallLine,
  SpanUnicorn,
  TextContainer,
  Wrapper,
} from './BusinessSwiper.styled';
import Arrow from '../../assets/icons/arrow-narrow-up-right.svg';
import restaurant from '../../assets/icons/BusinessSwiper/Restaurant.png';
import bistro from '../../assets/icons/BusinessSwiper/Bistro.png';
import vegan from '../../assets/icons/BusinessSwiper/Vegan Restaurant.png';
import sushi from '../../assets/icons/BusinessSwiper/Sushi.png';
import fastfood from '../../assets/icons/BusinessSwiper/FastFood.png';
import buffet from '../../assets/icons/BusinessSwiper/Buffet.png';
import foodtruck from '../../assets/icons/BusinessSwiper/FoodTruck.png';
import coffee from '../../assets/icons/BusinessSwiper/CoffeeShop.png';
import pizza from '../../assets/icons/BusinessSwiper/Restaurant.png';
import bakery from '../../assets/icons/BusinessSwiper/Bakery.png';
import icecream from '../../assets/icons/BusinessSwiper/IceCreamParlor.png';
import candy from '../../assets/icons/BusinessSwiper/CandyShop.png';
import darkkitchen from '../../assets/icons/BusinessSwiper/DarkKitchen.png';
import delivery from '../../assets/icons/BusinessSwiper/Delivery.png';
import franchise from '../../assets/icons/BusinessSwiper/FranchiseOwners.png';
import catering from '../../assets/icons/BusinessSwiper/Catering Services.png';
import eventfood from '../../assets/icons/BusinessSwiper/Event Food Stands.png';
import mealprep from '../../assets/icons/BusinessSwiper/Meal Prep Business.png';
import store from '../../assets/icons/BusinessSwiper/Store.png';
import onlineshop from '../../assets/icons/BusinessSwiper/Online Shop.png';
import giftshop from '../../assets/icons/BusinessSwiper/Gift Shop.png';
import smoke from '../../assets/icons/BusinessSwiper/SmokeShop.png';
import health from '../../assets/icons/BusinessSwiper/HealthStore.png';
import florist from '../../assets/icons/BusinessSwiper/Florist.png';
import petshop from '../../assets/icons/BusinessSwiper/PetShop.png';
import beauty from '../../assets/icons/BusinessSwiper/BeautyShop.png';
import { SwiperContainer } from './Swipper.styled';
import { HeroInnovative, HeroTitle } from './Hero.styled';
import { useTranslation } from 'react-i18next';

const BusinessSwiper: React.FC = () => {
  const { t } = useTranslation();
  const isMobile = useMediaQuery({ query: '(max-width: 743px)' });
  const isTablet = useMediaQuery({
    query: '(min-width: 744px) and (max-width: 1439px)',
  });
  const isDesktop = useMediaQuery({ query: '(min-width: 1440px)' });

  const businessTypes = [
    { key: 'restaurant', image: restaurant },
    { key: 'bistro', image: bistro },
    { key: 'veganRestaurant', image: vegan },
    { key: 'sushi', image: sushi },
    { key: 'fastFood', image: fastfood },
    { key: 'buffet', image: buffet },
    { key: 'foodTruck', image: foodtruck },
    { key: 'coffeeShop', image: coffee },
    { key: 'pizzeria', image: pizza },
    { key: 'bakery', image: bakery },
    { key: 'iceCreamParlor', image: icecream },
    { key: 'candyShop', image: candy },
    { key: 'darkKitchen', image: darkkitchen },
    { key: 'delivery', image: delivery },
    { key: 'franchiseOwners', image: franchise },
    { key: 'cateringServices', image: catering },
    { key: 'eventFoodStands', image: eventfood },
    { key: 'mealPrepBusiness', image: mealprep },
    { key: 'store', image: store },
    { key: 'onlineShop', image: onlineshop },
    { key: 'giftShop', image: giftshop },
    { key: 'beautyShop', image: beauty },
    { key: 'smokeShop', image: smoke },
    { key: 'healthStore', image: health },
    { key: 'florist', image: florist },
    { key: 'petShop', image: petshop },
  ];

  const slidesPerView = isMobile ? 1 : isTablet ? 2 : isDesktop ? 4 : 4;
  const shouldLoop = businessTypes.length > slidesPerView;

  return (
    <Wrapper>
      <TextContainer>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: false, amount: 0.3 }}
          style={{
            position: 'relative',
            zIndex: 1,
            width: '100%',
            marginBottom: 30,
          }}
        >
          <HeroInnovative>
            {t('businessSwiper.title')} <SpanUnicorn> 🤖</SpanUnicorn>
          </HeroInnovative>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <HeroTitle>{t('businessSwiper.subtitle')}</HeroTitle>
        </motion.div>
      </TextContainer>
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
            className="businessSwiper"
          >
            {businessTypes.map((business, index) => (
              <SwiperSlide
                key={business.key}
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
                      <BusinessImage
                        src={business.image}
                        alt={t(`businessSwiper.businessTypes.${business.key}`)}
                      />
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 + 0.1 * index }}
                        viewport={{ once: false, amount: 0.3 }}
                      >
                        <BusinessName>
                          {t(`businessSwiper.businessTypes.${business.key}`)}
                        </BusinessName>
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
      </SwiperContainer>
    </Wrapper>
  );
};

export default BusinessSwiper;
