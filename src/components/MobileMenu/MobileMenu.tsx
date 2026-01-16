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

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const { t } = useTranslation();
  const location = useLocation();

  // ✅ Запам’ятовуємо попереднє значення overflow, щоб повернути точно як було
  const prevOverflowRef = useRef<string>('');

  useEffect(() => {
    if (isOpen) {
      prevOverflowRef.current = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = prevOverflowRef.current || '';
    }

    return () => {
      // cleanup на unmount
      document.body.style.overflow = prevOverflowRef.current || '';
    };
  }, [isOpen]);

  const toggleServicesMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsServicesOpen(!isServicesOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setIsServicesOpen(false);
  };

  // ✅ Закриваємо меню при зміні роуту/хеша
  useEffect(() => {
    closeMenu();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname, location.hash]);

  // ✅ Закриваємо меню по ESC
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
            // ✅ клік по фону закриває меню
            onClick={e => {
              if (e.target === e.currentTarget) closeMenu();
            }}
          >
            {navLinks.map((link, index) => (
              <div key={index}>
                {link.isDropdown ? (
                  <ServiceLinkMobile
                    // було hover-open. На touch це майже без сенсу, але залишаю як було:
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
