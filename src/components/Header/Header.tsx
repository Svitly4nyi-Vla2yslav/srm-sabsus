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

/**
 * Формує адаптивну шапку, відстежує прокручування та керує desktop-підменю послуг.
 * На мобільній ширині передає навігацію BurgerMenu; глобальні слухачі завжди очищуються.
 */
const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  const servicesRef = useRef<HTMLLIElement | null>(null);

  // Повертає сторінку вгору та переходить на /home, якщо логотип натиснули з іншого маршруту.
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

  // Інвертує видимість desktop-підменю послуг.
  const toggleServicesMenu = () => {
    setIsServicesOpen(prev => !prev);
  };

  // Уніфіковано закриває підменю після навігації або зовнішньої взаємодії.
  const closeServicesMenu = () => {
    setIsServicesOpen(false);
  };

  // Ініціалізує AOS і синхронізує компактний вигляд шапки з порогом прокручування 50 px.
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

  // Зміна шляху або hash закриває підменю, щоб воно не залишалося над новим контентом.
  useEffect(() => {
    closeServicesMenu();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname, location.hash]);

  // Pointer-слухач закриває відкрите підменю лише після натискання поза його контейнером.
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

  // Escape забезпечує клавіатурний спосіб закрити підменю.
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
              // Підменю відкривається окремою кнопкою, тому посилання на розділ не перемикає його стан.
            >
              <ServiceLink>
                <StyledNavLink
                  to="/service#all"
                  style={{ padding: '10px 0px' }}
                  onClick={closeServicesMenu}
                >
                  {t('header.nav.service')}
                </StyledNavLink>

                {/* Окрема кнопка з aria-expanded повідомляє допоміжним технологіям стан підменю. */}
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
