import React, { useEffect, useState } from 'react';
import {
  HeaderWrapper,
  LangButtonContainer,
  Logo,
  NavbarContainer,
  NavItem,
  NavList,
  StyledNavLink,
  DropdownMenu,
  DropdownItem,
  ServiceLink,
} from './Header.styled';
import { useMediaQuery } from 'react-responsive';
import AOS from 'aos';
import 'aos/dist/aos.css';
import logo from '../../assets/icons/logo-srm.svg';
import ButtonTryForFree from '../ButtonTryForFree/ButtonTryForFree';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    
    if (window.location.pathname !== '/home') {
      navigate('/home');
    }
  };

  const toggleServicesMenu = () => {
    setIsServicesOpen(!isServicesOpen);
  };

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
        <Logo to="/home" onClick={handleLogoClick}>
          <img src={logo} alt={t('header.logoAlt')} />
        </Logo>
        
        {!isMobile && (
          <NavList>
            <NavItem>
              <StyledNavLink to="/home">{t('header.nav.home')}</StyledNavLink>
            </NavItem>
            
            <NavItem 
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
              onClick={toggleServicesMenu}
            >
              <ServiceLink style={{ pointerEvents: "none", opacity: 0.5 }}>
                {t('header.nav.service')} <span style={{textAlign: "revert"}}>⌄</span>
                {isServicesOpen && (
                  <DropdownMenu>
                    <DropdownItem>
                      <StyledNavLink to="/service/customer-experience">
                        Customer Experience Suite
                      </StyledNavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <StyledNavLink to="/service/pos-staff-operations">
                        POS & Staff Operations
                      </StyledNavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <StyledNavLink to="/service/kitchen-fulfillment">
                        Kitchen & Fulfillment
                      </StyledNavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <StyledNavLink to="/service/inventory-warehousing">
                        Inventory & Warehousing
                      </StyledNavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <StyledNavLink to="/service/analytics-management">
                        Analytics & Management
                      </StyledNavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <StyledNavLink to="/service/marketing-customization">
                        Marketing & Customization
                      </StyledNavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <StyledNavLink to="/service/integration-scaling">
                        Integration & Scaling
                      </StyledNavLink>
                    </DropdownItem>
                  </DropdownMenu>
                )}
              </ServiceLink>
            </NavItem>
            
            <NavItem>
              <StyledNavLink style={{ pointerEvents: "none", opacity: 0.5 }} to="/about">{t('header.nav.about')}</StyledNavLink>
            </NavItem>
            <NavItem>
              <StyledNavLink style={{ pointerEvents: "none", opacity: 0.5 }} to="/pricing">{t('header.nav.pricing')}</StyledNavLink>
            </NavItem>
            <NavItem>
              <StyledNavLink style={{ pointerEvents: "none", opacity: 0.5 }} to="/contact">{t('header.nav.contacts')}</StyledNavLink>
            </NavItem>
          </NavList>
        )}
        
        <LangButtonContainer>
          <div style={{display: "flex"}}>
            <LanguageSwitcher />
            <ButtonTryForFree />
          </div>
        </LangButtonContainer>
      </HeaderWrapper>
    </NavbarContainer>
  );
};

export default Header;