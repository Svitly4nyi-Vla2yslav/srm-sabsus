import React, { useEffect, useState } from 'react';
import {
  Border,
  CopyrightContainer,
  EmailContainer,
  EmailLink,
  FooterContainer,
  FooterWrapp,
  SocialContainer,
  SocialLink,
  SocialLinkWrapper,
  TextCopyright,
  TitelCopyright,
} from './Footer.styled';

import AOS from 'aos';
import 'aos/dist/aos.css';

const Footer: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 3000 });
    AOS.refresh();
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <FooterContainer $isScrolled={isScrolled}>
        <Border />
        <FooterWrapp>
          <CopyrightContainer>
            <TextCopyright>Copyright</TextCopyright>
            <TitelCopyright>© 2025 Pavlo Troph</TitelCopyright>
          </CopyrightContainer>{' '}
          <EmailContainer>
            <TextCopyright>.</TextCopyright>
            <EmailLink href="mailto:info@pavlotroph.com">.</EmailLink>
          </EmailContainer>
          <EmailContainer>
            <TextCopyright>Contact</TextCopyright>
            <EmailLink href="mailto:info@pavlotroph.com">
              info@pavlotroph.com
            </EmailLink>
          </EmailContainer>
          <SocialContainer>
            <TextCopyright>Social</TextCopyright>
            <SocialLinkWrapper>
              <SocialLink>Instagram</SocialLink>
              <SocialLink>YouTube</SocialLink>
              <SocialLink>LinkedIn</SocialLink>
            </SocialLinkWrapper>
          </SocialContainer>
        </FooterWrapp>
      </FooterContainer>
    </>
  );
};

export default Footer;
