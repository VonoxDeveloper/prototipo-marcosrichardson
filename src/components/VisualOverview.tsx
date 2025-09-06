import { ButtonUI } from '@/components/ui/button-ui';
import { Link } from 'react-router-dom';
import studentsLearning from '@/assets/students-learning.jpg';
import libraryImage from '@/assets/library.jpg';
import playgroundImage from '@/assets/playground.jpg';
import children1 from '@/assets/children-1.jpg';
import children2 from '@/assets/children-2.jpg';
import heroSchool from '@/assets/hero-school.jpg';

const VisualOverview = () => {
  const sections = [
    {
      id: "sobre",
      title: "Sobre",
      image: heroSchool,
      microcopy: "Tradição centenária em educação de excelência.",
      cta: "Conhecer nossa história",
      link: "/sobre",
      alt: "História e tradição do Colégio Prototipo"
    },
    {
      id: "proposta",
      title: "Proposta Pedagógica",
      image: studentsLearning,
      microcopy: "Metodologia que forma cidadãos do futuro.",
      cta: "Entender a proposta",
      link: "/proposta",
      alt: "Metodologia pedagógica inovadora"
    },
    {
      id: "segmentos",
      title: "Segmentos de Ensino",
      image: children1,
      microcopy: "Do infantil ao médio, formação completa.",
      cta: "Ver segmentos",
      link: "/segmentos",
      alt: "Segmentos educacionais do infantil ao ensino médio"
    },
    {
      id: "vida-escolar",
      title: "Vida Escolar",
      image: playgroundImage,
      microcopy: "Experiências que constroem valores e memórias.",
      cta: "Explorar vida escolar",
      link: "/vida-escolar",
      alt: "Atividades e experiências da vida escolar"
    },
    {
      id: "depoimentos",
      title: "Depoimentos",
      image: children2,
      microcopy: "Impacto real na vida de famílias.",
      cta: "Ler depoimentos",
      link: "/depoimentos",
      alt: "Depoimentos de pais e alunos"
    },
    {
      id: "contato",
      title: "Contato",
      image: libraryImage,
      microcopy: "Venha conhecer nossa escola pessoalmente.",
      cta: "Falar com a escola",
      link: "/contato",
      alt: "Entre em contato conosco"
    }
  ];

  return (
    <section className="py-20 sm:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Grid responsivo: 1 coluna (0-640px), 2 colunas (641-1024px), 3 colunas (≥1025px) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 max-w-7xl mx-auto">
          {sections.map((section, index) => (
            <Link
              key={section.id}
              to={section.link}
              className="group block"
              aria-label={`${section.title}: ${section.microcopy}`}
            >
              <article 
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Imagem dominante */}
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={section.image}
                    alt={section.alt}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading={index < 3 ? "eager" : "lazy"}
                  />
                </div>

                {/* Conteúdo mínimo */}
                <div className="p-6 lg:p-8">
                  <h2 className="text-xl lg:text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {section.title}
                  </h2>
                  
                  <p className="text-muted-foreground text-base lg:text-lg mb-6 leading-relaxed">
                    {section.microcopy}
                  </p>
                  
                  <ButtonUI 
                    variant="outline" 
                    className="w-full group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300"
                  >
                    {section.cta}
                  </ButtonUI>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisualOverview;