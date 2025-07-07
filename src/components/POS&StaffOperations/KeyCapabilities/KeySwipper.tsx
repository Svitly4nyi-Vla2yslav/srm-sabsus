import React from 'react';
import keys from '../../../assets/icons/Costomer/key.png';
import keys1 from '../../../assets/icons/Costomer/key1.png';
import keys2 from '../../../assets/icons/Costomer/key2.png';
import keys3 from '../../../assets/icons/Costomer/key3.png';
import keys4 from '../../../assets/icons/Costomer/key4.png';
import keys5 from '../../../assets/icons/Costomer/key5.png';
import keys6 from '../../../assets/icons/Costomer/key6.png';
import keys7 from '../../../assets/icons/Costomer/key7.png';
import { motion } from 'framer-motion';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';

export const SwiperContainer = styled(motion.div)`
  margin: 0 auto;
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;

  .swiper {
    width: 100vw;
    padding: 0 0;
    margin: 0 auto;
  }

  .swiper-slide {
     padding: 0 0;
    margin: 0 auto;
    width: 100vw !important;
    display: flex;
    justify-content: center;
    transition: transform 0.3s ease;
  
  }
`;

export const CardContainer = styled(motion.div)`
  @media (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    gap: 16px;
    margin: 0 auto;
    justify-content: center;
  }
  @media screen and (min-width: 1440px) {
  }
`;

export const Card = styled.div`
   overflow: hidden;
  display: flex;
  flex-direction: column;
  border: 1px solid #212121;
  border-radius: 24px;
  padding: 20px;
  width: 100%; /* Змінюємо фіксовану ширину на 100% */
  max-width: 311px; /* Додаємо максимальну ширину */
  height: 350px;
  backdrop-filter: blur(16px);
  box-shadow:
    0 8px 16px -8px rgba(0, 0, 0, 0.03),
    0 2px 4px -2px rgba(0, 0, 0, 0.08),
    inset 0 -8px 24px 0 rgba(255, 255, 255, 0.03),
    inset 0 -5px 6px 0 rgba(255, 255, 255, 0.03);
  background: rgba(255, 255, 255, 0.03);
  will-change: transform, box-shadow;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  gap: 10px;
  align-items: flex-start;
  margin: 0 auto; /* Центруємо картку */

  @media screen and (min-width: 1440px) {
    width: 280px;
  }
`;

export const Icon = styled.img`
  filter: drop-shadow(0 0 20px rgba(138, 43, 226, 0.7));
  transition: filter 0.3s ease;
  
  &:hover {
    filter: drop-shadow(0 0 30px rgba(138, 43, 226, 1.7));
`;

export const TitleCard = styled.h3`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 17px;
  line-height: 130%;
  color: var(--white-100);
`;

export const TextCard = styled.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 16px;
  line-height: 130%;
  color: var(--white-60);
`;

const KeySwipper: React.FC = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  const getCardAnimation = (index: number) => {
    switch (index) {
      case 0:
        return {
          initial: { x: -100, opacity: 0 },
          whileInView: { x: 0, opacity: 1 },
        }; // зліва
      case 1:
        return {
          initial: { x: 100, opacity: 0 },
          whileInView: { x: 0, opacity: 1 },
        }; // справа
      case 2:
        return {
          initial: { x: -100, opacity: 0 },
          whileInView: { x: 0, opacity: 1 },
        }; // зліва
      case 3:
        return {
          initial: { scale: 0.5, opacity: 0 },
          whileInView: { scale: 1, opacity: 1 },
        }; // zoom-in
      case 4:
        return {
          initial: { x: 100, opacity: 0 },
          whileInView: { x: 0, opacity: 1 },
        }; // справа
      case 5:
        return {
          initial: { x: -100, opacity: 0 },
          whileInView: { x: 0, opacity: 1 },
        }; // зліва
      case 6:
        return {
          initial: { x: 100, opacity: 0 },
          whileInView: { x: 0, opacity: 1 },
        }; // справа
      default:
        return { initial: { opacity: 0 }, whileInView: { opacity: 1 } };
    }
  };

  const keyItems = [
    {
      id: 1,
      imageUrl: keys,
      title: 'Branded Mobile App',
      text: "Get a custom app with your brand's logo and colors. Great for user engagement and repeat orders.",
    },
    {
      id: 2,
      imageUrl: keys1,
      title: 'Loyalty Programs',
      text: 'Set up bonuses, cashback or discounts based on user activity.Build habits and retain your best.',
    },
    {
      id: 3,
      imageUrl: keys2,
      title: 'Smart Delivery Options',
      text: 'Choose from delivery, pickup, or dine-in. Auto-location and saved addresses included.',
    },
    {
      id: 4,
      imageUrl: keys3,
      title: 'Push Notifications',
      text: 'Send timely updates about orders, promos or new arrivals. Drive engagement and reduce no-shows.',
    },
    {
      id: 5,
      imageUrl: keys4,
      title: 'Order History & Repeats',
      text: 'Let users reorder in seconds from their past purchases. Track preferences for experience.',
    },
    {
      id: 6,
      imageUrl: keys5,
      title: 'Table Reservations',
      text: 'Book tables in advance with time slots and guest count. Reduce queues and optimize floor space.',
    },
    {
      id: 7,
      imageUrl: keys6,
      title: 'Customer Feedback',
      text: 'Collect reviews and ratings per order.Show you listen, and build trust.',
    },
    {
      id: 8,
      imageUrl: keys7,
      title: 'Personal Account Area',
      text: 'Manage orders, loyalty status, saved data, and preferences. A seamless all-in-one experience for users.',
    },
  ];

  const shouldLoop = true;
  const slidesPerView = 1;

  return (
    <SwiperContainer
      as={motion.div}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.2 }}
    >
      {isMobile && (
        <motion.div>
          {/* <ShadowLeft /> */}
          <Swiper
            loop={shouldLoop}
            slidesPerView={slidesPerView}
            spaceBetween={6}
             centeredSlides={false} // Центрування активного слайда
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
              reverseDirection: false,
            }}
            speed={4000}
            modules={[Autoplay]}
            className="mySwiper"
          >
            {keyItems.map(item => (
              <SwiperSlide key={item.id}>
                <Card>
                  <Icon src={item.imageUrl} alt={item.title} />
                  <TitleCard>{item.title}</TitleCard>
                  <TextCard>{item.text}</TextCard>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
          {/* <ShadowRight /> */}
        </motion.div>
      )}
      {!isMobile && (
        <CardContainer>
          {keyItems.map((item, index) => (
            <Card
              key={item.id}
              as={motion.div}
              {...getCardAnimation(index)}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              {' '}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.25 }}
                viewport={{ once: false, amount: 0.3 }}
              >
                <Icon src={item.imageUrl} alt={item.title} />{' '}
              </motion.div>{' '}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.2 }}
                viewport={{ once: false, amount: 0.3 }}
              >
                <TitleCard>{item.title}</TitleCard>{' '}
              </motion.div>
              <TextCard>{item.text}</TextCard>
            </Card>
          ))}
        </CardContainer>
      )}
    </SwiperContainer>
  );
};

export default KeySwipper;
