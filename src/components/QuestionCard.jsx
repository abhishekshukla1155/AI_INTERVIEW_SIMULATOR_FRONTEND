export default function QuestionCard({ questionObj, answerText, onChangeAnswer, validationError }) {
  return (
    <div className="question-card">
      <div className="question-header">
        <span className="question-tag">Technical Question #{questionObj.id}</span>
        <h2 className="question-title">{questionObj.question}</h2>
      </div>

      <div className="answer-wrapper">
        <label htmlFor="interview-answer-input" className="answer-label">
          Your Answer
        </label>
        <textarea
          id="interview-answer-input"
          className={`answer-textarea ${validationError ? 'textarea-error' : ''}`}
          rows="7"
          placeholder="Type your response here... Be detailed and structure your thoughts clearly."
          value={answerText}
          onChange={(e) => onChangeAnswer(e.target.value)}
        ></textarea>

        {validationError && (
          <div className="validation-error-msg" role="alert">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="8" x2="12" y2="12"></line>
              <line x1="12" y1="16" x2="12.01" y2="16"></line>
            </svg>
            <span>{validationError}</span>
          </div>
        )}
      </div>
    </div>
  );
}
