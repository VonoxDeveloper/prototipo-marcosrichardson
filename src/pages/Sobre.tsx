import HoverGradientNavBar from '@/components/ui/hover-gradient-nav-bar';
import Footer from '@/components/Footer';
import { ShimmerButton } from '@/components/ui/shimmer-button';
import { Card, CardContent } from '@/components/ui/card';
import { Target, Eye, Heart, Users, Award, MapPin } from 'lucide-react';
import heroImage from '@/assets/hero-school.jpg';
import libraryImage from '@/assets/library.jpg';
import playgroundImage from '@/assets/playground.jpg';

const Sobre = () => {
  const timeline = [
    { year: "1916", event: "Fundação do Colégio Prototipo" },
    { year: "1960", event: "Expansão dos segmentos de ensino" },
    { year: "2000", event: "Início dos projetos internacionais" },
    { year: "2020", event: "Integração tecnológica e novas estruturas" }
  ];

  const values = [
    {
      icon: Target,
      title: "Missão",
      description: "Formar cidadãos críticos, íntegros, solidários e preparados para os desafios do mundo.",
      type: "mission"
    },
    {
      icon: Eye,
      title: "Visão",
      description: "Ser referência nacional em educação integral inovadora e humanizada.",
      type: "vision"
    },
    {
      icon: Heart,
      title: "Valores",
      description: "Ética, respeito à diversidade, responsabilidade social, equidade, excelência e cooperação.",
      type: "values"
    }
  ];

  const differentials = [
    "Excelência acadêmica com rigor didático",
    "Formação cidadã e consciência ética", 
    "Inovação pedagógica e abertura ao novo",
    "Personalização do ensino e respeito à individualidade",
    "Compromisso com inclusão escolar"
  ];

  const staff = [
    {
      name: "Dra. Maria Silva",
      role: "Diretora Geral",
      bio: "Especialista em gestão escolar, 20 anos de liderança educacional."
    },
    {
      name: "Prof. João Souza", 
      role: "Coordenador Pedagógico",
      bio: "Mestre em educação, expertise em metodologias inovadoras."
    }
  ];

  return (
    <div className="min-h-screen">
      <HoverGradientNavBar />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Colégio Prototipo"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 slide-up">
            Sobre o <span className="text-gradient">Colégio Prototipo</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto fade-in">
            Educação de excelência há mais de 100 anos
          </p>
        </div>
      </section>

      <main className="pt-16">
        {/* História Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 slide-up">
              <h2 className="text-4xl font-bold mb-6">Nossa História</h2>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
                O Colégio Prototipo foi fundado há mais de 100 anos no bairro das Laranjeiras, Rio de Janeiro. 
                Desde então, tornou-se referência em formação integral, alicerçado em valores éticos e excelência acadêmica.
              </p>
            </div>

            {/* Timeline */}
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-primary/20"></div>
              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <div 
                    key={item.year}
                    className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'} fade-in`}
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                      <div className="bg-white p-6 rounded-lg shadow-lg border">
                        <div className="text-2xl font-bold text-primary mb-2">{item.year}</div>
                        <div className="text-muted-foreground">{item.event}</div>
                      </div>
                    </div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Mission Vision Values */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 slide-up">
              <h2 className="text-4xl font-bold mb-6">Missão, Visão e Valores</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Os princípios que norteiam nossa jornada educacional
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <Card 
                    key={value.title}
                    className="card-school text-center fade-in hover-scale"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <CardContent className="p-8">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 bounce-in">
                        <IconComponent className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-2xl font-semibold mb-4">{value.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Philosophy */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="slide-up">
                <h2 className="text-4xl font-bold mb-6">Nossa Filosofia</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Acreditamos que a educação vai além do ensino de conteúdos. Valorizamos o desenvolvimento 
                  de competências socioemocionais, a formação cidadã e o pensamento crítico – pilares que 
                  transformam indivíduos e sociedade.
                </p>
                
                <div className="space-y-4">
                  {differentials.map((item, index) => (
                    <div 
                      key={index}
                      className="flex items-center space-x-3 fade-in"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="fade-in">
                <img
                  src={libraryImage}
                  alt="Filosofia educacional"
                  className="w-full h-[400px] object-cover rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Structure */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 slide-up">
              <h2 className="text-4xl font-bold mb-6">Estrutura Física</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Ambientes que estimulam o aprendizado e o convívio – laboratórios, salas climatizadas, 
                biblioteca, quadras, espaços para artes e recreação.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="overflow-hidden fade-in hover-scale">
                <img src={heroImage} alt="Sala de aula ampla e iluminada" className="w-full h-48 object-cover" />
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Salas de Aula</h3>
                  <p className="text-muted-foreground">Ambientes amplos, climatizados e tecnologicamente equipados</p>
                </CardContent>
              </Card>

              <Card className="overflow-hidden fade-in hover-scale" style={{ animationDelay: '0.2s' }}>
                <img src={libraryImage} alt="Biblioteca completa e moderna" className="w-full h-48 object-cover" />
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Biblioteca</h3>
                  <p className="text-muted-foreground">Acervo completo e espaço de estudos modernos</p>
                </CardContent>
              </Card>

              <Card className="overflow-hidden fade-in hover-scale" style={{ animationDelay: '0.4s' }}>
                <img src={playgroundImage} alt="Quadra poliesportiva coberta" className="w-full h-48 object-cover" />
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Áreas Esportivas</h3>
                  <p className="text-muted-foreground">Quadras cobertas e espaços para atividades físicas</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Staff */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 slide-up">
              <h2 className="text-4xl font-bold mb-6">Equipe Gestora</h2>
              <p className="text-xl text-muted-foreground">
                Liderança comprometida com a excelência educacional
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {staff.map((member, index) => (
                <Card 
                  key={member.name}
                  className="text-center fade-in hover-scale"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <CardContent className="p-8">
                    <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Users className="h-12 w-12 text-primary" />
                    </div>
                    <h3 className="text-2xl font-semibold mb-2">{member.name}</h3>
                    <p className="text-primary font-medium mb-4">{member.role}</p>
                    <p className="text-muted-foreground">{member.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>


        {/* CTA Section */}
        <section className="py-20 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto slide-up">
              <h2 className="text-4xl font-bold mb-6">Venha nos conhecer!</h2>
              <p className="text-xl mb-8 opacity-90">
                Agende uma visita ou faça o tour virtual para viver de perto a experiência Prototipo.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <ShimmerButton className="bg-white text-primary hover:bg-white/90">
                  Agendar Visita
                </ShimmerButton>
                <ShimmerButton className="bg-white/10 text-white border border-white/20 hover:bg-white/20">
                  Tour Virtual
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

export default Sobre;