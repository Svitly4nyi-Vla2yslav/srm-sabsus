import React, { useEffect } from 'react';
import { Element } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import {
  PoliciesContainer,
  PolicySection,
  PolicyTitle,
  PolicyText,
  BorderLicens,
} from './Footer.styled';

interface PoliciesContentProps {
  activePolicy: string | null;
}

export const PoliciesContent: React.FC<PoliciesContentProps> = ({
  activePolicy,
}) => {
  const { t } = useTranslation();

  useEffect(() => {
    if (activePolicy) {
      const element = document.getElementById(activePolicy);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [activePolicy]);

  return (
    <PoliciesContainer id="privacy">
      <Element name="privacy" className="policy-section">
        <PolicySection>
          <PolicyTitle>{t('policies.privacy.title')}</PolicyTitle>
          <PolicyText>
            {(
              t('policies.privacy.text', { returnObjects: true }) as string[]
            ).map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </PolicyText>
        </PolicySection>
      </Element>

      <Element id="cookie" name="cookie" className="policy-section">
        <PolicySection>
          <PolicyTitle>{t('policies.terms.1.title')}</PolicyTitle>

          <PolicyTitle>
            {t('policies.terms.1.SabsusPlatform.title')}
          </PolicyTitle>
          <PolicyText>
            <p>{t('policies.terms.1.SabsusPlatform.text')}</p>
          </PolicyText>

          <PolicyTitle>{t('policies.terms.1.SabsusCompany.title')}</PolicyTitle>
          <PolicyText>
            <p>{t('policies.terms.1.SabsusCompany.text')}</p>
          </PolicyText>

          <PolicyTitle>{t('policies.terms.1.User.title')}</PolicyTitle>
          <PolicyText>
            <p>{t('policies.terms.1.User.text')}</p>
          </PolicyText>

          <PolicyTitle>{t('policies.terms.1.Restaurant.title')}</PolicyTitle>
          <PolicyText>
            <p>{t('policies.terms.1.Restaurant.text')}</p>
          </PolicyText>

          <PolicyTitle>{t('policies.terms.1.Account.title')}</PolicyTitle>
          <PolicyText>
            <p>{t('policies.terms.1.Account.text')}</p>
          </PolicyText>

          <PolicyTitle>{t('policies.terms.1.PersonalData.title')}</PolicyTitle>
          <PolicyText>
            <p>{t('policies.terms.1.PersonalData.text')}</p>
          </PolicyText>

          <PolicyTitle>{t('policies.terms.1.PrivacyPolicy.title')}</PolicyTitle>
          <PolicyText>
            <p>{t('policies.terms.1.PrivacyPolicy.text')}</p>
          </PolicyText>

          <PolicyTitle>
            {t('policies.terms.1.PaymentProviders.title')}
          </PolicyTitle>
          <PolicyText>
            <p>{t('policies.terms.1.PaymentProviders.text')}</p>
          </PolicyText>

          <PolicyTitle>{t('policies.terms.1.BonusProgram.title')}</PolicyTitle>
          <PolicyText>
            <p>{t('policies.terms.1.BonusProgram.text')}</p>
          </PolicyText>

          <PolicyTitle>{t('policies.terms.1.GiftCard.title')}</PolicyTitle>
          <PolicyText>
            <p>{t('policies.terms.1.GiftCard.text')}</p>
          </PolicyText>

          <PolicyTitle>{t('policies.terms.1.UserContent.title')}</PolicyTitle>
          <PolicyText>
            <p>{t('policies.terms.1.UserContent.text')}</p>
          </PolicyText>

          <PolicyTitle>{t('policies.terms.1.Cookie.title')}</PolicyTitle>
          <PolicyText>
            <p>{t('policies.terms.1.Cookie.text')}</p>
          </PolicyText>

          <PolicyTitle>{t('policies.terms.1.Pixel.title')}</PolicyTitle>
          <PolicyText>
            <p>{t('policies.terms.1.Pixel.text')}</p>
          </PolicyText>

          <PolicyTitle>{t('policies.terms.1.SDK.title')}</PolicyTitle>
          <PolicyText>
            <p>{t('policies.terms.1.SDK.text')}</p>
          </PolicyText>

          <PolicyTitle>{t('policies.terms.1.GDPR.title')}</PolicyTitle>
          <PolicyText>
            <p>{t('policies.terms.1.GDPR.text')}</p>
          </PolicyText>

          <PolicyTitle>{t('policies.terms.1.CCPA.title')}</PolicyTitle>
          <PolicyText>
            <p>{t('policies.terms.1.CCPA.text')}</p>
          </PolicyText>

          <PolicyTitle>{t('policies.terms.1.PIPEDA.title')}</PolicyTitle>
          <PolicyText>
            <p>{t('policies.terms.1.PIPEDA.text')}</p>
          </PolicyText>

          <PolicyTitle>{t('policies.terms.1.UKGDPR.title')}</PolicyTitle>
          <PolicyText>
            <p>{t('policies.terms.1.UKGDPR.text')}</p>
          </PolicyText>

          <BorderLicens />

          <PolicyText>
            <PolicyTitle>{t('policies.terms.2.title')}</PolicyTitle>

            <PolicyTitle>{t('policies.terms.2.2.1.title')}</PolicyTitle>
            <p>{t('policies.terms.2.2.1.text')}</p>

            <PolicyTitle>{t('policies.terms.2.2.2.title')}</PolicyTitle>
            <p>{t('policies.terms.2.2.2.text')}</p>

            <PolicyTitle>{t('policies.terms.2.2.3.title')}</PolicyTitle>
            <p>{t('policies.terms.2.2.3.text')}</p>

            <PolicyTitle>{t('policies.terms.2.2.4.title')}</PolicyTitle>
            <p>{t('policies.terms.2.2.4.text')}</p>

            <PolicyTitle>{t('policies.terms.2.2.5.title')}</PolicyTitle>
            <p>{t('policies.terms.2.2.5.text')}</p>

            <PolicyTitle>{t('policies.terms.2.2.6.title')}</PolicyTitle>
            <p>{t('policies.terms.2.2.6.text')}</p>
          </PolicyText>
        </PolicySection>
      </Element>

      <BorderLicens />

      <Element id="terms" name="terms" className="policy-section">
        <PolicySection>
          <PolicyTitle>{t('policies.terms.3.title')}</PolicyTitle>

          <PolicyTitle>{t('policies.terms.3.3.1.title')}</PolicyTitle>
          <PolicyText>
            <p>{t('policies.terms.3.3.1.text')}</p>
          </PolicyText>

          <PolicyTitle>{t('policies.terms.3.3.2.title')}</PolicyTitle>
          <PolicyText>
            <p>{t('policies.terms.3.3.2.text')}</p>
          </PolicyText>

          <PolicyTitle>{t('policies.terms.3.3.3.title')}</PolicyTitle>
          <PolicyText>
            <p>{t('policies.terms.3.3.3.text')}</p>
          </PolicyText>

          <PolicyTitle>{t('policies.terms.3.3.4.title')}</PolicyTitle>
          <PolicyText>
            <p>{t('policies.terms.3.3.4.text')}</p>
          </PolicyText>

          <PolicyTitle>{t('policies.terms.3.3.5.title')}</PolicyTitle>
          <PolicyText>
            <p>{t('policies.terms.3.3.5.text')}</p>
          </PolicyText>

          <PolicyTitle>{t('policies.terms.3.3.6.title')}</PolicyTitle>
          <PolicyText>
            <p>{t('policies.terms.3.3.6.text')}</p>
          </PolicyText>

          <BorderLicens />

          <PolicyTitle>{t('policies.terms.4.title')}</PolicyTitle>

          <PolicyTitle>{t('policies.terms.4.4.1.title')}</PolicyTitle>
          <PolicyText>
            <p>{t('policies.terms.4.4.1.text')}</p>
          </PolicyText>

          <PolicyTitle>{t('policies.terms.4.4.2.title')}</PolicyTitle>
          <PolicyText>
            <p>{t('policies.terms.4.4.2.text')}</p>
          </PolicyText>

          <PolicyTitle>{t('policies.terms.4.4.3.title')}</PolicyTitle>
          <PolicyText>
            <p>{t('policies.terms.4.4.3.text')}</p>
          </PolicyText>

          <PolicyTitle>{t('policies.terms.4.4.4.title')}</PolicyTitle>
          <PolicyText>
            <p>{t('policies.terms.4.4.4.text')}</p>
          </PolicyText>

          <PolicyTitle>{t('policies.terms.4.4.5.title')}</PolicyTitle>
          <PolicyText>
            <p>{t('policies.terms.4.4.5.text')}</p>
          </PolicyText>

          <PolicyTitle>{t('policies.terms.4.4.6.title')}</PolicyTitle>
          <PolicyText>
            <p>{t('policies.terms.4.4.6.text')}</p>
          </PolicyText>

          <PolicyTitle>{t('policies.terms.4.4.7.title')}</PolicyTitle>
          <PolicyText>
            <p>{t('policies.terms.4.4.7.text')}</p>
          </PolicyText>

          <PolicyTitle>{t('policies.terms.4.4.8.title')}</PolicyTitle>
          <PolicyText>
            <p>{t('policies.terms.4.4.8.text')}</p>
          </PolicyText>

          <PolicyTitle>{t('policies.terms.4.4.9.title')}</PolicyTitle>
          <PolicyText>
            <p>{t('policies.terms.4.4.9.text')}</p>
          </PolicyText>

          <BorderLicens />

          <PolicyTitle>{t('policies.terms.5.title')}</PolicyTitle>

          <PolicyTitle>{t('policies.terms.5.5.1.title')}</PolicyTitle>
          <PolicyText>
            <p>{t('policies.terms.5.5.1.text')}</p>
          </PolicyText>

          <PolicyTitle>{t('policies.terms.5.5.2.title')}</PolicyTitle>
          <PolicyText>
            <p>{t('policies.terms.5.5.2.text')}</p>
          </PolicyText>

          <PolicyTitle>{t('policies.terms.5.5.3.title')}</PolicyTitle>
          <PolicyText>
            <p>{t('policies.terms.5.5.3.text')}</p>
          </PolicyText>

          <PolicyTitle>{t('policies.terms.5.5.4.title')}</PolicyTitle>
          <PolicyText>
            <p>{t('policies.terms.5.5.4.text')}</p>
          </PolicyText>

          <PolicyTitle>{t('policies.terms.5.5.5.title')}</PolicyTitle>
          <PolicyText>
            <p>{t('policies.terms.5.5.5.text')}</p>
          </PolicyText>

          <PolicyTitle>{t('policies.terms.5.5.6.title')}</PolicyTitle>
          <PolicyText>
            <p>{t('policies.terms.5.5.6.text')}</p>
          </PolicyText>

          <PolicyTitle>{t('policies.terms.5.5.7.title')}</PolicyTitle>
          <PolicyText>
            <p>{t('policies.terms.5.5.7.text')}</p>
          </PolicyText>

          <BorderLicens />

          <PolicyTitle>{t('policies.terms.6.title')}</PolicyTitle>

          <PolicyTitle>{t('policies.terms.6.6.1.title')}</PolicyTitle>
          <PolicyText>
            <p>{t('policies.terms.6.6.1.text')}</p>
          </PolicyText>

          <PolicyTitle>{t('policies.terms.6.6.2.title')}</PolicyTitle>
          <PolicyText>
            <p>{t('policies.terms.6.6.2.text')}</p>
          </PolicyText>

          <PolicyTitle>{t('policies.terms.6.6.3.title')}</PolicyTitle>
          <PolicyText>
            <p>{t('policies.terms.6.6.3.text')}</p>
          </PolicyText>

          <PolicyTitle>{t('policies.terms.6.6.4.title')}</PolicyTitle>
          <PolicyText>
            <p>{t('policies.terms.6.6.4.text')}</p>
          </PolicyText>

          <PolicyTitle>{t('policies.terms.6.6.5.title')}</PolicyTitle>
          <PolicyText>
            <p>{t('policies.terms.6.6.5.text')}</p>
          </PolicyText>

          <PolicyTitle>{t('policies.terms.6.6.6.title')}</PolicyTitle>
          <PolicyText>
            <p>{t('policies.terms.6.6.6.text')}</p>
          </PolicyText>

          <PolicyTitle>{t('policies.terms.6.6.7.title')}</PolicyTitle>
          <PolicyText>
            <p>{t('policies.terms.6.6.7.text')}</p>
          </PolicyText>

          <BorderLicens />

          <PolicyTitle>{t('policies.terms.7.title')}</PolicyTitle>

          <PolicyTitle>{t('policies.terms.7.7.1.title')}</PolicyTitle>
          <PolicyText>
            <p>{t('policies.terms.7.7.1.text')}</p>
          </PolicyText>

          <PolicyTitle>{t('policies.terms.7.7.2.title')}</PolicyTitle>
          <PolicyText>
            <p>{t('policies.terms.7.7.2.text')}</p>
          </PolicyText>

          <PolicyTitle>{t('policies.terms.7.7.3.title')}</PolicyTitle>
          <PolicyText>
            <p>{t('policies.terms.7.7.3.text')}</p>
          </PolicyText>

          <PolicyTitle>{t('policies.terms.7.7.4.title')}</PolicyTitle>
          <PolicyText>
            <p>{t('policies.terms.7.7.4.text')}</p>
          </PolicyText>

          <PolicyTitle>{t('policies.terms.7.7.5.title')}</PolicyTitle>
          <PolicyText>
            <p>{t('policies.terms.7.7.5.text')}</p>
          </PolicyText>

          <PolicyTitle>{t('policies.terms.7.7.6.title')}</PolicyTitle>
          <PolicyText>
            <p>{t('policies.terms.7.7.6.text')}</p>
          </PolicyText>

          <BorderLicens />

          <PolicyTitle>{t('policies.terms.8.title')}</PolicyTitle>

          <PolicyTitle>{t('policies.terms.8.8.1.title')}</PolicyTitle>
          <PolicyText>
            <p>{t('policies.terms.8.8.1.text')}</p>
          </PolicyText>

          <PolicyTitle>{t('policies.terms.8.8.2.title')}</PolicyTitle>
          <PolicyText>
            <p>{t('policies.terms.8.8.2.text')}</p>
          </PolicyText>

          <PolicyTitle>{t('policies.terms.8.8.3.title')}</PolicyTitle>
          <PolicyText>
            <p>{t('policies.terms.8.8.3.text')}</p>
          </PolicyText>

          <PolicyTitle>{t('policies.terms.8.8.4.title')}</PolicyTitle>
          <PolicyText>
            <p>{t('policies.terms.8.8.4.text')}</p>
          </PolicyText>

          <PolicyTitle>{t('policies.terms.8.8.5.title')}</PolicyTitle>
          <PolicyText>
            <p>{t('policies.terms.8.8.5.text')}</p>
          </PolicyText>

          <PolicyTitle>{t('policies.terms.8.8.6.title')}</PolicyTitle>
          <PolicyText>
            <p>{t('policies.terms.8.8.6.text')}</p>
          </PolicyText>

          <PolicyTitle>{t('policies.terms.8.8.7.title')}</PolicyTitle>
          <PolicyText>
            <p>{t('policies.terms.8.8.7.text')}</p>
          </PolicyText>

          <PolicyTitle>{t('policies.terms.8.8.8.title')}</PolicyTitle>
          <PolicyText>
            <p>{t('policies.terms.8.8.8.text')}</p>
          </PolicyText>

          <BorderLicens />

          <PolicyTitle>{t('policies.terms.9.title')}</PolicyTitle>
          <PolicyText>
            <p>{t('policies.terms.9.intro.text')}</p>
          </PolicyText>

          <PolicyTitle>{t('policies.terms.9.9.1.title')}</PolicyTitle>
          <PolicyText>
            {(
              t('policies.terms.9.9.1.text', {
                returnObjects: true,
              }) as string[]
            ).map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </PolicyText>

          <PolicyTitle>{t('policies.terms.9.9.2.title')}</PolicyTitle>
          <PolicyText>
            {(
              t('policies.terms.9.9.2.text', {
                returnObjects: true,
              }) as string[]
            ).map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </PolicyText>

          <PolicyTitle>{t('policies.terms.9.9.3.title')}</PolicyTitle>
          <PolicyText>
            {(
              t('policies.terms.9.9.3.text', {
                returnObjects: true,
              }) as string[]
            ).map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </PolicyText>

          <PolicyTitle>{t('policies.terms.9.9.4.title')}</PolicyTitle>
          <Element id="cookie" name="cookie" className="policy-subsection">
            <PolicyText>
              {(
                t('policies.terms.9.9.4.text', {
                  returnObjects: true,
                }) as string[]
              ).map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </PolicyText>
          </Element>

          <PolicyTitle>{t('policies.terms.9.9.5.title')}</PolicyTitle>
          <PolicyText>
            {(
              t('policies.terms.9.9.5.text', {
                returnObjects: true,
              }) as string[]
            ).map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </PolicyText>

          <PolicyTitle>{t('policies.terms.9.9.6.title')}</PolicyTitle>
          <PolicyText>
            {(
              t('policies.terms.9.9.6.text', {
                returnObjects: true,
              }) as string[]
            ).map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </PolicyText>

          <PolicyTitle>{t('policies.terms.9.9.7.title')}</PolicyTitle>
          <PolicyText>
            {(
              t('policies.terms.9.9.7.text', {
                returnObjects: true,
              }) as string[]
            ).map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </PolicyText>

          <PolicyTitle>{t('policies.terms.9.9.8.title')}</PolicyTitle>
          <PolicyText>
            {(
              t('policies.terms.9.9.8.text', {
                returnObjects: true,
              }) as string[]
            ).map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </PolicyText>

          <PolicyTitle>{t('policies.terms.9.9.9.title')}</PolicyTitle>
          <PolicyText>
            <p>{t('policies.terms.9.9.9.text')}</p>
          </PolicyText>

          <PolicyTitle>{t('policies.terms.9.9.10.title')}</PolicyTitle>
          <PolicyText>
            <p>{t('policies.terms.9.9.10.text')}</p>
          </PolicyText>

          <PolicyTitle>{t('policies.terms.9.9.11.title')}</PolicyTitle>
          <PolicyText>
            <p>{t('policies.terms.9.9.11.text')}</p>
          </PolicyText>

          <BorderLicens />

          <PolicyTitle>{t('policies.terms.10.title')}</PolicyTitle>

          <PolicyTitle>{t('policies.terms.10.10.1.title')}</PolicyTitle>
          <PolicyText>
            <p>{t('policies.terms.10.10.1.text')}</p>
          </PolicyText>

          <PolicyTitle>{t('policies.terms.10.10.2.title')}</PolicyTitle>
          <PolicyText>
            <p>{t('policies.terms.10.10.2.text')}</p>
          </PolicyText>

          <PolicyTitle>{t('policies.terms.10.10.3.title')}</PolicyTitle>
          <PolicyText>
            <p>{t('policies.terms.10.10.3.text')}</p>
          </PolicyText>

          <PolicyTitle>{t('policies.terms.10.10.4.title')}</PolicyTitle>
          <PolicyText>
            <p>{t('policies.terms.10.10.4.text')}</p>
          </PolicyText>

          <PolicyTitle>{t('policies.terms.10.10.5.title')}</PolicyTitle>
          <PolicyText>
            <p>{t('policies.terms.10.10.5.text')}</p>
          </PolicyText>

          <PolicyTitle>{t('policies.terms.10.10.6.title')}</PolicyTitle>
          <PolicyText>
            <p>{t('policies.terms.10.10.6.text')}</p>
          </PolicyText>

          <PolicyTitle>{t('policies.terms.10.10.7.title')}</PolicyTitle>
          <PolicyText>
            <p>{t('policies.terms.10.10.7.text')}</p>
          </PolicyText>

          <PolicyTitle>{t('policies.terms.10.10.8.title')}</PolicyTitle>
          <PolicyText>
            {(
              t('policies.terms.10.10.8.text', {
                returnObjects: true,
              }) as string[]
            ).map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </PolicyText>

          <PolicyTitle>{t('policies.terms.10.10.9.title')}</PolicyTitle>
          <PolicyText>
            <p>{t('policies.terms.10.10.9.text')}</p>
          </PolicyText>

          <PolicyTitle>{t('policies.terms.10.10.10.title')}</PolicyTitle>
          <PolicyText>
            <p>{t('policies.terms.10.10.10.text')}</p>
          </PolicyText>

          <PolicyTitle>{t('policies.terms.10.10.11.title')}</PolicyTitle>
          <PolicyText>
            <p>{t('policies.terms.10.10.11.text')}</p>
          </PolicyText>

          <PolicyTitle>{t('policies.terms.10.10.12.title')}</PolicyTitle>
          <PolicyText>
            {(
              t('policies.terms.10.10.12.text', {
                returnObjects: true,
              }) as string[]
            ).map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </PolicyText>

          <BorderLicens />

          <PolicyTitle>{t('policies.terms.appendixA.title')}</PolicyTitle>
          <PolicyText>
            <p>{t('policies.terms.appendixA.intro')}</p>
          </PolicyText>

          <PolicyTitle>{t('policies.terms.appendixA.A1.title')}</PolicyTitle>
          <PolicyText>
            {(
              t('policies.terms.appendixA.A1.text', {
                returnObjects: true,
              }) as string[]
            ).map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </PolicyText>

          <PolicyTitle>{t('policies.terms.appendixA.A2.title')}</PolicyTitle>
          <PolicyText>
            {(
              t('policies.terms.appendixA.A2.text', {
                returnObjects: true,
              }) as string[]
            ).map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </PolicyText>

          <PolicyTitle>{t('policies.terms.appendixA.A3.title')}</PolicyTitle>
          <PolicyText>
            <p>{t('policies.terms.appendixA.A3.text')}</p>
          </PolicyText>

          <PolicyTitle>{t('policies.terms.appendixA.A4.title')}</PolicyTitle>
          <PolicyText>
            {(
              t('policies.terms.appendixA.A4.text', {
                returnObjects: true,
              }) as string[]
            ).map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </PolicyText>

          <PolicyTitle>{t('policies.terms.appendixA.A5.title')}</PolicyTitle>
          <PolicyText>
            <p>{t('policies.terms.appendixA.A5.text')}</p>
          </PolicyText>

          <PolicyTitle>{t('policies.terms.appendixA.A6.title')}</PolicyTitle>
          <PolicyText>
            {(
              t('policies.terms.appendixA.A6.text', {
                returnObjects: true,
              }) as string[]
            ).map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </PolicyText>

          <PolicyTitle>{t('policies.terms.appendixA.A7.title')}</PolicyTitle>
          <PolicyText>
            {(
              t('policies.terms.appendixA.A7.text', {
                returnObjects: true,
              }) as string[]
            ).map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </PolicyText>

          <PolicyTitle>{t('policies.terms.appendixA.A8.title')}</PolicyTitle>
          <PolicyText>
            <p>{t('policies.terms.appendixA.A8.text')}</p>
          </PolicyText>

          <PolicyTitle>{t('policies.terms.appendixA.A9.title')}</PolicyTitle>
          <PolicyText>
            <p>{t('policies.terms.appendixA.A9.text')}</p>
          </PolicyText>

          <PolicyTitle>{t('policies.terms.appendixA.A10.title')}</PolicyTitle>
          <PolicyText>
            <p>{t('policies.terms.appendixA.A10.text')}</p>
          </PolicyText>

          <BorderLicens />

          <PolicyTitle>{t('policies.terms.appendixB.title')}</PolicyTitle>
          <PolicyText>
            <p>{t('policies.terms.appendixB.intro')}</p>
          </PolicyText>

          <PolicyTitle>{t('policies.terms.appendixB.B1.title')}</PolicyTitle>
          <PolicyText>
            {(
              t('policies.terms.appendixB.B1.text', {
                returnObjects: true,
              }) as string[]
            ).map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </PolicyText>

          <PolicyTitle>{t('policies.terms.appendixB.B2.title')}</PolicyTitle>
          <PolicyText>
            <p>{t('policies.terms.appendixB.B2.text')}</p>
          </PolicyText>

          <PolicyTitle>{t('policies.terms.appendixB.B3.title')}</PolicyTitle>
          <PolicyText>
            <p>{t('policies.terms.appendixB.B3.text')}</p>
          </PolicyText>

          <PolicyTitle>{t('policies.terms.appendixB.B4.title')}</PolicyTitle>
          <PolicyText>
            <p>{t('policies.terms.appendixB.B4.text')}</p>
          </PolicyText>

          <PolicyTitle>{t('policies.terms.appendixB.B5.title')}</PolicyTitle>
          <PolicyText>
            <p>{t('policies.terms.appendixB.B5.text')}</p>
          </PolicyText>

          <PolicyTitle>{t('policies.terms.appendixB.B6.title')}</PolicyTitle>
          <PolicyText>
            <p>{t('policies.terms.appendixB.B6.text')}</p>
          </PolicyText>

          <PolicyTitle>{t('policies.terms.appendixB.B7.title')}</PolicyTitle>
          <PolicyText>
            <p>{t('policies.terms.appendixB.B7.text')}</p>
          </PolicyText>

          <PolicyTitle>{t('policies.terms.appendixB.B8.title')}</PolicyTitle>
          <PolicyText>
            <p>{t('policies.terms.appendixB.B8.text')}</p>
          </PolicyText>

          <PolicyTitle>{t('policies.terms.appendixB.B9.title')}</PolicyTitle>
          <PolicyText>
            <p>{t('policies.terms.appendixB.B9.text')}</p>
          </PolicyText>

          <BorderLicens />

          <PolicyTitle>{t('policies.terms.appendixC.title')}</PolicyTitle>
          <PolicyText>
            <p>{t('policies.terms.appendixC.intro')}</p>
          </PolicyText>

          <PolicyTitle>{t('policies.terms.appendixC.C1.title')}</PolicyTitle>
          <PolicyText>
            {(
              t('policies.terms.appendixC.C1.text', {
                returnObjects: true,
              }) as string[]
            ).map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </PolicyText>

          <PolicyTitle>{t('policies.terms.appendixC.C2.title')}</PolicyTitle>
          <PolicyText>
            {(
              t('policies.terms.appendixC.C2.text', {
                returnObjects: true,
              }) as string[]
            ).map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </PolicyText>

          <PolicyTitle>{t('policies.terms.appendixC.C3.title')}</PolicyTitle>
          <PolicyText>
            <p>{t('policies.terms.appendixC.C3.text')}</p>
          </PolicyText>

          <PolicyTitle>{t('policies.terms.appendixC.C4.title')}</PolicyTitle>
          <PolicyText>
            <p>{t('policies.terms.appendixC.C4.text')}</p>
          </PolicyText>

          <PolicyTitle>{t('policies.terms.appendixC.C5.title')}</PolicyTitle>
          <PolicyText>
            <p>{t('policies.terms.appendixC.C5.text')}</p>
          </PolicyText>

          <PolicyTitle>{t('policies.terms.appendixC.C6.title')}</PolicyTitle>
          <PolicyText>
            <p>{t('policies.terms.appendixC.C6.text')}</p>
          </PolicyText>

          <PolicyTitle>{t('policies.terms.appendixC.C7.title')}</PolicyTitle>
          <PolicyText>
            <p>{t('policies.terms.appendixC.C7.text')}</p>
          </PolicyText>

          <PolicyTitle>{t('policies.terms.appendixC.C8.title')}</PolicyTitle>
          <PolicyText>
            <p>{t('policies.terms.appendixC.C8.text')}</p>
          </PolicyText>

          <PolicyTitle>{t('policies.terms.appendixC.C9.title')}</PolicyTitle>
          <PolicyText>
            <p>{t('policies.terms.appendixC.C9.text')}</p>
          </PolicyText>

          <PolicyTitle>{t('policies.terms.appendixC.C10.title')}</PolicyTitle>
          <PolicyText>
            {(
              t('policies.terms.appendixC.C10.text', {
                returnObjects: true,
              }) as string[]
            ).map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </PolicyText>

          <BorderLicens />

          <PolicyTitle>{t('policies.terms.appendixD.title')}</PolicyTitle>
          <PolicyText>
            <p>{t('policies.terms.appendixD.intro')}</p>
          </PolicyText>

          <PolicyTitle>{t('policies.terms.appendixD.D1.title')}</PolicyTitle>
          <PolicyText>
            <p>{t('policies.terms.appendixD.D1.text')}</p>
          </PolicyText>

          <PolicyTitle>{t('policies.terms.appendixD.D2.title')}</PolicyTitle>
          <PolicyText>
            {(
              t('policies.terms.appendixD.D2.text', {
                returnObjects: true,
              }) as string[]
            ).map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </PolicyText>

          <PolicyTitle>{t('policies.terms.appendixD.D3.title')}</PolicyTitle>
          <PolicyText>
            <p>{t('policies.terms.appendixD.D3.text')}</p>
          </PolicyText>

          <PolicyTitle>{t('policies.terms.appendixD.D4.title')}</PolicyTitle>
          <PolicyText>
            {(
              t('policies.terms.appendixD.D4.text', {
                returnObjects: true,
              }) as string[]
            ).map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </PolicyText>

          <PolicyTitle>{t('policies.terms.appendixD.D5.title')}</PolicyTitle>
          <PolicyText>
            {(
              t('policies.terms.appendixD.D5.text', {
                returnObjects: true,
              }) as string[]
            ).map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </PolicyText>

          <PolicyTitle>{t('policies.terms.appendixD.D6.title')}</PolicyTitle>
          <PolicyText>
            <p>{t('policies.terms.appendixD.D6.text')}</p>
          </PolicyText>

          <PolicyTitle>{t('policies.terms.appendixD.D7.title')}</PolicyTitle>
          <PolicyText>
            {(
              t('policies.terms.appendixD.D7.text', {
                returnObjects: true,
              }) as string[]
            ).map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </PolicyText>

          <PolicyTitle>{t('policies.terms.appendixD.D8.title')}</PolicyTitle>
          <PolicyText>
            <p>{t('policies.terms.appendixD.D8.text')}</p>
          </PolicyText>

          <PolicyTitle>{t('policies.terms.appendixD.D9.title')}</PolicyTitle>
          <PolicyText>
            <p>{t('policies.terms.appendixD.D9.text')}</p>
          </PolicyText>

          <PolicyTitle>{t('policies.terms.appendixD.D10.title')}</PolicyTitle>
          <PolicyText>
            <p>{t('policies.terms.appendixD.D10.text')}</p>
          </PolicyText>

          <BorderLicens />

          <PolicyTitle>{t('policies.terms.appendixE.title')}</PolicyTitle>
          <PolicyText>
            <p>{t('policies.terms.appendixE.intro')}</p>
          </PolicyText>

          <PolicyTitle>{t('policies.terms.appendixE.E1.title')}</PolicyTitle>
          <PolicyText>
            {(
              t('policies.terms.appendixE.E1.text', {
                returnObjects: true,
              }) as string[]
            ).map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </PolicyText>

          <PolicyTitle>{t('policies.terms.appendixE.E2.title')}</PolicyTitle>
          <PolicyText>
            <p>{t('policies.terms.appendixE.E2.text')}</p>
          </PolicyText>

          <PolicyTitle>{t('policies.terms.appendixE.E3.title')}</PolicyTitle>
          <PolicyText>
            <p>{t('policies.terms.appendixE.E3.text')}</p>
          </PolicyText>

          <PolicyTitle>{t('policies.terms.appendixE.E4.title')}</PolicyTitle>
          <PolicyText>
            {(
              t('policies.terms.appendixE.E4.text', {
                returnObjects: true,
              }) as string[]
            ).map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </PolicyText>

          <PolicyTitle>{t('policies.terms.appendixE.E5.title')}</PolicyTitle>
          <PolicyText>
            <p>{t('policies.terms.appendixE.E5.text')}</p>
          </PolicyText>

          <PolicyTitle>{t('policies.terms.appendixE.E6.title')}</PolicyTitle>
          <PolicyText>
            <p>{t('policies.terms.appendixE.E6.text')}</p>
          </PolicyText>

          <PolicyTitle>{t('policies.terms.appendixE.E7.title')}</PolicyTitle>
          <PolicyText>
            <p>{t('policies.terms.appendixE.E7.text')}</p>
          </PolicyText>

          <PolicyTitle>{t('policies.terms.appendixE.E8.title')}</PolicyTitle>
          <PolicyText>
            <p>{t('policies.terms.appendixE.E8.text')}</p>
          </PolicyText>

          <BorderLicens />

          <PolicyTitle>{t('policies.terms.contact.title')}</PolicyTitle>
          <PolicyText>
            {(
              t('policies.terms.contact.text', {
                returnObjects: true,
              }) as string[]
            ).map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </PolicyText>
        </PolicySection>
      </Element>
    </PoliciesContainer>
  );
};
