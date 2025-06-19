
import React, { useState, useEffect, useMemo } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import Button from '../common/Button';
import ModalBase from '../auth/ModalBase';
import { UserProfileData, FamilyComposition } from '../../types';
import AvatarUpload from './AvatarUpload';
import InterestsSelector from './InterestsSelector';
import FamilyCompositionForm from './FamilyCompositionForm';
import FinancialGoalsSelector from './FinancialGoalsSelector';
import ProfileCompletionIndicator from './ProfileCompletionIndicator';

type ProfileTab = 'personal' | 'family' | 'financial';

const EditProfileModal: React.FC = () => {
  const { currentUser, closeModal, activeModal, updateUserProfile } = useAuth();
  
  const [activeTab, setActiveTab] = useState<ProfileTab>('personal');
  const [formData, setFormData] = useState<UserProfileData>({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const BIO_MAX_LENGTH = 250;

  useEffect(() => {
    if (currentUser && activeModal === 'profile') {
      setFormData({
        avatarUrl: currentUser.avatarUrl || '',
        bio: currentUser.bio || '',
        interestsHobbies: Array.isArray(currentUser.interestsHobbies) ? [...currentUser.interestsHobbies] : [],
        familyComposition: { ...(currentUser.familyComposition || { adults: 0, children: 0, dependents: 0 }) },
        financialGoals: Array.isArray(currentUser.financialGoals) ? [...currentUser.financialGoals] : [],
        monthlyGroceryBudget: currentUser.monthlyGroceryBudget || '',
        monthlyHouseholdIncome: currentUser.monthlyHouseholdIncome || '',
      });
      setActiveTab('personal'); // Reset to first tab when modal opens/user changes
    }
  }, [currentUser, activeModal]);

  const profileCompletion = useMemo(() => {
    if (!currentUser) return 0;
    const fields = [
      currentUser.avatarUrl,
      currentUser.bio,
      currentUser.interestsHobbies && currentUser.interestsHobbies.length > 0,
      currentUser.familyComposition && (currentUser.familyComposition.adults > 0 || currentUser.familyComposition.children > 0),
      currentUser.financialGoals && currentUser.financialGoals.length > 0,
      currentUser.monthlyGroceryBudget,
      currentUser.monthlyHouseholdIncome
    ];
    const filledFields = fields.filter(Boolean).length;
    return Math.round((filledFields / fields.length) * 100);
  }, [currentUser]);


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFamilyCompositionChange = (composition: FamilyComposition) => {
    setFormData(prev => ({ ...prev, familyComposition: composition }));
  };

  const handleInterestsChange = (interests: string[]) => {
    setFormData(prev => ({ ...prev, interestsHobbies: interests }));
  };
  
  const handleFinancialGoalsChange = (goals: string[]) => {
    setFormData(prev => ({ ...prev, financialGoals: goals }));
  };

  const handleAvatarChange = (url: string) => {
    setFormData(prev => ({ ...prev, avatarUrl: url }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
        const profileToUpdate: UserProfileData = {
        ...formData,
        monthlyGroceryBudget: formData.monthlyGroceryBudget ? parseFloat(String(formData.monthlyGroceryBudget)) : 0,
        monthlyHouseholdIncome: formData.monthlyHouseholdIncome ? parseFloat(String(formData.monthlyHouseholdIncome)) : 0,
      };
      await updateUserProfile(profileToUpdate);
      closeModal();
    } catch (err: any) {
      setError(err.message || 'Failed to update profile.');
    } finally {
      setLoading(false);
    }
  };
  
  if (!currentUser) return null;

  const renderTabContent = () => {
    switch (activeTab) {
      case 'personal':
        return (
          <div className="space-y-4">
            <AvatarUpload 
              currentAvatarUrl={formData.avatarUrl || ''} 
              onAvatarChange={handleAvatarChange} 
            />
            <div>
              <label htmlFor="bio" className="block text-sm font-medium text-brand-text-primary mb-1">Bio (Optional)</label>
              <textarea
                id="bio"
                name="bio"
                rows={4}
                value={formData.bio || ''}
                onChange={handleChange}
                maxLength={BIO_MAX_LENGTH}
                className="w-full px-3 py-2 rounded-lg text-brand-black bg-white border border-brand-light-grey focus:ring-2 focus:ring-brand-gold focus:outline-none"
                placeholder={`Tell us a bit about yourself (max ${BIO_MAX_LENGTH} characters)`}
              />
              <p className="text-xs text-right text-gray-500 mt-1">
                {formData.bio?.length || 0}/{BIO_MAX_LENGTH}
              </p>
            </div>
          </div>
        );
      case 'family':
        return (
          <div className="space-y-6">
            <FamilyCompositionForm
              initialComposition={formData.familyComposition || { adults: 0, children: 0, dependents: 0 }}
              onChange={handleFamilyCompositionChange}
            />
            <InterestsSelector
              initialInterests={formData.interestsHobbies || []}
              onInterestsChange={handleInterestsChange}
              label="Interests & Hobbies (Optional)"
            />
          </div>
        );
      case 'financial':
        return (
          <div className="space-y-6">
            <div>
              <label htmlFor="monthlyHouseholdIncome" className="block text-sm font-medium text-brand-text-primary mb-1">Monthly Household Income (ZAR, Optional)</label>
              <input
                id="monthlyHouseholdIncome"
                name="monthlyHouseholdIncome"
                type="number"
                value={formData.monthlyHouseholdIncome || ''}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded-lg text-brand-black bg-white border border-brand-light-grey focus:ring-2 focus:ring-brand-gold focus:outline-none"
                placeholder="e.g., 35000"
              />
            </div>
            <div>
              <label htmlFor="monthlyGroceryBudget" className="block text-sm font-medium text-brand-text-primary mb-1">Monthly Grocery Budget (ZAR, Optional)</label>
              <input
                id="monthlyGroceryBudget"
                name="monthlyGroceryBudget"
                type="number"
                value={formData.monthlyGroceryBudget || ''}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded-lg text-brand-black bg-white border border-brand-light-grey focus:ring-2 focus:ring-brand-gold focus:outline-none"
                placeholder="e.g., 6000"
              />
              { Number(formData.monthlyGroceryBudget) > Number(formData.monthlyHouseholdIncome) && Number(formData.monthlyHouseholdIncome) > 0 && (
                <p className="text-xs text-red-500 mt-1">Grocery budget seems high compared to household income.</p>
              )}
            </div>
            <FinancialGoalsSelector
              initialGoals={formData.financialGoals || []}
              onGoalsChange={handleFinancialGoalsChange}
              label="Financial Goals / Struggles (Optional)"
            />
          </div>
        );
      default:
        return null;
    }
  };

  const TabButton: React.FC<{tabName: ProfileTab; label: string;}> = ({ tabName, label }) => (
    <button
      type="button"
      id={`profile-tab-${tabName}`}
      role="tab"
      aria-selected={activeTab === tabName}
      aria-controls={`profile-tabpanel-${tabName}`}
      onClick={() => setActiveTab(tabName)}
      className={`px-4 py-2 font-medium text-sm rounded-md transition-colors
        ${activeTab === tabName 
          ? 'bg-brand-gold text-white' 
          : 'text-brand-text-secondary hover:bg-brand-beige'}`}
      tabIndex={activeTab === tabName ? 0 : -1}
    >
      {label}
    </button>
  );

  return (
    <ModalBase isOpen={activeModal === 'profile'} onClose={closeModal} title={`${currentUser.name}'s Profile`}>
      <form onSubmit={handleSubmit} className="space-y-6">
        <ProfileCompletionIndicator percentage={profileCompletion} />
        <div className="mb-4 border-b border-brand-light-grey">
            <div 
              className="flex space-x-1"
              role="tablist"
              aria-label="User profile sections"
            >
                <TabButton tabName="personal" label="Personal Details" />
                <TabButton tabName="family" label="Family & Community" />
                <TabButton tabName="financial" label="Financial Profile" />
            </div>
        </div>

        {error && <p className="text-red-500 text-sm bg-red-100 p-2 rounded-md">{error}</p>}
        
        <div 
          id={`profile-tabpanel-${activeTab}`}
          role="tabpanel"
          aria-labelledby={`profile-tab-${activeTab}`}
          tabIndex={0}
          className="min-h-[250px] overflow-y-auto pr-2 focus:outline-none" // Added focus outline none for aesthetic
        >
          {renderTabContent()}
        </div>

        <div className="flex flex-col sm:flex-row justify-end items-center gap-3 pt-4 border-t border-brand-light-grey">
           <Button type="button" variant="outline" size="md" onClick={closeModal} disabled={loading}>
            Cancel
          </Button>
          <Button type="submit" variant="primary" size="md" disabled={loading}>
            {loading ? 'Saving...' : 'Save Changes'}
          </Button>
        </div>
      </form>
    </ModalBase>
  );
};

export default EditProfileModal;