import React from 'react';
import './ServicesPage.css';
import { useTranslation } from 'react-i18next';

const ServicesPage = () => {
  const { t } = useTranslation();

  return (
    <div className="services-page">
      <div className="services-header">
        <h1>{t('services_title')}</h1>
        <p>{t('services_subtitle')}</p>
      </div>
      <div className="services-content">
        <div className="service-item">
          <img src="https://images.unsplash.com/photo-1565031491910-e57c8e550155?w=400&h=250&fit=crop&crop=center" alt="Demolição Residencial de casa unifamiliar" />
          <h2>{t('residential_demolition_title')}</h2>
          <p>{t('residential_demolition_content')}</p>
        </div>
        <div className="service-item">
          <img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400&h=250&fit=crop&crop=center" alt="Demolição Comercial de edifício empresarial" />
          <h2>{t('commercial_demolition_title')}</h2>
          <p>{t('commercial_demolition_content')}</p>
        </div>
        <div className="service-item">
          <img src="https://images.unsplash.com/photo-1473448912268-2022ce9509d7?w=400&h=250&fit=crop&crop=center" alt="Demolição Industrial de fábrica" />
          <h2>{t('industrial_demolition_title')}</h2>
          <p>{t('industrial_demolition_content')}</p>
        </div>
        <div className="service-item">
          <img src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=250&fit=crop&crop=center" alt="Demolição Interior de parede interna" />
          <h2>{t('interior_demolition_title')}</h2>
          <p>{t('interior_demolition_content')}</p>
        </div>
        <div className="service-item">
          <img src="https://images.unsplash.com/photo-1558618666-fc58d9543dbf?w=400&h=250&fit=crop&crop=center" alt="Remoção de Concreto com britagem" />
          <h2>{t('concrete_removal_title')}</h2>
          <p>{t('concrete_removal_content')}</p>
        </div>
        <div className="service-item">
          <img src="https://images.unsplash.com/photo-1604187341574-c75ca79f5807?w=400&h=250&fit=crop&crop=center" alt="Limpeza de terreno e remoção de entulho" />
          <h2>{t('site_clearing_title')}</h2>
          <p>{t('site_clearing_content')}</p>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
