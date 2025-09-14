const { Translate } = require('@google-cloud/translate').v2;
require('dotenv').config();

// Ensure your API key is stored as an environment variable
const apiKey = process.env.REACT_APP_GOOGLE_TRANSLATE_API_KEY;

if (!apiKey) {
  console.error("The REACT_APP_GOOGLE_TRANSLATE_API_KEY environment variable is not set.");
  process.exit(1);
}

const translate = new Translate({
  projectId: "your-gcp-project-id", // Replace with your actual project ID
  key: apiKey,
});

// A simplified example of your English translation object
const englishTranslations = {
  header: {
    appName: "AgriGame",
    subtitle: "Dharti Rakshak Platform"
  },
  navigation: {
    dashboard: "Dashboard",
    myQuests: "My Quests",
    leaderboard: "Leaderboard",
  },
  dashboard: {
    dailyRiddle: "Prakriti Paheli (Nature's Riddle)",
  },
};

const targetLanguages = ['hi', 'te'];

async function translateAll() {
  const allTranslations = {
    en: englishTranslations
  };

  for (const lang of targetLanguages) {
    const translatedLangObject = {};

    for (const key in englishTranslations) {
      if (typeof englishTranslations[key] === 'string') {
        const [translation] = await translate.translate(englishTranslations[key], lang);
        translatedLangObject[key] = translation;
      } else if (typeof englishTranslations[key] === 'object') {
        translatedLangObject[key] = {};
        for (const nestedKey in englishTranslations[key]) {
          const [translation] = await translate.translate(englishTranslations[key][nestedKey], lang);
          translatedLangObject[key][nestedKey] = translation;
        }
      }
    }
    allTranslations[lang] = translatedLangObject;
  }

  console.log(JSON.stringify(allTranslations, null, 2));
}

translateAll();