export default function WelcomeScreen({ onStartInterview, isLoading, error }) {
  return (
    <main className="hero-wrapper">
      <div className="hero-pill">
        <span className="pill-sparkle">✨</span> Powered by DistilBERT &amp; FastAPI
      </div>

      <h1 className="hero-title">
        <span className="gradient-text">AI Interview Simulator</span>
      </h1>

      <p className="hero-subtitle">
        Practice interview questions and get AI-powered feedback.
      </p>

      <div className="cta-group">
        <button 
          id="start-interview-btn" 
          className="btn-primary" 
          onClick={onStartInterview}
          disabled={isLoading}
        >
          <span>{isLoading ? 'Loading interview questions...' : 'Start Interview'}</span>
          {!isLoading && (
            <svg className="btn-icon-arrow" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          )}
        </button>

        {error ? (
          <div className="validation-error-msg" role="alert" style={{ justifyContent: 'center', marginTop: '0.5rem' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="8" x2="12" y2="12"></line>
              <line x1="12" y1="16" x2="12.01" y2="16"></line>
            </svg>
            <span>{error}</span>
          </div>
        ) : (
          <div className="ai-notice-card">
            <div className="ai-icon-pulse">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
              </svg>
            </div>
            <span>
              Your responses will be evaluated using our trained <strong>DistilBERT NLP engine</strong> for technical accuracy and feedback.
            </span>
          </div>
        )}
      </div>

      {/* Feature Cards Grid */}
      <section className="features-grid" aria-label="Key Features">
        <article className="feature-card">
          <div className="feature-icon-wrapper">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M12 6v6l4 2"></path>
            </svg>
          </div>
          <h3>Real-Time Simulation</h3>
          <p>Experience technical interview questions in an interactive, responsive environment designed to replicate real interviews.</p>
        </article>

        <article className="feature-card">
          <div className="feature-icon-wrapper">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
              <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
              <line x1="12" y1="22.08" x2="12" y2="12"></line>
            </svg>
          </div>
          <h3>DistilBERT NLP Scoring</h3>
          <p>Leverage fine-tuned deep learning models to assess answer semantic similarity, keyword coverage, and core concepts.</p>
        </article>

        <article className="feature-card">
          <div className="feature-icon-wrapper">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="20" x2="18" y2="10"></line>
              <line x1="12" y1="20" x2="12" y2="4"></line>
              <line x1="6" y1="20" x2="6" y2="14"></line>
            </svg>
          </div>
          <h3>Instant Feedback</h3>
          <p>Receive immediate numerical scoring and key recommendations to refine your technical communication skills.</p>
        </article>
      </section>
    </main>
  );
}
