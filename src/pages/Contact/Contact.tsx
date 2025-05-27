import React from 'react';
import ContactForm from '../../components/ContactForm/ContactForm';
import {
  ContactContainer,
  ContactTitel,
  WrapperInfo,
  SocialContainerLink,
  TextContact,
  EmailSocialLink,
  LocationContainer,
  LocationLink,
} from './Contact.styled';

const Contact: React.FC = () => {
  return (
    <ContactContainer>
      <ContactTitel>Let’s Talk</ContactTitel>
      <WrapperInfo>
        <SocialContainerLink>
          <TextContact>Contact</TextContact>
          <EmailSocialLink href="mailto:info@pavlotroph.com">
            info@pavlotroph.com
          </EmailSocialLink>
          <EmailSocialLink href="https://www.linkedin.com/in/pavlo-trofimenko/">
            LinkedIn
          </EmailSocialLink>
          <EmailSocialLink href="https://t.me/pavlotroph">
            Telegram
          </EmailSocialLink>
          <EmailSocialLink href="https://www.instagram.com/">
            Instagram
          </EmailSocialLink>
        </SocialContainerLink>
        <LocationContainer>
          <TextContact>Location</TextContact>
          <LocationLink
            href="https://maps.app.goo.gl/b7UCDY41c7FuzzFC6"
            target="_blank"
            rel="noopener noreferrer"
          >
            Toronto, ON, CA
          </LocationLink>
        </LocationContainer>
      </WrapperInfo>
      <ContactForm />
    </ContactContainer>
  );
};

export default Contact;
