import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import NewsSection from '@/components/NewsSection';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <NewsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
