# DhartiRakshak 🌱

A gamified, multilingual web application that helps farmers adopt sustainable agricultural practices through quests, community engagement, and rewards.

Built with modern web technologies including React, TypeScript, Vite, Tailwind CSS, and Firebase Phone Authentication. Features comprehensive localization support and utility scripts for generating translations with Google Cloud Translate.

## ✨ Features

- **🔐 Phone OTP Authentication**: Secure login flow using Firebase Phone Authentication with invisible reCAPTCHA
- **🌍 Multilingual Support**: Full internationalization with language context and translation registry
- **🎮 Gamified User Experience**:
  - Interactive dashboard with farmer profile and daily challenges
  - Quest system for sustainable farming practices
  - Guild system for community collaboration
  - Marketplace for trading and rewards
  - Leaderboard for friendly competition
  - Community page for knowledge sharing
- **🤖 AI Oracle**: Intelligent assistant modal for farming advice and guidance
- **📱 Modern UI/UX**: Responsive design with Tailwind CSS and Lucide React icons
- **🗃️ Mock Data System**: Complete local development environment with realistic test data

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern UI library with hooks and concurrent features
- **TypeScript** - Type-safe development with enhanced IDE support
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework for rapid styling
- **Lucide React** - Beautiful, customizable SVG icons

### Authentication & Backend
- **Firebase Authentication** - Phone number verification with OTP
- **Firebase Hosting** - Static site hosting (optional)

### Internationalization
- **Custom i18n System** - Lightweight translation management
- **Google Cloud Translate API** - Automated translation generation

## 🚀 Quick Start

### Prerequisites

- **Node.js 18+** and **npm 9+**
- **Firebase Project** with Phone Authentication enabled

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd DhartiRakshak
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure Firebase**
   
   Create a Firebase project and enable Phone Authentication in the Firebase Console.

   Update `src/firebase.ts` with your project configuration:
   ```typescript
   // src/firebase.ts
   const firebaseConfig = {
     apiKey: "YOUR_API_KEY",
     authDomain: "YOUR_PROJECT.firebaseapp.com",
     projectId: "YOUR_PROJECT_ID",
     storageBucket: "YOUR_PROJECT.appspot.com",
     messagingSenderId: "YOUR_SENDER_ID",
     appId: "YOUR_APP_ID",
     measurementId: "YOUR_MEASUREMENT_ID"
   };
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```
   
   Open the URL displayed in your terminal (typically `http://localhost:5173`)

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Vite development server |
| `npm run build` | Create production build |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint for code quality |

## 📁 Project Structure

```
DhartiRakshak/
├── index.html                 # HTML entry point
├── package.json              # Dependencies and scripts
├── vite.config.ts            # Vite configuration
├── tailwind.config.js        # Tailwind CSS configuration
├── postcss.config.js         # PostCSS configuration
├── translate.js              # Translation generation script
├── src/
│   ├── main.tsx              # React app entry point
│   ├── App.tsx               # Main application shell
│   ├── LoginPage.tsx         # Phone OTP authentication
│   ├── firebase.ts           # Firebase configuration
│   ├── LanguageContext.tsx   # Language provider and persistence
│   ├── translations.ts       # Translation registry
│   ├── types.ts              # TypeScript type definitions
│   ├── index.css             # Global styles and Tailwind imports
│   ├── components/
│   │   └── AIOracle.tsx      # AI assistant modal component
│   ├── pages/
│   │   ├── DashboardPage.tsx # Main dashboard
│   │   ├── QuestsPage.tsx    # Quest management
│   │   ├── GuildPage.tsx     # Guild system
│   │   ├── MarketplacePage.tsx # Trading marketplace
│   │   ├── LeaderboardPage.tsx # Competition leaderboard
│   │   └── CommunityPage.tsx # Community features
│   ├── utils/
│   │   ├── mockData.ts       # Mock data for development
│   │   └── utils.ts          # Utility functions
│   └── verify.js             # File verification script
└── README.md
```

## 🌐 Internationalization

The application supports multiple languages through a custom i18n system:

- **Language Persistence**: User language preference is saved to `localStorage`
- **Default Language**: English (`en`) with fallback support
- **Supported Languages**: Hindi (`hi`), Telugu (`te`), and more

### Auto-Generating Translations

Use the included script to generate translations using Google Cloud Translate:

1. **Set up API key** in `.env`:
   ```bash
   REACT_APP_GOOGLE_TRANSLATE_API_KEY=your_api_key
   ```

2. **Configure target languages** in `translate.js`

3. **Run the script**:
   ```bash
   node translate.js
   ```

4. **Review and integrate** the generated translations into `src/translations.ts`

## 🔒 Authentication

Firebase Phone Authentication implementation:

- **Invisible reCAPTCHA**: Seamless user experience
- **OTP Verification**: Secure phone number validation
- **Domain Authorization**: Configure authorized domains in Firebase Console

### Production Setup

Ensure your production domain is added to Firebase Auth authorized domains list.

## 🎨 Styling

Tailwind CSS configuration:

- **Custom Configuration**: `tailwind.config.js` for project-specific settings
- **Global Styles**: `src/index.css` for base styles and Tailwind imports
- **PostCSS**: `postcss.config.js` for CSS processing

## 📦 Build and Deployment

### Production Build
```bash
npm run build
```

### Preview Build Locally
```bash
npm run preview
```

### Deployment Options

Deploy the `dist/` folder to any static hosting service:
- **Netlify**
- **Vercel**
- **Firebase Hosting**
- **AWS S3 + CloudFront**

## 💡 Development Tips

- **Language Management**: Check `src/LanguageContext.tsx` and `src/translations.ts` for i18n changes
- **Mock Data**: Extend `src/utils/mockData.ts` for additional test data
- **Navigation**: Tab navigation is managed in `src/App.tsx` using local state
- **Component Structure**: Follow the established patterns in existing components

## 🐛 Troubleshooting

### OTP Issues
- **Verification**: Ensure Firebase Phone Auth is enabled
- **Domain**: Check authorized domains in Firebase Console
- **reCAPTCHA**: Clear and re-initialize if errors occur

### Build Issues
- **TypeScript**: Ensure TypeScript 5+ is installed
- **Linting**: Run `npm run lint` to identify code issues
- **Dependencies**: Verify all packages are installed with `npm install`

### Translation Script
- **API Key**: Ensure `.env` contains `REACT_APP_GOOGLE_TRANSLATE_API_KEY`
- **Shell Restart**: Restart terminal after adding environment variables

## 🛡️ Security Considerations

- **API Keys**: Never commit real API keys or secrets to version control
- **Environment Variables**: Use environment variables for production configurations
- **Firebase Rules**: Review and restrict Firebase Auth and Hosting rules before deployment
- **Domain Security**: Only authorize necessary domains in Firebase Console

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Firebase for authentication services
- Google Cloud Translate for translation capabilities
- Tailwind CSS for the utility-first CSS framework
- Lucide for the beautiful icon set
