import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const SegmentsPreview = () => {
  const segments = [
    { 
      title: "Educação Infantil", 
      desc: "Primeiros passos no conhecimento", 
      href: "/segmentos#infantil" 
    },
    { 
      title: "Ensino Fundamental", 
      desc: "Formação sólida e criativa", 
      href: "/segmentos#fundamental" 
    },
    { 
      title: "Ensino Médio", 
      desc: "Preparação para o futuro e vestibulares", 
      href: "/segmentos#medio" 
    },
    { 
      title: "Integral e Atividades", 
      desc: "Complemento escolar e atividades extras", 
      href: "/segmentos#integral" 
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Nossos Segmentos
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {segments.map((segment, index) => (
            <Card 
              key={index} 
              className="group cursor-pointer hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <a href={segment.href} className="block">
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {segment.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {segment.desc}
                  </p>
                </CardContent>
              </a>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SegmentsPreview;