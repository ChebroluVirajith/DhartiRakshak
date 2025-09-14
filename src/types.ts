import React from 'react';

export interface Quest {
  id: string;
  title: string;
  description: string;
  category: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  points: number;
  progress: number;
  deadline: string;
  completed: boolean;
  type: 'individual' | 'guild' | 'boss';
  reward?: string;
}

export interface Guild {
  id: string;
  name: string;
  logo: string;
  members: number;
  level: number;
  currentChallenge: string;
  progress: number;
  rank: number;
}

export interface Farmer {
  name: string;
  location: string;
  cropType: string;
  farmSize: string;
  sustainabilityScore: number;
  level: number;
  totalPoints: number;
  greenCredits: number;
  badges: string[];
  rank: number;
  guild?: string;
  title: string;
  auraHealth: number;
  streakDays: number;
}

export interface LeaderboardEntry {
  name: string;
  location: string;
  score: number;
  rank: number;
  avatar: string;
  title: string;
  guild?: string;
}

export interface BossChallenge {
  id: string;
  name: string;
  description: string;
  icon: React.ComponentType<any>;
  progress: number;
  participants: number;
  reward: string;
  timeLeft: string;
}

export interface AppProps {
  onLoginClick: () => void;
  userName?: string;
  userLocation?: string;
}

export interface DailyRiddle {
  question: string;
  options: string[];
  correct: number;
  reward: string;
}
