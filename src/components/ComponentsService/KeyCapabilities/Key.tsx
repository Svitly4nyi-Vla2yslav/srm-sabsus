import React from 'react';
import {
  ResultMainText,
  ResultMainTextDescription,
  ResultMainTitle,
} from '../../ResultsFromBusinesses/ResultsFromBusinesses.styled';
import { motion } from 'framer-motion';
import { CardButtonText } from '../../AllinOneSRM/AllinOneSRM.styled';
import dvd from '../../../assets/icons/Costomer/Dvd.svg';
import KeySwipper from './KeySwipper';
import { styled } from 'styled-components';
import { useTranslation } from 'react-i18next';

export const KeyWrapper = styled(motion.div)`
  margin: 0 auto;
  margin-top: 100px;
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Key: React.FC = () => {
  const { t } = useTranslation();

  return (
    <KeyWrapper>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <ResultMainText>
          {t('keyCapabilitiesSection1.title')} <CardButtonText src={dvd} alt="" />
        </ResultMainText>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <ResultMainTitle>
          {t('keyCapabilitiesSection1.heading')}
        </ResultMainTitle>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <ResultMainTextDescription>
          {t('keyCapabilitiesSection1.description')}
        </ResultMainTextDescription>
      </motion.div>
      <KeySwipper />
    </KeyWrapper>
  );
};

export default Key;