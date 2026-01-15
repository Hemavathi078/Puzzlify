import type { Puzzle } from '../types/puzzle';

// GENERAL KNOWLEDGE PUZZLES
export const gkPuzzles: Puzzle[] = [
  // GK - BEGINNER
  {
    id: 'gk-b-1',
    category: 'general-knowledge',
    difficulty: 'beginner',
    question: 'What is the largest planet in our solar system?',
    options: ['Earth', 'Jupiter', 'Saturn', 'Mars'],
    correctAnswer: 'Jupiter',
    explanation: 'Jupiter is the largest planet, with a mass more than twice that of all other planets combined!',
    timeLimit: 30,
    points: 10
  },
  {
    id: 'gk-b-2',
    category: 'general-knowledge',
    difficulty: 'beginner',
    question: 'How many continents are there on Earth?',
    options: ['5', '6', '7', '8'],
    correctAnswer: '7',
    explanation: 'The 7 continents are: Asia, Africa, North America, South America, Antarctica, Europe, and Australia.',
    timeLimit: 30,
    points: 10
  },
  {
    id: 'gk-b-3',
    category: 'general-knowledge',
    difficulty: 'beginner',
    question: 'What is the chemical symbol for water?',
    options: ['H2O', 'CO2', 'O2', 'NaCl'],
    correctAnswer: 'H2O',
    explanation: 'Water is made of 2 hydrogen atoms and 1 oxygen atom, hence H2O.',
    timeLimit: 30,
    points: 10
  },
  {
    id: 'gk-b-4',
    category: 'general-knowledge',
    difficulty: 'beginner',
    question: 'Which animal is known as the "King of the Jungle"?',
    options: ['Tiger', 'Elephant', 'Lion', 'Bear'],
    correctAnswer: 'Lion',
    explanation: 'Lions are called the King of the Jungle due to their majestic appearance and powerful roar.',
    timeLimit: 30,
    points: 10
  },
  {
    id: 'gk-b-5',
    category: 'general-knowledge',
    difficulty: 'beginner',
    question: 'What color do you get when you mix red and blue?',
    options: ['Green', 'Orange', 'Purple', 'Brown'],
    correctAnswer: 'Purple',
    explanation: 'Red and blue are primary colors that combine to make purple.',
    timeLimit: 30,
    points: 10
  },
  {
    id: 'gk-b-6',
    category: 'general-knowledge',
    difficulty: 'beginner',
    question: 'How many days are there in a leap year?',
    options: ['364', '365', '366', '367'],
    correctAnswer: '366',
    explanation: 'A leap year has 366 days, with February having 29 days instead of 28.',
    timeLimit: 30,
    points: 10
  },
  {
    id: 'gk-b-7',
    category: 'general-knowledge',
    difficulty: 'beginner',
    question: 'What is the capital of France?',
    options: ['London', 'Berlin', 'Paris', 'Rome'],
    correctAnswer: 'Paris',
    explanation: 'Paris is the capital and largest city of France, known for the Eiffel Tower.',
    timeLimit: 30,
    points: 10
  },
  // GK - INTERMEDIATE
  {
    id: 'gk-i-1',
    category: 'general-knowledge',
    difficulty: 'intermediate',
    question: 'Who painted the Mona Lisa?',
    options: ['Michelangelo', 'Leonardo da Vinci', 'Raphael', 'Van Gogh'],
    correctAnswer: 'Leonardo da Vinci',
    explanation: 'Leonardo da Vinci painted the Mona Lisa between 1503-1519. It hangs in the Louvre Museum.',
    timeLimit: 25,
    points: 15
  },
  {
    id: 'gk-i-2',
    category: 'general-knowledge',
    difficulty: 'intermediate',
    question: 'What is the smallest country in the world?',
    options: ['Monaco', 'Vatican City', 'San Marino', 'Liechtenstein'],
    correctAnswer: 'Vatican City',
    explanation: 'Vatican City is the smallest country at just 0.44 square kilometers.',
    timeLimit: 25,
    points: 15
  },
  {
    id: 'gk-i-3',
    category: 'general-knowledge',
    difficulty: 'intermediate',
    question: 'Which element has the atomic number 1?',
    options: ['Helium', 'Oxygen', 'Hydrogen', 'Carbon'],
    correctAnswer: 'Hydrogen',
    explanation: 'Hydrogen is the lightest and most abundant element in the universe.',
    timeLimit: 25,
    points: 15
  },
  {
    id: 'gk-i-4',
    category: 'general-knowledge',
    difficulty: 'intermediate',
    question: 'In which year did World War II end?',
    options: ['1943', '1944', '1945', '1946'],
    correctAnswer: '1945',
    explanation: 'World War II ended in 1945 with the surrender of Germany in May and Japan in September.',
    timeLimit: 25,
    points: 15
  },
  {
    id: 'gk-i-5',
    category: 'general-knowledge',
    difficulty: 'intermediate',
    question: 'What is the hardest natural substance on Earth?',
    options: ['Gold', 'Iron', 'Diamond', 'Platinum'],
    correctAnswer: 'Diamond',
    explanation: 'Diamond is the hardest natural substance, scoring 10 on the Mohs hardness scale.',
    timeLimit: 25,
    points: 15
  },
  // GK - ADVANCED
  {
    id: 'gk-a-1',
    category: 'general-knowledge',
    difficulty: 'advanced',
    question: 'What is the speed of light in vacuum (approximately)?',
    options: ['300,000 km/s', '150,000 km/s', '500,000 km/s', '1,000,000 km/s'],
    correctAnswer: '300,000 km/s',
    explanation: 'Light travels at approximately 299,792 km/s in vacuum, often rounded to 300,000 km/s.',
    timeLimit: 20,
    points: 20
  },
  {
    id: 'gk-a-2',
    category: 'general-knowledge',
    difficulty: 'advanced',
    question: 'Which planet has the most moons?',
    options: ['Jupiter', 'Saturn', 'Uranus', 'Neptune'],
    correctAnswer: 'Saturn',
    explanation: 'Saturn has over 140 known moons, surpassing Jupiter\'s count.',
    timeLimit: 20,
    points: 20
  },
  {
    id: 'gk-a-3',
    category: 'general-knowledge',
    difficulty: 'advanced',
    question: 'What is the largest organ in the human body?',
    options: ['Heart', 'Liver', 'Skin', 'Brain'],
    correctAnswer: 'Skin',
    explanation: 'The skin is the largest organ, covering about 20 square feet in adults.',
    timeLimit: 20,
    points: 20
  },
  // GK - EXPERT
  {
    id: 'gk-e-1',
    category: 'general-knowledge',
    difficulty: 'expert',
    question: 'What is the half-life of Carbon-14?',
    options: ['5,730 years', '1,000 years', '10,000 years', '50,000 years'],
    correctAnswer: '5,730 years',
    explanation: 'Carbon-14 has a half-life of 5,730 years, making it useful for dating organic materials.',
    timeLimit: 15,
    points: 30
  },
  {
    id: 'gk-e-2',
    category: 'general-knowledge',
    difficulty: 'expert',
    question: 'Which scientist proposed the theory of general relativity?',
    options: ['Isaac Newton', 'Albert Einstein', 'Stephen Hawking', 'Niels Bohr'],
    correctAnswer: 'Albert Einstein',
    explanation: 'Einstein published his theory of general relativity in 1915, revolutionizing physics.',
    timeLimit: 15,
    points: 30
  },
];

