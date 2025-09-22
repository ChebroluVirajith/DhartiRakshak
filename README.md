# DhartiRakshak 🌱

A gamified, multilingual web app that helps farmers adopt sustainable practices through quests, community, and rewards.

Built with React, TypeScript, Vite, Tailwind CSS, and Firebase Phone Auth. Includes localization support and utility scripts for generating translations with Google Cloud Translate.

## ✨ Features

- **Onboarding with Phone OTP (Firebase)**: Invisible reCAPTCHA + OTP verification flow in `src/LoginPage.tsx`.
- **Multilingual UI**: Language context + translation registry in `src/LanguageContext.tsx` and `src/translations.ts`. Language preference is persisted to `localStorage`.
- **Gamified UX**:
  - Dashboard with farmer profile, daily riddle, and progress
  - Quests, Guild, Marketplace, Leaderboard, and Community pages
  - AI Oracle modal (`src/components/AIOracle.tsx`)
- **Modern Frontend Stack**: Vite + React 18 + TypeScript + Tailwind CSS.
- **Mock Data**: App runs fully locally using `src/utils/mockData.ts`.

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Vite, Tailwind CSS, `lucide-react` icons
- **Auth**: Firebase Authentication (Phone)
- **I18n utilities**: Optional helper using Google Cloud Translate v2 (Node script)

## 🚀 Quick Start

### 1) Prerequisites

- Node.js 18+ and npm 9+
- A Firebase project with Phone Authentication enabled (for OTP login)

### 2) Install dependencies

```bash```
npm install

3) Configure Firebase (required for OTP login)
Create a Firebase project and enable Phone Authentication.

In src/firebase.ts, replace the placeholder config with your project values from Firebase Console → Project settings → General.

TypeScript

// src/firebase.ts (replace with your values)
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "...",
  appId: "...",
  measurementId: "..."
};
4) Run the app
```Bash```

npm run dev
Then open the URL printed by Vite (typically http://localhost:5173).

📜 Scripts
npm run dev — start Vite dev server

npm run build — production build

npm run preview — preview built app locally

npm run lint — run ESLint

📁 Project Structure
.
├─ index.html
├─ package.json
├─ vite.config.ts
├─ tailwind.config.js
├─ postcss.config.js
├─ translate.js              # Optional: helper to auto-generate translations
├─ src/
│  ├─ main.tsx               # App entry, page switching (login ↔ app)
│  ├─ App.tsx                # Main shell: header, nav, AI Oracle modal, tabs
│  ├─ LoginPage.tsx          # Phone OTP flow with invisible reCAPTCHA
│  ├─ firebase.ts            # Firebase init + getAuth()
│  ├─ LanguageContext.tsx    # Language provider + persistence
│  ├─ translations.ts        # Translation registry (en/hi/te/...)
│  ├─ components/
│  │  └─ AIOracle.tsx
│  ├─ pages/
│  │  ├─ DashboardPage.tsx
│  │  ├─ QuestsPage.tsx
│  │  ├─ GuildPage.tsx
│  │  ├─ MarketplacePage.tsx
│  │  ├─ LeaderboardPage.tsx
│  │  └─ CommunityPage.tsx
│  ├─ utils/
│  │  ├─ mockData.ts
│  │  └─ utils.ts
│  ├─ types.ts
│  ├─ index.css              # Tailwind base/styles
│  └─ verify.js              # Node script to verify file presence
└─ README.md
🌐 Localization (i18n)
The app uses a simple translations object and a LanguageProvider to supply t to components.

Change language persistently via localStorage key dhartiRakshakLanguage.

Default language is en and can be overridden by the login flow.

Auto-generating translations (optional)
There is a Node script translate.js that uses Google Cloud Translate v2 to help bootstrap translation JSON. To use it:

Create a .env file in the project root with your API key:

Bash

REACT_APP_GOOGLE_TRANSLATE_API_KEY=your_api_key
Edit translate.js to set your projectId and the target languages.

Run the script:

Bash

node translate.js
Copy the printed JSON into src/translations.ts as needed and review the output (machine translation quality may vary).

🔒 Authentication
Implemented via Firebase Phone Authentication with invisible reCAPTCHA in src/LoginPage.tsx.

Ensure your domain (e.g., localhost) is added to Firebase Auth authorized domains.

For production, add your deployed domain as well.

🎨 Tailwind CSS
Tailwind is configured in tailwind.config.js and postcss.config.js. Global styles live in src/index.css.

📦 Build and Deploy
Build a production bundle:

Bash

npm run build
Preview locally:

Bash

npm run preview
Deploy the dist/ folder to any static host (Netlify, Vercel, Firebase Hosting, etc.).

💡 Development Tips
If you edit translations or language behavior, check src/LanguageContext.tsx and src/translations.ts.

Mock data for UI lives in src/utils/mockData.ts and can be extended.

The app uses simple tab navigation in src/App.tsx via local state.

🐛 Troubleshooting
OTP not arriving / reCAPTCHA errors:

Verify Firebase Phone Auth is enabled and your app domain is authorized.

Clear the recaptcha by re-initializing if needed (handled in the code when errors occur).

Type errors during build:

Ensure TypeScript 5+; run npm run lint to identify issues.

Translations script fails with missing API key:

Ensure .env has REACT_APP_GOOGLE_TRANSLATE_API_KEY and you restarted the shell.

🛡️ Security Notes
Do not commit real API keys or secrets. Consider moving Firebase config to environment variables for production if desired.

Review and restrict Firebase Auth/Hosting rules before going live.
