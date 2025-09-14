// Simple verification script to test basic imports
// Run with: node src/verify.js

console.log("Checking file structure...");

const fs = require('fs');
const path = require('path');

const files = [
  'src/App.tsx',
  'src/types.ts',
  'src/utils/utils.ts',
  'src/utils/mockData.ts',
  'src/pages/DashboardPage.tsx',
  'src/pages/QuestsPage.tsx',
  'src/pages/GuildPage.tsx',
  'src/pages/MarketplacePage.tsx',
  'src/pages/LeaderboardPage.tsx',
  'src/pages/CommunityPage.tsx',
  'src/components/AIOracle.tsx',
];

let allFilesExist = true;

files.forEach(file => {
  const fullPath = path.resolve(file);
  if (fs.existsSync(fullPath)) {
    console.log(`✅ ${file} exists`);
  } else {
    console.log(`❌ ${file} missing`);
    allFilesExist = false;
  }
});

if (allFilesExist) {
  console.log("\n🎉 All files exist! Structure looks good.");
} else {
  console.log("\n❌ Some files are missing.");
}

// Check for common import patterns
const checkImports = (file) => {
  try {
    const content = fs.readFileSync(path.resolve(file), 'utf8');
    const hasReactImport = content.includes('import React');
    const hasTypeImports = content.includes('./types');
    const hasUtilImports = content.includes('./utils');
    
    console.log(`${file}:`);
    console.log(`  React import: ${hasReactImport ? '✅' : '❌'}`);
    if (hasTypeImports) console.log(`  Types import: ✅`);
    if (hasUtilImports) console.log(`  Utils import: ✅`);
  } catch (err) {
    console.log(`Error reading ${file}: ${err.message}`);
  }
};

console.log("\nChecking imports...");
files.filter(f => f.endsWith('.tsx')).forEach(checkImports);