// MATH PUZZLES
export const mathPuzzles: Puzzle[] = [
  {
    id: 'math-b-1',
    category: 'math-puzzles',
    difficulty: 'beginner',
    question: 'If you have 15 apples and give away 7, how many do you have left?',
    options: ['6', '7', '8', '9'],
    correctAnswer: '8',
    explanation: '15 - 7 = 8 apples remaining.',
    timeLimit: 30,
    points: 10
  },
  {
    id: 'math-b-2',
    category: 'math-puzzles',
    difficulty: 'beginner',
    question: 'What is 25% of 80?',
    options: ['15', '20', '25', '30'],
    correctAnswer: '20',
    explanation: '25% of 80 = 0.25 × 80 = 20',
    timeLimit: 30,
    points: 10
  },
  {
    id: 'math-b-3',
    category: 'math-puzzles',
    difficulty: 'beginner',
    question: 'A rectangle has length 8 and width 5. What is its area?',
    options: ['13', '26', '40', '45'],
    correctAnswer: '40',
    explanation: 'Area = length × width = 8 × 5 = 40',
    timeLimit: 30,
    points: 10
  },
  {
    id: 'math-b-4',
    category: 'math-puzzles',
    difficulty: 'beginner',
    question: 'What is the value of 7 × 8?',
    options: ['54', '56', '58', '64'],
    correctAnswer: '56',
    explanation: '7 × 8 = 56. A classic multiplication fact!',
    timeLimit: 30,
    points: 10
  },
  {
    id: 'math-b-5',
    category: 'math-puzzles',
    difficulty: 'beginner',
    question: 'If a train travels 60 km in 1 hour, how far will it go in 3 hours?',
    options: ['120 km', '150 km', '180 km', '200 km'],
    correctAnswer: '180 km',
    explanation: 'Distance = Speed × Time = 60 × 3 = 180 km',
    timeLimit: 30,
    points: 10
  },
  {
    id: 'math-i-1',
    category: 'math-puzzles',
    difficulty: 'intermediate',
    question: 'What is the square root of 144?',
    options: ['10', '11', '12', '14'],
    correctAnswer: '12',
    explanation: '√144 = 12 because 12 × 12 = 144',
    timeLimit: 25,
    points: 15
  },
  {
    id: 'math-i-2',
    category: 'math-puzzles',
    difficulty: 'intermediate',
    question: 'Solve: 3x + 7 = 22. What is x?',
    options: ['3', '4', '5', '6'],
    correctAnswer: '5',
    explanation: '3x + 7 = 22 → 3x = 15 → x = 5',
    timeLimit: 25,
    points: 15
  },
  {
    id: 'math-i-3',
    category: 'math-puzzles',
    difficulty: 'intermediate',
    question: 'What is 15% of 200?',
    options: ['25', '30', '35', '40'],
    correctAnswer: '30',
    explanation: '15% of 200 = 0.15 × 200 = 30',
    timeLimit: 25,
    points: 15
  },
  {
    id: 'math-a-1',
    category: 'math-puzzles',
    difficulty: 'advanced',
    question: 'If x² - 5x + 6 = 0, what are the values of x?',
    options: ['1 and 6', '2 and 3', '-2 and -3', '1 and 5'],
    correctAnswer: '2 and 3',
    explanation: 'Factoring: (x-2)(x-3) = 0, so x = 2 or x = 3',
    timeLimit: 20,
    points: 20
  },
  {
    id: 'math-a-2',
    category: 'math-puzzles',
    difficulty: 'advanced',
    question: 'What is the value of 2⁸?',
    options: ['128', '256', '512', '1024'],
    correctAnswer: '256',
    explanation: '2⁸ = 2×2×2×2×2×2×2×2 = 256',
    timeLimit: 20,
    points: 20
  },
  {
    id: 'math-e-1',
    category: 'math-puzzles',
    difficulty: 'expert',
    question: 'What is the derivative of x³ + 2x²?',
    options: ['3x² + 4x', '3x² + 2x', 'x² + 4x', '3x + 4'],
    correctAnswer: '3x² + 4x',
    explanation: 'd/dx(x³) = 3x², d/dx(2x²) = 4x. Sum = 3x² + 4x',
    timeLimit: 15,
    points: 30
  },
];

