
import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({ children, className, onClick }) => {
  return (
    <div
      className={`bg-white shadow-md hover:shadow-lg rounded-xl overflow-hidden p-6 transition-all duration-300 ease-in-out ${onClick ? 'cursor-pointer' : ''} ${className || ''}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Card;