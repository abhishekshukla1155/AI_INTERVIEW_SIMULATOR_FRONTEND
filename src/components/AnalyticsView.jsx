import { useMemo } from 'react';
import { getInterviewHistory } from '../utils/interviewHistory';

export default function AnalyticsView({ onStartInterview }) {
  const history = useMemo(() => getInterviewHistory(), []);

  const stats = useMemo(() => {
    if (!history || history.length === 0) {
      return {
        totalInterviews: 0,
        avgScore: 0,
        totalQuestions: 0,
        topTopic: 'N/A',
        topicBreakdown: {}
      };
    }

    const totalInterviews = history.length;
    const totalScoreSum = history.reduce((sum, h) => sum + (h.score || 0), 0);
    const avgScore = (totalScoreSum / totalInterviews).toFixed(1);
    const totalQuestions = history.reduce((sum, h) => sum + (h.questionCount || 0), 0);

    const topicScores = {};
    history.forEach(h => {
      const topic = h.topic || 'General';
      if (!topicScores[topic]) {
        topicScores[topic] = { total: 0, count: 0 };
      }
      topicScores[topic].total += h.score || 0;
      topicScores[topic].count += 1;
    });

    let topTopic = 'N/A';
    let highestAvg = -1;
    Object.keys(topicScores).forEach(t => {
      const topicAvg = topicScores[t].total / topicScores[t].count;
      if (topicAvg > highestAvg) {
        highestAvg = topicAvg;
        topTopic = t;
      }
    });

    return {
      totalInterviews,
      avgScore,
      totalQuestions,
      topTopic,
      topicBreakdown: topicScores
    };
  }, [history]);

  return (
    <main className="analytics-view-wrapper">
      <section className="analytics-header text-center">
        <div className="hero-badge" style={{ marginBottom: '1.25rem' }}>
          <span className="badge-pulse"></span>
          <span className="badge-text">IntervAIQ Candidate Analytics</span>
        </div>

        <h1 className="hero-heading">
          Performance <span className="gradient-text">Insights.</span>
        </h1>

        <p className="hero-description" style={{ maxWidth: '680px', margin: '0 auto 2.5rem' }}>
          Track your technical interview progress, review average scores, and pinpoint areas for continuous improvement.
        </p>
      </section>

      {/* Metrics Grid */}
      <section className="analytics-metrics-grid">
        <div className="analytics-metric-card">
          <div className="metric-icon">🎯</div>
          <div className="metric-value">{stats.totalInterviews}</div>
          <div className="metric-label">Interviews Completed</div>
        </div>

        <div className="analytics-metric-card">
          <div className="metric-icon">⭐</div>
          <div className="metric-value">{stats.avgScore} <span className="metric-unit">/ 10</span></div>
          <div className="metric-label">Average Score</div>
        </div>

        <div className="analytics-metric-card">
          <div className="metric-icon">❓</div>
          <div className="metric-value">{stats.totalQuestions}</div>
          <div className="metric-label">Questions Answered</div>
        </div>

        <div className="analytics-metric-card">
          <div className="metric-icon">🏆</div>
          <div className="metric-value metric-text-sm">{stats.topTopic}</div>
          <div className="metric-label">Strongest Topic</div>
        </div>
      </section>

      {/* Breakdown Section */}
      <section className="analytics-breakdown-section">
        <div className="setup-card">
          <h2 className="setup-card-title">Topic Performance Breakdown</h2>
          {Object.keys(stats.topicBreakdown).length === 0 ? (
            <div className="no-analytics-data text-center">
              <p>No completed interviews found yet.</p>
              <p className="text-muted">Complete your first mock interview to generate personalized insights.</p>
            </div>
          ) : (
            <div className="topic-bars-list">
              {Object.keys(stats.topicBreakdown).map(topic => {
                const item = stats.topicBreakdown[topic];
                const avg = (item.total / item.count).toFixed(1);
                const percent = Math.min(100, Math.round((avg / 10) * 100));

                return (
                  <div key={topic} className="topic-bar-row">
                    <div className="topic-bar-header">
                      <span className="topic-name-label">{topic}</span>
                      <span className="topic-score-badge">{avg} / 10 ({item.count} {item.count === 1 ? 'attempt' : 'attempts'})</span>
                    </div>
                    <div className="progress-bar-track">
                      <div 
                        className="progress-bar-fill"
                        style={{ width: `${percent}%` }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          <div style={{ marginTop: '2.5rem', textAlign: 'center' }}>
            <button 
              type="button" 
              className="btn-primary"
              onClick={onStartInterview}
            >
              Start New Mock Interview →
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
