import React from 'react';
import Button from '../ui/Button';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-brand-dark">
          SA Budget Queen
        </h1>
        <nav>
          <ul className="flex items-center space-x-4">
            <li><a href="#" className="text-gray-600 hover:text-brand-primary">Home</a></li>
            <li><a href="#" className="text-gray-600 hover:text-brand-primary">Dashboard</a></li>
            <li><Button>Login</Button></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;