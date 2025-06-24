import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import {
  CardButtonText,
  MainTextPrice,
  MasterContainer,
  PriceText,
  PriceTitle,
  Button,
  Card,
  CardsContainer,
  Container,
  Note,
  SwitchContainer,
  Price,
  PriceCash,
  Span,
  CardH3,
  CardSpan,
  CardDiv,
  PriceP,
  NoteList,
  IconCheck,
} from './PricePlan.styled';
import price from '../../assets/icons/price/Money Bag.svg';
import check from '../../assets/icons/price/IconCheck.svg';

const PricePlan: React.FC = () => {
  const { t } = useTranslation();
  const [isMonthly, setIsMonthly] = useState(true);
  const [selectedTier, setSelectedTier] = useState<{
    planIndex: number;
    tierIndex: number;
  } | null>(null);

  const data = t('pricePlan', { returnObjects: true }) as {
    mainText: string;
    title: string;
    description: string;
    switch: {
      monthly: string;
      annually: string;
    };
    plans: {
      monthly: Array<{
        title: string;
        discount: string;
        tiers: Array<{ name: string; price: string; discount: string }>;
        features: string[];
        button: string;
        note: string;
        noteList: string[];
        highlight?: boolean;
      }>;
      annually: Array<{
        title: string;
        discount: string;
        tiers: Array<{ name: string; price: string; discount: string }>;
        features: string[];
        button: string;
        note: string;
        noteList: string[];
        highlight?: boolean;
      }>;
    };
  };

  const currentData = isMonthly ? data.plans.monthly : data.plans.annually;
  const buttonLinks = {
    default: 'https://sabsus.app/registrcompany/web',
    lastButton: 'https://sabsus.app/login/demo@sabsus.com/demo2025',
  };

  const handleTierClick = (planIndex: number, tierIndex: number) => {
    setSelectedTier({
      planIndex,
      tierIndex,
    });
  };

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

  const switchAnimation = {
    hidden: { opacity: 0, scale: 0.9 },
    show: { opacity: 1, scale: 1 },
  };

  return (
    <MasterContainer
      as={motion.div}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.2 }}
    >
      <motion.div variants={itemAnimation}>
        <MainTextPrice>
          {data.mainText} <CardButtonText src={price} alt="💰" />
        </MainTextPrice>
      </motion.div>

      <motion.div variants={itemAnimation}>
        <PriceTitle>{data.title}</PriceTitle>
      </motion.div>

      <motion.div variants={itemAnimation}>
        <PriceText>{data.description}</PriceText>
      </motion.div>

      <Container>
        <SwitchContainer
          $isMonthly={isMonthly}
          as={motion.div}
          variants={switchAnimation}
          transition={{ duration: 0.5 }}
        >
          <button
            onClick={() => setIsMonthly(true)}
            className={isMonthly ? 'active' : ''}
          >
            {data.switch.monthly}
          </button>
          <button
            onClick={() => setIsMonthly(false)}
            className={!isMonthly ? 'active' : ''}
          >
            {data.switch.annually}
          </button>
        </SwitchContainer>

        <CardsContainer
          as={motion.div}
          variants={containerAnimation}
        >
          {currentData.map((plan, planIndex) => {
            const isLastPlan = planIndex === currentData.length - 1;
            const link = isLastPlan
              ? buttonLinks.lastButton
              : buttonLinks.default;

            return (
              <motion.div
                key={planIndex}
                variants={itemAnimation}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Card highlight={plan.highlight}>
                  <CardDiv>
                    <CardH3>{plan.title}</CardH3>
                  </CardDiv>

                  {plan.tiers.map((tier, tierIndex) => (
                    <Price
                      key={tierIndex}
                      as={motion.div}
                      onClick={() => handleTierClick(planIndex, tierIndex)}
                      $isSelected={
                        selectedTier?.planIndex === planIndex &&
                        selectedTier?.tierIndex === tierIndex
                      }
                      whileTap={{ scale: 0.98 }}
                    >
                      <PriceP>{tier.name}</PriceP>
                      <PriceCash>
                        <CardSpan>{tier.discount}</CardSpan>
                        {tier.price} <Span>/Month</Span>
                      </PriceCash>
                    </Price>
                  ))}

                  <a href={link} target="_blank" rel="noopener noreferrer">
                    <Button
                      as={motion.button}
                      highlight={
                        plan.highlight || selectedTier?.planIndex === planIndex
                      }
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {plan.button}
                    </Button>
                  </a>
                </Card>
                <Note>{plan.note}</Note>
                {plan.noteList.map((note, noteIndex) => (
                  <NoteList key={noteIndex}>
                    <IconCheck src={check} alt="✔️" /> {note}
                  </NoteList>
                ))}
              </motion.div>
            );
          })}
        </CardsContainer>
      </Container>
    </MasterContainer>
  );
};

export default PricePlan;