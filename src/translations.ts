export type Language = 'en' | 'te' | 'hi';

export const languages: Record<Language, { name: string; nativeName: string; flag: string }> = {
  en: { name: 'English', nativeName: 'English', flag: '🇺🇸' },
  te: { name: 'Telugu', nativeName: 'తెలుగు', flag: '🇮🇳' },
  hi: { name: 'Hindi', nativeName: 'हिंदी', flag: '🇮🇳' }
};

export interface Translations {
  // Common
  common: {
    back: string;
    next: string;
    save: string;
    cancel: string;
    continue: string;
    loading: string;
    error: string;
    success: string;
    close: string;
    yes: string;
    no: string;
    logout: string;
  };

  // Language Selection
  languageSelection: {
    title: string;
    subtitle: string;
    selectLanguage: string;
    confirmSelection: string;
  };

  // Login Page
  login: {
    welcome: string;
    subtitle: string;
    phoneNumber: string;
    enterPhone: string;
    getOTP: string;
    enterOTP: string;
    verifyOTP: string;
    resendOTP: string;
    invalidOTP: string;
    otpSent: string;
  };

  // Profile Setup
  profile: {
    completeProfile: string;
    profileSubtitle: string;
    fullName: string;
    enterName: string;
    location: string;
    enterLocation: string;
    saveProfile: string;
  };

  // Header
  header: {
    appName: string;
    subtitle: string;
    credits: string;
    dayStreak: string;
    signupLogin: string;
    aiOracle: string;
    locationNotSet: string;
  };

  // Navigation
  navigation: {
    dashboard: string;
    myQuests: string;
    myGuild: string;
    leaderboard: string;
    community: string;
    marketplace: string;
  };

  // Dashboard
  dashboard: {
    dailyRiddle: string;
    dailyChallenge: string;
    bossChallenge: string;
    farmAuraHealth: string;
    levelTitle: string;
    greenCredits: string;
    guildRank: string;
    farmAura: string;
    satelliteView: string;
    healthIndicators: string;
    improvementTips: string;
    recentAchievements: string;
    lastUpdated: string;
    farmersParticipating: string;
    timeLeft: string;
    complete: string;
    reward: string;
    vegetationIndex: string;
    soilMoisture: string;
    cropDensity: string;
    excellent: string;
    good: string;
    high: string;
    poweredBySatelliteData: string;
    spendInMandi: string;
    totalPoints: string;
  };

  // Quests
  quests: {
    myQuests: string;
    updatedDaily: string;
    switchToBioPesticides: string;
    guildChallenge: string;
    defeatChemicalAsur: string;
    compostingChallenge: string;
    pestManagement: string;
    waterManagement: string;
    communityChallenge: string;
    soilHealth: string;
    easy: string;
    medium: string;
    hard: string;
    individual: string;
    guild: string;
    boss: string;
    points: string;
    due: string;
    completed: string;
    titles: {
      '1': string;
      '2': string;
      '3': string;
      '4': string;
    };
  };

  // Guild
  guild: {
    currentGuildChallenge: string;
    activeMembers: string;
    farmersUnited: string;
    guildLevel: string;
    collectiveAchievements: string;
    challengesWon: string;
    thisSeason: string;
    guildChat: string;
    openGuildChat: string;
    members: string;
    level: string;
    rank: string;
    progress: string;
    chatMessages: {
      message1: string;
      time1: string;
      message2: string;
      time2: string;
      message3: string;
      time3: string;
    };
  };

  // Leaderboard
  leaderboard: {
    adarshKisanLeaderboard: string;
    maharashtraRegion: string;
    adarshKisanChallenge: string;
    modelFarmerTitle: string;
    panchayatLeague: string;
    guildRankings: {
      milletMavericks: string;
      waterWarriors: string;
      basmatiBrigade: string;
      greenGuardians: string;
    };
    you: string;
    yourGuild: string;
    guildPoints: string;
  };

  // Community
  community: {
    knowledgeBarteting: string;
    askForHelp: string;
    activeHelpRequests: string;
    topKnowledgeGurus: string;
    communityImpact: string;
    dhartiRakshakMovement: string;
    guruPoints: string;
    solutions: string;
    offerSolution: string;
    acresConverted: string;
    reductionChemicalUsage: string;
    activeDhartiRakshaks: string;
    bossBattlesWon: string;
    solutionsOffered: string;
    helpRequests: {
      whiteFliesAttack: string;
      soilPHAlkaline: string;
      intercroppingSugarcane: string;
    };
    hoursAgo: string;
    dayAgo: string;
  };

  // Marketplace
  marketplace: {
    greenCreditsMandi: string;
    creditsAvailable: string;
    realWorldBenefits: string;
    knowledgeUnlocks: string;
    virtualRewards: string;
    governmentSchemeEligibility: string;
    redeem: string;
    unlock: string;
    purchase: string;
    eligible: string;
    almostEligible: string;
    inProgress: string;
    organicFertilizerDiscount: string;
    seedQualityUpgrade: string;
    loanInterestReduction: string;
    advancedIPMMasterclass: string;
    soilTestingGuide: string;
    marketPricePredictions: string;
    premiumAvatarFrame: string;
    farmDecorationPack: string;
    customGuildBadge: string;
    solarPumpSubsidy: string;
    organicCertificationSupport: string;
    dripIrrigationSubsidy: string;
    cropInsurancePremiumReduction: string;
    credits: string;
    organicFertilizerDiscountDesc: string;
    seedQualityUpgradeDesc: string;
    loanInterestReductionDesc: string;
    advancedIPMMasterclassDesc: string;
    soilTestingGuideDesc: string;
    marketPricePredictionsDesc: string;
    premiumAvatarFrameDesc: string;
    farmDecorationPackDesc: string;
    customGuildBadgeDesc: string;
    sustainabilityScoreReq: string;
    organicPracticesReq: string;
    waterConservationScoreReq: string;
    riskManagementScoreReq: string;
  };

  // AI Oracle
  aiOracle: {
    krishiRishiAIOracle: string;
    plantDoctor: string;
    plantDoctorDescription: string;
    takePhoto: string;
    cropAdvisor: string;
    cropAdvisorDescription: string;
    getAdvice: string;
  };

  // Farmer Titles
  titles: {
    dhartiRakshak: string;
    mahaDhartiRakshak: string;
    prakritiSevak: string;
    jalRakshak: string;
    bhoomiMata: string;
    pestBuster: string;
    waterGuardian: string;
    organicPioneer: string;
    waterSaver: string;
    soilGuardian: string;
    bioPestController: string;
    asurSlayer: string;
    knowledgeKeeper: string;
  };

  // Quest Descriptions
  questDescriptions: {
    bioPesticidesDesc: string;
    villageDripSystemDesc: string;
    chemicalAsurDesc: string;
    compostingDesc: string;
  };

