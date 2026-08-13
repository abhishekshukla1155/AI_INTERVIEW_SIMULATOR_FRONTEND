/**
 * Utility to select a random, non-repeating subset of questions from a question bank.
 *
 * @param {Array} questionBank - Array of question objects ({id, question, reference, category, difficulty})
 * @param {number} count - Number of questions to select
 * @returns {Array} - Array of randomly selected question objects
 */
export function getRandomQuestions(questionBank, count = 5) {
  if (!Array.isArray(questionBank) || questionBank.length === 0) {
    return [];
  }

  // Create a shallow copy to prevent mutating original array
  const pool = [...questionBank];

  // Fisher-Yates Shuffle for unbiased random sampling
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }

  // Pick up to `count` unique questions
  const selectSize = Math.min(count, pool.length);
  return pool.slice(0, selectSize);
}

/**
 * Filters questions by category (topic) and difficulty, then randomly samples non-repeating questions.
 *
 * @param {Array} questionBank - Array of question objects ({id, question, reference, category, difficulty})
 * @param {string} category - Selected topic category (or 'All Topics')
 * @param {string} difficulty - Selected difficulty level ('Easy', 'Medium', 'Hard', or 'All Difficulties')
 * @param {number} count - Desired number of questions
 * @returns {{ questions: Array, availableCount: number, warning: string|null, error: string|null }}
 */
export function filterAndSelectQuestions(questionBank, category, difficulty, count = 5) {
  if (!Array.isArray(questionBank) || questionBank.length === 0) {
    return { questions: [], availableCount: 0, warning: null, error: "Question bank is empty." };
  }

  // 1. Filter by category (unless 'All Topics')
  let filtered = questionBank;
  if (category && category !== 'All Topics') {
    filtered = filtered.filter(
      (q) => q.category && q.category.toLowerCase() === category.toLowerCase()
    );
  }

  // 2. Filter by difficulty (unless 'All Difficulties')
  if (difficulty && difficulty !== 'All Difficulties') {
    filtered = filtered.filter(
      (q) => q.difficulty && q.difficulty.toLowerCase() === difficulty.toLowerCase()
    );
  }

  const availableCount = filtered.length;

  if (availableCount === 0) {
    return {
      questions: [],
      availableCount: 0,
      warning: null,
      error: `No questions are available for "${category}" with "${difficulty}" difficulty.`
    };
  }

  // 3. Shuffle and select using getRandomQuestions
  const selected = getRandomQuestions(filtered, count);

  let warning = null;
  if (count > availableCount) {
    warning = `Only ${availableCount} question${availableCount > 1 ? 's' : ''} available for the selected topic and difficulty.`;
  }

  return {
    questions: selected,
    availableCount,
    warning,
    error: null
  };
}
