
import React from 'react';
import { EducationalTip } from '../types';
import SectionTitle from './common/SectionTitle';
import Card from './common/Card';
import { MoneyBagIcon, BankIcon, CheckCircleIcon } from '../constants'; 

const EducationalContentSection: React.FC = () => {
  const tips: EducationalTip[] = [
    { 
      id: '1', 
      title: 'Smart Grocery Shopping in SA', 
      description: 'Learn to compare prices at Checkers, PnP, Woolies, and local markets. Maximize loyalty points!',
      icon: <MoneyBagIcon className="w-10 h-10 text-brand-deep-green mb-4" aria-hidden="true" />
    },
    { 
      id: '2', 
      title: 'Understanding Bank Fees', 
      description: 'Navigate Capitec, FNB, Standard Bank, etc. fees. Choose accounts that save you money.',
      icon: <BankIcon className="w-10 h-10 text-brand-deep-green mb-4" aria-hidden="true" />
    },
    { 
      id: '3', 
      title: 'Building Your Emergency Fund', 
      description: 'Practical steps to save for those unexpected moments, tailored for SA realities.',
      icon: <CheckCircleIcon className="w-10 h-10 text-brand-deep-green mb-4" aria-hidden="true" />
    },
    { 
      id: '4', 
      title: 'Subscription Audit Guide', 
      description: 'Find and cancel unused subscriptions (DStv, Showmax, etc.) and save hundreds monthly.',
      icon: <MagnifyingGlassIcon className="w-10 h-10 text-brand-deep-green mb-4" aria-hidden={true} />
    },
  ];

  return (
    <section id="educational-content" className="py-16 bg-brand-off-white">
      <div className="container mx-auto px-6">
        <SectionTitle 
          title="Royal Financial Education"
          subtitle="Learn from South Africa's most practical budgeting experts. Real strategies for real families."
          iconColor="text-brand-gold"
          titleClassName="text-brand-text-secondary"
          subtitleClassName="text-brand-text-primary opacity-90"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tips.map((tip) => (
            <Card key={tip.id} className="flex flex-col items-center text-center bg-white hover:shadow-xl">
              {tip.icon}
              <h3 className="text-xl font-serif font-semibold text-brand-text-secondary mb-2">{tip.title}</h3>
              <p className="text-brand-text-primary opacity-90 text-sm">{tip.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

// Minimal MagnifyingGlassIcon for this component
const MagnifyingGlassIcon: React.FC<{ className?: string; "aria-hidden"?: boolean }> = ({ className, "aria-hidden": ariaHidden = false }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden={ariaHidden}>
     <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
   </svg>
 );

export default EducationalContentSection;