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
        buttonLink: 'https://sabsus.app/',
        note: 'Includes core features:',
        noteList:
          'POS, CRM, delivery, inventory, finance, analytics, support, and updates.',
        noteList1:
          'Suitable for those who want to quickly start using our platform without launching their own application.',
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
        buttonLink: 'https://sabsus.app/',
        note: 'Everything in SaaS, plus:',
        noteList: 'Mobile app for iOS/Android and website under your brand.',
        noteList1:
          'Ideal for restaurants and chains looking to develop their own brand and customer base.',

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
        buttonLink: 'https://sabsus.app/',
        note: 'Everything in White-label, plus:',
        noteList:
          'You receive a lifetime right to use the app and website under your brand. Included: publishing, connecting all modules, databases, CRM, delivery, POS, etc. Hosting, databases, and integrations come under your control. The source code is not transferred.',
        noteList1:
          'Updates are available with an active maintenance subscription. One year of maintenance is free, then $50 per month for updates.',

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
        buttonLink: 'https://sabsus.app/',
        note: 'Includes core features:',
        noteList:
          'POS, CRM, delivery, inventory, finance, analytics, support, and updates.',
        noteList1:
          'Suitable for those who want to quickly start using our platform without launching their own application.',
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
        buttonLink: 'https://sabsus.app/',
        note: 'Everything in SaaS, plus:',
        noteList: 'Mobile app for iOS/Android and website under your brand.',
        noteList1:
          'Ideal for restaurants and chains looking to develop their own brand and customer base.',

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
        buttonLink: 'https://sabsus.app/',
        note: 'Everything in White-label, plus:',
        noteList:
          'You receive a lifetime right to use the app and website under your brand. Included: publishing, connecting all modules, databases, CRM, delivery, POS, etc. Hosting, databases, and integrations come under your control. The source code is not transferred.',
        noteList1:
          'Updates are available with an active maintenance subscription. One year of maintenance is free, then $50 per month for updates.',
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
                <CardDiv>
                  <CardH3>{plan.title}</CardH3>{' '}
                  <CardSpan>{plan.procent}</CardSpan>
                </CardDiv>

                <Price>
                  <PriceP>{plan.price}</PriceP>{' '}
                  <PriceCash>
                    {plan.money} <Span> /Month </Span>
                  </PriceCash>
                </Price>
                <Price>
                  <PriceP>{plan.price1}</PriceP>{' '}
                  <PriceCash>
                    {plan.money1} <Span> /Month </Span>
                  </PriceCash>
                </Price>
                <Price>
                  <PriceP>{plan.price2}</PriceP>{' '}
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
              <NoteList>
                <IconCheck src={check} alt="✔️" /> {plan.noteList}
              </NoteList>
              <NoteList>
                <IconCheck src={check} alt="✔️" /> {plan.noteList1}
              </NoteList>
            </div>
          ))}
        </CardsContainer>
      </Container>
    </MasterContainer>
  );
};

export default PricePlan;
