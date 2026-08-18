import logo from '../assets/intervaiq-logo.png';

export default function AboutView({ onStartInterview, onGoToResources }) {
  return (
    <main className="about-view-wrapper">
      <section className="about-header text-center">
        <div className="hero-badge" style={{ marginBottom: '1.25rem' }}>
          <img src={logo} alt="IntervAIQ Logo" className="hero-badge-logo" />
          <span className="badge-pulse"></span>
          <span className="badge-text">About IntervAIQ</span>
        </div>

        <h1 className="hero-heading">
          Empowering Candidates with <br />
          <span className="gradient-text">Intelligent AI Evaluation.</span>
        </h1>

        <p className="hero-description" style={{ maxWidth: '720px', margin: '0 auto 2.5rem' }}>
          IntervAIQ is an advanced technical interview simulator built to bridge the gap between candidate preparation and real-world technical hiring standard.
        </p>
      </section>

      {/* Grid of Core Pillars */}
      <section className="about-pillars-grid">
        <div className="setup-card">
          <div className="pillar-icon">🧠</div>
          <h3 className="pillar-title">Semantic Natural Language Processing</h3>
          <p className="pillar-desc">
            Unlike static quizzes that enforce exact string matching, IntervAIQ uses fine-tuned DistilBERT NLP models to understand conceptual meaning, technical terminology, and semantic accuracy.
          </p>
        </div>

        <div className="setup-card">
          <div className="pillar-icon">⚡</div>
          <h3 className="pillar-title">Real-Time Objective Feedback</h3>
          <p className="pillar-desc">
            Receive detailed scores out of 10 and actionable feedback immediately after submitting each technical answer, helping you identify knowledge gaps instantly.
          </p>
        </div>

        <div className="setup-card">
          <div className="pillar-icon">🔒</div>
          <h3 className="pillar-title">Privacy-First &amp; Local Persistence</h3>
          <p className="pillar-desc">
            Your interview history and performance scores are saved locally in your browser session. No accounts, tracking, or unnecessary data collection required.
          </p>
        </div>
      </section>

      {/* CTA Footer Card */}
      <section className="about-cta-section text-center">
        <div className="setup-card" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2>Ready to elevate your technical interview skills?</h2>
          <p style={{ color: 'var(--text-secondary)', margin: '1rem 0 2rem' }}>
            Choose from Machine Learning, Python, NLP, DBMS, Operating Systems, Computer Networks, and more.
          </p>
          <div className="hero-cta-group" style={{ justifyContent: 'center' }}>
            <button 
              type="button" 
              className="btn-primary" 
              onClick={onStartInterview}
            >
              Start Mock Interview →
            </button>
            <button 
              type="button" 
              className="btn-secondary" 
              onClick={onGoToResources}
            >
              Explore Learning Hub
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
