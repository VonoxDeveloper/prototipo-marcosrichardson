import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar } from 'lucide-react';

const NewsPreview = () => {
  const news = [
    { 
      title: "Feira de Ciências 2025", 
      date: "15/03/2025", 
      href: "/noticias/feira-ciencias" 
    },
    { 
      title: "Semana Cultural", 
      date: "22/04/2025", 
      href: "/noticias/semana-cultural" 
    },
    { 
      title: "Projeto Esportivo", 
      date: "10/05/2025", 
      href: "/noticias/projeto-esportivo" 
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Notícias e Eventos
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {news.map((item, index) => (
            <Card 
              key={index} 
              className="group cursor-pointer hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <a href={item.href} className="block">
                <CardHeader>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar size={16} />
                    <span className="text-sm">{item.date}</span>
                  </div>
                </CardContent>
              </a>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsPreview;