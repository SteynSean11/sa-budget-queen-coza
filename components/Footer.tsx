
import React from 'react';
import { NavLink } from '../types';
import { HeartIcon } from '../constants';
import Logo from './common/Logo'; // Import the new Logo component

interface FooterProps {
  navLinks: NavLink[];
}

const Footer: React.FC<FooterProps> = ({ navLinks }) => {
  const learnLinks = navLinks.filter(link => ['Budgeting Basics', 'Smart Shopping', 'Debt Freedom', 'Emergency Funds'].includes(link.text));
  const communityLinks = navLinks.filter(link => ['Success Stories', 'Support Forum (Coming Soon)', 'Newsletter', 'Contact Us (Coming Soon)'].includes(link.text));


  return (
    <footer className="bg-brand-black text-brand-light-grey py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div>
            <Logo className="mb-4" width={100} height={100} />
            <p className="text-sm leading-relaxed">
              Empowering South African families to achieve financial freedom through smart budgeting, practical education, and community support.
            </p>
          </div>
          <div>
            <h6 className="text-lg font-semibold text-brand-gold mb-4 font-serif">Learn</h6>
            <ul className="space-y-2">
              {learnLinks.map(link => (
                <li key={link.text}><a href={link.href} className="hover:text-brand-highlight-gold transition-colors text-sm">{link.text}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h6 className="text-lg font-semibold text-brand-gold mb-4 font-serif">Community</h6>
            <ul className="space-y-2">
              {communityLinks.map(link => (
                <li key={link.text}><a href={link.href} className="hover:text-brand-highlight-gold transition-colors text-sm">{link.text}</a></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-brand-deep-purple pt-8 text-center text-sm">
          <p className="mb-2">
            © {new Date().getFullYear()} SA Budget Queen. All rights reserved. Made with 
            <HeartIcon className="w-4 h-4 inline-block mx-1 text-brand-pink" aria-hidden="true" /> 
            for South African families.
          </p>
          <p>
            <a href="#" className="hover:text-brand-highlight-gold transition-colors">Privacy Policy</a> | <a href="#" className="hover:text-brand-highlight-gold transition-colors">Terms of Service</a>
          </p>
          <p className="mt-3 text-xs text-gray-500">
            Disclaimer: SA Budget Queen provides educational content and is not a certified financial advisor. Consult with a professional for personalized financial advice.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;