// MEMORY SEQUENCE PUZZLES
export const memoryPuzzles: Puzzle[] = [
  {
    id: 'mem-b-1',
    category: 'memory-sequence',
    difficulty: 'beginner',
    question: 'Remember this sequence: 🔴 🔵 🟢. What was the second color?',
    options: ['🔴', '🔵', '🟢', '🟡'],
    correctAnswer: '🔵',
    explanation: 'The sequence was 🔴 🔵 🟢. The second item was 🔵 (blue).',
    timeLimit: 30,
    points: 10
  },
  {
    id: 'mem-b-2',
    category: 'memory-sequence',
    difficulty: 'beginner',
    question: 'Sequence: 3, 7, 2, 9. What was the third number?',
    options: ['3', '7', '2', '9'],
    correctAnswer: '2',
    explanation: 'The sequence was 3, 7, 2, 9. The third number was 2.',
    timeLimit: 30,
    points: 10
  },
  {
    id: 'mem-b-3',
    category: 'memory-sequence',
    difficulty: 'beginner',
    question: 'Sequence: A, E, I, O. What comes next?',
    options: ['P', 'Q', 'U', 'Y'],
    correctAnswer: 'U',
    explanation: 'These are vowels in order: A, E, I, O, U.',
    timeLimit: 30,
    points: 10
  },
  {
    id: 'mem-i-1',
    category: 'memory-sequence',
    difficulty: 'intermediate',
    question: 'Sequence: ⭐🌙☀️⭐🌙. What comes next?',
    options: ['⭐', '🌙', '☀️', '🌟'],
    correctAnswer: '☀️',
    explanation: 'The pattern repeats: ⭐🌙☀️, so next is ☀️.',
    timeLimit: 25,
    points: 15
  },
  {
    id: 'mem-i-2',
    category: 'memory-sequence',
    difficulty: 'intermediate',
    question: 'Sequence: 1, 4, 2, 5, 3, 6. What comes next?',
    options: ['4', '5', '6', '7'],
    correctAnswer: '4',
    explanation: 'Two interleaved sequences: 1,2,3,4 and 4,5,6,7. Next is 4.',
    timeLimit: 25,
    points: 15
  },
  {
    id: 'mem-a-1',
    category: 'memory-sequence',
    difficulty: 'advanced',
    question: 'Sequence: 🔺🔺🔵🔺🔺🔺🔵. How many 🔺 before next 🔵?',
    options: ['2', '3', '4', '5'],
    correctAnswer: '4',
    explanation: 'Pattern: 2 triangles, 3 triangles, 4 triangles before each blue.',
    timeLimit: 20,
    points: 20
  },
];

