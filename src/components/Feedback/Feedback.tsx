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

import IconPizzario from '../../assets/icons/banner/banner2.svg';
import IconBurgerHouse from '../../assets/icons/banner/banner3.svg';
import IconSushiTime from '../../assets/icons/banner/banner4.svg';
import IconCafeDelight from '../../assets/icons/banner/banner5.svg';
import IconNoodleBar from '../../assets/icons/banner/banner6.svg';
import IconTacoFiesta from '../../assets/icons/banner/banner7.svg';
import IconPizzaHeaven from '../../assets/icons/banner/banner8.svg';
import IconWokExpress from '../../assets/icons/banner/banner9.svg';
import IconSteakMaster from '../../assets/icons/banner/banner10.svg';
import IconCoffeeBreak from '../../assets/icons/banner/banner11.svg';
// Імпорт аватарок
import AvatarLucas from '../../assets/icons/avatar/Image-36-1.svg';
import AvatarSarah from '../../assets/icons/avatar/Image-36-4.svg';
import AvatarMichael from '../../assets/icons/avatar/Image-36-2.svg';
import AvatarEmma from '../../assets/icons/avatar/Image-36-4.svg';
import AvatarDavid from '../../assets/icons/avatar/Image-36-3.svg';
import AvatarOlivia from '../../assets/icons/avatar/Image-36-4.svg';
import AvatarJames from '../../assets/icons/avatar/Image-36.svg';
import AvatarSophia from '../../assets/icons/avatar/Image-36-4.svg';
import AvatarRobert from '../../assets/icons/avatar/Image-36-1.svg';
import AvatarJennifer from '../../assets/icons/avatar/Image-36-4.svg';

// Мапінг імен до аватарок
const avatarMap: Record<string, string> = {
  'Lucas Nguyen': AvatarLucas,
  'Sarah Johnson': AvatarSarah,
  'Michael Chen': AvatarMichael,
  'Emma Wilson': AvatarEmma,
  'David Kim': AvatarDavid,
  'Olivia Martinez': AvatarOlivia,
  'James Wilson': AvatarJames,
  'Sophia Lee': AvatarSophia,
  'Robert Taylor': AvatarRobert,
  'Jennifer Brown': AvatarJennifer,
  // Українські варіанти імен
  'Лукас Нгуен': AvatarLucas,
  'Сара Джонсон': AvatarSarah,
  'Майкл Чен': AvatarMichael,
  'Емма Вілсон': AvatarEmma,
  'Девід Кім': AvatarDavid,
  'Олівія Мартінес': AvatarOlivia,
  'Джеймс Вілсон': AvatarJames,
  'Софія Лі': AvatarSophia,
  'Роберт Тейлор': AvatarRobert,
  'Дженніфер Браун': AvatarJennifer,
  // Російські варіанти імен
  'Эмма Уилсон': AvatarEmma,
  'Дэвид Ким': AvatarDavid,
  'Оливия Мартинес': AvatarOlivia,
  'Джеймс Уилсон': AvatarJames,
  'София Ли': AvatarSophia,
  'Дженнифер Браун': AvatarJennifer,
};

const companyIconMap: Record<string, string> = {
  // Англійські назви
  'Pizzario': IconPizzario,
  'BurgerHouse': IconBurgerHouse,
  'SushiTime': IconSushiTime,
  'CafeDelight': IconCafeDelight,
  'NoodleBar': IconNoodleBar,
  'TacoFiesta': IconTacoFiesta,
  'PizzaHeaven': IconPizzaHeaven,
  'WokExpress': IconWokExpress,
  'SteakMaster': IconSteakMaster,
  'CoffeeBreak': IconCoffeeBreak,
  
  // Українські назви
  'Піцаріо': IconPizzario,
  'БургерХаус': IconBurgerHouse,
  'СушіТайм': IconSushiTime,
  'КафеДілайт': IconCafeDelight,
  'НудлБар': IconNoodleBar,
  'ТакоФієста': IconTacoFiesta,
  'ПіцаХевен': IconPizzaHeaven,
  'ВокЕкспрес': IconWokExpress,
  'СтейкМастер': IconSteakMaster,
  'КафеБрейк': IconCoffeeBreak,
  
  // Російські назви
  'Пиццарио': IconPizzario,
  'БургерХаус_Рос': IconBurgerHouse, // Renamed to avoid duplicate key
  'СушиТайм': IconSushiTime,
  'КафеДелит': IconCafeDelight,
  'НудлБар_Рос': IconNoodleBar, // Renamed to avoid duplicate key
  'ТакоФиеста': IconTacoFiesta,
  'ПиццаХевен': IconPizzaHeaven,
  'ВокЭкспресс': IconWokExpress,
  'СтейкМастер_Рос': IconSteakMaster, // Renamed to avoid duplicate key
  'КофеБрейк': IconCoffeeBreak
};

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

  // Створюємо масив відгуків з прив'язаними аватарками




 const getCompanyName = (position: string): string => {
  // Список можливих роздільників для різних мов
  const separators = [' at ', ' у ', ' в ', ' en '];
  
  for (const separator of separators) {
    const separatorIndex = position.indexOf(separator);
    if (separatorIndex > -1) {
      const companyName = position.substring(separatorIndex + separator.length).trim();
      
      // Видаляємо можливі крапки в кінці
      return companyName.replace(/\.$/, '');
    }
  }
  
  return position; // Якщо роздільник не знайдено
};

