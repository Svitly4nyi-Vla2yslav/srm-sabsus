import { useEffect, useState } from 'react';
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
} from './MobileMenu.styled';
import { StyledNavLink, StyledNavLinkDrop } from '../Header/Header.styled';
import { useTranslation } from 'react-i18next';
import Down from '../../assets/icons/chevron-down.svg';

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
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const toggleServicesMenu = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setIsServicesOpen(false);
  };

  const navLinks = [
    { to: '/home', labelKey: 'header.nav.home' },
    { 
      to: '/service', 
      labelKey: 'header.nav.service',
      isDropdown: true,
      subItems: [
        { to: '/service/customer-experience', labelKey: 'header.services.customerExperience' },
        { to: '/service/pos-staff-operations', labelKey: 'header.services.posStaff' },
        { to: '/service/kitchen-fulfillment', labelKey: 'header.services.kitchen' },
        { to: '/service/inventory-warehousing', labelKey: 'header.services.inventory' },
        { to: '/service/analytics-management', labelKey: 'header.services.analytics' },
        { to: '/service/marketing-customization', labelKey: 'header.services.marketing' },
        { to: '/service/integration-scaling', labelKey: 'header.services.integration' },
      ]
    },
    { to: '/about', labelKey: 'header.nav.about' },
    { to: '/pricing', labelKey: 'header.nav.pricing' },
    { to: '/contact', labelKey: 'header.nav.contacts' },
  ];

  return (
    <Wrapper>
      <BurgerButton onClick={() => setIsOpen(!isOpen)} aria-label={isOpen ? 'Close menu' : 'Open menu'}>
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
              <div key={index}>
                {link.isDropdown ? (
                  <ServiceLinkMobile
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    <MenuLink 
                      onClick={toggleServicesMenu}
                    >
                      <StyledNavLink to={link.to}>
                        {t(link.labelKey)} <ArrowDownMobile src={Down}
                         alt="▼" $isOpen={isServicesOpen} />
                      </StyledNavLink>
                    </MenuLink>
                    <AnimatePresence>
                      {isServicesOpen && (
                        <DropdownMenuMobile
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
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
                ) : (
                  <MenuLink onClick={closeMenu}>
                    <StyledNavLink to={link.to}>
                      {t(link.labelKey)}
                    </StyledNavLink>
                  </MenuLink>
                )}
              </div>
            ))}
          </MenuOverlay>
        )}
      </AnimatePresence>
    </Wrapper>
  );
};

export default BurgerMenu;