import { Heart, Target, Eye } from 'lucide-react';
import { HoverButton } from '@/components/ui/hover-button';
import { Card, CardContent } from '@/components/ui/card';
import studentsImage from '@/assets/students-learning.jpg';

const AboutSection = () => {
  const values = [
    {
      icon: Heart,
      title: "Missão",
      description: "Oferecer educação de qualidade que forme cidadãos éticos, críticos e preparados para os desafios do futuro."
    },
    {
      icon: Eye,
      title: "Visão",
      description: "Ser reconhecida como referência em educação integral, promovendo a excelência acadêmica e humana."
    },
    {
      icon: Target,
      title: "Valores",
      description: "Respeito, responsabilidade, solidariedade, integridade e busca constante pela excelência educacional."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="slide-up">
              <h2 className="text-4xl font-bold mb-6">
                Uma Escola que <span className="text-gradient">Transforma Vidas</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Há mais de 25 anos, nossa escola tem sido um marco na educação, 
                combinando tradição e inovação para formar cidadãos preparados 
                para os desafios do século XXI.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Com uma proposta pedagógica diferenciada e uma equipe de educadores 
                comprometidos, oferecemos um ambiente acolhedor onde cada aluno 
                pode desenvolver seu potencial máximo.
              </p>
              <HoverButton text="Conheça Nossa História" />
            </div>
          </div>

          {/* Image - Optimized */}
          <div className="relative fade-in">
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src={studentsImage}
                alt="Estudantes em sala de aula"
                className="w-full h-[400px] sm:h-[500px] lg:h-[600px] object-cover"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            {/* Floating Stats - Mobile Optimized */}
            <div className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 lg:-bottom-8 lg:-left-8 bg-white rounded-xl shadow-lg p-3 sm:p-4 lg:p-6 bounce-in">
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary">25+</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Anos de Tradição</div>
            </div>
            <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 lg:-top-8 lg:-right-8 bg-primary text-white rounded-xl shadow-lg p-3 sm:p-4 lg:p-6 bounce-in">
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold">98%</div>
              <div className="text-xs sm:text-sm opacity-90">Satisfação das Famílias</div>
            </div>
          </div>
        </div>

        {/* Mission, Vision, Values */}
        <div className="mt-20">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold mb-4 slide-up">Nossos Pilares</h3>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Os valores que guiam nossa jornada educacional
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card 
                  key={value.title} 
                  className={`card-school text-center fade-in`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6 lg:p-8">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 lg:mb-6">
                      <IconComponent className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 text-primary" />
                    </div>
                    <h4 className="text-lg sm:text-xl font-semibold mb-3 lg:mb-4">{value.title}</h4>
                    <p className="text-sm sm:text-base text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;