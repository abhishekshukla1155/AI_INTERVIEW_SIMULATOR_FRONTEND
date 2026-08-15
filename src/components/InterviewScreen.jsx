import { useState } from 'react';
import ProgressBar from './ProgressBar';
import QuestionCard from './QuestionCard';
import EvaluationResult from './EvaluationResult';
import { evaluateAnswer } from '../services/api';

export default function InterviewScreen({
  question,
  currentIndex,
  totalQuestions,
  answerText,
  onChangeAnswer,
  validationError,
  onExitInterview,
  onSubmitResult
}) {
  const isLastQuestion = currentIndex === totalQuestions - 1;

  const [isEvaluating, setIsEvaluating] = useState(false);
  const [evalResult, setEvalResult] = useState(null); // {score, feedback}
  const [evalError, setEvalError] = useState('');

  const handleEvaluate = async () => {
    if (!answerText.trim()) {
      return;
    }
    setIsEvaluating(true);
    setEvalError('');
    try {
      const result = await evaluateAnswer(question.question, question.reference, answerText.trim());
      setEvalResult(result);
    } catch (err) {
      console.error(err);
      setEvalError('Unable to evaluate the answer. Please make sure the AI evaluation server is running.');
    } finally {
      setIsEvaluating(false);
    }
  };

  const handleNext = () => {
    if (evalResult) {
      const completed = {
        id: question.id,
        question: question.question,
        reference: question.reference,
        userAnswer: answerText.trim(),
        score: evalResult.score,
        feedback: evalResult.feedback,
      };
      onSubmitResult(completed);
    }
    setEvalResult(null);
    setEvalError('');
    setIsEvaluating(false);
    onChangeAnswer('');
  };

  const buttonLabel = () => {
    if (isEvaluating) return 'Evaluating Answer...';
    if (!evalResult) return 'Evaluate Answer';
    return isLastQuestion ? 'Submit & Finish Interview' : 'Next Question →';
  };

  const buttonDisabled = () => {
    if (isEvaluating) return true;
    if (!evalResult) return !answerText.trim();
    return false;
  };

  const handleButtonClick = () => {
    if (!evalResult) {
      handleEvaluate();
    } else {
      handleNext();
    }
  };

  const handleClearAnswer = () => {
    onChangeAnswer('');
  };

  return (
    <div className="interview-screen-wrapper">
      <div className="interview-container">
        {/* Top Navigation & Progress Bar */}
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

        <ProgressBar currentIndex={currentIndex} totalQuestions={totalQuestions} />

        {/* Main Grid: Question Content + Answer Tips Sidebar */}
        <div className="interview-grid">
          <div className="interview-main-col">
            <QuestionCard
              questionObj={question}
              answerText={answerText}
              onChangeAnswer={onChangeAnswer}
              validationError={validationError}
              onClearAnswer={handleClearAnswer}
            />

            {evalResult && <EvaluationResult score={evalResult.score} feedback={evalResult.feedback} />}
            
            {evalError && (
              <div className="eval-error-msg" role="alert">
                {evalError}
              </div>
            )}

            {/* Action Controls */}
            <div className="interview-actions">
              {answerText && !evalResult && !isEvaluating && (
                <button 
                  type="button" 
                  className="btn-secondary" 
                  onClick={handleClearAnswer}
                  style={{ marginRight: 'auto' }}
                >
                  Clear Answer
                </button>
              )}

              <button
                id="next-question-btn"
                className="btn-primary btn-next"
                onClick={handleButtonClick}
                disabled={buttonDisabled()}
              >
                <span>{buttonLabel()}</span>
              </button>
            </div>
          </div>

          {/* Answer Tips Sidebar */}
          <aside className="interview-sidebar">
            <div className="sidebar-card tips-card">
              <div className="tips-header">
                <span className="tips-icon">💡</span>
                <h3 className="tips-title">Answer Tips</h3>
              </div>
              <ul className="tips-list">
                <li>
                  <strong>Be clear and concise</strong>
                  <p>Structure your thoughts logically before typing.</p>
                </li>
                <li>
                  <strong>Explain the core concept</strong>
                  <p>Address key principles, tradeoffs, and underlying mechanisms.</p>
                </li>
                <li>
                  <strong>Use an example when useful</strong>
                  <p>Illustrate your explanation with real-world scenarios or code logic.</p>
                </li>
                <li>
                  <strong>Avoid unnecessary fluff</strong>
                  <p>Keep responses focused directly on the prompt question.</p>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
