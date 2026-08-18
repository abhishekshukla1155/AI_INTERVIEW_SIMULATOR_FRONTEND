import { useState } from 'react';
import logo from '../assets/intervaiq-logo.png';

export default function Navbar({
  currentView,
  onNavigateHome,
  onNavigateSetup,
  onNavigateHistory,
  onNavigateAnalytics,
  onNavigateResources,
  onNavigateAbout,
  historyCount = 0
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (handler) => {
    if (handler) handler();
    setMobileMenuOpen(false);
  };

  return (
    <header className="navbar-container">
      <div className="navbar-inner">
        {/* Brand Logo & Wordmark */}
        <div 
          className="nav-brand" 
          onClick={() => handleNavClick(onNavigateHome)} 
          style={{ cursor: 'pointer' }}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && handleNavClick(onNavigateHome)}
        >
          <img 
            src={logo} 
            alt="IntervAIQ Logo" 
            className="brand-logo" 
          />
          <div className="brand-wordmark">
            <span className="brand-wordmark-white">Interv</span>
            <span className="brand-wordmark-gradient">AIQ</span>
          </div>
        </div>

        {/* Desktop Nav Links */}
        <nav className={`nav-menu ${mobileMenuOpen ? 'mobile-open' : ''}`}>
          <button 
            type="button" 
            className={`nav-item ${currentView === 'welcome' ? 'active' : ''}`}
            onClick={() => handleNavClick(onNavigateHome)}
          >
            Home
          </button>
          <button 
            type="button" 
            className={`nav-item ${currentView === 'setup' ? 'active' : ''}`}
            onClick={() => handleNavClick(onNavigateSetup)}
          >
            Interview
          </button>
          <button 
            type="button" 
            className={`nav-item ${currentView === 'history' ? 'active' : ''}`}
            onClick={() => handleNavClick(onNavigateHistory)}
          >
            <span>History</span>
            {historyCount > 0 && <span className="nav-count-badge">{historyCount}</span>}
          </button>
          <button 
            type="button" 
            className={`nav-item ${currentView === 'analytics' ? 'active' : ''}`}
            onClick={() => handleNavClick(onNavigateAnalytics)}
          >
            Analytics
          </button>
          <button 
            type="button" 
            className={`nav-item ${currentView === 'resources' ? 'active' : ''}`}
            onClick={() => handleNavClick(onNavigateResources)}
          >
            Resources
          </button>
          <button 
            type="button" 
            className={`nav-item ${currentView === 'about' ? 'active' : ''}`}
            onClick={() => handleNavClick(onNavigateAbout)}
          >
            About
          </button>
        </nav>

        {/* Status Badge & Mobile Toggle */}
        <div className="nav-actions">
          <div className="status-badge" title="DistilBERT Evaluation Engine Connected">
            <span className="status-dot"></span>
            <span className="status-text">AI Evaluation Ready</span>
          </div>

          <button 
            type="button"
            className="mobile-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>
    </header>
  );
}
