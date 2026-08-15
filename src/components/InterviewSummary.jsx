import { useState } from 'react';

export default function InterviewSummary({ answers = [], config = {}, onRestart, onGoToHistory }) {
  const [showDetails, setShowDetails] = useState(true);

  // 1. Dashboard Metric Calculations
  const totalQuestions = answers.length;
  const totalScoreSum = answers.reduce(
    (acc, item) => acc + (typeof item.score === 'number' ? item.score : 0),
    0
  );
  
  const overallScoreNum = totalQuestions > 0 ? totalScoreSum / totalQuestions : 0;
  const overallScore = overallScoreNum.toFixed(1);
  const performancePct = Math.round((overallScoreNum / 10) * 100);

  // Performance Level classification
  const getPerformanceLevel = (pct) => {
    if (pct >= 90) return { label: 'Excellent Performance', classSuffix: 'excellent' };
    if (pct >= 75) return { label: 'Very Good Performance', classSuffix: 'very-good' };
    if (pct >= 60) return { label: 'Good Performance', classSuffix: 'good' };
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

  const formattedDate = new Date().toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  });

  return (
    <div className="summary-wrapper">
      <div className="summary-card">
        {/* Main Scorecard Header */}
        <div className="summary-header">
          <div className="completed-badge">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </div>

          <h2 className="summary-title">Interview Completed!</h2>
          <p className="summary-subtitle">
            Here is your AI-evaluated technical interview performance breakdown.
          </p>

          <div className="score-hero-box">
            <div className="score-number-display">
              <span className="score-big">{overallScore}</span>
              <span className="score-max">/ 10</span>
            </div>
            <span className={`level-pill level-${perfLevel.classSuffix}`}>
              {perfLevel.label}
            </span>
          </div>

          {/* Configuration Summary Badges */}
          <div className="summary-config-badges">
            <span className="summary-config-chip">Topic: <strong>{config.category || 'General'}</strong></span>
            <span className="summary-config-chip">Difficulty: <strong>{config.difficulty || 'Medium'}</strong></span>
            <span className="summary-config-chip">Questions: <strong>{totalQuestions}</strong></span>
            <span className="summary-config-chip">Date: <strong>{formattedDate}</strong></span>
          </div>

          <div className="phase3-notice-badge">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="16" x2="12" y2="12"></line>
              <line x1="12" y1="8" x2="12.01" y2="8"></line>
            </svg>
            <span>Evaluated by FastAPI + DistilBERT NLP Engine</span>
          </div>
        </div>

        {/* Dashboard Metric Grid */}
        <div className="dashboard-metrics-grid">
          <div className="metric-card metric-score">
            <span className="metric-label">Overall Score</span>
            <div className="metric-value-container">
              <span className="metric-primary-val">{overallScore}</span>
              <span className="metric-denom">/ 10</span>
            </div>
            <div className="metric-footer-badge">Average Evaluation</div>
          </div>

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

          <div className="metric-card metric-questions">
            <span className="metric-label">Questions Completed</span>
            <div className="metric-value-container">
              <span className="metric-primary-val">{totalQuestions}</span>
              <span className="metric-denom">/ {totalQuestions}</span>
            </div>
            <div className="metric-footer-badge">100% Complete</div>
          </div>

          <div className="metric-card metric-level">
            <span className="metric-label">Performance Level</span>
            <div className="metric-value-container">
              <span className={`level-pill level-${perfLevel.classSuffix}`}>
                {perfLevel.label}
              </span>
            </div>
            <div className="metric-footer-badge">AI Rating</div>
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
          
          {onGoToHistory && (
            <button 
              className="btn-secondary" 
              onClick={onGoToHistory}
            >
              View History
            </button>
          )}

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
            <h3 className="summary-list-title">Performance Overview ({answers.length} Questions)</h3>

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
