
import React from 'react';
import { CrownIcon } from '../../constants';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  iconColor?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ 
  title, 
  subtitle, 
  className, 
  titleClassName, 
  subtitleClassName,
  iconColor = 'text-brand-gold' 
}) => {
  return (
    <div className={`text-center mb-12 md:mb-16 ${className || ''}`}>
      <div className="flex justify-center items-center mb-3">
        <CrownIcon className={`w-8 h-8 md:w-10 md:h-10 ${iconColor} mr-3`} aria-hidden="true" />
        <h2 className={`font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-brand-text-secondary ${titleClassName || ''}`}>
          {title}
        </h2>
        <CrownIcon className={`w-8 h-8 md:w-10 md:h-10 ${iconColor} ml-3`} aria-hidden="true" />
      </div>
      {subtitle && (
        <p className={`text-lg text-brand-text-primary opacity-80 max-w-3xl mx-auto ${subtitleClassName || ''}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;