const feedbackItems = data.testimonials.map((testimonial, index) => {
  const rawCompanyName = getCompanyName(testimonial.position);
  
  // Нормалізуємо назву компанії для пошуку в companyIconMap
  const normalizedCompanyName = rawCompanyName
    .replace(/’/g, "'") // Замінюємо різні типи лапок
    .replace(/`/g, "'")
    .replace(/“|”/g, '"')
    .trim();

  console.log(`Position: "${testimonial.position}" → Extracted: "${rawCompanyName}" → Normalized: "${normalizedCompanyName}"`);
  
  return {
    ...testimonial,
    id: index + 1,
    icon: companyIconMap[normalizedCompanyName] || IconPizzario,
    avatar: avatarMap[testimonial.name] || AvatarLucas
  };
});
    const slidesPerView = isMobile ? 1 : isTablet ? 2 : isDesktop ? 4 : 4;
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

// export const feedback = [
//   {
//     id: 1,
//     icon: pizza,
//     text: 'Switching was easy thanks to outstanding support and clear onboarding. We now have a better overview of finances and staff management than ever before.',
//     avatar: Avatar,
//     name: 'Lucas Nguyen',
//     position: 'Operations Manager at Pizzario',
//   },
//   {
//     id: 2,
//     icon: pizza,
//     text: 'Switching was easy thanks to outstanding support and clear onboarding. We now have a better overview of finances and staff management than ever before.',
//     avatar: Avatar1,
//     name: 'Lucas Nguyen',
//     position: 'Operations Manager at Pizzario',
//   },
//   {
//     id: 3,
//     icon: pizza,
//     text: 'Switching was easy thanks to outstanding support and clear onboarding. We now have a better overview of finances and staff management than ever before.',

//     avatar: Avatar2,
//      name: 'Lucas Nguyen',
//     position: 'Operations Manager at Pizzario',
//   },
//   {
//     id: 4,
//     icon: pizza,
//     text: 'Switching was easy thanks to outstanding support and clear onboarding. We now have a better overview of finances and staff management than ever before.',

//     avatar: Avatar3,
//      name: 'Lucas Nguyen',
//     position: 'Operations Manager at Pizzario',
//   },
//   {
//     id: 5,
//     icon: pizza,
//     text: 'Switching was easy thanks to outstanding support and clear onboarding. We now have a better overview of finances and staff management than ever before.',

//     avatar: Avatar4,
//     name: 'Lucas Nguyen',
//     position: 'Operations Manager at Pizzario',
//   },
//   {
//     id: 6,
//     icon: pizza,
//     text: 'Switching was easy thanks to outstanding support and clear onboarding. We now have a better overview of finances and staff management than ever before.',

//     avatar: Avatar1,
//    name: 'Lucas Nguyen',
//     position: 'Operations Manager at Pizzario',
//   },
//   {
//     id: 7,
//     icon: pizza,
//     text: 'Switching was easy thanks to outstanding support and clear onboarding. We now have a better overview of finances and staff management than ever before.',

//     avatar: Avatar,
//       name: 'Lucas Nguyen',
//     position: 'Operations Manager at Pizzario',
//   },
// ];
