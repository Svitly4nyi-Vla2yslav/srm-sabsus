import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import {
  BackroundGradient,
  ContainerStart,
  StartText,
  StartTitle,
} from './StartSmall.styled';
import {
  ButtonContainer,
  HeroButton,
  HeroButtonGrey,
} from '../Hero/Hero.styled';

const StartSmall: React.FC = () => {
  const { t } = useTranslation();
  const buttonDemo = 'https://sabsus.app/login/demo@sabsus.com/demo2025';
  const buttonStarted = 'https://sabsus.app/registrcompany/web';

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

  return (
    <ContainerStart
      as={motion.div}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.2 }}
      variants={containerAnimation}
    >
      <StartTitle as={motion.h2} variants={itemAnimation}>
        {t('startSmall.title')}
      </StartTitle>
      <StartText as={motion.p} variants={itemAnimation}>
        {t('startSmall.text')}
      </StartText>
      <ButtonContainer as={motion.div} variants={itemAnimation}>
        <a href={buttonStarted} target="_blank" rel="noopener noreferrer">
          <HeroButton
            as={motion.button}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            {t('startSmall.buttons.getStarted')}
          </HeroButton>
        </a>
        <a href={buttonDemo} target="_blank" rel="noopener noreferrer">
          <HeroButtonGrey
            as={motion.button}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            {t('startSmall.buttons.viewDemo')}
          </HeroButtonGrey>
        </a>
      </ButtonContainer>
      <BackroundGradient
        as={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1.5 }}
      />
    </ContainerStart>
  );
};

export default StartSmall;
