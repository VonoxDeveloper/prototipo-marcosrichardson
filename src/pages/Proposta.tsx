import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { InteractiveHoverButton } from '@/components/ui/interactive-hover-button';
import { BookOpen, Users, Lightbulb, Network, Heart, GraduationCap, Target, Compass, Sparkles } from 'lucide-react';
import studentsLearning from '@/assets/students-learning.jpg';
import heroImage from '@/assets/hero-school.jpg';

const educationPhases = [
  {
    name: "Educação Infantil",
    ageRange: "0 a 5 anos",
    description: "Desenvolvimento social, linguístico e motor em ambiente acolhedor, ampliando a visão de mundo através de experiências lúdicas e significativas.",
    highlights: [
      "Estímulo à socialização e expressão",
      "Desenvolvimento da motricidade e coordenação",
      "Descoberta do mundo através do brincar",
      "Formação de vínculos afetivos seguros"
    ]
  },
  {
    name: "Ensino Fundamental",
    ageRange: "6 a 14 anos",
    description: "Evolução progressiva das habilidades cognitivas, expressivas e conceituais, com ampliação gradual conforme cada faixa etária.",
    highlights: [
      "Consolidação da alfabetização e letramento",
      "Desenvolvimento do raciocínio lógico-matemático",
      "Estímulo ao pensamento crítico e científico",
      "Fortalecimento da autonomia estudantil"
    ]
  },
  {
    name: "Ensino Médio",
    ageRange: "15 a 17 anos",
    description: "Aprofundamento de competências conceituais, atitudes e procedimentos, preparando para escolhas profissionais e ingresso no mundo do trabalho.",
    highlights: [
      "Preparação para vestibulares e ENEM",
      "Orientação vocacional e projeto de vida",
      "Desenvolvimento de competências socioemocionais",
      "Formação para cidadania ativa"
    ]
  }
];

const pillars = [
  {
    name: "Excelência Acadêmica",
    description: "Rigor didático e qualidade no ensino, desenvolvendo competências intelectuais sólidas através de metodologias comprovadas e inovadoras.",
    icon: GraduationCap
  },
  {
    name: "Formação Cidadã",
    description: "Educação para a vida em sociedade, valorizando cultura, corporeidade, atuação social e projetos que conectam teoria e prática.",
    icon: Heart
  },
  {
    name: "Metodologias Inovadoras",
    description: "Estratégias pedagógicas que colocam o estudante como protagonista, estimulando criatividade, autonomia e pensamento crítico.",
    icon: Lightbulb
  },
  {
    name: "Desenvolvimento Integral",
    description: "Formação que contempla aspectos cognitivos, emocionais, sociais e éticos, preparando cidadãos completos para os desafios do futuro.",
    icon: Target
  }
];

const values = [
  {
    name: "Tradição",
    description: "Preservamos valores educacionais consolidados, honrando nossa história e experiência pedagógica.",
    icon: Compass
  },
  {
    name: "Inovação",
    description: "Abraçamos novas tecnologias e metodologias para enriquecer o processo de ensino-aprendizagem.",
    icon: Sparkles
  },
  {
    name: "Humanismo",
    description: "Colocamos o ser humano no centro de nossa prática educativa, valorizando dignidade e potencial individual.",
    icon: Heart
  },
  {
    name: "Equidade",
    description: "Promovemos oportunidades justas e inclusivas, respeitando as diferenças e necessidades de cada estudante.",
    icon: Users
  }
];

const Proposta = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Nossa Proposta Pedagógica - Colégio Prototipo"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 slide-up">
            Nossa <span className="text-gradient">Proposta Pedagógica</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto fade-in">
            Desenvolvimento integral do estudante, unindo excelência acadêmica, valores humanos e preparo para os desafios do futuro
          </p>
        </div>
      </section>

      <main className="pt-16">
        {/* Introduction Section */}
        <section className="py-16 sm:py-24 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Educação que Transforma
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Nossa metodologia une excelência no ensino com o desenvolvimento ético, crítico e social dos alunos — 
                formando cidadãos preparados para transformar o futuro através de uma educação integral que valoriza 
                não só o conhecimento acadêmico, mas também a formação humana e cidadã.
              </p>
            </div>
          </div>
        </section>

        {/* Education Phases Section */}
        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Por Fase de Ensino
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Cada etapa da jornada educativa é cuidadosamente estruturada para atender às necessidades específicas de desenvolvimento.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {educationPhases.map((phase, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-muted/20 hover:border-primary/20">
                  <CardContent className="p-8">
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold mb-2 text-primary">
                        {phase.name}
                      </h3>
                      <p className="text-sm font-medium text-muted-foreground bg-muted/50 px-3 py-1 rounded-full inline-block">
                        {phase.ageRange}
                      </p>
                    </div>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {phase.description}
                    </p>
                    <div className="space-y-2">
                      {phase.highlights.map((highlight, highlightIndex) => (
                        <div key={highlightIndex} className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <p className="text-sm text-foreground">{highlight}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Pillars Section */}
        <section className="py-16 sm:py-24 bg-muted/20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Nossos Pilares Pedagógicos
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Valores orientadores que guiam nossa prática diária e fazem a diferença na formação dos nossos estudantes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {pillars.map((pillar, index) => {
                const IconComponent = pillar.icon;
                return (
                  <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-muted/20 hover:border-primary/20">
                    <CardContent className="p-8">
                      <div className="flex items-start gap-4">
                        <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                          <IconComponent className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold mb-3 text-foreground">
                            {pillar.name}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed">
                            {pillar.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Nossos Valores Institucionais
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Princípios fundamentais que orientam nossa missão educativa e nossa visão de futuro.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-muted/20 hover:border-primary/20">
                    <CardContent className="p-6 text-center">
                      <div className="flex items-center justify-center w-14 h-14 bg-primary/10 rounded-full mb-4 mx-auto group-hover:bg-primary/20 transition-colors duration-300">
                        <IconComponent className="w-7 h-7 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold mb-3 text-foreground">
                        {value.name}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

      {/* Image Section */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src={studentsLearning} 
                alt="Estudantes participando de atividades educativas inovadoras"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                <div className="p-8 text-white">
                  <h3 className="text-2xl font-bold mb-2">Aprendizado na Prática</h3>
                  <p className="text-white/90">
                    Metodologias ativas que transformam o conhecimento em experiência real
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Viva Nossa Proposta Pedagógica
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Agende uma visita e descubra como nossa proposta pedagógica transforma o aprendizado em experiência de vida.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6">
                Agendar Visita
              </Button>
              <InteractiveHoverButton 
                text="Saiba Mais" 
                className="w-auto px-8 py-3 text-lg"
              />
            </div>
          </div>
        </div>
      </section>
      </main>

      <Footer />
    </div>
  );
};

export default Proposta;