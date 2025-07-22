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
  @media screen and (min-width: 768px) {
    margin-top: -600px;
  }

    @media screen and (min-width: 1440px) {

    
  }
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
    {
      id: '1',
      text: 'Discovery first',
      description:
        'We immerse in your business — goals, audience, workflows, and pain points. This phase uncovers the real value your product should deliver. Together, we shape hypotheses, identify constraints, and define what’s important for launch or growth.',
    },
    {
      id: '2',
      text: 'Clear project scope',
      description:
        'We avoid vague promises. Instead, we outline a clear scope of work, define expected outcomes for each phase, and set transparent timelines. This reduces uncertainty, helps you plan confidently, and ensures alignment from the first screen to the final test.',
    },
    {
      id: '3',
      text: 'Collaborative prototyping',
      description:
        'We don’t hide behind final mockups. Fast, clickable prototypes let you evaluate structure, logic, and user flow early on — before design even starts. This saves time, sharpens the vision, and gives your team clarity before development begins.',
    },
    {
      id: '4',
      text: 'Weekly syncs',
      description:
        'Our process is built on transparency. We run regular check-ins, demos, and updates to keep you informed. You’ll always have access to current tasks, open questions, and next steps. You’re never guessing — you’re involved.',
    },
    {
      id: '5',
      text: 'Business-driven design',
      description:
        'Every design decision is backed by logic. We focus on real business goals, not just aesthetics. Whether it’s conversions, retention, or operational efficiency — we design with your KPIs in mind.',
    },
    {
      id: '6',
      text: 'Adaptive flexibility',
      description:
        'Plans change. Markets shift. We’ve built adaptability into our process. If your priorities evolve, we adjust quickly while maintaining focus and structure — without losing momentum.',
    },
    {
      id: '7',
      text: 'Quality first',
      description:
        'What we deliver isn’t a draft — it’s production-ready. Every component is checked against design systems, behavior logic, and visual consistency. We think about readability, handoff, micro-interactions, and defend decisions with reason.',
    },
    {
      id: '8',
      text: 'Long-term support',
      description:
        'We don’t disappear after launch. We stick around to refine the product, run A/B tests, track analytics, and support ongoing iterations. We’re in this not for a handoff — but for long-term growth.',
    },
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

  return (
    <HowWeWorkWrapper>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <HowWeWorkMainText>
          {t('howWeWorkSection.header.title')}{' '}
          <HowSpanIcon src={rocket} alt="Icon" />
        </HowWeWorkMainText>
      </motion.div>
      <HowWeWorkMainid
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        Our approach is built on transparency, speed, and care
      </HowWeWorkMainid>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <HowWeWorkMainTextDescription>
          We deliver designs as part of your team, diving into goals, solving
          problems, and building value. Here’s how our collaboration unfolds:
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
              {' '}
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
                <CardText>{card.text}</CardText>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.25 }}
                viewport={{ once: false, amount: 0.3 }}
              >
                <CardDescription>{card.description}</CardDescription>
              </motion.div>{' '}
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
