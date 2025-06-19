import React from 'react';

// --- IMPORTANT ---
// THE DATA URL BELOW IS A PLACEHOLDER (1x1 transparent PNG).
// IT WAS INSERTED BECAUSE THE PREVIOUS DATA URL WAS TRUNCATED AND WOULD NOT RENDER.
//
// YOU MUST REPLACE THIS ENTIRE STRING with the
// FULL and CORRECT Base64 encoded data URL for your desired logo image
// (e.g., SA_Budget_Queen_Logo_Green_Gold_Crown_Deep_Purple_Text.png).
//
// You can generate a Base64 data URL from your image file using online converters
// or local tools.
const logoImageDataUrl = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=";

interface LogoProps {
  className?: string;
  width?: string | number;
  height?: string | number;
}

const Logo: React.FC<LogoProps> = ({ className, width = 128, height = 128 }) => {
  return (
    <div className={`flex items-center space-x-2 ${className || ''}`}>
      <img 
        src={logoImageDataUrl} 
        alt="SA Budget Queen Logo" 
        style={{ width: width, height: height, objectFit: 'contain' }} 
      />
    </div>
  );
};

export default Logo;