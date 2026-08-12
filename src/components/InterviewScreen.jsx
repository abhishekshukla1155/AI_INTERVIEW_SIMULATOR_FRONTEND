import ProgressBar from './ProgressBar';
import QuestionCard from './QuestionCard';

export default function InterviewScreen({
  question,
  currentIndex,
  totalQuestions,
  answerText,
  onChangeAnswer,
  validationError,
  onNextQuestion,
  onExitInterview
}) {
  const isLastQuestion = currentIndex === totalQuestions - 1;

  return (
    <div className="interview-screen-wrapper">
      <div className="interview-container">
        {/* Top Header Controls */}
        <div className="interview-top-bar">
          <div className="interview-session-info">
            <span className="live-dot"></span>
            <span>Interview Session in Progress</span>
          </div>

          <button 
            id="exit-interview-btn" 
            className="btn-exit"
            onClick={onExitInterview}
          >
            Exit Interview
          </button>
        </div>

        {/* Progress Bar */}
        <ProgressBar currentIndex={currentIndex} totalQuestions={totalQuestions} />

        {/* Question & Input Area */}
        <QuestionCard
          questionObj={question}
          answerText={answerText}
          onChangeAnswer={onChangeAnswer}
          validationError={validationError}
        />

        {/* Action Controls */}
        <div className="interview-actions">
          <button
            id="next-question-btn"
            className="btn-primary btn-next"
            onClick={onNextQuestion}
          >
            <span>{isLastQuestion ? 'Submit & Finish' : 'Next Question'}</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
