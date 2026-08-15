import logo from '../assets/intervaiq-logo.png';

export default function Footer({ onNavigateHome, onNavigateSetup, onNavigateHistory }) {
  return (
    <footer className="intervaiq-footer">
      <div className="footer-content">
        <div className="footer-brand-col">
          <div className="footer-brand" onClick={onNavigateHome} style={{ cursor: 'pointer' }}>
            <img src={logo} alt="IntervAIQ Logo" className="footer-logo" />
            <span className="footer-brand-name">IntervAIQ</span>
          </div>
          <p className="footer-tagline">
            Intelligent technical interview preparation powered by semantic AI evaluation and instant feedback.
          </p>
        </div>

        <div className="footer-links-col">
          <h4 className="footer-heading">Navigation</h4>
          <ul className="footer-links">
            <li>
              <button type="button" className="footer-link-btn" onClick={onNavigateHome}>
                Home
              </button>
            </li>
            <li>
              <button type="button" className="footer-link-btn" onClick={onNavigateSetup}>
                Start Interview
              </button>
            </li>
            <li>
              <button type="button" className="footer-link-btn" onClick={onNavigateHistory}>
                Interview History
              </button>
            </li>
          </ul>
        </div>

        <div className="footer-links-col">
          <h4 className="footer-heading">Topics</h4>
          <ul className="footer-links">
            <li><span className="footer-static-link">Machine Learning</span></li>
            <li><span className="footer-static-link">Python Programming</span></li>
            <li><span className="footer-static-link">Natural Language Processing</span></li>
            <li><span className="footer-static-link">Data Science &amp; AI</span></li>
          </ul>
        </div>

        <div className="footer-links-col">
          <h4 className="footer-heading">Platform</h4>
          <ul className="footer-links">
            <li><span className="footer-static-link">DistilBERT Evaluation Engine</span></li>
            <li><span className="footer-static-link">Semantic Similarity Scoring</span></li>
            <li><span className="footer-static-link">Local History Tracking</span></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} IntervAIQ. All rights reserved.</p>
        <p className="footer-tech-stack">Powered by FastAPI, PyTorch, DistilBERT &amp; React</p>
      </div>
    </footer>
  );
}
