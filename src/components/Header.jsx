
import React from 'react';
import './Header.css';
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t } = useTranslation();

  return (
    <header className="header">
      <div className="logo">
        <a href="/">Nikkei Kaitai Kogyo</a>
      </div>
      <nav>
        <ul>
          <li><a href="/">{t('home')}</a></li>
          <li><a href="/about">{t('about')}</a></li>
          <li><a href="/services">{t('services')}</a></li>
          <li><a href="/contact">{t('contact')}</a></li>
        </ul>
      </nav>
      <LanguageSwitcher />
    </header>
  );
};

export default Header;
