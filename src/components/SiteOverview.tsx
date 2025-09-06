import { ButtonUI } from '@/components/ui/button-ui';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { 
  Home, 
  Info, 
  GraduationCap, 
  Users, 
  Heart, 
  MessageSquare, 
  Phone, 
  ChevronRight 
} from 'lucide-react';

const SiteOverview = () => {
  const sections = [
    {
      id: "inicio",
      title: "Início",
      icon: Home,
      description: "Bem-vindos ao Colégio Prototipo! Descubra nossa instituição centenária, dedicada à formação integral de cidadãos preparados para o futuro, com tradição em excelência educacional.",
      link: "/",
      buttonText: "Página Inicial"
    },
    {
      id: "sobre",
      title: "Sobre",
      icon: Info,
      description: "Conheça nossa história de mais de 100 anos, nossa missão, visão e valores. Descubra a filosofia educacional que nos torna referência em formação integral e excelência acadêmica.",
      link: "/sobre",
      buttonText: "Conheça Nossa História"
    },
    {
      id: "proposta",
      title: "Proposta Pedagógica",
      icon: GraduationCap,
      description: "Nossa metodologia une excelência acadêmica com formação cidadã, desenvolvendo competências intelectuais, socioemocionais e éticas através de práticas pedagógicas inovadoras.",
      link: "/proposta",
      buttonText: "Saiba Mais"
    },
    {
      id: "segmentos",
      title: "Segmentos de Ensino",
      icon: Users,
      description: "Da Educação Infantil ao Ensino Médio, oferecemos formação completa com Programa Internacional opcional. Cada fase é cuidadosamente estruturada para o desenvolvimento integral do aluno.",
      link: "/segmentos",
      buttonText: "Conheça os Segmentos"
    },
    {
      id: "vida-escolar",
      title: "Vida Escolar",
      icon: Heart,
      description: "Mais que ensino, uma experiência de vida. Descubra nossas atividades extracurriculares, eventos, tradições e o ambiente acolhedor que forma memórias e valores para toda a vida.",
      link: "/vida-escolar",
      buttonText: "Explore a Vida Escolar"
    },
    {
      id: "depoimentos",
      title: "Depoimentos",
      icon: MessageSquare,
      description: "Ouça as experiências reais de alunos, pais e ex-alunos que fazem parte da nossa comunidade. Descubra o impacto transformador da educação Prototipo na vida de cada pessoa.",
      link: "/depoimentos",
      buttonText: "Leia os Depoimentos"
    },
    {
      id: "contato",
      title: "Contato",
      icon: Phone,
      description: "Entre em contato conosco para esclarecer dúvidas, agendar uma visita ou conhecer nosso processo de matrícula. Estamos prontos para atender você e sua família.",
      link: "/contato",
      buttonText: "Fale Conosco"
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 slide-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Explore o <span className="text-primary">Colégio Prototipo</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Navegue pelas diferentes seções do nosso site e descubra tudo o que faz do Colégio Prototipo 
            uma instituição única em educação de excelência, formação integral e desenvolvimento humano.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {sections.map((section, index) => {
            const IconComponent = section.icon;
            return (
              <Card 
                key={section.id}
                className="group hover:shadow-xl transition-all duration-300 border-muted/20 hover:border-primary/30 bg-white/80 backdrop-blur-sm fade-in hover-scale"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 h-full flex flex-col">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors duration-300 bounce-in">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      {section.title}
                    </h3>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6 flex-1">
                    {section.description}
                  </p>
                  
                  <Link to={section.link} className="mt-auto">
                    <ButtonUI 
                      variant="outline" 
                      className="w-full group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300"
                    >
                      <span className="flex items-center justify-center gap-2">
                        {section.buttonText}
                        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </span>
                    </ButtonUI>
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 slide-up">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-foreground">
              Pronto para fazer parte da nossa família?
            </h3>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Agende uma visita e conheça pessoalmente tudo o que o Colégio Prototipo pode oferecer 
              para o desenvolvimento integral do seu filho.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contato">
                <ButtonUI size="lg" className="btn-school">
                  Agendar Visita
                </ButtonUI>
              </Link>
              <Link to="/sobre">
                <ButtonUI variant="outline" size="lg">
                  Conhecer a Escola
                </ButtonUI>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SiteOverview;