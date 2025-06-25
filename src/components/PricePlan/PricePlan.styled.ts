import { css, styled } from "styled-components";
import { motion } from 'framer-motion';

export const MasterContainer = styled(motion.div)`
  margin: 0 auto;
  width: 100%;
  width: 343px;
  padding: 0 16px;
 @media screen and (min-width: 768px) {
  width: 710px;
  }
  
  @media screen and (min-width: 1440px) {
  max-width: 1440px;
  }
`;

export const MainTextPrice = styled(motion.p)`
  margin: 0 auto;
  border-radius: 24px;
    padding: 4px 1px 4px 14px;
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
  will-change: transform, opacity;
`;

export const CardButtonText = styled(motion.img)`
  border-radius: 25px;
  margin: 0 auto;
  padding: 4px;
  margin-left: 5px;
  overflow: visible;
  font-size: 13px;
  width: 20px;
  box-shadow: 
    inset 0 -8px 24px 0 rgba(255, 255, 255, 0.18), 
    inset 0 -5px 6px 0 rgba(255, 255, 255, 0.03), 
    0 8px 16px -8px rgba(0, 0, 0, 0.03), 
    0 2px 4px -2px rgba(0, 0, 0, 0.08), 
    0 0px 20px rgba(464, 367, 391, 0.99);
  background: 
    linear-gradient(315deg, rgba(122, 121, 122, 0.58) 7%, rgb(172 172 172 / 22%) 86%) 
    rgba(255, 255, 255, 0.03);
  -webkit-transform: translateZ(0);
  will-change: transform;
`;

export const PriceTitle = styled(motion.h2)`
  font-family: var(--font-family);
  font-weight: 600;
  margin: 0 auto;
  font-size: 36px;
  line-height: 110%;
  text-align: center;
  color: var(--white-100);
  margin-bottom: 16px;
  will-change: transform, opacity;
`;

export const PriceText = styled(motion.p)`
  margin: 0 auto;
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 16px;
  text-align: center;
  color: var(--white-80);
  margin-bottom: 56px;
  will-change: transform, opacity;
`;

export const Container = styled(motion.div)`
  color: white;
  margin: 0 auto;
`;

export const SwitchContainer = styled(motion.div)<{ $isMonthly: boolean }>`
  display: flex;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  border-radius: 24px;
  width: 100%;
  max-width: 350px;
  min-height: 64px;
  backdrop-filter: blur(16px);
  box-shadow: 
    inset 0 -8px 24px 0 rgba(255, 255, 255, 0.03), 
    inset 0 -5px 6px 0 rgba(255, 255, 255, 0.03), 
    0 8px 16px -8px rgba(0, 0, 0, 0.03), 
    0 2px 4px -2px rgba(0, 0, 0, 0.08);
  background: rgba(255, 255, 255, 0.03);
  margin-bottom: 24px;
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 18px;
  color: var(--white-100);
  position: relative;
  overflow: hidden;
  border: 1px solid #212121;
  padding: 8px;
  will-change: transform, opacity;
  
  &::before {
    content: '';
    position: absolute;
    top: 8px;
    bottom: 8px;
    left: 8px;
    width: calc(50% - 16px);
    background: white;
    border-radius: 16px;
    z-index: 0;
    transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    transform: translateX(${({ $isMonthly }) => $isMonthly ? '0' : 'calc(100% + 8px)'});
  }

  button {
    flex: 1;
    font-family: var(--font-family);
    font-weight: 400;
    font-size: clamp(16px, 3vw, 20px);
    color: var(--white);
    cursor: pointer;
    white-space: normal;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px 12px;
    border: none;
    background: transparent;
    position: relative;
    z-index: 1;
    transition: color 0.3s ease;
    word-break: break-word;
    hyphens: auto;
    min-width: 0;

    &:hover {
      color: rgba(255, 255, 255, 0.8);
    }

    &.active {
      color: black;
      font-weight: 500;
    }
  }
`;

export const CardsContainer = styled(motion.div)`
  display: flex;
  margin: 0 auto;
  gap: 24px;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  padding: 0 16px;
  will-change: transform, opacity;

  @media screen and (min-width: 768px) {
    width: 656px;
  }
  
  @media screen and (min-width: 1440px) {
    flex-direction: row;
    flex-wrap: nowrap;
  }
`;

