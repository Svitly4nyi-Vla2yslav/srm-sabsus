import { styled } from "styled-components";
import { motion } from 'framer-motion';

export const ResultsFromBusinessesWrapper = styled.div`
  width: 343px;
  margin: 0 auto;
  margin-top: 50px;
  margin-bottom: 88px;
  overflow: hidden; /* Запобігає артефактам анімації */
  
  @media screen and (min-width: 768px) {
    max-width: 768px;
    width: 100%;
  }
  
  @media screen and (min-width: 1440px) {
    max-width: 1440px;
    width: 100%;
  }
`;

export const ResultMainText = styled(motion.p)`
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
  box-shadow: inset 0 -8px 24px 0 rgba(255, 255, 255, 0.03), 
              inset 0 -5px 6px 0 rgba(255, 255, 255, 0.03), 
              0 8px 16px -8px rgba(0, 0, 0, 0.03), 
              0 2px 4px -2px rgba(0, 0, 0, 0.08);
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.12) 7%, rgba(255, 255, 255, 0) 86%);
  align-items: center;
  will-change: transform, opacity; /* Оптимізація анімації */
  
  @media screen and (min-width: 768px) {
    /* Додаткові стилі для планшетів */
  }
  
  @media screen and (min-width: 1440px) {
    /* Додаткові стилі для десктопів */
  }
`;

export const ResultMainTitle = styled(motion.h2)`
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

export const ResultMainTextDescription = styled(motion.p)`
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

export const ResultDisplayGrid = styled(motion.div)`
  width: 100%;
  margin: 0 auto;
  display: flex;
  gap: 6px;
  position: relative;
  align-items: flex-start;
  justify-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: center;
  justify-content: space-between;
  perspective: 1000px; /* Для 3D ефектів */
  
  @media screen and (min-width: 768px) {
    column-gap: 4px;
    max-width: 740px;
    justify-content: space-evenly;
    margin-top: 100px;
  }
  
  @media screen and (min-width: 1440px) {
    max-width: 1440px;
  }
`;

export const ResultCard = styled(motion.div)`
  border: 0.58px solid #212121;
  border-radius: 14px;
  padding: 11px;
  width: 186px;
  height: 186px;
  min-height: 186px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  backdrop-filter: blur(9.247057914733887px);
  box-shadow: 0 5px 9px -5px rgba(0, 0, 0, 0.03), 
              0 1px 2px -1px rgba(0, 0, 0, 0.08), 
              inset 0 -5px 14px 0 rgba(255, 255, 255, 0.03), 
              inset 0 -3px 3px 0 rgba(255, 255, 255, 0.03);
  background: rgba(255, 255, 255, 0.03);
  overflow: hidden;
  transform-origin: center left;
  will-change: transform, opacity;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px) scale(1.02);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    z-index: 1;
  }
  
  @media screen and (min-width: 768px) {
    width: 176px;
    height: 176px;
    min-height: 176px;
  }
  
  @media screen and (min-width: 1440px) {
    width: 323px;
    height: 322px;
    justify-content: space-around;
  }
`;

export const ResultCard1 = styled(motion.div)`
  border: 0.58px solid #212121;
  border-radius: 14px;
  padding: 11px;
  width: 186px;
  height: 186px;
  min-height: 186px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  backdrop-filter: blur(9.247057914733887px);
  box-shadow: 0 5px 9px -5px rgba(0, 0, 0, 0.03), 
              0 1px 2px -1px rgba(0, 0, 0, 0.08), 
              inset 0 -5px 14px 0 rgba(255, 255, 255, 0.03), 
              inset 0 -3px 3px 0 rgba(255, 255, 255, 0.03);
  background: rgba(255, 255, 255, 0.03);
  transform-origin: center top;
  will-change: transform, opacity;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px) scale(1.02);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    z-index: 1;
  }
  
  @media screen and (min-width: 768px) {
    width: 176px;
    height: 176px;
    min-height: 176px;
    margin-top: -20px;
  }
  
  @media screen and (min-width: 1440px) {
    width: 323px;
    height: 322px;
    justify-content: space-around;
  }
`;

