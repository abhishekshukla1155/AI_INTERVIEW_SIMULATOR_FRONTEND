import HeroSection from './HeroSection';
import HowItWorks from './HowItWorks';
import TechnologySection from './TechnologySection';

export default function WelcomeScreen({ onStartInterview, onGoToHistory, isLoading, error }) {
  return (
    <main className="welcome-dashboard">
      <HeroSection 
        onStartInterview={onStartInterview} 
        onGoToHistory={onGoToHistory}
        isLoading={isLoading}
        error={error}
      />
      
      <HowItWorks />
      
      <TechnologySection />
    </main>
  );
}
