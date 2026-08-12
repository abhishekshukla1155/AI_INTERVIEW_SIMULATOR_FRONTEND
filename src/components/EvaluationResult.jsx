import React from 'react';
import './EvaluationResult.css';

/**
 * EvaluationResult Component
 * Displays the score and feedback returned from the evaluation API.
 *
 * Props:
 *   - score: number (e.g., 8.5)
 *   - feedback: string (e.g., "Excellent answer")
 */
export default function EvaluationResult({ score, feedback }) {
  // Guard against undefined props – render nothing if no data.
  if (score == null && !feedback) return null;

  // Format score to one decimal place if it's a number.
  const formattedScore = typeof score === 'number' ? score.toFixed(1) : score;

  return (
    <div className="evaluation-result">
      <h2 className="evaluation-title">Evaluation Result</h2>
      <div className="evaluation-content">
        {formattedScore != null && (
          <p className="evaluation-score">
            <strong>Score:</strong> {formattedScore} / 10
          </p>
        )}
        {feedback && (
          <div className="evaluation-feedback">
            <strong>Feedback:</strong>
            <p>{feedback}</p>
          </div>
        )}
      </div>
    </div>
  );
}
