import React from 'react';
import Hero from '../components/Hero';
import './HomePage.css';

const HomePage = () => {
  return (
    <div>
      <Hero />
      <main className="home-main">
        <h2>Our Services</h2>
        <p>We offer a wide range of demolition services to meet your needs.</p>
        <div className="services-grid">
          <div className="service-card">
            <img src="https://placehold.co/400x250" alt="Residential Demolition" />
            <h3>Residential Demolition</h3>
            <p>Complete and partial demolition of houses and residential buildings.</p>
          </div>
          <div className="service-card">
            <img src="https://placehold.co/400x250" alt="Commercial Demolition" />
            <h3>Commercial Demolition</h3>
            <p>Demolition of commercial buildings, offices, and retail spaces.</p>
          </div>
          <div className="service-card">
            <img src="https://placehold.co/400x250" alt="Industrial Demolition" />
            <h3>Industrial Demolition</h3>
            <p>Demolition of factories, warehouses, and industrial facilities.</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
