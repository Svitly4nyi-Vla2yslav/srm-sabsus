import React from 'react';
import {
  GeneralContainer,
  MainText,
  MainTitel,
  PuzzleIcon,
  WhyText,
} from './WhyChooseOurPlatform.styled';
import puzzle from '../../assets/icons/stars-01puzzle.svg';
import FeatureSwiper from './ChooseSwipper';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const WhyChooseOurPlatform: React.FC = () => {
  const { t } = useTranslation();

  return (
    <GeneralContainer>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        {' '}
        <WhyText>
          {t('whyChoosePlatform.title')} <PuzzleIcon src={puzzle} alt="🎲" />
        </WhyText>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <MainTitel
          dangerouslySetInnerHTML={{ __html: t('whyChoosePlatform.mainTitle') }}
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <MainText>{t('whyChoosePlatform.description')}</MainText>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.5 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <FeatureSwiper />
      </motion.div>
    </GeneralContainer>
  );
};

export default WhyChooseOurPlatform;
