
import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import Button from '../common/Button';
import ModalBase from './ModalBase';
import { GoogleIcon } from '../../constants'; // Import GoogleIcon

const SignUpModal: React.FC = () => {
  const { signUp, signInWithGoogleMock, closeModal, activeModal, openModal } = useAuth();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (password !== confirmPassword) {
      setError("Passwords don't match.");
      return;
    }
    setLoading(true);
    try {
      await signUp(name, email, password);
    } catch (err: any) {
      setError(err.message || 'Failed to sign up. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignUp = async () => {
    setError('');
    setGoogleLoading(true);
    try {
      await signInWithGoogleMock(); // For mock, this is the same as sign-in
    } catch (err: any) {
      setError(err.message || 'Failed to sign up with Google. Please try again.');
    } finally {
      setGoogleLoading(false);
    }
  };

  return (
    <ModalBase isOpen={activeModal === 'signUp'} onClose={closeModal} title="Create Account">
      <form onSubmit={handleSubmit} className="space-y-5">
        {error && <p className="text-red-500 text-sm text-center bg-red-100 p-2 rounded-md">{error}</p>}

        <Button 
            type="button" 
            variant="outline" 
            className="w-full border-brand-light-grey text-brand-text-primary hover:bg-brand-beige"
            onClick={handleGoogleSignUp}
            disabled={googleLoading}
        >
          <GoogleIcon className="w-5 h-5 mr-2 inline-block" aria-hidden="true" />
          {googleLoading ? 'Signing Up with Google...' : 'Sign Up with Google'}
        </Button>

        <div className="flex items-center my-3">
          <div className="flex-grow border-t border-brand-light-grey"></div>
          <span className="flex-shrink mx-4 text-gray-500 text-xs">OR</span>
          <div className="flex-grow border-t border-brand-light-grey"></div>
        </div>

        <div>
          <label htmlFor="signUpName" className="block text-sm font-medium text-brand-text-primary mb-1">
            Full Name
          </label>
          <input
            id="signUpName"
            name="name"
            type="text"
            autoComplete="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2.5 rounded-lg text-brand-black bg-white border border-brand-light-grey focus:ring-2 focus:ring-brand-gold focus:outline-none placeholder-gray-500"
            placeholder="Your Name"
          />
        </div>

        <div>
          <label htmlFor="signUpEmail" className="block text-sm font-medium text-brand-text-primary mb-1">
            Email address
          </label>
          <input
            id="signUpEmail"
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
          <label htmlFor="signUpPassword" className="block text-sm font-medium text-brand-text-primary mb-1">
            Password
          </label>
          <input
            id="signUpPassword"
            name="password"
            type="password"
            autoComplete="new-password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2.5 rounded-lg text-brand-black bg-white border border-brand-light-grey focus:ring-2 focus:ring-brand-gold focus:outline-none placeholder-gray-500"
            placeholder="••••••••"
          />
        </div>

        <div>
          <label htmlFor="confirmPassword" className="block text-sm font-medium text-brand-text-primary mb-1">
            Confirm Password
          </label>
          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            autoComplete="new-password"
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full px-4 py-2.5 rounded-lg text-brand-black bg-white border border-brand-light-grey focus:ring-2 focus:ring-brand-gold focus:outline-none placeholder-gray-500"
            placeholder="••••••••"
          />
        </div>

        <Button type="submit" variant="primary" size="md" className="w-full" disabled={loading}>
          {loading ? 'Creating Account...' : 'Sign Up with Email'}
        </Button>

        <p className="text-sm text-center text-brand-text-primary">
          Already have an account?{' '}
          <button 
            type="button" 
            onClick={() => openModal('signIn')}
            className="font-medium text-brand-deep-purple hover:text-brand-pink underline"
          >
            Sign In
          </button>
        </p>
      </form>
    </ModalBase>
  );
};

export default SignUpModal;