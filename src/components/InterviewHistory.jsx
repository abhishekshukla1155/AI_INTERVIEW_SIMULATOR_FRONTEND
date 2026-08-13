import { useState, useEffect } from 'react';
import { getInterviewHistory, clearInterviewHistory } from '../utils/interviewHistory';

export default function InterviewHistory({ onClose, onRefreshHistory }) {
  const [historyList, setHistoryList] = useState([]);

  useEffect(() => {
    setHistoryList(getInterviewHistory());
  }, []);

  const handleClear = () => {
    if (window.confirm('Are you sure you want to clear your entire interview history? This action cannot be undone.')) {
      clearInterviewHistory();
      setHistoryList([]);
      if (onRefreshHistory) {
        onRefreshHistory();
      }
    }
  };

  const formatDate = (dateStr) => {
    try {
      const d = new Date(dateStr);
      if (isNaN(d.getTime())) return dateStr;
      const formattedDate = d.toLocaleDateString('en-GB', {
        day: '2-digit',
        month: 'short',
        year: 'numeric'
      });
      const formattedTime = d.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
      });
      return `${formattedDate}, ${formattedTime}`;
    } catch {
      return dateStr;
    }
  };

  const getScoreBadgeClass = (score) => {
    if (score >= 8.0) return 'score-high';
    if (score >= 5.0) return 'score-med';
    return 'score-low';
  };

  return (
    <div className="history-wrapper">
      <div className="history-card">
        <div className="history-header">
          <div className="history-title-group">
            <div className="history-icon-badge">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12 6 12 12 16 14"/>
              </svg>
            </div>
            <div>
              <h2 className="history-title">Interview History ({historyList.length})</h2>
              <p className="history-subtitle">Review your past completed interview scores and performance attempts.</p>
            </div>
          </div>

          <div className="history-header-actions">
            {historyList.length > 0 && (
              <button 
                id="clear-history-btn"
                type="button" 
                className="btn-danger-outline" 
                onClick={handleClear}
              >
                Clear History
              </button>
            )}
            {onClose && (
              <button 
                type="button" 
                className="btn-secondary btn-icon-only" 
                onClick={onClose}
                aria-label="Close history"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {historyList.length === 0 ? (
          <div className="history-empty-state">
            <div className="empty-icon-circle">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
                <line x1="16" y1="13" x2="8" y2="13"/>
                <line x1="16" y1="17" x2="8" y2="17"/>
                <polyline points="10 9 9 9 8 9"/>
              </svg>
            </div>
            <h3 className="empty-title">No interview history yet.</h3>
            <p className="empty-description">Complete an interview to see your results here.</p>
          </div>
        ) : (
          <div className="history-list">
            {historyList.map((item) => (
              <div key={item.id} className="history-item-card">
                <div className="history-item-top">
                  <span className="history-item-date">{formatDate(item.date)}</span>
                  <span className={`score-badge ${getScoreBadgeClass(item.score)}`}>
                    Score: {typeof item.score === 'number' ? item.score.toFixed(1) : item.score} / {item.maxScore || 10}
                  </span>
                </div>

                <div className="history-item-main">
                  <h3 className="history-item-topic">{item.topic} Interview</h3>
                  <div className="history-item-meta">
                    <span className="meta-chip">{item.difficulty}</span>
                    <span className="meta-dot">•</span>
                    <span className="meta-chip">{item.questionCount || item.totalQuestions} Questions</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
