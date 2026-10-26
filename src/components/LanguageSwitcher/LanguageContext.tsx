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

/**
 * Надає дочірнім компонентам поточну мову i18next і функцію для її зміни.
 *
 * @param children — React-вміст, якому потрібен доступ до мовного контексту.
 * @returns Провайдер з актуальним кодом мови та функцією setLanguage.
 */
export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const { i18n } = useTranslation();

  /**
   * Передає підтримуваний код до i18next і перезавантажує сторінку після завершення зміни.
   *
   * @param lang — код нової мови.
   * @returns Нічого не повертає.
   * @sideEffects Оновлює i18next і викликає повне перезавантаження сторінки.
   */
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

/**
 * Повертає мовний контекст найближчого LanguageProvider.
 *
 * @returns Поточну мову та функцію setLanguage.
 * @throws Error, якщо хук викликано поза LanguageProvider.
 */
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
