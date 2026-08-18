import logo from '../assets/intervaiq-logo.png';

export default function HeroSection({ onStartInterview, onGoToHistory, isLoading, error }) {
  return (
    <section className="hero-compact-section">
      <div className="hero-compact-inner">
        {/* Left Column: Compact Futuristic AI Visual Art */}
        <div className="hero-visual-col">
          <div className="ai-art-container">
            <div className="ai-art-glow"></div>
            <div className="ai-art-shape">
              <div className="ai-art-layer layer-1">
                <img src={logo} alt="IntervAIQ Artwork" className="ai-art-logo" />
              </div>
              <div className="ai-art-layer layer-2"></div>
              <div className="ai-art-layer layer-3"></div>
            </div>
            <div className="ai-art-ring ring-1"></div>
            <div className="ai-art-ring ring-2"></div>
          </div>
        </div>

        {/* Right Column: Hero Content */}
        <div className="hero-text-col">
          <div className="hero-badge">
            <span className="badge-pulse"></span>
            <span className="badge-text">IntervAIQ • AI-Powered Interview Simulator</span>
          </div>

          <h1 className="hero-title-group">
            <span className="hero-title-white">Practice Smarter.</span>
            <span className="hero-title-gradient">Master Your Interview.</span>
          </h1>

          <p className="hero-description">
            Elevate your technical career with IntervAIQ. Practice real-world technical interview questions and receive instant AI-powered feedback to improve your answers and confidence.
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
        </div>
      </div>
    </section>
  );
}
