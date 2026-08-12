import { useState } from 'react';
import './App.css';

export default function App() {
  const [showModal, setShowModal] = useState(false);

  const handleStartInterview = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="app-container">
      {/* Background Orbs Effect */}
      <div className="bg-mesh">
        <div className="bg-orb bg-orb-1"></div>
        <div className="bg-orb bg-orb-2"></div>
        <div className="bg-orb bg-orb-3"></div>
      </div>

      {/* Navigation Header */}
      <header className="navbar">
        <div className="brand">
          <div className="brand-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2a8 8 0 0 0-8 8c0 1.5.4 2.9 1.1 4.1L4 20l5.9-1.1c1.2.7 2.6 1.1 4.1 1.1a8 8 0 0 0 8-8 8 8 0 0 0-8-8z"/>
              <path d="M9.5 9h5"/>
              <path d="M9.5 13h3"/>
            </svg>
          </div>
          <span>AI Interviewer</span>
        </div>

        <div className="backend-status-badge">
          <span className="pulse-dot"></span>
          <span>AI Backend Ready</span>
        </div>
      </header>

      {/* Hero Welcome Section */}
      <main className="hero-wrapper">
        <div className="hero-pill">
          <span className="pill-sparkle">✨</span> Powered by DistilBERT & FastAPI
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
            onClick={handleStartInterview}
          >
            <span>Start Interview</span>
            <svg className="btn-icon-arrow" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>

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

      {/* Phase 1 Modal Preview */}
      {showModal && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="modal-badge">Phase 1 Initialized</span>
            <h2>Welcome to AI Interview Simulator</h2>
            <p>
              The frontend is set up! In Phase 1, the welcome interface is active. 
              The AI evaluation endpoint integration will be connected in Phase 2.
            </p>
            <div className="modal-info-box">
              Backend Endpoint Target:<br />
              <strong>http://127.0.0.1:8000/evaluate</strong>
            </div>
            <button id="close-modal-btn" className="btn-secondary" onClick={handleCloseModal}>
              Got It, Ready!
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="footer">
        <p>AI Interview Simulator • React + Vite Frontend • FastAPI + DistilBERT Backend</p>
      </footer>
    </div>
  );
}