// SPATIAL REASONING PUZZLES
export const spatialPuzzles: Puzzle[] = [
  {
    id: 'sp-b-1',
    category: 'spatial-reasoning',
    difficulty: 'beginner',
    question: 'If you rotate the letter "N" 180°, what does it look like?',
    options: ['N', 'Z', 'И', 'Same N'],
    correctAnswer: 'N',
    explanation: 'The letter N looks the same when rotated 180 degrees!',
    timeLimit: 30,
    points: 10
  },
  {
    id: 'sp-b-2',
    category: 'spatial-reasoning',
    difficulty: 'beginner',
    question: 'How many sides does a hexagon have?',
    options: ['5', '6', '7', '8'],
    correctAnswer: '6',
    explanation: 'A hexagon has 6 sides. "Hexa" means six in Greek.',
    timeLimit: 30,
    points: 10
  },
  {
    id: 'sp-b-3',
    category: 'spatial-reasoning',
    difficulty: 'beginner',
    question: 'Which shape has no corners?',
    options: ['Square', 'Triangle', 'Circle', 'Rectangle'],
    correctAnswer: 'Circle',
    explanation: 'A circle is perfectly round with no corners or edges.',
    timeLimit: 30,
    points: 10
  },
  {
    id: 'sp-i-1',
    category: 'spatial-reasoning',
    difficulty: 'intermediate',
    question: 'A cube has how many faces?',
    options: ['4', '6', '8', '12'],
    correctAnswer: '6',
    explanation: 'A cube has 6 faces, 12 edges, and 8 vertices.',
    timeLimit: 25,
    points: 15
  },
  {
    id: 'sp-i-2',
    category: 'spatial-reasoning',
    difficulty: 'intermediate',
    question: 'If you unfold a cube, how many squares do you get?',
    options: ['4', '5', '6', '8'],
    correctAnswer: '6',
    explanation: 'An unfolded cube (net) shows all 6 faces as squares.',
    timeLimit: 25,
    points: 15
  },
  {
    id: 'sp-a-1',
    category: 'spatial-reasoning',
    difficulty: 'advanced',
    question: 'How many edges does a triangular pyramid (tetrahedron) have?',
    options: ['4', '5', '6', '8'],
    correctAnswer: '6',
    explanation: 'A tetrahedron has 4 faces, 4 vertices, and 6 edges.',
    timeLimit: 20,
    points: 20
  },
];

// CODE BREAKER PUZZLES
export const codeBreakerPuzzles: Puzzle[] = [
  {
    id: 'cb-b-1',
    category: 'code-breaker',
    difficulty: 'beginner',
    question: 'If A=1, B=2, C=3... What is CAB?',
    options: ['123', '312', '321', '213'],
    correctAnswer: '312',
    explanation: 'C=3, A=1, B=2. So CAB = 312',
    timeLimit: 30,
    points: 10
  },
  {
    id: 'cb-b-2',
    category: 'code-breaker',
    difficulty: 'beginner',
    question: 'Decode: 8-5-12-12-15 (A=1, B=2...)',
    options: ['HELLO', 'WORLD', 'HELP', 'HERO'],
    correctAnswer: 'HELLO',
    explanation: 'H=8, E=5, L=12, L=12, O=15 spells HELLO!',
    timeLimit: 30,
    points: 10
  },
  {
    id: 'cb-b-3',
    category: 'code-breaker',
    difficulty: 'beginner',
    question: 'If 🍎=1, 🍊=2, 🍋=3, what is 🍊+🍋?',
    options: ['3', '4', '5', '6'],
    correctAnswer: '5',
    explanation: '🍊=2 and 🍋=3, so 2+3=5',
    timeLimit: 30,
    points: 10
  },
  {
    id: 'cb-i-1',
    category: 'code-breaker',
    difficulty: 'intermediate',
    question: 'Caesar cipher: Shift each letter by 1. What is "IBM"?',
    options: ['HAL', 'JCN', 'HBM', 'ICN'],
    correctAnswer: 'HAL',
    explanation: 'Shift back by 1: I→H, B→A, M→L = HAL (famous computer!)',
    timeLimit: 25,
    points: 15
  },
  {
    id: 'cb-i-2',
    category: 'code-breaker',
    difficulty: 'intermediate',
    question: 'If CAT=24 (3+1+20), what is DOG?',
    options: ['26', '27', '28', '29'],
    correctAnswer: '26',
    explanation: 'D=4, O=15, G=7. Sum = 4+15+7 = 26',
    timeLimit: 25,
    points: 15
  },
  {
    id: 'cb-a-1',
    category: 'code-breaker',
    difficulty: 'advanced',
    question: 'Binary: What is 1010 in decimal?',
    options: ['8', '9', '10', '11'],
    correctAnswer: '10',
    explanation: '1010 = 1×8 + 0×4 + 1×2 + 0×1 = 8+2 = 10',
    timeLimit: 20,
    points: 20
  },
  {
    id: 'cb-a-2',
    category: 'code-breaker',
    difficulty: 'advanced',
    question: 'What is 15 in binary?',
    options: ['1110', '1111', '1100', '1011'],
    correctAnswer: '1111',
    explanation: '15 = 8+4+2+1 = 1111 in binary',
    timeLimit: 20,
    points: 20
  },
];

