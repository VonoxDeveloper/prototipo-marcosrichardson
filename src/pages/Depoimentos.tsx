import HoverGradientNavBar from '@/components/ui/hover-gradient-nav-bar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';
import { Quote, Star, Heart, Users } from 'lucide-react';
import children1 from '@/assets/children-1.jpg';
import children2 from '@/assets/children-2.jpg';
import children3 from '@/assets/children-3.jpg';
import heroSchool from '@/assets/hero-school.jpg';

const testimonials = [
  {
    id: 1,
    name: "Maria S.",
    role: "Mãe de aluno",
    avatar: "M",
    text: "A escola transformou a vida do meu filho. O cuidado individual e a metodologia inovadora fazem toda a diferença. Recomendo a todos os pais que buscam excelência educacional.",
    rating: 5
  },
  {
    id: 2,
    name: "João P.",
    role: "Ex-aluno",
    avatar: "J",
    text: "Os valores e conhecimentos que adquiri aqui me acompanham até hoje. A base sólida que recebi foi fundamental para meu sucesso profissional.",
    rating: 5
  },
  {
    id: 3,
    name: "Ana L.",
    role: "Mãe de aluna",
    avatar: "A",
    text: "Ambiente acolhedor e professores dedicados. Minha filha desenvolveu não só o conhecimento, mas também valores importantes para a vida.",
    rating: 5
  },
  {
    id: 4,
    name: "Carlos M.",
    role: "Pai de aluno",
    avatar: "C",
    text: "A comunicação escola-família é excelente. Sempre bem informados sobre o desenvolvimento dos nossos filhos. Uma parceria que realmente funciona.",
    rating: 5
  },
  {
    id: 5,
    name: "Lucia R.",
    role: "Ex-aluna",
    avatar: "L",
    text: "Guardarei para sempre as memórias dos anos que passei aqui. Uma escola que prepara para a vida, não apenas para provas.",
    rating: 5
  },
  {
    id: 6,
    name: "Roberto F.",
    role: "Pai de aluno",
    avatar: "R",
    text: "Infraestrutura moderna e equipe pedagógica sempre atualizada. É visível o comprometimento com a educação de qualidade.",
    rating: 5
  }
];

const Depoimentos = () => {
  return (
    <div className="min-h-screen">
      <HoverGradientNavBar />
      <main className="pt-16">
        {/* Hero Image Section */}
        <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
          <img 
            src={heroSchool} 
            alt="Vista da escola - ambiente educacional moderno e acolhedor"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/30" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
                Depoimentos
              </h1>
              <p className="text-lg sm:text-xl max-w-2xl">
                O que dizem sobre nós
              </p>
            </div>
          </div>
        </section>

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/5 to-secondary/5 py-16 sm:py-24">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Heart className="w-4 h-4" />
              Depoimentos
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-gradient">
              O que dizem sobre nós
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Os depoimentos refletem as experiências reais de alunos, pais e ex-alunos, 
              mostrando o impacto positivo da escola na formação de cada pessoa.
            </p>
          </div>
        </section>

        {/* Photo Gallery Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Momentos especiais
              </h2>
              <p className="text-lg text-muted-foreground">
                Veja a alegria e o aprendizado no dia a dia dos nossos alunos
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <div className="group overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <img 
                  src={children1} 
                  alt="Crianças felizes brincando e aprendendo na escola"
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="group overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <img 
                  src={children2} 
                  alt="Estudantes participando de atividades educativas em grupo"
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="group overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <img 
                  src={children3} 
                  alt="Momentos de descoberta e criatividade dos alunos"
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-muted/20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Famílias satisfeitas</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">95%</div>
                <div className="text-sm text-muted-foreground">Aprovação dos pais</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">20+</div>
                <div className="text-sm text-muted-foreground">Anos de experiência</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">1000+</div>
                <div className="text-sm text-muted-foreground">Alunos formados</div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 sm:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Vozes da nossa comunidade
              </h2>
              <p className="text-lg text-muted-foreground">
                Conheça as experiências de quem faz parte da nossa família escolar
              </p>
            </div>

            <div className="max-w-6xl mx-auto">
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="w-full"
              >
                <CarouselContent className="-ml-2 md:-ml-4">
                  {testimonials.map((testimonial) => (
                    <CarouselItem key={testimonial.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                      <Card className="card-school h-full border-0">
                        <CardContent className="p-6 h-full flex flex-col">
                          <Quote className="w-8 h-8 text-primary mb-4 opacity-60" />
                          
                          <p className="text-foreground mb-6 flex-1 leading-relaxed">
                            "{testimonial.text}"
                          </p>
                          
                          <div className="flex items-center gap-1 mb-4">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                            ))}
                          </div>
                          
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                              <span className="text-primary font-semibold text-lg">
                                {testimonial.avatar}
                              </span>
                            </div>
                            <div>
                              <div className="font-semibold text-foreground">
                                {testimonial.name}
                              </div>
                              <div className="text-sm text-muted-foreground">
                                {testimonial.role}
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="flex justify-center gap-4 mt-8">
                  <CarouselPrevious className="relative left-0 translate-y-0" />
                  <CarouselNext className="relative right-0 translate-y-0" />
                </div>
              </Carousel>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 sm:py-24 bg-white">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <Users className="w-16 h-16 text-primary mx-auto mb-6" />
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Faça parte da nossa comunidade
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Venha conhecer nossa escola pessoalmente e descubra por que somos a escolha 
                de centenas de famílias. Ou compartilhe sua própria experiência conosco.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="btn-school">
                  Agendar visita
                </Button>
                <Button variant="outline" size="lg">
                  Compartilhar depoimento
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Depoimentos;