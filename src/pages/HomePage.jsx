import React from 'react';
import Hero from '../components/Hero';
import './HomePage.css';
import demolicaoResidencial from '../assets/demolicao-residencial.jpg';
import demolicaoComercial from '../assets/demolicao-comercial.jpg';
import demolicaoIndustrial from '../assets/demolicao-industrial.jpg';

const HomePage = () => {
  return (
    <div>
      <Hero />
      <main className="home-main">
        <h2>Our Services</h2>
        <p>We offer a wide range of demolition services to meet your needs.</p>
        <div className="services-grid">
          <div className="service-card">
            <img src={demolicaoResidencial} alt="Demolição Residencial com máquina escavadeira" />
            <h3>Demolição Residencial</h3>
            <p>Demolição completa e parcial de casas e edificações residenciais com segurança e eficiência.</p>
          </div>
          <div className="service-card">
            <img src={demolicaoComercial} alt="Demolição Comercial com guindaste" />
            <h3>Demolição Comercial</h3>
            <p>Demolição de prédios comerciais, escritórios e espaços de varejo com técnicas especializadas.</p>
          </div>
          <div className="service-card">
            <img src={demolicaoIndustrial} alt="Demolição Industrial com equipamentos pesados" />
            <h3>Demolição Industrial</h3>
            <p>Demolição de fábricas, armazéns e instalações industriais com alto grau de complexidade.</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
