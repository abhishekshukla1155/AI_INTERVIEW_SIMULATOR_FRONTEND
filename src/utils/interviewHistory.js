const STORAGE_KEY = 'ai_interview_history';

/**
 * Safely fetches interview history from localStorage.
 * Handles missing localStorage, invalid JSON, or errors gracefully.
 *
 * @returns {Array} Array of history record objects, newest first.
 */
export function getInterviewHistory() {
  try {
    if (typeof window === 'undefined' || !window.localStorage) {
      return [];
    }
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return [];
    }
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) {
      return [];
    }
    return parsed;
  } catch (err) {
    console.warn('Failed to read interview history from localStorage:', err);
    return [];
  }
}

/**
 * Saves a completed interview record to localStorage.
 * Guarantees no duplicate records for the same session ID.
 * Places newest interviews at the beginning of the array.
 *
 * @param {Object} record - The interview completion record.
 * @returns {Array} Updated history array.
 */
export function saveInterviewHistory(record) {
  if (!record || typeof record !== 'object') {
    return getInterviewHistory();
  }

  try {
    const existing = getInterviewHistory();

    // Check for duplicate record ID or session ID
    const duplicate = existing.some(
      (item) => (record.id && item.id === record.id) || (record.sessionId && item.sessionId === record.sessionId)
    );

    if (duplicate) {
      console.log('[Interview History] Record already saved for this session, skipping duplicate.');
      return existing;
    }

    const newRecord = {
      id: record.id || `hist_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
      sessionId: record.sessionId || record.id,
      date: record.date || new Date().toISOString(),
      topic: record.topic || 'General',
      difficulty: record.difficulty || 'Medium',
      questionCount: Number(record.questionCount) || 5,
      score: Number(record.score) || 0,
      maxScore: Number(record.maxScore) || 10,
      answeredQuestions: Number(record.answeredQuestions) || Number(record.questionCount) || 5,
      totalQuestions: Number(record.totalQuestions) || Number(record.questionCount) || 5
    };

    const updated = [newRecord, ...existing];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    console.log('[Interview History] Saved new completed interview record:', newRecord);
    return updated;
  } catch (err) {
    console.warn('Failed to save interview history to localStorage:', err);
    return getInterviewHistory();
  }
}

/**
 * Clears all interview history from localStorage.
 *
 * @returns {Array} Empty array.
 */
export function clearInterviewHistory() {
  try {
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.removeItem(STORAGE_KEY);
    }
  } catch (err) {
    console.warn('Failed to clear interview history from localStorage:', err);
  }
  return [];
}
