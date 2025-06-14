import React, { useEffect, useState } from 'react';
import { Link as ScrollLink, Element, scroller } from 'react-scroll';
import {
  Border,
  Cookie,
  CookieContainer,
  FooterContainer,
  FooterWrapp,
  HeroButtonGrey,
  Licens,
  Link,
  Logo,
  Point,
  WraperLink,
} from './Footer.styled';

import 'aos/dist/aos.css';
import logo from '../../assets/icons/logo-srm.svg';
import { PoliciesContent } from './PoliciesContent';

const Footer: React.FC = () => {
  const [showPolicies, setShowPolicies] = useState(false);
  const [activePolicy, setActivePolicy] = useState<string | null>(null);

  useEffect(() => {
    if (showPolicies && activePolicy) {
      // Додаємо невелику затримку для гарантії рендеру
      const timer = setTimeout(() => {
        scroller.scrollTo(activePolicy, {
          duration: 800,
          delay: 0,
          smooth: 'easeInOutQuart',
          offset: -100,
        });
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [showPolicies, activePolicy]);

  const handlePolicyClick = (policy: string) => {
    setActivePolicy(policy);
    setShowPolicies(true);
  };

  return (
    <>
      <FooterContainer>
        <FooterWrapp>
          <Logo style={{ marginBottom: 16 }}>
            <img src={logo} alt="Logo" />
          </Logo>
          <WraperLink>Home</WraperLink>
          <Link href="#">Benefits</Link>
          <Link href="#">Service</Link>
          <Link href="#">Prices</Link>
          <WraperLink>Product</WraperLink>
          <Link href="#">Customer Experience Suite</Link>
          <Link href="#">POS & Staff Operations</Link>
          <Link href="#">Kitchen & Fulfillment</Link>
          <Link href="#">Inventory & Warehousing</Link>{' '}
          <Link href="#">Analytics & Management</Link>
          <Link href="#">Marketing & Customization</Link>
          <Link href="#">Integration & Scaling </Link>
          <WraperLink>Company</WraperLink>
          <Link href="#">Our Services</Link>
          <Link href="#">About Us</Link>
          <Link href="#">Contact Us</Link>
          <WraperLink>Watch the live demo</WraperLink>
          <HeroButtonGrey>View demo</HeroButtonGrey>
          <Border />
          <Licens>
            <CookieContainer>
              <Cookie onClick={() => handlePolicyClick('privacy')}>
                Cookie Policy <Point />{' '}
              </Cookie>
              <Cookie onClick={() => handlePolicyClick('cookie')}>
                Privacy Statement <Point />{' '}
              </Cookie>
              <Cookie onClick={() => handlePolicyClick('terms')}>
                Terms of Use
              </Cookie>
            </CookieContainer>
            <CookieContainer>
              <Cookie>© 2023 CRM Solutions, Inc. All rights reserved.</Cookie>
            </CookieContainer>
          </Licens>
        </FooterWrapp>
      </FooterContainer>
      {showPolicies && <PoliciesContent activePolicy={activePolicy} />}
    </>
  );
};

export default Footer;
