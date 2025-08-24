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
            <img src="https://images.unsplash.com/photo-1567958451986-2de427a4a0ba?w=400&h=250&fit=crop&crop=center" alt="Demolição Residencial com máquina escavadeira" />
            <h3>Demolição Residencial</h3>
            <p>Demolição completa e parcial de casas e edificações residenciais com segurança e eficiência.</p>
          </div>
          <div className="service-card">
            <img src="https://images.unsplash.com/photo-1517824806704-9040b42b9180?w=400&h=250&fit=crop&crop=center" alt="Demolição Comercial com guindaste" />
            <h3>Demolição Comercial</h3>
            <p>Demolição de prédios comerciais, escritórios e espaços de varejo com técnicas especializadas.</p>
          </div>
          <div className="service-card">
            <img src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=250&fit=crop&crop=center" alt="Demolição Industrial com equipamentos pesados" />
            <h3>Demolição Industrial</h3>
            <p>Demolição de fábricas, armazéns e instalações industriais com alto grau de complexidade.</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
