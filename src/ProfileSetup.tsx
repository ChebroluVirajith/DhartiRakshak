import React, { useState } from 'react';
import { Leaf, User, MapPin, Save } from 'lucide-react';

interface ProfileSetupProps {
  onProfileComplete: (name: string, location: string) => void;
}

const ProfileSetup: React.FC<ProfileSetupProps> = ({ onProfileComplete }) => {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');

  const handleSaveProfile = () => {
    // In a real application, you would save this data to a database
    console.log(`Profile saved: Name - ${name}, Location - ${location}`);
    onProfileComplete(name, location);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-emerald-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-md w-full p-8 space-y-6">
        <div className="flex items-center justify-center space-x-3 mb-6">
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-2 rounded-lg">
            <Leaf className="h-8 w-8 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-900">AgriGame</h1>
            <p className="text-sm text-gray-600">Dharti Rakshak Platform</p>
          </div>
        </div>
        <h2 className="text-2xl font-bold text-center text-gray-900">Complete Your Profile</h2>
        <p className="text-center text-gray-600">
          Just a couple more details to get started on your journey.
        </p>

        <div className="space-y-4">
          <div>
            <label htmlFor="name" className="sr-only">Full Name</label>
            <div className="relative rounded-lg shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <User className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </div>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                placeholder="Enter your full name"
              />
            </div>
          </div>
          <div>
            <label htmlFor="location" className="sr-only">Location</label>
            <div className="relative rounded-lg shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <MapPin className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </div>
              <input
                id="location"
                name="location"
                type="text"
                autoComplete="address-level2"
                required
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                placeholder="e.g., Satara, Maharashtra"
              />
            </div>
          </div>
          <button
            type="button"
            onClick={handleSaveProfile}
            disabled={!name || !location}
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Save className="h-5 w-5 mr-2" />
            Save Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileSetup;