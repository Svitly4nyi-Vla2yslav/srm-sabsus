import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Wrapper, BurgerButton, Line, MenuOverlay, MenuLink } from './MobileMenu.styled';
import { StyledNavLink } from '../Header/Header.styled';


const topLineVariants = {
  open: { rotate: 45, y: 8 },
  closed: { rotate: 0, y: 0 },
};

const middleLineVariants = {
  open: { opacity: 0 },
  closed: { opacity: 1 },
};

const bottomLineVariants = {
  open: { rotate: -45, y: -8 },
  closed: { rotate: 0, y: 0 },
};

const menuVariants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: '-100%' },
};

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const navLinks = [
    // { to: '/home', label: 'WELCOME' },
    { to: '/home', label: 'Home' },
    { to: '/service', label: 'Service' },
    { to: '/about', label: 'About Us' },
    { to: '/pricing', label: 'Pricing' },
    { to: '/contact', label: 'Contacts' },
    
  ];

  return (
    <Wrapper>
      <BurgerButton onClick={() => setIsOpen(!isOpen)}>
        <Line animate={isOpen ? 'open' : 'closed'} variants={topLineVariants} />
        <Line animate={isOpen ? 'open' : 'closed'} variants={middleLineVariants} />
        <Line animate={isOpen ? 'open' : 'closed'} variants={bottomLineVariants} />
      </BurgerButton>

      <AnimatePresence>
        {isOpen && (
          <MenuOverlay
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            transition={{ duration: 0.3 }}
          >
            {navLinks.map((link, index) => (
              <MenuLink key={index} onClick={() => setIsOpen(false)}>
                <StyledNavLink to={link.to}>{link.label}</StyledNavLink>
              </MenuLink>
            ))}
          </MenuOverlay>
        )}
      </AnimatePresence>
    </Wrapper>
  );
};

export default BurgerMenu;
