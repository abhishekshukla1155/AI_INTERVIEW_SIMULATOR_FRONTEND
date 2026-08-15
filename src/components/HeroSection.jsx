export default function HeroSection({ onStartInterview, onGoToHistory, isLoading, error }) {
  return (
    <section className="hero-section">
      <div className="hero-badge">
        <span className="badge-pulse"></span>
        <span className="badge-text">Powered by DistilBERT &amp; FastAPI</span>
      </div>

      <h1 className="hero-heading">
        Practice Smarter.<br />
        <span className="gradient-text">Interview Better.</span>
      </h1>

      <p className="hero-description">
        Practice technical interviews with AI-powered evaluation, semantic answer analysis, and instant feedback designed to help you improve with every attempt.
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
        <span className="trust-item">⚡ Semantic AI</span>
        <span className="trust-divider">•</span>
        <span className="trust-item">🎯 Real-time evaluation</span>
        <span className="trust-divider">•</span>
        <span className="trust-item">📈 Personalized feedback</span>
      </div>
    </section>
  );
}
