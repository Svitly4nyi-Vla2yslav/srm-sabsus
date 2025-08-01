import styled, { keyframes } from "styled-components";
import { clickEffect, gradientFlow, pulse } from "../ButtonTryForFree/ButtonTryForFree";

export const Container = styled.div`
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 1920px;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  z-index: -1;

  /* Тіні */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100px;
    background: linear-gradient(to bottom, rgb(0, 0, 0) 0%, transparent 100%);
    z-index: 2;
    pointer-events: none;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100px;
    background: linear-gradient(to top, rgb(0, 0, 0) 0%, transparent 100%);
    z-index: 2;
    pointer-events: none;
  }

  iframe, canvas {
    width: 100% !important;
    height: 100% !important;
    display: block;
    position: relative;
    z-index: 1;
    object-fit: contain;
    pointer-events: auto;
  }

  /* Мобільні пристрої */
  @media screen and (max-width: 767px) {
    height: 100vh;
    z-index: -2; /* Поміщаємо під інші елементи */
    
    &::before,
    &::after {
      height: 50px;
    }

    iframe, canvas {
      pointer-events: none; /* Вимкнення клікабельності */
      z-index: -1; /* Нижчий z-index для iframe/canvas */
      opacity: 0.7; /* Додаткове затемнення для мобільних */
    }
  }
`;

export const HeroImage = styled.img`
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 1400px;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  z-index: 100;

    /* Тіні */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100px;
    background: linear-gradient(to bottom, rgb(0, 0, 0) 0%, transparent 100%);
    z-index: 2;
    pointer-events: none;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100px;
    background: linear-gradient(to top, rgb(0, 0, 0) 0%, transparent 100%);
    z-index: 2;
    pointer-events: none;
  }

    @media screen and (max-width: 767px) {
    height: 100vh;
    z-index: -2; /* Поміщаємо під інші елементи */
    
    &::before,
    &::after {
      height: 50px;
    }
  }
`;

export const HeroWrapper = styled.div`
  margin: 0 auto;
  margin-top: 100px;
  width: 100%;
  height: 100%;
  margin-bottom: 100px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 768px) {
    margin-top: 100px;
    margin-bottom: 100px;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 100px;
    margin-bottom: 150px;
  }
`;

export const HeroInnovative = styled.p`
display: flex;
justify-content: space-around;
border-radius: 24px;
    padding: 4px 1px 4px 14px;
    width: max-content;
height: auto;
align-items: center;


font-family: var(--font-family);
font-weight: 400;
font-size: 12px;
color: var(--white-100);
    margin: 0 auto;
margin-bottom: 8px;
backdrop-filter: blur(16px);
box-shadow: inset 0 -8px 24px 0 rgba(255, 255, 255, 0.03), inset 0 -5px 6px 0 rgba(255, 255, 255, 0.03), 0 8px 16px -8px rgba(0, 0, 0, 0.03), 0 2px 4px -2px rgba(0, 0, 0, 0.08);
background: linear-gradient(180deg, rgba(255, 255, 255, 0.12) 7%, rgba(255, 255, 255, 0) 86%) backdrop-filter: blur(16px);
box-shadow: inset 0 -8px 24px 0 rgba(255, 255, 255, 0.03), inset 0 -5px 6px 0 rgba(255, 255, 255, 0.03), 0 8px 16px -8px rgba(0, 0, 0, 0.03), 0 2px 4px -2px rgba(0, 0, 0, 0.08);
background: linear-gradient(180deg, rgba(255, 255, 255, 0.12) 7%, rgba(255, 255, 255, 0) 86%);;

@media screen and (min-width: 1440px) {


}
`;

export const SpanUnicorn = styled.span`
  border-radius: 25px;
  margin-left: 10px;
  padding: 4px;
  width: 22px;
  height: 22px;
  font-size: 13px;

  box-shadow:
    inset 0 -8px 24px rgba(255, 255, 255, 0.18),
    inset 0 -5px 6px rgba(255, 255, 255, 0.03),
    0 4px 8px rgba(0, 0, 0, 0.03),
    0 2px 4px rgba(0, 0, 0, 0.08),
    0 0px 10px rgba(207, 121, 250, 0.5); /* ніжне фіолетове світіння */

  background: linear-gradient(
    315deg,
    rgba(232, 198, 247, 0.96) 7%,
    rgba(207, 121, 250, 0.54) 86%
  );
`;


export const HeroTitle = styled.h1`
  margin: 0 auto;
  font-family: var(--font-family);
  font-weight: 600;
  font-size: 36px;
  line-height: 110%;
  text-align: center;
  background: linear-gradient(142deg, #fff 0%, #f7f8fd 28.77%, #b6b8ee 86.41%, #6a82fc 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 36px;

  @media screen and (min-width: 1440px) {
    font-size: 72px;
    line-height: 112%;
    max-width: 935px;
  }
`;

export const HeroText = styled.p`
font-family: var(--font-family);
font-weight: 400;
font-size: 16px;
text-align: center;
color: var(--white-80);

@media screen and (min-width: 1440px) {
width: 100%;
width: 835px;
font-family: var(--font-family);
font-weight: 400;
font-size: 17px;
line-height: 130%;
text-align: center;
color: var(--white-75);
margin-bottom: 36px;
}
`;

