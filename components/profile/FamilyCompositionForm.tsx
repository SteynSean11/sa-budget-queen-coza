
import React, { useState, useEffect } from 'react';
import { FamilyComposition } from '../../types';

interface FamilyCompositionFormProps {
  initialComposition: FamilyComposition;
  onChange: (composition: FamilyComposition) => void;
}

const FamilyCompositionForm: React.FC<FamilyCompositionFormProps> = ({ initialComposition, onChange }) => {
  const [composition, setComposition] = useState<FamilyComposition>(initialComposition);

  useEffect(() => {
    setComposition(initialComposition);
  }, [initialComposition]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const newComposition = {
      ...composition,
      [name]: Math.max(0, parseInt(value, 10)) || 0, // Ensure positive numbers, default to 0
    };
    setComposition(newComposition);
    onChange(newComposition);
  };

  const InputField: React.FC<{name: keyof FamilyComposition, label: string}> = ({ name, label }) => (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-brand-text-primary mb-1">{label}</label>
      <input
        type="number"
        id={name}
        name={name}
        value={composition[name] === 0 && name !== 'adults' ? '' : String(composition[name])} // Show empty for 0 unless it's adults
        onChange={handleChange}
        min="0"
        className="w-full px-3 py-2 rounded-lg text-brand-black bg-white border border-brand-light-grey focus:ring-2 focus:ring-brand-gold focus:outline-none"
        placeholder="0"
      />
    </div>
  );


  return (
    <div className="space-y-3 p-4 border border-brand-beige rounded-lg bg-emerald-50">
      <h3 className="text-md font-semibold text-brand-text-secondary mb-2">Family Composition (Optional)</h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <InputField name="adults" label="Adults (18+)" />
        <InputField name="children" label="Children (&lt;18)" />
        <InputField name="dependents" label="Other Dependents" />
      </div>
    </div>
  );
};

export default FamilyCompositionForm;
