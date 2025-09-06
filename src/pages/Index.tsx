import Footer from '@/components/Footer';
import MinimalHero from '@/components/MinimalHero';
import VisualOverview from '@/components/VisualOverview';

const Index = () => {
  return (
    <div className="min-h-screen">
      <main className="pt-16">
        <MinimalHero />
        <VisualOverview />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