export const HeroContainerContent = styled.div`
  width: 100%;
  max-width: 830px;
  margin: 0 auto; // Це важливо для центрування
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
  margin: 0 auto;
    padding: 0 16px;
     display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 36px;
  }
`;


export const AvatarContainer = styled.div`
  width: 100%;
  max-width: 343px;
  height: 36px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 24px;

  @media screen and (min-width: 1440px) {
    margin: 0 auto;
    margin-bottom: 36px;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 36px;

  @media screen and (min-width: 1440px) {
    width: auto;
    margin: 0 auto;
  }
`;

export const ImageAvatar = styled.img`
border-radius: 18px;
border: 1px solid var(--black);
width: 36px;
height: 36px;
margin-left: -20px;
`;

export const TextImageAvatar = styled.p`
font-family: var(--font-family);
font-weight: 400;
font-size: 12px;
color: var(--white-100);
`;

export const ButtonContainer = styled.div`
margin: 0 auto;
width: 285px;
// height: 43px;
margin-top: 20px;
display: flex;
gap: 16px;
justify-content: center;

@media screen and (min-width: 1440px) {


}
`;

export const HeroButton = styled.button`
z-index: 10;
  border-radius: 12px;
width: 100%;
  position: relative;
  overflow: hidden;

  margin-right: 12px;

  font-family: var(--font-family);
  font-weight: 400;
  font-size: 16px;
  color: var(--white-100);
  
  box-shadow: inset 0 0 6px 0 rgba(255, 255, 255, 0.54);
  background: linear-gradient(139deg, #494bec, #6a6bff, #494bec, #3a3bc7);
  background-size: 300% 300%;
  
  transition: all 0.4s ease;
  
  &:hover {
    box-shadow: inset 0 0 8px 0 rgba(255, 255, 255, 0.74), 
                0 0 15px rgba(73, 75, 236, 0.5);
    transform: perspective(500px) rotateX(10deg) translateY(-2px);
    animation: ${pulse} 2s infinite, ${gradientFlow} 3s ease infinite;
    background-size: 200% 200%;
  }
  
  &:active {
    animation: ${clickEffect} 0.3s ease, ${gradientFlow} 6s ease infinite;
    background: linear-gradient(139deg, #3a3bc7, #494bec, #3a3bc7);
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 5px;
    height: 5px;
    background: rgba(255, 255, 255, 0.5);
    opacity: 0;
    border-radius: 100%;
    transform: scale(1, 1) translate(-50%, -50%);
    transform-origin: 50% 50%;
  }
  
  &:focus:not(:active)::after {
    animation: ripple 0.6s ease-out;
  }
  
  @keyframes ripple {
    0% {
      transform: scale(0, 0);
      opacity: 0.5;
    }
    100% {
      transform: scale(20, 20);
      opacity: 0;
    }
  }
border-radius: 12px;
padding: 12px 12px;
width: 100%;
height: auto;
`;

export const pulseGrey = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(73, 73, 74, 0.81);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(73, 75, 236, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(73, 75, 236, 0);
  }
`;

export const HeroButtonGrey = styled.button`
z-index: 10;
  border-radius: 12px;
  width: 110px;
  position: relative;
  overflow: hidden;
  
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 16px;
  color: var(--white-100);
  
  box-shadow: inset 0 0 6px 0 rgba(255, 255, 255, 0.54);
  background: linear-gradient(180deg, rgb(255, 255, 255) 7%, rgba(255, 255, 255, 0) 86%), rgba(255, 255, 255, 0.03) ;
  background-size: 300% 300%;
  
  transition: all 0.4s ease;
  
  &:hover {
    box-shadow: inset 0 0 8px 0 rgba(255, 255, 255, 0.74), 
                0 0 15px rgba(115, 115, 115, 0.5);
    transform: perspective(500px) rotateX(10deg) translateY(-2px);
    animation: ${pulseGrey} 2s infinite, ${gradientFlow} 3s ease infinite;
    background-size: 200% 200%;
  }
  
  &:active {
    animation: ${clickEffect} 0.3s ease, ${gradientFlow} 6s ease infinite;
    background: linear-gradient(139deg, #3a3bc7, #494bec, #3a3bc7);
  }
  

  
  &:focus:not(:active)::after {
    animation: ripple 0.6s ease-out;
  }
  
  @keyframes ripple {
    0% {
      transform: scale(0, 0);
      opacity: 0.5;
    }
    100% {
      transform: scale(20, 20);
      opacity: 0;
    }
  }
border: 1px solid #212121;
border-radius: 12px;
padding: 12px 12px;
width: 100%;

backdrop-filter: blur(168px);
box-shadow: inset 0 -8px 24px 0 rgba(255, 255, 255, 0.03), inset 0 -5px 6px 0 rgba(255, 255, 255, 0.03), 0 8px 16px -8px rgba(0, 0, 0, 0.03), 0 2px 4px -2px rgba(0, 0, 0, 0.08);
background: linear-gradient(180deg, rgba(255, 255, 255, 0.12) 7%, rgba(255, 255, 255, 0) 86%) , rgba(255, 255, 255, 0.03);
`;

