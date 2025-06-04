import styled, { keyframes } from "styled-components";
import { clickEffect, gradientFlow, pulse } from "../ButtonTryForFree/ButtonTryForFree";

export const Container = styled.div`
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translate(-50%, -50%);
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
    object-fit: cover;
  }

  /* Мобільні пристрої */
  @media (max-width: 768px) {
    height: 100vh;
    
    &::before,
    &::after {
      height: 50px;
    }
  }

  // /* Великі екрани */
  // @media screen and (min-width: 1440px) {
  //   width: 100%;
  //   height: 100vh;
  // }

  // /* Дуже широкі екрани */
  // @media screen and (min-width: 2000px) {
  //   width: 100%;
  //   height: 100vh;
  // }
`;

export const HeroWrapper = styled.div`
margin : 0 auto;
margin-top: 100px;
width: 100%;
height: 100%;
margin-bottom: 100px;
position: relative;
`;

export const HeroInnovative = styled.p`
display: flex;
justify-content: space-around;
border-radius: 24px;
padding: 4px 0px 4px 8px;
width: 150px;
height: 28px;
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
`;

export const SpanUnicorn = styled.span`
    border-radius: 25px;
    padding: 4px;
    width: 22px;
    height: 22px;
    font-size: 13px;
    box-shadow: inset 0 -8px 24px 0 rgba(255, 255, 255, 0.18), inset 0 -5px 6px 0 rgba(255, 255, 255, 0.03), 0 8px 16px -8px rgba(0, 0, 0, 0.03), 0 2px 4px -2px rgba(0, 0, 0, 0.08), 0 0px 20px rgba(464, 367, 391, 0.99);
    background: linear-gradient(315deg, rgba(245, 228, 253, 0.58) 7%, rgb(207 121 250) 86%) rgba(255, 255, 255, 0.03);
`;

export const HeroTitle = styled.h1`
font-family: var(--font-family);
font-weight: 600;
font-size: 36px;
line-height: 110%;
text-align: center;
background: linear-gradient(142deg, #fff 0%, #f7f8fd 28.77%, #b6b8ee 86.41%, #6a82fc 100%);
background-clip: text;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
margin-bottom: 16px;
`;

export const HeroText = styled.p`
font-family: var(--font-family);
font-weight: 400;
font-size: 16px;
text-align: center;
color: var(--white-80);
`;

export const HeroContainerContent = styled.div`
width: 343px;
height: 99px;
`;

export const AvatarContainer = styled.div`
width: 343px;
height: 36px;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
margin-top: 24px;
`;

export const ImageContainer = styled.div`
display: flex;
width: 100px;
height: 36px;
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
width: 273px;
height: 43px;
margin-top: 20px;
display: flex;

`;

export const HeroButton = styled.button`
z-index: 10;
  border-radius: 12px;
  width: 110px;
  height: 38px;
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
padding: 12px 20px;
width: 136px;
height: 43px;
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
  height: 38px;
  position: relative;
  overflow: hidden;
  
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 16px;
  color: var(--white-100);
  
  box-shadow: inset 0 0 6px 0 rgba(255, 255, 255, 0.54);
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.12) 7%, rgba(255, 255, 255, 0) 86%), rgba(255, 255, 255, 0.03) ;
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
padding: 12px 20px;
width: 125px;
height: 43px;

backdrop-filter: blur(16px);
box-shadow: inset 0 -8px 24px 0 rgba(255, 255, 255, 0.03), inset 0 -5px 6px 0 rgba(255, 255, 255, 0.03), 0 8px 16px -8px rgba(0, 0, 0, 0.03), 0 2px 4px -2px rgba(0, 0, 0, 0.08);
background: linear-gradient(180deg, rgba(255, 255, 255, 0.12) 7%, rgba(255, 255, 255, 0) 86%),  rgba(255, 255, 255, 0.03);
`;

