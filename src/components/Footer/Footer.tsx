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
import { StyledNavLink } from '../AllinOneSRM/AllinOneSRM.styled';
import { useSmoothScroll } from '../../utils/useSmoothScroll';

const Footer: React.FC = () => {
    const { scrollTo } = useSmoothScroll();
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
            <Logo  onClick={() => scrollTo('hero', "home")} style={{ marginBottom: 16 }}>
              <img src={logo} alt="Logo" />
            </Logo>
          </Container>
          <Deckstop>
            <Container>
              <WraperLink>{t('footer.sections.home')}</WraperLink>
              <Link  to="/home/#benefits" >
                {t('footer.links.benefits')}
              </Link>
              <Link  to="/service">
                {t('footer.links.service')}
              </Link>
              <Link  to="/pricing">
                {t('footer.links.prices')}
              </Link>
            </Container>
            <Container>
              <WraperLink>{t('footer.sections.product')}</WraperLink>
              <StyledNavLink to="/service/customer-experience">
                {t('footer.links.customerExperience')}
              </StyledNavLink>
              <StyledNavLink to="/service/pos-staff-operations">
                {t('footer.links.posStaff')}
              </StyledNavLink>
              <StyledNavLink to="/service/kitchen-fulfillment">
                {t('footer.links.kitchen')}
              </StyledNavLink>
              <StyledNavLink to="/service/inventory-warehousing">
                {t('footer.links.inventory')}
              </StyledNavLink>
              <StyledNavLink to="/service/analytics-management">
                {t('footer.links.analytics')}
              </StyledNavLink>
              <StyledNavLink to="/service/marketing-customization">
                {t('footer.links.marketing')}
              </StyledNavLink>
              <StyledNavLink to="/service/integration-scaling">
                {t('footer.links.integration')}
              </StyledNavLink>
            </Container>

            <Container>
              {' '}
              <WraperLink>{t('footer.sections.company')}</WraperLink>
              <Link to="/service">
                {t('footer.links.ourServices')}
              </Link>
              <Link to="/about">
                {t('footer.links.aboutUs')}
              </Link>
              <Link to="/contact">
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
                href="https://www.facebook.com/profile.php?id=61578562106724&mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SocialIcon src={In} alt="🔗" />
              </SocialLink>
              <SocialLink
                href="https://www.instagram.com/sabsus.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SocialIcon src={Insta} alt="🔗" />
              </SocialLink>
              <SocialLink
                href="https://www.linkedin.com/company/sabsus/"
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
              <Cookie to="#privacy" onClick={() => handlePolicyClick('privacy')}>
                {t('footer.legal.cookiePolicy')} <Point />{' '}
              </Cookie>
              <Cookie to="#cookie"  onClick={() => handlePolicyClick('cookie')}>
                {t('footer.legal.privacyStatement')} <Point />{' '}
              </Cookie>
              <Cookie to="#terms"  onClick={() => handlePolicyClick('terms')}>
                {t('footer.legal.termsOfUse')}
              </Cookie>
            </CookieContainer>
            <CookieContainer>
              <Cookie to="" >{t('footer.legal.copyright')}</Cookie>
            </CookieContainer>
          </Licens>
        </FooterWrapp>
      </FooterContainer>
      {showPolicies && <PoliciesContent activePolicy={activePolicy} />}
    </>
  );
};

export default Footer;
