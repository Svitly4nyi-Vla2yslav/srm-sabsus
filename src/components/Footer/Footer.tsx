import React, { useEffect, useState } from 'react';
import { scroller } from 'react-scroll';
import { useTranslation } from 'react-i18next';
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
  const { t } = useTranslation();
  const [showPolicies, setShowPolicies] = useState(false);
  const [activePolicy, setActivePolicy] = useState<string | null>(null);

  useEffect(() => {
    if (showPolicies && activePolicy) {
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
          
          <WraperLink>{t('footer.sections.home')}</WraperLink>
          <Link href="#">{t('footer.links.benefits')}</Link>
          <Link href="#">{t('footer.links.service')}</Link>
          <Link href="#">{t('footer.links.prices')}</Link>
          
          <WraperLink>{t('footer.sections.product')}</WraperLink>
          <Link href="#">{t('footer.links.customerExperience')}</Link>
          <Link href="#">{t('footer.links.posStaff')}</Link>
          <Link href="#">{t('footer.links.kitchen')}</Link>
          <Link href="#">{t('footer.links.inventory')}</Link>
          <Link href="#">{t('footer.links.analytics')}</Link>
          <Link href="#">{t('footer.links.marketing')}</Link>
          <Link href="#">{t('footer.links.integration')}</Link>
          
          <WraperLink>{t('footer.sections.company')}</WraperLink>
          <Link href="#">{t('footer.links.ourServices')}</Link>
          <Link href="#">{t('footer.links.aboutUs')}</Link>
          <Link href="#">{t('footer.links.contactUs')}</Link>
          
          <WraperLink>{t('footer.sections.demo')}</WraperLink>
          <HeroButtonGrey>{t('footer.buttons.viewDemo')}</HeroButtonGrey>
          
          <Border />
          <Licens>
            <CookieContainer>
              <Cookie onClick={() => handlePolicyClick('privacy')}>
                {t('footer.legal.cookiePolicy')} <Point />{' '}
              </Cookie>
              <Cookie onClick={() => handlePolicyClick('cookie')}>
                {t('footer.legal.privacyStatement')} <Point />{' '}
              </Cookie>
              <Cookie onClick={() => handlePolicyClick('terms')}>
                {t('footer.legal.termsOfUse')}
              </Cookie>
            </CookieContainer>
            <CookieContainer>
              <Cookie>{t('footer.legal.copyright')}</Cookie>
            </CookieContainer>
          </Licens>
        </FooterWrapp>
      </FooterContainer>
      {showPolicies && <PoliciesContent activePolicy={activePolicy} />}
    </>
  );
};

export default Footer;