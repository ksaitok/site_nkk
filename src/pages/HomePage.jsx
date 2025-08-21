
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <main style={{ padding: '2rem' }}>
        <h2>Our Services</h2>
        <p>We offer a wide range of demolition services to meet your needs.</p>
        {/* Add more content here */}
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
