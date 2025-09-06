import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import SiteOverview from '@/components/SiteOverview';

const Index = () => {
  return (
    <div className="min-h-screen">
      <main className="pt-16">
        <HeroSection />
        <SiteOverview />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
