export interface StatItem {
  value: string;
  label: string;
}

export interface EducationalTip {
  id: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export interface BudgetTemplate {
  id: string;
  name: string;
  description: string;
  downloads: string;
  imageUrl: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  location: string;
  rating: number; // 1-5
}

export interface PremiumFeature {
  id: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export interface NavLink {
  text: string;
  href: string;
}

// --- Enhanced User Profile Types ---
export interface FamilyComposition {
  adults: number;
  children: number;
  dependents: number;
}

export interface UserProfileData {
  avatarUrl?: string;
  bio?: string;
  interestsHobbies?: string[];
  familyComposition?: FamilyComposition;
  financialGoals?: string[];
  monthlyGroceryBudget?: number | string; // Use string for input, convert to number on save
  monthlyHouseholdIncome?: number | string; // Use string for input, convert to number on save
}

export interface User extends UserProfileData {
  id: string;
  name: string;
  email: string;
}
// --- End Enhanced User Profile Types ---


export type ModalType = 'signIn' | 'signUp' | 'profile' | null;

export interface AuthContextType {
  currentUser: User | null;
  isAuthenticated: boolean;
  signIn: (email: string, password_HACK: string) => Promise<void>;
  signUp: (name: string, email: string, password_HACK: string) => Promise<void>;
  signInWithGoogleMock: () => Promise<void>; // Added for Google Sign-In
  signOut: () => void;
  updateUserProfile: (updatedProfileData: Partial<UserProfileData>) => Promise<void>;
  openModal: (type: ModalType) => void;
  closeModal: () => void;
  activeModal: ModalType;
}
