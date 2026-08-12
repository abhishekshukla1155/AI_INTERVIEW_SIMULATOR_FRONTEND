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
  onSubmitResult // callback to store result and move forward
}) {
  const isLastQuestion = currentIndex === totalQuestions - 1;

  const [isEvaluating, setIsEvaluating] = useState(false);
  const [evalResult, setEvalResult] = useState(null); // {score, feedback}
  const [evalError, setEvalError] = useState('');

  const handleEvaluate = async () => {
    if (!answerText.trim()) {
      // validation should already prevent this, but guard anyway
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
    // Send result up to parent to store in global state
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
    // Reset local state for next question
    setEvalResult(null);
    setEvalError('');
    setIsEvaluating(false);
    // Parent will change question via props, so just clear answer field via onChangeAnswer('')
    onChangeAnswer('');
  };

  const buttonLabel = () => {
    if (isEvaluating) return 'Evaluating...';
    if (!evalResult) return 'Evaluate Answer';
    return isLastQuestion ? 'Submit & Finish' : 'Next Question';
  };

  const buttonDisabled = () => {
    if (isEvaluating) return true;
    if (!evalResult) return !answerText.trim(); // disable until answer provided
    return false; // after evaluation, enable to proceed
  };

  const handleButtonClick = () => {
    if (!evalResult) {
      handleEvaluate();
    } else {
      handleNext();
    }
  };

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

        {/* Evaluation Result */}
        {evalResult && <EvaluationResult score={evalResult.score} feedback={evalResult.feedback} />}
        {evalError && (
          <div className="eval-error-msg" role="alert">
            {evalError}
          </div>
        )}

        {/* Action Controls */}
        <div className="interview-actions">
          <button
            id="next-question-btn"
            className="btn-primary btn-next"
            onClick={handleButtonClick}
            disabled={buttonDisabled()}
          >
            <span>{buttonLabel()}</span>
            {(!isEvaluating && !evalResult) && (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
