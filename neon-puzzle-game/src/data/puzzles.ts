import type { Puzzle } from '../types/puzzle';

export const puzzles: Puzzle[] = [
  // NUMBER SERIES - BEGINNER
  {
    id: 'ns-b-1',
    category: 'number-series',
    difficulty: 'beginner',
    question: 'What comes next? 2, 4, 6, 8, ❓',
    options: ['9', '10', '11', '12'],
    correctAnswer: '10',
    explanation: 'This is an arithmetic sequence where each number increases by 2. So 8 + 2 = 10.',
    timeLimit: 30,
    points: 10
  },
  {
    id: 'ns-b-2',
    category: 'number-series',
    difficulty: 'beginner',
    question: 'What comes next? 5, 10, 15, 20, ❓',
    options: ['22', '25', '30', '24'],
    correctAnswer: '25',
    explanation: 'Each number increases by 5. So 20 + 5 = 25.',
    timeLimit: 30,
    points: 10
  },
  {
    id: 'ns-b-3',
    category: 'number-series',
    difficulty: 'beginner',
    question: 'What comes next? 1, 2, 3, 4, ❓',
    options: ['5', '6', '7', '8'],
    correctAnswer: '5',
    explanation: 'Simple counting sequence. Each number increases by 1.',
    timeLimit: 30,
    points: 10
  },
  {
    id: 'ns-b-4',
    category: 'number-series',
    difficulty: 'beginner',
    question: 'What comes next? 3, 6, 9, 12, ❓',
    options: ['14', '15', '16', '18'],
    correctAnswer: '15',
    explanation: 'Multiples of 3. Each number increases by 3. So 12 + 3 = 15.',
    timeLimit: 30,
    points: 10
  },
  {
    id: 'ns-b-5',
    category: 'number-series',
    difficulty: 'beginner',
    question: 'What comes next? 10, 20, 30, 40, ❓',
    options: ['45', '50', '55', '60'],
    correctAnswer: '50',
    explanation: 'Multiples of 10. Each number increases by 10.',
    timeLimit: 30,
    points: 10
  },
  // NUMBER SERIES - INTERMEDIATE
  {
    id: 'ns-i-1',
    category: 'number-series',
    difficulty: 'intermediate',
    question: 'What comes next? 1, 4, 9, 16, ❓',
    options: ['20', '25', '24', '36'],
    correctAnswer: '25',
    explanation: 'These are perfect squares: 1², 2², 3², 4², 5² = 25.',
    timeLimit: 25,
    points: 15
  },
  {
    id: 'ns-i-2',
    category: 'number-series',
    difficulty: 'intermediate',
    question: 'What comes next? 2, 6, 12, 20, ❓',
    options: ['28', '30', '32', '26'],
    correctAnswer: '30',
    explanation: 'Differences increase by 2: +4, +6, +8, +10. So 20 + 10 = 30.',
    timeLimit: 25,
    points: 15
  },
  {
    id: 'ns-i-3',
    category: 'number-series',
    difficulty: 'intermediate',
    question: 'What comes next? 1, 1, 2, 3, 5, 8, ❓',
    options: ['11', '12', '13', '10'],
    correctAnswer: '13',
    explanation: 'Fibonacci sequence! Each number is the sum of the two before it. 5 + 8 = 13.',
    timeLimit: 25,
    points: 15
  },
  {
    id: 'ns-i-4',
    category: 'number-series',
    difficulty: 'intermediate',
    question: 'What comes next? 3, 9, 27, 81, ❓',
    options: ['162', '243', '324', '108'],
    correctAnswer: '243',
    explanation: 'Each number is multiplied by 3. So 81 × 3 = 243.',
    timeLimit: 25,
    points: 15
  },
  {
    id: 'ns-i-5',
    category: 'number-series',
    difficulty: 'intermediate',
    question: 'What comes next? 2, 3, 5, 7, 11, ❓',
    options: ['12', '13', '14', '15'],
    correctAnswer: '13',
    explanation: 'These are prime numbers. The next prime after 11 is 13.',
    timeLimit: 25,
    points: 15
  },
  // NUMBER SERIES - ADVANCED
  {
    id: 'ns-a-1',
    category: 'number-series',
    difficulty: 'advanced',
    question: 'What comes next? 1, 8, 27, 64, ❓',
    options: ['100', '125', '216', '81'],
    correctAnswer: '125',
    explanation: 'These are perfect cubes: 1³, 2³, 3³, 4³, 5³ = 125.',
    timeLimit: 20,
    points: 20
  },
  {
    id: 'ns-a-2',
    category: 'number-series',
    difficulty: 'advanced',
    question: 'What comes next? 2, 5, 10, 17, 26, ❓',
    options: ['35', '37', '36', '38'],
    correctAnswer: '37',
    explanation: 'Pattern: n² + 1. For n=6: 36 + 1 = 37.',
    timeLimit: 20,
    points: 20
  },
  {
    id: 'ns-a-3',
    category: 'number-series',
    difficulty: 'advanced',
    question: 'What comes next? 4, 9, 25, 49, 121, ❓',
    options: ['144', '169', '196', '225'],
    correctAnswer: '169',
    explanation: 'Squares of prime numbers: 2², 3², 5², 7², 11², 13² = 169.',
    timeLimit: 20,
    points: 20
  },
  {
    id: 'ns-a-4',
    category: 'number-series',
    difficulty: 'advanced',
    question: 'What comes next? 1, 2, 6, 24, 120, ❓',
    options: ['240', '480', '720', '600'],
    correctAnswer: '720',
    explanation: 'Factorials! 1!, 2!, 3!, 4!, 5!, 6! = 720.',
    timeLimit: 20,
    points: 20
  },
  {
    id: 'ns-a-5',
    category: 'number-series',
    difficulty: 'advanced',
    question: 'What comes next? 0, 1, 1, 2, 4, 7, 13, ❓',
    options: ['20', '22', '24', '26'],
    correctAnswer: '24',
    explanation: 'Tribonacci sequence! Each number is sum of previous three: 4 + 7 + 13 = 24.',
    timeLimit: 20,
    points: 20
  },
  // NUMBER SERIES - EXPERT
  {
    id: 'ns-e-1',
    category: 'number-series',
    difficulty: 'expert',
    question: 'What comes next? 2, 12, 36, 80, 150, ❓',
    options: ['242', '252', '262', '272'],
    correctAnswer: '252',
    explanation: 'Pattern: n(n+1)². For n=6: 6 × 49 = 252.',
    timeLimit: 15,
    points: 30
  },
  {
    id: 'ns-e-2',
    category: 'number-series',
    difficulty: 'expert',
    question: 'What comes next? 1, 3, 7, 15, 31, ❓',
    options: ['47', '55', '63', '71'],
    correctAnswer: '63',
    explanation: 'Pattern: 2ⁿ - 1. For n=6: 64 - 1 = 63.',
    timeLimit: 15,
    points: 30
  },
  // LOGICAL PATTERNS - BEGINNER
  {
    id: 'lp-b-1',
    category: 'logical-patterns',
    difficulty: 'beginner',
    question: 'What comes next? 🔺 🔵 🔺 🔵 🔺 ❓',
    options: ['🔺', '🔵', '🟢', '🔴'],
    correctAnswer: '🔵',
    explanation: 'Alternating pattern between triangle and circle. Next is circle 🔵.',
    timeLimit: 30,
    points: 10
  },
  {
    id: 'lp-b-2',
    category: 'logical-patterns',
    difficulty: 'beginner',
    question: 'What comes next? A, C, E, G, ❓',
    options: ['H', 'I', 'J', 'K'],
    correctAnswer: 'I',
    explanation: 'Skipping one letter each time (A, B, C, D, E, F, G, H, I). Next is I.',
    timeLimit: 30,
    points: 10
  },
  {
    id: 'lp-b-3',
    category: 'logical-patterns',
    difficulty: 'beginner',
    question: 'What comes next? 🔴 🔴 🔵 🔵 🔴 🔴 ❓',
    options: ['🔴', '🔵', '🟢', '🟡'],
    correctAnswer: '🔵',
    explanation: 'Pattern repeats in pairs: two red, two blue. Next starts blue pair.',
    timeLimit: 30,
    points: 10
  },
  {
    id: 'lp-b-4',
    category: 'logical-patterns',
    difficulty: 'beginner',
    question: 'What comes next? Z, Y, X, W, ❓',
    options: ['U', 'V', 'T', 'S'],
    correctAnswer: 'V',
    explanation: 'Alphabet in reverse order. After W comes V.',
    timeLimit: 30,
    points: 10
  },
  {
    id: 'lp-b-5',
    category: 'logical-patterns',
    difficulty: 'beginner',
    question: 'What comes next? ⬆️ ➡️ ⬇️ ⬅️ ⬆️ ❓',
    options: ['⬆️', '➡️', '⬇️', '⬅️'],
    correctAnswer: '➡️',
    explanation: 'Rotating clockwise: up, right, down, left, up, right.',
    timeLimit: 30,
    points: 10
  },
  // LOGICAL PATTERNS - INTERMEDIATE
  {
    id: 'lp-i-1',
    category: 'logical-patterns',
    difficulty: 'intermediate',
    question: 'What comes next? AB, CD, EF, GH, ❓',
    options: ['HI', 'IJ', 'JK', 'KL'],
    correctAnswer: 'IJ',
    explanation: 'Consecutive letter pairs. After GH comes IJ.',
    timeLimit: 25,
    points: 15
  },
  {
    id: 'lp-i-2',
    category: 'logical-patterns',
    difficulty: 'intermediate',
    question: 'What comes next? 🟢 🔵 🔵 🟢 🔵 🔵 🔵 🟢 ❓',
    options: ['🟢', '🔵 🔵', '🔵 🔵 🔵 🔵', '🔴'],
    correctAnswer: '🔵 🔵 🔵 🔵',
    explanation: 'Pattern: 1 blue, 2 blues, 3 blues, 4 blues after each green.',
    timeLimit: 25,
    points: 15
  },
  {
    id: 'lp-i-3',
    category: 'logical-patterns',
    difficulty: 'intermediate',
    question: 'What comes next? AZ, BY, CX, DW, ❓',
    options: ['EU', 'EV', 'FU', 'FV'],
    correctAnswer: 'EV',
    explanation: 'First letter goes forward (A→B→C→D→E), second goes backward (Z→Y→X→W→V).',
    timeLimit: 25,
    points: 15
  },
  {
    id: 'lp-i-4',
    category: 'logical-patterns',
    difficulty: 'intermediate',
    question: 'What comes next? 1A, 2B, 3C, 4D, ❓',
    options: ['5E', '5F', '6E', '4E'],
    correctAnswer: '5E',
    explanation: 'Numbers increase by 1, letters follow alphabetically.',
    timeLimit: 25,
    points: 15
  },
  {
    id: 'lp-i-5',
    category: 'logical-patterns',
    difficulty: 'intermediate',
    question: 'What comes next? ⭐ ⭐⭐ ⭐⭐⭐ ⭐⭐⭐⭐ ❓',
    options: ['⭐⭐⭐⭐', '⭐⭐⭐⭐⭐', '⭐⭐⭐', '⭐'],
    correctAnswer: '⭐⭐⭐⭐⭐',
    explanation: 'Stars increase by one each time: 1, 2, 3, 4, 5.',
    timeLimit: 25,
    points: 15
  },
  // LOGICAL PATTERNS - ADVANCED
  {
    id: 'lp-a-1',
    category: 'logical-patterns',
    difficulty: 'advanced',
    question: 'What comes next? ACE, BDF, CEG, DFH, ❓',
    options: ['EGI', 'EFG', 'FGH', 'GHI'],
    correctAnswer: 'EGI',
    explanation: 'Each position shifts by 1: A→B→C→D→E, C→D→E→F→G, E→F→G→H→I.',
    timeLimit: 20,
    points: 20
  },
  {
    id: 'lp-a-2',
    category: 'logical-patterns',
    difficulty: 'advanced',
    question: 'What comes next? 🔴🔵, 🔵🟢, 🟢🟡, 🟡🟠, ❓',
    options: ['🟠🔴', '🟠🔵', '🔴🔵', '🟡🔴'],
    correctAnswer: '🟠🔴',
    explanation: 'Second color becomes first, new color added. Cycle continues: 🟠🔴.',
    timeLimit: 20,
    points: 20
  },
  {
    id: 'lp-a-3',
    category: 'logical-patterns',
    difficulty: 'advanced',
    question: 'What comes next? A1B, C2D, E3F, G4H, ❓',
    options: ['I5J', 'H5I', 'I6J', 'J5K'],
    correctAnswer: 'I5J',
    explanation: 'Letters skip by 2, numbers increase by 1. Next: I5J.',
    timeLimit: 20,
    points: 20
  },
  // LOGICAL PATTERNS - EXPERT
  {
    id: 'lp-e-1',
    category: 'logical-patterns',
    difficulty: 'expert',
    question: 'What comes next? ZA1, YB2, XC3, WD4, ❓',
    options: ['VE5', 'UE5', 'VF5', 'VE6'],
    correctAnswer: 'VE5',
    explanation: 'First letter decreases, second increases, number increases. V, E, 5.',
    timeLimit: 15,
    points: 30
  },
  {
    id: 'lp-e-2',
    category: 'logical-patterns',
    difficulty: 'expert',
    question: 'What comes next? 🔺1, 🔺🔺2, 🔺🔺🔺4, 🔺🔺🔺🔺7, ❓',
    options: ['🔺🔺🔺🔺🔺10', '🔺🔺🔺🔺🔺11', '🔺🔺🔺🔺🔺12', '🔺🔺🔺🔺🔺8'],
    correctAnswer: '🔺🔺🔺🔺🔺11',
    explanation: 'Triangles increase by 1. Numbers: +1, +2, +3, +4 = 11.',
    timeLimit: 15,
    points: 30
  },
  // MISSING NUMBER - BEGINNER
  {
    id: 'mn-b-1',
    category: 'missing-number',
    difficulty: 'beginner',
    question: '8 + 2 = 10, 10 + 5 = 15, 15 + ❓ = 25',
    options: ['5', '8', '10', '15'],
    correctAnswer: '10',
    explanation: '15 + 10 = 25. The missing number is 10.',
    timeLimit: 30,
    points: 10
  },
  {
    id: 'mn-b-2',
    category: 'missing-number',
    difficulty: 'beginner',
    question: '3 × 2 = 6, 4 × 3 = 12, 5 × ❓ = 20',
    options: ['3', '4', '5', '6'],
    correctAnswer: '4',
    explanation: '5 × 4 = 20. The missing number is 4.',
    timeLimit: 30,
    points: 10
  },
  {
    id: 'mn-b-3',
    category: 'missing-number',
    difficulty: 'beginner',
    question: '20 - 5 = 15, 15 - 5 = 10, 10 - ❓ = 5',
    options: ['3', '4', '5', '6'],
    correctAnswer: '5',
    explanation: 'Pattern subtracts 5 each time. 10 - 5 = 5.',
    timeLimit: 30,
    points: 10
  },
  {
    id: 'mn-b-4',
    category: 'missing-number',
    difficulty: 'beginner',
    question: '2 + 3 = 5, 5 + 3 = 8, 8 + 3 = ❓',
    options: ['10', '11', '12', '13'],
    correctAnswer: '11',
    explanation: 'Adding 3 each time. 8 + 3 = 11.',
    timeLimit: 30,
    points: 10
  },
  {
    id: 'mn-b-5',
    category: 'missing-number',
    difficulty: 'beginner',
    question: '100 ÷ 10 = 10, 50 ÷ 10 = 5, 30 ÷ 10 = ❓',
    options: ['2', '3', '4', '5'],
    correctAnswer: '3',
    explanation: '30 ÷ 10 = 3.',
    timeLimit: 30,
    points: 10
  },
  // MISSING NUMBER - INTERMEDIATE
  {
    id: 'mn-i-1',
    category: 'missing-number',
    difficulty: 'intermediate',
    question: 'If 2 → 4, 3 → 9, 4 → 16, then 5 → ❓',
    options: ['20', '25', '30', '35'],
    correctAnswer: '25',
    explanation: 'Pattern is squaring: n → n². So 5 → 25.',
    timeLimit: 25,
    points: 15
  },
  {
    id: 'mn-i-2',
    category: 'missing-number',
    difficulty: 'intermediate',
    question: 'If 1 → 2, 2 → 6, 3 → 12, then 4 → ❓',
    options: ['16', '18', '20', '24'],
    correctAnswer: '20',
    explanation: 'Pattern: n × (n+1). So 4 × 5 = 20.',
    timeLimit: 25,
    points: 15
  },
  {
    id: 'mn-i-3',
    category: 'missing-number',
    difficulty: 'intermediate',
    question: '(3, 5) → 8, (7, 2) → 9, (4, ❓) → 10',
    options: ['4', '5', '6', '7'],
    correctAnswer: '6',
    explanation: 'Sum of pairs: 3+5=8, 7+2=9, 4+6=10.',
    timeLimit: 25,
    points: 15
  },
  {
    id: 'mn-i-4',
    category: 'missing-number',
    difficulty: 'intermediate',
    question: '2² + 1 = 5, 3² + 1 = 10, 4² + 1 = ❓',
    options: ['15', '17', '19', '21'],
    correctAnswer: '17',
    explanation: '4² + 1 = 16 + 1 = 17.',
    timeLimit: 25,
    points: 15
  },
  {
    id: 'mn-i-5',
    category: 'missing-number',
    difficulty: 'intermediate',
    question: '(2, 3) → 6, (4, 5) → 20, (3, 4) → ❓',
    options: ['7', '10', '12', '14'],
    correctAnswer: '12',
    explanation: 'Product of pairs: 2×3=6, 4×5=20, 3×4=12.',
    timeLimit: 25,
    points: 15
  },
  // MISSING NUMBER - ADVANCED
  {
    id: 'mn-a-1',
    category: 'missing-number',
    difficulty: 'advanced',
    question: 'If 12 → 3, 20 → 5, 36 → 9, then 48 → ❓',
    options: ['10', '11', '12', '13'],
    correctAnswer: '12',
    explanation: 'Pattern: divide by 4. 48 ÷ 4 = 12.',
    timeLimit: 20,
    points: 20
  },
  {
    id: 'mn-a-2',
    category: 'missing-number',
    difficulty: 'advanced',
    question: '(2, 3, 4) → 24, (1, 5, 2) → 10, (3, 2, ❓) → 18',
    options: ['2', '3', '4', '5'],
    correctAnswer: '3',
    explanation: 'Product of three numbers: 3 × 2 × 3 = 18.',
    timeLimit: 20,
    points: 20
  },
  {
    id: 'mn-a-3',
    category: 'missing-number',
    difficulty: 'advanced',
    question: '1³ + 2³ = 9, 2³ + 3³ = 35, 3³ + 4³ = ❓',
    options: ['81', '91', '101', '111'],
    correctAnswer: '91',
    explanation: '27 + 64 = 91.',
    timeLimit: 20,
    points: 20
  },
  // MISSING NUMBER - EXPERT
  {
    id: 'mn-e-1',
    category: 'missing-number',
    difficulty: 'expert',
    question: 'If f(x) = x² - x, then f(5) - f(3) = ❓',
    options: ['12', '14', '16', '18'],
    correctAnswer: '14',
    explanation: 'f(5) = 25-5 = 20, f(3) = 9-3 = 6. 20-6 = 14.',
    timeLimit: 15,
    points: 30
  },
  {
    id: 'mn-e-2',
    category: 'missing-number',
    difficulty: 'expert',
    question: '(1,1) → 2, (2,2) → 8, (3,3) → 18, (4,4) → ❓',
    options: ['28', '30', '32', '36'],
    correctAnswer: '32',
    explanation: 'Pattern: n × n × 2 = 2n². For 4: 2 × 16 = 32.',
    timeLimit: 15,
    points: 30
  },
  // ODD ONE OUT - BEGINNER
  {
    id: 'ooo-b-1',
    category: 'odd-one-out',
    difficulty: 'beginner',
    question: 'Which one does NOT belong? Apple, Banana, Carrot, Mango',
    options: ['Apple', 'Banana', 'Carrot', 'Mango'],
    correctAnswer: 'Carrot',
    explanation: 'Carrot is a vegetable. The others are fruits.',
    timeLimit: 30,
    points: 10
  },
  {
    id: 'ooo-b-2',
    category: 'odd-one-out',
    difficulty: 'beginner',
    question: 'Which one does NOT belong? Dog, Cat, Fish, Lion',
    options: ['Dog', 'Cat', 'Fish', 'Lion'],
    correctAnswer: 'Fish',
    explanation: 'Fish lives in water. The others are land mammals.',
    timeLimit: 30,
    points: 10
  },
  {
    id: 'ooo-b-3',
    category: 'odd-one-out',
    difficulty: 'beginner',
    question: 'Which one does NOT belong? Square, Triangle, Circle, Cube',
    options: ['Square', 'Triangle', 'Circle', 'Cube'],
    correctAnswer: 'Cube',
    explanation: 'Cube is 3D. The others are 2D shapes.',
    timeLimit: 30,
    points: 10
  },
  {
    id: 'ooo-b-4',
    category: 'odd-one-out',
    difficulty: 'beginner',
    question: 'Which one does NOT belong? Red, Blue, Green, Happy',
    options: ['Red', 'Blue', 'Green', 'Happy'],
    correctAnswer: 'Happy',
    explanation: 'Happy is an emotion. The others are colors.',
    timeLimit: 30,
    points: 10
  },
  {
    id: 'ooo-b-5',
    category: 'odd-one-out',
    difficulty: 'beginner',
    question: 'Which one does NOT belong? 2, 4, 6, 9',
    options: ['2', '4', '6', '9'],
    correctAnswer: '9',
    explanation: '9 is odd. The others are even numbers.',
    timeLimit: 30,
    points: 10
  },
  // ODD ONE OUT - INTERMEDIATE
  {
    id: 'ooo-i-1',
    category: 'odd-one-out',
    difficulty: 'intermediate',
    question: 'Which one does NOT belong? 4, 9, 16, 24',
    options: ['4', '9', '16', '24'],
    correctAnswer: '24',
    explanation: '24 is not a perfect square. 4=2², 9=3², 16=4².',
    timeLimit: 25,
    points: 15
  },
  {
    id: 'ooo-i-2',
    category: 'odd-one-out',
    difficulty: 'intermediate',
    question: 'Which one does NOT belong? Mars, Venus, Moon, Jupiter',
    options: ['Mars', 'Venus', 'Moon', 'Jupiter'],
    correctAnswer: 'Moon',
    explanation: 'Moon is a satellite. The others are planets.',
    timeLimit: 25,
    points: 15
  },
  {
    id: 'ooo-i-3',
    category: 'odd-one-out',
    difficulty: 'intermediate',
    question: 'Which one does NOT belong? Python, Java, HTML, C++',
    options: ['Python', 'Java', 'HTML', 'C++'],
    correctAnswer: 'HTML',
    explanation: 'HTML is a markup language. The others are programming languages.',
    timeLimit: 25,
    points: 15
  },
  {
    id: 'ooo-i-4',
    category: 'odd-one-out',
    difficulty: 'intermediate',
    question: 'Which one does NOT belong? 2, 3, 5, 9',
    options: ['2', '3', '5', '9'],
    correctAnswer: '9',
    explanation: '9 is not prime (9 = 3×3). The others are prime numbers.',
    timeLimit: 25,
    points: 15
  },
  {
    id: 'ooo-i-5',
    category: 'odd-one-out',
    difficulty: 'intermediate',
    question: 'Which one does NOT belong? Whale, Shark, Dolphin, Seal',
    options: ['Whale', 'Shark', 'Dolphin', 'Seal'],
    correctAnswer: 'Shark',
    explanation: 'Shark is a fish. The others are mammals.',
    timeLimit: 25,
    points: 15
  },
  // ODD ONE OUT - ADVANCED
  {
    id: 'ooo-a-1',
    category: 'odd-one-out',
    difficulty: 'advanced',
    question: 'Which one does NOT belong? 1, 8, 27, 65',
    options: ['1', '8', '27', '65'],
    correctAnswer: '65',
    explanation: '65 is not a perfect cube. 1=1³, 8=2³, 27=3³, but 4³=64.',
    timeLimit: 20,
    points: 20
  },
  {
    id: 'ooo-a-2',
    category: 'odd-one-out',
    difficulty: 'advanced',
    question: 'Which one does NOT belong? Sonnet, Haiku, Novel, Limerick',
    options: ['Sonnet', 'Haiku', 'Novel', 'Limerick'],
    correctAnswer: 'Novel',
    explanation: 'Novel is prose. The others are forms of poetry.',
    timeLimit: 20,
    points: 20
  },
  {
    id: 'ooo-a-3',
    category: 'odd-one-out',
    difficulty: 'advanced',
    question: 'Which one does NOT belong? 121, 144, 169, __(196)__, 225',
    options: ['121', '144', '169', '225'],
    correctAnswer: '225',
    explanation: 'All are perfect squares, but 225=15² breaks the consecutive pattern (11², 12², 13², 14²).',
    timeLimit: 20,
    points: 20
  },
  // ODD ONE OUT - EXPERT
  {
    id: 'ooo-e-1',
    category: 'odd-one-out',
    difficulty: 'expert',
    question: 'Which one does NOT belong? 6, 28, 496, 500',
    options: ['6', '28', '496', '500'],
    correctAnswer: '500',
    explanation: '6, 28, 496 are perfect numbers (equal to sum of divisors). 500 is not.',
    timeLimit: 15,
    points: 30
  },
  {
    id: 'ooo-e-2',
    category: 'odd-one-out',
    difficulty: 'expert',
    question: 'Which one does NOT belong? 2, 3, 5, 7, 11, 15',
    options: ['2', '7', '11', '15'],
    correctAnswer: '15',
    explanation: '15 = 3×5, not prime. All others are prime numbers.',
    timeLimit: 15,
    points: 30
  },
  // WORD LOGIC - BEGINNER
  {
    id: 'wl-b-1',
    category: 'word-logic',
    difficulty: 'beginner',
    question: 'Hot is to Cold as Day is to ❓',
    options: ['Sun', 'Night', 'Light', 'Morning'],
    correctAnswer: 'Night',
    explanation: 'Hot and Cold are opposites. Day and Night are opposites.',
    timeLimit: 30,
    points: 10
  },
  {
    id: 'wl-b-2',
    category: 'word-logic',
    difficulty: 'beginner',
    question: 'Bird is to Fly as Fish is to ❓',
    options: ['Walk', 'Swim', 'Run', 'Jump'],
    correctAnswer: 'Swim',
    explanation: 'Birds fly, fish swim. Both are primary modes of movement.',
    timeLimit: 30,
    points: 10
  },
  {
    id: 'wl-b-3',
    category: 'word-logic',
    difficulty: 'beginner',
    question: 'Book is to Read as Song is to ❓',
    options: ['Write', 'Listen', 'Dance', 'Play'],
    correctAnswer: 'Listen',
    explanation: 'You read a book, you listen to a song.',
    timeLimit: 30,
    points: 10
  },
  {
    id: 'wl-b-4',
    category: 'word-logic',
    difficulty: 'beginner',
    question: 'Puppy is to Dog as Kitten is to ❓',
    options: ['Cat', 'Mouse', 'Rabbit', 'Bird'],
    correctAnswer: 'Cat',
    explanation: 'Puppy grows into Dog. Kitten grows into Cat.',
    timeLimit: 30,
    points: 10
  },
  {
    id: 'wl-b-5',
    category: 'word-logic',
    difficulty: 'beginner',
    question: 'Pen is to Write as Knife is to ❓',
    options: ['Eat', 'Cut', 'Cook', 'Sharp'],
    correctAnswer: 'Cut',
    explanation: 'Pen is used to write. Knife is used to cut.',
    timeLimit: 30,
    points: 10
  },
  // WORD LOGIC - INTERMEDIATE
  {
    id: 'wl-i-1',
    category: 'word-logic',
    difficulty: 'intermediate',
    question: 'Author is to Book as Composer is to ❓',
    options: ['Music', 'Song', 'Symphony', 'Instrument'],
    correctAnswer: 'Symphony',
    explanation: 'Author creates books. Composer creates symphonies/musical compositions.',
    timeLimit: 25,
    points: 15
  },
  {
    id: 'wl-i-2',
    category: 'word-logic',
    difficulty: 'intermediate',
    question: 'Telescope is to Stars as Microscope is to ❓',
    options: ['Planets', 'Cells', 'Mountains', 'Ocean'],
    correctAnswer: 'Cells',
    explanation: 'Telescope views distant stars. Microscope views tiny cells.',
    timeLimit: 25,
    points: 15
  },
  {
    id: 'wl-i-3',
    category: 'word-logic',
    difficulty: 'intermediate',
    question: 'Marathon is to Running as Triathlon is to ❓',
    options: ['Swimming', 'Cycling', 'Multiple Sports', 'Walking'],
    correctAnswer: 'Multiple Sports',
    explanation: 'Marathon is one sport (running). Triathlon combines multiple sports.',
    timeLimit: 25,
    points: 15
  },
  {
    id: 'wl-i-4',
    category: 'word-logic',
    difficulty: 'intermediate',
    question: 'Chronology is to Time as Geography is to ❓',
    options: ['History', 'Place', 'Science', 'Maps'],
    correctAnswer: 'Place',
    explanation: 'Chronology studies time. Geography studies places/locations.',
    timeLimit: 25,
    points: 15
  },
  {
    id: 'wl-i-5',
    category: 'word-logic',
    difficulty: 'intermediate',
    question: 'Optimist is to Hopeful as Pessimist is to ❓',
    options: ['Happy', 'Doubtful', 'Angry', 'Calm'],
    correctAnswer: 'Doubtful',
    explanation: 'Optimist is hopeful. Pessimist is doubtful/negative.',
    timeLimit: 25,
    points: 15
  },
  // WORD LOGIC - ADVANCED
  {
    id: 'wl-a-1',
    category: 'word-logic',
    difficulty: 'advanced',
    question: 'Archaeology is to Past as Futurology is to ❓',
    options: ['Present', 'Future', 'History', 'Science'],
    correctAnswer: 'Future',
    explanation: 'Archaeology studies the past. Futurology studies the future.',
    timeLimit: 20,
    points: 20
  },
  {
    id: 'wl-a-2',
    category: 'word-logic',
    difficulty: 'advanced',
    question: 'Herbivore is to Plants as Carnivore is to ❓',
    options: ['Vegetables', 'Meat', 'Fruits', 'Insects'],
    correctAnswer: 'Meat',
    explanation: 'Herbivores eat plants. Carnivores eat meat.',
    timeLimit: 20,
    points: 20
  },
  {
    id: 'wl-a-3',
    category: 'word-logic',
    difficulty: 'advanced',
    question: 'Democracy is to People as Monarchy is to ❓',
    options: ['President', 'King', 'Parliament', 'Citizens'],
    correctAnswer: 'King',
    explanation: 'Democracy is ruled by people. Monarchy is ruled by a king/queen.',
    timeLimit: 20,
    points: 20
  },
  // WORD LOGIC - EXPERT
  {
    id: 'wl-e-1',
    category: 'word-logic',
    difficulty: 'expert',
    question: 'Epistemology is to Knowledge as Ontology is to ❓',
    options: ['Being', 'Logic', 'Ethics', 'Beauty'],
    correctAnswer: 'Being',
    explanation: 'Epistemology studies knowledge. Ontology studies being/existence.',
    timeLimit: 15,
    points: 30
  },
  {
    id: 'wl-e-2',
    category: 'word-logic',
    difficulty: 'expert',
    question: 'Entropy is to Disorder as Syntropy is to ❓',
    options: ['Chaos', 'Order', 'Energy', 'Heat'],
    correctAnswer: 'Order',
    explanation: 'Entropy measures disorder. Syntropy represents order/organization.',
    timeLimit: 15,
    points: 30
  }
];

