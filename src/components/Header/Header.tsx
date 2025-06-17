import React, { useEffect, useState } from 'react';
import {
  HeaderWrapper,
  LangButtonContainer,
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
import logo from '../../assets/icons/logo-srm.svg';
import ButtonTryForFree from '../ButtonTryForFree/ButtonTryForFree';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import { useTranslation } from 'react-i18next';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({ duration: 3000 });
    AOS.refresh();
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isMobile = useMediaQuery({ query: '(max-width: 1439px)' });

 return (
    <NavbarContainer $isScrolled={isScrolled}>
      <HeaderWrapper id="header">
        <Logo to="/home">
          <img src={logo} alt={t('header.logoAlt')} />
        </Logo>
        
        {!isMobile && (
          <NavList>
            <NavItem>
              <StyledNavLink to="/home">{t('header.nav.home')}</StyledNavLink>
            </NavItem>
            <NavItem>
              <StyledNavLink to="/service">{t('header.nav.service')}</StyledNavLink>
            </NavItem>
            <NavItem>
              <StyledNavLink to="/about">{t('header.nav.about')}</StyledNavLink>
            </NavItem>
            <NavItem>
              <StyledNavLink to="/pricing">{t('header.nav.pricing')}</StyledNavLink>
            </NavItem>
            <NavItem>
              <StyledNavLink to="/contact">{t('header.nav.contacts')}</StyledNavLink>
            </NavItem>
          </NavList>
        )}
        
        <LangButtonContainer>
          <div style={{display: "flex"}}>
            <LanguageSwitcher />
            <ButtonTryForFree />
          </div>
          {isMobile && <BurgerMenu />}
        </LangButtonContainer>
      </HeaderWrapper>
    </NavbarContainer>
  );
};

export default Header;
