import React from 'react';
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
import { useTranslation } from 'react-i18next';

// Імпорт іконок
import pizza from '../../assets/icons/banner/banner2.svg';
import pizza1 from '../../assets/icons/banner/banner3.svg';
import pizza2 from '../../assets/icons/banner/banner4.svg';
import pizza3 from '../../assets/icons/banner/banner5.svg';
import pizza4 from '../../assets/icons/banner/banner6.svg';
import pizza5 from '../../assets/icons/banner/banner7.svg';
import pizza6 from '../../assets/icons/banner/banner8.svg';

// Імпорт аватарок
import Avatar from "../../assets/icons/partners/userpartner.svg";
import Avatar1 from "../../assets/icons/partners/userpartner0.svg";
import Avatar2 from "../../assets/icons/partners/userpartner1.svg";
import Avatar3 from "../../assets/icons/partners/userpartner2.svg";
import Avatar4 from "../../assets/icons/partners/userpartner3.svg";
import Avatar5 from "../../assets/icons/partners/userpartner4.svg";
import Avatar6 from "../../assets/icons/partners/userpartner5.svg";
import Avatar7 from "../../assets/icons/partners/userpartner6.svg";
import Avatar8 from "../../assets/icons/partners/userpartner7.svg";
import Avatar9 from "../../assets/icons/partners/userpartner8.svg";

const Feedback: React.FC = () => {
  const { t } = useTranslation();
  const isMobile = useMediaQuery({ query: '(max-width: 743px)' });
  const isTablet = useMediaQuery({
    query: '(min-width: 744px) and (max-width: 1023px)',
  });
  const isDesktop = useMediaQuery({ query: '(min-width: 1024px)' });

  const data = t('feedback', { returnObjects: true }) as {
    title: string;
    ratings: Array<{
      value: string;
      source: string;
    }>;
    testimonials: Array<{
      text: string;
      name: string;
      position: string;
    }>;
  };

  // Локальний масив відгуків з іконками та аватарками
  const feedbackItems = data.testimonials.map((testimonial, index) => {
    const icons = [pizza, pizza1, pizza2, pizza3, pizza4, pizza5, pizza6];
    const avatars = [Avatar, Avatar1, Avatar2, Avatar3, Avatar4, Avatar5, Avatar6, Avatar7, Avatar9, Avatar8];
    
    return {
      ...testimonial,
      id: index + 1,
      icon: icons[index % icons.length], // Циклічний вибір іконок
      avatar: avatars[index % avatars.length] // Циклічний вибір аватарок
    };
  });

  const slidesPerView = isMobile ? 1 : isTablet ? 2 : isDesktop ? 4 : 5;
  const shouldLoop = feedbackItems.length > slidesPerView;

  return (
    <div style={{ width: '100vw', position: 'relative', overflow: 'hidden' }}>
      <FeedbackContainer>
        <FeedbackTitle>{data.title}</FeedbackTitle>
        <StarContainer>
          {data.ratings.map((rating, index) => (
            <div key={index}>
              <RatingNumber>{rating.value}</RatingNumber>
              <div>
                <Star src={star} alt="⭐" />
                <RatingText>{rating.source}</RatingText>
              </div>
            </div>
          ))}
        </StarContainer>
      </FeedbackContainer>
      <FeedbackSwiperContainer>
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
          {feedbackItems.map(item => (
            <SwiperSlide key={item.id}>
              <FeedbackSlide>
                <FeedbackSlideIcon src={item.icon} alt="Company logo" />
                <FeedbackSlideText>{item.text}</FeedbackSlideText>
                <UserWrapper>
                  <AvatarWrapper>
                    <AvatarIcon src={item.avatar} alt={`${item.name} avatar`} />
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
    </div>
  );
};

export default Feedback;