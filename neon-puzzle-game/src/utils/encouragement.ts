// Encouraging messages for correct answers
export const correctMessages = [
  { text: 'Awesome!' },
  { text: 'Brilliant!' },
  { text: 'On Fire!' },
  { text: 'Unstoppable!' },
  { text: 'Rocketing!' },
  { text: 'Superstar!' },
  { text: 'Champion!' },
  { text: 'Genius!' },
  { text: 'Bullseye!' },
  { text: 'Spectacular!' },
  { text: 'Amazing!' },
  { text: 'Fantastic!' },
  { text: 'Incredible!' },
  { text: 'Stellar!' },
  { text: 'Perfect!' }
];

// Encouraging messages for wrong answers
export const wrongMessages = [
  { text: 'Keep Going!' },
  { text: 'Learning!' },
  { text: 'Good Try!' },
  { text: 'Almost!' },
  { text: 'Now You Know!' },
  { text: 'Try Again!' },
  { text: 'You Got This!' },
  { text: 'Keep Pushing!' },
  { text: 'Stay Strong!' },
  { text: 'Level Up!' }
];

// Streak messages
export const streakMessages: Record<number, { text: string }> = {
  3: { text: '3 in a row!' },
  5: { text: '5 streak! Amazing!' },
  7: { text: '7 streak! Unstoppable!' },
  10: { text: '10 streak! LEGENDARY!' }
};

export const getRandomCorrectMessage = () => {
  return correctMessages[Math.floor(Math.random() * correctMessages.length)];
};

export const getRandomWrongMessage = () => {
  return wrongMessages[Math.floor(Math.random() * wrongMessages.length)];
};

export const getStreakMessage = (streak: number) => {
  if (streak >= 10) return streakMessages[10];
  if (streak >= 7) return streakMessages[7];
  if (streak >= 5) return streakMessages[5];
  if (streak >= 3) return streakMessages[3];
  return null;
};

// Hints for different categories
export const categoryHints: Record<string, string[]> = {
  'number-series': [
    'Look for addition or subtraction patterns',
    'Check if numbers are multiplied by something',
    'Could these be squares or cubes?',
    'Try finding the difference between consecutive numbers'
  ],
  'logical-patterns': [
    'Look for alternating patterns',
    'Check if elements repeat in groups',
    'Notice the position of each element',
    'Look for rotation or reflection'
  ],
  'missing-number': [
    'Find the relationship between given numbers',
    'Check if there\'s multiplication or division',
    'Look for a formula connecting the numbers',
    'Try working backwards from the result'
  ],
  'odd-one-out': [
    'What do most items have in common?',
    'Look for categories or groups',
    'Check properties like size, type, or function',
    'One item breaks the pattern'
  ],
  'word-logic': [
    'Think about the relationship in the first pair',
    'Apply the same relationship to the second pair',
    'Consider synonyms, antonyms, or categories',
    'Look for functional relationships'
  ],
  'general-knowledge': [
    'Think about what you learned in school',
    'Consider famous facts and figures',
    'Use process of elimination',
    'Trust your first instinct'
  ],
  'math-puzzles': [
    'Break down the problem step by step',
    'Check your arithmetic carefully',
    'Look for shortcuts or patterns',
    'Estimate first, then calculate'
  ],
  'memory-sequence': [
    'Focus on the pattern, not individual items',
    'Group items together mentally',
    'Look for repeating sequences',
    'Count the items as you go'
  ],
  'spatial-reasoning': [
    'Visualize the shape in your mind',
    'Count edges, faces, or vertices',
    'Think about rotations and reflections',
    'Draw it out mentally'
  ],
  'code-breaker': [
    'Assign values systematically',
    'Look for letter-number patterns',
    'Check if it\'s a simple substitution',
    'Work through the code step by step'
  ],
  'riddles': [
    'Think literally AND figuratively',
    'Consider multiple meanings of words',
    'What has the described properties?',
    'Don\'t overthink it!'
  ],
  'speed-math': [
    'Use mental math tricks',
    'Round numbers for quick estimates',
    'Break complex calculations into parts',
    'Practice makes perfect!'
  ],
  'visual-puzzles': [
    'Count carefully and systematically',
    'Look for hidden shapes',
    'Check for overlapping elements',
    'Scan from left to right'
  ],
  'word-scramble': [
    'Look for common letter combinations',
    'Find vowels first',
    'Try different starting letters',
    'Think of words that fit the length'
  ],
  'sequence-completion': [
    'Think about common sequences you know',
    'Consider days, months, colors, etc.',
    'What naturally comes next?',
    'Look for a logical order'
  ],
  'true-false': [
    'Read the statement carefully',
    'Look for absolute words like "always" or "never"',
    'Trust your knowledge',
    'If unsure, think about exceptions'
  ]
};

export const getRandomHint = (category: string): string => {
  const hints = categoryHints[category] || ['Think carefully about the question!'];
  return hints[Math.floor(Math.random() * hints.length)];
};
