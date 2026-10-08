import { useEffect, useRef, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import {
  Wrapper,
  BurgerButton,
  Line,
  MenuOverlay,
  MenuLink,
  DropdownMenuMobile,
  DropdownItemMobile,
  ServiceLinkMobile,
  ArrowDownMobile,
  ServiceTitleWrapper,
} from './MobileMenu.styled';
import { StyledNavLink, StyledNavLinkDrop } from '../Header/Header.styled';
import { useTranslation } from 'react-i18next';
import Down from '../../assets/icons/chevron-down.svg';
import { useLocation } from 'react-router-dom';

const topLineVariants = {
  open: { rotate: 45, y: 8 },
  closed: { rotate: 0, y: 0 },
};
const middleLineVariants = { open: { opacity: 0 }, closed: { opacity: 1 } };
const bottomLineVariants = {
  open: { rotate: -45, y: -8 },
  closed: { rotate: 0, y: 0 },
};
const menuVariants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: '-100%' },
};

/**
 * Керує мобільною навігацією та вкладеним списком послуг.
 * Під час відкриття блокує прокручування сторінки, а після переходу, Escape чи вибору пункту
 * закриває обидва рівні меню.
 */
const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const { t } = useTranslation();
  const location = useLocation();

  // Зберігає попередній inline overflow, щоб не перезаписати стан, заданий іншим компонентом.
  const prevOverflowRef = useRef<string>('');

  // Синхронізує блокування прокручування з видимістю меню та відновлює його під час демонтажу.
  useEffect(() => {
    if (isOpen) {
      prevOverflowRef.current = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = prevOverflowRef.current || '';
    }

    return () => {
      document.body.style.overflow = prevOverflowRef.current || '';
    };
  }, [isOpen]);

  // Перемикає підменю послуг, не запускаючи навігацію або обробник батьківського елемента.
  const toggleServicesMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsServicesOpen(!isServicesOpen);
  };

  // Повертає меню та підменю до закритого стану.
  const closeMenu = () => {
    setIsOpen(false);
    setIsServicesOpen(false);
  };

  // Навігація на інший шлях або якір не повинна залишати оверлей відкритим.
  useEffect(() => {
    closeMenu();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname, location.hash]);

  // Глобальний обробник Escape забезпечує клавіатурний спосіб закриття; cleanup прибирає слухача.
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeMenu();
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, []);

  const navLinks = [
    { to: '/home#hero', labelKey: 'header.nav.home' },
    {
      labelKey: 'header.nav.service',
      isDropdown: true,
      subItems: [
        {
          to: '/service/customer-experience#ap',
          labelKey: 'header.services.customerExperience',
        },
        {
          to: '/service/pos-staff-operations#ap',
          labelKey: 'header.services.posStaff',
        },
        {
          to: '/service/kitchen-fulfillment#ap',
          labelKey: 'header.services.kitchen',
        },
        {
          to: '/service/inventory-warehousing#ap',
          labelKey: 'header.services.inventory',
        },
        {
          to: '/service/analytics-management#ap',
          labelKey: 'header.services.analytics',
        },
        {
          to: '/service/marketing-customization#ap',
          labelKey: 'header.services.marketing',
        },
        {
          to: '/service/integration-scaling#ap',
          labelKey: 'header.services.integration',
        },
      ],
    },
    { to: '/about#ap', labelKey: 'header.nav.about' },
    { to: '/pricing#app', labelKey: 'header.nav.pricing' },
    { to: '/contact#ap', labelKey: 'header.nav.contacts' },
  ];

  return (
    <Wrapper>
      <BurgerButton
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
      >
        <Line animate={isOpen ? 'open' : 'closed'} variants={topLineVariants} />
        <Line
          animate={isOpen ? 'open' : 'closed'}
          variants={middleLineVariants}
        />
        <Line
          animate={isOpen ? 'open' : 'closed'}
          variants={bottomLineVariants}
        />
      </BurgerButton>

      <AnimatePresence>
        {isOpen && (
          <MenuOverlay
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            transition={{ duration: 0.3 }}
            // Закриває оверлей лише коли натиснуто сам фон, а не його дочірній пункт.
            onClick={e => {
              if (e.target === e.currentTarget) closeMenu();
            }}
          >
            {navLinks.map((link, index) => (
              <div key={index}>
                {link.isDropdown ? (
                  <ServiceLinkMobile
                    // Hover підтримує мишу, а натискання на заголовок окремо обслуговує touch-пристрої.
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    <MenuLink onClick={toggleServicesMenu}>
                      <ServiceTitleWrapper>
                        <span>{t(link.labelKey)}</span>
                        <ArrowDownMobile
                          src={Down}
                          alt="▼"
                          $isOpen={isServicesOpen}
                        />
                      </ServiceTitleWrapper>
                    </MenuLink>

                    <AnimatePresence>
                      {isServicesOpen && (
                        <DropdownMenuMobile
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          {link.subItems.map((subItem, subIndex) => (
                            <DropdownItemMobile key={subIndex}>
                              <StyledNavLinkDrop
                                to={subItem.to}
                                onClick={closeMenu}
                              >
                                {t(subItem.labelKey)}
                              </StyledNavLinkDrop>
                            </DropdownItemMobile>
                          ))}
                        </DropdownMenuMobile>
                      )}
                    </AnimatePresence>
                  </ServiceLinkMobile>
                ) : link.to ? (
                  <MenuLink onClick={closeMenu}>
                    <StyledNavLink to={link.to}>
                      {t(link.labelKey)}
                    </StyledNavLink>
                  </MenuLink>
                ) : null}
              </div>
            ))}
          </MenuOverlay>
        )}
      </AnimatePresence>
    </Wrapper>
  );
};

export default BurgerMenu;
