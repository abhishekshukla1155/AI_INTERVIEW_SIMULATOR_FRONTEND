export default function ProgressBar({ currentIndex, totalQuestions }) {
  const currentNum = currentIndex + 1;
  const percentage = Math.round((currentNum / totalQuestions) * 100);

  return (
    <div className="progress-container">
      <div className="progress-header">
        <span className="question-counter-badge">
          Question {currentNum} of {totalQuestions}
        </span>
        <span className="progress-percentage-label">
          {percentage}% Completed
        </span>
      </div>

      <div className="progress-bar-track" role="progressbar" aria-valuenow={percentage} aria-valuemin="0" aria-valuemax="100">
        <div 
          className="progress-bar-fill" 
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
}
