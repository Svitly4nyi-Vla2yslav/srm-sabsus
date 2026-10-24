import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

// HttpApi завантажує переклади з /locales/{lng}/translation.json,
// а детектор спочатку перевіряє збережений вибір, потім мову браузера.
i18n
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: ["en", "ru", "es", "uk"],
    // Англійська є резервною мовою; завантажуються лише явно підтримувані локалі.
    fallbackLng: "en",
    debug: process.env.NODE_ENV === 'development',
    interpolation: { 
      escapeValue: false 
    },
    backend: {
      loadPath: "/locales/{{lng}}/translation.json",
    },
    detection: {
      // Вибір із localStorage має пріоритет і кешується після визначення.
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    }
  });

export default i18n;