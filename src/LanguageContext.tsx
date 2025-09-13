import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Language, getTranslations, Translations } from './translations';

interface LanguageContextType {
  currentLanguage: Language;
  setLanguage: (language: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
  initialLanguage?: Language;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ 
  children, 
  initialLanguage = 'en' 
}) => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(initialLanguage);

  const setLanguage = (language: Language) => {
    setCurrentLanguage(language);
    // Optional: Save to localStorage for persistence
    localStorage.setItem('dhartiRakshakLanguage', language);
  };

  const t = getTranslations(currentLanguage);

  const value: LanguageContextType = {
    currentLanguage,
    setLanguage,
    t,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

// Hook to get saved language from localStorage
export const getSavedLanguage = (): Language => {
  const saved = localStorage.getItem('dhartiRakshakLanguage');
  return (saved as Language) || 'en';
};