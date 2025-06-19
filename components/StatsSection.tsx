
import React from 'react';
import { StatItem } from '../types';
import { CrownIcon, MoneyBagIcon } from '../constants'; 

const StatDisplay: React.FC<{ item: StatItem, icon: React.ReactNode }> = ({ item, icon }) => (
  <div className="text-center p-4">
    <div className="flex justify-center items-center text-brand-gold text-5xl mb-3">
      {icon}
    </div>
    <div className="text-4xl font-bold text-brand-deep-green mb-1">{item.value}</div>
    <div className="text-brand-text-primary opacity-90">{item.label}</div>
  </div>
);


const StatsSection: React.FC = () => {
  const stats: StatItem[] = [
    { value: '25,000+', label: 'Families Helped' },
    { value: 'R2.8M', label: 'Money Saved Collectively' },
    { value: '87%', label: 'Reduce Monthly Expenses' },
    { value: '4.9★', label: 'Community Rating' },
  ];

  const icons = [
    <CrownIcon key="families" className="w-12 h-12" aria-hidden="true" />,
    <MoneyBagIcon key="money" className="w-12 h-12" aria-hidden="true" />,
    <CrownIcon key="expenses" className="w-12 h-12 transform scale-x-[-1]" aria-hidden="true" />, 
    <StarIcon key="rating" className="w-12 h-12" aria-hidden={true} />
  ];


  return (
    <section className="py-16 bg-brand-beige">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatDisplay key={stat.label} item={stat} icon={icons[index % icons.length]} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Minimal StarIcon for StatsSection context
const StarIcon: React.FC<{className?: string; "aria-hidden"?: boolean}> = ({className, "aria-hidden": ariaHidden = false}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden={ariaHidden}>
    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.116 3.986 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354l-4.543 2.573c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.986c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
  </svg>
);


export default StatsSection;