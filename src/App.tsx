import { useState } from 'react';
import { Leaf, MapPin } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import { AppProps } from '../src/types';
import { defaultFarmer, guild, bossChallenge, quests, leaderboard, dailyRiddle } from '../src/utils/mockData';

// Import page components
import DashboardPage from '../src/pages/DashboardPage';
import QuestsPage from '../src/pages/QuestsPage';
import GuildPage from '../src/pages/GuildPage';
import MarketplacePage from '../src/pages/MarketplacePage';
import LeaderboardPage from '../src/pages/LeaderboardPage';
import CommunityPage from '../src/pages/CommunityPage';
import AIOracle from '../src/components/AIOracle';

function App({ userName, userLocation, onLoginClick }: AppProps) {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('dashboard');
  const [showAIOracle, setShowAIOracle] = useState(false);

  const farmer = userName ? { 
    ...defaultFarmer, 
    name: userName, 
    location: userLocation || defaultFarmer.location 
  } : defaultFarmer;

  const renderActiveTab = () => {
    switch (activeTab) {
      case 'dashboard':
        return <DashboardPage farmer={farmer} guild={guild} bossChallenge={bossChallenge} dailyRiddle={dailyRiddle} />;
      case 'quests':
        return <QuestsPage quests={quests} />;
      case 'guild':
        return <GuildPage guild={guild} />;
      case 'marketplace':
        return <MarketplacePage farmer={farmer} />;
      case 'leaderboard':
        return <LeaderboardPage leaderboard={leaderboard} farmer={farmer} />;
      case 'community':
        return <CommunityPage />;
      default:
        return <DashboardPage farmer={farmer} guild={guild} bossChallenge={bossChallenge} dailyRiddle={dailyRiddle} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-emerald-50">
      {/* Header */}
      <header className="bg-white shadow-lg border-b border-green-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-2 rounded-lg">
                <Leaf className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">{t.header.appName}</h1>
                <p className="text-sm text-gray-600">{t.header.subtitle}</p>
              </div>
            </div>
            
            {/* User Profile */}
            {userName ? (
              <div className="flex items-center space-x-3">
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900">
                    {farmer.title} {userName}
                  </p>
                  <p className="text-xs text-gray-600 flex items-center">
                    <MapPin className="h-3 w-3 mr-1" />
                    {userLocation || 'Location not set'}
                  </p>
                </div>
                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white font-semibold">
                  {userName?.split(' ').map(n => n[0]).join('') || 'U'}
                </div>
              </div>
            ) : (
              <button 
                className="bg-green-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-green-700 transition-colors"
                onClick={onLoginClick}
              >
                Login
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8">
            {[
              { id: 'dashboard', label: 'Dashboard' },
              { id: 'quests', label: 'Quests' },
              { id: 'guild', label: 'Guild' },
              { id: 'marketplace', label: 'Marketplace' },
              { id: 'leaderboard', label: 'Leaderboard' },
              { id: 'community', label: 'Community' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === tab.id
                    ? 'border-green-500 text-green-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab.label}
              </button>
            ))}
            <button
              onClick={() => setShowAIOracle(true)}
              className="py-4 px-2 border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 font-medium text-sm transition-colors"
            >
              AI Oracle
            </button>
          </div>
        </div>
      </nav>

      {/* AI Oracle Modal */}
      <AIOracle isOpen={showAIOracle} onClose={() => setShowAIOracle(false)} />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderActiveTab()}
      </main>
    </div>
  );
}

export default App;