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
  margin-top: 500px;
  width: 100%;
  height: 100%;
  // margin-bottom: 100px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 768px) {
    // width: 100vh;
    // margin-top: 100px;
    // margin-bottom: 100px;
  }
  @media screen and (min-width: 1440px) {
    // margin-top: 100px;
    // margin-bottom: 150px;
  }
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
          {t('keyCapabilitiesSection.header.title')} <CardButtonText src={dvd} alt="" />
        </ResultMainText>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <ResultMainTitle dangerouslySetInnerHTML={{ __html: t('keyCapabilitiesSection.header.mainHeading') }} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <ResultMainTextDescription dangerouslySetInnerHTML={{ __html: t('keyCapabilitiesSection.header.description') }} />
      </motion.div>
      <KeySwipper />
    </KeyWrapper>
  );
};

export default Key;
