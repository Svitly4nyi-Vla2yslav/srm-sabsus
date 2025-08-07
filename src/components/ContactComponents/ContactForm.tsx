import { motion } from 'framer-motion';
import React, { useState, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import { HeroInnovative, HeroTitle } from '../Hero/Hero.styled';
import { CardButtonText } from '../AllinOneSRM/AllinOneSRM.styled';
import star from '../../assets/icons/Star-copy.svg';
import { ResultMainTextDescription } from '../ResultsFromBusinesses/ResultsFromBusinesses.styled';
import { useTranslation } from 'react-i18next';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../../firebase';
import { Alert, AlertType } from './Alert';

export const ContactWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  top: 140px;
  margin-bottom: 200px;
  @media screen and (min-width: 768px) {
    max-width: 518px;
    width: 100%;
  }
  @media screen and (min-width: 1440px) {
  }
`;

export const CostomerWrapp = styled.div`
  position: absolute;
  top: 15%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 1200px;
  padding: 0 20px;
  text-align: center;
  z-index: 3;

  @media screen and (min-width: 768px) {
    max-width: 518px;
    width: 100%;
  }
  @media screen and (min-width: 1440px) {
  }
`;

export const pulse = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(73, 75, 236, 0.7);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(73, 75, 236, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(73, 75, 236, 0);
  }
`;

export const clickEffect = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.95);
  }
  100% {
    transform: scale(1);
  }
`;

export const gradientFlow = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

export const ButtonFree = styled.button`
  z-index: 10;
  border-radius: 12px;
  min-width: 343px;
  height: 46px;
  margin-bottom: 32px;
  position: relative;
  overflow: hidden;
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 15px;
  color: var(--white-100);
  box-shadow: inset 0 0 6px 0 rgba(255, 255, 255, 0.54);
  background: linear-gradient(139deg, #494bec, #6a6bff, #494bec, #3a3bc7);
  background-size: 300% 300%;
  animation:
    ${pulse} 2s infinite,
    ${gradientFlow} 6s ease infinite;
  transition: all 0.4s ease;
  border: none;
  cursor: pointer;

  &:hover {
    box-shadow:
      inset 0 0 8px 0 rgba(255, 255, 255, 0.74),
      0 0 15px rgba(73, 75, 236, 0.5);
    transform: perspective(500px) rotateX(10deg) translateY(-2px);
    animation:
      ${pulse} 2s infinite,
      ${gradientFlow} 3s ease infinite;
    background-size: 200% 200%;
  }

  &:active {
    animation:
      ${clickEffect} 0.3s ease,
      ${gradientFlow} 6s ease infinite;
    background: linear-gradient(139deg, #3a3bc7, #494bec, #3a3bc7);
  }

  @media screen and (min-width: 768px) {
    width: 518px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  top: 300px;
  width: 100%;

  @media screen and (min-width: 768px) {
    max-width: 518px;
    width: 100%;
    margin-top: 62px;
  }
`;

const Label = styled.label`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 14px;
  line-height: 130%;
  color: var(--white-100);
  margin-bottom: 20px;
  padding-bottom: 8px;
  width: 343px;
  @media screen and (min-width: 768px) {
    max-width: 518px;
    width: 100%;
  }
`;

const Input = styled.input<{ $error?: boolean }>`
  border: 1px solid ${props => (props.$error ? '#ff4d4f' : '#212121')};
  border-radius: 8px;
  padding: 12px 16px;
  width: 100%;
  height: 46px;
  margin-top: 8px;
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 17px;
  line-height: 130%;
  color: rgba(161, 161, 170, 0.8);
  backdrop-filter: blur(16px);
  box-shadow:
    inset 0 -8px 24px 0 rgba(255, 255, 255, 0.03),
    inset 0 -5px 6px 0 rgba(255, 255, 255, 0.03),
    0 8px 16px -8px rgba(0, 0, 0, 0.03),
    0 2px 4px -2px rgba(0, 0, 0, 0.08);
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.12) 7%,
    rgba(255, 255, 255, 0) 86%
  );
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${props => (props.$error ? '#ff4d4f' : '#494bec')};
  }

  @media screen and (min-width: 768px) {
    max-width: 518px;
    width: 100%;
  }
