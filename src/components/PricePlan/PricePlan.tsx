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
import { usePricingData } from '../../firebase';
import LoadingScreen from '../LoadingScreen';
import ErrorScreen from '../ErrorScreen';

const PricePlan: React.FC = () => {
  const { t } = useTranslation();
  const [isMonthly, setIsMonthly] = useState(false); // за замовчуванням річна підписка
  const [selectedTier, setSelectedTier] = useState<{
    planIndex: number;
    tierIndex: number;
  } | null>(null);

  const data = t('pricePlan', { returnObjects: true }) as any;
  // const currentData = isMonthly ? data.plans.monthly : data.plans.annually;

  const {
    pricingData: currentData,
    loading,
    error,
  } = usePricingData(isMonthly);
  
  if (loading) return <LoadingScreen />;
  if (error) return <ErrorScreen message={error} />;

  const generateLink = (planIndex: number, tierIndex: number): string => {
    if (planIndex === 2)
      return 'https://sabsus.app/login/demo@sabsus.com/demo2025';

    const isWhite = planIndex === 1;
    const whiteNames = ['whitestart', 'whitestandart', 'whitebusiness'];
    const saasNames = ['saasstart', 'saasstandart', 'saasbusiness'];
    const nameArray = isWhite ? whiteNames : saasNames;

    const base = 'https://sabsus.app/registrcompany/web/';
    return base + nameArray[tierIndex];
  };

  const handleTierClick = (planIndex: number, tierIndex: number) => {
    setSelectedTier({ planIndex, tierIndex });
  };

  return (
    <MasterContainer
      as={motion.div}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.2 }}
    >
      <motion.div>
        <MainTextPrice >
          {data.mainText} <CardButtonText src={price} alt="💰" />
        </MainTextPrice>
      </motion.div>

      <motion.div>
        <PriceTitle>{data.title}</PriceTitle>
      </motion.div>
      <motion.div>
        <PriceText>{data.description}</PriceText>
      </motion.div>

      <Container>
        <SwitchContainer $isMonthly={isMonthly}>
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

        <CardsContainer>
          {currentData.map((plan: any, planIndex: number) => (
            <motion.div
              key={planIndex}
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              <Card highlight={plan.highlight}>
                <CardDiv>
                  <CardH3>{plan.title}</CardH3>
                </CardDiv>

                {plan.tiers.map((tier: any, tierIndex: number) => (
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
                      {tier.price}{' '}
                      <Span>
                        {!plan.highlight ? (
                          '/Month'
                        ) : (
                          <span style={{ color: 'transparent' }}>/Month</span>
                        )}
                        <CardSpan>{tier.discount}</CardSpan>
                      </Span>
                    </PriceCash>
                  </Price>
                ))}

                <a
                  href={generateLink(planIndex, selectedTier?.tierIndex ?? 0)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
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
              {plan.noteList.map((note: string, noteIndex: number) => (
                <NoteList key={noteIndex}>
                  <IconCheck src={check} alt="✔️" /> {note}
                </NoteList>
              ))}
            </motion.div>
          ))}
        </CardsContainer>
      </Container>
    </MasterContainer>
  );
};

export default PricePlan;
