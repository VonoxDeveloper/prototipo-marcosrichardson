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
    <section className="relative min-h-[700px] lg:min-h-[800px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-gray-50 to-white dark:bg-gradient-to-b dark:from-[#0F0F10] dark:to-[#18181B]">
      {/* Background with modern gradient */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/5"></div>
        <div className="absolute top-20 left-20 w-72 h-72 bg-secondary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-6 leading-tight text-primary dark:text-[#FAFAFA]">
            Educação que <span className="text-secondary dark:text-[#5B8FF9]">inspira</span> o futuro
          </h1>
          
          <p className="text-lg sm:text-xl lg:text-2xl mb-12 text-muted-foreground dark:text-[#E4E4E7] max-w-4xl mx-auto leading-relaxed font-medium">
            Do Infantil ao Médio, uma jornada acadêmica com propósito, tecnologia e acolhimento que prepara líderes do amanhã.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <a href="/segmentos" className="inline-block">
              <button className="px-10 py-4 bg-secondary text-white font-semibold text-lg rounded-xl hover:bg-secondary/90 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl dark:bg-[#5B8FF9] dark:hover:bg-[#6BA1FF] dark:text-[#0F0F10] dark:shadow-lg dark:shadow-[#5B8FF9]/20 dark:hover:shadow-xl dark:hover:shadow-[#5B8FF9]/30 focus:ring-2 focus:ring-secondary focus:ring-offset-2 dark:focus:ring-offset-[#0F0F10] dark:focus:ring-[#5B8FF9]">
                Conheça nossos Segmentos
              </button>
            </a>
            <a href="/visitas" className="inline-block">
              <button className="px-10 py-4 border-2 border-secondary text-secondary font-semibold text-lg rounded-xl hover:bg-secondary hover:text-white transition-all duration-200 hover:scale-105 dark:border-2 dark:border-[#5B8FF9] dark:text-[#5B8FF9] dark:hover:bg-[#5B8FF9] dark:hover:text-[#0F0F10] focus:ring-2 focus:ring-secondary focus:ring-offset-2 dark:focus:ring-offset-[#0F0F10] dark:focus:ring-[#5B8FF9]">
                Agende uma visita
              </button>
            </a>
          </div>

          {/* Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {highlights.map((highlight, index) => (
              <div key={index} className="flex items-center justify-center gap-4 p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 dark:bg-[#18181B]/80 dark:border dark:border-[#27272A] dark:hover:bg-[#27272A] dark:shadow-xl dark:hover:shadow-2xl">
                <highlight.icon size={32} className="text-secondary flex-shrink-0 dark:text-[#5B8FF9]" />
                <span className="font-semibold text-primary text-lg dark:text-[#FAFAFA]">{highlight.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;