// RIDDLES
export const riddlePuzzles: Puzzle[] = [
  {
    id: 'rid-b-1',
    category: 'riddles',
    difficulty: 'beginner',
    question: 'I have hands but cannot clap. What am I?',
    options: ['Robot', 'Clock', 'Statue', 'Gloves'],
    correctAnswer: 'Clock',
    explanation: 'A clock has hour and minute hands but cannot clap!',
    timeLimit: 30,
    points: 10
  },
  {
    id: 'rid-b-2',
    category: 'riddles',
    difficulty: 'beginner',
    question: 'What has keys but no locks?',
    options: ['Door', 'Piano', 'Car', 'Safe'],
    correctAnswer: 'Piano',
    explanation: 'A piano has many keys (88!) but no locks.',
    timeLimit: 30,
    points: 10
  },
  {
    id: 'rid-b-3',
    category: 'riddles',
    difficulty: 'beginner',
    question: 'What gets wetter the more it dries?',
    options: ['Sponge', 'Towel', 'Paper', 'Cloth'],
    correctAnswer: 'Towel',
    explanation: 'A towel gets wetter as it dries other things!',
    timeLimit: 30,
    points: 10
  },
  {
    id: 'rid-b-4',
    category: 'riddles',
    difficulty: 'beginner',
    question: 'What has a head and tail but no body?',
    options: ['Snake', 'Coin', 'Fish', 'Arrow'],
    correctAnswer: 'Coin',
    explanation: 'A coin has a head side and tail side but no body!',
    timeLimit: 30,
    points: 10
  },
  {
    id: 'rid-i-1',
    category: 'riddles',
    difficulty: 'intermediate',
    question: 'The more you take, the more you leave behind. What am I?',
    options: ['Money', 'Time', 'Footsteps', 'Breath'],
    correctAnswer: 'Footsteps',
    explanation: 'The more steps you take, the more footprints you leave!',
    timeLimit: 25,
    points: 15
  },
  {
    id: 'rid-i-2',
    category: 'riddles',
    difficulty: 'intermediate',
    question: 'I speak without a mouth and hear without ears. What am I?',
    options: ['Echo', 'Wind', 'Shadow', 'Dream'],
    correctAnswer: 'Echo',
    explanation: 'An echo repeats sounds without having a mouth or ears.',
    timeLimit: 25,
    points: 15
  },
  {
    id: 'rid-a-1',
    category: 'riddles',
    difficulty: 'advanced',
    question: 'I can be cracked, made, told, and played. What am I?',
    options: ['Code', 'Joke', 'Egg', 'Game'],
    correctAnswer: 'Joke',
    explanation: 'You can crack a joke, make a joke, tell a joke, and play a joke!',
    timeLimit: 20,
    points: 20
  },
];

// SPEED MATH
export const speedMathPuzzles: Puzzle[] = [
  {
    id: 'sm-b-1',
    category: 'speed-math',
    difficulty: 'beginner',
    question: '⚡ Quick! 9 + 6 = ?',
    options: ['13', '14', '15', '16'],
    correctAnswer: '15',
    explanation: '9 + 6 = 15. Speed is key!',
    timeLimit: 10,
    points: 10
  },
  {
    id: 'sm-b-2',
    category: 'speed-math',
    difficulty: 'beginner',
    question: '⚡ Quick! 12 - 5 = ?',
    options: ['5', '6', '7', '8'],
    correctAnswer: '7',
    explanation: '12 - 5 = 7',
    timeLimit: 10,
    points: 10
  },
  {
    id: 'sm-b-3',
    category: 'speed-math',
    difficulty: 'beginner',
    question: '⚡ Quick! 4 × 5 = ?',
    options: ['18', '20', '22', '25'],
    correctAnswer: '20',
    explanation: '4 × 5 = 20',
    timeLimit: 10,
    points: 10
  },
  {
    id: 'sm-i-1',
    category: 'speed-math',
    difficulty: 'intermediate',
    question: '⚡ Quick! 15 × 4 = ?',
    options: ['50', '55', '60', '65'],
    correctAnswer: '60',
    explanation: '15 × 4 = 60',
    timeLimit: 8,
    points: 15
  },
  {
    id: 'sm-i-2',
    category: 'speed-math',
    difficulty: 'intermediate',
    question: '⚡ Quick! 144 ÷ 12 = ?',
    options: ['10', '11', '12', '13'],
    correctAnswer: '12',
    explanation: '144 ÷ 12 = 12',
    timeLimit: 8,
    points: 15
  },
  {
    id: 'sm-a-1',
    category: 'speed-math',
    difficulty: 'advanced',
    question: '⚡ Quick! 17 × 6 = ?',
    options: ['92', '97', '102', '107'],
    correctAnswer: '102',
    explanation: '17 × 6 = 102',
    timeLimit: 6,
    points: 20
  },
  {
    id: 'sm-e-1',
    category: 'speed-math',
    difficulty: 'expert',
    question: '⚡ Quick! 25² = ?',
    options: ['525', '575', '625', '675'],
    correctAnswer: '625',
    explanation: '25 × 25 = 625',
    timeLimit: 5,
    points: 30
  },
];

