export default function TechnologySection() {
  const cards = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
          <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
          <line x1="12" y1="22.08" x2="12" y2="12"/>
        </svg>
      ),
      title: "Semantic Understanding",
      desc: "Recognizes meaningful answers even when candidates use different wording."
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 11 12 14 22 4"/>
          <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
        </svg>
      ),
      title: "Technical Evaluation",
      desc: "Compares your response with the reference answer to estimate conceptual correctness."
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
        </svg>
      ),
      title: "Instant Feedback",
      desc: "Get a score and clear feedback immediately after submitting your answer."
    }
  ];

  return (
    <section className="tech-section">
      <div className="section-header text-center">
        <h2 className="section-title">AI-Powered Interview Evaluation</h2>
        <p className="section-subtitle">
          Your answers are evaluated using a fine-tuned DistilBERT NLP model that goes beyond simple keyword matching to understand semantic similarity and logical correctness.
        </p>
      </div>

      <div className="tech-cards-grid">
        {cards.map((card, idx) => (
          <div key={idx} className="tech-card">
            <div className="tech-icon-box">
              {card.icon}
            </div>
            <h3 className="tech-card-title">{card.title}</h3>
            <p className="tech-card-desc">{card.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
