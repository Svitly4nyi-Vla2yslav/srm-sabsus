import React, { useEffect } from 'react';
import { Element } from 'react-scroll';
import {
  PoliciesContainer,
  PolicySection,
  PolicyTitle,
  PolicyText,
  Border,
  BorderLicens,
} from './Footer.styled';
import { useTranslation } from 'react-i18next';
import DOMPurify from 'dompurify';

interface PoliciesContentProps {
  activePolicy: string | null;
}

export const PoliciesContent: React.FC<PoliciesContentProps> = ({
  activePolicy,
}) => {
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
    <PoliciesContainer id="privacy">
      <Element name="privacy" className="policy-section">
        <PolicySection>
          <PolicyTitle>
            USER AGREEMENT AND PRIVACY POLICY of the Sabsus Platform: 16 May
            2025
          </PolicyTitle>
          <PolicyText>
            <p>
              Welcome to the Sabsus Platform. This document constitutes a
              unified User Agreement and Privacy Policy applicable to the
              website, mobile application and other Sabsus services (together,
              the “Sabsus Platform” or “Service”). By using or registering on
              the Sabsus Platform, you (the “User,” “you”) agree to the terms of
              this Agreement and confirm that you have read our personal-data
              processing policy. If you do not agree with any provision, please
              do not use the Service.
            </p>
            <p>
              We recommend that you read the following terms carefully. The
              document sets out the rules for using the Sabsus Platform, the
              rights and obligations of Users, and the conditions for processing
              and protecting personal data in accordance with global
              requirements (GDPR, CCPA/CPRA, PIPEDA, UK GDPR, etc.), as well as
              regional clauses for different jurisdictions. This Agreement is
              written in Russian but is intended to apply to all users worldwide
              (in the relevant parts, taking regional specifics into account).
              If any local law conflicts with the provisions of this Agreement,
              the mandatory rules of your jurisdiction prevail to the extent of
              the conflict.
            </p>
          </PolicyText>
        </PolicySection>
      </Element>
      <Border />
      <Element id="cookie" name="cookie" className="policy-section">
        <PolicySection>
          <PolicyTitle>1. Terms and Definitions</PolicyTitle>
          <PolicyTitle>Sabsus Platform (or Service)</PolicyTitle>
          <PolicyText>
            <p>
              The combination of software and hardware that powers the Sabsus
              website, mobile app and other digital tools designed for
              interaction between partner restaurants and their customers. The
              Platform allows Users to register, order restaurant goods and
              services, pay online, participate in loyalty programs, use gift
              cards, leave reviews, etc.
            </p>
            <PolicyTitle>Sabsus Company (or we/our)</PolicyTitle>
            <p>
              The owner of the Sabsus Platform responsible for its operation. It
              is assumed to be a legal entity incorporated under the laws of the
              State of California, USA (e.g., Sabsus, Inc.), acting as the
              personal-data controller of Users
            </p>
            <PolicyTitle>User (or you)</PolicyTitle>
            <p>
              Any natural person who is a customer of restaurants and uses the
              Sabsus Platform to order goods/services, participate in loyalty
              programs, submit reviews and other interactions. The User must
              have reached the age allowing them to enter into legally binding
              agreements (normally 18 years) or use the Service with the consent
              of a legal guardian.
            </p>
            <PolicyTitle>Restaurant </PolicyTitle>
            <p>
              A business entity or entrepreneur, partner of Sabsus, offering its
              goods and services (e.g., dishes, drinks, gift certificates) to
              Users through the Platform. Each purchase transaction via the
              Service is concluded between the User and the relevant Restaurant.
            </p>
            <PolicyTitle>Account</PolicyTitle>
            <p>
              The User’s account on the Sabsus Platform created during
              registration and used to access the Service’s features.
              Registration requires providing current and accurate information
              (e.g., name, phone number, email address) and creating a strong
              password
            </p>

            <PolicyTitle>Personal data</PolicyTitle>
            <p>
              Any information relating to an identified or identifiable natural
              person. Such data may include: name, contact details, payment
              information, order data, reviews, as well as technical data about
              the device and network used to access the Service, and other
              information that directly or indirectly identifies the User. See
              examples at opentable.comopentable.com.
            </p>
            <PolicyTitle>Privacy Policy</PolicyTitle>
            <p>
              The section of this document that describes how Sabsus collects,
              uses, discloses and protects Users’ Personal Data, and explains
              Users’ privacy rights and how to exercise them.
            </p>
            <PolicyTitle>Payment providers</PolicyTitle>
            <p>
              Third-party electronic-payment services integrated with the Sabsus
              Platform. In particular, we use Stripe and PayPal to process
              payments. These providers may request and process a User’s
              financial data (e.g., card details) under their own rules and
              privacy policies
            </p>
            <PolicyTitle>Bonus program</PolicyTitle>
            <p>
              A loyalty program implemented through the Sabsus Platform under
              which the User may accumulate bonus points or receive other
              rewards for orders and certain actions, and redeem them for
              discounts or prizes under established terms.
            </p>
            <PolicyTitle>Gift card</PolicyTitle>
            <p>
              A digital or physical certificate (voucher) granting the right to
              receive Restaurant goods/services for a specific amount or volume.
              Gift cards may be purchased or issued in promotions and are
              subject to special terms (see Section 5 below).
            </p>
            <PolicyTitle> User Content</PolicyTitle>
            <p>
              Materials that the User posts on the Sabsus Platform, including
              reviews, ratings, comments, photos and other content. The User
              retains rights to their Content but grants Sabsus a non-exclusive
              right to use, reproduce, publish and display such Content within
              the Service’s operation (see Section 7 for details).
            </p>
            <PolicyTitle>Cookie</PolicyTitle>
            <p>
              A small data fragment placed by the Service (or third parties on
              our behalf) on the User’s device when visiting the website.
              Cookies remember User actions and preferences (e.g., interface
              language, cart contents) and collect usage statistics to
              personalise the Service.
            </p>
            <PolicyTitle>Pixel (tracking pixel)</PolicyTitle>
            <p>
              A snippet of code or invisible image on a webpage or email used to
              track User activity (e.g., page view or email open). Marketing and
              analytics services may use pixels on our Platform to gather
              information on User interaction with content.
            </p>
            <PolicyTitle>SDK</PolicyTitle>
            <p>
              A set of development tools integrated into our mobile app and
              provided by third parties for additional functions. In particular,
              the Service may include Firebase SDK (Google Firebase platform)
              and Supabase SDK (Supabase platform) for authentication, data
              storage, analytics, push notifications, etc. These SDKs may
              automatically collect certain device data (e.g., identifiers,
              technical info) and use cookies or similar technologies.
            </p>
            <PolicyTitle>GDPR</PolicyTitle>
            <p>
              Regulation (EU) 2016/679, the General Data Protection
              Regulation—see privacyaffairs.com.
            </p>
            <PolicyTitle>CCPA</PolicyTitle>
            <p>
              California Consumer Privacy Act 2018, as amended (including CPRA
              2020); see prioritypass.comprioritypass.com.
            </p>
            <PolicyTitle>PIPEDA</PolicyTitle>
            <p>
              Canada’s Personal Information Protection and Electronic Documents
              Act; see myemail-api.constantcontact.com.
            </p>
            <PolicyTitle>UK GDPR</PolicyTitle>
            <p>UK data-protection law equivalent to EU GDPR; see ico.org.uk.</p>
          </PolicyText>
          <BorderLicens />
          <PolicyText>
            <PolicyTitle>2. Account Registration</PolicyTitle>
            <PolicyTitle>2.1 Creating an account.</PolicyTitle>
            <p>
              To access the main features of the Sabsus Platform (placing
              orders, receiving bonuses, etc.), you must create an account.
              During registration you must provide accurate and complete
              information, including at least your full name, valid email
              address and phone number, and set a strong password. Choosing a
              unique password and keeping it secret is recommended. Registering
              an account confirms your agreement with this User Agreement and
              Privacy Policy.
            </p>
            <PolicyTitle>2.2 User requirements.</PolicyTitle>
            <p>
              The Service is intended for persons aged 18 years or the age of
              majority in your country. Persons under 18 must not register or
              use the Platform for monetary transactions on their own. If you
              are under the age of majority, you may register and use the
              Service only under the supervision and with the consent of a
              parent or legal guardian. By registering, you confirm that you
              have the legal capacity to enter into a binding agreement, or that
              you act with the appropriate permission of a legal representative.
            </p>{' '}
            <PolicyTitle>2.3 One user – one account.</PolicyTitle>
            <p>
              Each User may have no more than one active account unless Sabsus
              permits otherwise. Accounts are personal: you may not transfer
              login credentials to others, nor sell, gift or otherwise dispose
              of the account. You are personally responsible for all actions
              performed under your account.
            </p>{' '}
            <PolicyTitle>2.4 Data accuracy.</PolicyTitle>
            <p>
              The User agrees to keep their registration and profile data up to
              date. If your address, phone number, payment details or other
              essential information changes, please update it in your account
              settings. Sabsus is not liable for negative consequences arising
              from the User providing inaccurate or outdated data (e.g., failure
              to receive an important notice, delivery issues).
            </p>{' '}
            <PolicyTitle>2.5 Account security.</PolicyTitle>
            <p>
              You are responsible for keeping your password confidential and for
              restricting access to devices on which your account is logged in.
              If you suspect your password has been compromised or that there is
              unauthorised access to your account, change your password
              immediately and contact us. We may request additional information
              to verify your identity when restoring access or changing security
              settings.
            </p>{' '}
            <PolicyTitle>
              2.6 Completion of registration and electronic consent
            </PolicyTitle>
            <p>
              By completing the registration process (e.g., clicking a
              “Register” button) and/or ticking a checkbox indicating consent to
              the terms, you give your electronic consent to enter into this
              Agreement. Electronic consent has the same legal force as a
              written signature under applicable law. You also agree to receive
              notifications and other information from Sabsus in electronic form
              (e.g., by email, push notifications, or within the Service
              interface).
            </p>
          </PolicyText>
        </PolicySection>
      </Element>
      <BorderLicens />
      <Element id="terms" name="terms" className="policy-section">
        <PolicySection>
          <PolicyTitle>3. Using the Service: General Terms</PolicyTitle>
          <PolicyTitle>3.1 Provision of Sabsus Services.</PolicyTitle>
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
