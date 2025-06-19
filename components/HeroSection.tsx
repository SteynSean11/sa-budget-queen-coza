
import React from 'react';
import Button from './common/Button';
import { CrownIcon } from '../constants';
import Logo from './common/Logo';

const HeroSection: React.FC = () => {
  return (
    <section className="bg-brand-deep-purple text-brand-off-white py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        {[...Array(25)].map((_, i) => (
          <CrownIcon 
            key={i} 
            className="absolute text-brand-gold" // Use antique gold for subtle background
            style={{ 
              width: `${Math.random() * 70 + 30}px`,
              height: `${Math.random() * 70 + 30}px`,
              top: `${Math.random() * 100}%`, 
              left: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 360}deg)`,
              opacity: Math.random() * 0.5 + 0.1,
            }} 
            aria-hidden="true"
          />
        ))}
      </div>
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="mb-8 md:mb-10">
          <Logo width={200} height={200} className="mx-auto" />
        </div>
        
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-brand-highlight-gold">
          Live Like Royalty on Any Budget
        </h1>
        <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto text-brand-light-grey">
          Join thousands of South African families learning to manage their money like royalty. Smart budgeting, smarter shopping, financial freedom.
        </p>
        <div className="space-y-4 md:space-y-0 md:space-x-6">
          <Button variant="primary" size="lg" onClick={() => alert('Start Learning Free - Coming Soon!')}>
            Start Learning Free
          </Button>
          <Button variant="outline-on-dark" size="lg" onClick={() => alert('Download Templates - Coming Soon!')}>
            Download Templates
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
