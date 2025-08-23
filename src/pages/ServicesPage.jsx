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
          <img src="https://placehold.co/400x250" alt="Residential Demolition" />
          <h2>{t('residential_demolition_title')}</h2>
          <p>{t('residential_demolition_content')}</p>
        </div>
        <div className="service-item">
          <img src="https://placehold.co/400x250" alt="Commercial Demolition" />
          <h2>{t('commercial_demolition_title')}</h2>
          <p>{t('commercial_demolition_content')}</p>
        </div>
        <div className="service-item">
          <img src="https://placehold.co/400x250" alt="Industrial Demolition" />
          <h2>{t('industrial_demolition_title')}</h2>
          <p>{t('industrial_demolition_content')}</p>
        </div>
        <div className="service-item">
          <img src="https://placehold.co/400x250" alt="Interior Demolition" />
          <h2>{t('interior_demolition_title')}</h2>
          <p>{t('interior_demolition_content')}</p>
        </div>
        <div className="service-item">
          <img src="https://placehold.co/400x250" alt="Concrete Removal" />
          <h2>{t('concrete_removal_title')}</h2>
          <p>{t('concrete_removal_content')}</p>
        </div>
        <div className="service-item">
          <img src="https://placehold.co/400x250" alt="Site Clearing" />
          <h2>{t('site_clearing_title')}</h2>
          <p>{t('site_clearing_content')}</p>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
