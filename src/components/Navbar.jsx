import logo from '../assets/intervaiq-logo.png';
export default function Navbar({
  currentView,
  onNavigateHome,
  onNavigateSetup,
  onNavigateHistory,
  historyCount = 0
}) {
  return (
    <header className="navbar">
      <div className="nav-brand" onClick={onNavigateHome} style={{ cursor: 'pointer' }}>
          <img src={logo} alt="IntervAIQ Logo" className="brand-logo" style={{ width: '24px', height: '24px', marginRight: '8px' }} />
          <span className="brand-text">IntervAIQ</span>
      </div>

      <nav className="nav-links">
        <button 
          type="button" 
          className={`nav-link ${currentView === 'welcome' ? 'active' : ''}`}
          onClick={onNavigateHome}
        >
          Home
        </button>
        <button 
          type="button" 
          className={`nav-link ${currentView === 'setup' ? 'active' : ''}`}
          onClick={onNavigateSetup}
        >
          Interview
        </button>
        <button 
          type="button" 
          className={`nav-link ${currentView === 'history' ? 'active' : ''}`}
          onClick={onNavigateHistory}
        >
          History {historyCount > 0 && <span className="nav-badge">{historyCount}</span>}
        </button>

        {/* Placeholders for secondary navigation */}
        <span className="nav-link disabled-link" title="Coming Soon">Analytics</span>
        <span className="nav-link disabled-link" title="Coming Soon">Resources</span>
        <span className="nav-link disabled-link" title="Coming Soon">About</span>
      </nav>

      <div className="nav-controls">
          <div className="backend-status-badge">
            <span className="pulse-dot"></span>
            <span>AI Evaluation Ready</span>
          </div>
      </div>
    </header>
  );
}
