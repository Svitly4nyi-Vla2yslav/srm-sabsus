import React, { useEffect } from 'react';
import styled from 'styled-components';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: auto;
  padding: 20px;
  box-sizing: border-box;
`;

const ModalContent = styled.div`
  position: relative;
  max-width: 100vw;
  max-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: transparent;
`;

export const MediaContainer = styled.div`
  max-width: 100%;
  max-height: 100%;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

export const TextContainer = styled.div`
  color: #fff;
  text-align: center;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
  position: sticky;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(5px);
  padding: 15px;
`;

export const CloseButton = styled.button`
  position: fixed;
  top: 20px;
  right: 20px;
  background: transparent;
  border: none;
  font-size: 40px;
  cursor: pointer;
  color: #999;
  z-index: 100;
  &:hover {
    color: #fff;
  }
`;

interface ModalProps {
  onClose: () => void;
  children: React.ReactNode;
  preventScroll?: boolean;
}

const Modal: React.FC<ModalProps> = ({ onClose, children, preventScroll = true }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (preventScroll) {
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
    }

    document.addEventListener('keydown', handleKeyDown);
    
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      
      if (preventScroll) {
        const scrollY = parseInt(document.body.style.top || '0');
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        window.scrollTo(0, Math.abs(scrollY));
      }
    };
  }, [onClose, preventScroll]);

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent>
        {children}
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;