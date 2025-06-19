
import React from 'react';
import { AuthProvider } from './contexts/AuthContext';
import Navbar from './components/layout/Navbar';
import HeroSection from './components/HeroSection';
import StatsSection from './components/StatsSection';
import EducationalContentSection from './components/EducationalContentSection';
import FreeBudgetTemplatesSection from './components/FreeBudgetTemplatesSection';
import CommunityTestimonialsSection from './components/CommunityTestimonialsSection';
import PremiumAppFeaturesSection from './components/PremiumAppFeaturesSection';
import NewsletterSignupSection from './components/NewsletterSignupSection';
import Footer from './components/Footer';
import SignInModal from './components/auth/SignInModal';
import SignUpModal from './components/auth/SignUpModal';
import EditProfileModal from './components/profile/ProfileModal'; // Changed path to match filename
import { NavLink } from './types';

const AppContent: React.FC = () => {
  const footerNavLinks: NavLink[] = [
    { text: 'Budgeting Basics', href: '#educational-content' },
    { text: 'Smart Shopping', href: '#educational-content' },
    { text: 'Debt Freedom', href: '#educational-content' },
    { text: 'Emergency Funds', href: '#educational-content' },
    { text: 'Success Stories', href: '#testimonials' },
    { text: 'Support Forum (Coming Soon)', href: '#' },
    { text: 'Newsletter', href: '#newsletter' },
    { text: 'Contact Us (Coming Soon)', href: '#' },
  ];

  return (
    <div className="font-sans text-brand-text-primary flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <StatsSection />
        <EducationalContentSection />
        <FreeBudgetTemplatesSection />
        <CommunityTestimonialsSection />
        <PremiumAppFeaturesSection />
        <NewsletterSignupSection />
      </main>
      <Footer navLinks={footerNavLinks} />

      {/* Modals managed by AuthContext's activeModal state */}
      <SignInModal />
      <SignUpModal />
      <EditProfileModal />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
};

export default App;