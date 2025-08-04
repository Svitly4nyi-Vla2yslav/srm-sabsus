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
  ArrowDown,
} from './Header.styled';
import { useMediaQuery } from 'react-responsive';
import AOS from 'aos';
import 'aos/dist/aos.css';
import logo from '../../assets/icons/logo-srm.svg';
import ButtonTryForFree from '../ButtonTryForFree/ButtonTryForFree';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import Down from '../../assets/icons/chevron-down.svg';
import BurgerMenu from '../MobileMenu/MobileMenu';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
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
        <Logo to="/home#hero" onClick={handleLogoClick}>
          <img src={logo} alt={t('header.logoAlt')} />
        </Logo>

        {!isMobile && (
          <NavList>
            <NavItem>
              <StyledNavLink to="/home#hero">{t('header.nav.home')}</StyledNavLink>
            </NavItem>

            <NavItem
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
              onClick={toggleServicesMenu}
            >
              <ServiceLink>
                <StyledNavLink to="/service#all" style={{padding: "10px 0px"}}>
                  {t('header.nav.service')} <ArrowDown src={Down} alt="⬇️" />
                </StyledNavLink>
                {isServicesOpen && (
                  <DropdownMenu>
                    <DropdownItem>
                      <StyledNavLink to="/service/customer-experience#ap">
                        {t('header.services.customerExperience')}
                      </StyledNavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <StyledNavLink to="/service/pos-staff-operations#ap">
                        {t('header.services.posStaff')}
                      </StyledNavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <StyledNavLink to="/service/kitchen-fulfillment#ap">
                        {t('header.services.kitchen')}
                      </StyledNavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <StyledNavLink to="/service/inventory-warehousing#ap">
                        {t('header.services.inventory')}
                      </StyledNavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <StyledNavLink to="/service/analytics-management#ap">
                        {t('header.services.analytics')}
                      </StyledNavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <StyledNavLink to="/service/marketing-customization#ap">
                        {t('header.services.marketing')}
                      </StyledNavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <StyledNavLink to="/service/integration-scaling#ap">
                        {t('header.services.integration')}
                      </StyledNavLink>
                    </DropdownItem>
                  </DropdownMenu>
                )}
              </ServiceLink>
            </NavItem>

            <NavItem>
              <StyledNavLink
                // style={{ pointerEvents: 'none', opacity: 0.5 }}
                to="/about#ap"
              >
                {t('header.nav.about')}
              </StyledNavLink>
            </NavItem>
            <NavItem>
              <StyledNavLink
                // style={{ pointerEvents: 'none', opacity: 0.5 }}
                to="/pricing#app"
              >
                {t('header.nav.pricing')}
              </StyledNavLink>
            </NavItem>
            <NavItem>
              <StyledNavLink
                // style={{ pointerEvents: 'none', opacity: 0.5 }}
                to="/contact#ap"
              >
                {t('header.nav.contacts')}
              </StyledNavLink>
            </NavItem>
          </NavList>
        )}

        <LangButtonContainer>
          <div style={{ display: 'flex' }}>
            <LanguageSwitcher />
            <ButtonTryForFree />
          {isMobile && (<BurgerMenu/>)}  
          </div>
        </LangButtonContainer>
      </HeaderWrapper>
    </NavbarContainer>
  );
};

export default Header;