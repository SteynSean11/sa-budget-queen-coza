
import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import Logo from '../common/Logo';
import Button from '../common/Button';

const Navbar: React.FC = () => {
  const { isAuthenticated, currentUser, signOut, openModal } = useAuth();

  return (
    <nav className="bg-brand-deep-purple shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <Logo width={40} height={40} />
          <span className="ml-3 font-serif text-xl font-bold text-brand-highlight-gold">SA Budget Queen</span>
        </div>
        <div className="space-x-3">
          {isAuthenticated && currentUser ? (
            <>
              <span className="text-brand-off-white hidden md:inline">Welcome, {currentUser.name}!</span>
              <Button variant="outline-on-dark" size="sm" onClick={() => openModal('profile')}>
                My Profile
              </Button>
              <Button variant="primary" size="sm" onClick={signOut}>
                Sign Out
              </Button>
            </>
          ) : (
            <>
              <Button variant="primary" size="sm" onClick={() => openModal('signIn')}>
                Sign In
              </Button>
              <Button variant="outline-on-dark" size="sm" onClick={() => openModal('signUp')}>
                Sign Up
              </Button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
