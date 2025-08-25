import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, Users, BookOpen, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-school.jpg';
import studentsImage from '@/assets/students-learning.jpg';
import libraryImage from '@/assets/library.jpg';

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

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

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
      {/* Background Images */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="hero-content fade-in">
        <div className="mb-6">
          <span className="inline-block px-4 py-2 bg-white/20 rounded-full text-sm font-medium mb-4 backdrop-blur-sm">
            {slides[currentSlide].highlight}
          </span>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 slide-up">
            {slides[currentSlide].title}
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            {slides[currentSlide].subtitle}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center bounce-in">
          <Button size="lg" className="btn-hero">
            Conheça Nossa Escola
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white bg-white/10 hover:bg-white hover:text-primary">
            Agendar Visita
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto">
          <div className="text-center bounce-in">
            <Users className="h-8 w-8 mx-auto mb-2 text-white" />
            <div className="text-2xl font-bold">1200+</div>
            <div className="text-sm opacity-80">Alunos Ativos</div>
          </div>
          <div className="text-center bounce-in">
            <BookOpen className="h-8 w-8 mx-auto mb-2 text-white" />
            <div className="text-2xl font-bold">25</div>
            <div className="text-sm opacity-80">Anos de Tradição</div>
          </div>
          <div className="text-center bounce-in">
            <Award className="h-8 w-8 mx-auto mb-2 text-white" />
            <div className="text-2xl font-bold">98%</div>
            <div className="text-sm opacity-80">Aprovação Vestibular</div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300"
      >
        <ChevronLeft className="h-6 w-6 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300"
      >
        <ChevronRight className="h-6 w-6 text-white" />
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