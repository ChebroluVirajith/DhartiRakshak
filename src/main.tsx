import { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import LoginPage from './LoginPage.tsx';
import ProfileSetup from './ProfileSetup.tsx';
import './index.css';


function Main() {
  const [currentPage, setCurrentPage] = useState('app');
  const [userName, setUserName] = useState('');
  const [userLocation, setUserLocation] = useState('');

  const handleProfileComplete = (name: string, location: string) => {
    setUserName(name);
    setUserLocation(location);
    setCurrentPage('app');
  };

  const renderContent = () => {
    switch (currentPage) {
      case 'login':
        return <LoginPage onBack={() => setCurrentPage('app')} onLoginSuccess={() => setCurrentPage('profile')} />;
      case 'profile':
        return <ProfileSetup onProfileComplete={handleProfileComplete} />;
      case 'app':
      default:
        return <App onLoginClick={() => setCurrentPage('login')} userName={userName} userLocation={userLocation} />;
    }
  };

  return (
    <StrictMode>
      {renderContent()}
    </StrictMode>
  );
}

createRoot(document.getElementById('root')!).render(<Main />);