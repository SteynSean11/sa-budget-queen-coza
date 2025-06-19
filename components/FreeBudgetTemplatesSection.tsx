
import React from 'react';
import { BudgetTemplate } from '../types';
import SectionTitle from './common/SectionTitle';
import Card from './common/Card';
import Button from './common/Button';
import { DownloadIcon } from '../constants';

const FreeBudgetTemplatesSection: React.FC = () => {
  const templates: BudgetTemplate[] = [
    { id: '1', name: 'Monthly Household Budget', description: 'Track income, expenses, and savings goals.', downloads: '12,500+', imageUrl: 'https://images.unsplash.com/photo-1554224155-6EC801836c92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YnVkZ2V0JTIwc3ByZWFkc2hlZXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60' },
    { id: '2', name: 'Grocery Shopping Tracker', description: 'Plan meals and reduce food waste.', downloads: '8,200+', imageUrl: 'https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JvY2VyeSUyMGxpc3R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60' },
    { id: '3', name: 'Debt Elimination Plan', description: 'Strategize to pay off debt faster.', downloads: '6,750+', imageUrl: 'https://images.unsplash.com/photo-1616401784845-180882ba9ba8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZGVidCUyMHBsYW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60' },
    { id: '4', name: 'Emergency Fund Builder', description: 'Step-by-step guide to financial safety.', downloads: '9,100+', imageUrl: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZW1lcmdlbmN5JTIwZnVuZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60' },
  ];

  return (
    <section className="py-16 bg-emerald-50"> {/* Light green background */}
      <div className="container mx-auto px-6">
        <SectionTitle 
          title="Free Budget Templates"
          subtitle="Professional spreadsheet templates used by thousands of SA families to take control of their finances."
          iconColor="text-brand-gold"
          titleClassName="text-brand-text-secondary"
          subtitleClassName="text-brand-text-primary opacity-90"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {templates.map((template) => (
            <Card key={template.id} className="flex flex-col bg-white hover:shadow-xl">
              <img src={template.imageUrl} alt={template.name} className="w-full h-48 object-cover mb-4 rounded-t-lg"/>
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-xl font-serif font-semibold text-brand-text-secondary mb-2">{template.name}</h3>
                <p className="text-brand-text-primary opacity-90 text-sm mb-3 flex-grow">{template.description}</p>
                <p className="text-sm text-brand-deep-green font-medium mb-4">Downloads: {template.downloads}</p>
                <Button variant="secondary" size="md" onClick={() => alert(`Downloading ${template.name} - Feature Coming Soon!`)}>
                  <DownloadIcon className="w-5 h-5 mr-2 inline-block" aria-hidden="true" />
                  Download Free
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FreeBudgetTemplatesSection;