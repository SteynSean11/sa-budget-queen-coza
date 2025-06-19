
import React from 'react';
import { Testimonial } from '../types';
import SectionTitle from './common/SectionTitle';
import Card from './common/Card';
import { StarIcon } from '../constants';

const CommunityTestimonialsSection: React.FC = () => {
  const testimonials: Testimonial[] = [
    { id: '1', quote: "SA Budget Queen changed my life! I finally feel in control of my money. Thank you!", author: 'Thandi M.', location: 'Cape Town', rating: 5 },
    { id: '2', quote: "The practical tips for SA stores are amazing. We're saving so much on groceries now.", author: 'Johan & Maria V.', location: 'Johannesburg', rating: 5 },
    { id: '3', quote: "I never thought budgeting could be this empowering. The community is so supportive!", author: 'Nomsa K.', location: 'Durban', rating: 4 }, // Example with 4 stars
  ];

  return (
    <section id="testimonials" className="py-16 bg-brand-off-white">
      <div className="container mx-auto px-6">
        <SectionTitle 
          title="Royal Success Stories"
          subtitle="Real families, real results. Join the Budget Queen community today."
          iconColor="text-brand-gold"
          titleClassName="text-brand-text-secondary"
          subtitleClassName="text-brand-text-primary opacity-90"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-brand-deep-purple text-brand-off-white shadow-xl border border-brand-gold">
              <div 
                className="flex mb-3" 
                role="img" 
                aria-label={`${testimonial.rating} out of 5 stars`}
              >
                {[...Array(5)].map((_, i) => (
                  <StarIcon 
                    key={i} 
                    className={`w-5 h-5 ${i < testimonial.rating ? 'text-brand-highlight-gold' : 'text-brand-light-grey opacity-50'}`}
                    aria-hidden="true" 
                  />
                ))}
              </div>
              <p className="text-lg italic mb-4 font-serif">"{testimonial.quote}"</p>
              <p className="font-semibold text-brand-highlight-gold">{testimonial.author}</p>
              <p className="text-sm text-brand-light-grey">{testimonial.location}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunityTestimonialsSection;