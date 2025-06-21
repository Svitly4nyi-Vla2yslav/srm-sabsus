import { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

// Styled Components
const Wrapper = styled.div`
  position: relative;
  display: flex;
  z-index: 100;
  margin-right: 20px;

  @media (max-width: 743px) {
    margin-right: 10px;
  }
`;

const Button = styled.button`
  border-radius: 12px;
  padding: 8px 8px;
  width: 70px;
  height: 36px;
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 14px;
  text-align: center;
  color: var(--white-100);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }

  @media (max-width: 743px) {
    // min-width: 80px;
    font-size: 13px;
    padding: 6px 10px;
  }
`;

const Dropdown = styled(motion.ul)`
  position: absolute;
  top: 100%;
  left: 0;
  margin-top: 8px;
  min-width: 120px;
  background: rgba(30, 30, 30, 0.9);
  backdrop-filter: blur(10px);
  color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  z-index: 11;
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const DropdownItem = styled(motion.li)`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 14px;
  padding: 10px 16px;
  cursor: pointer;
  transition: background 0.2s;
  display: flex;
  align-items: center;
  gap: 8px;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }

  &:not(:last-child) {
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  }
`;

const FlagIcon = styled.span`
  font-size: 16px;
`;

const LanguageSwitcher = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'en', label: t('languageSwitcher.english'), flag: '🇬🇧' },
    { code: 'es', label: t('languageSwitcher.spanish'), flag: '🇪🇸' },
    { code: 'ru', label: t('languageSwitcher.russian'), flag: '🇷🇺' },
    { code: 'uk', label: t('languageSwitcher.ukrainian'), flag: '🇺🇦' }
  ];

  const selectedLang = languages.find(lang => lang.code === i18n.language) || languages[0];

  const toggleMenu = () => setIsOpen(prev => !prev);

  const handleLanguageChange = async (langCode: string) => {
    await i18n.changeLanguage(langCode);
    setIsOpen(false);
    // Оновлюємо сторінку для застосування змін
    window.location.reload();
  };

  return (
    <Wrapper>
      <Button onClick={toggleMenu} aria-label="Change language">
        <FlagIcon>🌎</FlagIcon>
        {selectedLang.label}
        <span>⌄</span>
      </Button>

      <AnimatePresence>
        {isOpen && (
          <Dropdown
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {languages.map(lang => (
              <DropdownItem
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FlagIcon>{lang.flag}</FlagIcon>
                {lang.label}
              </DropdownItem>
            ))}
          </Dropdown>
        )}
      </AnimatePresence>
    </Wrapper>
  );
};

export default LanguageSwitcher;