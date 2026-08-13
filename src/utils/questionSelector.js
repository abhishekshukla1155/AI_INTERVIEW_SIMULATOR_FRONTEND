/**
 * Utility to select a random, non-repeating subset of questions from a question bank.
 *
 * @param {Array} questionBank - Array of question objects ({id, question, reference, category, ...})
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
