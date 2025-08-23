import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t } = useTranslation();

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">Nikkei Kaitai Kogyo</Link>
      </div>
      <nav>
        <ul>
          <li><Link to="/">{t('home')}</Link></li>
          <li><Link to="/about">{t('about')}</Link></li>
          <li><Link to="/services">{t('services')}</Link></li>
          <li><Link to="/contact">{t('contact')}</Link></li>
        </ul>
      </nav>
      <LanguageSwitcher />
    </header>
  );
};

export default Header;