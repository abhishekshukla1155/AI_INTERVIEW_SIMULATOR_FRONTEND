import { useState } from 'react';

export default function InterviewSummary({ answers = [], config = {}, onRestart }) {
  const [showDetails, setShowDetails] = useState(true);

  // 1. Dashboard Metric Calculations
  const totalQuestions = answers.length;
  const totalScoreSum = answers.reduce(
    (acc, item) => acc + (typeof item.score === 'number' ? item.score : 0),
    0
  );
  
  const overallScoreNum = totalQuestions > 0 ? totalScoreSum / totalQuestions : 0;
  const overallScore = overallScoreNum.toFixed(1); // e.g. "8.4"
  const performancePct = Math.round((overallScoreNum / 10) * 100); // e.g. 84

  // Performance Level classification
  const getPerformanceLevel = (pct) => {
    if (pct >= 90) return { label: 'Excellent', classSuffix: 'excellent' };
    if (pct >= 75) return { label: 'Very Good', classSuffix: 'very-good' };
    if (pct >= 60) return { label: 'Good', classSuffix: 'good' };
    if (pct >= 40) return { label: 'Needs Improvement', classSuffix: 'needs-imp' };
    return { label: 'Needs Significant Improvement', classSuffix: 'poor' };
  };

  const perfLevel = getPerformanceLevel(performancePct);

  // Score rating badge color helper
  const getRatingBadge = (score) => {
    if (score >= 8.0) return { classSuffix: 'high', label: 'Excellent' };
    if (score >= 5.0) return { classSuffix: 'med', label: 'Partially Correct' };
    return { classSuffix: 'low', label: 'Incorrect' };
  };

  return (
    <div className="summary-wrapper">
      <div className="summary-card">
        {/* Header */}
        <div className="summary-header">
          <div className="completed-badge">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </div>

          <h2 className="summary-title">Interview Completed!</h2>
          <p className="summary-subtitle">
            Here is your AI-evaluated technical interview performance dashboard.
          </p>

          {/* Configuration Summary Badges */}
          {config.category && (
            <div className="summary-config-badges">
              <span className="summary-config-chip">Topic: <strong>{config.category}</strong></span>
              <span className="summary-config-chip">Difficulty: <strong>{config.difficulty}</strong></span>
              <span className="summary-config-chip">Questions: <strong>{totalQuestions}</strong></span>
            </div>
          )}

          <div className="phase3-notice-badge">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="16" x2="12" y2="12"></line>
              <line x1="12" y1="8" x2="12.01" y2="8"></line>
            </svg>
            <span>Evaluated by FastAPI + DistilBERT NLP Engine</span>
          </div>
        </div>

        {/* Dashboard Metric Grid */}
        <div className="dashboard-metrics-grid">
          {/* Card 1: Overall Score */}
          <div className="metric-card metric-score">
            <span className="metric-label">Overall Score</span>
            <div className="metric-value-container">
              <span className="metric-primary-val">{overallScore}</span>
              <span className="metric-denom">/ 10</span>
            </div>
            <div className="metric-footer-badge">
              Average Evaluation
            </div>
          </div>

          {/* Card 2: Performance % */}
          <div className="metric-card metric-percentage">
            <span className="metric-label">Performance</span>
            <div className="metric-value-container">
              <span className="metric-primary-val">{performancePct}%</span>
            </div>
            <div className="metric-bar-track">
              <div 
                className="metric-bar-fill"
                style={{ width: `${Math.min(100, Math.max(0, performancePct))}%` }}
              ></div>
            </div>
          </div>

          {/* Card 3: Questions Completed */}
          <div className="metric-card metric-questions">
            <span className="metric-label">Questions</span>
            <div className="metric-value-container">
              <span className="metric-primary-val">{totalQuestions}</span>
              <span className="metric-denom">/ {totalQuestions}</span>
            </div>
            <div className="metric-footer-badge">
              100% Completed
            </div>
          </div>

          {/* Card 4: Performance Level */}
          <div className="metric-card metric-level">
            <span className="metric-label">Performance Level</span>
            <div className="metric-value-container">
              <span className={`level-pill level-${perfLevel.classSuffix}`}>
                {perfLevel.label}
              </span>
            </div>
            <div className="metric-footer-badge">
              Evaluation Rating
            </div>
          </div>
        </div>

        {/* Action Controls */}
        <div className="summary-actions">
          <button 
            className="btn-secondary" 
            onClick={() => setShowDetails(!showDetails)}
          >
            {showDetails ? 'Hide Detailed Breakdown' : 'View Detailed Breakdown'}
          </button>
          <button 
            id="restart-interview-btn" 
            className="btn-primary" 
            onClick={onRestart}
          >
            Restart Interview
          </button>
        </div>

        {/* Detailed Question Results List */}
        {showDetails && (
          <div className="summary-list">
            <h3 className="summary-list-title">Question-wise Results ({answers.length})</h3>

            {answers.map((item, index) => {
              const rating = getRatingBadge(item.score || 0);
              return (
                <div key={item.id || index} className={`summary-item item-rating-${rating.classSuffix}`}>
                  <div className="summary-item-header">
                    <div className="summary-item-meta">
                      <span className="summary-question-number">Question {index + 1}</span>
                      {item.category && (
                        <span className="summary-category-tag">{item.category}</span>
                      )}
                    </div>
                    <h4 className="summary-question-text">{item.question}</h4>
                  </div>

                  <div className="summary-user-answer-box">
                    <span className="user-answer-label">Your Answer:</span>
                    <p className="user-answer-text">{item.userAnswer}</p>
                  </div>

                  {item.score !== undefined && (
                    <div className="summary-feedback-box">
                      <div className="summary-score-header">
                        <div className={`score-badge score-${rating.classSuffix}`}>
                          Score: {typeof item.score === 'number' ? item.score.toFixed(1) : item.score} / 10
                        </div>
                      </div>
                      {item.feedback && (
                        <p className="feedback-text">
                          <strong>Feedback:</strong> {item.feedback}
                        </p>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
