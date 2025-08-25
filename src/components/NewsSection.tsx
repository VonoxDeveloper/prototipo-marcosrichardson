import { Calendar, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import playgroundImage from '@/assets/playground.jpg';

const NewsSection = () => {
  const news = [
    {
      id: 1,
      title: "Festa Junina 2024: Uma Celebração Inesquecível",
      summary: "Nossa tradicional festa junina reuniu toda a comunidade escolar em uma noite repleta de diversão, música e deliciosas comidas típicas.",
      date: "15 de Junho, 2024",
      image: playgroundImage,
      category: "Eventos"
    },
    {
      id: 2,
      title: "Alunos do Ensino Médio se Destacam na Olimpíada de Matemática",
      summary: "Três estudantes da nossa escola conquistaram medalhas na fase estadual da Olimpíada Brasileira de Matemática das Escolas Públicas.",
      date: "10 de Junho, 2024",
      image: playgroundImage,
      category: "Conquistas"
    },
    {
      id: 3,
      title: "Novo Laboratório de Ciências Inaugurado",
      summary: "Investimento em infraestrutura: novo laboratório oferece recursos modernos para experimentos e pesquisas científicas.",
      date: "5 de Junho, 2024",
      image: playgroundImage,
      category: "Infraestrutura"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 slide-up">Últimas Notícias</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Acompanhe os principais acontecimentos da nossa comunidade escolar
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {news.map((item, index) => (
            <Card key={item.id} className={`card-school fade-in`} style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {item.category}
                  </span>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center text-sm text-muted-foreground mb-3">
                  <Calendar className="h-4 w-4 mr-2" />
                  {item.date}
                </div>
                <h3 className="text-xl font-semibold mb-3 line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {item.summary}
                </p>
                <Button variant="ghost" className="p-0 h-auto text-primary hover:text-primary/80">
                  Leia mais
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="btn-school">
            Ver Todas as Notícias
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;