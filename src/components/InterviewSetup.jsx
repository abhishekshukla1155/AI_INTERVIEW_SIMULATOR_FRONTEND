import { useState } from 'react';

export const TOPICS = [
  'Machine Learning',
  'Deep Learning',
  'NLP',
  'Python',
  'Operating Systems',
  'Computer Networks',
  'OOP',
  'DBMS',
  'REST API',
  'All Topics'
];

export const DIFFICULTIES = ['Easy', 'Medium', 'Hard', 'All Difficulties'];

export const QUESTION_COUNTS = [5, 10, 15];

export default function InterviewSetup({ 
  onStartInterview, 
  isLoading = false,
  error = '',
  warning = ''
}) {
  const [topic, setTopic] = useState('Machine Learning');
  const [difficulty, setDifficulty] = useState('Medium');
  const [questionCount, setQuestionCount] = useState(5);
  const [validationMsg, setValidationMsg] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setValidationMsg('');

    if (!topic) {
      setValidationMsg('Please select an interview topic.');
      return;
    }
    if (!difficulty) {
      setValidationMsg('Please select a difficulty level.');
      return;
    }

    onStartInterview({
      category: topic,
      difficulty: difficulty,
      count: Number(questionCount)
    });
  };

  return (
    <main className="setup-wrapper">
      <div className="setup-card">
        <div className="setup-header">
          <div className="setup-icon-badge">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 20h9"/>
              <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
            </svg>
          </div>
          <h1 className="setup-title">Interview Setup</h1>
          <p className="setup-subtitle">
            Configure your technical interview topic, difficulty level, and question volume.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="setup-form">
          {/* Topic / Category Selection */}
          <div className="setup-form-group">
            <label htmlFor="topic-select" className="setup-label">
              <span>Select Topic</span>
              <span className="step-badge">Step 1</span>
            </label>
            <div className="select-wrapper">
              <select 
                id="topic-select"
                value={topic} 
                onChange={(e) => {
                  setTopic(e.target.value);
                  setValidationMsg('');
                }}
                className="setup-select"
                disabled={isLoading}
              >
                {TOPICS.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Difficulty Selection */}
          <div className="setup-form-group">
            <label className="setup-label">
              <span>Select Difficulty</span>
              <span className="step-badge">Step 2</span>
            </label>
            <div className="segmented-control">
              {DIFFICULTIES.map((diff) => (
                <button
                  type="button"
                  key={diff}
                  className={`segmented-btn ${difficulty === diff ? 'active' : ''}`}
                  onClick={() => {
                    setDifficulty(diff);
                    setValidationMsg('');
                  }}
                  disabled={isLoading}
                >
                  {diff}
                </button>
              ))}
            </div>
          </div>

          {/* Question Count Selection */}
          <div className="setup-form-group">
            <label className="setup-label">
              <span>Number of Questions</span>
              <span className="step-badge">Step 3</span>
            </label>
            <div className="segmented-control count-control">
              {QUESTION_COUNTS.map((num) => (
                <button
                  type="button"
                  key={num}
                  className={`segmented-btn ${questionCount === num ? 'active' : ''}`}
                  onClick={() => {
                    setQuestionCount(num);
                    setValidationMsg('');
                  }}
                  disabled={isLoading}
                >
                  {num} Questions
                </button>
              ))}
            </div>
          </div>

          {/* Validation Error Messages */}
          {(validationMsg || error) && (
            <div className="validation-error-msg" role="alert" style={{ justifyContent: 'center', margin: '1rem 0' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="12"></line>
                <line x1="12" y1="16" x2="12.01" y2="16"></line>
              </svg>
              <span>{validationMsg || error}</span>
            </div>
          )}

          {/* Warning Message if available count < requested count */}
          {warning && !error && !validationMsg && (
            <div className="setup-warning-msg" role="status" style={{ justifyContent: 'center', margin: '0.75rem 0' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                <line x1="12" y1="9" x2="12" y2="13"></line>
                <line x1="12" y1="17" x2="12.01" y2="17"></line>
              </svg>
              <span>{warning}</span>
            </div>
          )}

          {/* Start Interview CTA */}
          <div className="setup-actions">
            <button 
              type="submit" 
              className="btn-primary btn-start-interview"
              disabled={isLoading}
            >
              <span>{isLoading ? 'Preparing Questions...' : 'Start Interview'}</span>
              {!isLoading && (
                <svg className="btn-icon-arrow" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              )}
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
