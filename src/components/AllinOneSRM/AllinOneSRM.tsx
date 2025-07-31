import React from 'react';
import {
  AllinOneSRMContainer,
  Card,
  CardButton,
  CardButtonContainer,
  CardButtonText,
  CardContainer,
  CardIcon,
  CardText,
  CardTitle,
  MainText,
  MainTextDescription,
  MainTitle,
  StyledNavLink,
} from './AllinOneSRM.styled';
import card1 from '../../assets/icons/cards/card1.png';
import card2 from '../../assets/icons/cards/card2.png';
import icon from '../../assets/icons/cards/Mobile Phone.svg';
import icon1 from '../../assets/icons/cards/Delivery Truck.svg';
import icon2 from '../../assets/icons/cards/Puzzle Piece.svg';
import icon3 from '../../assets/icons/cards/Wrapped Gift.svg';
import icon4 from '../../assets/icons/cards/Sparkles.svg';
import icon5 from '../../assets/icons/cards/Laptop.svg';
import icon6 from '../../assets/icons/cards1/Credit Card.svg';
import icon7 from '../../assets/icons/cards1/OfficeWorkerLightSkinTone.svg';
import icon8 from '../../assets/icons/cards1/White Square Button.svg';
import icon9 from '../../assets/icons/cards1/Shopping Cart.svg';
import icon0 from '../../assets/icons/cards1/Calendar.svg';
import icon11 from '../../assets/icons/cards2/Cooking.svg';
import icon12 from '../../assets/icons/cards2/Toolbox.svg';
import icon13 from '../../assets/icons/cards2/Alarm Clock.svg';
import icon14 from '../../assets/icons/cards2/Open Book.svg';
import card3 from '../../assets/icons/cards2/card3.png';
import card4 from '../../assets/icons/cards/card4.png';
import icon15 from '../../assets/icons/cards3/Package.svg';
import icon16 from '../../assets/icons/cards3/CardFileBox.svg';
import icon17 from '../../assets/icons/cards3/CannedFood.svg';
import icon18 from '../../assets/icons/cards4/Chart Increasing.svg';
import icon19 from '../../assets/icons/cards4/Money Bag.svg';
import icon20 from '../../assets/icons/cards4/CardIndexDividers.svg';
import icon21 from '../../assets/icons/cards4/Brain.svg';
import card5 from '../../assets/icons/cards/card5.png';
import card6 from '../../assets/icons/cards/card6.png';
import icon22 from '../../assets/icons/cards5/Megaphone.svg';
import icon23 from '../../assets/icons/cards5/Framed Picture.svg';
import icon24 from '../../assets/icons/cards5/Test Tube.svg';
import icon25 from '../../assets/icons/cards5/GlobeWithMeridians.svg';
import icon26 from '../../assets/icons/cards5/Label.svg';
import card7 from '../../assets/icons/cards/card7.png';
import icon27 from '../../assets/icons/cards6/Electric Plug.svg';
import icon28 from '../../assets/icons/cards6/Link.svg';
import icon29 from '../../assets/icons/cards6/Satellite Antenna.svg';
import icon30 from '../../assets/icons/cards6/dnk.svg';
import icon31 from '../../assets/icons/cards6/MobilePhoneOff.svg';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const AllinOneSRM: React.FC = () => {
  const { t } = useTranslation();
  const data = t('allInOne', { returnObjects: true }) as {
    mainText: string;
    mainTitle: string;
    description: string;
    cards: Array<{
      title: string;
      text: string;
      buttons: string[];
    }>;
  };

  // Масиви іконок для кнопок
  const buttonIcons = [
    [icon, icon1, icon3, icon2, icon4],
    [icon6, icon7, icon8, icon9, icon0],
    [icon11, icon12, icon13, icon14],
    [icon15, icon16, icon17],
    [icon18, icon19, icon21, icon20],
    [icon22, icon23, icon24, icon25, icon26],
    [icon27, icon28, icon29, icon30, icon31],
  ];

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

  const cardLinks = [
    '/service/customer-experience',
    '/service/pos-staff-operations',
    '/service/kitchen-fulfillment',
    '/service/inventory-warehousing',
    '/service/analytics-management',
    '/service/marketing-customization',
    '/service/integration-scaling',
  ];

  // Масиви зображень для карток
  const cardImages = [card1, card2, card3, card4, card5, card6, card7];

  return (
    <AllinOneSRMContainer style={{ margin: '0 auto' }}>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        {' '}
        <MainText style={{ marginTop: 0, marginBottom: 50 }}>
          {data.mainText}
          <CardButtonText src={icon5} alt="Laptop" />
        </MainText>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <MainTitle style={{ marginTop: 0, marginBottom: 50 }}>
          {data.mainTitle}
        </MainTitle>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        {' '}
        <MainTextDescription>{data.description}</MainTextDescription>
      </motion.div>
      <CardContainer>
        {data.cards.map((card, index) => (
          <StyledNavLink to={cardLinks[index]} key={index}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              <Card
                as={motion.div}
                {...getCardAnimation(index)}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: false, amount: 0.3 }}
                key={index}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.15 }}
                  viewport={{ once: false, amount: 0.3 }}
                >
                  <CardTitle>{card.title}</CardTitle>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.2 }}
                  viewport={{ once: false, amount: 0.3 }}
                >
                  <CardText
                    style={
                      index === 4
                        ? {
                            marginBottom: 240,
                          }
                        : {}
                    }
                  >
                    {card.text}
                  </CardText>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.25 }}
                  viewport={{ once: false, amount: 0.3 }}
                >
                  <CardIcon
                    src={cardImages[index]}
                    alt={card.title}
                    style={
                      index === 2
                        ? {
                            border: 'none',
                            width: '100%',
                            background: 'transparent',
                            overflow: 'visible',
                            backdropFilter: 'none',
                          }
                        : index === 4
                        ? {
                            position: 'absolute',
                            top: '13%',
                            left: '0',
                            borderRadius: 24,
                            height: '84%',
                            width: '100%',
                            objectFit: 'cover',
                            overflow: 'hidden',
                          }
                        : {}
                    }
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.3 }}
                  viewport={{ once: false, amount: 0.3 }}
                >
                  <CardButtonContainer>
                    {card.buttons.map((button, btnIndex) => (
                      <CardButton key={btnIndex}>
                        {button}
                        <CardButtonText
                          src={buttonIcons[index][btnIndex]}
                          alt={button}
                        />
                      </CardButton>
                    ))}
                  </CardButtonContainer>
                </motion.div>
              </Card>
            </motion.div>
          </StyledNavLink>
        ))}
      </CardContainer>
    </AllinOneSRMContainer>
  );
};

export default AllinOneSRM;
