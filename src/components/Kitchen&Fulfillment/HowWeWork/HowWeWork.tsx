import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';
import rocket from '../../../assets/icons/Costomer/Rocket.png';
import { useTranslation } from 'react-i18next';

export const HowWeWorkWrapper = styled.div`
  display: flex;
  margin: 0 auto;
  // margin-top: 100px;
  width: 100%;
  height: 100%;
  margin-bottom: 100px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HowWeWorkMainText = styled(motion.p)`
  margin: 0 auto;
  border-radius: 24px;
  padding: 4px 4px 4px 14px;
  width: max-content;
  height: 28px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
  margin-top: 50px;
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 12px;
  color: var(--white-100);
  backdrop-filter: blur(16px);
  box-shadow:
    inset 0 -8px 24px 0 rgba(255, 255, 255, 0.03),
    inset 0 -5px 6px 0 rgba(255, 255, 255, 0.03),
    0 8px 16px -8px rgba(0, 0, 0, 0.03),
    0 2px 4px -2px rgba(0, 0, 0, 0.08);
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.12) 7%,
    rgba(255, 255, 255, 0) 86%
  );
  align-items: center;
  will-change: transform, opacity; /* Оптимізація анімації */

  @media screen and (min-width: 768px) {
    /* Додаткові стилі для планшетів */
  }

  @media screen and (min-width: 1440px) {
    /* Додаткові стилі для десктопів */
  }
`;

export const HowWeWorkMainid = styled(motion.h2)`
  font-family: var(--font-family);
  font-weight: 600;
  font-size: 36px;
  line-height: 110%;
  text-align: center;
  color: var(--white-100);
  margin-bottom: 16px;
  will-change: transform, opacity;

  @media screen and (min-width: 768px) {
    font-size: 44px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 800px;
    width: 100%;
    margin: 0 auto 26px;
  }
`;

export const HowWeWorkMainTextDescription = styled(motion.p)`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 16px;
  text-align: center;
  color: var(--white-80);
  margin-bottom: 56px;
  will-change: transform, opacity;

  @media screen and (min-width: 768px) {
    font-size: 17px;
    line-height: 130%;
  }

  @media screen and (min-width: 1440px) {
    max-width: 800px;
    width: 100%;
    margin: 0 auto 26px;
  }
`;

export const HowSpanIcon = styled.img`
  border-radius: 25px;
  padding: 4px;
  overflow: visible;
  font-size: 13px;
  width: 20px;
  margin-left: 6px;

  box-shadow:
    inset 0 -8px 24px 0 rgba(255, 255, 255, 0.18),
    inset 0 -5px 6px 0 rgba(255, 255, 255, 0.03),
    0 4px 8px rgba(0, 0, 0, 0.08),
    0 1px 2px rgba(0, 0, 0, 0.06);

  background: linear-gradient(
      315deg,
      rgba(122, 121, 122, 0) 7%,
      rgba(172, 172, 172, 0) 86%
    )
    rgba(255, 255, 255, 0.03);

  -webkit-transform: translateZ(0);
