export default function QuestionCard({ questionObj, answerText, onChangeAnswer, validationError, onClearAnswer }) {
  const charCount = answerText ? answerText.length : 0;

  return (
    <div className="question-card">
      <div className="question-card-header">
        <div className="question-tags-row">
          {questionObj.category && (
            <span className="question-category-tag">{questionObj.category}</span>
          )}
          {questionObj.difficulty && (
            <span className={`question-difficulty-tag diff-${questionObj.difficulty.toLowerCase()}`}>
              {questionObj.difficulty}
            </span>
          )}
          <span className="question-id-tag">Question #{questionObj.id}</span>
        </div>

        <h2 className="question-title">{questionObj.question}</h2>
      </div>

      <div className="answer-wrapper">
        <div className="answer-label-bar">
          <label htmlFor="interview-answer-input" className="answer-label">
            Your Technical Answer
          </label>
          <div className="answer-meta-right">
            <span className="char-counter">{charCount} characters</span>
            {answerText && onClearAnswer && (
              <button 
                type="button" 
                className="btn-text-action" 
                onClick={onClearAnswer}
              >
                Clear Answer
              </button>
            )}
          </div>
        </div>

        <textarea
          id="interview-answer-input"
          className={`answer-textarea ${validationError ? 'textarea-error' : ''}`}
          rows="8"
          placeholder="Type your response here... Explain core concepts clearly and use examples where appropriate."
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
