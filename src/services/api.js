// src/services/api.js

export const API_BASE_URL = "http://127.0.0.1:8000";

/**
 * Sends a POST request to the FastAPI /evaluate endpoint.
 * @param {string} question - The interview question.
 * @param {string} reference - Reference answer for the question.
 * @param {string} user - The user-provided answer.
 * @returns {Promise<{score: number, feedback: string}>}
 */
export async function evaluateAnswer(question, reference, user) {
  const payload = {
    question,
    reference,
    user,
  };

  const response = await fetch(`${API_BASE_URL}/evaluate`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    // Throw an error to be caught by caller
    const errorText = await response.text();
    throw new Error(`API request failed with status ${response.status}: ${errorText}`);
  }

  const data = await response.json();
  // Expecting { score: number, feedback: string }
  if (typeof data.score !== "number" || typeof data.feedback !== "string") {
    throw new Error("Invalid response format from evaluation API");
  }
  return data;
}

/**
 * Fetches all interview questions from the FastAPI /questions endpoint.
 * @returns {Promise<Array<{id: number, question: string, reference: string}>>}
 */
export async function fetchQuestions() {
  const response = await fetch(`${API_BASE_URL}/questions`);

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Failed to fetch questions: ${response.status} ${errorText}`);
  }

  const data = await response.json();
  if (!Array.isArray(data)) {
    throw new Error("Invalid response format from /questions API");
  }
  return data;
}
