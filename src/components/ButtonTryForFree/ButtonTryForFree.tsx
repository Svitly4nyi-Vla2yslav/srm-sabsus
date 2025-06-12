import React from 'react';
import styled, { keyframes } from 'styled-components';

// Анімація пульсації
export const pulse = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(73, 75, 236, 0.7);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(73, 75, 236, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(73, 75, 236, 0);
  }
`;

// Анімація натискання
export const clickEffect = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.95);
  }
  100% {
    transform: scale(1);
  }
`;

// Анімація градієнта
export const gradientFlow = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

export const ButtonFree = styled.button`
z-index: 10;
  border-radius: 12px;
  width: 110px;
  height: 38px;
  position: relative;
  overflow: hidden;
  
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 15px;
  color: var(--white-100);
  
  box-shadow: inset 0 0 6px 0 rgba(255, 255, 255, 0.54);
  background: linear-gradient(139deg, #494bec, #6a6bff, #494bec, #3a3bc7);
  background-size: 300% 300%;
  animation: ${pulse} 2s infinite, ${gradientFlow} 6s ease infinite;
  
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
`;

const ButtonTryForFree: React.FC = () => {
  return (
    <a href='https://sabsus.app/'   target="_blank"
                  rel="noopener noreferrer">
      <ButtonFree>Try For Free</ButtonFree>
    </a>
  );
};

export default ButtonTryForFree;