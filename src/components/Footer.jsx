import logo from '../assets/intervaiq-logo.png';
import { footerLinksData } from '../data/footerLinks';

export default function Footer({
  onNavigateHome,
  onNavigateSetup,
  onNavigateHistory,
  onNavigateAnalytics,
  onNavigateResources,
  onNavigateAbout
}) {
  const getNavHandler = (view) => {
    switch (view) {
      case 'welcome':
        return onNavigateHome;
      case 'setup':
        return onNavigateSetup;
      case 'history':
        return onNavigateHistory;
      case 'analytics':
        return onNavigateAnalytics;
      case 'resources':
        return onNavigateResources;
      case 'about':
        return onNavigateAbout;
      default:
        return onNavigateHome;
    }
  };

  const renderSocialIcon = (iconType) => {
    switch (iconType) {
      case 'linkedin':
        return (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.74a1.63 1.63 0 1 0 0 3.26 1.63 1.63 0 0 0 0-3.26z"/>
          </svg>
        );
      case 'github':
        return (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
          </svg>
        );
      case 'youtube':
        return (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
          </svg>
        );
      case 'x':
        return (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
        );
      case 'discord':
        return (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <footer className="footer-redesign-container">
      <div className="footer-redesign-inner">
        {/* 5-Column Grid */}
        <div className="footer-columns-grid">
          {/* Column 1: Brand & Socials */}
          <div className="footer-col footer-col-brand">
            <div 
              className="footer-brand-header"
              onClick={onNavigateHome}
              style={{ cursor: 'pointer' }}
            >
              <img src={logo} alt="IntervAIQ Logo" className="footer-brand-logo" />
              <div className="brand-wordmark">
                <span className="brand-wordmark-white">Interv</span>
                <span className="brand-wordmark-gradient">AIQ</span>
              </div>
            </div>

            <p className="footer-brand-desc">
              Practice technical interviews, improve your answers, and build confidence with AI-powered semantic evaluation.
            </p>

            <div className="footer-socials-row">
              {footerLinksData.socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url || '#'}
                  onClick={(e) => {
                    if (social.url === '#') e.preventDefault();
                  }}
                  className="social-icon-btn"
                  aria-label={social.name}
                >
                  {renderSocialIcon(social.icon)}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="footer-col">
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-links-list">
              {footerLinksData.navigation.map((item) => (
                <li key={item.name}>
                  <button 
                    type="button" 
                    className="footer-link-btn"
                    onClick={getNavHandler(item.view)}
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Learning Topics */}
          <div className="footer-col">
            <h4 className="footer-col-title">Learning Topics</h4>
            <ul className="footer-links-list">
              {footerLinksData.topics.map((topic) => (
                <li key={topic}>
                  <button 
                    type="button" 
                    className="footer-link-btn"
                    onClick={onNavigateResources}
                  >
                    {topic}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Resources */}
          <div className="footer-col">
            <h4 className="footer-col-title">Resources</h4>
            <ul className="footer-links-list">
              {footerLinksData.resources.map((res, idx) => (
                <li key={idx}>
                  <button 
                    type="button" 
                    className="footer-link-btn"
                    onClick={getNavHandler(res.view)}
                  >
                    {res.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Platform */}
          <div className="footer-col">
            <h4 className="footer-col-title">Platform</h4>
            <ul className="footer-links-list">
              {footerLinksData.platform.map((feat) => (
                <li key={feat}>
                  <span className="footer-static-item">{feat}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Copyright & Legal Bar */}
        <div className="footer-bottom-bar">
          <div className="copyright-text">
            © {new Date().getFullYear()} IntervAIQ. All rights reserved.
          </div>

          <div className="legal-links-row">
            <span className="legal-item">Privacy Policy</span>
            <span className="legal-divider">•</span>
            <span className="legal-item">Terms of Service</span>
            <span className="legal-divider">•</span>
            <a 
              href={`mailto:${footerLinksData.contactEmail}`} 
              className="legal-item contact-link"
            >
              Contact: {footerLinksData.contactEmail}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