export const Card = styled(motion.div).withConfig({
  shouldForwardProp: (prop) => prop !== 'highlight',
})<{ highlight?: boolean }>`
  padding: 20px;
  margin: 0 auto;
  border-radius: 23px; /* Відповідає rx="23" з SVG */
  width: 100%;
  width: 343px;
  backdrop-filter: blur(16px);
  transition: all 0.3s ease;
  will-change: transform, box-shadow;

  /* Стилі для звичайних карток */
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid #333;
  box-shadow: none;

  /* Стилі для підсвіченої картки (останньої) */
  ${({ highlight }) =>
    highlight &&
    css`
      background: rgba(10, 10, 30, 0.5);
      border: 2px solid transparent;
      background-clip: padding-box;
      
      /* Градієнтна обводка (як у SVG) */
      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border-radius: 23px;
        padding: 2px;
        background: linear-gradient(
          135deg,
          white 0%,
          #6567EF 30%,
          #4F51ED 50%,
          #E4E5FC 100%
        );
        -webkit-mask: 
          linear-gradient(#fff 0 0) content-box, 
          linear-gradient(#fff 0 0);
        -webkit-mask-composite: xor;
        mask-composite: exclude;
        pointer-events: none;
        z-index: -1;
      }

      /* Тіні з розмиттям (як у filter0_f та filter1_f) */
      box-shadow:
        0 0 15px 5px rgba(101, 103, 239, 0.2),
        0 0 30px 10px rgba(101, 103, 239, 0.15),
        inset 0 0 20px 5px rgba(101, 103, 239, 0.3);
    `}

  &:hover {
    transform: translateY(-4px);
    
    ${({ highlight }) =>
      highlight
        ? css`
            box-shadow:
              0 0 25px 10px rgba(101, 103, 239, 0.3),
              0 0 40px 15px rgba(101, 103, 239, 0.25),
              inset 0 0 25px 8px rgba(101, 103, 239, 0.4);
            background: rgba(10, 10, 30, 0.6);
          `
        : css`
            box-shadow: 
              0 4px 20px rgba(0, 0, 0, 0.15),
              0 2px 8px rgba(0, 0, 0, 0.1);
            background: rgba(255, 255, 255, 0.06);
          `}
  }

  &:active {
    transform: translateY(-2px);
  }

  @media screen and (min-width: 768px) {
    width: 656px;
  }
  
  @media screen and (min-width: 1440px) {
    width: 440px;
  }
`;

export const CardDiv = styled(motion.div)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: nowrap;
  will-change: transform;
`;

export const CardH3 = styled(motion.h3)`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 16px;
  line-height: 130%;
  color: #494bec;
  will-change: transform;
`;

export const CardSpan = styled(motion.span)`
 font-family: var(--font-family);
    font-weight: 400;
    font-size: 12px;
    line-height: 130%;
    color: rgba(146, 147, 240, 0.8);
    text-shadow: 0 0 8px rgba(101, 103, 239, 0.8);
    padding: 1px 5px;
    border-radius: 12.5px;
    border: 1px solid transparent;
    background: linear-gradient(rgba(10, 10, 30, 0.5), rgba(10, 10, 30, 0.5)) padding-box, linear-gradient(135deg, white 0%, #6567EF 30%, #4F51ED 50%, #E4E5FC 100%) border-box;
    box-shadow: 0 0 15px 5px rgba(101, 103, 239, 0.2), 0 0 30px 10px rgba(101, 103, 239, 0.15), inset 0 0 10px 2px rgba(101, 103, 239, 0.3);
    backdrop-filter: blur(4px);
    will-change: transform;
    position: absolute;
     left: 12%;
    bottom: 100%;
`;


export const Price = styled(motion.div).withConfig({
  shouldForwardProp: (prop) => prop !== '$isSelected',
}) <{ $isSelected?: boolean }>`
  font-size: 24px;
  font-weight: bold;
  margin: 16px 0;
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 22px;
  line-height: 130%;
  color: var(--white-100);
  display: flex;
  align-items: baseline;
  border-bottom: 1px solid var(--white-25);
  padding-bottom: 16px;
  justify-content: space-between;
  flex-wrap: nowrap;
  flex-direction: row;
  cursor: pointer;
  transition: all 0.3s ease;
  will-change: transform, background;

  ${({ $isSelected }) =>
    $isSelected && `
      background: rgba(73, 75, 236, 0.1);
      border-radius: 8px;
      padding: 12px;
      border-bottom: 1px solid #494BEC;
    `
  }

  &:hover {
    background: rgba(73, 75, 236, 0.05);
  }
`;

export const PriceP = styled(motion.p)`
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 22px;
  line-height: 130%;
  color: var(--white-100);
  width: 50%;
  will-change: transform;
`;

export const PriceCash = styled(motion.h4)`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 32px;
  line-height: 130%;
  color: var(--white-100);
  display: flex;
  align-items: baseline;
  will-change: transform;
`;

export const Span = styled(motion.div)`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 14px;
  line-height: 130%;
  color: var(--white-100);
  will-change: transform;
  position: relative;

`;

export const Button = styled(motion.button).withConfig({
  shouldForwardProp: (prop) => prop !== 'highlight',
}) <{ highlight?: boolean }>`
  border-radius: 12px;
  padding: 12px 20px;
  width: 303px;
  height: 43px;
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 16px;
  color: ${({ highlight }) => highlight ? '#E4E5FC' : 'var(--white-100)'};
  backdrop-filter: blur(16px);
  background: ${({ highlight }) =>
    highlight
      ? `linear-gradient(180deg, rgb(72, 27, 179) 0%, rgba(255, 255, 255, 0.03) 100%)`
      : `linear-gradient(180deg, rgba(255, 255, 255, 0.12) 7%, rgba(255, 255, 255, 0) 86%)`};
  box-shadow: ${({ highlight }) =>
    highlight
      ? `0 0 20px rgba(101, 103, 239, 0.5), inset 0 0 10px rgba(73, 75, 236, 0.4)`
      : `inset 0 -8px 24px 0 rgba(255, 255, 255, 0.03),
         inset 0 -5px 6px 0 rgba(255, 255, 255, 0.03),
         0 8px 16px -8px rgba(0, 0, 0, 0.03),
         0 2px 4px -2px rgba(0, 0, 0, 0.08)`};
  ${({ highlight }) =>
    highlight &&
    `
    position: relative;
    z-index: 1;
    border: none;
    &::before {
      content: '';
      position: absolute;
      top: -1px;
      left: -1px;
      right: -1px;
      bottom: -1px;
      border-radius: 12px;
      padding: 1px;
      background: linear-gradient(90deg, #494BEC, #4F51ED, #6567EF, #E4E5FC);
      -webkit-mask:
        linear-gradient(#fff 0 0) content-box,
        linear-gradient(#fff 0 0);
      -webkit-mask-composite: xor;
      mask-composite: exclude;
      z-index: -1;
    }
  `}
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  will-change: transform, box-shadow, background;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ highlight }) =>
    highlight
      ? `0 0 30px rgba(101, 103, 239, 0.7), inset 0 0 15px rgba(73, 75, 236, 0.6)`
      : `0 4px 12px rgba(0, 0, 0, 0.1), inset 0 -4px 8px rgba(255, 255, 255, 0.05)`};
    background: ${({ highlight }) =>
    highlight
      ? `linear-gradient(180deg, rgb(82, 37, 189) 0%, rgba(255, 255, 255, 0.05) 100%)`
      : `linear-gradient(180deg, rgba(255, 255, 255, 0.16) 7%, rgba(255, 255, 255, 0.02) 86%)`};
  }

  &:active {
    transform: translateY(0);
    transition-duration: 0.1s;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none !important;
  }

  @media screen and (min-width: 768px) {
    width: 100%;
  }
`;

export const Note = styled(motion.p)`
  margin-top: 16px;
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 18px;
  line-height: 130%;
  color: var(--white-100);
  margin-bottom: 12px;
  will-change: transform;
`;

export const NoteList = styled(motion.p)`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 15px;
  color: var(--white-60);
  margin-bottom: 12px;
  display: flex;
  gap: 6px;
  align-items: baseline;
  will-change: transform;
`;

export const IconCheck = styled(motion.img)`
  width: 13px;
  height: 13px;
  will-change: transform;
`;