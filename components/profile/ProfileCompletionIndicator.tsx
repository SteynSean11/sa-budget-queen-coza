
import React from 'react';

interface ProfileCompletionIndicatorProps {
  percentage: number;
}

const ProfileCompletionIndicator: React.FC<ProfileCompletionIndicatorProps> = ({ percentage }) => {
  const safePercentage = Math.max(0, Math.min(100, percentage)); // Clamp between 0 and 100
  const completionTextId = 'profile-completion-text';

  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span id={completionTextId} className="text-sm font-medium text-brand-text-secondary">Profile Completion</span>
        <span className="text-sm font-medium text-brand-gold" aria-hidden="true">{safePercentage}%</span>
      </div>
      <div
        className="w-full bg-brand-beige rounded-full h-2.5"
        role="progressbar"
        aria-valuenow={safePercentage}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-labelledby={completionTextId}
        aria-label={`Profile completion: ${safePercentage}%`} // Provides a direct label as well
      >
        <div
          className="bg-brand-gold h-2.5 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${safePercentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProfileCompletionIndicator;