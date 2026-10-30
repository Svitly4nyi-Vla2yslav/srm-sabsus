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

/** Задає одноразове горизонтальне похитування контейнера без зміни стану компонента. */
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

/**
 * Приймає текст помилки й повертає повноекранне анімоване повідомлення.
 * role='alert' разом з aria-live='assertive' просить скринридер оголосити його негайно;
 * компонент не зберігає стан, не викликає callback і не змінює передане повідомлення.
 */
const ErrorScreen: React.FC<ErrorScreenProps> = ({ message }) => (
  <ErrorContainer {...shakeAnimation} role="alert" aria-live="assertive">
    Помилка: {message}
  </ErrorContainer>
);

export default ErrorScreen;
