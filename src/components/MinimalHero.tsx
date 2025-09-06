import { ButtonUI } from '@/components/ui/button-ui';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/hero-school.jpg';

const MinimalHero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Colégio Prototipo - Educação de excelência"
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
          Educação que <span className="text-primary">transforma</span>
        </h1>
        
        <div className="mt-12">
          <Link to="/sobre">
            <ButtonUI size="lg" className="text-lg px-8 py-4">
              Conhecer a escola
            </ButtonUI>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MinimalHero;