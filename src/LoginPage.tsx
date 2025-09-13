import React, { useState, useEffect } from 'react';
import { ChevronLeft, Check, Lock, Leaf, Loader2 } from 'lucide-react';
import { RecaptchaVerifier, signInWithPhoneNumber, ConfirmationResult } from 'firebase/auth';
import { auth } from './firebase';
import { useLanguage } from './LanguageContext';

interface LoginPageProps {
  onBack: () => void;
  onLoginSuccess: () => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onBack, onLoginSuccess }) => {
  const { t } = useLanguage();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [confirmationResult, setConfirmationResult] = useState<ConfirmationResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [appVerifier, setAppVerifier] = useState<RecaptchaVerifier | null>(null);

  useEffect(() => {
    // Initialize reCAPTCHA verifier when the component mounts
    if (!appVerifier) {
      const verifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
        'size': 'invisible',
        'callback': (_response: any) => {
          // reCAPTCHA solved, you can now send the OTP
        },
        'expired-callback': () => {
          // reCAPTCHA expired.
          setConfirmationResult(null);
        }
      });
      verifier.render();
      setAppVerifier(verifier);
    }
  }, [appVerifier]);

  const handleSendOtp = async () => {
    setError(null);
    setLoading(true);

    if (!appVerifier) {
      setError("reCAPTCHA not ready. Please refresh the page.");
      setLoading(false);
      return;
    }

    try {
      // Firebase phone sign-in requires E.164 format (e.g., +919876543210)
      const formattedPhoneNumber = `+91${phoneNumber}`; 
      
      const result = await signInWithPhoneNumber(auth, formattedPhoneNumber, appVerifier);
      setConfirmationResult(result);
      alert(t.login.otpSent);
    } catch (err: any) {
      setError(err.message || 'Failed to send OTP. Please check the phone number and try again.');
      console.error(err);
      // Reset reCAPTCHA if there's an error
      if (appVerifier) {
        appVerifier.clear();
        setAppVerifier(null); // Re-initialize the verifier
      }
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async () => {
    setError(null);
    setLoading(true);

    if (!confirmationResult) {
      setError("OTP not sent yet. Please request an OTP first.");
      setLoading(false);
      return;
    }

    try {
      await confirmationResult.confirm(otp);
      onLoginSuccess();
    } catch (err: any) {
      setError(err.message || 'Invalid OTP. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-emerald-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-md w-full p-8 space-y-6">
        <button onClick={onBack} className="flex items-center text-gray-600 hover:text-gray-900 transition-colors">
          <ChevronLeft className="h-5 w-5 mr-1" />
          <span className="text-sm font-medium">{t.common.back}</span>
        </button>
        <div className="flex items-center justify-center space-x-3 mb-6">
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-2 rounded-lg">
            <Leaf className="h-8 w-8 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-900">{t.header.appName}</h1>
            <p className="text-sm text-gray-600">{t.header.subtitle}</p>
          </div>
        </div>
        <h2 className="text-2xl font-bold text-center text-gray-900">{t.login.welcome}</h2>
        <p className="text-center text-gray-600">
          {t.login.subtitle}
        </p>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg relative text-center" role="alert">
            <span className="block sm:inline">{error}</span>
          </div>
        )}

        {!confirmationResult ? (
          <div className="space-y-4">
            <div>
              <label htmlFor="phone-number" className="sr-only">{t.login.phoneNumber}</label>
              <div className="relative rounded-lg shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="text-gray-500 sm:text-sm">+91</span>
                </div>
                <input
                  id="phone-number"
                  name="phone-number"
                  type="tel"
                  autoComplete="tel"
                  required
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                  placeholder={t.login.enterPhone}
                />
              </div>
            </div>
            <button
              type="button"
              onClick={handleSendOtp}
              disabled={loading || phoneNumber.length !== 10}
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <Loader2 className="h-5 w-5 mr-2 animate-spin" />
              ) : (
                <Check className="h-5 w-5 mr-2" />
              )}
              {loading ? t.common.loading : t.login.getOTP}
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            <div>
              <label htmlFor="otp" className="sr-only">OTP</label>
              <div className="relative rounded-lg shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </div>
                <input
                  id="otp"
                  name="otp"
                  type="number"
                  autoComplete="one-time-code"
                  required
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                  placeholder={t.login.enterOTP}
                />
              </div>
            </div>
            <button
              type="button"
              onClick={handleLogin}
              disabled={loading || otp.length < 6}
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <Loader2 className="h-5 w-5 mr-2 animate-spin" />
              ) : (
                <Check className="h-5 w-5 mr-2" />
              )}
              {loading ? t.common.loading : t.login.verifyOTP}
            </button>
          </div>
        )}
        <div id="recaptcha-container"></div>
      </div>
    </div>
  );
};

export default LoginPage;