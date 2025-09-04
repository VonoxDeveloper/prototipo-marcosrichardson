import HoverGradientNavBar from '@/components/ui/hover-gradient-nav-bar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { InteractiveHoverButton } from '@/components/ui/interactive-hover-button';
import { BookOpen, Users, Lightbulb, Network, Heart } from 'lucide-react';
import studentsLearning from '@/assets/students-learning.jpg';

const pillars = [
  {
    name: "Formação Integral",
    description: "Buscamos o equilíbrio entre conhecimento acadêmico, desenvolvimento socioemocional e valores éticos, preparando os alunos para a vida e não apenas para provas.",
    icon: BookOpen
  },
  {
    name: "Metodologias Ativas",
    description: "Utilizamos metodologias inovadoras que colocam o aluno como protagonista do aprendizado, estimulando a autonomia, a criatividade e o pensamento crítico.",
    icon: Lightbulb
  },
  {
    name: "Inovação e Tecnologia",
    description: "Integramos ferramentas digitais ao processo de ensino, promovendo o uso consciente da tecnologia para ampliar horizontes e desenvolver competências para o século XXI.",
    icon: Network
  },
  {
    name: "Aprendizagem Colaborativa",
    description: "Valorizamos o trabalho em grupo, a troca de ideias e a resolução de problemas coletivos, formando cidadãos capazes de atuar de forma cooperativa na sociedade.",
    icon: Users
  },
  {
    name: "Conexão com a Comunidade",
    description: "Projetos sociais, culturais e ambientais aproximam os alunos da realidade em que vivem, estimulando empatia, cidadania e responsabilidade social.",
    icon: Heart
  }
];

const Proposta = () => {
  return (
    <div className="min-h-screen">
      <HoverGradientNavBar />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Nossa Proposta Pedagógica
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
              Nossa proposta pedagógica valoriza o desenvolvimento integral do estudante, unindo excelência acadêmica, valores humanos e preparo para os desafios do futuro.
            </p>
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Nossos Pilares Educacionais
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Conheça os fundamentos que orientam nossa prática pedagógica e fazem a diferença na formação dos nossos estudantes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {pillars.map((pillar, index) => {
              const IconComponent = pillar.icon;
              return (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-muted/20 hover:border-primary/20">
                  <CardContent className="p-8">
                    <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4 text-foreground">
                      {pillar.name}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {pillar.description}
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

      <Footer />
    </div>
  );
};

export default Proposta;