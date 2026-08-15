export default function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "Choose Your Interview",
      desc: "Select your technical topic, difficulty level, and number of questions to create a focused mock interview."
    },
    {
      num: "02",
      title: "Answer Like a Real Interview",
      desc: "Read each technical question and explain your answer naturally, just as you would in an actual interview."
    },
    {
      num: "03",
      title: "Get AI Evaluation",
      desc: "Your answer is evaluated using our DistilBERT-based NLP engine for semantic meaning and technical correctness."
    },
    {
      num: "04",
      title: "Learn and Improve",
      desc: "Review your score, feedback, and previous interview history to identify weak areas and improve with every attempt."
    }
  ];

  return (
    <section className="how-it-works-section">
      <div className="section-header text-center">
        <h2 className="section-title">How to Use an AI Mock Interview</h2>
        <p className="section-subtitle">
          Get interview-ready with guided practice and real-time feedback, without wasting time.
        </p>
      </div>

      <div className="steps-container">
        <div className="steps-connector-line" aria-hidden="true"></div>
        <div className="steps-grid">
          {steps.map((step, idx) => (
            <div key={step.num} className="step-card">
              <div className="step-number-badge">
                <span>{step.num}</span>
              </div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-desc">{step.desc}</p>
              {idx < steps.length - 1 && (
                <div className="step-mobile-arrow" aria-hidden="true">↓</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
