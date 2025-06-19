
import React from 'react';
import { PremiumFeature } from '../types';
import SectionTitle from './common/SectionTitle';
import Card from './common/Card';
import Button from './common/Button';
import { BankIcon, ChartBarIcon, MagnifyingGlassIcon } from '../constants';

const PremiumAppFeaturesSection: React.FC = () => {
  const features: PremiumFeature[] = [
    { 
      id: '1', 
      title: 'Bank Integration', 
      description: 'Securely connect SA bank accounts for automatic expense tracking.',
      icon: <BankIcon className="w-12 h-12 text-brand-highlight-gold mb-4" aria-hidden="true" />
    },
    { 
      id: '2', 
      title: 'Smart Analysis', 
      description: 'AI-powered insights to identify saving opportunities and spending patterns.',
      icon: <ChartBarIcon className="w-12 h-12 text-brand-highlight-gold mb-4" aria-hidden="true" />
    },
    { 
      id: '3', 
      title: 'Subscription Scanner', 
      description: 'Find forgotten subscriptions and discover cheaper alternatives.',
      icon: <MagnifyingGlassIcon className="w-12 h-12 text-brand-highlight-gold mb-4" aria-hidden="true" />
    },
  ];

  return (
    <section className="py-16 bg-brand-black text-brand-off-white">
      <div className="container mx-auto px-6">
        <SectionTitle 
          title="Coming Soon: Premium App Features"
          subtitle="The ultimate budgeting companion that connects to your bank accounts and automatically tracks spending, finds forgotten subscriptions, and optimizes your expenses."
          iconColor="text-brand-highlight-gold"
          titleClassName="text-brand-highlight-gold"
          subtitleClassName="text-brand-light-grey"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {features.map((feature) => (
            <Card key={feature.id} className="bg-brand-deep-purple border border-brand-gold text-center">
              <div className="flex justify-center">{feature.icon}</div>
              <h3 className="text-2xl font-serif font-semibold text-brand-highlight-gold mb-3">{feature.title}</h3>
              <p className="text-brand-light-grey">{feature.description}</p>
            </Card>
          ))}
        </div>
        <div className="text-center">
          <Button variant="primary" size="lg" onClick={() => alert('Joining Waitlist - Feature Coming Soon!')}>
            Join the Waitlist
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PremiumAppFeaturesSection;