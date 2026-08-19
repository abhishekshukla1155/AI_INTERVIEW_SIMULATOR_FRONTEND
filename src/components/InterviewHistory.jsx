import { useState, useEffect, useCallback } from 'react';
import { getInterviewHistoryApi } from '../services/api';

export default function InterviewHistory({ onClose }) {
  const [historyList, setHistoryList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchHistory = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const res = await getInterviewHistoryApi();
      if (res && res.success && Array.isArray(res.data)) {
        const formattedDbList = res.data.map((item) => ({
          id: item.id,
          topic: item.topic,
          difficulty: item.difficulty,
          questionCount: item.question_count,
          score: typeof item.score === 'number' ? Number(item.score.toFixed(1)) : item.score,
          date: item.completed_at,
          maxScore: 10
        }));
        setHistoryList(formattedDbList);
      } else {
        setHistoryList([]);
      }
    } catch (err) {
      console.warn("Could not fetch interview history from Supabase backend:", err.message);
      setError("Unable to load interview history. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchHistory();
  }, [fetchHistory]);

  const formatDate = (dateStr) => {
    if (!dateStr) return '';
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

        {isLoading ? (
          <div className="history-empty-state" style={{ padding: '3rem 1rem' }}>
            <div className="empty-icon-circle">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12 6 12 12 16 14"/>
              </svg>
            </div>
            <h3 className="empty-title">Loading interview history...</h3>
          </div>
        ) : error ? (
          <div className="history-empty-state" style={{ padding: '3rem 1rem' }}>
            <div className="empty-icon-circle" style={{ color: '#ef4444' }}>
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <line x1="12" y1="8" x2="12" y2="12"/>
                <line x1="12" y1="16" x2="12.01" y2="16"/>
              </svg>
            </div>
            <h3 className="empty-title">{error}</h3>
            <p className="empty-description">Could not connect to database backend.</p>
            <button type="button" className="btn-secondary" style={{ marginTop: '1rem' }} onClick={fetchHistory}>
              Retry
            </button>
          </div>
        ) : historyList.length === 0 ? (
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
            <p className="empty-description">Complete your first mock interview to see your results here.</p>
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


