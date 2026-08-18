import logo from '../assets/intervaiq-logo.png';

export default function Footer({ onNavigateHome, onNavigateSetup, onNavigateHistory, onNavigateResources }) {
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
            <li>
              <button type="button" className="footer-link-btn" onClick={onNavigateResources}>
                Learning Hub
              </button>
            </li>
          </ul>
        </div>

        <div className="footer-links-col">
          <h4 className="footer-heading">Topics</h4>
          <ul className="footer-links">
            <li><span className="footer-static-link" onClick={onNavigateResources} style={{ cursor: 'pointer' }}>Machine Learning</span></li>
            <li><span className="footer-static-link" onClick={onNavigateResources} style={{ cursor: 'pointer' }}>Python Programming</span></li>
            <li><span className="footer-static-link" onClick={onNavigateResources} style={{ cursor: 'pointer' }}>Natural Language Processing</span></li>
            <li><span className="footer-static-link" onClick={onNavigateResources} style={{ cursor: 'pointer' }}>DBMS &amp; SQL</span></li>
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
