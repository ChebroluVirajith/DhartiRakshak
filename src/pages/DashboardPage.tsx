
import { 
  Sparkles, Globe, Crown, Coins, Award, TreePine, Bug 
} from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { Farmer, Guild, BossChallenge, DailyRiddle } from '../types';
import { getAuraColor } from '../utils/utils';

interface DashboardPageProps {
  farmer: Farmer;
  guild: Guild;
  bossChallenge: BossChallenge;
  dailyRiddle: DailyRiddle;
}

export default function DashboardPage({ farmer, guild, bossChallenge, dailyRiddle }: DashboardPageProps) {
  const { t } = useLanguage();

  return (
    <div className="space-y-8">
      {/* Daily Riddle */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl shadow-lg text-white p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold flex items-center">
            <Sparkles className="h-5 w-5 mr-2" />
            {t.dashboard.dailyRiddle}
          </h3>
          <div className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm">
            {t.dashboard.dailyChallenge}
          </div>
        </div>
        <p className="text-indigo-100 mb-4">{dailyRiddle.question}</p>
        <div className="grid grid-cols-2 gap-2 mb-4">
          {dailyRiddle.options.map((option, index) => (
            <button 
              key={index}
              className="bg-white bg-opacity-10 hover:bg-opacity-20 rounded-lg p-2 text-sm transition-colors"
            >
              {option}
            </button>
          ))}
        </div>
        <p className="text-xs text-indigo-200">Reward: {dailyRiddle.reward}</p>
      </div>

      {/* Boss Challenge Banner */}
      <div className="bg-gradient-to-r from-red-500 to-orange-600 rounded-xl shadow-lg text-white p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="bg-white bg-opacity-20 p-3 rounded-lg">
              <Bug className="h-8 w-8" />
            </div>
            <div>
              <h3 className="text-xl font-bold">{t.dashboard.bossChallenge}: {bossChallenge.name}</h3>
              <p className="text-red-100">{bossChallenge.description}</p>
              <div className="flex items-center space-x-4 mt-2 text-sm">
                <span>{bossChallenge.participants} {t.dashboard.farmersParticipating}</span>
                <span>⏰ {bossChallenge.timeLeft} {t.dashboard.timeLeft}</span>
              </div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold">{bossChallenge.progress}%</div>
            <div className="w-24 h-3 bg-white bg-opacity-20 rounded-full mt-2">
              <div 
                className="h-3 bg-white rounded-full transition-all duration-500"
                style={{ width: `${bossChallenge.progress}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-lg border border-green-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">{t.dashboard.farmAuraHealth}</p>
              <p className="text-3xl font-bold text-green-600">{farmer.auraHealth}%</p>
            </div>
            <div className={`bg-gradient-to-r ${getAuraColor(farmer.auraHealth)} p-3 rounded-lg`}>
              <Globe className="h-6 w-6 text-white" />
            </div>
          </div>
          <div className="mt-4">
            <div className="flex items-center space-x-2">
              <div className="flex-1 bg-gray-200 rounded-full h-2">
                <div 
                  className={`bg-gradient-to-r ${getAuraColor(farmer.auraHealth)} h-2 rounded-full transition-all duration-500`}
                  style={{ width: `${farmer.auraHealth}%` }}
                />
              </div>
              <span className="text-sm font-medium text-gray-600">{farmer.auraHealth}%</span>
            </div>
            <p className="text-xs text-gray-500 mt-1">Powered by satellite data</p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg border border-blue-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">{t.dashboard.levelTitle}</p>
              <p className="text-2xl font-bold text-blue-600">{farmer.level}</p>
              <p className="text-xs text-blue-600 font-medium">{farmer.title}</p>
            </div>
            <div className="bg-blue-100 p-3 rounded-lg">
              <Crown className="h-6 w-6 text-blue-600" />
            </div>
          </div>
          <p className="text-sm text-gray-500 mt-2">{farmer.totalPoints} total points</p>
        </div>

        <div className="bg-white rounded-xl shadow-lg border border-yellow-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">{t.dashboard.greenCredits}</p>
              <p className="text-3xl font-bold text-yellow-600">{farmer.greenCredits}</p>
            </div>
            <div className="bg-yellow-100 p-3 rounded-lg">
              <Coins className="h-6 w-6 text-yellow-600" />
            </div>
          </div>
          <p className="text-sm text-gray-500 mt-2">Spend in Mandi</p>
        </div>

        <div className="bg-white rounded-xl shadow-lg border border-purple-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">{t.dashboard.guildRank}</p>
              <p className="text-3xl font-bold text-purple-600">#{guild.rank}</p>
            </div>
            <div className="bg-purple-100 p-3 rounded-lg">
              <Crown className="h-6 w-6 text-purple-600" />
            </div>
          </div>
          <p className="text-sm text-gray-500 mt-2">{guild.name}</p>
        </div>
      </div>

      {/* Farm Aura Visualization */}
      <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <Globe className="h-5 w-5 mr-2 text-green-500" />
          {t.dashboard.farmAura}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4">
              <h4 className="font-semibold text-green-800 mb-2">{t.dashboard.healthIndicators}</h4>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>{t.dashboard.vegetationIndex}</span>
                  <span className="font-medium text-green-600">0.82 ({t.dashboard.excellent})</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>{t.dashboard.soilMoisture}</span>
                  <span className="font-medium text-blue-600">78% ({t.dashboard.good})</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>{t.dashboard.cropDensity}</span>
                  <span className="font-medium text-emerald-600">{t.dashboard.high}</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-4">
              <h4 className="font-semibold text-blue-800 mb-2">{t.dashboard.improvementTips}</h4>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• {t.improvementTips.addOrganicMulch}</li>
                <li>• {t.improvementTips.considerIntercropping}</li>
                <li>• {t.improvementTips.optimizeIrrigation}</li>
              </ul>
            </div>
          </div>
          <div className="bg-gradient-to-br from-green-100 to-emerald-200 rounded-lg p-6 flex items-center justify-center">
            <div className="text-center">
              <div className={`w-32 h-32 bg-gradient-to-r ${getAuraColor(farmer.auraHealth)} rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg`}>
                <TreePine className="h-16 w-16 text-white" />
              </div>
              <p className="text-lg font-semibold text-gray-800">{t.dashboard.farmAura}: {farmer.auraHealth}%</p>
              <p className="text-sm text-gray-600">{t.dashboard.lastUpdated}: 2 hours ago</p>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Achievements */}
      <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <Award className="h-5 w-5 mr-2 text-yellow-500" />
          {t.dashboard.recentAchievements}
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {farmer.badges.map((badge, index) => (
            <div key={index} className="text-center p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg border border-yellow-200">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                <Award className="h-6 w-6 text-white" />
              </div>
              <p className="text-sm font-medium text-gray-900">{badge}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
