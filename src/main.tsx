// src/main.tsx
import { StrictMode, useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import LoginPage from './LoginPage.tsx';
import { LanguageProvider, getSavedLanguage } from './LanguageContext.tsx';
import { Language } from './translations.ts';
import { UserData } from './LoginPage.tsx';
import './index.css';


function Main() {
  const [currentPage, setCurrentPage] = useState('app');
  const [userName, setUserName] = useState('');
  const [userLocation, setUserLocation] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState<Language>('en');

  // Load user data from local storage on initial mount
  useEffect(() => {
    const savedLanguage = getSavedLanguage();
    setSelectedLanguage(savedLanguage);

    const savedUser = localStorage.getItem('dhartiRakshakUser');
    if (savedUser) {
      const userData = JSON.parse(savedUser);
      setUserName(userData.name);
      setUserLocation(userData.location);
      // Update language from user data if it exists
      if (userData.language) {
        setSelectedLanguage(userData.language as Language);
        localStorage.setItem('dhartiRakshakLanguage', userData.language);
      }
    }
  }, []);
  
  const handleLoginSuccess = (userData: UserData) => {
    setUserName(userData.name);
    setUserLocation(userData.location);
    
    // Update language immediately
    const newLanguage = userData.language as Language;
    setSelectedLanguage(newLanguage);
    localStorage.setItem('dhartiRakshakLanguage', newLanguage);
    
    // Save user data
    const userDataToSave = {
      ...userData,
      language: newLanguage
    };
    localStorage.setItem('dhartiRakshakUser', JSON.stringify(userDataToSave));
    
    setCurrentPage('app');
  };

  const renderContent = () => {
    // Check if the user is logged in
    const isLoggedIn = userName !== '';

    switch (currentPage) {
      case 'login':
        return <LoginPage onBack={() => setCurrentPage('app')} onLoginSuccess={handleLoginSuccess} />;
      case 'app':
      default:
        // Render the app if logged in, otherwise show the login screen.
        // This is where the flow is managed.
        if (isLoggedIn) {
          return <App onLoginClick={() => setCurrentPage('login')} userName={userName} userLocation={userLocation} />;
        } else {
          return <LoginPage onBack={() => setCurrentPage('app')} onLoginSuccess={handleLoginSuccess} />;
        }
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