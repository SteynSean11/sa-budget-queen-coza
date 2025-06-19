
import React, { useState } from 'react';
import SectionTitle from './common/SectionTitle';
import Button from './common/Button';

const NewsletterSignupSection: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      alert(`Thank you for subscribing, ${email}! (Demo)`);
      setEmail('');
    } else {
      alert('Please enter a valid email address.');
    }
  };

  return (
    <section id="newsletter" className="py-16 bg-brand-deep-green text-brand-off-white">
      <div className="container mx-auto px-6">
        <SectionTitle 
          title="Join the Royal Family"
          subtitle="Get exclusive budgeting tips, early access to new templates, and join a community of South Africans committed to financial freedom."
          iconColor="text-brand-highlight-gold"
          titleClassName="text-brand-highlight-gold"
          subtitleClassName="text-brand-off-white opacity-90"
        />
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto text-center">
          <div className="flex flex-col sm:flex-row gap-4 mb-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="flex-grow px-4 py-3 rounded-lg text-brand-black bg-brand-off-white focus:ring-2 focus:ring-brand-highlight-gold focus:outline-none placeholder-gray-500"
              aria-label="Email address for newsletter"
              required
            />
            <Button type="submit" variant="primary" size="md" className="sm:w-auto w-full">
              Subscribe Now
            </Button>
          </div>
          <p className="text-sm text-brand-light-grey">
            25,000+ members | 100% free | No spam, ever.
          </p>
        </form>
      </div>
    </section>
  );
};

export default NewsletterSignupSection;