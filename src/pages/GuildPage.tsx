import { 
  Shield, Users, Trophy, Target, MessageCircle
} from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { Guild } from '../types';

interface GuildPageProps {
  guild: Guild;
}

export default function GuildPage({ guild }: GuildPageProps) {
  const { t } = useLanguage();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900 flex items-center">
          <Shield className="h-8 w-8 mr-3 text-purple-600" />
          {guild.name}
        </h2>
        <div className="flex items-center space-x-4">
          <div className="text-4xl">{guild.logo}</div>
          <div className="text-right">
            <p className="text-lg font-semibold text-gray-900">{t.guild.level} {guild.level}</p>
            <p className="text-sm text-gray-600">{guild.members} {t.guild.members}</p>
          </div>
        </div>
      </div>

      {/* Guild Challenge */}
      <div className="bg-gradient-to-r from-purple-500 to-indigo-600 rounded-xl shadow-lg text-white p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold">{t.guild.currentGuildChallenge}</h3>
          <div className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm">
            {t.guild.rank} #{guild.rank}
          </div>
        </div>
        <h4 className="text-lg font-semibold mb-2">{t.questDescriptions.villageDripSystemDesc}</h4>
        <p className="text-purple-100 mb-4">{guild.currentChallenge}</p>
        <div className="flex items-center justify-between">
          <div className="flex-1 mr-4">
            <div className="flex justify-between text-sm mb-1">
              <span>{t.guild.progress}</span>
              <span>{guild.progress}%</span>
            </div>
            <div className="w-full bg-white bg-opacity-20 rounded-full h-3">
              <div 
                className="bg-white h-3 rounded-full transition-all duration-500"
                style={{ width: `${guild.progress}%` }}
              />
            </div>
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold">{guild.progress}%</p>
            <p className="text-xs text-purple-200">{t.dashboard.complete}</p>
          </div>
        </div>
      </div>

      {/* Guild Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
          <div className="flex items-center space-x-3 mb-4">
            <Users className="h-6 w-6 text-blue-600" />
            <h3 className="font-semibold text-gray-900">{t.guild.activeMembers}</h3>
          </div>
          <div className="text-3xl font-bold text-blue-600 mb-2">{guild.members}</div>
          <p className="text-sm text-gray-600">{t.guild.farmersUnited}</p>
        </div>

        <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
          <div className="flex items-center space-x-3 mb-4">
            <Trophy className="h-6 w-6 text-yellow-600" />
            <h3 className="font-semibold text-gray-900">{t.guild.guildLevel}</h3>
          </div>
          <div className="text-3xl font-bold text-yellow-600 mb-2">{guild.level}</div>
          <p className="text-sm text-gray-600">{t.guild.collectiveAchievements}</p>
        </div>

        <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
          <div className="flex items-center space-x-3 mb-4">
            <Target className="h-6 w-6 text-green-600" />
            <h3 className="font-semibold text-gray-900">{t.guild.challengesWon}</h3>
          </div>
          <div className="text-3xl font-bold text-green-600 mb-2">12</div>
          <p className="text-sm text-gray-600">{t.guild.thisSeason}</p>
        </div>
      </div>

      {/* Guild Chat Preview */}
      <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <MessageCircle className="h-5 w-5 mr-2 text-blue-500" />
          {t.guild.guildChat}
        </h3>
        <div className="space-y-3 mb-4">
          {[
            { name: 'Amit', message: t.guild.chatMessages.message1, time: t.guild.chatMessages.time1 },
            { name: 'Sunita', message: t.guild.chatMessages.message2, time: t.guild.chatMessages.time2 },
            { name: 'Mohan', message: t.guild.chatMessages.message3, time: t.guild.chatMessages.time3 }
          ].map((chat, index) => (
            <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                {chat.name[0]}
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-2">
                  <span className="font-medium text-gray-900">{chat.name}</span>
                  <span className="text-xs text-gray-500">{chat.time}</span>
                </div>
                <p className="text-sm text-gray-700">{chat.message}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="w-full bg-purple-600 text-white py-2 rounded-lg font-medium hover:bg-purple-700 transition-colors">
          {t.guild.openGuildChat}
        </button>
      </div>
    </div>
  );
}