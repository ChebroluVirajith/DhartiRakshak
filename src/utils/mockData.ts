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
  badges: ['organicPioneer', 'waterSaver', 'soilGuardian', 'bioPestController'],
  rank: 12,
  guild: 'Basmati Brigade',
  title: 'dhartiRakshak',
  auraHealth: 82,
  streakDays: 15
};

export const guild: Guild = {
  id: '1',
  name: 'Basmati Brigade',
  logo: '🌾',
  members: 24,
  level: 5,
  currentChallenge: 'villageDripSystemDesc',
  progress: 67,
  rank: 3
};

export const bossChallenge: BossChallenge = {
  id: 'chemical-asur',
  name: 'Chemical Asur',
  description: 'chemicalAsurDesc',
  icon: Bug,
  progress: 45,
  participants: 156,
  reward: 'asurSlayerBadge',
  timeLeft: '12 days'
};

export const quests: Quest[] = [
  {
    id: '1',
    title: 'switchToBioPesticides',
    description: 'bioPesticidesDesc',
    category: 'pestManagement',
    difficulty: 'Medium',
    points: 150,
    progress: 65,
    deadline: '2025-02-15',
    completed: false,
    type: 'individual',
    reward: 'pestBuster'
  },
  {
    id: '2',
    title: 'guildChallenge',
    description: 'villageDripSystemDesc',
    category: 'waterManagement',
    difficulty: 'Hard',
    points: 300,
    progress: 67,
    deadline: '2025-03-01',
    completed: false,
    type: 'guild',
    reward: 'waterGuardian'
  },
  {
    id: '3',
    title: 'defeatChemicalAsur',
    description: 'chemicalAsurDesc',
    category: 'communityChallenge',
    difficulty: 'Hard',
    points: 500,
    progress: 45,
    deadline: '2025-02-20',
    completed: false,
    type: 'boss',
    reward: 'asurSlayer'
  },
  {
    id: '4',
    title: 'compostingChallenge',
    description: 'compostingDesc',
    category: 'soilHealth',
    difficulty: 'Easy',
    points: 100,
    progress: 100,
    deadline: '2025-01-20',
    completed: true,
    type: 'individual'
  }
];

export const leaderboard: LeaderboardEntry[] = [
  { name: 'Amit Patil', location: 'Pune', score: 3200, rank: 1, avatar: 'AP', title: 'mahaDhartiRakshak', guild: 'Millet Mavericks' },
  { name: 'Sunita Devi', location: 'Kolhapur', score: 2980, rank: 2, avatar: 'SD', title: 'prakritiSevak', guild: 'Green Guardians' },
  { name: 'Mohan Singh', location: 'Nashik', score: 2750, rank: 3, avatar: 'MS', title: 'jalRakshak', guild: 'Water Warriors' },
  { name: 'Priya Sharma', location: 'Aurangabad', score: 2650, rank: 4, avatar: 'PS', title: 'bhoomiMata', guild: 'Soil Sisters' },
  { name: 'Rajesh Kumar', location: 'Satara', score: 2450, rank: 5, avatar: 'RK', title: 'dhartiRakshak', guild: 'Basmati Brigade' }
];

export const dailyRiddle: DailyRiddle = {
  question: "dailyRiddleQuestion",
  options: ["Marigold", "Mint", "Basil", "All of the above"],
  correct: 3,
  reward: "knowledgeKeeperBadge"
};