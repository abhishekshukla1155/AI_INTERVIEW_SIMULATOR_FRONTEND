import { useState } from 'react';
import { fetchQuestions } from './services/api';
import { questions as localQuestions } from './data/questions';
import { filterAndSelectQuestions } from './utils/questionSelector';
import WelcomeScreen from './components/WelcomeScreen';
import InterviewSetup from './components/InterviewSetup';
import InterviewScreen from './components/InterviewScreen';
import InterviewSummary from './components/InterviewSummary';
import './App.css';

export default function App() {
  const [viewState, setViewState] = useState('welcome'); // 'welcome' | 'setup' | 'interview' | 'summary'
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answerText, setAnswerText] = useState('');
  const [validationError, setValidationError] = useState('');
  const [results, setResults] = useState([]); // stores objects with question, reference, userAnswer, score, feedback, category
  const [activeQuestions, setActiveQuestions] = useState([]);
  const [interviewConfig, setInterviewConfig] = useState({ category: 'Machine Learning', difficulty: 'Medium', count: 5 });
  const [isLoadingQuestions, setIsLoadingQuestions] = useState(false);
  const [fetchError, setFetchError] = useState('');
  const [setupWarning, setSetupWarning] = useState('');

  const handleGoToSetup = () => {
    setFetchError('');
    setSetupWarning('');
    setViewState('setup');
  };

  const handleStartInterview = async ({ category, difficulty, count }) => {
    const requestedCount = Number(count) || 5;
    setIsLoadingQuestions(true);
    setFetchError('');
    setSetupWarning('');

    let questionPool = localQuestions;

    try {
      // Attempt fetching from backend if available
      const remoteQuestions = await fetchQuestions();
      // Verify that remote questions include required metadata
      const hasMetadata = remoteQuestions && remoteQuestions.length > 0 &&
        remoteQuestions[0].hasOwnProperty('difficulty') &&
        remoteQuestions[0].hasOwnProperty('category');
      if (hasMetadata) {
        questionPool = remoteQuestions;
      } else {
        console.warn('Remote questions missing metadata or empty, using local question bank');
      }
    } catch (err) {
      console.warn("Backend /questions unavailable, using local question bank:", err.message);
      questionPool = localQuestions;
    } finally {
      setIsLoadingQuestions(false);
    }

    if (!questionPool || questionPool.length === 0) {
      setFetchError("Unable to load interview questions. Please check question bank configuration.");
      return;
    }

    // Filter by Topic & Difficulty, then randomly select requested count
    const { questions: selected, availableCount, warning, error } = filterAndSelectQuestions(
      questionPool, 
      category, 
      difficulty, 
      requestedCount
    );

    if (error) {
      setFetchError(error);
      return;
    }

    if (warning) {
      setSetupWarning(warning);
    }

    console.log('[Interview Setup]', {
      Topic: category,
      Difficulty: difficulty,
      Requested: requestedCount,
      Available: availableCount,
      Selected: selected.length
    });
    console.log('[Interview Started]', {
      Questions: selected.length
    });

    setInterviewConfig({
      category,
      difficulty,
      count: selected.length
    });

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
    // completed includes {id, question, reference, userAnswer, score, feedback, category}
    const currentQ = activeQuestions[currentQuestionIndex];
    const fullResult = {
      ...completed,
      category: currentQ?.category || interviewConfig.category
    };

    setResults((prev) => [...prev, fullResult]);
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
    setSetupWarning('');
  };

  const handleRestartInterview = () => {
    if (interviewConfig.category && interviewConfig.difficulty && interviewConfig.count) {
      handleStartInterview(interviewConfig);
    } else {
      setViewState('setup');
      setCurrentQuestionIndex(0);
      setAnswerText('');
      setResults([]);
      setValidationError('');
      setFetchError('');
      setSetupWarning('');
    }
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
          onStartInterview={handleGoToSetup} 
          isLoading={isLoadingQuestions}
          error={fetchError}
        />
      )}

      {viewState === 'setup' && (
        <InterviewSetup
          onStartInterview={handleStartInterview}
          isLoading={isLoadingQuestions}
          error={fetchError}
          warning={setupWarning}
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
          config={interviewConfig}
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