export const ResultCard2 = styled(motion.div)`
  display: none;
  transform-origin: center right;
  will-change: transform, opacity;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px) scale(1.02);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    z-index: 1;
  }
  
  @media screen and (min-width: 768px) {
    border: 0.58px solid #212121;
    border-radius: 14px;
    padding: 11px;
    width: 176px;
    height: 176px;
    min-height: 176px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow: hidden;
    backdrop-filter: blur(9.247057914733887px);
    box-shadow: 0 5px 9px -5px rgba(0, 0, 0, 0.03), 
                0 1px 2px -1px rgba(0, 0, 0, 0.08), 
                inset 0 -5px 14px 0 rgba(255, 255, 255, 0.03), 
                inset 0 -3px 3px 0 rgba(255, 255, 255, 0.03);
    background: rgba(255, 255, 255, 0.03);
  }
  
  @media screen and (min-width: 1440px) {
    width: 323px;
    height: 322px;
    justify-content: space-around;
  }
`;

export const ResultIconCard = styled(motion.img)`
  width: 115px;
  height: 60px;
  will-change: transform, opacity;
  
  @media screen and (min-width: 1440px) {
    width: 200px;
    height: 104px;
  }
`;

export const ResultTitleWrapper = styled(motion.div)`
  width: 163px;
  height: 66px;
  will-change: transform, opacity;
`;

export const ResultTitle = styled(motion.p)`
  font-family: var(--font-family);
  font-weight: 600;
  font-size: 46px;
  line-height: 100%;
  color: var(--white-100);
  will-change: transform, opacity;
  
  @media screen and (min-width: 1440px) {
    font-size: 80px;
    width: max-content;
  }
`;

export const ResultText = styled(motion.p)`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 10px;
  line-height: 130%;
  color: var(--white-60);
  will-change: transform, opacity;
     width: fit-content;
    height: max-content;
  @media screen and (min-width: 1440px) {
    font-size: 14px;
  }
`;

export const ResultImage = styled(motion.img)`
  border-radius: 14px;
  width: 151px;
  height: 186px;
  object-fit: cover;
  transform-origin: center;
  will-change: transform, opacity;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.03);
  }
  
  @media screen and (min-width: 768px) {
    width: 176px;
    height: 176px;
    margin-top: -20px;
  }
  
  @media screen and (min-width: 1440px) {
    width: 323px;
    height: 322px;
  }
`;

export const ResultImage1 = styled(motion.img)`
  border-radius: 14px;
  width: 150px;
  height: 231px;
  transform-origin: bottom center;
  will-change: transform, opacity;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.03);
  }
  
  @media screen and (min-width: 768px) {
    width: 176px;
    height: 176px;
  }
  
  @media screen and (min-width: 1440px) {
    width: 323px;
    height: 322px;
  }
`;

export const ResultImage2 = styled(motion.img)`
  border-radius: 14px;
  width: 187px;
  height: 186px;
  margin-top: -45px;
  transform-origin: left top;
  will-change: transform, opacity;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.03);
  }
  
  @media screen and (min-width: 768px) {
    width: 176px;
    height: 176px;
    margin-top: 0;
  }
  
  @media screen and (min-width: 1440px) {
    width: 323px;
    height: 322px;
  }
`;

export const ResultImage3 = styled(motion.img)`
  border-radius: 14px;
  width: 150px;
  height: 142px;
  transform-origin: right bottom;
  will-change: transform, opacity;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.03);
  }
  
  @media screen and (min-width: 768px) {
    width: 176px;
    height: 176px;
    margin-top: -40px;
  }
  
  @media screen and (min-width: 1440px) {
    width: 323px;
    height: 322px;
  }
`;

export const ResultMasterImage = styled(motion.img)`
  position: absolute;
  z-index: 3;
  top: 10%;
  left: 20%;
  transform: translate(-50%, -50%);
  width: 203px;
  height: 429px;
  pointer-events: none;
  will-change: transform, opacity;
  
  @media screen and (min-width: 768px) {
    width: 152px;
    height: 322px;
            left: 40%;
        top: 0%;
  }
  
  @media screen and (min-width: 1440px) {
    width: 264px;
    height: 558px;
  }
`;

export const ResultImage4 = styled(motion.img)`
  display: none;
  transform-origin: center;
  will-change: transform, opacity;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.03);
  }
  
  @media screen and (min-width: 768px) {
    display: flex;
    border-radius: 14px;
    width: 176px;
    height: 176px;
    min-height: 176px;
    margin-top: -40px;
  }
  
  @media screen and (min-width: 1440px) {
    width: 323px;
    height: 322px;
  }
`;