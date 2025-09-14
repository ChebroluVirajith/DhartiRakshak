import { 
   Crown, Shield, MapPin, ChevronRight
} from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { LeaderboardEntry, Farmer } from '../types';

interface LeaderboardPageProps {
  leaderboard: LeaderboardEntry[];
  farmer: Farmer;
}

export default function LeaderboardPage({ leaderboard, farmer }: LeaderboardPageProps) {
  const { t } = useLanguage();

  const guildRankings = [
    { name: t.leaderboard.guildRankings.milletMavericks, members: 32, score: 15420, rank: 1, logo: '🌾' },
    { name: t.leaderboard.guildRankings.waterWarriors, members: 28, score: 14850, rank: 2, logo: '💧' },
    { name: t.leaderboard.guildRankings.basmatiBrigade, members: 24, score: 13200, rank: 3, logo: '🍚' },
    { name: t.leaderboard.guildRankings.greenGuardians, members: 19, score: 12100, rank: 4, logo: '🌲' }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">{t.leaderboard.adarshKisanLeaderboard}</h2>
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <MapPin className="h-4 w-4" />
          <span>{t.leaderboard.maharashtraRegion}</span>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg border border-gray-100">
        <div className="p-6 border-b border-gray-100">
          <div className="flex items-center space-x-4">
            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-3 rounded-lg">
              <Crown className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">{t.leaderboard.adarshKisanChallenge}</h3>
              <p className="text-gray-600">{t.leaderboard.modelFarmerTitle}</p>
            </div>
          </div>
        </div>
        
        <div className="divide-y divide-gray-100">
          {leaderboard.map((entry, index) => (
            <div 
              key={entry.rank} 
              className={`p-6 flex items-center space-x-4 ${
                entry.name === farmer.name ? 'bg-green-50 border-l-4 border-green-500' : 'hover:bg-gray-50'
              } transition-colors`}
            >
              <div className="text-2xl font-bold text-gray-400 w-8">
                #{entry.rank}
              </div>
              <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-semibold ${
                index === 0 ? 'bg-gradient-to-r from-yellow-400 to-yellow-600' :
                index === 1 ? 'bg-gradient-to-r from-gray-400 to-gray-600' :
                index === 2 ? 'bg-gradient-to-r from-orange-400 to-orange-600' :
                'bg-gradient-to-r from-green-400 to-green-600'
              }`}>
                {entry.avatar}
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-2">
                  <h4 className="font-semibold text-gray-900">{entry.name}</h4>
                  <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs font-medium">
                    {t.titles[entry.title as keyof typeof t.titles] || entry.title}
                  </span>
                  {entry.guild && (
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                      {entry.guild}
                    </span>
                  )}
                  {entry.name === farmer.name && (
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                      {t.leaderboard.you}
                    </span>
                  )}
                </div>
                <p className="text-sm text-gray-600 flex items-center">
                  <MapPin className="h-3 w-3 mr-1" />
                  {entry.location}
                </p>
              </div>
              <div className="text-right">
                <div className="text-xl font-bold text-green-600">{entry.score}</div>
                <div className="text-sm text-gray-500">{t.quests.points}</div>
              </div>
              <ChevronRight className="h-5 w-5 text-gray-400" />
            </div>
          ))}
        </div>
      </div>

      {/* Guild Leaderboard */}
      <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <Shield className="h-5 w-5 mr-2 text-purple-500" />
          {t.leaderboard.panchayatLeague}
        </h3>
        <div className="space-y-3">
          {guildRankings.map((guild, index) => (
            <div key={index} className={`flex items-center space-x-4 p-4 rounded-lg ${
              guild.name === farmer.guild ? 'bg-purple-50 border border-purple-200' : 'bg-gray-50'
            }`}>
              <div className="text-xl font-bold text-gray-400">#{guild.rank}</div>
              <div className="text-2xl">{guild.logo}</div>
              <div className="flex-1">
                <div className="flex items-center space-x-2">
                  <h4 className="font-semibold text-gray-900">{guild.name}</h4>
                  {guild.name === farmer.guild && (
                    <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs font-medium">
                      {t.leaderboard.yourGuild}
                    </span>
                  )}
                </div>
                <p className="text-sm text-gray-600">{guild.members} {t.guild.members}</p>
              </div>
              <div className="text-right">
                <div className="text-lg font-bold text-purple-600">{guild.score}</div>
                <div className="text-sm text-gray-500">{t.leaderboard.guildPoints}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}