`;

const Select = styled.select`
  border: 1px solid #212121;
  border-radius: 8px;
  padding: 12px 16px 12px 16px; /* Залишаємо стандартні падінги */
  width: 100%;
  height: 46px;
  margin-bottom: 32px;
  margin-top: 8px;
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 17px;
  line-height: 130%;
  color: rgba(161, 161, 170, 0.8);
  backdrop-filter: blur(16px);
  box-shadow:
    inset 0 -8px 24px 0 rgba(255, 255, 255, 0.03),
    inset 0 -5px 6px 0 rgba(255, 255, 255, 0.03),
    0 8px 16px -8px rgba(0, 0, 0, 0.03),
    0 2px 4px -2px rgba(0, 0, 0, 0.08);
  background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.12) 7%,
      rgba(255, 255, 255, 0) 86%
    )
    no-repeat;
  background-position: right 10px center; /* Відступ стрілки від правого краю */
  cursor: pointer;
  appearance: none; /* Вимкнення стандартного вигляду */
  -webkit-appearance: none; /* Для Safari */
  -moz-appearance: none; /* Для Firefox */

  /* Додаємо власну стрілку */
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23a1a1aa'%3e%3cpath d='M7 10l5 5 5-5z'/%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-size: 26px;

  option {
    background-color: rgba(25, 24, 24, 1);
    color: rgba(161, 161, 170, 0.8);
  }

  &:focus {
    outline: none;
    border-color: #494bec;
  }

  @media screen and (min-width: 768px) {
    max-width: 518px;
    width: 100%;
  }
`;

const ContactDescription = styled.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 16px;
  color: var(--white-100);
  text-align: center;
  max-width: 343px;
  @media screen and (min-width: 768px) {
    max-width: 518px;
    width: 100%;
  }
`;

const ErrorMessage = styled.div`
  color: #ff4d4f;
  font-size: 12px;
  margin-top: 4px;
`;

export const ContactUsWrapper = styled.div`
  margin-top: 380px;
  text-align: center;
  width: 100%;
  max-width: 518px;
`;

export const ContactUsTitle = styled.h2`
  font-family: var(--font-family);
  font-weight: 600;
  font-size: 24px;
  color: var(--white-100);
  margin-bottom: 24px;
`;

export const ContactEmail = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-bottom: 24px;
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 16px;
  color: var(--white-100);
`;

export const EmailLink = styled.a`
  color: #6a6bff;
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: #8a8bff;
    text-decoration: underline;
  }
`;

export const SupportBadge = styled.span`
  background: rgba(73, 75, 236, 0.2);
  border-radius: 4px;
  padding: 2px 6px;
  font-size: 12px;
  color: #6a6bff;
`;

export const HelpCenterButton = styled.a`
  display: inline-block;
  padding: 12px 24px;
  border-radius: 8px;
  background: linear-gradient(139deg, #494bec, #6a6bff);
  background-size: 200% 200%;
  color: var(--white-100);
  font-family: var(--font-family);
  font-weight: 500;
  text-decoration: none;
  margin-bottom: 12px;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);

  &:hover {
    background-position: 100% 50%;
    box-shadow: 0 4px 12px rgba(73, 75, 236, 0.3);
    transform: translateY(-2px);
  }
`;

export const HelpCenterText = styled.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.7);
  max-width: 300px;
  margin: 0 auto;
`;

