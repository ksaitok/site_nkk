
import React from 'react';
import './Hero.css';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <div className="hero" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(https://images.unsplash.com/photo-1567958451986-2de427a4a0ba?w=1920&h=1080&fit=crop&crop=center)' }}>
      <div className="hero-content">
        <h1>{t('hero_title')}</h1>
        <p>{t('hero_subtitle')}</p>
        <a href="/contact" className="cta-button">{t('get_free_estimate')}</a>
      </div>
    </div>
  );
};

export default Hero;
