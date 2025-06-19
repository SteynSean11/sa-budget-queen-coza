
import React, { useState, useEffect } from 'react';

interface AvatarUploadProps {
  currentAvatarUrl: string;
  onAvatarChange: (url: string) => void;
}

const AvatarUpload: React.FC<AvatarUploadProps> = ({ currentAvatarUrl, onAvatarChange }) => {
  const [inputUrl, setInputUrl] = useState('');
  const [previewUrl, setPreviewUrl] = useState(currentAvatarUrl);

  useEffect(() => {
    setPreviewUrl(currentAvatarUrl);
    setInputUrl(''); // Clear input when currentAvatarUrl changes from parent
  }, [currentAvatarUrl]);

  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputUrl(e.target.value);
  };

  const handleSetAvatar = () => {
    // Basic URL validation (very simple)
    if (inputUrl && (inputUrl.startsWith('http://') || inputUrl.startsWith('https://'))) {
      onAvatarChange(inputUrl);
      setPreviewUrl(inputUrl);
    } else if (!inputUrl) { // Allow clearing avatar
      onAvatarChange('');
      setPreviewUrl('');
    } else {
      alert('Please enter a valid image URL (starting with http:// or https://)');
    }
  };
  
  const handleClearAvatar = () => {
    setInputUrl('');
    onAvatarChange('');
    setPreviewUrl('');
  };

  // Placeholder image if no avatar
  const placeholderImage = "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D'128'%20height%3D'128'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%20128%20128'%3E%3Crect%20width%3D'128'%20height%3D'128'%20fill%3D'%23E1DCD0'%2F%3E%3Ctext%20x%3D'50%25'%20y%3D'50%25'%20font-family%3D'Arial%2Csans-serif'%20font-size%3D'48'%20fill%3D'%23B58E2C'%20dominant-baseline%3D'central'%20text-anchor%3D'middle'%3E%3Ftspan%20dy%3D'-0.1em'%3E%3C%2Ftspan%3E%3Ftspan%20x%3D'50%25'%20dy%3D'0.8em'%3E%26%23128100%3B%3C%2Ftspan%3E%3C%2Ftext%3E%3C%2Fsvg%3E";


  return (
    <div className="flex flex-col items-center space-y-3">
      <img
        src={previewUrl || placeholderImage}
        alt="User Avatar"
        className="w-32 h-32 rounded-full object-cover border-2 border-brand-gold bg-brand-beige"
        onError={(e) => { 
          // If URL errors, show placeholder. This helps if user pastes a bad URL.
          (e.target as HTMLImageElement).src = placeholderImage;
        }}
      />
      <div className="w-full max-w-sm">
        <label htmlFor="avatarUrl" className="block text-sm font-medium text-brand-text-primary mb-1">
          Avatar Image URL (Optional)
        </label>
        <div className="flex items-center space-x-2">
          <input
            type="url"
            id="avatarUrl"
            value={inputUrl}
            onChange={handleUrlChange}
            className="w-full px-3 py-2 rounded-lg text-brand-black bg-white border border-brand-light-grey focus:ring-2 focus:ring-brand-gold focus:outline-none"
            placeholder="Paste image URL here"
          />
          <button 
            type="button" 
            onClick={handleSetAvatar}
            className="px-3 py-2 bg-brand-gold text-white rounded-md text-sm hover:bg-brand-highlight-gold"
          >
            Set
          </button>
        </div>
         {previewUrl && (
          <button 
            type="button" 
            onClick={handleClearAvatar}
            className="mt-2 text-xs text-brand-pink hover:underline"
          >
            Clear Avatar
          </button>
        )}
        <p className="text-xs text-gray-500 mt-1">
          (Tip: Use services like Imgur for image URLs)
        </p>
      </div>
    </div>
  );
};

export default AvatarUpload;