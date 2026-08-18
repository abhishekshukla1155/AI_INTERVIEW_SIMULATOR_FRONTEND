import { useState, useEffect, useRef } from 'react';
import { fetchQuestions, saveInterview } from './services/api';
import { questions as localQuestions } from './data/questions';
import { filterAndSelectQuestions } from './utils/questionSelector';
import { saveInterviewHistory, getInterviewHistory } from './utils/interviewHistory';
import Navbar from './components/Navbar';
import WelcomeScreen from './components/WelcomeScreen';
import InterviewSetup from './components/InterviewSetup';
import InterviewScreen from './components/InterviewScreen';
import InterviewSummary from './components/InterviewSummary';
import InterviewHistory from './components/InterviewHistory';
import Footer from './components/Footer';
import ResourcesHub from './components/ResourcesHub';
import AnalyticsView from './components/AnalyticsView';
import AboutView from './components/AboutView';
import './App.css';

export default function App() {
  const [viewState, setViewState] = useState('welcome'); // 'welcome' | 'setup' | 'interview' | 'summary' | 'history'
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answerText, setAnswerText] = useState('');
  const [validationError, setValidationError] = useState('');
  const [results, setResults] = useState([]); // stores objects with question, reference, userAnswer, score, feedback, category
  const [activeQuestions, setActiveQuestions] = useState([]);
  const [interviewConfig, setInterviewConfig] = useState({ category: 'Machine Learning', difficulty: 'Medium', count: 5 });
  const [currentSessionId, setCurrentSessionId] = useState('');
  const [isLoadingQuestions, setIsLoadingQuestions] = useState(false);
  const [fetchError, setFetchError] = useState('');
  const [setupWarning, setSetupWarning] = useState('');
  const [historyCount, setHistoryCount] = useState(0);

  // Ref guard to prevent saving the same interview session multiple times
  const savedSessionsRef = useRef(new Set());

  // Sync history count
  const refreshHistoryCount = () => {
    const list = getInterviewHistory();
    setHistoryCount(list.length);
  };

  useEffect(() => {
    refreshHistoryCount();
  }, [viewState]);

  const handleGoToHome = () => {
    setFetchError('');
    setSetupWarning('');
    setViewState('welcome');
  };

  const handleGoToSetup = () => {
    setFetchError('');
    setSetupWarning('');
    setViewState('setup');
  };

  const handleGoToHistory = () => {
    setViewState('history');
  };

  const handleGoToResources = () => {
    setViewState('resources');
  };

  const handleGoToAnalytics = () => {
    setViewState('analytics');
  };

  const handleGoToAbout = () => {
    setViewState('about');
  };

  const handleStartInterview = async ({ category, difficulty, count }) => {
    const requestedCount = Number(count) || 5;
    setIsLoadingQuestions(true);
    setFetchError('');
    setSetupWarning('');

    // Generate a unique session ID for duplicate protection
    const newSessionId = `session_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
    setCurrentSessionId(newSessionId);

    let questionPool = localQuestions;

    try {
      // Attempt fetching from backend if available
      const remoteQuestions = await fetchQuestions();
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
      SessionId: newSessionId,
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
    const currentQ = activeQuestions[currentQuestionIndex];
    const fullResult = {
      ...completed,
      category: currentQ?.category || interviewConfig.category
    };

    const updatedResults = [...results, fullResult];
    setResults(updatedResults);

    if (currentQuestionIndex < activeQuestions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setAnswerText('');
      setValidationError('');
    } else {
      // ── Entire interview finished! Calculate final score & save to history ──
      const totalScoreSum = updatedResults.reduce(
        (acc, item) => acc + (typeof item.score === 'number' ? item.score : 0),
        0
      );
      const avgScore = updatedResults.length > 0 ? totalScoreSum / updatedResults.length : 0;
      const roundedScore = Number(avgScore.toFixed(1));

      const historyRecord = {
        id: currentSessionId || `hist_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
        sessionId: currentSessionId,
        date: new Date().toISOString(),
        topic: interviewConfig.category,
        difficulty: interviewConfig.difficulty,
        questionCount: activeQuestions.length,
        score: roundedScore,
        maxScore: 10,
        answeredQuestions: updatedResults.length,
        totalQuestions: activeQuestions.length
      };

      saveInterviewHistory(historyRecord);
      refreshHistoryCount();

      // ── Save to Supabase DB via FastAPI (Guarded to save ONCE per session) ──
      const activeSessionId = currentSessionId || historyRecord.id;
      if (activeSessionId && !savedSessionsRef.current.has(activeSessionId)) {
        savedSessionsRef.current.add(activeSessionId);
        saveInterview({
          topic: interviewConfig.category,
          difficulty: interviewConfig.difficulty,
          question_count: activeQuestions.length,
          score: roundedScore
        }).then((res) => {
          console.log('[Supabase Sync]', 'Interview saved successfully:', res);
        }).catch((err) => {
          console.warn('[Supabase Sync Warning]', 'Could not sync interview result to database:', err.message);
        });
      }

      setViewState('summary');
    }
  };

  const handleExitInterview = () => {
    // Incomplete interviews are NOT saved to history
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

      {/* Professional Navbar */}
      <Navbar 
        currentView={viewState}
        onNavigateHome={handleGoToHome}
        onNavigateSetup={handleGoToSetup}
        onNavigateHistory={handleGoToHistory}
        onNavigateAnalytics={handleGoToAnalytics}
        onNavigateResources={handleGoToResources}
        onNavigateAbout={handleGoToAbout}
        historyCount={historyCount}
      />

      {/* Dynamic Views */}
      {viewState === 'welcome' && (
        <WelcomeScreen 
          onStartInterview={handleGoToSetup} 
          onGoToHistory={handleGoToHistory}
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
          onGoToHistory={handleGoToHistory}
        />
      )}

      {viewState === 'history' && (
        <main className="summary-wrapper" style={{ paddingBottom: '4rem' }}>
          <InterviewHistory 
            onClose={handleGoToSetup}
            onRefreshHistory={refreshHistoryCount} 
          />
          <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
            <button 
              type="button" 
              className="btn-primary" 
              onClick={handleGoToSetup}
            >
              Start New Interview →
            </button>
          </div>
        </main>
      )}

      {viewState === 'resources' && (
        <ResourcesHub 
          onStartInterview={handleGoToSetup}
        />
      )}

      {viewState === 'analytics' && (
        <AnalyticsView 
          onStartInterview={handleGoToSetup}
        />
      )}

      {viewState === 'about' && (
        <AboutView 
          onStartInterview={handleGoToSetup}
          onGoToResources={handleGoToResources}
        />
      )}

      {/* Conditional Footer (hidden during active interview) */}
      {viewState !== 'interview' && (
        <Footer 
          onNavigateHome={handleGoToHome}
          onNavigateSetup={handleGoToSetup}
          onNavigateHistory={handleGoToHistory}
          onNavigateAnalytics={handleGoToAnalytics}
          onNavigateResources={handleGoToResources}
          onNavigateAbout={handleGoToAbout}
        />
      )}
    </div>
  );
}
