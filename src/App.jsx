import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import ProgressBar from './components/ProgressBar';
import HeroSection from './sections/HeroSection';
import TheorySection from './sections/TheorySection';
import TimelineSection from './sections/TimelineSection';
import ComparisonSection from './sections/ComparisonSection';
import ChartsSection from './sections/ChartsSection';
import CaseStudiesSection from './sections/CaseStudiesSection';
import SolutionsSection from './sections/SolutionsSection';
import QuizSection from './sections/QuizSection';
import ConclusionSection from './sections/ConclusionSection';
import { useScrollProgress, useActiveSection } from './hooks/index';
import { menuItems } from './data/index';

const SECTION_IDS = menuItems.map((item) => item.id);

export default function App() {
  const progress = useScrollProgress();
  const activeSection = useActiveSection(SECTION_IDS);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-cn-cream">
      <ProgressBar progress={progress} />
      <Navbar activeSection={activeSection} scrolled={scrolled} />

      <main>
        <HeroSection />
        <TheorySection />
        <TimelineSection />
        <ComparisonSection />
        <ChartsSection />
        <CaseStudiesSection />
        <SolutionsSection />
        <QuizSection />
        <ConclusionSection />
      </main>
    </div>
  );
}
