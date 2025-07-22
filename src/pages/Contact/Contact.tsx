import React from 'react';
import { ContactContainer } from './Contact.styled';
import ContactForm from '../../components/ContactComponents/ContactForm';
import Feedback from '../../components/Feedback/Feedback';

const Contact: React.FC = () => {
  return (
    <ContactContainer>
      <ContactForm />
      <Feedback/>
    </ContactContainer>
  );
};

export default Contact;
