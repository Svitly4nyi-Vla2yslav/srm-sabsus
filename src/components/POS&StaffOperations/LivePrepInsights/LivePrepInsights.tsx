import { motion } from 'framer-motion';
import React from 'react';
import { styled } from 'styled-components';
import { CardButtonText } from '../../AllinOneSRM/AllinOneSRM.styled';
import rocket from '../../../assets/icons/Costomer/Rocket.png';
import LinieBackground from '../../../assets/icons/POS&Staf/iPadPro2020.png';
import { useTranslation } from 'react-i18next';

export const LifeWrapper = styled(motion.div)`
  display: flex;
  padding: 0 16px;
  max-width: 1440px;
  margin: 0 auto;
  flex-direction: column;
  align-items: center;
  position: relative;

  @media screen and (min-width: 1440px) {
    width: 1440px;
  }
`;

export const LifeMainText = styled(motion.p)`
  margin: 0 auto;
  border-radius: 24px;
  padding: 4px 4px 4px 14px;
  width: max-content;
  height: 28px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
  margin-top: 50px;
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 12px;
  color: var(--white-100);
  backdrop-filter: blur(16px);
  box-shadow:
    inset 0 -8px 24px 0 rgba(255, 255, 255, 0.03),
    inset 0 -5px 6px 0 rgba(255, 255, 255, 0.03),
    0 8px 16px -8px rgba(0, 0, 0, 0.03),
    0 2px 4px -2px rgba(0, 0, 0, 0.08);
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.12) 7%,
    rgba(255, 255, 255, 0) 86%
  );
  align-items: center;
  will-change: transform, opacity;
`;

export const LifeMainTitle = styled(motion.h2)`
  font-family: var(--font-family);
  font-weight: 600;
  font-size: 36px;
  line-height: 110%;
  text-align: center;
  color: var(--white-100);
  margin-bottom: 16px;
  will-change: transform, opacity;

  @media screen and (min-width: 768px) {
    font-size: 44px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 630px;
    width: 100%;
    margin: 0 auto 26px;
    display: flex;
    text-align: start;
  }
`;

export const LifeMainTextDescription = styled(motion.p)`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 16px;
  text-align: center;
  color: var(--white-80);
  margin-bottom: 56px;
  will-change: transform, opacity;

  @media screen and (min-width: 768px) {
    font-size: 17px;
    line-height: 130%;
  }

  @media screen and (min-width: 1440px) {
    max-width: 630px;
    width: 100%;
    margin: 0 auto 26px;
    display: flex;
    text-align: start;
  }
`;

export const LifeMainTextDescriptionDown = styled(motion.p)`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 16px;
  text-align: center;
  color: var(--white-80);
  margin-bottom: 56px;
  will-change: transform, opacity;

  @media screen and (min-width: 768px) {
    font-size: 17px;
    line-height: 130%;
  }

  @media screen and (min-width: 1440px) {
    position: absolute;
    max-width: 530px;
    width: 100%;
    margin: 0 auto 26px;
    top: 80%;
    right: 62%;
    text-align: start;
  }
`;

export const LifeContainer = styled.div`
  margin-bottom: 374px;

  @media screen and (min-width: 768px) {
    margin-bottom: 700px;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 609px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const ImageAnimationWrapp = styled.div`
  position: absolute;
  top: 60%;
  left: 50%;
  width: 365px;
  height: 354px;
  transform: translate(-50%, -50%);
  overflow: visible;

  @media screen and (min-width: 768px) {
    top: 60%;
    width: 700px;
    height: 633px;
  }

  @media screen and (min-width: 1440px) {
    left: 70%;
    top: 50%;
    height: 660px;
  }
`;

export const Linie = styled(motion.img)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const GlowEffect = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 0.8) 0%,
    rgba(255, 255, 255, 0) 70%
  );
  opacity: 0;
  border-radius: 50%;
  pointer-events: none;
`;

const LivePrepInsights: React.FC = () => {
  const { t } = useTranslation();

  return (
    <LifeWrapper>
      <LifeContainer>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <LifeMainText>
            {t('kitchenPrepInsights2.title')}
            <CardButtonText src={rocket} alt="🚀" />
          </LifeMainText>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <LifeMainTitle>{t('kitchenPrepInsights2.heading')}</LifeMainTitle>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <LifeMainTextDescription>
            {t('kitchenPrepInsights2.description')}
          </LifeMainTextDescription>
        </motion.div>
      </LifeContainer>

      <ImageAnimationWrapp>
        <Linie
          src={LinieBackground}
          alt="background lines"
          initial={{ y: 0, opacity: 0.5 }}
          animate={{ y: -10, opacity: 1 }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
            delay: 0.5,
          }}
        />

        <GlowEffect
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1.2, opacity: 0.3 }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          }}
        />
      </ImageAnimationWrapp>

      <LifeMainTextDescriptionDown>
        {t('kitchenPrepInsights2.footerText')}
      </LifeMainTextDescriptionDown>
    </LifeWrapper>
  );
};

export default LivePrepInsights;
