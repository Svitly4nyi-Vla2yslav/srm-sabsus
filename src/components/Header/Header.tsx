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
import logo from "../../assets/icons/logo-srm.svg"
import ButtonTryForFree from '../ButtonTryForFree/ButtonTryForFree';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';

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
          <img src={logo} alt="Logo" />
        </Logo>
        <LanguageSwitcher/>
        <ButtonTryForFree/>
        <NavList>
          {isMobile ? (
            <BurgerMenu />
          ) : (
            <>
              <NavItem>
                <StyledNavLink to="/home">Home</StyledNavLink>
              </NavItem>{' '}
              <NavItem>
                <StyledNavLink to="/service">Service</StyledNavLink>
              </NavItem>{' '}
              <NavItem>
                <StyledNavLink to="/about">About Us</StyledNavLink>
              </NavItem>
              <NavItem>
                <StyledNavLink to="/pricing">Pricing</StyledNavLink>
              </NavItem>{' '}
              <NavItem>
                <StyledNavLink to="/contact">Contacts</StyledNavLink>
              </NavItem>{' '}
            </>
          )}
        </NavList>
      </HeaderWrapper>
    </NavbarContainer>
  );
};

export default Header;
