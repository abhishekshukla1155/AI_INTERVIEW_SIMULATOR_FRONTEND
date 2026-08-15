import logo from '../assets/intervaiq-logo.png';

export default function HeroSection({ onStartInterview, onGoToHistory, isLoading, error }) {
  return (
    <section className="hero-section">
      <div className="hero-badge">
        <img src={logo} alt="IntervAIQ Logo" className="hero-badge-logo" />
        <span className="badge-pulse"></span>
        <span className="badge-text">IntervAIQ • AI-Powered Interview Simulator</span>
      </div>

      <h1 className="hero-heading">
        Practice Smarter.<br />
        <span className="gradient-text">Master Your Interview.</span>
      </h1>

      <p className="hero-description">
        Elevate your technical career with IntervAIQ. Practice real-world Machine Learning, Python, and NLP interview questions evaluated by fine-tuned semantic AI.
      </p>

      <div className="hero-cta-group">
        <button 
          id="hero-start-btn"
          type="button"
          className="btn-primary btn-hero" 
          onClick={onStartInterview}
          disabled={isLoading}
        >
          <span>{isLoading ? 'Loading Questions...' : 'Start Mock Interview →'}</span>
        </button>

        {onGoToHistory && (
          <button 
            type="button" 
            className="btn-secondary btn-hero-secondary"
            onClick={onGoToHistory}
          >
            View History
          </button>
        )}
      </div>

      {error && (
        <div className="validation-error-msg hero-error" role="alert">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="8" x2="12" y2="12"></line>
            <line x1="12" y1="16" x2="12.01" y2="16"></line>
          </svg>
          <span>{error}</span>
        </div>
      )}

      <div className="hero-trust-bar">
        <span className="trust-item">⚡ Semantic AI Scoring</span>
        <span className="trust-divider">•</span>
        <span className="trust-item">🎯 Instant Feedback</span>
        <span className="trust-divider">•</span>
        <span className="trust-item">📈 Progress Tracking</span>
      </div>
    </section>
  );
}
