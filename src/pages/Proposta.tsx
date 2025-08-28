import HoverGradientNavBar from '@/components/ui/hover-gradient-nav-bar';
import Footer from '@/components/Footer';

const Proposta = () => {
  return (
    <div className="min-h-screen">
      <HoverGradientNavBar />
      <main className="pt-20 sm:pt-24">
        <div className="container mx-auto px-4 py-12 sm:py-20">
          <h1 className="text-4xl font-bold text-center mb-8">Proposta Pedagógica</h1>
          <p className="text-lg text-center text-muted-foreground">
            Página em desenvolvimento...
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Proposta;