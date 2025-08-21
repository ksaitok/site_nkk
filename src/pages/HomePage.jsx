
import React from 'react';
import Hero from '../components/Hero';

const HomePage = () => {
  return (
    <div>
      <Hero />
      <main style={{ padding: '2rem' }}>
        <h2>Our Services</h2>
        <p>We offer a wide range of demolition services to meet your needs.</p>
        {/* Add more content here */}
      </main>
    </div>
  );
};

export default HomePage;
