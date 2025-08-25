import React from 'react';
import './AboutPage.css';
import { useTranslation } from 'react-i18next';
import demolicaoResidencial from '../assets/demolicao-residencial.jpg';
import demolicaoComercial from '../assets/demolicao-comercial.jpg';
import demolicaoIndustrial from '../assets/demolicao-industrial.jpg';
import heroBackground from '../assets/hero-background.jpg';

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
      <img src={heroBackground} alt="Equipe Demolidora em obra" className="about-image" />
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
        <div className="gallery-section">
          <h2>Galeria de obras realizadas</h2>
          <div className="gallery-grid">
            <div className="gallery-item">
        <img src={demolicaoResidencial} alt="Demolição de grande estrutura residencial" />
              <p>Demolição Completa - Condomínio Residencial</p>
            </div>
            <div className="gallery-item">
        <img src={demolicaoComercial} alt="Demolição industrial controlada" />
              <p>Demolição Industrial - Planta Fabril</p>
            </div>
            <div className="gallery-item">
        <img src={demolicaoIndustrial} alt="Remoção de pavimento asfáltico" />
              <p>Remoção de Concreto - Estrutura Comercial</p>
            </div>
            <div className="gallery-item">
        <img src={heroBackground} alt="Terreno preparado após limpeza" />
              <p>Limpeza de Terreno - Terreno 3000m²</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;