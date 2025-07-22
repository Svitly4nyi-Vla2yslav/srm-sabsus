import React, { useEffect, useState } from 'react';
import { scroller } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import {
  Border,
  Container,
  ContainerSocialDemo,
  Cookie,
  CookieContainer,
  Deckstop,
  FooterContainer,
  FooterWrapp,
  HeroButtonGrey,
  Licens,
  Link,
  Logo,
  Point,
  SocialIcon,
  SocialLink,
  SocialWrapper,
  WraperLink,
} from './Footer.styled';

import 'aos/dist/aos.css';
import logo from '../../assets/icons/logo-srm.svg';
import In from '../../assets/icons/social/in.svg';
import Insta from '../../assets/icons/social/inst.svg';
import Faceboock from '../../assets/icons/social/faceboock.svg';

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
          <Container>
            <Logo style={{ marginBottom: 16 }}>
              <img src={logo} alt="Logo" />
            </Logo>
          </Container>
          <Deckstop>
            <Container>
              <WraperLink>{t('footer.sections.home')}</WraperLink>
              <Link href="#" target="_blank" rel="noopener noreferrer">
                {t('footer.links.benefits')}
              </Link>
              <Link href="#" target="_blank" rel="noopener noreferrer">
                {t('footer.links.service')}
              </Link>
              <Link href="#" target="_blank" rel="noopener noreferrer">
                {t('footer.links.prices')}
              </Link>
            </Container>
            <Container>
              <WraperLink>{t('footer.sections.product')}</WraperLink>
              <Link
                href="https://srm-sabsus.netlify.app/service/customer-experience"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t('footer.links.customerExperience')}
              </Link>
              <Link
                href="https://srm-sabsus.netlify.app/service/pos-staff-operations"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t('footer.links.posStaff')}
              </Link>
              <Link
                href="https://srm-sabsus.netlify.app/service/kitchen-fulfillment"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t('footer.links.kitchen')}
              </Link>
              <Link
                href="https://srm-sabsus.netlify.app/service/inventory-warehousing"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t('footer.links.inventory')}
              </Link>
              <Link
                href="https://srm-sabsus.netlify.app/service/analytics-management"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t('footer.links.analytics')}
              </Link>
              <Link
                href="https://srm-sabsus.netlify.app/service/marketing-customization"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t('footer.links.marketing')}
              </Link>
              <Link
                href="https://srm-sabsus.netlify.app/service/integration-scaling"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t('footer.links.integration')}
              </Link>
            </Container>

            <Container>
              {' '}
              <WraperLink>{t('footer.sections.company')}</WraperLink>
              <Link
                href="https://srm-sabsus.netlify.app/service"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t('footer.links.ourServices')}
              </Link>
              <Link href="#" target="_blank" rel="noopener noreferrer">
                {t('footer.links.aboutUs')}
              </Link>
              <Link href="#" target="_blank" rel="noopener noreferrer">
                {t('footer.links.contactUs')}
              </Link>
            </Container>
          </Deckstop>
          <ContainerSocialDemo>
            {' '}
            <Container>
              <WraperLink>{t('footer.sections.demo')}</WraperLink>
              <a
                href="https://sabsus.app/login/demo@sabsus.com/demo2025"
                target="_blank"
                rel="noopener noreferrer"
              >
                <HeroButtonGrey>{t('footer.buttons.viewDemo')}</HeroButtonGrey>
              </a>
            </Container>
            <SocialWrapper>
              <SocialLink
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SocialIcon src={In} alt="🔗" />
              </SocialLink>
              <SocialLink
                href="https://www.instagram.com/sabsusapp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SocialIcon src={Insta} alt="🔗" />
              </SocialLink>
              <SocialLink
                href="https://www.linkedin.com/in/aleksei-sabitov-507030245?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SocialIcon src={Faceboock} alt="🔗" />
              </SocialLink>
            </SocialWrapper>{' '}
          </ContainerSocialDemo>

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
