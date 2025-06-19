
import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import Button from '../common/Button';
import ModalBase from './ModalBase';
import { GoogleIcon } from '../../constants'; // Import GoogleIcon

const SignInModal: React.FC = () => {
  const { signIn, signInWithGoogleMock, closeModal, activeModal, openModal } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      await signIn(email, password);
    } catch (err: any) {
      setError(err.message || 'Failed to sign in. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setError('');
    setGoogleLoading(true);
    try {
      await signInWithGoogleMock();
    } catch (err: any) {
      setError(err.message || 'Failed to sign in with Google. Please try again.');
    } finally {
      setGoogleLoading(false);
    }
  };

  return (
    <ModalBase isOpen={activeModal === 'signIn'} onClose={closeModal} title="Sign In">
      <form onSubmit={handleSubmit} className="space-y-5">
        {error && <p className="text-red-500 text-sm text-center bg-red-100 p-2 rounded-md">{error}</p>}
        
        <Button 
            type="button" 
            variant="outline" 
            className="w-full border-brand-light-grey text-brand-text-primary hover:bg-brand-beige"
            onClick={handleGoogleSignIn}
            disabled={googleLoading}
        >
          <GoogleIcon className="w-5 h-5 mr-2 inline-block" aria-hidden="true" />
          {googleLoading ? 'Signing In with Google...' : 'Sign In with Google'}
        </Button>

        <div className="flex items-center my-3">
          <div className="flex-grow border-t border-brand-light-grey"></div>
          <span className="flex-shrink mx-4 text-gray-500 text-xs">OR</span>
          <div className="flex-grow border-t border-brand-light-grey"></div>
        </div>

        <div>
          <label htmlFor="signInEmail" className="block text-sm font-medium text-brand-text-primary mb-1">
            Email address
          </label>
          <input
            id="signInEmail"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2.5 rounded-lg text-brand-black bg-white border border-brand-light-grey focus:ring-2 focus:ring-brand-gold focus:outline-none placeholder-gray-500"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label htmlFor="signInPassword" className="block text-sm font-medium text-brand-text-primary mb-1">
            Password
          </label>
          <input
            id="signInPassword"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2.5 rounded-lg text-brand-black bg-white border border-brand-light-grey focus:ring-2 focus:ring-brand-gold focus:outline-none placeholder-gray-500"
            placeholder="••••••••"
          />
        </div>
        
        <Button type="submit" variant="primary" size="md" className="w-full" disabled={loading}>
          {loading ? 'Signing In...' : 'Sign In with Email'}
        </Button>

        <p className="text-sm text-center text-brand-text-primary">
          Don't have an account?{' '}
          <button 
            type="button" 
            onClick={() => openModal('signUp')} 
            className="font-medium text-brand-deep-purple hover:text-brand-pink underline"
          >
            Sign Up
          </button>
        </p>
      </form>
    </ModalBase>
  );
};

export default SignInModal;