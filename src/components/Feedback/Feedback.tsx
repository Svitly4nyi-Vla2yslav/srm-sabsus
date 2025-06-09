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
import pizza from '../../assets/icons/pizzario/pizzarioIcon.png';
import Avatar from '../../assets/icons/avatar/Image-36-1.svg';
import Avatar1 from '../../assets/icons/avatar/Image-36.svg';
import Avatar2 from '../../assets/icons/avatar/Image-36-2.svg';
import Avatar3 from '../../assets/icons/avatar/Image-36-3.svg';
import Avatar4 from '../../assets/icons/avatar/Image-36-4.svg';

export const feedback = [
  {
    id: 1,
    icon: pizza,
    text: 'Switching was easy thanks to outstanding support and clear onboarding. We now have a better overview of finances and staff management than ever before.',
    avatar: Avatar,
    name: 'Lucas Nguyen',
    position: 'Operations Manager at Pizzario',
  },
  {
    id: 2,
    icon: pizza,
    text: 'Switching was easy thanks to outstanding support and clear onboarding. We now have a better overview of finances and staff management than ever before.',
    avatar: Avatar1,
    name: 'Lucas Nguyen',
    position: 'Operations Manager at Pizzario',
  },
  {
    id: 3,
    icon: pizza,
    text: 'Switching was easy thanks to outstanding support and clear onboarding. We now have a better overview of finances and staff management than ever before.',

    avatar: Avatar2,
     name: 'Lucas Nguyen',
    position: 'Operations Manager at Pizzario',
  },
  {
    id: 4,
    icon: pizza,
    text: 'Switching was easy thanks to outstanding support and clear onboarding. We now have a better overview of finances and staff management than ever before.',

    avatar: Avatar3,
     name: 'Lucas Nguyen',
    position: 'Operations Manager at Pizzario',
  },
  {
    id: 5,
    icon: pizza,
    text: 'Switching was easy thanks to outstanding support and clear onboarding. We now have a better overview of finances and staff management than ever before.',

    avatar: Avatar4,
    name: 'Lucas Nguyen',
    position: 'Operations Manager at Pizzario',
  },
  {
    id: 6,
    icon: pizza,
    text: 'Switching was easy thanks to outstanding support and clear onboarding. We now have a better overview of finances and staff management than ever before.',

    avatar: Avatar1,
   name: 'Lucas Nguyen',
    position: 'Operations Manager at Pizzario',
  },
  {
    id: 7,
    icon: pizza,
    text: 'Switching was easy thanks to outstanding support and clear onboarding. We now have a better overview of finances and staff management than ever before.',

    avatar: Avatar,
      name: 'Lucas Nguyen',
    position: 'Operations Manager at Pizzario',
  },
];
const Feedback: React.FC = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 743px)' });
  const isTablet = useMediaQuery({
    query: '(min-width: 744px) and (max-width: 1023px)',
  });
  const isDesktop = useMediaQuery({ query: '(min-width: 1024px)' });

  const slidesPerView = isMobile ? 1 : isTablet ? 2 : isDesktop ? 4 : 4;
  const shouldLoop = feedback.length > slidesPerView;
  return (
    <div style={{ width: '100vw', position: 'relative', overflow: 'hidden' }}>
      <FeedbackContainer>
        <FeedbackTitle>
          Trusted by 2000+ award-winning agencies and firms
        </FeedbackTitle>
        <StarContainer>
          <div>
            <RatingNumber>4,8</RatingNumber>
            <div>
              <Star src={star} alt="⭐⭐⭐⭐⭐" />
              <RatingText>TechRadar CRM</RatingText>
            </div>
          </div>
          <div>
            <RatingNumber>5,0</RatingNumber>
            <div>
              <Star src={star} alt="⭐⭐⭐⭐⭐" />
              <RatingText>ChroStartupTools</RatingText>
            </div>
          </div>
          <div>
            <RatingNumber>4,9</RatingNumber>
            <div>
              <Star src={star} alt="⭐⭐⭐⭐⭐" />
              <RatingText>SaaS Advisor</RatingText>
            </div>
          </div>
        </StarContainer>
      </FeedbackContainer>
      <FeedbackSwiperContainer>
        <ShadowLeft />
        <Swiper
          loop={shouldLoop}
          slidesPerView={slidesPerView}
          spaceBetween={20}
          centeredSlides={true} // Центруємо активний слайд
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          speed={4000}
          modules={[Autoplay]}
          className="mySwiper"
        >
          {feedback.map(item => (
            <SwiperSlide key={item.id}>
              <FeedbackSlide>
                <FeedbackSlideIcon src={item.icon} />
                <FeedbackSlideText>{item.text}</FeedbackSlideText>
                <UserWrapper>
                  <AvatarWrapper> 
                    <AvatarIcon src={item.avatar}/>
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
