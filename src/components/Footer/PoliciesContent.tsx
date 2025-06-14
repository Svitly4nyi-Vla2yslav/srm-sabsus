import React, { useEffect } from 'react';
import { Element } from 'react-scroll';
import {
  PoliciesContainer,
  PolicySection,
  LockIconContainer,
  PolicyTitle,
  PolicyText,
} from './Footer.styled';
import { useTranslation } from 'react-i18next';
import DOMPurify from 'dompurify';

interface PoliciesContentProps {
  activePolicy: string | null;
}

export const PoliciesContent: React.FC<PoliciesContentProps> = ({ activePolicy }) => {
  const { t } = useTranslation();
  const termsContent = DOMPurify.sanitize(t('terms.content'));

  useEffect(() => {
    if (activePolicy) {
      // Додаткове підтвердження скролу
      const element = document.getElementById(activePolicy);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [activePolicy]);
  return (
    <PoliciesContainer>
      <Element name="privacy" className="policy-section">
        <PolicySection>
          <PolicyTitle>{t('policies.privacy.title')}</PolicyTitle>
          <PolicyText>
            <h3>{t('policies.privacy.websiteVisitors')}</h3>
            {t('policies.privacy.content', { joinArrays: '\n\n' })
              .split('\n\n')
              .map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
          </PolicyText>
        </PolicySection>
      </Element>

      <Element name="cookie" className="policy-section">
        <PolicySection>
          <LockIconContainer></LockIconContainer>
          <PolicyTitle>{t('policies.cookie.title')}</PolicyTitle>
          <PolicyText>
            <h3>{t('policies.cookie.cookies')}</h3>
            {t('policies.cookie.content', { joinArrays: '\n\n' })
              .split('\n\n')
              .map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
          </PolicyText>
        </PolicySection>
      </Element>

      <Element name="terms" className="policy-section">
        <PolicySection>
          <LockIconContainer></LockIconContainer>
          <PolicyTitle>{t('policies.terms.title')}</PolicyTitle>
          <PolicyText>
            <h3>{t('policies.terms.title')}</h3>
            {t('policies.terms.content', { joinArrays: '\n\n' })
              .split('\n\n')
              .map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
          </PolicyText>
          <div dangerouslySetInnerHTML={{ __html: termsContent }} />
        </PolicySection>
      </Element>
    </PoliciesContainer>
  );
};