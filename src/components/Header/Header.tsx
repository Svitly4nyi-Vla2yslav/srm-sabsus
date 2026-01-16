import React, { useEffect, useRef, useState } from 'react';
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
  ServicesToggleButton, // ✅ NEW
} from './Header.styled';
import { useMediaQuery } from 'react-responsive';
import AOS from 'aos';
import 'aos/dist/aos.css';
import logo from '../../assets/icons/logo-srm.svg';
import ButtonTryForFree from '../ButtonTryForFree/ButtonTryForFree';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom'; // ✅ add useLocation
import Down from '../../assets/icons/chevron-down.svg';
import BurgerMenu from '../MobileMenu/MobileMenu';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  const servicesRef = useRef<HTMLLIElement | null>(null);

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
    setIsServicesOpen(prev => !prev);
  };

  const closeServicesMenu = () => {
    setIsServicesOpen(false);
  };

  useEffect(() => {
    AOS.init({ duration: 3000 });
    AOS.refresh();

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      // ✅ На всякий: якщо юзер почав скролити, dropdown не має “висіти”
      // (це не must-have, але допомагає не перекривати контент)
      // closeServicesMenu();
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isMobile = useMediaQuery({ query: '(max-width: 1439px)' });

  // ✅ Закриваємо dropdown при зміні роуту/хеша (щоб не “залипало”)
  useEffect(() => {
    closeServicesMenu();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname, location.hash]);

  // ✅ Закриття dropdown при кліку поза ним
  useEffect(() => {
    const handlePointerDown = (e: PointerEvent) => {
      if (!isServicesOpen) return;
      const target = e.target as Node;
      if (servicesRef.current && !servicesRef.current.contains(target)) {
        closeServicesMenu();
      }
    };

    document.addEventListener('pointerdown', handlePointerDown);
    return () => document.removeEventListener('pointerdown', handlePointerDown);
  }, [isServicesOpen]);

  // ✅ Закриття dropdown по ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeServicesMenu();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <NavbarContainer $isScrolled={isScrolled}>
      <HeaderWrapper id="header">
        <Logo to="/home#hero" onClick={handleLogoClick}>
          <img src={logo} alt={t('header.logoAlt')} />
        </Logo>

        {!isMobile && (
          <NavList>
            <NavItem>
              <StyledNavLink to="/home#hero">
                {t('header.nav.home')}
              </StyledNavLink>
            </NavItem>

            <NavItem
              ref={servicesRef}
              // ❌ було hover-open (аудит каже: меню не повинно відкриватися автоматично)
              // onMouseEnter={() => setIsServicesOpen(true)}
              // onMouseLeave={() => setIsServicesOpen(false)}
              // ❌ було onClick на весь item (клік по лінках всередині міг “мигати” станом)
              // onClick={toggleServicesMenu}
            >
              <ServiceLink>
                <StyledNavLink
                  to="/service#all"
                  style={{ padding: '10px 0px' }}
                  onClick={closeServicesMenu}
                >
                  {t('header.nav.service')}
                </StyledNavLink>

                {/* ✅ Тепер відкриття dropdown тільки по кліку на кнопку-стрілку */}
                <ServicesToggleButton
                  type="button"
                  aria-label="Toggle services menu"
                  aria-expanded={isServicesOpen}
                  onClick={e => {
                    e.preventDefault();
                    e.stopPropagation();
                    toggleServicesMenu();
                  }}
                >
                  {/* Стрілка декоративна: alt пустий */}
                  <ArrowDown src={Down} alt="" aria-hidden="true" />
                </ServicesToggleButton>

                {isServicesOpen && (
                  <DropdownMenu>
                    <DropdownItem>
                      <StyledNavLink
                        to="/service/customer-experience#ap"
                        onClick={closeServicesMenu}
                      >
                        {t('header.services.customerExperience')}
                      </StyledNavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <StyledNavLink
                        to="/service/pos-staff-operations#ap"
                        onClick={closeServicesMenu}
                      >
                        {t('header.services.posStaff')}
                      </StyledNavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <StyledNavLink
                        to="/service/kitchen-fulfillment#ap"
                        onClick={closeServicesMenu}
                      >
                        {t('header.services.kitchen')}
                      </StyledNavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <StyledNavLink
                        to="/service/inventory-warehousing#ap"
                        onClick={closeServicesMenu}
                      >
                        {t('header.services.inventory')}
                      </StyledNavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <StyledNavLink
                        to="/service/analytics-management#ap"
                        onClick={closeServicesMenu}
                      >
                        {t('header.services.analytics')}
                      </StyledNavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <StyledNavLink
                        to="/service/marketing-customization#ap"
                        onClick={closeServicesMenu}
                      >
                        {t('header.services.marketing')}
                      </StyledNavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <StyledNavLink
                        to="/service/integration-scaling#ap"
                        onClick={closeServicesMenu}
                      >
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
            {isMobile && <BurgerMenu />}
          </div>
        </LangButtonContainer>
      </HeaderWrapper>
    </NavbarContainer>
  );
};

export default Header;
