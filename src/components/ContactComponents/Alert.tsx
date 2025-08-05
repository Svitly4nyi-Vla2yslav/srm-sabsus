// Alert.tsx
import { motion } from 'framer-motion';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

export type AlertType = 'success' | 'error';

interface AlertProps {
  type: AlertType;
  message?: string;
  onClose: () => void;
  autoClose?: boolean;
  autoCloseDuration?: number;
}

const AlertContainer = styled(motion.div)<{ $type: AlertType }>`
  position: fixed;
  top: 100px;
  right: 100px;
  padding: 16px 24px;
  border-radius: 8px;
  background: ${props => 
    props.$type === 'success' 
      ? 'linear-gradient(135deg, #4caf50, #2e7d32)' 
      : 'linear-gradient(135deg, #f44336, #c62828)'};
  color: white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  z-index: 1000;
  max-width: 400px;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 18px;
  cursor: pointer;
  padding: 0;
  margin-left: 12px;
`;

export const Alert: React.FC<AlertProps> = ({
  type,
  message,
  onClose,
  autoClose = true,
  autoCloseDuration = 25000,
}) => {
  const { t } = useTranslation();

  useEffect(() => {
    if (autoClose) {
      const timer = setTimeout(() => {
        onClose();
      }, autoCloseDuration);
      return () => clearTimeout(timer);
    }
  }, [autoClose, autoCloseDuration, onClose]);

  const defaultMessages = {
    success: t('alert.success'),
    error: t('alert.error'),
  };

  return (
    <AlertContainer
      $type={type}
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 300, opacity: 0 }}
      transition={{ type: 'spring', damping: 25 }}
    >
      <div>{message || defaultMessages[type]}</div>
      <CloseButton onClick={onClose}>&times;</CloseButton>
    </AlertContainer>
  );
};