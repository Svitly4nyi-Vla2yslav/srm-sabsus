import React, { useEffect, useState } from 'react';
import {
  HeaderWrapper,
  Logo,
  NavbarContainer,
  NavItem,
  NavList,
  StyledNavLink,
} from './Header.styled';
import { useMediaQuery } from 'react-responsive';
import AOS from 'aos';
import 'aos/dist/aos.css';
import BurgerMenu from '../MobileMenu/MobileMenu';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 3000 });
    AOS.refresh();
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isMobile = useMediaQuery({ query: '(max-width: 773px)' });

  return (
    <NavbarContainer $isScrolled={isScrolled}>
    <HeaderWrapper>
      <Logo to="/home">
        <img src={""} alt="Logo" />
      </Logo>
      <NavList>
        {isMobile ? (
          <BurgerMenu />
        ) : (
          <>
            <NavItem>
              <StyledNavLink to="/work">WORK</StyledNavLink>
            </NavItem>{' '}
            <NavItem>
              <StyledNavLink to="/photo">PHOTOGRAPHY</StyledNavLink>
            </NavItem>{' '}
            <NavItem>
              <StyledNavLink to="/info">INFO</StyledNavLink>
            </NavItem>{' '}
            <NavItem>
              <StyledNavLink to="/contact">CONTACTS</StyledNavLink>
            </NavItem>{' '}
            <NavItem>
              <StyledNavLink to="/about">ABOUT ME</StyledNavLink>
            </NavItem>
          </>
        )}
      </NavList></HeaderWrapper>
    </NavbarContainer>
  );
};

export default Header;
