import HoverGradientNavBar from '@/components/ui/hover-gradient-nav-bar';
import Footer from '@/components/Footer';

const VidaEscolar = () => {
  return (
    <div className="min-h-screen">
      <HoverGradientNavBar />
      <main className="pt-16">
        <div className="container mx-auto px-4 py-12 sm:py-20">
          <h1 className="text-4xl font-bold text-center mb-8">Vida Escolar</h1>
          <p className="text-lg text-center text-muted-foreground">
            Página em desenvolvimento...
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default VidaEscolar;