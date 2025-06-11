import React, { useState } from 'react';
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
} from './PricePlan.styled';
import price from '../../assets/icons/price/Money Bag.svg';

const PricePlan: React.FC = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  const pricingData = {
    monthly: [
      {
        title: 'SaaS model',
        procent: '-40%',
        price: 'Start 1',
        price1: 'Standard up to 3',
        price2: 'Business up to 10',
        money: '$89',
        money1: '$149',
        money2: '$289',
        features: ['1 project', 'Basic support', 'Community access'],
        buttonLink: 'https://example.com/starter',
        note: 'Best for individuals getting started.',
        button: 'Get Started',
      },
      {
        title: 'White-label',
        procent: '-40%',
        price: 'White Start 1',
        price1: 'White Standard',
        price2: 'White Business',
        money: '$249',
        money1: '$499',
        money2: '$899',
        features: ['5 projects', 'Priority support', 'Team access'],
        buttonLink: 'https://example.com/pro',
        note: 'Ideal for small teams scaling up.',
        button: 'Try 14 Days Free',
      },
      {
        title: 'White-label buyout',
        procent: '-32%',
        price: '1 firm',
        price1: 'Up to 3 firms',
        price2: 'Up to 5–10 firms',
        money: '$14,000',
        money1: '$25,000',
        money2: '$35,000',
        features: ['Unlimited projects', '24/7 support', 'Custom solutions'],
        buttonLink: 'https://example.com/enterprise',
        note: 'Tailored for large companies and agencies.',
        highlight: true,
        button: 'Request Demo',
      },
    ],
    annually: [
      {
        title: 'SaaS model',
        procent: '-30%',
        price: 'Start 1',
        price1: 'Standard up to 3',
        price2: 'Business up to 10',
        money: '$89',
        money1: '$149',
        money2: '$289',
        features: ['1 project', 'Basic support', 'Community access'],
        buttonLink: 'https://example.com/starter-annual',
        note: 'Save 20% by paying annually.',
        button: 'Get Started',
      },
      {
        title: 'White-label',
        procent: '-30%',
        price: 'White Start 1',
        price1: 'White Standard',
        price2: 'White Business',
        money: '$249',
        money1: '$499',
        money2: '$899',
        features: ['5 projects', 'Priority support', 'Team access'],
        buttonLink: 'https://example.com/pro-annual',
        note: 'Most popular plan for small teams.',
        button: 'Try 14 Days Free',
      },
      {
        title: 'White-label buyout',
        procent: '-22%',
        price: '1 firm',
        price1: 'Up to 3 firms',
        price2: 'Up to 5–10 firms',
        money: '$14,000',
        money1: '$25,000',
        money2: '$35,000',
        features: ['Unlimited projects', '24/7 support', 'Custom solutions'],
        buttonLink: 'https://example.com/enterprise-annual',
        note: 'Designed for enterprise-scale use.',
        highlight: true,
        button: 'Request Demo',
      },
    ],
  };

  const currentData = isMonthly ? pricingData.monthly : pricingData.annually;
  return (
    <MasterContainer>
      <MainTextPrice>
        Pricing Plans <CardButtonText src={price} alt="💰" />
      </MainTextPrice>
      <PriceTitle>Flexible for startups. Scalable for enterprise</PriceTitle>
      <PriceText>
        No hidden fees. No hardware lock-ins. Launch for free, scale on demand,
        or fully own your ecosystem under your brand.
      </PriceText>
      <Container>
        <SwitchContainer>
          <button
            onClick={() => setIsMonthly(true)}
            className={isMonthly ? 'active' : ''}
          >
            Pay Monthly
          </button>
          <button
            onClick={() => setIsMonthly(false)}
            className={!isMonthly ? 'active' : ''}
          >
            Pay Annually
          </button>
        </SwitchContainer>

        <CardsContainer>
          {currentData.map((plan, index) => (
            <div key={index}>
              <Card key={index} highlight={plan.highlight}>
                <div>
                  <h3>{plan.title}</h3> <span>{plan.procent}</span>
                </div>

                <Price>
                  <p>{plan.price}</p>{' '}
                  <PriceCash>
                    {plan.money} <Span> /Month </Span>
                  </PriceCash>
                </Price>
                <Price>
                  <p>{plan.price1}</p>{' '}
                  <PriceCash>
                    {plan.money1} <Span> /Month </Span>
                  </PriceCash>
                </Price>
                <Price>
                  <p>{plan.price2}</p>{' '}
                  <PriceCash>
                    {plan.money2} <Span> /Month </Span>
                  </PriceCash>
                </Price>

                <a
                  href={plan.buttonLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button highlight={plan.highlight}>{plan.button}</Button>
                </a>
              </Card>{' '}
              <Note>{plan.note}</Note>
            </div>
          ))}
        </CardsContainer>
      </Container>
    </MasterContainer>
  );
};

export default PricePlan;