// VISUAL PUZZLES
export const visualPuzzles: Puzzle[] = [
  {
    id: 'vis-b-1',
    category: 'visual-puzzles',
    difficulty: 'beginner',
    question: 'Count the triangles: △ △ △ △ △ △',
    options: ['4', '5', '6', '7'],
    correctAnswer: '6',
    explanation: 'There are exactly 6 triangles shown.',
    timeLimit: 30,
    points: 10
  },
  {
    id: 'vis-b-2',
    category: 'visual-puzzles',
    difficulty: 'beginner',
    question: 'Which is different? 🔵 🔵 🔵 🔴 🔵',
    options: ['1st', '2nd', '4th', '5th'],
    correctAnswer: '4th',
    explanation: 'The 4th circle is red while others are blue.',
    timeLimit: 30,
    points: 10
  },
  {
    id: 'vis-b-3',
    category: 'visual-puzzles',
    difficulty: 'beginner',
    question: 'How many squares? ⬜⬜⬜⬜⬜⬜⬜⬜',
    options: ['6', '7', '8', '9'],
    correctAnswer: '8',
    explanation: 'Count carefully - there are 8 squares!',
    timeLimit: 30,
    points: 10
  },
  {
    id: 'vis-i-1',
    category: 'visual-puzzles',
    difficulty: 'intermediate',
    question: 'Mirror image of "b" is:',
    options: ['b', 'd', 'p', 'q'],
    correctAnswer: 'd',
    explanation: 'When you mirror "b" horizontally, you get "d".',
    timeLimit: 25,
    points: 15
  },
  {
    id: 'vis-i-2',
    category: 'visual-puzzles',
    difficulty: 'intermediate',
    question: 'Rotate "p" 180°:',
    options: ['p', 'd', 'b', 'q'],
    correctAnswer: 'd',
    explanation: 'Rotating "p" by 180° gives you "d".',
    timeLimit: 25,
    points: 15
  },
  {
    id: 'vis-a-1',
    category: 'visual-puzzles',
    difficulty: 'advanced',
    question: 'In a 3×3 grid, how many total squares (including overlapping)?',
    options: ['9', '10', '13', '14'],
    correctAnswer: '14',
    explanation: '9 small (1×1) + 4 medium (2×2) + 1 large (3×3) = 14 squares!',
    timeLimit: 20,
    points: 20
  },
];

// WORD SCRAMBLE
export const wordScramblePuzzles: Puzzle[] = [
  {
    id: 'ws-b-1',
    category: 'word-scramble',
    difficulty: 'beginner',
    question: 'Unscramble: OOLSCH',
    options: ['SCHOOL', 'CHOOSE', 'STOOLS', 'COLORS'],
    correctAnswer: 'SCHOOL',
    explanation: 'OOLSCH unscrambles to SCHOOL!',
    timeLimit: 30,
    points: 10
  },
  {
    id: 'ws-b-2',
    category: 'word-scramble',
    difficulty: 'beginner',
    question: 'Unscramble: ELPPA',
    options: ['APPLE', 'PAPER', 'PLACE', 'PLANE'],
    correctAnswer: 'APPLE',
    explanation: 'ELPPA unscrambles to APPLE!',
    timeLimit: 30,
    points: 10
  },
  {
    id: 'ws-b-3',
    category: 'word-scramble',
    difficulty: 'beginner',
    question: 'Unscramble: USEMO',
    options: ['MOUSE', 'HOUSE', 'MOOSE', 'MUSIC'],
    correctAnswer: 'MOUSE',
    explanation: 'USEMO unscrambles to MOUSE!',
    timeLimit: 30,
    points: 10
  },
  {
    id: 'ws-i-1',
    category: 'word-scramble',
    difficulty: 'intermediate',
    question: 'Unscramble: ZZELUP',
    options: ['PUZZLE', 'PIZZLE', 'MUZZLE', 'NUZZLE'],
    correctAnswer: 'PUZZLE',
    explanation: 'ZZELUP unscrambles to PUZZLE!',
    timeLimit: 25,
    points: 15
  },
  {
    id: 'ws-i-2',
    category: 'word-scramble',
    difficulty: 'intermediate',
    question: 'Unscramble: RAINBOW',
    options: ['RAINBOW', 'BROWNIE', 'WARRIOR', 'AIRBORN'],
    correctAnswer: 'RAINBOW',
    explanation: 'RAINBOW is already RAINBOW - trick question!',
    timeLimit: 25,
    points: 15
  },
  {
    id: 'ws-a-1',
    category: 'word-scramble',
    difficulty: 'advanced',
    question: 'Unscramble: TNEGILLIENT',
    options: ['INTELLIGENT', 'NEGLIGENT', 'DILIGENT', 'EXCELLENT'],
    correctAnswer: 'INTELLIGENT',
    explanation: 'TNEGILLIENT unscrambles to INTELLIGENT!',
    timeLimit: 20,
    points: 20
  },
];

