import Header from '@/components/Header';
import FooterMR from '@/components/FooterMR';
import { Card, CardContent } from '@/components/ui/card';
import { ButtonUI } from '@/components/ui/button-ui';
import { Smile, Book, GraduationCap, Globe, CheckCircle } from 'lucide-react';
import heroImage from '@/assets/hero-school.jpg';

const Segmentos = () => {
  const segments = [
    {
      id: "infant-education",
      header: "Educação Infantil",
      icon: Smile,
      description: "No Colégio Prototipo, a Educação Infantil estimula a integração social, o desenvolvimento da linguagem, do raciocínio lógico e da coordenação motora, preparando as crianças para descobertas diárias.",
      highlights: [
        "Ambientes lúdicos e seguros",
        "Aprendizagem através do brincar",
        "Integração família-escola",
        "Atividades psicomotoras e artísticas"
      ],
      animation: "fade-in"
    },
    {
      id: "fundamental",
      header: "Ensino Fundamental",
      icon: Book,
      description: "Nesta etapa, o Colégio Prototipo aprofunda conceitos essenciais, desenvolve o raciocínio crítico e incentiva o crescimento pessoal, social e acadêmico do estudante.",
      highlights: [
        "Foco em competências e habilidades",
        "Projetos interdisciplinares",
        "Iniciação científica e cultural",
        "Acompanhamento individualizado"
      ],
      animation: "fade-in"
    },
    {
      id: "high-school",
      header: "Ensino Médio",
      icon: GraduationCap,
      description: "O Ensino Médio proporciona aprofundamento de conhecimentos, preparação para vestibulares, Enem e ingresso em universidades, aliando escolha profissional e formação cidadã.",
      highlights: [
        "Orientação vocacional",
        "Preparação para exames nacionais",
        "Projetos de protagonismo juvenil",
        "Aulas eletivas e atividades extracurriculares"
      ],
      animation: "fade-in"
    },
    {
      id: "international-program",
      header: "Programa Internacional",
      icon: Globe,
      description: "A partir do 9º ano, os alunos podem conquistar o diploma internacional de Ensino Médio pela parceria com escolas estrangeiras, ampliando as oportunidades acadêmicas fora do Brasil.",
      highlights: [
        "Conteúdo curricular internacional",
        "Dupla certificação",
        "Aulas em inglês",
        "Parcerias com instituições renomadas"
      ],
      animation: "fade-in"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Segmentos de Ensino - Colégio Prototipo"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 slide-up">
            Segmentos de <span className="text-gradient">Ensino</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto fade-in">
            Conheça cada etapa do desenvolvimento escolar no Colégio Prototipo
          </p>
        </div>
      </section>

      <main className="pt-16">
        {/* Introduction */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 slide-up">
              <h2 className="text-4xl font-bold mb-6">Jornada Educacional Completa</h2>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
                Do primeiro passo na Educação Infantil até a conquista do diploma internacional, 
                oferecemos uma formação integral que prepara nossos alunos para os desafios do futuro.
              </p>
            </div>
          </div>
        </section>

        {/* Segments */}
        {segments.map((segment, index) => {
          const IconComponent = segment.icon;
          const isEven = index % 2 === 0;
          
          return (
            <section 
              key={segment.id} 
              className={`py-20 ${isEven ? 'bg-white' : 'bg-muted/30'}`}
            >
              <div className="container mx-auto px-4">
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
                  <div className={`${segment.animation} ${!isEven ? 'lg:order-2' : ''}`}>
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mr-4 bounce-in">
                        <IconComponent className="h-8 w-8 text-primary" />
                      </div>
                      <h2 className="text-4xl font-bold">{segment.header}</h2>
                    </div>
                    
                    <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                      {segment.description}
                    </p>
                    
                    <div className="space-y-4">
                      {segment.highlights.map((highlight, highlightIndex) => (
                        <div 
                          key={highlightIndex}
                          className="flex items-center space-x-3 fade-in"
                          style={{ animationDelay: `${highlightIndex * 0.1}s` }}
                        >
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                          <span className="text-muted-foreground">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className={`fade-in ${!isEven ? 'lg:order-1' : ''}`}>
                    <Card className="p-8 hover-scale">
                      <CardContent className="p-0">
                        <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 bounce-in">
                          <IconComponent className="h-10 w-10 text-primary" />
                        </div>
                        <h3 className="text-2xl font-semibold text-center mb-4">{segment.header}</h3>
                        <p className="text-muted-foreground text-center mb-6">
                          Desenvolvimento integral em cada fase da vida escolar
                        </p>
                        <div className="text-center">
                          <ButtonUI>Saiba Mais</ButtonUI>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </section>
          );
        })}

        {/* CTA Section */}
        <section className="py-20 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto slide-up">
              <h2 className="text-4xl font-bold mb-6">Matrículas Abertas</h2>
              <p className="text-xl mb-8 opacity-90">
                Faça parte da família Prototipo e ofereça ao seu filho uma educação 
                de excelência que o preparará para um futuro brilhante.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <ButtonUI variant="outline" className="bg-white text-primary border-white hover:bg-white/90">Agendar Visita</ButtonUI>
                <ButtonUI variant="outline" className="bg-white/10 text-white border-white/20 hover:bg-white/20">Processo Seletivo</ButtonUI>
              </div>
            </div>
          </div>
        </section>
      </main>

      <FooterMR />
    </div>
  );
};

export default Segmentos;