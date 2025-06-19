import React, { createContext, useState, useContext, ReactNode } from 'react';
import { User, AuthContextType, ModalType, UserProfileData, FamilyComposition } from '../types';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const initialProfileData: UserProfileData = {
  avatarUrl: '',
  bio: '',
  interestsHobbies: [],
  familyComposition: { adults: 0, children: 0, dependents: 0 },
  financialGoals: [],
  monthlyGroceryBudget: '',
  monthlyHouseholdIncome: '',
};

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [activeModal, setActiveModal] = useState<ModalType>(null);

  const signIn = async (email: string, password_HACK: string): Promise<void> => {
    await new Promise(resolve => setTimeout(resolve, 500));
    let userData: User;
    if (email === "user@example.com" && password_HACK === "password123") {
      userData = { 
        id: '1', name: 'Demo User', email: email, 
        ...initialProfileData, 
        bio: 'Just a demo user exploring SA Budget Queen!',
        financialGoals: ['Save for a holiday', 'Reduce debt'],
        monthlyHouseholdIncome: 50000,
        monthlyGroceryBudget: 8000,
        familyComposition: { adults: 2, children: 1, dependents: 0 },
        interestsHobbies: ['Reading', 'Hiking']
      };
    } else if (email === "queen@example.com" && password_HACK === "budget") {
      userData = { 
        id: '2', name: 'Budget Queen👑', email: email, 
        ...initialProfileData, 
        bio: 'Helping South Africans rule their Rands!',
        avatarUrl: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZSUyMGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' // Placeholder avatar
      };
    } else {
      userData = { 
        id: `${Date.now()}`, name: 'Test User', email: email, 
        ...initialProfileData 
      };
    }
    setCurrentUser(userData);
    closeModal();
  };

  const signUp = async (name: string, email: string, password_HACK: string): Promise<void> => {
    await new Promise(resolve => setTimeout(resolve, 500));
    const newUser: User = { 
      id: `${Date.now()}`, 
      name, 
      email, 
      ...initialProfileData 
    };
    setCurrentUser(newUser);
    closeModal();
  };

  const signInWithGoogleMock = async (): Promise<void> => {
    // Simulate API call and Google's response
    await new Promise(resolve => setTimeout(resolve, 700)); 
    const mockGoogleUser: User = {
      id: `google-${Date.now()}`,
      name: 'Google User',
      email: 'google.user@example.com',
      avatarUrl: 'https://lh3.googleusercontent.com/a/default-user=s128-c', // Generic Google placeholder avatar
      ...initialProfileData, // Initialize other profile fields to default
      bio: 'Signed in with Google! Ready to budget.',
      // You could potentially pre-fill some other fields if Google API provided them
      // For now, they remain as per initialProfileData
    };
    setCurrentUser(mockGoogleUser);
    closeModal();
  };

  const signOut = () => {
    setCurrentUser(null);
    closeModal();
  };

  const updateUserProfile = async (updatedProfileData: Partial<UserProfileData>): Promise<void> => {
    await new Promise(resolve => setTimeout(resolve, 300));
    if (currentUser) {
      setCurrentUser(prevUser => ({
        ...prevUser!,
        ...updatedProfileData,
        familyComposition: {
          ...prevUser!.familyComposition,
          ...updatedProfileData.familyComposition,
        } as FamilyComposition,
        interestsHobbies: updatedProfileData.interestsHobbies !== undefined ? updatedProfileData.interestsHobbies : prevUser!.interestsHobbies,
        financialGoals: updatedProfileData.financialGoals !== undefined ? updatedProfileData.financialGoals : prevUser!.financialGoals,
      }));
      console.log("Profile updated (mock):", currentUser);
    } else {
      console.error("No current user to update.");
    }
  };


  const openModal = (type: ModalType) => {
    setActiveModal(type);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  return (
    <AuthContext.Provider value={{ 
      currentUser, 
      isAuthenticated: !!currentUser, 
      signIn, 
      signUp, 
      signInWithGoogleMock, // Added
      signOut,
      updateUserProfile,
      openModal,
      closeModal,
      activeModal
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
