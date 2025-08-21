
import React from 'react';
import './Hero.css';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <div className="hero">
      <div className="hero-content">
        <h1>{t('hero_title')}</h1>
        <p>{t('hero_subtitle')}</p>
        <a href="/contact" className="cta-button">{t('get_free_estimate')}</a>
      </div>
    </div>
  );
};

export default Hero;
