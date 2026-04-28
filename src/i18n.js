import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

// Detects user language, loads translations from /public/locales/{{lng}}/{{ns}}.json
i18n
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: ['en', 'ar'], // Provide supported languages
    fallbackLng: 'en', // Default to English if detection fails
    detection: {
      // Order of detecting user language
      order: ['queryString', 'cookie', 'localStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
      caches: ['localStorage', 'cookie'], // Cache the language setting
    },
    backend: {
      loadPath: '/locales/{{lng}}/translation.json', // Path to translation files
    },
    react: {
      useSuspense: true, // Requires <Suspense> wrapper in main.jsx
    },
    interpolation: {
      escapeValue: false, // React already inherently protects from XSS
    }
  });

export default i18n;
