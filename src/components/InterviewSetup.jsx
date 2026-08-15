import { useState, useMemo } from 'react';
import { questions as localQuestions } from '../data/questions';
import { getAvailableQuestionCount } from '../utils/questionSelector';

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

  // Calculate available matching questions in real-time
  const availableCount = useMemo(() => {
    return getAvailableQuestionCount(localQuestions, topic, difficulty);
  }, [topic, difficulty]);

  // Check if requested count exceeds available count
  const isInsufficient = availableCount < questionCount;
  const insufficientError = isInsufficient 
    ? `Only ${availableCount} ${difficulty !== 'All Difficulties' ? difficulty : ''} ${topic !== 'All Topics' ? topic : ''} question${availableCount === 1 ? '' : 's'} available. Please choose a smaller number or another difficulty.` 
    : '';

  const activeError = validationMsg || error || insufficientError;

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
    if (availableCount < questionCount) {
      setValidationMsg(insufficientError);
      return;
    }

    console.log('[Interview Setup]', {
      Topic: topic,
      Difficulty: difficulty,
      Requested: Number(questionCount),
      Available: availableCount,
      Selected: Number(questionCount)
    });

    onStartInterview({
      category: topic,
      difficulty: difficulty,
      count: Number(questionCount)
    });
  };

  return (
    <main className="setup-wrapper">
      {/* Setup Stepper Bar */}
      <div className="setup-stepper">
        <div className={`stepper-step ${topic ? 'completed' : 'active'}`}>
          <span className="step-num">01</span>
          <span className="step-text">Topic</span>
        </div>
        <div className="stepper-line"></div>
        <div className={`stepper-step ${difficulty ? 'completed' : ''}`}>
          <span className="step-num">02</span>
          <span className="step-text">Difficulty</span>
        </div>
        <div className="stepper-line"></div>
        <div className={`stepper-step ${questionCount ? 'completed' : ''}`}>
          <span className="step-num">03</span>
          <span className="step-text">Questions</span>
        </div>
        <div className="stepper-line"></div>
        <div className={`stepper-step ${!isInsufficient ? 'ready' : ''}`}>
          <span className="step-num">04</span>
          <span className="step-text">Start</span>
        </div>
      </div>

      <div className="setup-card">
        <div className="setup-header">
          <div className="setup-icon-badge">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 20h9"/>
              <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
            </svg>
          </div>
          <h1 className="setup-title">Configure Your Interview</h1>
          <p className="setup-subtitle">
            Select your technical domain, difficulty level, and question count to launch your mock interview.
          </p>
          <div className="setup-availability-badge">
            <span className="badge-dot"></span>
            <span>Available Matching Questions: <strong>{availableCount}</strong></span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="setup-form">
          {/* Step 1: Topic Selection Cards */}
          <div className="setup-form-group">
            <label className="setup-label">
              <span>01 — Select Topic</span>
              <span className="step-badge">Topic</span>
            </label>
            <div className="topic-grid">
              {TOPICS.map((cat) => (
                <button
                  type="button"
                  key={cat}
                  className={`topic-card-btn ${topic === cat ? 'active' : ''}`}
                  onClick={() => {
                    setTopic(cat);
                    setValidationMsg('');
                  }}
                  disabled={isLoading}
                >
                  <span className="topic-name">{cat}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Difficulty Selection */}
          <div className="setup-form-group">
            <label className="setup-label">
              <span>02 — Select Difficulty</span>
              <span className="step-badge">Difficulty</span>
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

          {/* Step 3: Question Count Selection */}
          <div className="setup-form-group">
            <label className="setup-label">
              <span>03 — Number of Questions</span>
              <span className="step-badge">Volume</span>
            </label>
            <div className="segmented-control count-control">
              {QUESTION_COUNTS.map((num) => {
                const countAvailable = availableCount >= num;
                return (
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
                    {num} Questions {!countAvailable && `(${availableCount} avail)`}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Validation Error Messages */}
          {activeError && (
            <div className="validation-error-msg" role="alert">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="12"></line>
                <line x1="12" y1="16" x2="12.01" y2="16"></line>
              </svg>
              <span>{activeError}</span>
            </div>
          )}

          {/* Warning Message if any */}
          {warning && !activeError && (
            <div className="setup-warning-msg" role="status">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
              disabled={isLoading || isInsufficient}
            >
              <span>{isLoading ? 'Preparing Questions...' : 'Start Mock Interview →'}</span>
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