// Export all additional puzzles combined
export const allAdditionalPuzzles: Puzzle[] = [
  ...gkPuzzles,
  ...mathPuzzles,
  ...memoryPuzzles,
  ...spatialPuzzles,
  ...codeBreakerPuzzles,
  ...riddlePuzzles,
  ...speedMathPuzzles,
  ...visualPuzzles,
  ...wordScramblePuzzles,
];


// SEQUENCE COMPLETION PUZZLES
export const sequencePuzzles: Puzzle[] = [
  {
    id: 'seq-b-1',
    category: 'sequence-completion',
    difficulty: 'beginner',
    question: 'Complete: Monday, Tuesday, Wednesday, ___',
    options: ['Friday', 'Thursday', 'Saturday', 'Sunday'],
    correctAnswer: 'Thursday',
    explanation: 'Days of the week in order: Thursday comes after Wednesday.',
    timeLimit: 30,
    points: 10
  },
  {
    id: 'seq-b-2',
    category: 'sequence-completion',
    difficulty: 'beginner',
    question: 'Complete: January, February, March, ___',
    options: ['May', 'April', 'June', 'July'],
    correctAnswer: 'April',
    explanation: 'Months of the year: April follows March.',
    timeLimit: 30,
    points: 10
  },
  {
    id: 'seq-b-3',
    category: 'sequence-completion',
    difficulty: 'beginner',
    question: 'Complete: Red, Orange, Yellow, ___',
    options: ['Blue', 'Green', 'Purple', 'Pink'],
    correctAnswer: 'Green',
    explanation: 'Rainbow colors (ROYGBIV): Green comes after Yellow.',
    timeLimit: 30,
    points: 10
  },
  {
    id: 'seq-b-4',
    category: 'sequence-completion',
    difficulty: 'beginner',
    question: 'Complete: First, Second, Third, ___',
    options: ['Fifth', 'Fourth', 'Sixth', 'Last'],
    correctAnswer: 'Fourth',
    explanation: 'Ordinal numbers in sequence: Fourth follows Third.',
    timeLimit: 30,
    points: 10
  },
  {
    id: 'seq-b-5',
    category: 'sequence-completion',
    difficulty: 'beginner',
    question: 'Complete: Spring, Summer, Autumn, ___',
    options: ['Spring', 'Winter', 'Fall', 'Rain'],
    correctAnswer: 'Winter',
    explanation: 'The four seasons: Winter completes the cycle.',
    timeLimit: 30,
    points: 10
  },
  {
    id: 'seq-i-1',
    category: 'sequence-completion',
    difficulty: 'intermediate',
    question: 'Complete: Mercury, Venus, Earth, ___',
    options: ['Jupiter', 'Mars', 'Saturn', 'Moon'],
    correctAnswer: 'Mars',
    explanation: 'Planets from the Sun: Mars is the 4th planet.',
    timeLimit: 25,
    points: 15
  },
  {
    id: 'seq-i-2',
    category: 'sequence-completion',
    difficulty: 'intermediate',
    question: 'Complete: Bronze, Silver, Gold, ___',
    options: ['Diamond', 'Platinum', 'Iron', 'Copper'],
    correctAnswer: 'Platinum',
    explanation: 'Medal/ranking tiers often go: Bronze → Silver → Gold → Platinum.',
    timeLimit: 25,
    points: 15
  },
  {
    id: 'seq-i-3',
    category: 'sequence-completion',
    difficulty: 'intermediate',
    question: 'Complete: Larva, Pupa, ___',
    options: ['Egg', 'Adult', 'Caterpillar', 'Cocoon'],
    correctAnswer: 'Adult',
    explanation: 'Insect life cycle: Egg → Larva → Pupa → Adult.',
    timeLimit: 25,
    points: 15
  },
  {
    id: 'seq-a-1',
    category: 'sequence-completion',
    difficulty: 'advanced',
    question: 'Complete: Hydrogen, Helium, Lithium, ___',
    options: ['Carbon', 'Beryllium', 'Boron', 'Nitrogen'],
    correctAnswer: 'Beryllium',
    explanation: 'Periodic table order: Beryllium (Be) is element #4.',
    timeLimit: 20,
    points: 20
  },
  {
    id: 'seq-a-2',
    category: 'sequence-completion',
    difficulty: 'advanced',
    question: 'Complete: Alpha, Beta, Gamma, ___',
    options: ['Epsilon', 'Delta', 'Omega', 'Theta'],
    correctAnswer: 'Delta',
    explanation: 'Greek alphabet order: Alpha, Beta, Gamma, Delta.',
    timeLimit: 20,
    points: 20
  },
  {
    id: 'seq-e-1',
    category: 'sequence-completion',
    difficulty: 'expert',
    question: 'Complete: Do, Re, Mi, Fa, Sol, ___',
    options: ['Ti', 'La', 'Si', 'Do'],
    correctAnswer: 'La',
    explanation: 'Musical solfège scale: Do, Re, Mi, Fa, Sol, La, Ti, Do.',
    timeLimit: 15,
    points: 30
  },
];