const ContactForm: React.FC = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [teammates, setTeammates] = useState('');
  const formRef = useRef<HTMLFormElement>(null);
  const linkRef = useRef<HTMLAnchorElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [alert, setAlert] = useState<{
    type: AlertType;
    message: string;
    show: boolean;
  }>({ type: 'success', message: '', show: false });
  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    if (value) {
      setEmailError(!validateEmail(value));
    } else {
      setEmailError(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setEmailError(true);
      return;
    }

    setIsSubmitting(true);

    try {
      await addDoc(collection(db, 'contactMessages'), {
        email,
        teammates,
        createdAt: serverTimestamp(),
      });

      setEmail('');
      setTeammates('');

      setAlert({
        type: 'success',
        message: t('contact2.form.success'),
        show: true,
      });

      const link = document.createElement('a');
      link.href =
        'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0ECvny1g7NCJmXnJvrxrsWKg2y5eT86f1mR9n1l9UrYrnw-7NiuMqc4TMfcRIFUTVGIyVyufmB?gv=true';
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.click();
    } catch (error) {
      console.error('Error:', error);
      setAlert({
        type: 'error',
        message: t('contact2.form.error'),
        show: true,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <ContactWrapper>
      <CostomerWrapp>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: false, amount: 0.3 }}
          style={{
            position: 'relative',
            zIndex: 1,
            width: '100%',
          }}
        >
          <HeroInnovative>
            {t('contact.getStarted')} <CardButtonText src={star} alt="star" />
          </HeroInnovative>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <HeroTitle>{t('contact.title')}</HeroTitle>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <ResultMainTextDescription>
            {t('contact.description')}
          </ResultMainTextDescription>
        </motion.div>
      </CostomerWrapp>

      <Form ref={formRef} onSubmit={handleSubmit}>
        <Label>
          {t('contact.form.emailLabel')}
          <Input
            type="email"
            placeholder={t('contact.form.emailPlaceholder')}
            value={email}
            onChange={handleEmailChange}
            $error={emailError}
          />
          {emailError && (
            <ErrorMessage>{t('contact.form.emailError')}</ErrorMessage>
          )}
        </Label>

        <Label htmlFor="teammates-select">
          {t('contact.form.teammatesLabel')}
          <Select
            id="teammates-select"
            name="teammates"
            value={teammates}
            onChange={e => setTeammates(e.target.value)}
          >
            <option value="">
              {t('contact.form.teammatesOptions.select')}
            </option>
            <option value="from-1-to-5">
              {t('contact.form.teammatesOptions.1-5')}
            </option>
            <option value="from-5-to-15">
              {t('contact.form.teammatesOptions.5-15')}
            </option>
            <option value="from-15-to-30">
              {t('contact.form.teammatesOptions.15-30')}
            </option>
            <option value="from-30-to-50">
              {t('contact.form.teammatesOptions.30-50')}
            </option>
            <option value="from-50-to-100">
              {t('contact.form.teammatesOptions.50-100')}
            </option>
          </Select>
        </Label>
        <a
          ref={linkRef}
          href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0ECvny1g7NCJmXnJvrxrsWKg2y5eT86f1mR9n1l9UrYrnw-7NiuMqc4TMfcRIFUTVGIyVyufmB?gv=true"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ButtonFree type="submit" disabled={isSubmitting}>
            {isSubmitting
              ? t('contact.form.submitting')
              : t('contact.form.submit')}
          </ButtonFree>
        </a>

        <ContactDescription>{t('contact.form.terms')}</ContactDescription>
        <a
          ref={linkRef}
          href="https://sabsus.app/registrcompany/web/PRO"
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: 'none' }}
        />
      </Form>
      <ContactUsWrapper>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <ContactUsTitle>{t('contact.help.title')}</ContactUsTitle>

          <ContactEmail>
            <span>{t('contact.help.support')}</span>
            <EmailLink href="mailto:support@sabsus.com">
              {t('contact.help.supportEmail')}
            </EmailLink>
            <SupportBadge>{t('contact.help.supportBadge')}</SupportBadge>
          </ContactEmail>
          <a href="https://sabsus.info" target="_blank" rel="noopener">
            <ButtonFree>{t('contact.help.helpCenter')}</ButtonFree>
          </a>

          <HelpCenterText>{t('contact.help.helpText')}</HelpCenterText>
        </motion.div>
      </ContactUsWrapper>
      {alert.show && (
        <Alert
          type={alert.type}
          message={alert.message}
          onClose={() => setAlert(prev => ({ ...prev, show: false }))}
        />
      )}
    </ContactWrapper>
  );
};

export default ContactForm;
