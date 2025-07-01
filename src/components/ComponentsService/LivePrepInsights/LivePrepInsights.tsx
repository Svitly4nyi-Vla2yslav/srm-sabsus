import { motion } from 'framer-motion';
import React from 'react';
import { styled } from 'styled-components';
import { CardButtonText } from '../../AllinOneSRM/AllinOneSRM.styled';
import rocket from '../../../assets/icons/Costomer/Rocket.png';
import LinieBackground from '../../../assets/icons/Costomer/Iphone/Frame 3577-background.png';
import Phone from '../../../assets/icons/Costomer/Iphone/Frame 35771-iphon.png';
import Phone1 from "../../../assets/icons/Costomer/Iphone/black titanium2-iphon.png";
import Linie1 from "../../../assets/icons/Costomer/Iphone/Lightpered-linie.png";

export const LifeWrapper = styled(motion.div)`
  display: flex;
  padding: 0 0px;
  max-width: 1200px;
  margin: 0 auto;
  flex-direction: column;
  align-items: center;
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
    max-width: 800px;
    width: 100%;
    margin: 0 auto 26px;
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
    max-width: 800px;
    width: 100%;
    margin: 0 auto 26px;
  }
`;

export const LifeContainer = styled.div``;

export const ImageAnimationWrapp = styled.div`
  position: relative;
  width: 375px;
  height: 354px;
  margin: 0 auto;
`;

export const PhoneImage = styled(motion.img)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
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
  background: radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 70%);
  opacity: 0;
  border-radius: 50%;
  pointer-events: none;
`;

const LivePrepInsights: React.FC = () => {
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
            Live Prep Insights
            <CardButtonText src={rocket} alt="🚀" />
          </LifeMainText>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <LifeMainTitle>All-in-one engagement platform</LifeMainTitle>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <LifeMainTextDescription>
            Unify every user-facing channel into one seamless experience. From
            mobile orders to loyalty rewards — everything is built to feel
            intuitive and fast.
          </LifeMainTextDescription>
        </motion.div>
      </LifeContainer>
      
      <ImageAnimationWrapp>
        {/* Фонові лінії */}
        <Linie 
          src={LinieBackground} 
          alt="background lines"
          initial={{ opacity: 0.8 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        />
        
        {/* Перший телефон */}
        <PhoneImage 
          src={Phone} 
          alt="phone"
          initial={{ y: -10 }}
          animate={{ y: 0 }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        />
        
        {/* Другий телефон */}
        <PhoneImage 
          src={Phone1} 
          alt="phone"
          initial={{ y: 0 }}
          animate={{ y: -10 }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: 0.5
          }}
        />
        
        {/* Лінії з анімацією світіння */}
        <Linie 
          src={Linie1} 
          alt="glowing lines"
          initial={{ opacity: 0.5 }}
          animate={{ opacity: 1 }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        
        {/* Додатковий ефект світіння */}
        <GlowEffect
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1.2, opacity: 0.3 }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        />
      </ImageAnimationWrapp>
      
      <LifeMainTextDescription>
        Your brand, your flow. Customize touchpoints with full control over
        visuals, behavior, and engagement logic — all while delivering delight
        across the customer journey.
      </LifeMainTextDescription>
    </LifeWrapper>
  );
};

export default LivePrepInsights;