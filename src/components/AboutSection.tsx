import { Heart, Target, Eye } from 'lucide-react';
import { ShimmerButton } from '@/components/ui/shimmer-button';
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
              <ShimmerButton className="bg-primary text-primary-foreground">
                Conheça Nossa História
              </ShimmerButton>
            </div>
          </div>

          {/* Image */}
          <div className="relative fade-in">
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src={studentsImage}
                alt="Estudantes em sala de aula"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            {/* Floating Stats */}
            <div className="absolute -bottom-4 -left-4 sm:-bottom-8 sm:-left-8 bg-white rounded-xl shadow-lg p-4 sm:p-6 bounce-in">
              <div className="text-2xl sm:text-3xl font-bold text-primary">25+</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Anos de Tradição</div>
            </div>
            <div className="absolute -top-4 -right-4 sm:-top-8 sm:-right-8 bg-primary text-white rounded-xl shadow-lg p-4 sm:p-6 bounce-in">
              <div className="text-2xl sm:text-3xl font-bold">98%</div>
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card 
                  key={value.title} 
                  className={`card-school text-center fade-in`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <h4 className="text-xl font-semibold mb-4">{value.title}</h4>
                    <p className="text-muted-foreground">{value.description}</p>
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