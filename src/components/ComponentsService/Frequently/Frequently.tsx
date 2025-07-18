import React, { useState } from 'react';
import { styled } from 'styled-components';
import X from '../../../assets/icons/Costomer/Icon-X.svg';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation();

  const toggleAnswer = (index: number) => {
    setActiveIndex(prev => (prev === index ? null : index));
  };

  const frequentlyQuestions = [
    {
      question: t('faqSection.questions.q1.question'),
      answer: t('faqSection.questions.q1.answer'),
    },
    {
      question: t('faqSection.questions.q2.question'),
      answer: t('faqSection.questions.q2.answer'),
    },
    {
      question: t('faqSection.questions.q3.question'),
      answer: t('faqSection.questions.q3.answer'),
    },
    {
      question: t('faqSection.questions.q4.question'),
      answer: t('faqSection.questions.q4.answer'),
    },
    {
      question: t('faqSection.questions.q5.question'),
      answer: t('faqSection.questions.q5.answer'),
    },
    {
      question: t('faqSection.questions.q6.question'),
      answer: t('faqSection.questions.q6.answer'),
    },
    {
      question: t('faqSection.questions.q7.question'),
      answer: t('faqSection.questions.q7.answer'),
    },
    {
      question: t('faqSection.questions.q8.question'),
      answer: t('faqSection.questions.q8.answer'),
    },
    {
      question: t('faqSection.questions.q9.question'),
      answer: t('faqSection.questions.q9.answer'),
    },
    {
      question: t('faqSection.questions.q10.question'),
      answer: t('faqSection.questions.q10.answer'),
    },
    {
      question: t('faqSection.questions.q11.question'),
      answer: t('faqSection.questions.q11.answer'),
    },
    {
      question: t('faqSection.questions.q12.question'),
      answer: t('faqSection.questions.q12.answer'),
    },
    {
      question: t('faqSection.questions.q13.question'),
      answer: t('faqSection.questions.q13.answer'),
    },
    {
      question: t('faqSection.questions.q14.question'),
      answer: t('faqSection.questions.q14.answer'),
    },
    {
      question: t('faqSection.questions.q15.question'),
      answer: t('faqSection.questions.q15.answer'),
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
          <FrequentlyTitle>{t('faqSection.title')}</FrequentlyTitle>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <FrequentlyText>{t('faqSection.subtitle')}</FrequentlyText>
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
