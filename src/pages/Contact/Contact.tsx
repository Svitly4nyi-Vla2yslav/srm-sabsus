import React from 'react';
import {
  ContactContainer,
  ContactTitel,
  WrapperInfo,
  SocialContainerLink,
  TextContact,
  LocationContainer,
} from './Contact.styled';

const Contact: React.FC = () => {
  return (
    <ContactContainer>
      <ContactTitel>Let’s Talk</ContactTitel>
      <WrapperInfo>
        <SocialContainerLink>
          <TextContact>Contact</TextContact>
        
        </SocialContainerLink>
        <LocationContainer>
          <TextContact>Location</TextContact>
       
        </LocationContainer>
      </WrapperInfo>
    </ContactContainer>
  );
};

export default Contact;
