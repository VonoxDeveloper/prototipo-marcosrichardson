import HoverGradientNavBar from '@/components/ui/hover-gradient-nav-bar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ShimmerButton } from '@/components/ui/shimmer-button';
import { Users, Calendar, Building, Lightbulb, Heart, BookOpen, Palette, Trophy } from 'lucide-react';
import heroSchool from '@/assets/hero-school.jpg';

const VidaEscolar = () => {
  const lifePillars = [
    {
      icon: Heart,
      title: "Convivência",
      description: "Construindo laços de amizade e respeito mútuo"
    },
    {
      icon: BookOpen,
      title: "Aprendizado",
      description: "Conhecimento que vai além dos livros"
    },
    {
      icon: Palette,
      title: "Cultura",
      description: "Expressão artística e valorização da diversidade"
    },
    {
      icon: Trophy,
      title: "Crescimento",
      description: "Desenvolvimento pessoal e social completo"
    }
  ];

  const schoolLife = [
    {
      icon: Users,
      title: "Atividades Extracurriculares",
      description: "Oferecemos uma ampla gama de atividades esportivas, artísticas e musicais. Nossos clubes e equipes proporcionam oportunidades para que cada aluno descubra e desenvolva seus talentos únicos.",
      highlights: ["Esportes variados", "Artes e música", "Clubes temáticos", "Competições"]
    },
    {
      icon: Calendar,
      title: "Eventos e Tradições",
      description: "Celebramos momentos especiais através de feiras culturais, festas tradicionais, olimpíadas escolares e apresentações artísticas que fortalecem o senso de comunidade e pertencimento.",
      highlights: ["Feira de ciências", "Festas temáticas", "Olimpíadas", "Apresentações"]
    },
    {
      icon: Building,
      title: "Ambiente Escolar",
      description: "Nossa infraestrutura foi pensada para proporcionar conforto e inspiração. Biblioteca moderna, laboratórios equipados e espaços de convivência criam um ambiente propício ao aprendizado.",
      highlights: ["Biblioteca moderna", "Laboratórios equipados", "Espaços de convivência", "Áreas verdes"]
    },
    {
      icon: Lightbulb,
      title: "Projetos e Iniciativas",
      description: "Desenvolvemos a consciência social e ambiental através de ações comunitárias, projetos sustentáveis e grupos de estudo que conectam aprendizado com responsabilidade social.",
      highlights: ["Ações sociais", "Sustentabilidade", "Grupos de estudo", "Projetos comunitários"]
    }
  ];

  return (
    <div className="min-h-screen">
      <HoverGradientNavBar />
      <main className="pt-16">
        {/* Hero Image Section */}
        <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
          <img 
            src={heroSchool} 
            alt="Vida escolar - estudantes em atividades educativas e sociais"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/30" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
                Vida Escolar
              </h1>
              <p className="text-lg sm:text-xl max-w-2xl">
                Mais do que ensino, uma experiência de vida
              </p>
            </div>
          </div>
        </section>

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 py-16 sm:py-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Mais do que Ensino,
              <span className="block text-primary mt-2">uma Experiência de Vida</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Na nossa escola, acreditamos que a educação vai muito além da sala de aula. 
              Criamos um ambiente onde cada dia é uma oportunidade de crescer, descobrir, 
              fazer amizades e construir memórias que durarão para toda a vida.
            </p>
          </div>
        </section>

        {/* Pilares da Vida Escolar */}
        <section className="py-16 sm:py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Nossos Pilares
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Valores fundamentais que guiam nossa missão educacional
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {lifePillars.map((pillar, index) => {
                const IconComponent = pillar.icon;
                return (
                  <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                    <CardHeader className="pb-4">
                      <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                        <IconComponent className="w-8 h-8 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{pillar.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">
                        {pillar.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Dimensões da Vida Escolar */}
        <section className="py-16 sm:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Dimensões da Vida Escolar
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Descubra as múltiplas facetas que tornam nossa escola um lugar especial
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {schoolLife.map((area, index) => {
                const IconComponent = area.icon;
                return (
                  <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                      <div className="flex items-center gap-4 mb-2">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                          <IconComponent className="w-6 h-6 text-primary" />
                        </div>
                        <CardTitle className="text-2xl">{area.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base mb-4 leading-relaxed">
                        {area.description}
                      </CardDescription>
                      <div className="grid grid-cols-2 gap-2">
                        {area.highlights.map((highlight, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                            {highlight}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 sm:py-20">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Venha Conhecer Nossa Escola
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Convidamos você e sua família para uma visita especial. Venham conhecer nossos espaços, 
                conversar com nossa equipe e sentir de perto a energia que faz da nossa escola 
                um lugar único para crescer e aprender.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <ShimmerButton
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                  shimmerColor="#ffffff"
                  shimmerSize="0.05em"
                  borderRadius="0.5rem"
                  shimmerDuration="3s"
                >
                  Agendar Visita
                </ShimmerButton>
                <ShimmerButton
                  className="bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  shimmerColor="#ffffff"
                  shimmerSize="0.05em"
                  borderRadius="0.5rem"
                  shimmerDuration="3s"
                >
                  Saiba Mais
                </ShimmerButton>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default VidaEscolar;