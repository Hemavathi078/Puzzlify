import { Hero } from '../components/landing/Hero';
import { Features } from '../components/landing/Features';
import { Stats } from '../components/landing/Stats';
import { CategoriesPreview } from '../components/landing/CategoriesPreview';
import { GameDemo } from '../components/landing/GameDemo';
import { HowItWorks } from '../components/landing/HowItWorks';
import { Footer } from '../components/landing/Footer';
import { FloatingIcons } from '../components/common/FloatingIcons';
import { Header } from '../components/common/Header';

interface LandingProps {
  onStartPlaying: () => void;
}

export const Landing: React.FC<LandingProps> = ({ onStartPlaying }) => {
  const scrollToHowItWorks = () => {
    document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative">
      <Header onStartPlaying={onStartPlaying} />
      <FloatingIcons />
      <Hero onStartPlaying={onStartPlaying} onHowItWorks={scrollToHowItWorks} />
      <Stats />
      <Features />
      <CategoriesPreview onCategoryClick={onStartPlaying} />
      <GameDemo />
      <HowItWorks />
      <Footer />
    </div>
  );
};
