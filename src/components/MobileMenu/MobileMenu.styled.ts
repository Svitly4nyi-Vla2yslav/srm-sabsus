import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  z-index: 1000;

  @media screen and (min-width: 1440px) {
    display: none;
  }
`;

export const BurgerButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 6px;
  border-radius: 12px;
  padding: 8px;
  width: 36px;
  height: 36px;
  cursor: pointer;
  z-index: 1001;
  backdrop-filter: blur(16px);
  box-shadow: 
    inset 0 -8px 24px 0 rgba(255, 255, 255, 0.03), 
    inset 0 -5px 6px 0 rgba(255, 255, 255, 0.03), 
    0 8px 16px -8px rgba(0, 0, 0, 0.03), 
    0 2px 4px -2px rgba(0, 0, 0, 0.08);
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.12) 7%, rgba(255, 255, 255, 0) 86%);
  border: none;
`;

export const Line = styled(motion.div)`
  width: 20px;
  height: 2px;
  background: white;
  border-radius: 2px;
`;

export const MenuOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.96);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 5px;
  padding: 20px;
  z-index: 1000;
  overflow-y: auto;
`;

export const MenuLink = styled(motion.span)`
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 56px;
  line-height: 120%;
  color: var(--white-50);
  margin: 12px 0;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: var(--purple-400);
  }
`;

export const ServiceLinkMobile = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const DropdownMenuMobile = styled(motion.div)`
  position: relative;
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  margin-top: 8px;
  overflow: hidden;
`;

export const DropdownItemMobile = styled.div`
  padding: 10px 0;
`;

export const ArrowDownMobile = styled.img<{ $isOpen: boolean }>`
  margin-left: 8px;
  transition: transform 0.3s ease;
  transform: ${({ $isOpen }) => $isOpen ? 'rotate(180deg)' : 'rotate(0)'};
`;

export const ServiceTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  cursor: pointer;
  
  span {
    flex-grow: 1;
  }
  
  ${ArrowDownMobile} {
    padding: 8px;
    margin-right: -8px;
  }
`;