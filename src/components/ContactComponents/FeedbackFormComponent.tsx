import { motion } from 'framer-motion';
import React, { useState } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { HeroTitle, HeroInnovative } from '../Hero/Hero.styled';
import { ResultMainTextDescription } from '../ResultsFromBusinesses/ResultsFromBusinesses.styled';
import { CardButtonText } from '../AllinOneSRM/AllinOneSRM.styled';
import star from '../../assets/icons/Bellhop.svg';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../../firebase';
import { Alert, AlertType } from './Alert';
const FeedbackWrapper = styled.div`
  margin: 80px auto;
  max-width: 1200px;
  padding: 0 20px;
  text-align: center;
`;

const FeedbackContainer = styled.div`
  background: rgba(255, 255, 255, 0.03);
  border-radius: 24px;
  padding: 40px;
  backdrop-filter: blur(16px);
  box-shadow:
    0 8px 16px -8px rgba(0, 0, 0, 0.03),
    0 2px 4px -2px rgba(0, 0, 0, 0.08),
    inset 0 -8px 24px 0 rgba(255, 255, 255, 0.03),
    inset 0 -5px 6px 0 rgba(255, 255, 255, 0.03);
  border: 1px solid #212121;
  max-width: 800px;
  margin: 0 auto;
`;

const FeedbackForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 30px;
`;

const FormRow = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const FormGroup = styled.div`
  flex: 1;
  text-align: left;
`;

const FormLabel = styled.label`
  display: block;
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 14px;
  color: var(--white-100);
  margin-bottom: 8px;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 12px 16px;
  border: 1px solid #212121;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.03);
  color: var(--white-100);
  font-family: var(--font-family);
  font-size: 16px;
  transition: border-color 0.3s;

  &:focus {
    outline: none;
    border-color: #494bec;
  }
`;

const FormSelect = styled.select`
  width: 100%;
  padding: 12px 16px;
  border: 1px solid #212121;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.03);
  color: var(--white-100);
  font-family: var(--font-family);
  font-size: 16px;
  cursor: pointer;

  option {
    background: #1a1a1a;
  }
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: 12px 16px;
  border: 1px solid #212121;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.03);
  color: var(--white-100);
  font-family: var(--font-family);
  font-size: 16px;
  min-height: 120px;
  resize: vertical;
`;

const CheckboxGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 10px 0;
`;

const CheckboxInput = styled.input.attrs({ type: 'checkbox' })`
  width: 18px;
  height: 18px;
  margin: 0;
  cursor: pointer;
  appearance: none;
  -webkit-appearance: none;
  border: 1px solid #494bec;
  border-radius: 4px;
  outline: none;
  transition: all 0.2s;

  &:checked {
    background-color: #494bec;
    position: relative;
  }

  &:checked::after {
    content: '✓';
    position: absolute;
    color: white;
    font-size: 12px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const SubmitButton = styled.button`
  background: linear-gradient(139deg, #494bec, #6a6bff);
  color: white;
  border: none;
  border-radius: 8px;
  padding: 14px 24px;
  font-family: var(--font-family);
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition:
    transform 0.2s,
    box-shadow 0.2s;
  margin-top: 20px;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(73, 75, 236, 0.3);
  }

  &:active {
    transform: translateY(0);
  }
`;

const CheckboxLabel = styled.label`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 14px;
  color: var(--white-100);
  cursor: pointer;
`;
const FeedbackFormComponent: React.FC = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    locations: '',
    message: '',
    scheduleCall: false,
  });

  const [alert, setAlert] = useState<{
    type: AlertType;
    message: string;
    show: boolean;
  }>({ type: 'success', message: '', show: false });


  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    const checked =
      type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;

    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, 'feedbackMessages'), {
        ...formData,
        createdAt: serverTimestamp(),
      });
      setAlert({
        type: 'success',
        message: t('feedback2.form.success'),
        show: true,
      });
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        locations: '',
        message: '',
        scheduleCall: false,
      });
    } catch (error: any) {
       setAlert({
        type: 'error',
        message: t('feedback2.form.error'),
        show: true,
      });
    }
  };
  return (
    <FeedbackWrapper>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <HeroInnovative>
          {t('feedback1.title')} <CardButtonText src={star} alt="star" />
        </HeroInnovative>
        <HeroTitle>{t('feedback1.subtitle')}</HeroTitle>
        <ResultMainTextDescription>
          {t('feedback1.description')}
        </ResultMainTextDescription>

        <FeedbackContainer>
          <FeedbackForm onSubmit={handleSubmit}>
            <FormRow>
              <FormGroup>
                <FormLabel>{t('feedback1.form.name')}</FormLabel>
                <FormInput
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              <FormGroup>
                <FormLabel>{t('feedback1.form.company')}</FormLabel>
                <FormInput
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
            </FormRow>

            <FormRow>
              <FormGroup>
                <FormLabel>{t('feedback1.form.email')}</FormLabel>
                <FormInput
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              <FormGroup>
                <FormLabel>
                  {t('feedback1.form.phone')} ({t('feedback1.form.optional')})
                </FormLabel>
                <FormInput
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </FormGroup>
            </FormRow>

            <FormGroup>
              <FormLabel>{t('feedback1.form.locations')}</FormLabel>
              <FormSelect
                name="locations"
                value={formData.locations}
                onChange={handleChange}
                required
              >
                <option value="">{t('feedback1.form.selectOption')}</option>
                <option value="1-10">1-10</option>
                <option value="11-20">11-20</option>
                <option value="21-50">21-50</option>
                <option value="50+">50+</option>
              </FormSelect>
            </FormGroup>

            <FormGroup>
              <FormLabel>{t('feedback1.form.message')}</FormLabel>
              <FormTextarea
                name="message"
                value={formData.message}
                onChange={handleChange}
              />
            </FormGroup>

            <CheckboxGroup>
              <CheckboxInput
                id="scheduleCall"
                name="scheduleCall"
                checked={formData.scheduleCall}
                onChange={handleChange}
              />
              <CheckboxLabel htmlFor="scheduleCall">
                {t('feedback1.form.scheduleCall')}
              </CheckboxLabel>
            </CheckboxGroup>

            <SubmitButton type="submit">
              {t('feedback1.form.submit')}
            </SubmitButton>
          </FeedbackForm>
        </FeedbackContainer>
      </motion.div>
       {alert.show && (
        <Alert
          type={alert.type}
          message={alert.message}
          onClose={() => setAlert(prev => ({ ...prev, show: false }))}
        />
      )}
    </FeedbackWrapper>
  );
};

export default FeedbackFormComponent;