// TRUE OR FALSE QUIZ
export const trueFalsePuzzles: Puzzle[] = [
  {
    id: 'tf-b-1',
    category: 'true-false',
    difficulty: 'beginner',
    question: 'True or False: The Sun rises in the East.',
    options: ['True', 'False'],
    correctAnswer: 'True',
    explanation: 'The Sun always rises in the East and sets in the West.',
    timeLimit: 20,
    points: 10
  },
  {
    id: 'tf-b-2',
    category: 'true-false',
    difficulty: 'beginner',
    question: 'True or False: Spiders have 6 legs.',
    options: ['True', 'False'],
    correctAnswer: 'False',
    explanation: 'Spiders have 8 legs. Insects have 6 legs.',
    timeLimit: 20,
    points: 10
  },
  {
    id: 'tf-b-3',
    category: 'true-false',
    difficulty: 'beginner',
    question: 'True or False: Water boils at 100°C.',
    options: ['True', 'False'],
    correctAnswer: 'True',
    explanation: 'At sea level, water boils at 100°C (212°F).',
    timeLimit: 20,
    points: 10
  },
  {
    id: 'tf-b-4',
    category: 'true-false',
    difficulty: 'beginner',
    question: 'True or False: The Moon produces its own light.',
    options: ['True', 'False'],
    correctAnswer: 'False',
    explanation: 'The Moon reflects sunlight; it doesn\'t produce its own light.',
    timeLimit: 20,
    points: 10
  },
  {
    id: 'tf-b-5',
    category: 'true-false',
    difficulty: 'beginner',
    question: 'True or False: A triangle has 4 sides.',
    options: ['True', 'False'],
    correctAnswer: 'False',
    explanation: 'A triangle has 3 sides. "Tri" means three.',
    timeLimit: 20,
    points: 10
  },
  {
    id: 'tf-i-1',
    category: 'true-false',
    difficulty: 'intermediate',
    question: 'True or False: Sound travels faster than light.',
    options: ['True', 'False'],
    correctAnswer: 'False',
    explanation: 'Light travels much faster than sound (300,000 km/s vs 343 m/s).',
    timeLimit: 15,
    points: 15
  },
  {
    id: 'tf-i-2',
    category: 'true-false',
    difficulty: 'intermediate',
    question: 'True or False: The Great Wall of China is visible from space.',
    options: ['True', 'False'],
    correctAnswer: 'False',
    explanation: 'This is a myth. The Great Wall is too narrow to see from space.',
    timeLimit: 15,
    points: 15
  },
  {
    id: 'tf-i-3',
    category: 'true-false',
    difficulty: 'intermediate',
    question: 'True or False: Humans share about 60% DNA with bananas.',
    options: ['True', 'False'],
    correctAnswer: 'True',
    explanation: 'Surprisingly true! We share about 60% of our DNA with bananas.',
    timeLimit: 15,
    points: 15
  },
  {
    id: 'tf-a-1',
    category: 'true-false',
    difficulty: 'advanced',
    question: 'True or False: Venus is the hottest planet in our solar system.',
    options: ['True', 'False'],
    correctAnswer: 'True',
    explanation: 'Venus is hottest (465°C) due to its thick atmosphere, even though Mercury is closer to the Sun.',
    timeLimit: 12,
    points: 20
  },
  {
    id: 'tf-a-2',
    category: 'true-false',
    difficulty: 'advanced',
    question: 'True or False: Octopuses have three hearts.',
    options: ['True', 'False'],
    correctAnswer: 'True',
    explanation: 'Octopuses have 3 hearts: 2 pump blood to gills, 1 pumps to the body.',
    timeLimit: 12,
    points: 20
  },
  {
    id: 'tf-e-1',
    category: 'true-false',
    difficulty: 'expert',
    question: 'True or False: A day on Venus is longer than a year on Venus.',
    options: ['True', 'False'],
    correctAnswer: 'True',
    explanation: 'Venus rotates so slowly that one day (243 Earth days) is longer than its year (225 Earth days).',
    timeLimit: 10,
    points: 30
  },
];

// Update the combined export
export const allAdditionalPuzzlesUpdated: Puzzle[] = [
  ...gkPuzzles,
  ...mathPuzzles,
  ...memoryPuzzles,
  ...spatialPuzzles,
  ...codeBreakerPuzzles,
  ...riddlePuzzles,
  ...speedMathPuzzles,
  ...visualPuzzles,
  ...wordScramblePuzzles,
  ...sequencePuzzles,
  ...trueFalsePuzzles,
];
