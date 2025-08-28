import HoverGradientNavBar from '@/components/ui/hover-gradient-nav-bar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import NewsSection from '@/components/NewsSection';

const Index = () => {
  return (
    <div className="min-h-screen">
      <HoverGradientNavBar />
      <main className="pt-16">
        <HeroSection />
        <AboutSection />
        <NewsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