`;

export const HowWeWorkContainer = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;

  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    width: 100vw;
    // gap: 24px;
    padding: 0 24px;
    position: relative;

    /* Вертикальні бордери між картками */
    &::before {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      left: 50%;
      width: 1px;
      // background-color: rgba(255, 255, 255, 0.25);
      transform: translateX(-50%);
    }

    /* Горизонтальні бордери між рядами */
    &::after {
      content: '';
      position: absolute;
      left: 2%;
      right: 0;
      bottom: 0;
      height: 1px;
      width: 96%;
      background-color: rgba(255, 255, 255, 0.25);
    }

    /* Індивідуальні ширини для карток на планшеті */
    & > :nth-child(1) {
      width: 80%; /* Перша картка менша на 20% */
    }
    & > :nth-child(2) {
      width: 120%; /* Друга картка більша */
      margin-left: -20%; /* Зсуваємо для вирівнювання */
    }
    & > :nth-child(3) {
      width: 120%; /* Третя картка більша */
    }
    & > :nth-child(4) {
      width: 80%; /* Четверта картка менша */
      margin-left: 20%; /* Зсуваємо для вирівнювання */
    }
    /* Продовжуємо шаблон для решти карток */
    & > :nth-child(5) {
      width: 80%;
    }
    & > :nth-child(6) {
      width: 120%;
      margin-left: -20%;
    }
    & > :nth-child(7) {
      width: 120%;
    }
    & > :nth-child(8) {
      width: 80%;
      margin-left: 20%;
    }
  }

  @media screen and (min-width: 1440px) {
    display: grid;
    grid-template-columns: repeat(
      3,
      minmax(0, 1fr)
    ); /* Додано minmax для правильного розподілу простору */
    grid-template-rows: auto auto auto;
    max-width: 1400px;
    width: 100%;
    margin: 0 auto;
    padding: 0 20px; /* Додаємо падінги по боках */
    box-sizing: border-box; /* Щоб падінги враховувались у загальній ширині */

    /* Прибираємо бордери для десктопу */
    &::before,
    &::after {
      // display: none;
    }

    /* Скидаємо ширини для десктопу */
    & > * {
      width: auto !important;
      margin-left: 0 !important;
    }

    /* Розміщення карток для десктопу з бордерами */
    & > :nth-child(1) {
      grid-column: 1;
      border-right: 1px solid rgba(255, 255, 255, 0.25) !important; /* Бордер праворуч */
    }
    & > :nth-child(2) {
      grid-column: 2;
      border-right: 1px solid rgba(255, 255, 255, 0.25); /* Бордер праворуч */
    }
    & > :nth-child(3) {
      grid-column: 3;
      /* Без бордера праворуч (остання в рядку) */
    }
    & > :nth-child(4) {
      grid-column: 1;
      width: 151% !important; /* Широка картка */
      //?  margin-left: 53%!important; /* Зсуваємо для вирівнювання */
      border-right: 1px solid rgba(255, 255, 255, 0.25) !important; /* Прибираємо бордер для широкої картки */
    }
    & > :nth-child(5) {
      grid-column: 2;
      width: 151% !important; /* Широка картка */
      margin-left: 51% !important; /* Зсуваємо для вирівнювання */
      border: none; /* Бордер праворуч */
    }
    & > :nth-child(6) {
      grid-column: 1;
      border-right: 1px solid rgba(255, 255, 255, 0.25); /* Бордер праворуч */
    }
    & > :nth-child(7) {
      grid-column: 2;
      border-right: 1px solid rgba(255, 255, 255, 0.25) !important; /* Бордер праворуч */
    }
    & > :nth-child(8) {
      grid-column: 3;
      /* Без бордера */
    }
  }
`;

export const Card = styled(motion.div)`
  padding: 16px;
  width: 100%;
  height: fit-content;
  display: flex;
  gap: 4px;
  flex-direction: column;
  position: relative;

  /* Бордер для мобільної версії */
  &:not(:last-child)::after {
    content: '';
    position: absolute;
    bottom: -12px;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: rgba(255, 255, 255, 0.25);
  }

  @media screen and (min-width: 768px) {
    padding: 32px;
    height: 100%;

    /* Прибираємо бордери між картками для планшета */
    &::after {
      top: 0%;
      // display: none;
    }

    /* Додаткові бордери для окремих карток */
    &:nth-child(odd) {
      border-right: 1px solid rgba(255, 255, 255, 0.25);
    }
    &:nth-child(even) {
      border-left: 1px solid rgba(255, 255, 255, 0.25);
    }
  }

  @media screen and (min-width: 1440px) {
    &:nth-child(odd) {
      border-right: none;
    }
    &:nth-child(even) {
      border-left: none;
    }
  }
`;

