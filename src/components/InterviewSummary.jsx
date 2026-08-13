import { useState } from 'react';

export default function InterviewSummary({ answers, onRestart }) {
  const [showDetails, setShowDetails] = useState(true);

  return (
    <div className="summary-wrapper">
      <div className="summary-card">
        <div className="summary-header">
          <div className="completed-badge">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </div>

          <h2 className="summary-title">Interview Completed!</h2>
          <p className="summary-subtitle">
            You have completed all interview questions. Your answers have been recorded locally for review.
          </p>

          <div className="phase3-notice-badge">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="16" x2="12" y2="12"></line>
              <line x1="12" y1="8" x2="12.01" y2="8"></line>
            </svg>
            <span>AI scoring is active via FastAPI + DistilBERT backend.</span>
          </div>
        </div>

        <div className="summary-actions">
          <button 
            className="btn-secondary" 
            onClick={() => setShowDetails(!showDetails)}
          >
            {showDetails ? 'Hide Answer Summary' : 'View Summary'}
          </button>
          <button 
            id="restart-interview-btn" 
            className="btn-primary" 
            onClick={onRestart}
          >
            Restart Interview
          </button>
        </div>

        {showDetails && (
          <div className="summary-list">
            <h3 className="summary-list-title">Evaluation Results ({answers.length})</h3>

            {answers.map((item, index) => (
              <div key={item.id || index} className="summary-item">
                <div className="summary-item-header">
                  <span className="summary-question-number">Question {index + 1}</span>
                  <span className="summary-question-text">{item.question}</span>
                </div>
                <div className="summary-user-answer-box">
                  <span className="user-answer-label">Your Answer:</span>
                  <p className="user-answer-text">{item.userAnswer}</p>
                </div>
                {item.score !== undefined && (
                  <div className="summary-feedback-box">
                    <div className="score-badge">Score: {item.score}/10</div>
                    {item.feedback && <p className="feedback-text"><em>Feedback:</em> {item.feedback}</p>}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
