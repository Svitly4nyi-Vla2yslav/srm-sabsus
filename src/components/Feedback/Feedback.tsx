import React from 'react';
import { motion } from 'framer-motion';
import {
  FeedbackContainer,
  FeedbackTitle,
  RatingNumber,
  StarContainer,
  Star,
  RatingText,
  FeedbackSwiperContainer,
  FeedbackSlide,
  FeedbackSlideIcon,
  FeedbackSlideText,
  UserWrapper,
  AvatarWrapper,
  NameUser,
  Position,
  ShadowLeft,
  ShadowRight,
  AvatarIcon,
} from './Feedback.styled';
import star from '../../assets/icons/star.svg';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useMediaQuery } from 'react-responsive';

// // Імпорт іконок
// import pizza from '../../assets/icons/banner/banner2.svg';
// import pizza1 from '../../assets/icons/banner/banner3.svg';
// import pizza2 from '../../assets/icons/banner/banner4.svg';
// import pizza3 from '../../assets/icons/banner/banner5.svg';
// import pizza4 from '../../assets/icons/banner/banner6.svg';
// import pizza5 from '../../assets/icons/banner/banner7.svg';
// import pizza6 from '../../assets/icons/banner/banner8.svg';

// // Імпорт аватарок
// import Avatar from '../../assets/icons/partners/userpartner.svg';
// import Avatar1 from '../../assets/icons/partners/userpartner0.svg';
// import Avatar2 from '../../assets/icons/partners/userpartner1.svg';
// import Avatar3 from '../../assets/icons/partners/userpartner2.svg';
// import Avatar4 from '../../assets/icons/partners/userpartner3.svg';
// import Avatar5 from '../../assets/icons/partners/userpartner4.svg';
// import Avatar6 from '../../assets/icons/partners/userpartner5.svg';
// import Avatar7 from '../../assets/icons/partners/userpartner6.svg';
// import Avatar8 from '../../assets/icons/partners/userpartner7.svg';
// import Avatar9 from '../../assets/icons/partners/userpartner8.svg';
import styled from 'styled-components';
import { useFeedback } from '../../firebase';
import ErrorScreen from '../ErrorScreen';
import LoadingScreen from '../LoadingScreen';

const MotionWrapper = styled(motion.div)`
  position: relative;
  overflow: hidden;
  width: 100vw;
`;

const Feedback: React.FC = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 743px)' });
  const isTablet = useMediaQuery({
    query: '(min-width: 744px) and (max-width: 1023px)',
  });
  const isDesktop = useMediaQuery({ query: '(min-width: 1024px)' });

  const { items, ratings, feedbackTitle, hasData, loading, error } =
    useFeedback();

  if (loading) return <LoadingScreen />;
  if (error) return <ErrorScreen message={error} />;
  if (!hasData) return null;

  const slidesPerView = isMobile ? 1 : isTablet ? 2 : isDesktop ? 4 : 5;
  const shouldLoop = items.length > slidesPerView;

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

  const ratingAnimation = (index: number) => ({
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, delay: index * 0.1 },
  });
  // Додайте перевірку перед рендерингом
  if (!ratings.length) return null;
  return (
    <MotionWrapper
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.2 }}
    >
      <FeedbackContainer as={motion.div} variants={containerAnimation}>
        {feedbackTitle && (
          <motion.div variants={itemAnimation}>
            <FeedbackTitle>{feedbackTitle}</FeedbackTitle>
          </motion.div>
        )}

        {!loading && ratings.length > 0 && (
          <StarContainer as={motion.div} variants={containerAnimation}>
            {ratings.map((rating, index) => (
              <motion.div
                key={`${rating.source}-${index}`}
                variants={itemAnimation}
                {...ratingAnimation(index)}
              >
                <RatingNumber>{rating.value}</RatingNumber>
                <div>
                  {rating.value && <Star src={star} alt="⭐" />}{' '}
                  {/* Додано умову для зірки */}
                  <RatingText>{rating.source}</RatingText>
                </div>
              </motion.div>
            ))}
          </StarContainer>
        )}
      </FeedbackContainer>

      {items.length > 0 && (
        <FeedbackSwiperContainer
          as={motion.div}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <ShadowLeft />
          <Swiper
            loop={shouldLoop}
            slidesPerView={slidesPerView}
            spaceBetween={20}
            centeredSlides={true}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            speed={4000}
            modules={[Autoplay]}
            className="mySwiper"
          >
            {items.map((item, index) => (
              <SwiperSlide key={item.id}>
                <FeedbackSlide
                  as={motion.div}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: false, amount: 0.2 }}
                  whileHover={{
                    y: 5,
                    boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
                  }}
                >
                  {item.iconUrl && (
                    <FeedbackSlideIcon src={item.iconUrl} alt="Company logo" />
                  )}
                  <FeedbackSlideText>{item.text}</FeedbackSlideText>
                  <UserWrapper>
                    <AvatarWrapper>
                      {item.avatarUrl && (
                        <AvatarIcon
                          src={item.avatarUrl}
                          alt={`${item.name} avatar`}
                          as={motion.img}
                          whileHover={{
                            y: -5,
                            boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
                          }}
                        />
                      )}
                    </AvatarWrapper>
                    <div>
                      <NameUser>{item.name}</NameUser>
                      <Position>{item.position}</Position>
                    </div>
                  </UserWrapper>
                </FeedbackSlide>
              </SwiperSlide>
            ))}
          </Swiper>
          <ShadowRight />
        </FeedbackSwiperContainer>
      )}
    </MotionWrapper>
  );
};
export default Feedback;
