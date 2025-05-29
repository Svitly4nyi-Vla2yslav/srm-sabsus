import { createContext, useContext, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';

type Language = 'en' | 'ru' | 'es' | 'ua';

interface LanguageContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(
  undefined
);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const { i18n } = useTranslation();

  const setLanguage = (lang: Language) => {
    i18n.changeLanguage(lang).then(() => {
      // Перезавантажуємо сторінку після зміни мови
      window.location.reload();
    });
  };

  return (
    <LanguageContext.Provider
      value={{ language: i18n.language as Language, setLanguage }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
