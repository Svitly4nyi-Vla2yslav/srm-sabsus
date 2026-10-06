import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const ErrorContainer = styled(motion.div)`
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
  background: #000000;
  color: white;
  font-weight: 700;
  font-size: 1.4rem;
  padding: 1rem 2rem;
  border-radius: 8px;
  user-select: none;
`;

// shakeAnimation задає одноразове горизонтальне похитування контейнера після появи помилки.
const shakeAnimation = {
  x: [0, -10, 10, -10, 10, 0],
  transition: { 
    duration: 0.6, 
    ease: "easeInOut" as const // Літеральний тип потрібен Framer Motion для перевірки easing.
  }
};

interface ErrorScreenProps {
  message: string;
}

// ErrorScreen приймає текст помилки, оголошує його терміновим повідомленням для скринридера та не змінює зовнішній стан.
const ErrorScreen: React.FC<ErrorScreenProps> = ({ message }) => (
  <ErrorContainer {...shakeAnimation} role="alert" aria-live="assertive">
    Помилка: {message}
  </ErrorContainer>
);

export default ErrorScreen;
