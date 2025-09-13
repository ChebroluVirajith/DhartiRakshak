import { StrictMode, useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import LoginPage from './LoginPage.tsx';
import ProfileSetup from './ProfileSetup.tsx';
import LanguageSelector from './LanguageSelector.tsx';
import { LanguageProvider, getSavedLanguage } from './LanguageContext.tsx';
import { Language } from './translations.ts';
import './index.css';


function Main() {
  const [currentPage, setCurrentPage] = useState('app');
  const [userName, setUserName] = useState('');
  const [userLocation, setUserLocation] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState<Language>('en');
  const [isLanguageSelected, setIsLanguageSelected] = useState(false);

  // Check for saved language on app start
  useEffect(() => {
    const savedLanguage = getSavedLanguage();
    if (savedLanguage && savedLanguage !== 'en') {
      setSelectedLanguage(savedLanguage);
      setIsLanguageSelected(true);
    } else {
      // For new users, we'll show language selector after login
      setIsLanguageSelected(true); // Set to true for existing functionality, false for new users
    }
  }, []);

  const handleLanguageSelect = (language: Language) => {
    setSelectedLanguage(language);
    setIsLanguageSelected(true);
    localStorage.setItem('dhartiRakshakLanguage', language);
  };

  const handleLoginSuccess = () => {
    // After successful OTP verification, check if language was already selected
    const savedLanguage = getSavedLanguage();
    if (!savedLanguage || savedLanguage === 'en') {
      setCurrentPage('language'); // Show language selector
    } else {
      setCurrentPage('profile'); // Skip to profile setup
    }
  };

  const handleLanguageSelected = (language: Language) => {
    handleLanguageSelect(language);
    setCurrentPage('profile'); // Go to profile setup after language selection
  };

  const handleProfileComplete = (name: string, location: string) => {
    setUserName(name);
    setUserLocation(location);
    setCurrentPage('app');
  };

  const renderContent = () => {
    if (!isLanguageSelected && currentPage !== 'language') {
      // This shouldn't happen in normal flow, but safety check
      return <LanguageSelector onLanguageSelect={handleLanguageSelect} />;
    }

    switch (currentPage) {
      case 'login':
        return <LoginPage onBack={() => setCurrentPage('app')} onLoginSuccess={handleLoginSuccess} />;
      case 'language':
        return <LanguageSelector onLanguageSelect={handleLanguageSelected} />;
      case 'profile':
        return <ProfileSetup onProfileComplete={handleProfileComplete} />;
      case 'app':
      default:
        return <App onLoginClick={() => setCurrentPage('login')} userName={userName} userLocation={userLocation} />;
    }
  };

  return (
    <StrictMode>
      <LanguageProvider initialLanguage={selectedLanguage}>
        {renderContent()}
      </LanguageProvider>
    </StrictMode>
  );
}

createRoot(document.getElementById('root')!).render(<Main />);