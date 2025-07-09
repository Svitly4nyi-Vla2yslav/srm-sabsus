import { styled } from "styled-components";
import { motion } from 'framer-motion';

export const FeedbackTitle = styled(motion.h2)`
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 24px;
  line-height: 130%;
  text-align: center;
  color: var(--white-100);
`;

export const StarContainer = styled(motion.div)`
  display: flex;
  margin-top: 20px;
  justify-content: space-evenly;
  justify-items: column;
  flex-direction: row;
  gap: 4px;
  width: 343px;
     height: max-content;
  flex-wrap: wrap;
  align-content: space-between;
`;

export const Star = styled(motion.img)`
  width: 104px;
  height: 16px;
`;

export const RatingNumber = styled(motion.p)`
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 24px;
  line-height: 130%;
  text-align: center;
  color: var(--white-100);
`;

export const RatingText = styled(motion.p)`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 16px;
  color: var(--white-100);
`;

export const ShadowLeft = styled(motion.div)`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 100px;
  background: linear-gradient(90deg, rgb(0, 0, 0) 0%, rgba(0,0,0,0) 100%);
  z-index: 10;
  pointer-events: none;
`;

export const ShadowRight = styled(motion.div)`
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  width: 100px;
  background: linear-gradient(270deg, rgb(0, 0, 0) 0%, rgba(0,0,0,0) 100%);
  z-index: 10;
  pointer-events: none;
`;

export const FeedbackContainer = styled(motion.div)`
  display: flex;
  padding: 0 16px;
  max-width: 1200px;
  margin: 0 auto;
  flex-direction: column;
  align-items: center;
`;

export const FeedbackSwiperContainer = styled(motion.div)`
  width: 100%;
  position: relative;
  margin: 0 auto;
  padding: 80px 0;
  overflow: hidden;
  
  .swiper {
    width: 100%;
    padding: 0 10%;
  }
  
  .swiper-slide {
    display: flex;
    justify-content: center;
    transition: transform 0.3s ease;
  }
`;

export const FeedbackSlide = styled(motion.div)`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  border: 1px solid #212121;
  border-radius: 24px;
  padding: 20px;
  width: 311px;
  height: auto;
  backdrop-filter: blur(16px);
  box-shadow: 0 8px 16px -8px rgba(0, 0, 0, 0.03), 
              0 2px 4px -2px rgba(0, 0, 0, 0.08), 
              inset 0 -8px 24px 0 rgba(255, 255, 255, 0.03), 
              inset 0 -5px 6px 0 rgba(255, 255, 255, 0.03);
  background: rgba(255, 255, 255, 0.03);
  margin: 0 auto;
  will-change: transform, box-shadow;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
`;

export const FeedbackSlideIcon = styled(motion.img)`
  width: 123px;
  height: 64px;
  margin-bottom: 16px;
  will-change: transform;
  object-fit: contain;
  object-position: center ;
`;

export const FeedbackSlideText = styled(motion.p)`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 16px;
  line-height: 130%;
  color: var(--white-100);
  margin-bottom: 40px;
`;

export const UserWrapper = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const AvatarWrapper = styled(motion.div)`
  will-change: transform;
`;

export const AvatarIcon = styled(motion.img)`
  border-radius: 24px;
  width: 45px;
  height: 45px;
  will-change: transform;
  transition: transform 0.3s ease;
`;

export const NameUser = styled(motion.p)`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 14px;
  line-height: 130%;
  color: var(--white-100);
`;

export const Position = styled(motion.p)`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 12px;
  color: var(--white-50);
`;