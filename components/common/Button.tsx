
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'pink' | 'outline-on-dark';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  className,
  ...props
}) => {
  const baseStyles = 'font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-opacity-75 transition-colors duration-150';

  let variantStyles = '';
  switch (variant) {
    case 'primary':
      // Bright gold background, black text for high contrast
      variantStyles = 'bg-brand-highlight-gold text-brand-black hover:bg-amber-400 focus:ring-brand-highlight-gold';
      break;
    case 'secondary':
      // Deep green background, light text
      variantStyles = 'bg-brand-deep-green text-brand-off-white hover:bg-emerald-800 focus:ring-brand-deep-green';
      break;
    case 'outline': // For use on light backgrounds
      // Gold border, dark purple text for contrast, transparent background
      // Hover: dark purple background, highlight gold text
      variantStyles = 'bg-transparent border-2 border-brand-gold text-brand-deep-purple hover:bg-brand-deep-purple hover:text-brand-highlight-gold focus:ring-brand-gold';
      break;
    case 'outline-on-dark': // For use on dark backgrounds
      // Gold border, highlight gold text for contrast, transparent background
      // Hover: highlight gold background, dark purple text
      variantStyles = 'bg-transparent border-2 border-brand-gold text-brand-highlight-gold hover:bg-brand-highlight-gold hover:text-brand-deep-purple focus:ring-brand-gold';
      break;
    case 'pink':
      // Pink background, white text for specific CTAs
      variantStyles = 'bg-brand-pink text-white hover:opacity-90 focus:ring-brand-pink';
      break;
  }

  let sizeStyles = '';
  switch (size) {
    case 'sm':
      sizeStyles = 'px-4 py-2 text-sm';
      break;
    case 'md':
      sizeStyles = 'px-6 py-3 text-base';
      break;
    case 'lg':
      sizeStyles = 'px-8 py-4 text-lg';
      break;
  }

  return (
    <button
      className={`${baseStyles} ${variantStyles} ${sizeStyles} ${className || ''}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
