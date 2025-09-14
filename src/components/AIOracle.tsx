
import { Brain, Camera } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

interface AIOracleProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AIOracle({ isOpen, onClose }: AIOracleProps) {
  const { t } = useLanguage();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-md w-full p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-purple-500 to-indigo-600 p-2 rounded-lg">
              <Brain className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">{t.aiOracle.krishiRishiAIOracle}</h3>
          </div>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            ✕
          </button>
        </div>
        <div className="space-y-4">
          <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg p-4">
            <h4 className="font-semibold text-purple-800 mb-2">🔍 {t.aiOracle.plantDoctor}</h4>
            <p className="text-sm text-purple-700 mb-3">{t.aiOracle.plantDoctorDescription}</p>
            <button className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-purple-700 transition-colors flex items-center space-x-2">
              <Camera className="h-4 w-4" />
              <span>{t.aiOracle.takePhoto}</span>
            </button>
          </div>
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4">
            <h4 className="font-semibold text-green-800 mb-2">🌱 {t.aiOracle.cropAdvisor}</h4>
            <p className="text-sm text-green-700 mb-3">{t.aiOracle.cropAdvisorDescription}</p>
            <button className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-700 transition-colors">
              {t.aiOracle.getAdvice}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
