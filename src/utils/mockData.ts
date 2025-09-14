import { Bug } from 'lucide-react';
import { Quest, Guild, BossChallenge, LeaderboardEntry, DailyRiddle, Farmer } from '../types';

export const defaultFarmer: Farmer = {
  name: 'Rajesh Kumar',
  location: 'Satara, Maharashtra',
  cropType: 'Mixed (Rice, Sugarcane)',
  farmSize: '5.2 acres',
  sustainabilityScore: 78,
  level: 7,
  totalPoints: 2450,
  greenCredits: 340,
  badges: ['Organic Pioneer', 'Water Saver', 'Soil Guardian', 'Bio Pest Controller'],
  rank: 12,
  guild: 'Basmati Brigade',
  title: 'Dharti Rakshak',
  auraHealth: 82,
  streakDays: 15
};

export const guild: Guild = {
  id: '1',
  name: 'Basmati Brigade',
  logo: '🌾',
  members: 24,
  level: 5,
  currentChallenge: 'Village-wide Drip Irrigation',
  progress: 67,
  rank: 3
};

export const bossChallenge: BossChallenge = {
  id: 'chemical-asur',
  name: 'Chemical Asur',
  description: 'Unite to defeat excessive pesticide use in your region',
  icon: Bug,
  progress: 45,
  participants: 156,
  reward: 'Pest-Master Badge + 500 Green Credits',
  timeLeft: '12 days'
};

export const quests: Quest[] = [
  {
    id: '1',
    title: 'Switch to Bio-Pesticides',
    description: 'Replace chemical pesticides with neem oil and organic alternatives for 3 weeks',
    category: 'Pest Management',
    difficulty: 'Medium',
    points: 150,
    progress: 65,
    deadline: '2025-02-15',
    completed: false,
    type: 'individual',
    reward: 'Pest-Buster Badge'
  },
  {
    id: '2',
    title: 'Guild Challenge: Village Drip System',
    description: 'Work with Basmati Brigade to install drip irrigation across 50 acres',
    category: 'Water Management',
    difficulty: 'Hard',
    points: 300,
    progress: 67,
    deadline: '2025-03-01',
    completed: false,
    type: 'guild',
    reward: 'Water Guardian Title'
  },
  {
    id: '3',
    title: 'Defeat the Chemical Asur',
    description: 'Join the community boss battle against excessive pesticide use',
    category: 'Community Challenge',
    difficulty: 'Hard',
    points: 500,
    progress: 45,
    deadline: '2025-02-20',
    completed: false,
    type: 'boss',
    reward: 'Asur Slayer Badge + 500 Credits'
  },
  {
    id: '4',
    title: 'Composting Challenge',
    description: 'Create organic compost using farm waste and kitchen scraps',
    category: 'Soil Health',
    difficulty: 'Easy',
    points: 100,
    progress: 100,
    deadline: '2025-01-20',
    completed: true,
    type: 'individual'
  }
];

export const leaderboard: LeaderboardEntry[] = [
  { name: 'Amit Patil', location: 'Pune', score: 3200, rank: 1, avatar: 'AP', title: 'Maha Dharti Rakshak', guild: 'Millet Mavericks' },
  { name: 'Sunita Devi', location: 'Kolhapur', score: 2980, rank: 2, avatar: 'SD', title: 'Prakriti Sevak', guild: 'Green Guardians' },
  { name: 'Mohan Singh', location: 'Nashik', score: 2750, rank: 3, avatar: 'MS', title: 'Jal Rakshak', guild: 'Water Warriors' },
  { name: 'Priya Sharma', location: 'Aurangabad', score: 2650, rank: 4, avatar: 'PS', title: 'Bhoomi Mata', guild: 'Soil Sisters' },
  { name: 'Rajesh Kumar', location: 'Satara', score: 2450, rank: 5, avatar: 'RK', title: 'Dharti Rakshak', guild: 'Basmati Brigade' }
];

export const dailyRiddle: DailyRiddle = {
  question: "Which traditional companion plant helps repel aphids from tomatoes?",
  options: ["Marigold", "Mint", "Basil", "All of the above"],
  correct: 3,
  reward: "25 Green Credits + Knowledge Keeper Badge"
};
