
import { 
  Gift, Coins, Brain, Star, CheckCircle
} from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { Farmer } from '../types';

interface MarketplacePageProps {
  farmer: Farmer;
}

export default function MarketplacePage({ farmer }: MarketplacePageProps) {
  const { t } = useLanguage();

  const realWorldBenefits = [
    { item: 'Organic Fertilizer Discount', cost: 200, description: '20% off next purchase' },
    { item: 'Seed Quality Upgrade', cost: 150, description: 'Premium seeds at regular price' },
    { item: 'Loan Interest Reduction', cost: 500, description: '0.5% reduction for 6 months' }
  ];

  const knowledgeUnlocks = [
    { item: 'Advanced IPM Masterclass', cost: 100, description: 'Expert video series' },
    { item: 'Soil Testing Guide', cost: 75, description: 'DIY testing methods' },
    { item: 'Market Price Predictions', cost: 250, description: 'AI-powered insights' }
  ];

  const virtualRewards = [
    { item: 'Premium Avatar Frame', cost: 50, description: 'Golden border for profile' },
    { item: 'Farm Decoration Pack', cost: 75, description: 'Beautify your virtual farm' },
    { item: 'Custom Guild Badge', cost: 125, description: 'Design your guild emblem' }
  ];

  const schemeEligibility = [
    { scheme: t.marketplace.solarPumpSubsidy, progress: 85, requirement: 'Sustainability Score: 80+', status: t.marketplace.almostEligible },
    { scheme: t.marketplace.organicCertificationSupport, progress: 92, requirement: 'Organic Practices: 90%+', status: t.marketplace.eligible },
    { scheme: t.marketplace.dripIrrigationSubsidy, progress: 67, requirement: 'Water Conservation Score: 70+', status: t.marketplace.inProgress },
    { scheme: t.marketplace.cropInsurancePremiumReduction, progress: 78, requirement: 'Risk Management Score: 75+', status: t.marketplace.eligible }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900 flex items-center">
          <Gift className="h-8 w-8 mr-3 text-yellow-600" />
          {t.marketplace.greenCreditsMandi}
        </h2>
        <div className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-lg font-semibold">
          {farmer.greenCredits} {t.marketplace.creditsAvailable}
        </div>
      </div>

      {/* Marketplace Categories */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Real-World Benefits */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <Coins className="h-5 w-5 mr-2 text-green-600" />
            {t.marketplace.realWorldBenefits}
          </h3>
          <div className="space-y-3">
            {realWorldBenefits.map((benefit, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-3">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-medium text-gray-900">{benefit.item}</h4>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">
                    {benefit.cost} Credits
                  </span>
                </div>
                <p className="text-sm text-gray-600">{benefit.description}</p>
                <button className="mt-2 w-full bg-green-600 text-white py-1 rounded text-sm hover:bg-green-700 transition-colors">
                  {t.marketplace.redeem}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Knowledge Unlocks */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <Brain className="h-5 w-5 mr-2 text-purple-600" />
            {t.marketplace.knowledgeUnlocks}
          </h3>
          <div className="space-y-3">
            {knowledgeUnlocks.map((knowledge, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-3">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-medium text-gray-900">{knowledge.item}</h4>
                  <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs font-medium">
                    {knowledge.cost} Credits
                  </span>
                </div>
                <p className="text-sm text-gray-600">{knowledge.description}</p>
                <button className="mt-2 w-full bg-purple-600 text-white py-1 rounded text-sm hover:bg-purple-700 transition-colors">
                  {t.marketplace.unlock}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Virtual Rewards */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <Star className="h-5 w-5 mr-2 text-yellow-600" />
            {t.marketplace.virtualRewards}
          </h3>
          <div className="space-y-3">
            {virtualRewards.map((reward, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-3">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-medium text-gray-900">{reward.item}</h4>
                  <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs font-medium">
                    {reward.cost} Credits
                  </span>
                </div>
                <p className="text-sm text-gray-600">{reward.description}</p>
                <button className="mt-2 w-full bg-yellow-600 text-white py-1 rounded text-sm hover:bg-yellow-700 transition-colors">
                  {t.marketplace.purchase}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scheme Eligibility Tracker */}
      <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <CheckCircle className="h-5 w-5 mr-2 text-blue-600" />
          {t.marketplace.governmentSchemeEligibility}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {schemeEligibility.map((scheme, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-medium text-gray-900">{scheme.scheme}</h4>
                <span className={`px-2 py-1 rounded text-xs font-medium ${
                  scheme.status === t.marketplace.eligible ? 'bg-green-100 text-green-800' :
                  scheme.status === t.marketplace.almostEligible ? 'bg-yellow-100 text-yellow-800' :
                  'bg-gray-100 text-gray-800'
                }`}>
                  {scheme.status}
                </span>
              </div>
              <p className="text-sm text-gray-600 mb-3">{scheme.requirement}</p>
              <div className="flex items-center space-x-2">
                <div className="flex-1 bg-gray-200 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full transition-all duration-500 ${
                      scheme.progress >= 90 ? 'bg-green-500' :
                      scheme.progress >= 70 ? 'bg-yellow-500' : 'bg-red-500'
                    }`}
                    style={{ width: `${scheme.progress}%` }}
                  />
                </div>
                <span className="text-sm font-medium text-gray-600">{scheme.progress}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
