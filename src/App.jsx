import { useState } from 'react';
import { fetchQuestions } from './services/api';
import { questions as localQuestions } from './data/questions';
import { getRandomQuestions } from './utils/questionSelector';
import WelcomeScreen from './components/WelcomeScreen';
import InterviewScreen from './components/InterviewScreen';
import InterviewSummary from './components/InterviewSummary';
import './App.css';

const INTERVIEW_QUESTION_COUNT = 5;

export default function App() {
  const [viewState, setViewState] = useState('welcome'); // 'welcome' | 'interview' | 'summary'
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answerText, setAnswerText] = useState('');
  const [validationError, setValidationError] = useState('');
  const [results, setResults] = useState([]); // stores objects with question, reference, userAnswer, score, feedback
  const [activeQuestions, setActiveQuestions] = useState([]);
  const [isLoadingQuestions, setIsLoadingQuestions] = useState(false);
  const [fetchError, setFetchError] = useState('');

  const handleStartInterview = async () => {
    setIsLoadingQuestions(true);
    setFetchError('');

    let questionPool = localQuestions;

    try {
      // Attempt fetching from backend if available
      const remoteQuestions = await fetchQuestions();
      if (remoteQuestions && remoteQuestions.length > 0) {
        questionPool = remoteQuestions;
      }
    } catch (err) {
      console.warn("Backend /questions unavailable, using local question bank:", err.message);
      // Clean fallback to local question bank if API call fails
      questionPool = localQuestions;
    } finally {
      setIsLoadingQuestions(false);
    }

    if (!questionPool || questionPool.length === 0) {
      setFetchError("Unable to load interview questions. Please check question bank configuration.");
      return;
    }

    // Select random non-repeating set of questions for current session
    const selected = getRandomQuestions(questionPool, INTERVIEW_QUESTION_COUNT);

    setActiveQuestions(selected);
    setCurrentQuestionIndex(0);
    setAnswerText('');
    setValidationError('');
    setResults([]);
    setViewState('interview');
  };

  const handleAnswerChange = (val) => {
    setAnswerText(val);
    if (validationError && val.trim() !== '') {
      setValidationError('');
    }
  };

  const handleSubmitResult = (completed) => {
    // completed includes {id, question, reference, userAnswer, score, feedback}
    setResults((prev) => [...prev, completed]);
    if (currentQuestionIndex < activeQuestions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setAnswerText('');
      setValidationError('');
    } else {
      setViewState('summary');
    }
  };

  const handleExitInterview = () => {
    setViewState('welcome');
    setCurrentQuestionIndex(0);
    setAnswerText('');
    setResults([]);
    setValidationError('');
    setFetchError('');
  };

  const handleRestartInterview = () => {
    handleStartInterview();
  };

  return (
    <div className="app-container">
      {/* Background Mesh Orbs */}
      <div className="bg-mesh">
        <div className="bg-orb bg-orb-1"></div>
        <div className="bg-orb bg-orb-2"></div>
        <div className="bg-orb bg-orb-3"></div>
      </div>

      {/* Navigation Header */}
      <header className="navbar">
        <div className="brand" onClick={handleExitInterview} style={{ cursor: 'pointer' }}>
          <div className="brand-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2a8 8 0 0 0-8 8c0 1.5.4 2.9 1.1 4.1L4 20l5.9-1.1c1.2.7 2.6 1.1 4.1 1.1a8 8 0 0 0 8-8 8 8 0 0 0-8-8z"/>
              <path d="M9.5 9h5"/>
              <path d="M9.5 13h3"/>
            </svg>
          </div>
          <span>AI Interviewer</span>
        </div>

        <div className="backend-status-badge">
          <span className="pulse-dot"></span>
          <span>
            {viewState === 'interview' ? `Question ${currentQuestionIndex + 1} / ${activeQuestions.length}` : 'AI Backend Ready'}
          </span>
        </div>
      </header>

      {/* Dynamic Views */}
      {viewState === 'welcome' && (
        <WelcomeScreen 
          onStartInterview={handleStartInterview} 
          isLoading={isLoadingQuestions}
          error={fetchError}
        />
      )}

      {viewState === 'interview' && activeQuestions.length > 0 && (
        <InterviewScreen
          question={activeQuestions[currentQuestionIndex]}
          currentIndex={currentQuestionIndex}
          totalQuestions={activeQuestions.length}
          answerText={answerText}
          onChangeAnswer={handleAnswerChange}
          validationError={validationError}
          onExitInterview={handleExitInterview}
          onSubmitResult={handleSubmitResult}
        />
      )}

      {viewState === 'summary' && (
        <InterviewSummary
          answers={results}
          onRestart={handleRestartInterview}
        />
      )}

      {/* Footer */}
      <footer className="footer">
        <p>AI Interview Simulator • React + Vite Frontend • FastAPI + DistilBERT Backend</p>
      </footer>
    </div>
  );
}
