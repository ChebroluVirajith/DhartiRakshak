import { 
  Calendar, Target, Star, CheckCircle, Gift 
} from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { Quest } from '../types';
import { getDifficultyColor, getQuestTypeColor, getProgressColor } from '../utils/utils';

interface QuestsPageProps {
  quests: Quest[];
}

export default function QuestsPage({ quests }: QuestsPageProps) {
  const { t } = useLanguage();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">{t.quests.myQuests}</h2>
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <Calendar className="h-4 w-4" />
          <span>{t.quests.updatedDaily}</span>
        </div>
      </div>

      <div className="grid gap-6">
        {quests.map((quest) => (
          <div 
            key={quest.id} 
            className={`bg-white rounded-xl shadow-lg border-l-4 p-6 transition-all duration-300 hover:shadow-xl ${
              quest.completed ? 'border-green-500 bg-green-50' : 
              quest.type === 'boss' ? 'border-red-500' :
              quest.type === 'guild' ? 'border-purple-500' : 'border-blue-500'
            }`}
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <h3 className="text-lg font-semibold text-gray-900">{t.quests.titles[quest.id as keyof typeof t.quests.titles]}</h3>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(quest.difficulty)}`}>
                    {quest.difficulty === 'Easy' ? t.quests.easy : quest.difficulty === 'Medium' ? t.quests.medium : t.quests.hard}
                  </span>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getQuestTypeColor(quest.type)}`}>
                    {quest.type === 'boss' ? `👹 ${t.quests.boss}` : quest.type === 'guild' ? `🛡️ ${t.quests.guild}` : `👤 ${t.quests.individual}`}
                  </span>
                  {quest.completed && (
                    <CheckCircle className="h-5 w-5 text-green-500" />
                  )}
                </div>
                <p className="text-gray-600 mb-4">{t.questDescriptions[quest.description as keyof typeof t.questDescriptions]}</p>
                
                <div className="flex items-center space-x-6 text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <Target className="h-4 w-4" />
                    <span>{t.categories[quest.category as keyof typeof t.categories]}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4" />
                    <span>{quest.points} {t.quests.points}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{t.quests.due}: {quest.deadline}</span>
                  </div>
                  {quest.reward && (
                    <div className="flex items-center space-x-1">
                      <Gift className="h-4 w-4" />
                      <span>{t.titles[quest.reward.replace(/ /g, '') as keyof typeof t.titles]}</span>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="ml-6 text-right">
                <div className="text-2xl font-bold text-gray-900 mb-1">{quest.progress}%</div>
                <div className="w-20 h-2 bg-gray-200 rounded-full">
                  <div 
                    className={`h-2 rounded-full transition-all duration-500 ${getProgressColor(quest.progress)}`}
                    style={{ width: `${quest.progress}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}