export const CardNumber = styled(motion.p)`
  border-radius: 6px;
  padding: 6px 13px;
  width: 36px;
  height: 36px;
  margin: 10px 0px;
  backdrop-filter: blur(16px);
  box-shadow:
    0 8px 16px -8px rgba(0, 0, 0, 0.03),
    0 2px 4px -2px rgba(0, 0, 0, 0.08),
    inset 0 -8px 24px 0 rgba(255, 255, 255, 0.03),
    inset 0 -5px 6px 0 rgba(255, 255, 255, 0.03);
  background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.12) 7%,
      rgba(255, 255, 255, 0) 86%
    ),
    rgba(255, 255, 255, 0.03);

  font-family: var(--font-family);
  font-weight: 400;
  font-size: 18px;
  line-height: 130%;
  color: var(--white-100);

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const CardText = styled(motion.p)`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 18px;
  line-height: 130%;
  color: var(--white-100);
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const CardDescription = styled(motion.p)`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 16px;
  color: var(--white-80);
  @media screen and (min-width: 768px) {
    font-size: 17px;
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const VerticalDivider = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    display: flex;
    background-color: rgba(255, 255, 255, 0.25);
    width: 1px;
    height: 100%;
  }
`;

export const MobileDivider = styled.div`
  position: absolute;
  width: 100vw;
  height: 1px;
  // background-color: rgba(255, 255, 255, 0.25);

  @media screen and (min-width: 768px) {
    // display: none;
    width: 100vw;
    height: 1px;
    margin: 0 auto;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const HowWeWork: React.FC = () => {
  const { t } = useTranslation();

  const cards = [
    { id: '1', key: 'instantOrderProcessing' },
    { id: '2', key: 'multiModeOrderTypes' },
    { id: '3', key: 'dynamicTableManagement' },
    { id: '4', key: 'shiftStaffTracking' },
    { id: '5', key: 'qrPaymentsDeposits' },
    { id: '6', key: 'kitchenPrinterRouting' },
    { id: '7', key: 'onTheFlyMenuUpdates' },
    { id: '8', key: 'endOfShiftReports' },
  ];

  const getCardAnimation = (index: number) => {
    switch (index) {
      case 0:
        return {
          initial: { x: -100, opacity: 0 },
          whileInView: { x: 0, opacity: 1 },
        };
      case 1:
        return {
          initial: { x: 100, opacity: 0 },
          whileInView: { x: 0, opacity: 1 },
        };
      case 2:
        return {
          initial: { x: -100, opacity: 0 },
          whileInView: { x: 0, opacity: 1 },
        };
      case 3:
        return {
          initial: { scale: 0.5, opacity: 0 },
          whileInView: { scale: 1, opacity: 1 },
        };
      case 4:
        return {
          initial: { x: 100, opacity: 0 },
          whileInView: { x: 0, opacity: 1 },
        };
      case 5:
        return {
          initial: { x: -100, opacity: 0 },
          whileInView: { x: 0, opacity: 1 },
        };
      case 6:
        return {
          initial: { x: 100, opacity: 0 },
          whileInView: { x: 0, opacity: 1 },
        };
      default:
        return { initial: { opacity: 0 }, whileInView: { opacity: 1 } };
    }
  };

  return (
    <HowWeWorkWrapper>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <HowWeWorkMainText>
          {t('howWeWorkSection2.title')} <HowSpanIcon src={rocket} alt="Icon" />
        </HowWeWorkMainText>
      </motion.div>
      <HowWeWorkMainid
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        {t('howWeWorkSection2.heading')}
      </HowWeWorkMainid>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <HowWeWorkMainTextDescription>
          {t('howWeWorkSection2.description')}
        </HowWeWorkMainTextDescription>
      </motion.div>
      <HowWeWorkContainer>
        {cards.map((card, index) => (
          <React.Fragment key={index}>
            <Card
              as={motion.div}
              {...getCardAnimation(index)}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <MobileDivider />
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.15 }}
                viewport={{ once: false, amount: 0.3 }}
              >
                <CardNumber>{card.id}</CardNumber>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.2 }}
                viewport={{ once: false, amount: 0.3 }}
              >
                <CardText>
                  {t(`howWeWorkSection2.cards.${card.key}.title`)}
                </CardText>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.25 }}
                viewport={{ once: false, amount: 0.3 }}
              >
                <CardDescription>
                  {t(`howWeWorkSection2.cards.${card.key}.desc`)}
                </CardDescription>
              </motion.div>
              <MobileDivider />
            </Card>
          </React.Fragment>
        ))}
        <VerticalDivider />
      </HowWeWorkContainer>
    </HowWeWorkWrapper>
  );
};

export default HowWeWork;
