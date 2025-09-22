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

```bash
npm install
