/**
 * Helper to normalize category names for matching.
 */
export function normalizeCategory(cat) {
  if (!cat) return '';
  const lower = cat.trim().toLowerCase();
  if (lower === 'os' || lower === 'operating system' || lower === 'operating systems') return 'operating systems';
  if (lower === 'oop' || lower === 'oops' || lower === 'object-oriented programming' || lower === 'object oriented programming') return 'oop';
  if (lower === 'rest' || lower === 'rest api' || lower === 'restapis' || lower === 'restful api') return 'rest api';
  if (lower === 'ml' || lower === 'machine learning') return 'machine learning';
  if (lower === 'dl' || lower === 'deep learning') return 'deep learning';
  return lower;
}

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

  // Pick exact `count` unique questions (or up to pool length if smaller)
  const selectSize = Math.min(count, pool.length);
  return pool.slice(0, selectSize);
}

/**
 * Returns the count of matching questions in the bank for a given category and difficulty.
 *
 * @param {Array} questionBank
 * @param {string} category
 * @param {string} difficulty
 * @returns {number}
 */
export function getAvailableQuestionCount(questionBank, category, difficulty) {
  if (!Array.isArray(questionBank) || questionBank.length === 0) {
    return 0;
  }
  let filtered = questionBank;

  if (category && category !== 'All Topics') {
    const targetCat = normalizeCategory(category);
    filtered = filtered.filter(
      (q) => q.category && normalizeCategory(q.category) === targetCat
    );
  }

  if (difficulty && difficulty !== 'All Difficulties') {
    const targetDiff = difficulty.trim().toLowerCase();
    filtered = filtered.filter(
      (q) => q.difficulty && q.difficulty.trim().toLowerCase() === targetDiff
    );
  }

  return filtered.length;
}

/**
 * Filters questions by category (topic) and difficulty, then randomly samples non-repeating questions.
 * Enforces exact count validation: if fewer matching questions exist than requested count, returns an error.
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

  const desiredCount = Number(count) || 5;

  // 1. Filter by category (unless 'All Topics')
  let filtered = questionBank;
  if (category && category !== 'All Topics') {
    const targetCat = normalizeCategory(category);
    filtered = filtered.filter(
      (q) => q.category && normalizeCategory(q.category) === targetCat
    );
  }

  // 2. Filter by difficulty (unless 'All Difficulties')
  if (difficulty && difficulty !== 'All Difficulties') {
    const targetDiff = difficulty.trim().toLowerCase();
    filtered = filtered.filter(
      (q) => q.difficulty && q.difficulty.trim().toLowerCase() === targetDiff
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

  // 3. Validation: If available count is less than requested count, fail with error
  if (availableCount < desiredCount) {
    return {
      questions: [],
      availableCount,
      warning: null,
      error: `Only ${availableCount} ${difficulty} ${category} question${availableCount === 1 ? '' : 's'} available. Please choose a smaller number or another difficulty.`
    };
  }

  // 4. Shuffle and select exact number requested
  const selected = getRandomQuestions(filtered, desiredCount);

  // Guarantee no duplicates by ID
  const seenIds = new Set();
  const uniqueSelected = [];
  for (const q of selected) {
    if (!seenIds.has(q.id)) {
      seenIds.add(q.id);
      uniqueSelected.push(q);
    }
  }

  return {
    questions: uniqueSelected,
    availableCount,
    warning: null,
    error: null
  };
}
