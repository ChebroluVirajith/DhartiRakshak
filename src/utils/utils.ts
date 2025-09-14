export const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case 'Easy': return 'bg-green-100 text-green-800';
    case 'Medium': return 'bg-yellow-100 text-yellow-800';
    case 'Hard': return 'bg-red-100 text-red-800';
    default: return 'bg-gray-100 text-gray-800';
  }
};

export const getQuestTypeColor = (type: string) => {
  switch (type) {
    case 'individual': return 'bg-blue-100 text-blue-800';
    case 'guild': return 'bg-purple-100 text-purple-800';
    case 'boss': return 'bg-red-100 text-red-800';
    default: return 'bg-gray-100 text-gray-800';
  }
};

export const getProgressColor = (progress: number) => {
  if (progress >= 80) return 'bg-green-500';
  if (progress >= 50) return 'bg-yellow-500';
  return 'bg-red-500';
};

export const getAuraColor = (health: number) => {
  if (health >= 80) return 'from-green-400 to-emerald-600';
  if (health >= 60) return 'from-yellow-400 to-orange-500';
  return 'from-red-400 to-red-600';
};