import { allAdditionalPuzzlesUpdated } from './additionalPuzzles';

// Combine all puzzles
export const allPuzzles: Puzzle[] = [...puzzles, ...allAdditionalPuzzlesUpdated];

export const getCategoryName = (category: string): string => {
  const names: Record<string, string> = {
    'number-series': 'Number Series',
    'logical-patterns': 'Logical Patterns',
    'missing-number': 'Missing Number',
    'odd-one-out': 'Odd One Out',
    'word-logic': 'Word & Verbal Logic',
    'general-knowledge': 'General Knowledge',
    'math-puzzles': 'Math Puzzles',
    'memory-sequence': 'Memory Sequence',
    'spatial-reasoning': 'Spatial Reasoning',
    'code-breaker': 'Code Breaker',
    'riddles': 'Riddles & Brain Teasers',
    'speed-math': 'Speed Math',
    'visual-puzzles': 'Visual Puzzles',
    'word-scramble': 'Word Scramble',
    'sequence-completion': 'Sequence Completion',
    'true-false': 'True or False'
  };
  return names[category] || category;
};

export const getCategoryIcon = (category: string): string => {
  const icons: Record<string, string> = {
    'number-series': '🔢',
    'logical-patterns': '🔺',
    'missing-number': '❓',
    'odd-one-out': '🎯',
    'word-logic': '📝',
    'general-knowledge': '🌍',
    'math-puzzles': '➕',
    'memory-sequence': '🧠',
    'spatial-reasoning': '📐',
    'code-breaker': '🔐',
    'riddles': '💡',
    'speed-math': '⚡',
    'visual-puzzles': '👁️',
    'word-scramble': '🔤',
    'sequence-completion': '📋',
    'true-false': '✅'
  };
  return icons[category] || '🧩';
};

