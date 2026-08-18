import { useState, useMemo } from 'react';
import { resourcesData } from '../data/resources';

export default function ResourcesHub({ onStartInterview }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTopic, setSelectedTopic] = useState('All');

  const topicsList = ['All', ...resourcesData.map(t => t.topic)];

  // Helper for topic icons
  const getTopicIcon = (topicName) => {
    switch (topicName) {
      case 'Python':
        return '🐍';
      case 'Machine Learning':
        return '🤖';
      case 'Deep Learning':
        return '🧠';
      case 'NLP':
        return '💬';
      case 'DBMS':
        return '🗄️';
      case 'Operating Systems':
        return '⚙️';
      case 'Computer Networks':
        return '🌐';
      case 'OOP':
        return '🧱';
      case 'REST API':
        return '🔌';
      default:
        return '📚';
    }
  };

  // Filtered topics & resources based on searchQuery and selectedTopic
  const filteredTopics = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return resourcesData.map(topicObj => {
      // Check if topic matches selected tab
      const isTopicSelected = selectedTopic === 'All' || selectedTopic.toLowerCase() === topicObj.topic.toLowerCase();

      if (!isTopicSelected) {
        return null;
      }

      // Filter individual resources if query exists
      const matchingResources = topicObj.resources.filter(r => {
        if (!query) return true;
        return (
          r.name.toLowerCase().includes(query) ||
          r.description.toLowerCase().includes(query) ||
          r.type.toLowerCase().includes(query) ||
          topicObj.topic.toLowerCase().includes(query)
        );
      });

      // Also check if topic title or description matches query even if individual resources don't explicitly hit query
      const topicMatchesQuery =
        !query ||
        topicObj.topic.toLowerCase().includes(query) ||
        topicObj.description.toLowerCase().includes(query);

      if (matchingResources.length > 0 || topicMatchesQuery) {
        return {
          ...topicObj,
          resources: matchingResources.length > 0 ? matchingResources : topicObj.resources
        };
      }

      return null;
    }).filter(Boolean);
  }, [searchQuery, selectedTopic]);

  const totalMatchingResources = useMemo(() => {
    return filteredTopics.reduce((sum, t) => sum + t.resources.length, 0);
  }, [filteredTopics]);

  return (
    <main className="resources-hub-wrapper">
      {/* Header Section */}
      <section className="resources-header text-center">
        <div className="hero-badge" style={{ marginBottom: '1.25rem' }}>
          <span className="badge-pulse"></span>
          <span className="badge-text">IntervAIQ Learning Hub</span>
        </div>

        <h1 className="hero-heading">
          Learn. Practice. <span className="gradient-text">Improve.</span>
        </h1>

        <p className="hero-description" style={{ maxWidth: '680px', margin: '0 auto 2rem' }}>
          Explore curated learning resources to strengthen the technical skills you need for your next interview.
        </p>

        {/* Search Input */}
        <div className="resources-search-container">
          <div className="search-input-wrapper">
            <svg 
              className="search-icon" 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input 
              type="text"
              className="resources-search-input"
              placeholder="Search learning resources (e.g., Python, ML, SQL, API, OS)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search learning resources"
            />
            {searchQuery && (
              <button 
                type="button" 
                className="search-clear-btn"
                onClick={() => setSearchQuery('')}
                aria-label="Clear search query"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Filter Chips */}
        <div className="resources-topic-chips" role="tablist" aria-label="Topic filter options">
          {topicsList.map(topicName => (
            <button
              key={topicName}
              type="button"
              role="tab"
              aria-selected={selectedTopic === topicName}
              className={`chip-btn ${selectedTopic === topicName ? 'active' : ''}`}
              onClick={() => setSelectedTopic(topicName)}
            >
              {topicName !== 'All' && <span className="chip-icon">{getTopicIcon(topicName)}</span>}
              <span>{topicName}</span>
            </button>
          ))}
        </div>
      </section>

      {/* Main Content Area */}
      <section className="resources-content-section">
        {filteredTopics.length === 0 ? (
          <div className="no-resources-found text-center">
            <div className="empty-icon">🔍</div>
            <h3>No learning resources found</h3>
            <p>No matches for &ldquo;{searchQuery}&rdquo;. Try clearing your search or selecting another topic.</p>
            <button 
              type="button" 
              className="btn-secondary"
              onClick={() => { setSearchQuery(''); setSelectedTopic('All'); }}
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="resources-topic-groups">
            {filteredTopics.map((topicGroup) => (
              <div key={topicGroup.id} className="topic-resource-block">
                <div className="topic-block-header">
                  <div className="topic-title-group">
                    <span className="topic-block-icon">{getTopicIcon(topicGroup.topic)}</span>
                    <div>
                      <h2 className="topic-block-title">{topicGroup.topic}</h2>
                      <p className="topic-block-desc">{topicGroup.description}</p>
                    </div>
                  </div>
                  <span className="topic-resource-count">
                    {topicGroup.resources.length} {topicGroup.resources.length === 1 ? 'Resource' : 'Resources'}
                  </span>
                </div>

                <div className="resources-grid">
                  {topicGroup.resources.map((res, idx) => (
                    <article key={idx} className="resource-card">
                      <div className="resource-card-header">
                        <span className="resource-type-badge">{res.type}</span>
                        <span className="resource-topic-tag">{topicGroup.topic}</span>
                      </div>

                      <h3 className="resource-title">{res.name}</h3>
                      <p className="resource-description">{res.description}</p>

                      <div className="resource-card-footer">
                        <a 
                          href={res.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="btn-open-resource"
                          aria-label={`Open ${res.name} in a new tab`}
                        >
                          <span>Open Resource</span>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                            <polyline points="15 3 21 3 21 9"></polyline>
                            <line x1="10" y1="14" x2="21" y2="3"></line>
                          </svg>
                        </a>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* CTA Section */}
        <div className="resources-cta-banner">
          <div className="cta-content">
            <h2>Ready to test your knowledge?</h2>
            <p>Take an AI-evaluated mock interview on any of these topics and receive real-time feedback.</p>
          </div>
          {onStartInterview && (
            <button 
              type="button" 
              className="btn-primary btn-cta-interview"
              onClick={onStartInterview}
            >
              Start Mock Interview →
            </button>
          )}
        </div>
      </section>
    </main>
  );
}
