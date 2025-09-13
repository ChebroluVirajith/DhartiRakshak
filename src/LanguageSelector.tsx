import React, { useState } from 'react';
import { Leaf, Check, Globe } from 'lucide-react';
import { Language, languages, getTranslations } from './translations';

interface LanguageSelectorProps {
  onLanguageSelect: (language: Language) => void;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ onLanguageSelect }) => {
  const [selectedLanguage, setSelectedLanguage] = useState<Language>('en');
  
  // Use English translations initially for the selector interface
  const t = getTranslations('en');

  const handleLanguageSelect = (language: Language) => {
    setSelectedLanguage(language);
  };

  const handleConfirm = () => {
    onLanguageSelect(selectedLanguage);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-emerald-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-md w-full p-8 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-center space-x-3 mb-6">
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-2 rounded-lg">
            <Leaf className="h-8 w-8 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-900">AgriGame</h1>
            <p className="text-sm text-gray-600">Dharti Rakshak Platform</p>
          </div>
        </div>

        {/* Language Selection Title */}
        <div className="text-center mb-8">
          <div className="bg-blue-100 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
            <Globe className="h-8 w-8 text-blue-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">{t.languageSelection.title}</h2>
          <p className="text-gray-600">{t.languageSelection.subtitle}</p>
        </div>

        {/* Language Options */}
        <div className="space-y-3">
          {(Object.keys(languages) as Language[]).map((languageCode) => {
            const language = languages[languageCode];
            const isSelected = selectedLanguage === languageCode;
            
            return (
              <button
                key={languageCode}
                onClick={() => handleLanguageSelect(languageCode)}
                className={`w-full flex items-center space-x-4 p-4 rounded-lg border-2 transition-all duration-200 ${
                  isSelected
                    ? 'border-green-500 bg-green-50 shadow-md'
                    : 'border-gray-200 bg-white hover:border-green-300 hover:bg-green-50'
                }`}
              >
                <div className="text-2xl">{language.flag}</div>
                <div className="flex-1 text-left">
                  <div className="font-semibold text-gray-900">{language.nativeName}</div>
                  <div className="text-sm text-gray-600">{language.name}</div>
                </div>
                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                  isSelected 
                    ? 'border-green-500 bg-green-500' 
                    : 'border-gray-300'
                }`}>
                  {isSelected && <Check className="h-4 w-4 text-white" />}
                </div>
              </button>
            );
          })}
        </div>

        {/* Confirm Button */}
        <button
          onClick={handleConfirm}
          className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-4 rounded-lg font-semibold text-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
        >
          {getTranslations(selectedLanguage).languageSelection.confirmSelection}
        </button>

        {/* Preview text in selected language */}
        <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
          <div className="text-center">
            <p className="text-sm text-gray-600 mb-2">Preview:</p>
            <p className="font-semibold text-gray-900">
              {getTranslations(selectedLanguage).login.welcome}
            </p>
            <p className="text-sm text-gray-600">
              {getTranslations(selectedLanguage).login.subtitle}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LanguageSelector;