export const getCategoryDescription = (category: string): string => {
  const descriptions: Record<string, string> = {
    'number-series': 'Find the pattern in number sequences',
    'logical-patterns': 'Identify visual and letter patterns',
    'missing-number': 'Find the missing value in equations',
    'odd-one-out': 'Spot what doesn\'t belong',
    'word-logic': 'Solve verbal analogies',
    'general-knowledge': 'Test your world knowledge',
    'math-puzzles': 'Solve fun math problems',
    'memory-sequence': 'Remember and recall sequences',
    'spatial-reasoning': 'Think in shapes and space',
    'code-breaker': 'Crack codes and ciphers',
    'riddles': 'Solve tricky brain teasers',
    'speed-math': 'Quick calculations under pressure',
    'visual-puzzles': 'Count, spot, and observe',
    'word-scramble': 'Unscramble jumbled words',
    'sequence-completion': 'Complete the sequence',
    'true-false': 'Fact or fiction?'
  };
  return descriptions[category] || '';
};

export const getDifficultyColor = (difficulty: string): string => {
  const colors: Record<string, string> = {
    'beginner': 'neon-green',
    'intermediate': 'neon-yellow',
    'advanced': 'neon-pink',
    'expert': 'neon-purple'
  };
  return colors[difficulty] || 'neon-cyan';
};
