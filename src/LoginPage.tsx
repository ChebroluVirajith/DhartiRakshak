import { useState } from 'react';
import { ChevronLeft, Check, Lock, Leaf, Loader2, Globe, User, MapPin } from 'lucide-react';
import { RecaptchaVerifier, signInWithPhoneNumber, ConfirmationResult } from 'firebase/auth';
import { auth } from './firebase';

interface LoginPageProps {
  onBack: () => void;
  onLoginSuccess: (userData: UserData) => void;
}

interface UserData {
  phoneNumber: string;
  name: string;
  location: string;
  language: string;
}

interface Language {
  code: string;
  name: string;
  native: string;
}

interface TranslationTexts {
  welcome: string;
  subtitle: string;
  phoneNumber: string;
  enterPhone: string;
  getOTP: string;
  enterOTP: string;
  verifyOTP: string;
  selectLanguage: string;
  continue: string;
  farmerDetails: string;
  fullName: string;
  enterName: string;
  location: string;
  enterLocation: string;
  completeProfile: string;
  loading: string;
  back: string;
  otpSent: string;
  invalidOTP: string;
  profileComplete: string;
  joiningPlatform: string;
}

type StepType = 'phone' | 'otp' | 'language' | 'details' | 'complete';

const LoginPage: React.FC<LoginPageProps> = ({ onBack, onLoginSuccess }) => {
  // Step states
  const [currentStep, setCurrentStep] = useState<StepType>('phone');
  
  // Phone & OTP states
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [otp, setOtp] = useState<string>('');
  const [confirmationResult, setConfirmationResult] = useState<ConfirmationResult | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [appVerifier, setAppVerifier] = useState<RecaptchaVerifier | null>(null);
  
  // Language selection
  const [selectedLanguage, setSelectedLanguage] = useState<string>('en');
  
  // Farmer details
  const [farmerName, setFarmerName] = useState<string>('');
  const [farmerLocation, setFarmerLocation] = useState<string>('');

  const languages: Language[] = [
    { code: 'en', name: 'English', native: 'English' },
    { code: 'hi', name: 'Hindi', native: 'हिंदी' },
    { code: 'mr', name: 'Marathi', native: 'मराठी' },
    { code: 'ta', name: 'Tamil', native: 'தமிழ்' },
    { code: 'te', name: 'Telugu', native: 'తెలుగు' }
  ];

  const translations: Record<string, TranslationTexts> = {
    en: {
      welcome: 'Welcome to AgriGame',
      subtitle: 'Join the Dharti Rakshak Platform',
      phoneNumber: 'Phone Number',
      enterPhone: 'Enter your 10-digit mobile number',
      getOTP: 'Get OTP',
      enterOTP: 'Enter 6-digit OTP',
      verifyOTP: 'Verify & Login',
      selectLanguage: 'Select Your Preferred Language',
      continue: 'Continue',
      farmerDetails: 'Complete Your Profile',
      fullName: 'Full Name',
      enterName: 'Enter your full name',
      location: 'Location',
      enterLocation: 'Enter your city/village',
      completeProfile: 'Complete Profile',
      loading: 'Loading...',
      back: 'Back',
      otpSent: 'OTP sent to your mobile number',
      invalidOTP: 'Invalid OTP. Please try again.',
      profileComplete: 'Profile completed successfully!',
      joiningPlatform: 'Joining the platform...'
    },
    hi: {
      welcome: 'एग्रीगेम में आपका स्वागत है',
      subtitle: 'धरती रक्षक प्लेटफॉर्म में शामिल हों',
      phoneNumber: 'फोन नंबर',
      enterPhone: 'अपना 10 अंकों का मोबाइल नंबर दर्ज करें',
      getOTP: 'OTP प्राप्त करें',
      enterOTP: '6 अंकों का OTP दर्ज करें',
      verifyOTP: 'सत्यापित करें और लॉगिन करें',
      selectLanguage: 'अपनी पसंदीदा भाषा चुनें',
      continue: 'जारी रखें',
      farmerDetails: 'अपनी प्रोफाइल पूरी करें',
      fullName: 'पूरा नाम',
      enterName: 'अपना पूरा नाम दर्ज करें',
      location: 'स्थान',
      enterLocation: 'अपना शहर/गांव दर्ज करें',
      completeProfile: 'प्रोफाइल पूरी करें',
      loading: 'लोड हो रहा है...',
      back: 'वापस',
      otpSent: 'आपके मोबाइल नंबर पर OTP भेजा गया',
      invalidOTP: 'अमान्य OTP। कृपया फिर से कोशिश करें।',
      profileComplete: 'प्रोफाइल सफलतापूर्वक पूरी हुई!',
      joiningPlatform: 'प्लेटफॉर्म में शामिल हो रहे हैं...'
    },
    te: {
     welcome: 'అగ్రిగేమ్‌కి స్వాగతం',
subtitle: 'భూమి రక్షక ప్లాట్‌ఫామ్‌లో చేరండి',
phoneNumber: 'ఫోన్ నంబర్',
enterPhone: 'మీ 10 అంకెల మొబైల్ నంబర్‌ని నమోదు చేయండి',
getOTP: 'OTP పొందండి',
enterOTP: '6 అంకెల OTP నమోదు చేయండి',
verifyOTP: 'సరిపరచి లాగిన్ అవ్వండి',
selectLanguage: 'మీ ఇష్టమైన భాషను ఎంచుకోండి',
continue: 'కొనసాగించండి',
farmerDetails: 'మీ ప్రొఫైల్ పూర్తి చేయండి',
fullName: 'పూర్తి పేరు',
enterName: 'మీ పూర్తి పేరును నమోదు చేయండి',
location: 'ప్రాంతం',
enterLocation: 'మీ నగరం/గ్రామం నమోదు చేయండి',
completeProfile: 'ప్రొఫైల్ పూర్తి చేయండి',
loading: 'లోడ్ అవుతోంది...',
back: 'వెనక్కి',
otpSent: 'మీ మొబైల్ నంబర్‌కి OTP పంపబడింది',
invalidOTP: 'చెల్లని OTP. దయచేసి మళ్లీ ప్రయత్నించండి.',
profileComplete: 'ప్రొఫైల్ విజయవంతంగా పూర్తైంది!',
joiningPlatform: 'ప్లాట్‌ఫామ్‌లో చేరుతున్నారు...'

    },
    

    
  };

  const currentTranslations = translations[selectedLanguage] || translations.en;

  const initializeRecaptcha = async (): Promise<RecaptchaVerifier> => {
    if (!appVerifier) {
      const verifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
        'size': 'invisible',
        'callback': (_response: any) => {
          // reCAPTCHA solved
        },
        'expired-callback': () => {
          setConfirmationResult(null);
        }
      });
      await verifier.render();
      setAppVerifier(verifier);
      return verifier;
    }
    return appVerifier;
  };

  const handleSendOTP = async (): Promise<void> => {
    if (phoneNumber.length !== 10) {
      setError('Please enter a valid 10-digit phone number');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const verifier = await initializeRecaptcha();
      const formattedPhoneNumber = `+91${phoneNumber}`;
      
      const result = await signInWithPhoneNumber(auth, formattedPhoneNumber, verifier);
      setConfirmationResult(result);
      setCurrentStep('otp');
      setError('');
    } catch (err: any) {
      setError(err.message || 'Failed to send OTP. Please check the phone number and try again.');
      console.error(err);
      
      if (appVerifier) {
        appVerifier.clear();
        setAppVerifier(null);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOTP = async (): Promise<void> => {
    if (otp.length !== 6) {
      setError('Please enter a valid 6-digit OTP');
      return;
    }

    if (!confirmationResult) {
      setError('OTP not sent yet. Please request an OTP first.');
      return;
    }

    setLoading(true);
    setError('');

    try {
      await confirmationResult.confirm(otp);
      setCurrentStep('language');
      setError('');
    } catch (err: any) {
      setError(err.message || currentTranslations.invalidOTP);
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleLanguageSelect = (): void => {
    setCurrentStep('details');
  };

  const handleCompleteProfile = async (): Promise<void> => {
    if (!farmerName.trim() || !farmerLocation.trim()) {
      setError('Please fill in all required fields');
      return;
    }

    setLoading(true);
    setError('');

    try {
      // Simulate API call to save user data
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setCurrentStep('complete');
      
      // Complete the login process after showing success
      setTimeout(() => {
        const userData: UserData = {
          phoneNumber: `+91${phoneNumber}`,
          name: farmerName,
          location: farmerLocation,
          language: selectedLanguage
        };
        onLoginSuccess(userData);
      }, 2000);
    } catch (err: any) {
      setError('Failed to create profile. Please try again.');
      setLoading(false);
    }
  };

  const handleBack = (): void => {
    const steps: StepType[] = ['phone', 'otp', 'language', 'details', 'complete'];
    const currentIndex = steps.indexOf(currentStep);
    if (currentIndex > 0) {
      setCurrentStep(steps[currentIndex - 1]);
      setError('');
    } else {
      onBack();
    }
  };

  const renderPhoneStep = (): JSX.Element => (
    <div className="space-y-4">
      <div>
        <label htmlFor="phone-number" className="block text-sm font-medium text-gray-700 mb-2">
          {currentTranslations.phoneNumber}
        </label>
        <div className="relative rounded-lg shadow-sm">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <span className="text-gray-500 sm:text-sm">+91</span>
          </div>
          <input
            id="phone-number"
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, '').slice(0, 10))}
            className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500"
            placeholder={currentTranslations.enterPhone}
          />
        </div>
      </div>
      <button
        onClick={handleSendOTP}
        disabled={loading || phoneNumber.length !== 10}
        className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? (
          <Loader2 className="h-5 w-5 mr-2 animate-spin" />
        ) : (
          <Check className="h-5 w-5 mr-2" />
        )}
        {loading ? currentTranslations.loading : currentTranslations.getOTP}
      </button>
    </div>
  );

  const renderOTPStep = (): JSX.Element => (
    <div className="space-y-4">
      <div className="text-center">
        <p className="text-sm text-gray-600 mb-4">
          {currentTranslations.otpSent}: +91{phoneNumber}
        </p>
      </div>
      <div>
        <label htmlFor="otp" className="block text-sm font-medium text-gray-700 mb-2">
          OTP
        </label>
        <div className="relative rounded-lg shadow-sm">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Lock className="h-5 w-5 text-gray-400" />
          </div>
          <input
            id="otp"
            type="number"
            value={otp}
            onChange={(e) => setOtp(e.target.value.slice(0, 6))}
            className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500"
            placeholder={currentTranslations.enterOTP}
          />
        </div>
      </div>
      <button
        onClick={handleVerifyOTP}
        disabled={loading || otp.length !== 6}
        className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? (
          <Loader2 className="h-5 w-5 mr-2 animate-spin" />
        ) : (
          <Check className="h-5 w-5 mr-2" />
        )}
        {loading ? currentTranslations.loading : currentTranslations.verifyOTP}
      </button>
    </div>
  );

  const renderLanguageStep = (): JSX.Element => (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-center text-gray-900 mb-4">
        <Globe className="h-6 w-6 inline-block mr-2" />
        {currentTranslations.selectLanguage}
      </h3>
      <div className="grid grid-cols-1 gap-3">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => setSelectedLanguage(lang.code)}
            className={`p-4 rounded-lg border-2 text-left transition-all ${
              selectedLanguage === lang.code
                ? 'border-green-500 bg-green-50'
                : 'border-gray-200 hover:border-gray-300'
            }`}
          >
            <div className="font-medium">{lang.native}</div>
            <div className="text-sm text-gray-500">{lang.name}</div>
          </button>
        ))}
      </div>
      <button
        onClick={handleLanguageSelect}
        className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
      >
        <Check className="h-5 w-5 mr-2" />
        {currentTranslations.continue}
      </button>
    </div>
  );

  const renderDetailsStep = (): JSX.Element => (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-center text-gray-900 mb-4">
        <User className="h-6 w-6 inline-block mr-2" />
        {currentTranslations.farmerDetails}
      </h3>
      <div>
        <label htmlFor="farmer-name" className="block text-sm font-medium text-gray-700 mb-2">
          {currentTranslations.fullName}
        </label>
        <div className="relative rounded-lg shadow-sm">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <User className="h-5 w-5 text-gray-400" />
          </div>
          <input
            id="farmer-name"
            type="text"
            value={farmerName}
            onChange={(e) => setFarmerName(e.target.value)}
            className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500"
            placeholder={currentTranslations.enterName}
          />
        </div>
      </div>
      <div>
        <label htmlFor="farmer-location" className="block text-sm font-medium text-gray-700 mb-2">
          {currentTranslations.location}
        </label>
        <div className="relative rounded-lg shadow-sm">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <MapPin className="h-5 w-5 text-gray-400" />
          </div>
          <input
            id="farmer-location"
            type="text"
            value={farmerLocation}
            onChange={(e) => setFarmerLocation(e.target.value)}
            className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500"
            placeholder={currentTranslations.enterLocation}
          />
        </div>
      </div>
      <button
        onClick={handleCompleteProfile}
        disabled={loading || !farmerName.trim() || !farmerLocation.trim()}
        className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? (
          <Loader2 className="h-5 w-5 mr-2 animate-spin" />
        ) : (
          <Check className="h-5 w-5 mr-2" />
        )}
        {loading ? currentTranslations.loading : currentTranslations.completeProfile}
      </button>
    </div>
  );

  const renderCompleteStep = (): JSX.Element => (
    <div className="text-center space-y-4">
      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
        <Check className="h-8 w-8 text-green-600" />
      </div>
      <h3 className="text-lg font-semibold text-gray-900">{currentTranslations.profileComplete}</h3>
      <p className="text-gray-600">{currentTranslations.joiningPlatform}</p>
      <div className="flex justify-center">
        <Loader2 className="h-6 w-6 animate-spin text-green-600" />
      </div>
    </div>
  );

  const canGoBack = currentStep !== 'phone' && currentStep !== 'complete';

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-emerald-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-md w-full p-8 space-y-6">
        {canGoBack && (
          <button
            onClick={handleBack}
            className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ChevronLeft className="h-5 w-5 mr-1" />
            <span className="text-sm font-medium">{currentTranslations.back}</span>
          </button>
        )}

        <div className="flex items-center justify-center space-x-3 mb-6">
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-2 rounded-lg">
            <Leaf className="h-8 w-8 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-900">AgriGame</h1>
            <p className="text-sm text-gray-600">Dharti Rakshak Platform</p>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">{currentTranslations.welcome}</h2>
          <p className="text-gray-600 mt-2">{currentTranslations.subtitle}</p>
        </div>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg text-center">
            {error}
          </div>
        )}

        {currentStep === 'phone' && renderPhoneStep()}
        {currentStep === 'otp' && renderOTPStep()}
        {currentStep === 'language' && renderLanguageStep()}
        {currentStep === 'details' && renderDetailsStep()}
        {currentStep === 'complete' && renderCompleteStep()}

        {/* Progress indicator */}
        <div className="flex justify-center space-x-2 mt-6">
          {['phone', 'otp', 'language', 'details'].map((step, index) => (
            <div
              key={step}
              className={`w-2 h-2 rounded-full ${
                (['phone', 'otp', 'language', 'details'] as StepType[]).indexOf(currentStep) >= index
                  ? 'bg-green-500'
                  : 'bg-gray-300'
              }`}
            />
          ))}
        </div>

        <div id="recaptcha-container"></div>
      </div>
    </div>
  );
};

export default LoginPage;