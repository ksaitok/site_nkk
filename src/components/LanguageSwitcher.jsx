
import React from 'react';
import { useTranslation } from 'react-i18next';
import './LanguageSwitcher.css';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="language-switcher">
      <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('pt')}>Português</button>
      <button onClick={() => changeLanguage('ja')}>日本語</button>
    </div>
  );
};

export default LanguageSwitcher;
