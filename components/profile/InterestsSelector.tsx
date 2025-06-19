
import React, { useState, KeyboardEvent } from 'react';

interface InterestsSelectorProps {
  initialInterests: string[];
  onInterestsChange: (interests: string[]) => void;
  label?: string;
  placeholder?: string;
}

const InterestsSelector: React.FC<InterestsSelectorProps> = ({
  initialInterests,
  onInterestsChange,
  label = "Interests / Hobbies",
  placeholder = "Type an interest and press Enter"
}) => {
  const [interests, setInterests] = useState<string[]>(initialInterests);
  const [inputValue, setInputValue] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const addInterest = () => {
    const newInterest = inputValue.trim();
    if (newInterest && !interests.includes(newInterest)) {
      const updatedInterests = [...interests, newInterest];
      setInterests(updatedInterests);
      onInterestsChange(updatedInterests);
    }
    setInputValue('');
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault(); // Prevent form submission if inside a form
      addInterest();
    }
  };

  const removeInterest = (interestToRemove: string) => {
    const updatedInterests = interests.filter(interest => interest !== interestToRemove);
    setInterests(updatedInterests);
    onInterestsChange(updatedInterests);
  };

  return (
    <div>
      <label className="block text-sm font-medium text-brand-text-primary mb-1">{label}</label>
      <div className="flex items-center border border-brand-light-grey rounded-lg bg-white focus-within:ring-2 focus-within:ring-brand-gold">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          className="flex-grow px-3 py-2 text-brand-black bg-transparent focus:outline-none rounded-l-lg"
          placeholder={placeholder}
        />
        <button
          type="button"
          onClick={addInterest}
          className="px-4 py-2 bg-brand-gold text-white text-sm rounded-r-md hover:bg-brand-highlight-gold focus:outline-none"
        >
          Add
        </button>
      </div>
      <div className="mt-2 flex flex-wrap gap-2">
        {interests.map((interest, index) => (
          <span
            key={index}
            className="flex items-center bg-brand-beige text-brand-deep-green text-sm px-3 py-1 rounded-full"
          >
            {interest}
            <button
              type="button"
              onClick={() => removeInterest(interest)}
              className="ml-2 text-brand-pink hover:text-red-700 text-xs font-bold"
              aria-label={`Remove ${interest}`}
            >
              &times;
            </button>
          </span>
        ))}
      </div>
    </div>
  );
};

export default InterestsSelector;
