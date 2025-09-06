import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Users, BookOpen, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { preloadImages } from '@/utils/performance';
import heroImage from '@/assets/hero-school.jpg';
import studentsImage from '@/assets/students-learning.jpg';
import libraryImage from '@/assets/library.jpg';

// HeroSection component with Button integration

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: heroImage,
      title: "Formando o Futuro",
      subtitle: "Uma educação de excelência que prepara seus filhos para os desafios do amanhã",
      highlight: "Há 25 anos transformando vidas"
    },
    {
      image: studentsImage,
      title: "Aprendizado Colaborativo",
      subtitle: "Metodologias modernas que estimulam o pensamento crítico e a criatividade",
      highlight: "Educação que inspira"
    },
    {
      image: libraryImage,
      title: "Estrutura Completa",
      subtitle: "Ambiente acolhedor e recursos modernos para o desenvolvimento integral",
      highlight: "Tradição e inovação"
    }
  ];

  // Preload images for better performance
  useEffect(() => {
    const imagesToPreload = slides.map(slide => slide.image);
    preloadImages(imagesToPreload);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000); // Increased interval for better UX

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="hero-section">
      {/* Background Images - Optimized */}
      <div className="absolute inset-0 h-screen overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover object-center"
              style={{ minHeight: '100vh' }}
              loading={index === 0 ? 'eager' : 'lazy'}
              decoding="async"
            />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="hero-content fade-in pt-20 sm:pt-24 relative z-10 min-h-screen flex flex-col justify-center">
        <div className="mb-4 sm:mb-6">
          <span className="inline-block px-4 py-2 bg-white/20 rounded-full text-sm font-medium mb-4 backdrop-blur-sm">
            {slides[currentSlide].highlight}
          </span>
          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 slide-up leading-tight">
            {slides[currentSlide].title}
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto opacity-90 px-4">
            {slides[currentSlide].subtitle}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center bounce-in">
          <Button text="Conheça Nossa Escola" />
          <Button text="Agendar Visita" />
        </div>

        {/* Stats - Mobile Optimized */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mt-12 mb-16 max-w-4xl mx-auto px-4">
          <div className="text-center bounce-in bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <Users className="h-6 w-6 sm:h-8 sm:w-8 mx-auto mb-2 text-white" />
            <div className="text-xl sm:text-2xl font-bold">1200+</div>
            <div className="text-xs sm:text-sm opacity-80">Alunos Ativos</div>
          </div>
          <div className="text-center bounce-in bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <BookOpen className="h-6 w-6 sm:h-8 sm:w-8 mx-auto mb-2 text-white" />
            <div className="text-xl sm:text-2xl font-bold">25</div>
            <div className="text-xs sm:text-sm opacity-80">Anos de Tradição</div>
          </div>
          <div className="text-center bounce-in bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <Award className="h-6 w-6 sm:h-8 sm:w-8 mx-auto mb-2 text-white" />
            <div className="text-xl sm:text-2xl font-bold">98%</div>
            <div className="text-xs sm:text-sm opacity-80">Aprovação Vestibular</div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows - Mobile Optimized */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 sm:p-3 transition-all duration-200"
        aria-label="Slide anterior"
      >
        <ChevronLeft className="h-4 w-4 sm:h-6 sm:w-6 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 sm:p-3 transition-all duration-200"
        aria-label="Próximo slide"
      >
        <ChevronRight className="h-4 w-4 sm:h-6 sm:w-6 text-white" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;