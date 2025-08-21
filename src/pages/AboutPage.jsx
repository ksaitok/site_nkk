
import React from 'react';
import './AboutPage.css';
import { useTranslation } from 'react-i18next';

const AboutPage = () => {
  const { t } = useTranslation();

  return (
    <div className="about-page">
      <div className="about-header">
        <h1>{t('about_title')}</h1>
        <p>{t('about_subtitle')}</p>
      </div>
      <div className="about-content">
        <div className="about-section">
          <h2>{t('our_story_title')}</h2>
          <p>{t('our_story_content')}</p>
        </div>
        <div className="about-section">
          <h2>{t('our_mission_title')}</h2>
          <p>{t('our_mission_content')}</p>
        </div>
        <div className="about-section">
          <h2>{t('our_values_title')}</h2>
          <ul>
            <li>{t('safety_value')}</li>
            <li>{t('integrity_value')}</li>
            <li>{t('quality_value')}</li>
            <li>{t('teamwork_value')}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
