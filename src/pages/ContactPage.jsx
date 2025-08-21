
import React from 'react';
import './ContactPage.css';
import { useTranslation } from 'react-i18next';

const ContactPage = () => {
  const { t } = useTranslation();

  return (
    <div className="contact-page">
      <div className="contact-header">
        <h1>{t('contact_title')}</h1>
        <p>{t('contact_subtitle')}</p>
      </div>
      <div className="contact-content">
        <div className="contact-form">
          <h2>{t('send_message_title')}</h2>
          <form>
            <div className="form-group">
              <label htmlFor="name">{t('name_label')}</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">{t('email_label')}</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">{t('message_label')}</label>
              <textarea id="message" name="message" rows="5" required></textarea>
            </div>
            <button type="submit" className="submit-button">{t('send_message_button')}</button>
          </form>
        </div>
        <div className="contact-info">
          <h2>{t('contact_info_title')}</h2>
          <p>{t('address_info')}</p>
          <p>{t('phone_info')}</p>
          <p>{t('email_info')}</p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
