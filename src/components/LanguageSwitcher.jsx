import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './LanguageSwitcher.css';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const languages = {
    en: 'English',
    pt: 'Português',
    ja: '日本語',
  };

  return (
    <div className="language-switcher">
      <button onClick={toggleDropdown} className="dropdown-toggle">
        {languages[i18n.language]}
      </button>
      {isOpen && (
        <div className="dropdown-menu">
          <button onClick={() => changeLanguage('en')}>English</button>
          <button onClick={() => changeLanguage('pt')}>Português</button>
          <button onClick={() => changeLanguage('ja')}>日本語</button>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;