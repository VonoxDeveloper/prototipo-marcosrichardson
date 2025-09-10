import { Calendar } from 'lucide-react';
import { ButtonUI } from '@/components/ui/button-ui';
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
    <section className="py-20 bg-muted/30 dark:bg-[#18181B]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 slide-up dark:text-[#FAFAFA]">Últimas Notícias</h2>
          <p className="text-xl text-muted-foreground dark:text-[#E4E4E7] max-w-3xl mx-auto">
            Acompanhe os principais acontecimentos da nossa comunidade escolar
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {news.map((item, index) => (
            <Card key={item.id} className={`card-school fade-in dark:bg-[#18181B] dark:border dark:border-[#27272A] dark:hover:bg-[#27272A] dark:shadow-xl dark:hover:shadow-2xl transition-all duration-200 hover:scale-[1.02]`} style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-40 sm:h-48 object-cover transition-transform duration-200 hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary dark:bg-[#5B8FF9] text-primary-foreground dark:text-[#0F0F10] px-3 py-1 rounded-full text-sm font-medium">
                    {item.category}
                  </span>
                </div>
              </div>
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-center text-xs sm:text-sm text-muted-foreground dark:text-[#A1A1AA] mb-3">
                  <Calendar className="icon-small icon-spacing-list dark:text-[#5B8FF9]" />
                  {item.date}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-3 line-clamp-2 dark:text-[#FAFAFA]">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground dark:text-[#E4E4E7] mb-4 line-clamp-3">
                  {item.summary}
                </p>
                <ButtonUI size="sm" className="dark:bg-[#5B8FF9] dark:hover:bg-[#6BA1FF] dark:text-[#0F0F10] dark:shadow-lg dark:shadow-[#5B8FF9]/20 dark:hover:shadow-xl dark:hover:shadow-[#5B8FF9]/30 transition-all duration-200 focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-[#18181B]">Leia mais</ButtonUI>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <ButtonUI className="dark:bg-[#5B8FF9] dark:hover:bg-[#6BA1FF] dark:text-[#0F0F10] dark:shadow-lg dark:shadow-[#5B8FF9]/20 dark:hover:shadow-xl dark:hover:shadow-[#5B8FF9]/30 transition-all duration-200 focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-[#18181B]">Ver Todas as Notícias</ButtonUI>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;