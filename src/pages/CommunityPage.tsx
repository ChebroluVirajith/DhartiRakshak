import { 
  Brain, Award, TrendingUp
} from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export default function CommunityPage() {
  const { t } = useLanguage();

  const helpRequests = [
    { 
      farmer: 'Priya Sharma', 
      problem: t.helpRequests.whiteFliesAttack,
      location: 'Aurangabad',
      bids: 3,
      reward: '50 Guru Points',
      time: `2 ${t.helpRequests.hoursAgo}`,
      image: '🍅'
    },
    { 
      farmer: 'Mohan Singh', 
      problem: t.helpRequests.soilPHAlkaline,
      location: 'Nashik',
      bids: 7,
      reward: '75 Guru Points',
      time: `5 ${t.helpRequests.hoursAgo}`,
      image: '🌱'
    },
    { 
      farmer: 'Sunita Devi', 
      problem: t.helpRequests.intercroppingSugarcane,
      location: 'Kolhapur',
      bids: 2,
      reward: '60 Guru Points',
      time: `1 ${t.helpRequests.dayAgo}`,
      image: '🎋'
    }
  ];

  const topGurus = [
    { name: 'Dr. Ramesh Patil', guruPoints: 2450, solutions: 89, specialty: 'Organic Pest Control' },
    { name: 'Kavita Deshmukh', guruPoints: 2100, solutions: 76, specialty: 'Soil Management' },
    { name: 'Suresh Kumar', guruPoints: 1890, solutions: 65, specialty: 'Water Conservation' }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">{t.community.knowledgeBarteting}</h2>
        <button className="bg-green-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-green-700 transition-colors">
          {t.community.askForHelp}
        </button>
      </div>

      {/* Knowledge Bartering System */}
      <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <Brain className="h-5 w-5 mr-2 text-blue-500" />
          {t.community.activeHelpRequests}
        </h3>
        <div className="space-y-4">
          {helpRequests.map((request, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-start space-x-4">
                <div className="text-3xl">{request.image}</div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <h4 className="font-semibold text-gray-900">{request.farmer}</h4>
                    <span className="text-sm text-gray-500">• {request.location}</span>
                    <span className="text-sm text-gray-500">• {request.time}</span>
                  </div>
                  <p className="text-gray-700 mb-3">{request.problem}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <span>{request.bids} {t.community.solutionsOffered}</span>
                      <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full font-medium">
                        {request.reward}
                      </span>
                    </div>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                      {t.community.offerSolution}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Top Gurus */}
      <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <Award className="h-5 w-5 mr-2 text-yellow-500" />
          {t.community.topKnowledgeGurus}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {topGurus.map((guru, index) => (
            <div key={index} className="text-center p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg border border-yellow-200">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mx-auto mb-3 flex items-center justify-center text-white text-xl font-bold">
                {guru.name.split(' ').map(n => n[0]).join('')}
              </div>
              <h4 className="font-semibold text-gray-900 mb-1">{guru.name}</h4>
              <p className="text-sm text-gray-600 mb-2">{guru.specialty}</p>
              <div className="flex justify-center space-x-4 text-xs text-gray-500">
                <span>{guru.guruPoints} {t.community.guruPoints}</span>
                <span>{guru.solutions} {t.community.solutions}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Community Impact */}
      <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <TrendingUp className="h-5 w-5 mr-2 text-green-500" />
          {t.community.communityImpact}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center p-4 bg-green-50 rounded-lg">
            <div className="text-3xl font-bold text-green-600">1,247</div>
            <p className="text-sm text-gray-600 mt-1">{t.community.acresConverted}</p>
          </div>
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <div className="text-3xl font-bold text-blue-600">89%</div>
            <p className="text-sm text-gray-600 mt-1">{t.community.reductionChemicalUsage}</p>
          </div>
          <div className="text-center p-4 bg-purple-50 rounded-lg">
            <div className="text-3xl font-bold text-purple-600">324</div>
            <p className="text-sm text-gray-600 mt-1">{t.community.activeDhartiRakshaks}</p>
          </div>
          <div className="text-center p-4 bg-yellow-50 rounded-lg">
            <div className="text-3xl font-bold text-yellow-600">156</div>
            <p className="text-sm text-gray-600 mt-1">{t.community.bossBattlesWon}</p>
          </div>
        </div>
      </div>
    </div>
  );
}