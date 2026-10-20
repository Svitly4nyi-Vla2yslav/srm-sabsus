import React from 'react';
import { ContactContainer } from './Contact.styled';
import ContactForm from '../../components/ContactComponents/ContactForm';
import Feedback from '../../components/Feedback/Feedback';

/**
 * Формує контактну сторінку з основної форми та секції відгуків.
 * Сам компонент не обробляє введення й не виконує запитів: відповідальність делегована дочірнім блокам.
 */
const Contact: React.FC = () => {
  return (
    <ContactContainer  id='ap'>
      <ContactForm />
      <Feedback/>
    </ContactContainer>
  );
};

export default Contact;
