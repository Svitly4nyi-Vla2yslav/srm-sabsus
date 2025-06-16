import React, { useState } from 'react';
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
        tiers: Array<{ name: string; price: string }>;
        features: string[];
        button: string;
        note: string;
        noteList: string[];
        highlight?: boolean;
      }>;
      annually: Array<{
        title: string;
        discount: string;
        tiers: Array<{ name: string; price: string }>;
        features: string[];
        button: string;
        note: string;
        noteList: string[];
        highlight?: boolean;
      }>;
    };
  };

  const currentData = isMonthly ? data.plans.monthly : data.plans.annually;
  const buttonLink = 'https://sabsus.app/';

  return (
    <MasterContainer>
      <MainTextPrice>
        {data.mainText} <CardButtonText src={price} alt="💰" />
      </MainTextPrice>
      <PriceTitle>{data.title}</PriceTitle>
      <PriceText>{data.description}</PriceText>
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
          {currentData.map((plan, index) => (
            <div key={index}>
              <Card highlight={plan.highlight}>
                <CardDiv>
                  <CardH3>{plan.title}</CardH3>
                  <CardSpan>{plan.discount}</CardSpan>
                </CardDiv>

                {plan.tiers.map((tier, tierIndex) => (
                  <Price key={tierIndex}>
                    <PriceP>{tier.name}</PriceP>
                    <PriceCash>
                      {tier.price} <Span>/Month</Span>
                    </PriceCash>
                  </Price>
                ))}

                <a href={buttonLink} target="_blank" rel="noopener noreferrer">
                  <Button highlight={plan.highlight}>{plan.button}</Button>
                </a>
              </Card>
              <Note>{plan.note}</Note>
              {plan.noteList.map((note, noteIndex) => (
                <NoteList key={noteIndex}>
                  <IconCheck src={check} alt="✔️" /> {note}
                </NoteList>
              ))}
            </div>
          ))}
        </CardsContainer>
      </Container>
    </MasterContainer>
  );
};

export default PricePlan;