  // Categories
  categories: {
    pestManagement: string;
    waterManagement: string;
    communityChallenge: string;
    soilHealth: string;
    organicPestControl: string;
    soilManagement: string;
    waterConservation: string;
  };

  // Daily Riddle
  dailyRiddle: {
    question: string;
    options: string[];
    reward: string;
  };

  // Boss Challenge
  bossChallenge: {
    chemicalAsur: string;
    chemicalAsurDesc: string;
    pestMasterBadge: string;
    days: string;
  };

  // Improvement Tips
  improvementTips: {
    addOrganicMulch: string;
    considerIntercropping: string;
    optimizeIrrigation: string;
  };

  // Help Requests
  helpRequests: {
    whiteFliesAttack: string;
    soilPHAlkaline: string;
    intercroppingSugarcane: string;
    hoursAgo: string;
    dayAgo: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    common: {
      back: 'Back',
      next: 'Next',
      save: 'Save',
      cancel: 'Cancel',
      continue: 'Continue',
      loading: 'Loading...',
      error: 'Error',
      success: 'Success',
      close: 'Close',
      yes: 'Yes',
      no: 'No',
      logout: 'Logout',
    },
    languageSelection: {
      title: 'Choose Your Language',
      subtitle: 'Select your preferred language to continue',
      selectLanguage: 'Select Language',
      confirmSelection: 'Confirm Selection',
    },
    login: {
      welcome: 'Welcome to AgriGame',
      subtitle: 'Join the Dharti Rakshak movement',
      phoneNumber: 'Phone Number',
      enterPhone: 'Enter your phone number',
      getOTP: 'Get OTP',
      enterOTP: 'Enter OTP',
      verifyOTP: 'Verify OTP',
      resendOTP: 'Resend OTP',
      invalidOTP: 'Invalid OTP. Please try again.',
      otpSent: 'OTP sent successfully!',
    },
    profile: {
      completeProfile: 'Complete Your Profile',
      profileSubtitle: 'Just a couple more details to get started on your journey.',
      fullName: 'Full Name',
      enterName: 'Enter your full name',
      location: 'Location',
      enterLocation: 'e.g., Satara, Maharashtra',
      saveProfile: 'Save Profile',
    },
    header: {
      appName: 'AgriGame',
      subtitle: 'Dharti Rakshak Platform',
      credits: 'Credits',
      dayStreak: 'Day Streak',
      signupLogin: 'Signup/Login',
      aiOracle: 'Krishi Rishi',
      locationNotSet: 'Location not set',
    },
    navigation: {
      dashboard: 'Dashboard',
      myQuests: 'My Quests',
      myGuild: 'My Guild',
      leaderboard: 'Leaderboard',
      community: 'Community',
      marketplace: 'Mandi',
    },
    dashboard: {
      dailyRiddle: 'Prakriti Paheli (Nature\'s Riddle)',
      dailyChallenge: 'Daily Challenge',
      bossChallenge: 'Boss Battle',
      farmAuraHealth: 'Farm Aura Health',
      levelTitle: 'Level & Title',
      greenCredits: 'Green Credits',
      guildRank: 'Guild Rank',
      farmAura: 'Your Farm\'s Aura (Satellite View)',
      satelliteView: 'Satellite View',
      healthIndicators: 'Health Indicators',
      improvementTips: 'Improvement Tips',
      recentAchievements: 'Recent Achievements & Titles',
      lastUpdated: 'Last updated',
      farmersParticipating: 'farmers participating',
      timeLeft: 'left',
      complete: 'Complete',
      reward: 'Reward',
      vegetationIndex: 'Vegetation Index',
      soilMoisture: 'Soil Moisture',
      cropDensity: 'Crop Density',
      excellent: 'Excellent',
      good: 'Good',
      high: 'High',
      poweredBySatelliteData: 'Powered by satellite data',
      spendInMandi: 'Spend in Mandi',
      totalPoints: 'total points',
    },
    quests: {
      myQuests: 'My Quests',
      updatedDaily: 'Updated daily',
      switchToBioPesticides: 'Switch to Bio-Pesticides',
      guildChallenge: 'Guild Challenge: Village Drip System',
      defeatChemicalAsur: 'Defeat the Chemical Asur',
      compostingChallenge: 'Composting Challenge',
      pestManagement: 'Pest Management',
      waterManagement: 'Water Management',
      communityChallenge: 'Community Challenge',
      soilHealth: 'Soil Health',
      easy: 'Easy',
      medium: 'Medium',
      hard: 'Hard',
      individual: 'Solo',
      guild: 'Guild',
      boss: 'Boss',
      points: 'points',
      due: 'Due',
      completed: 'Completed',
      titles: {
        '1': 'Switch to Bio-Pesticides',
        '2': 'Guild Challenge: Village Drip System',
        '3': 'Defeat the Chemical Asur',
        '4': 'Composting Challenge',
      },
    },
    guild: {
      currentGuildChallenge: 'Current Guild Challenge',
      activeMembers: 'Active Members',
      farmersUnited: 'farmers united',
      guildLevel: 'Guild Level',
      collectiveAchievements: 'collective achievements',
      challengesWon: 'Challenges Won',
      thisSeason: 'this season',
      guildChat: 'Guild Chat',
      openGuildChat: 'Open Guild Chat',
      members: 'members',
      level: 'Level',
      rank: 'Rank',
      progress: 'Progress',
      chatMessages: {
        message1: 'Just installed drip system on 2 acres! 💪',
        time1: '2h ago',
        message2: 'Great work! I can help with the next plot tomorrow',
        time2: '1h ago',
        message3: 'Sharing my neem oil recipe in the knowledge base',
        time3: '30m ago',
      },
    },
    leaderboard: {
      adarshKisanLeaderboard: 'Adarsh Kisan Leaderboard',
      maharashtraRegion: 'Maharashtra Region',
      adarshKisanChallenge: 'Adarsh Kisan Challenge',
      modelFarmerTitle: 'Compete for the title of Model Farmer in your region',
      panchayatLeague: 'Panchayat League - Guild Rankings',
      guildRankings: {
        milletMavericks: 'Millet Mavericks',
        waterWarriors: 'Water Warriors',
        basmatiBrigade: 'Basmati Brigade',
        greenGuardians: 'Green Guardians',
      },
      you: 'You',
      yourGuild: 'Your Guild',
      guildPoints: 'guild points',
    },
    community: {
      knowledgeBarteting: 'Knowledge Bartering Hub',
      askForHelp: 'Ask for Help',
      activeHelpRequests: 'Active Help Requests',
      topKnowledgeGurus: 'Top Knowledge Gurus',
      communityImpact: 'Community Impact - Dharti Rakshak Movement',
      dhartiRakshakMovement: 'Dharti Rakshak Movement',
      guruPoints: 'Guru Points',
      solutions: 'Solutions',
      offerSolution: 'Offer Solution',
      acresConverted: 'Acres converted to sustainable farming',
      reductionChemicalUsage: 'Reduction in chemical usage',
      activeDhartiRakshaks: 'Active Dharti Rakshaks',
      bossBattlesWon: 'Boss battles won',
      solutionsOffered: 'solutions offered',
      helpRequests: {
        whiteFliesAttack: 'White flies attacking my tomato crop',
        soilPHAlkaline: 'Soil pH too alkaline, need organic solutions',
        intercroppingSugarcane: 'Best intercropping options for sugarcane',
      },
      hoursAgo: 'hours ago',
      dayAgo: 'day ago',
    },
    marketplace: {
      greenCreditsMandi: 'Green Credits Mandi',
      creditsAvailable: 'Credits Available',
      realWorldBenefits: 'Real-World Benefits',
      knowledgeUnlocks: 'Knowledge Unlocks',
      virtualRewards: 'Virtual Rewards',
      governmentSchemeEligibility: 'Government Scheme Eligibility',
      redeem: 'Redeem',
      unlock: 'Unlock',
      purchase: 'Purchase',
      eligible: 'Eligible',
      almostEligible: 'Almost Eligible',
      inProgress: 'In Progress',
      organicFertilizerDiscount: 'Organic Fertilizer Discount',
      seedQualityUpgrade: 'Seed Quality Upgrade',
      loanInterestReduction: 'Loan Interest Reduction',
      advancedIPMMasterclass: 'Advanced IPM Masterclass',
      soilTestingGuide: 'Soil Testing Guide',
      marketPricePredictions: 'Market Price Predictions',
      premiumAvatarFrame: 'Premium Avatar Frame',
      farmDecorationPack: 'Farm Decoration Pack',
      customGuildBadge: 'Custom Guild Badge',
      solarPumpSubsidy: 'Solar Pump Subsidy',
      organicCertificationSupport: 'Organic Certification Support',
      dripIrrigationSubsidy: 'Drip Irrigation Subsidy',
      cropInsurancePremiumReduction: 'Crop Insurance Premium Reduction',
      credits: 'Credits',
      organicFertilizerDiscountDesc: '20% off next purchase',
      seedQualityUpgradeDesc: 'Premium seeds at regular price',
      loanInterestReductionDesc: '0.5% reduction for 6 months',
      advancedIPMMasterclassDesc: 'Expert video series',
      soilTestingGuideDesc: 'DIY testing methods',
      marketPricePredictionsDesc: 'AI-powered insights',
      premiumAvatarFrameDesc: 'Golden border for profile',
      farmDecorationPackDesc: 'Beautify your virtual farm',
      customGuildBadgeDesc: 'Design your guild emblem',
      sustainabilityScoreReq: 'Sustainability Score: 80+',
      organicPracticesReq: 'Organic Practices: 90%+',
      waterConservationScoreReq: 'Water Conservation Score: 70+',
      riskManagementScoreReq: 'Risk Management Score: 75%+',
    },
    aiOracle: {
      krishiRishiAIOracle: 'Krishi Rishi AI Oracle',
      plantDoctor: 'Plant Doctor',
      plantDoctorDescription: 'Snap a photo of diseased plants, pests, or weeds for instant identification and treatment quests.',
      takePhoto: 'Take Photo',
      cropAdvisor: 'Crop Advisor',
      cropAdvisorDescription: 'Get personalized farming advice based on your location, season, and crop type.',
      getAdvice: 'Get Advice',
    },
    titles: {
      dhartiRakshak: 'Dharti Rakshak',
      mahaDhartiRakshak: 'Maha Dharti Rakshak',
      prakritiSevak: 'Prakriti Sevak',
      jalRakshak: 'Jal Rakshak',
      bhoomiMata: 'Bhoomi Mata',
      pestBuster: 'Pest-Buster',
      waterGuardian: 'Water Guardian',
      organicPioneer: 'Organic Pioneer',
      waterSaver: 'Water Saver',
      soilGuardian: 'Soil Guardian',
      bioPestController: 'Bio Pest Controller',
      asurSlayer: 'Asur Slayer',
      knowledgeKeeper: 'Knowledge Keeper',
    },
    questDescriptions: {
      bioPesticidesDesc: 'Replace chemical pesticides with neem oil and organic alternatives for 3 weeks',
      villageDripSystemDesc: 'Work with Basmati Brigade to install drip irrigation across 50 acres',
      chemicalAsurDesc: 'Join the community boss battle against excessive pesticide use',
      compostingDesc: 'Create organic compost using farm waste and kitchen scraps',
    },
    categories: {
      pestManagement: 'Pest Management',
      waterManagement: 'Water Management',
      communityChallenge: 'Community Challenge',
      soilHealth: 'Soil Health',
      organicPestControl: 'Organic Pest Control',
      soilManagement: 'Soil Management',
      waterConservation: 'Water Conservation',
    },
    dailyRiddle: {
      question: 'Which traditional companion plant helps repel aphids from tomatoes?',
      options: ['Marigold', 'Mint', 'Basil', 'All of the above'],
      reward: '25 Green Credits + Knowledge Keeper Badge',
    },
    bossChallenge: {
      chemicalAsur: 'Chemical Asur',
      chemicalAsurDesc: 'Unite to defeat excessive pesticide use in your region',
      pestMasterBadge: 'Pest-Master Badge + 500 Green Credits',
      days: 'days',
    },
    improvementTips: {
      addOrganicMulch: 'Add organic mulch to boost soil health',
      considerIntercropping: 'Consider intercropping with legumes',
      optimizeIrrigation: 'Optimize irrigation timing',
    },
    helpRequests: {
      whiteFliesAttack: 'White flies attacking my tomato crop',
      soilPHAlkaline: 'Soil pH too alkaline, need organic solutions',
      intercroppingSugarcane: 'Best intercropping options for sugarcane',
      hoursAgo: 'hours ago',
      dayAgo: 'day ago',
    },
  },
  te: {
    common: {
      back: 'వెనుకకు',
      next: 'తరువాత',
      save: 'సేవ్ చేయండి',
      cancel: 'రద్దు చేయండి',
      continue: 'కొనసాగండి',
      loading: 'లోడవుతోంది...',
      error: 'లోపం',
      success: 'విజయం',
      close: 'మూసివేయండి',
      yes: 'అవును',
      no: 'లేదు',
      logout: 'లాగ్ అవుట్',
    },
    languageSelection: {
      title: 'మీ భాషను ఎంచుకోండి',
      subtitle: 'కొనసాగించడానికి మీకు అనుకూలమైన భాషను ఎంచుకోండి',
      selectLanguage: 'భాషను ఎంచుకోండి',
      confirmSelection: 'ఎంపికను ధృవీకరించండి',
    },
    login: {
      welcome: 'ఏగ్రిగేమ్‌కు స్వాగతం',
      subtitle: 'ధర్తి రక్షక ఉద్యమంలో చేరండి',
      phoneNumber: 'ఫోన్ నంబర్',
      enterPhone: 'మీ 10 అంకెల మొబైల్ నంబర్‌ని నమోదు చేయండి',
      getOTP: 'OTP పొందండి',
      enterOTP: 'OTP నమోదు చేయండి',
      verifyOTP: 'OTP ధృవీకరించండి',
      resendOTP: 'OTP మళ్లీ పంపండి',
      invalidOTP: 'తప్పు OTP. దయచేసి మళ్లీ ప్రయత్నించండి.',
      otpSent: 'OTP విజయవంతంగా పంపబడింది!',
    },
    profile: {
      completeProfile: 'మీ ప్రొఫైల్‌ను పూర్తి చేయండి',
      profileSubtitle: 'మీ ప్రయాణాన్ని ప్రారంభించడానికి మరికొన్ని వివరాలు.',
      fullName: 'పూర్తి పేరు',
      enterName: 'మీ పూర్తి పేరు నమోదు చేయండి',
      location: 'స్థానం',
      enterLocation: 'ఉదా., సతారా, మహారాష్ట్ర',
      saveProfile: 'ప్రొఫైల్ సేవ్ చేయండి',
    },
    header: {
      appName: 'అగ్రిగేమ్',
      subtitle: 'ధర్తి రక్షక వేదిక',
      credits: 'క్రెడిట్‌లు',
      dayStreak: 'రోజుల వరుస',
      signupLogin: 'సైన్‌అప్/లాగిన్',
      aiOracle: 'కృషి ఋషి',
      locationNotSet: 'స్థానం సెట్ చేయబడలేదు',
    },
    navigation: {
      dashboard: 'డాష్‌బోర్డ్',
      myQuests: 'నా క్వెస్ట్‌లు',
      myGuild: 'నా గిల్డ్',
      leaderboard: 'లీడర్‌బోర్డ్',
      community: 'కమ్యూనిటీ',
      marketplace: 'మార్కెట్',
    },
    dashboard: {
      dailyRiddle: 'ప్రకృతి పహేళీ',
      dailyChallenge: 'రోజువారీ సవాలు',
      bossChallenge: 'బాస్ యుద్ధం',
      farmAuraHealth: 'వ్యవసాయ ప్రభావ ఆరోగ్యం',
      levelTitle: 'స్థాయి మరియు బిరుదు',
      greenCredits: 'గ్రీన్ క్రెడిట్‌లు',
      guildRank: 'గిల్డ్ ర్యాంక్',
      farmAura: 'మీ వ్యవసాయ ప్రభావం (ఉపగ్రహ దృశ్యం)',
      satelliteView: 'ఉపగ్రహ దృశ్యం',
      healthIndicators: 'ఆరోగ్య సూచికలు',
      improvementTips: 'మెరుగుదల చిట్కాలు',
      recentAchievements: 'ఇటీవలి విజయాలు మరియు బిరుదులు',
      lastUpdated: 'చివరిసారి నవీకరించబడింది',
      farmersParticipating: 'రైతులు పాల్గొనుతున్నారు',
      timeLeft: 'మిగిలింది',
      complete: 'పూర్తి',
      reward: 'బహుమతి',
      vegetationIndex: 'వృక్షసంపద సూచిక',
      soilMoisture: 'మట్టి తేమ',
      cropDensity: 'పంట సాంద్రత',
      excellent: 'అద్భుతం',
      good: 'మంచిది',
      high: 'అధికం',
      poweredBySatelliteData: 'ఉపగ్రహ డేటా ద్వారా అందించబడింది',
      spendInMandi: 'మార్కెట్‌లో ఖర్చు చేయండి',
      totalPoints: 'మొత్తం పాయింట్లు',
    },
    quests: {
      myQuests: 'నా క్వెస్ట్‌లు',
      updatedDaily: 'రోజువారీ నవీకరణ',
      switchToBioPesticides: 'జీవ కీటనాశకాలకు మారండి',
      guildChallenge: 'గిల్డ్ సవాలు: గ్రామ చుక్కల వ్యవస్థ',
      defeatChemicalAsur: 'రసాయన అసురుడిని ఓడించండి',
      compostingChallenge: 'కంపోస్ట్ సవాలు',
      pestManagement: 'కీటక నిర్వహణ',
      waterManagement: 'నీటి నిర్వహణ',
      communityChallenge: 'కమ్యూనిటీ సవాలు',
      soilHealth: 'మట్టి ఆరోగ్యం',
      easy: 'సులభం',
      medium: 'మధ్యస్థం',
      hard: 'కఠినం',
      individual: 'వ్యక్తిగతం',
      guild: 'గిల్డ్',
      boss: 'బాస్',
      points: 'పాయింట్లు',
      due: 'గడువు',
      completed: 'పూర్తయింది',
      titles: {
        '1': 'జీవ కీటనాశకాలకు మారండి',
        '2': 'గిల్డ్ సవాలు: గ్రామ చుక్కల వ్యవస్థ',
        '3': 'రసాయన అసురుడిని ఓడించండి',
        '4': 'కంపోస్ట్ సవాలు',
      },
    },
    guild: {
      currentGuildChallenge: 'ప్రస్తుత గిల్డ్ సవాలు',
      activeMembers: 'క్రియాశీల సభ్యులు',
      farmersUnited: 'రైతులు ఏకమయ్యారు',
      guildLevel: 'గిల్డ్ స్థాయి',
      collectiveAchievements: 'సామూహిక విజయాలు',
      challengesWon: 'గెలిచిన సవాళ్లు',
      thisSeason: 'ఈ సీజన్',
      guildChat: 'గిల్డ్ చాట్',
      openGuildChat: 'గిల్డ్ చాట్ తెరవండి',
      members: 'సభ్యులు',
      level: 'స్థాయి',
      rank: 'ర్యాంక్',
      progress: 'పురోగతి',
      chatMessages: {
        message1: 'జస్ట్ డ్రిప్ సిస్టమ్ 2 ఎకరాలలో ఇన్‌స్టాల్ చేసాను! 💪',
        time1: '2గం క్రితం',
        message2: 'చాలా మంచి పని! నేను రేపు తర్వాతి ప్లాట్‌లో సహాయం చేయగలను',
        time2: '1గం క్రితం',
        message3: 'నా వేప నూనె రెసిపీని నాలెడ్జ్ బేస్‌లో పంచుకుంటున్నాను',
        time3: '30ని క్రితం',
      },
    },
    leaderboard: {
      adarshKisanLeaderboard: 'ఆదర్శ కిసాన్ లీడర్‌బోర్డ్',
      maharashtraRegion: 'మహారాష్ట్ర ప్రాంతం',
      adarshKisanChallenge: 'ఆదర్శ కిసాన్ సవాలు',
      modelFarmerTitle: 'మీ ప్రాంతంలో మోడల్ రైతు బిరుదు కోసం పోటీ పడండి',
      panchayatLeague: 'పంచాయతీ లీగ్ - గిల్డ్ ర్యాంకింగ్‌లు',
      guildRankings: {
        milletMavericks: 'Millet Mavericks',
        waterWarriors: 'Water Warriors',
        basmatiBrigade: 'Basmati Brigade',
        greenGuardians: 'Green Guardians',
      },
      you: 'మీరు',
      yourGuild: 'మీ గిల్డ్',
      guildPoints: 'గిల్డ్ పాయింట్లు',
    },
    community: {
      knowledgeBarteting: 'జ్ఞాన మార్పిడి కేంద్రం',
      askForHelp: 'సహాయం కోరండి',
      activeHelpRequests: 'క్రియాశీల సహాయ అభ్యర్థనలు',
      topKnowledgeGurus: 'అగ్ర జ్ఞాన గురువులు',
      communityImpact: 'కమ్యూనిటీ ప్రభావం - ధర్తి రక్షక ఉద్యమం',
      dhartiRakshakMovement: 'ధర్తి రక్షక ఉద్యమం',
      guruPoints: 'గురు పాయింట్లు',
      solutions: 'పరిష్కారాలు',
      offerSolution: 'పరిష్కారం అందించండి',
      acresConverted: 'స్థిరమైన వ్యవసాయానికి మార్చబడిన ఎకరాలు',
      reductionChemicalUsage: 'రసాయన వాడకంలో తగ్గింపు',
      activeDhartiRakshaks: 'క్రియాశీల ధర్తి రక్షకులు',
      bossBattlesWon: 'గెలిచిన బాస్ యుద్ధాలు',
      solutionsOffered: 'అందించిన పరిష్కారాలు',
      helpRequests: {
        whiteFliesAttack: 'నా టమేటో పంటపై తెల్లని ఈగలు దాడి చేస్తున్నాయి',
        soilPHAlkaline: 'మట్టి pH చాలా క్షారంగా ఉంది, సేంద్రీయ పరిష్కారాలు కావాలి',
        intercroppingSugarcane: 'చెరకుకు అత్యుత్తమ మధ్యపంట ఎంపికలు',
      },
      hoursAgo: 'గంటల క్రితం',
      dayAgo: 'రోజు క్రితం',
    },
    marketplace: {
      greenCreditsMandi: 'గ్రీన్ క్రెడిట్‌ల మార్కెట్',
      creditsAvailable: 'అందుబాటులో ఉన్న క్రెడిట్‌లు',
      realWorldBenefits: 'వాస్తవ ప్రపంచ ప్రయోజనాలు',
      knowledgeUnlocks: 'జ్ఞాన అన్‌లాక్‌లు',
      virtualRewards: 'వర్చువల్ రివార్డ్‌లు',
      governmentSchemeEligibility: 'ప్రభుత్వ పథకం అర్హత',
      redeem: 'రీడీమ్ చేయండి',
      unlock: 'అన్‌లాక్ చేయండి',
      purchase: 'కొనుగోలు చేయండి',
      eligible: 'అర్హులు',
      almostEligible: 'దాదాపు అర్హులు',
      inProgress: 'ప్రగతిలో',
      organicFertilizerDiscount: 'సేంద్రీయ ఎరువుల డిస్కౌంట్',
      seedQualityUpgrade: 'విత్తన నాణ్యత అప్‌గ్రేడ్',
      loanInterestReduction: 'రుణ వడ్డీ తగ్గింపు',
      advancedIPMMasterclass: 'అధునాతన IPM మాస్టర్‌క్లాస్',
      soilTestingGuide: 'మట్టి పరీక్ష గైడ్',
      marketPricePredictions: 'మార్కెట్ ధర అంచనాలు',
      premiumAvatarFrame: 'ప్రీమియం అవతార్ ఫ్రేమ్',
      farmDecorationPack: 'వ్యవసాయ అలంకరణ ప్యాక్',
      customGuildBadge: 'అనుకూల గిల్డ్ బ్యాడ్జ్',
      solarPumpSubsidy: 'సోలార్ పంప్ సబ్సిడీ',
      organicCertificationSupport: 'సేంద్రీయ ధృవీకరణ మద్దతు',
      dripIrrigationSubsidy: 'చుక్కల నీటిపారుదల సబ్సిడీ',
      cropInsurancePremiumReduction: 'పంట భీమా ప్రీమియం తగ్గింపు',
      credits: 'క్రెడిట్‌లు',
      organicFertilizerDiscountDesc: 'తదుపరి కొనుగోలుపై 20% తగ్గింపు',
      seedQualityUpgradeDesc: 'సాధారణ ధరకే ప్రీమియం విత్తనాలు',
      loanInterestReductionDesc: '6 నెలలకు 0.5% తగ్గింపు',
      advancedIPMMasterclassDesc: 'నిపుణుల వీడియో సిరీస్',
      soilTestingGuideDesc: 'DIY పరీక్షా పద్ధతులు',
      marketPricePredictionsDesc: 'AI-ఆధారిత అంతర్దృష్టులు',
      premiumAvatarFrameDesc: 'ప్రొఫైల్‌కు గోల్డెన్ బోర్డర్',
      farmDecorationPackDesc: 'మీ వర్చువల్ వ్యవసాయ క్షేత్రాన్ని అందంగా మార్చండి',
      customGuildBadgeDesc: 'మీ గిల్డ్ చిహ్నాన్ని రూపొందించండి',
      sustainabilityScoreReq: 'సుస్థిరత స్కోర్: 80+',
      organicPracticesReq: 'సేంద్రీయ పద్ధతులు: 90%+',
      waterConservationScoreReq: 'నీటి సంరక్షణ స్కోర్: 70+',
      riskManagementScoreReq: 'రిస్క్ మేనేజ్‌మెంట్ స్కోర్: 75%+',
    },
    aiOracle: {
      krishiRishiAIOracle: 'కృషి ఋషి AI ఒరాకిల్',
      plantDoctor: 'మొక్క వైద్యుడు',
      plantDoctorDescription: 'వ్యాధిగ్రస్త మొక్కలు, కీటకాలు లేదా కలుపు మొక్కల ఫోటో తీసి తక్షణ గుర్తింపు మరియు చికిత్స క్వెస్ట్‌లను పొందండి.',
      takePhoto: 'ఫోటో తీయండి',
      cropAdvisor: 'పంట సలహాదారు',
      cropAdvisorDescription: 'మీ స్థానం, కాలం మరియు పంట రకం ఆధారంగా వ్యక్తిగతీకరించిన వ్యవసాయ సలహా పొందండి.',
      getAdvice: 'సలహా పొందండి',
    },
    titles: {
      dhartiRakshak: 'ధర్తి రక్షకుడు',
      mahaDhartiRakshak: 'మహా ధర్తి రక్షకుడు',
      prakritiSevak: 'ప్రకృతి సేవకుడు',
      jalRakshak: 'జల రక్షకుడు',
      bhoomiMata: 'భూమి మాత',
      pestBuster: 'కీటక విధ్వంసకుడు',
      waterGuardian: 'నీటి రక్షకుడు',
      organicPioneer: 'సేంద్రీయ అగ్రగామి',
      waterSaver: 'నీటి పొదుపుదారు',
      soilGuardian: 'మట్టి రక్షకుడు',
      bioPestController: 'జీవ కీటక నియంత్రకుడు',
      asurSlayer: 'అసుర వధకుడు',
      knowledgeKeeper: 'జ్ఞాన రక్షకుడు',
    },
    questDescriptions: {
      bioPesticidesDesc: 'రసాయన కీటనాశకాలను వేప నూనె మరియు సేంద్రీయ ప్రత్యామ్నాయాలతో 3 వారాలు భర్తీ చేయండి',
      villageDripSystemDesc: 'బాస్మతీ బ్రిగేడ్‌తో కలిసి 50 ఎకరాలలో చుక్కల నీటిపారుదల వ్యవస్థను స్థాపించండి',
      chemicalAsurDesc: 'అధిక కీటనాశకాల వాడకకు వ్యతిరేకంగా కమ్యూనిటీ బాస్ యుద్ధంలో చేరండి',
      compostingDesc: 'వ్యవసాయ వ్యర్థాలు మరియు వంటగది మిగతలను ఉపయోగించి సేంద్రీయ కంపోస్ట్ సృష్టించండి',
    },
    categories: {
      pestManagement: 'కీటక నిర్వహణ',
      waterManagement: 'నీటి నిర్వహణ',
      communityChallenge: 'కమ్యూనిటీ సవాలు',
      soilHealth: 'మట్టి ఆరోగ్యం',
      organicPestControl: 'సేంద్రీయ కీటక నియంత్రణ',
      soilManagement: 'మట్టి నిర్వహణ',
      waterConservation: 'నీటి పరిరక్షణ',
    },
    dailyRiddle: {
      question: 'టమేటోల నుండి అఫిడ్‌లను తరిమికొట్టడంలో సహాయపడే సాంప్రదాయిక సహచర మొక్క ఏది?',
      options: ['మ్యారిగోల్డ్', 'పుదీనా', 'తులసి', 'పైవన్నీ'],
      reward: '25 గ్రీన్ క్రెడిట్‌లు + జ్ఞాన రక్షకుడు బ్యాడ్జ్',
    },
    bossChallenge: {
      chemicalAsur: 'రసాయన అసురుడు',
      chemicalAsurDesc: 'మీ ప్రాంతంలో అధిక కీటనాశకాల వాడకను ఓడించడానికి ఏకమవ్వండి',
      pestMasterBadge: 'కీటక మాస్టర్ బ్యాడ్జ్ + 500 గ్రీన్ క్రెడిట్‌లు',
      days: 'రోజులు',
    },
    improvementTips: {
      addOrganicMulch: 'మట్టి ఆరోగ్యాన్ని పెంచడానికి సేంద్రీయ మల్చ్ జోడించండి',
      considerIntercropping: 'కాకరకాయలతో మధ్యపంటను పరిగణించండి',
      optimizeIrrigation: 'నీటిపారుదల సమయాన్ని అనుకూలీకరించండి',
    },
    helpRequests: {
      whiteFliesAttack: 'నా టమేటో పంటపై తెల్లని ఈగలు దాడి చేస్తున్నాయి',
      soilPHAlkaline: 'మట్టి pH చాలా క్షారంగా ఉంది, సేంద్రీయ పరిష్కారాలు కావాలి',
      intercroppingSugarcane: 'చెరకుకు అత్యుత్తమ మధ్యపంట ఎంపికలు',
      hoursAgo: 'గంటల క్రితం',
      dayAgo: 'రోజు క్రితం',
    },
  },
  hi: {
    common: {
      back: 'वापस',
      next: 'आगे',
      save: 'सेव करें',
      cancel: 'रद्द करें',
      continue: 'जारी रखें',
      loading: 'लोड हो रहा है...',
      error: 'त्रुटि',
      success: 'सफलता',
      close: 'बंद करें',
      yes: 'हां',
      no: 'नहीं',
      logout: 'लॉग आउट',
    },
    languageSelection: {
      title: 'अपनी भाषा चुनें',
      subtitle: 'जारी रखने के लिए अपनी पसंदीदा भाषा चुनें',
      selectLanguage: 'भाषा चुनें',
      confirmSelection: 'चयन की पुष्टि करें',
    },
    login: {
      welcome: 'एग्रीगेम में आपका स्वागत है',
      subtitle: 'धरती रक्षक आंदोलन में शामिल हों',
      phoneNumber: 'फोन नंबर',
      enterPhone: 'अपना 10 अंकों का मोबाइल नंबर दर्ज करें',
      getOTP: 'OTP प्राप्त करें',
      enterOTP: '6 अंकों का OTP दर्ज करें',
      verifyOTP: 'सत्यापित करें और लॉगिन करें',
      resendOTP: 'OTP फिर से भेजें',
      invalidOTP: 'गलत OTP। कृपया पुनः प्रयास करें।',
      otpSent: 'OTP सफलतापूर्वक भेजा गया!',
    },
    profile: {
      completeProfile: 'अपनी प्रोफ़ाइल पूरी करें',
      profileSubtitle: 'अपनी यात्रा शुरू करने के लिए बस कुछ और विवरण।',
      fullName: 'पूरा नाम',
      enterName: 'अपना पूरा नाम दर्ज करें',
      location: 'स्थान',
      enterLocation: 'उदाहरण: सतारा, महाराष्ट्र',
      saveProfile: 'प्रोफ़ाइल सेव करें',
    },
    header: {
      appName: 'एग्रीगेम',
      subtitle: 'धरती रक्षक प्लेटफॉर्म',
      credits: 'क्रेडिट',
      dayStreak: 'दिन की लकीर',
      signupLogin: 'साइनअप/लॉगिन',
      aiOracle: 'कृषि ऋषि',
      locationNotSet: 'स्थान सेट नहीं है',
    },
    navigation: {
      dashboard: 'डैशबोर्ड',
      myQuests: 'मेरे क्वेस्ट',
      myGuild: 'मेरा गिल्ड',
      leaderboard: 'लीडरबोर्ड',
      community: 'समुदाय',
      marketplace: 'मंडी',
    },
    dashboard: {
      dailyRiddle: 'प्रकृति पहेली',
      dailyChallenge: 'दैनिक चुनौती',
      bossChallenge: 'बॉस युद्ध',
      farmAuraHealth: 'खेत प्रभामंडल स्वास्थ्य',
      levelTitle: 'स्तर और शीर्षक',
      greenCredits: 'हरित क्रेडिट',
      guildRank: 'गिल्ड रैंक',
      farmAura: 'आपके खेत का प्रभामंडल (उपग्रह दृश्य)',
      satelliteView: 'उपग्रह दृश्य',
      healthIndicators: 'स्वास्थ्य संकेतक',
      improvementTips: 'सुधार के सुझाव',
      recentAchievements: 'हाल की उपलब्धियां और शीर्षक',
      lastUpdated: 'अंतिम बार अपडेट किया गया',
      farmersParticipating: 'किसान भाग ले रहे हैं',
      timeLeft: 'बचा है',
      complete: 'पूर्ण',
      reward: 'पुरस्कार',
      vegetationIndex: 'वनस्पति सूचकांक',
      soilMoisture: 'मिट्टी की नमी',
      cropDensity: 'फसल घनत्व',
      excellent: 'उत्कृष्ट',
      good: 'अच्छा',
      high: 'उच्च',
      poweredBySatelliteData: 'उपग्रह डेटा द्वारा संचालित',
      spendInMandi: 'मंडी में खर्च करें',
      totalPoints: 'कुल अंक',
    },
    quests: {
      myQuests: 'मेरे क्वेस्ट',
      updatedDaily: 'दैनिक अपडेट',
      switchToBioPesticides: 'जैविक कीटनाशकों पर स्विच करें',
      guildChallenge: 'गिल्ड चुनौती: गांव ड्रिप सिस्टम',
      defeatChemicalAsur: 'रासायनिक असुर को हराएं',
      compostingChallenge: 'कंपोस्टिंग चुनौती',
      pestManagement: 'कीट प्रबंधन',
      waterManagement: 'जल प्रबंधन',
      communityChallenge: 'सामुदायिक चुनौती',
      soilHealth: 'मिट्टी स्वास्थ्य',
      easy: 'आसान',
      medium: 'मध्यम',
      hard: 'कठिन',
      individual: 'व्यक्तिगत',
      guild: 'गिल्ड',
      boss: 'बॉस',
      points: 'अंक',
      due: 'देय',
      completed: 'पूर्ण',
      titles: {
        '1': 'जैविक कीटनाशकों पर स्विच करें',
        '2': 'गिल्ड चुनौती: गांव ड्रिप सिस्टम',
        '3': 'रासायनिक असुर को हराएं',
        '4': 'कंपोस्टिंग चुनौती',
      },
    },
    guild: {
      currentGuildChallenge: 'वर्तमान गिल्ड चुनौती',
      activeMembers: 'सक्रिय सदस्य',
      farmersUnited: 'किसान एकजुट',
      guildLevel: 'गिल्ड स्तर',
      collectiveAchievements: 'सामूहिक उपलब्धियां',
      challengesWon: 'जीती गई चुनौतियां',
      thisSeason: 'इस सीजन',
      guildChat: 'गिल्ड चैट',
      openGuildChat: 'गिल्ड चैट खोलें',
      members: 'सदस्य',
      level: 'स्तर',
      rank: 'रैंक',
      progress: 'प्रगति',
      chatMessages: {
        message1: 'अभी-अभी 2 एकड़ में ड्रिप सिस्टम लगाया है! 💪',
        time1: '2घं पहले',
        message2: 'बहुत बढ़िया काम! मैं कल अगले प्लॉट में मदद कर सकता हूं',
        time2: '1घं पहले',
        message3: 'ज्ञानकोष में अपनी नीम तेल की रेसिपी साझा कर रहा हूं',
        time3: '30मि पहले',
      },
    },
    leaderboard: {
      adarshKisanLeaderboard: 'आदर्श किसान लीडरबोर्ड',
      maharashtraRegion: 'महाराष्ट्र क्षेत्र',
      adarshKisanChallenge: 'आदर्श किसान चुनौती',
      modelFarmerTitle: 'अपने क्षेत्र में आदर्श किसान के खिताब के लिए प्रतिस्पर्धा करें',
      panchayatLeague: 'पंचायत लीग - गिल्ड रैंकिंग',
      guildRankings: {
        milletMavericks: 'Millet Mavericks',
        waterWarriors: 'Water Warriors',
        basmatiBrigade: 'Basmati Brigade',
        greenGuardians: 'Green Guardians',
      },
      you: 'आप',
      yourGuild: 'आपका गिल्ड',
      guildPoints: 'गिल्ड अंक',
    },
    community: {
      knowledgeBarteting: 'ज्ञान विनिमय केंद्र',
      askForHelp: 'सहायता मांगें',
      activeHelpRequests: 'सक्रिय सहायता अनुरोध',
      topKnowledgeGurus: 'शीर्ष ज्ञान गुरु',
      communityImpact: 'सामुदायिक प्रभाव - धरती रक्षक आंदोलन',
      dhartiRakshakMovement: 'धरती रक्षक आंदोलन',
      guruPoints: 'गुरु अंक',
      solutions: 'समाधान',
      offerSolution: 'समाधान प्रस्तुत करें',
      acresConverted: 'टिकाऊ खेती में परिवर्तित एकड़',
      reductionChemicalUsage: 'रसायन उपयोग में कमी',
      activeDhartiRakshaks: 'सक्रिय धरती रक्षक',
      bossBattlesWon: 'जीती गई बॉस लड़ाइयां',
      solutionsOffered: 'प्रस्तुत समाधान',
      helpRequests: {
        whiteFliesAttack: 'मेरी टमाटर की फसल पर सफेद मक्खियों का हमला',
        soilPHAlkaline: 'मिट्टी का pH बहुत क्षारीय है, जैविक समाधान चाहिए',
        intercroppingSugarcane: 'गन्ने के लिए सर्वोत्तम सहफसली विकल्प',
      },
      hoursAgo: 'घंटे पहले',
      dayAgo: 'दिन पहले',
    },
    marketplace: {
      greenCreditsMandi: 'हरित क्रेडिट मंडी',
      creditsAvailable: 'उपलब्ध क्रेडिट',
      realWorldBenefits: 'वास्तविक दुनिया के लाभ',
      knowledgeUnlocks: 'ज्ञान अनलॉक',
      virtualRewards: 'वर्चुअल रिवार्ड',
      governmentSchemeEligibility: 'सरकारी योजना पात्रता',
      redeem: 'रिडीम करें',
      unlock: 'अनलॉक करें',
      purchase: 'खरीदें',
      eligible: 'योग्य',
      almostEligible: 'लगभग योग्य',
      inProgress: 'प्रगति में',
      organicFertilizerDiscount: 'जैविक उर्वरक छूट',
      seedQualityUpgrade: 'बीज गुणवत्ता अपग्रेड',
      loanInterestReduction: 'ऋण ब्याज कटौती',
      advancedIPMMasterclass: 'उन्नत IPM मास्टरक्लास',
      soilTestingGuide: 'मिट्टी परीक्षण गाइड',
      marketPricePredictions: 'बाजार मूल्य पूर्वानुमान',
      premiumAvatarFrame: 'प्रीमियम अवतार फ्रेम',
      farmDecorationPack: 'खेत सजावट पैक',
      customGuildBadge: 'कस्टम गिल्ड बैज',
      solarPumpSubsidy: 'सोलर पंप सब्सिडी',
      organicCertificationSupport: 'जैविक प्रमाणन सहायता',
      dripIrrigationSubsidy: 'ड्रिप सिंचाई सब्सिडी',
      cropInsurancePremiumReduction: 'फसल बीमा प्रीमियम कटौती',
      credits: 'क्रेडिट',
      organicFertilizerDiscountDesc: 'अगली खरीद पर 20% छूट',
      seedQualityUpgradeDesc: 'नियमित मूल्य पर प्रीमियम बीज',
      loanInterestReductionDesc: '6 महीने के लिए 0.5% की कमी',
      advancedIPMMasterclassDesc: 'विशेषज्ञ वीडियो श्रृंखला',
      soilTestingGuideDesc: 'DIY परीक्षण के तरीके',
      marketPricePredictionsDesc: 'AI-संचालित अंतर्दृष्टि',
      premiumAvatarFrameDesc: 'प्रोफ़ाइल के लिए सुनहरा बॉर्डर',
      farmDecorationPackDesc: 'अपने वर्चुअल खेत को सुंदर बनाएं',
      customGuildBadgeDesc: 'अपने गिल्ड प्रतीक को डिज़ाइन करें',
      sustainabilityScoreReq: 'स्थिरता स्कोर: 80+',
      organicPracticesReq: 'जैविक अभ्यास: 90%+',
      waterConservationScoreReq: 'जल संरक्षण स्कोर: 70%+',
      riskManagementScoreReq: 'जोखिम प्रबंधन स्कोर: 75%+',
    },
    aiOracle: {
      krishiRishiAIOracle: 'कृषि ऋषि AI ओरेकल',
      plantDoctor: 'पौधे डॉक्टर',
      plantDoctorDescription: 'रोगग्रस्त पौधों, कीटों या खरपतवारों की तस्वीर लें तुरंत पहचान और उपचार क्वेस्ट के लिए।',
      takePhoto: 'फोटो लें',
      cropAdvisor: 'फसल सलाहकार',
      cropAdvisorDescription: 'अपने स्थान, मौसम और फसल प्रकार के आधार पर व्यक्तिगत खेती सलाह प्राप्त करें।',
      getAdvice: 'सलाह लें',
    },
    titles: {
      dhartiRakshak: 'धरती रक्षक',
      mahaDhartiRakshak: 'महा धरती रक्षक',
      prakritiSevak: 'प्रकृति सेवक',
      jalRakshak: 'जल रक्षक',
      bhoomiMata: 'भूमि माता',
      pestBuster: 'कीट संहारक',
      waterGuardian: 'जल संरक्षक',
      organicPioneer: 'जैविक अग्रणी',
      waterSaver: 'जल बचाने वाला',
      soilGuardian: 'मिट्टी संरक्षक',
      bioPestController: 'जैविक कीट नियंत्रक',
      asurSlayer: 'असुर संहारक',
      knowledgeKeeper: 'ज्ञान संरक्षक',
    },
    questDescriptions: {
      bioPesticidesDesc: 'रासायनिक कीटनाशकों को नीम तेल और जैविक विकल्पों से 3 सप्ताह के लिए बदलें',
      villageDripSystemDesc: 'बासमती ब्रिगेड के साथ मिलकर 50 एकड़ में ड्रिप सिंचाई स्थापित करें',
      chemicalAsurDesc: 'अत्यधिक कीटनाशक उपयोग के खिलाफ सामुदायिक बॉस युद्ध में शामिल हों',
      compostingDesc: 'खेत के कचरे और रसोई के स्क्रैप का उपयोग करके जैविक कंपोस्ट बनाएं',
    },
    categories: {
      pestManagement: 'कीट प्रबंधन',
      waterManagement: 'जल प्रबंधन',
      communityChallenge: 'सामुदायिक चुनौती',
      soilHealth: 'मिट्टी स्वास्थ्य',
      organicPestControl: 'जैविक कीट नियंत्रण',
      soilManagement: 'मिट्टी प्रबंधन',
      waterConservation: 'जल संरक्षण',
    },
    dailyRiddle: {
      question: 'कौन सा पारंपरिक साथी पौधा टमाटर से एफिड्स को भगाने में मदद करता है?',
      options: ['गेंदा', 'पुदीना', 'तुलसी', 'उपरोक्त सभी'],
      reward: '25 हरित क्रेडिट + ज्ञान संरक्षक बैज',
    },
    bossChallenge: {
      chemicalAsur: 'रासायनिक असुर',
      chemicalAsurDesc: 'अपने क्षेत्र में अत्यधिक कीटनाशक उपयोग को हराने के लिए एकजुट हों',
      pestMasterBadge: 'कीट मास्टर बैज + 500 हरित क्रेडिट',
      days: 'दिन',
    },
    improvementTips: {
      addOrganicMulch: 'मिट्टी स्वास्थ्य बढ़ाने के लिए जैविक मल्च जोड़ें',
      considerIntercropping: 'दलहन के साथ सहफसली की सोचें',
      optimizeIrrigation: 'सिंचाई समय को अनुकूलित करें',
    },
    helpRequests: {
      whiteFliesAttack: 'मेरी टमाटर की फसल पर सफेद मक्खियों का हमला',
      soilPHAlkaline: 'मिट्टी का pH बहुत क्षारीय है, जैविक समाधान चाहिए',
      intercroppingSugarcane: 'गन्ने के लिए सर्वोत्तम सहफसली विकल्प',
      hoursAgo: 'घंटे पहले',
      dayAgo: 'दिन पहले',
    },
  },
};
export const getTranslations = (language: Language): Translations => {
  return translations[language] || translations.en;
};