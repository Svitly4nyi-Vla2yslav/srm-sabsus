import React, { useState } from 'react';
import { styled } from 'styled-components';
import X from '../../../assets/icons/Costomer/Icon-X.svg';
import { motion } from 'framer-motion';

const FrequentlyWrapper = styled.div`
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
  @media screen and (min-width: 1440px) {
    width: 100%;
    max-width: 1400px;

    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: flex-start;
    gap: 2px;
  }
`;

const FrequentlyTitle = styled.h2`
  font-family: var(--font-family);
  font-weight: 600;
  font-size: 36px;
  line-height: 110%;
  text-align: center;
  margin-bottom: 26px;
  color: var(--white-100);
`;

const FrequentlyText = styled.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 16px;
  text-align: center;
  color: var(--white-80);
  margin-bottom: 26px;
`;

const QuestionItem = styled.div`
  position: relative;
  border: 1px solid var(--line);
  padding: 16px;
  width: 343px;
  display: flex;
  flex-direction: column;
  gap: none;
  // height: 271px;
  overflow: hidden;
  box-shadow:
    0 0 0 0 var(--white),
    0 0 0 1px rgba(244, 244, 245, 0.1),
    0 0 0 0 rgba(0, 0, 0, 0),
    0 6px 9px 0 rgba(0, 0, 0, 0.25);
  transition:
    box-shadow 0.4s ease,
    border 0.4s ease;
  border-bottom: 1px solid var(--white-25);

  &:hover {
    border-bottom: 1px solid var(--white-25);
    // border-radius: 16px;
    text-shadow: 0 0 12px rgba(255, 255, 255, 0.3);
  }

  @media screen and (min-width: 744px) {
    width: 696px;
  }

  @media screen and (min-width: 1440px) {
    width: 100%;
    max-width: 650px;
  }
`;

export const QuestionButton = styled.button`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;

  border: none;
  border-radius: 16px;
  padding: 14px;
  width: 100%;
  height: auto;
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 20px;
  line-height: 130%;
  color: var(--white-100);
  text-align: left;
  background: transparent;

  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    text-shadow: 0 0 12px rgba(255, 255, 255, 0.5);
  }

  @media screen and (min-width: 744px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;

interface AnswerTextProps {
  $isOpen: boolean;
}

export const AnswerText = styled.div<AnswerTextProps>`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 16px;
  color: var(--white-80);
  transform: scaleY(${({ $isOpen }) => ($isOpen ? 1 : 0)});
  transform-origin: top;
  height: auto;
  max-height: ${({ $isOpen }) => ($isOpen ? '1000px' : '0')};
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  overflow: hidden;
  transition:
    transform 0.4s ease,
    opacity 0.3s ease,
    max-height 0.4s ease;
  margin-top: ${({ $isOpen }) => ($isOpen ? '12px' : '0')};
  will-change: transform, opacity, max-height;

  @media screen and (min-width: 744px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;

interface XIconStyledProps {
  $rotate?: boolean;
}

export const XIcon = styled.img.attrs<XIconStyledProps>(
  () => ({})
)<XIconStyledProps>`
  width: 14px;
  height: 15px;
  transition: transform 0.6s ease;

  ${({ $rotate }) =>
    $rotate &&
    `
        transform: rotate(136deg);
      `}

  @media screen and (min-width: 744px) {
  }

  @media screen and (min-width: 1440px) {
  }
`;

const Container = styled.div`
  @media screen and (min-width: 1440px) {
    min-width: 650px;
    width: 100%;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    flex-wrap: nowrap;
  }
`;

const ContentContainer = styled.div`
  @media screen and (min-width: 1440px) {
    width: 100%;
    max-width: 650px;

    flex-shrink: 0; /* Забороняємо звуження */
  }
`;

const Frequently: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const toggleAnswer = (index: number) => {
    setActiveIndex(prev => (prev === index ? null : index));
  };

  const frequentlyQuestions = [
    {
      question: 'What is SABSUS and what does it include?',
      answer:
        'SABSUS is an all-in-one ecosystem for restaurants, cafés, bakeries, dark kitchens, and retail.Included in every plan:\n\n POS system \n\n CRM & loyalty \n\n Warehouse & ingredients management \n\n Delivery with zone pricing \n\n Finances, tips, salaries \n\n Real-time analytics & reports \n\n Order tracking & table layout \n\n Cloud infrastructure + multilingual support \n\n Web and mobile apps',
    },
    {
      question: 'Do I need to install any hardware?',
      answer:
        'No. SABSUS runs in any browser and on any device:\n\nTablets (Android/iOS) \n\n Desktops, POS terminals \n\n Smartphones:\n\n All interfaces are responsive and touch-optimized.',
    },
    {
      question: 'How is SABSUS different from other POS/CRM solutions?',
      answer:
        'Most systems give you 1–2 modules. We give you everything:\n\n Full cycle from order to delivery \n\n Loyalty, feedback, barcode scanner \n\n Promotions, staff salaries, table maps \n\n Multi-language interfaces + AI-translations \n\n App + website under your brand (white-label option) \n\n No hidden fees, no commissions (unless you choose them).',
    },
    {
      question: 'What’s the difference between SaaS and White-label plans?',
      answer:
        'SaaS Subscription  White-label Subscription \n\n Works under SABSUS brand  Branded app & website \n\n $89–289/mo  $249–899/mo \n\n No app store presence  Published on App Store & Google Play \n\n Common server  Separate server & database',
    },
    {
      question: 'Can I buy the app instead of subscribing?',
      answer:
        'Yes. You can fully buy out the white-label app without any subscription.\n\n What you get: \n\n Lifetime license \n\n 1 year of updates and support \n\n Full control of your database & integrations \n\n $50/month optional maintenance after 1 year \n\n Prices start from: \n\n $14,000 (1 venue, 1 language) \n\n $25,000 (up to 3 venues, 2 languages)\n\n$35,000 (up to 10 venues, all languages)',
    },
    {
      question: 'Are future updates included in the lifetime model?',
      answer:
        'Yes — the first year is included.\n\n After that, updates and support are available at a fixed price of $50/month.\n\n You are not forced to update if you don’t want to.',
    },
    {
      question: 'Can I migrate my existing data from other POS/CRM systems?',
      answer:
        'Yes. We provide data import tools or help you migrate from systems like Square, Toast, Loyverse, Poster, iiko, and others.',
    },
    {
      question: 'What languages are supported?',
      answer:
        'Currently: \n\n ✅ English \n\n ✅ Spanish \n\n ✅ Russian \n\n ✅ Ukrainian \n\n The system auto-switches based on user preference. White-label apps can be locked to 1–4 languages depending on plan.',
    },
    {
      question: 'How do I manage multiple locations or brands?',
      answer:
        'SABSUS is built for this: \n\nCentralized dashboards \n\nCustom tax & menu per location \n\nAnalytics and staff per venue \n\n Inventory sync with separate warehouse settings \n\n You can manage 1 to 100+ venues easily.',
    },
    {
      question: 'What is the refund policy?',
      answer:
        'Monthly subscriptions can be canceled anytime. \n\nApp buyout and branding fees are non-refundable (as they include custom development, publication, and assets). \n\nWe recommend starting with a demo or 1-month subscription first.',
    },
    {
      question: 'How secure is my data?',
      answer:
        'Hosted on Google Cloud / Supabase \n\nEncrypted backups \n\nStaff logs & permission controls \n\nGDPR/SOC2-ready infrastructure \n\nYou control your database (in white-label or buyout mode)',
    },
    {
      question: 'What if my internet goes down?',
      answer:
        'SABSUS supports offline mode for POS operations. \n\nOrders and receipts sync automatically when the network is restored.',
    },
    {
      question: 'Do you offer custom development or API access?',
      answer:
        'Yes: \n\nAPI available in white-label & buyout plans \n\nIntegration with Stripe, Telegram, Uber Eats, Google Maps, etc. \n\nYou can request features or pay for custom modules',
    },
    {
      question:
        'Can I connect external printers, card readers, or delivery aggregators?',
      answer:
        'Yes.\n\n Supported: \n\nStar, Epson, Sunmi, Payoneer, Stripe Terminals \n\nUber Eats (ready), Doordash (coming) \n\nSMS, email, and push integrations built-in',
    },
    {
      question: 'How do I get started?',
      answer:
        'Choose your model: \n\n SaaS? → Start your subscription now \n\nWhite-label? → Submit brand + logo \n\nWant to buy it all? → Contact sales for one-time payment & ownership \n\nWe’ll take care of setup, publication, and onboarding.',
    },
  ];

  return (
    <FrequentlyWrapper>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <FrequentlyTitle>Frequently asked questions</FrequentlyTitle>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <FrequentlyText>
            You’ve got questions. We’ve got honest answers.
          </FrequentlyText>
        </motion.div>
      </Container>

      <ContentContainer>
        {frequentlyQuestions.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: index % 2 === 0 ? 40 : -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <QuestionItem>
              <QuestionButton onClick={() => toggleAnswer(index)}>
                {item.question}
                <XIcon
                  src={X}
                  alt="Toggle answer"
                  $rotate={activeIndex === index}
                />
              </QuestionButton>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={
                  activeIndex === index
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.9 }
                }
                transition={{ duration: 0.4 }}
                style={{ overflow: 'hidden' }}
              >
                <AnswerText $isOpen={activeIndex === index}>
                  {item.answer}
                </AnswerText>
              </motion.div>
            </QuestionItem>
          </motion.div>
        ))}
      </ContentContainer>
    </FrequentlyWrapper>
  );
};

export default Frequently;
