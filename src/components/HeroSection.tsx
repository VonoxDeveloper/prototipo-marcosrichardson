import { ButtonUI } from '@/components/ui/button-ui';
import { GraduationCap, HeartHandshake, Cpu } from 'lucide-react';
import heroImage from '@/assets/hero-school.jpg';

const HeroSection = () => {
  const highlights = [
    { icon: GraduationCap, text: "Excelência acadêmica" },
    { icon: HeartHandshake, text: "Acolhimento e segurança" },
    { icon: Cpu, text: "Tecnologia no aprender" }
  ];

  return (
    <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Estudantes do Colégio Marcos Richardson"
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
        <div className="absolute inset-0 bg-primary/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Educação que <span className="text-secondary">inspira</span> o futuro
          </h1>
          
          <p className="text-lg sm:text-xl lg:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
            Do Infantil ao Médio, uma jornada acadêmica com propósito, tecnologia e acolhimento.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a href="/segmentos">
              <ButtonUI size="lg" className="text-lg px-8 py-4">
                Conheça nossos Segmentos
              </ButtonUI>
            </a>
            <a href="/admissoes#visita">
              <ButtonUI 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-4 bg-white/10 border-white/30 hover:bg-white/20 text-white"
              >
                Agende uma visita
              </ButtonUI>
            </a>
          </div>

          {/* Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
            {highlights.map((highlight, index) => (
              <div key={index} className="flex items-center justify-center gap-3 text-white/90">
                <highlight.icon size={24} className="text-secondary flex-shrink-0" />
                <span className="font-medium">{highlight.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;