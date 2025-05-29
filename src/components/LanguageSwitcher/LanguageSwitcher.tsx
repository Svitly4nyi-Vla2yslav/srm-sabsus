import { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

// Дані мов
const languages = [
  { code: 'en', label: 'Eng' },
  { code: 'es', label: 'Esp' },
  { code: 'ru', label: 'Rus' },
  { code: 'ua', label: 'Ukr' },
];

// Styled Components
const Wrapper = styled.div`
  position: relative;
  left: 0px;
  display: flex;
  z-index: 100;

  @media screen and (min-width: 744px) {
    margin-right: 20px;
    left: 0;
  }

  @media screen and (min-width: 1440px) {
  }
`;

const Button = styled.button`
  border-radius: 12px;
  padding:2px;
  max-width: 101px;
  height: 36px;
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 13px;
  text-align: center;
  color: var(--white-100);

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
  border: none;

  &:hover {
    background: #444;
    background-color: rgba(249, 249, 249, 0.28);
  }
`;

const Dropdown = styled(motion.ul)`
  position: absolute;
  top: 100%;
  left: 0;
  margin-top: 8px;
  width: 60px;
  background-color: rgba(249, 249, 249, 0.28);
  backdrop-filter: blur(10px);
  color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  z-index: 11;
`;

const DropdownItem = styled(motion.li)`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 15px;
  text-align: center;
  color: var(--white-100);
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: #444;
  }
`;

const Icons = styled.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 15px;
  text-align: center;
  color: var(--white-100);
  width: 0px;
`;

const IconsArrow = styled.p`
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 15px;
  text-align: center;
  color: var(--white-100);
  //   width: 10px;
`;

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const selectedLang =
    languages.find(lang => lang.code === i18n.language) || languages[0];

  const toggleMenu = () => setIsOpen(prev => !prev);

  const handleLanguageChange = (langCode: string) => {
    i18n.changeLanguage(langCode).then(() => {
      // Перезавантажуємо сторінку після зміни мови
      window.location.reload();
    });
    setIsOpen(false);
  };

  return (
    <Wrapper>
      <Button onClick={toggleMenu}>
        <span>🌎{selectedLang.label} ⌄ </span>
        <Icons></Icons>
        <IconsArrow></IconsArrow>
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
              >
                {lang.label}
                <Icons></Icons>
              </DropdownItem>
            ))}
          </Dropdown>
        )}
      </AnimatePresence>
    </Wrapper>
  );
};

export default LanguageSwitcher;
