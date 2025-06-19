
import React, { useState, KeyboardEvent, useEffect } from 'react';

interface FinancialGoalsSelectorProps {
  initialGoals: string[];
  onGoalsChange: (goals: string[]) => void;
  label?: string;
}

const PREDEFINED_GOALS = [
  "Save for a deposit (house/car)",
  "Build an emergency fund",
  "Pay off debt (credit card/loan)",
  "Invest for retirement",
  "Save for children's education",
  "Reduce monthly spending",
  "Start a side hustle/business",
];

const FinancialGoalsSelector: React.FC<FinancialGoalsSelectorProps> = ({
  initialGoals,
  onGoalsChange,
  label = "Financial Goals / Struggles"
}) => {
  const [selectedGoals, setSelectedGoals] = useState<string[]>(initialGoals);
  const [customGoalInput, setCustomGoalInput] = useState<string>('');

  useEffect(() => {
    setSelectedGoals(initialGoals);
  }, [initialGoals]);

  const handlePredefinedGoalToggle = (goal: string) => {
    const updatedGoals = selectedGoals.includes(goal)
      ? selectedGoals.filter(g => g !== goal)
      : [...selectedGoals, goal];
    setSelectedGoals(updatedGoals);
    onGoalsChange(updatedGoals);
  };

  const handleCustomGoalChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomGoalInput(e.target.value);
  };

  const addCustomGoal = () => {
    const newGoal = customGoalInput.trim();
    if (newGoal && !selectedGoals.includes(newGoal)) {
      const updatedGoals = [...selectedGoals, newGoal];
      setSelectedGoals(updatedGoals);
      onGoalsChange(updatedGoals);
    }
    setCustomGoalInput('');
  };

  const handleCustomGoalKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addCustomGoal();
    }
  };

  const removeGoal = (goalToRemove: string) => {
    const updatedGoals = selectedGoals.filter(goal => goal !== goalToRemove);
    setSelectedGoals(updatedGoals);
    onGoalsChange(updatedGoals);
  };

  return (
    <div>
      <label className="block text-sm font-medium text-brand-text-primary mb-2">{label}</label>
      
      <div className="space-y-2 mb-4">
        <p className="text-xs text-brand-text-primary opacity-80">Select common goals:</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {PREDEFINED_GOALS.map(goal => (
            <label key={goal} className="flex items-center space-x-2 p-2 bg-white border border-brand-light-grey rounded-md hover:bg-brand-beige cursor-pointer">
              <input
                type="checkbox"
                checked={selectedGoals.includes(goal)}
                onChange={() => handlePredefinedGoalToggle(goal)}
                className="rounded text-brand-gold focus:ring-brand-gold"
              />
              <span className="text-sm text-brand-text-primary">{goal}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label htmlFor="customGoal" className="block text-xs text-brand-text-primary opacity-90 mb-1">Add a custom goal/struggle:</label>
        <div className="flex items-center border border-brand-light-grey rounded-lg bg-white focus-within:ring-2 focus-within:ring-brand-gold">
          <input
            type="text"
            id="customGoal"
            value={customGoalInput}
            onChange={handleCustomGoalChange}
            onKeyDown={handleCustomGoalKeyDown}
            className="flex-grow px-3 py-2 text-brand-black bg-transparent focus:outline-none rounded-l-lg"
            placeholder="Type and press Enter or click Add"
          />
          <button
            type="button"
            onClick={addCustomGoal}
            className="px-4 py-2 bg-brand-gold text-white text-sm rounded-r-md hover:bg-brand-highlight-gold focus:outline-none"
          >
            Add
          </button>
        </div>
      </div>

      {selectedGoals.length > 0 && (
        <div className="mt-3 pt-3 border-t border-brand-beige">
          <h4 className="text-xs font-semibold text-brand-text-primary mb-1">Your selected goals:</h4>
          <div className="flex flex-wrap gap-2">
            {selectedGoals.map((goal, index) => (
              <span
                key={index}
                className="flex items-center bg-brand-deep-green text-brand-off-white text-sm px-3 py-1 rounded-full"
              >
                {goal}
                <button
                  type="button"
                  onClick={() => removeGoal(goal)}
                  className="ml-2 text-brand-pink hover:text-red-300 text-xs font-bold"
                  aria-label={`Remove ${goal}`}
                >
                  &times;
                </button>
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default FinancialGoalsSelector;