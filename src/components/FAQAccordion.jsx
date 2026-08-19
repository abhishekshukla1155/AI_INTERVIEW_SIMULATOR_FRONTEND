import { useState } from 'react';

export default function FAQAccordion() {
  const [openIdx, setOpenIdx] = useState(null);

  const faqs = [
    {
      q: "How does IntervAIQ evaluate my interview answers?",
      a: "IntervAIQ uses a fine-tuned DistilBERT Natural Language Processing model. It analyzes the semantic meaning and conceptual similarity of your response against expert reference answers, providing objective scores and feedback."
    },
    {
      q: "What topics and difficulties are available?",
      a: "We offer technical questions across Machine Learning, Python, Natural Language Processing, Data Science, and AI. Each topic includes Easy, Medium, and Hard difficulty levels."
    },
    {
      q: "Is my interview history saved securely?",
      a: "Yes! All completed interview attempts are saved securely in your persistent database history. You can view your past scores, topics, and dates anytime from the History tab."
    },
    {
      q: "Can I choose the length of my interview session?",
      a: "Absolutely. You can choose session lengths of 5, 10, or 15 questions based on how much time you want to dedicate to practice."
    },
    {
      q: "Do I need to create an account to practice?",
      a: "No account required! IntervAIQ is designed for immediate, friction-free practice directly in your browser."
    }
  ];

  const toggle = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="faq-section">
      <div className="section-header text-center">
        <h2 className="section-title">Frequently Asked Questions</h2>
        <p className="section-subtitle">
          Everything you need to know about preparing with IntervAIQ.
        </p>
      </div>

      <div className="faq-container">
        {faqs.map((item, idx) => {
          const isOpen = openIdx === idx;
          return (
            <div key={idx} className={`faq-item ${isOpen ? 'open' : ''}`}>
              <button 
                type="button" 
                className="faq-question-btn"
                onClick={() => toggle(idx)}
                aria-expanded={isOpen}
              >
                <span className="faq-question-text">{item.q}</span>
                <span className="faq-icon">{isOpen ? '−' : '+'}</span>
              </button>
              {isOpen && (
                <div className="faq-answer">
                  <p>{item.a}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
