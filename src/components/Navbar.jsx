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
        <div className="brand-icon">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2a8 8 0 0 0-8 8c0 1.5.4 2.9 1.1 4.1L4 20l5.9-1.1c1.2.7 2.6 1.1 4.1 1.1a8 8 0 0 0 8-8 8 8 0 0 0-8-8z"/>
            <path d="M9.5 9h5"/>
            <path d="M9.5 13h3"/>
          </svg>
        </div>
        <span className="brand-text">AI Interviewer</span>
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
          <span>AI Engine Ready</span>
        </div>
      </div>
    </header>
  );
}
