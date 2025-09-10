import { ButtonUI } from '@/components/ui/button-ui';
import { Card, CardContent } from '@/components/ui/card';

const FinalCTA = () => {
  return (
    <section className="py-20 bg-primary dark:bg-[#0F0F10]">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto bg-white border-0 shadow-xl dark:bg-[#18181B] dark:border dark:border-[#27272A] dark:shadow-2xl">
          <CardContent className="p-8 lg:p-12 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground dark:text-[#FAFAFA] mb-6">
              Agende uma visita
            </h2>
            <p className="text-lg lg:text-xl text-muted-foreground dark:text-[#E4E4E7] mb-8 leading-relaxed max-w-3xl mx-auto">
              Conheça nossa proposta pedagógica e vivencie a experiência do Colégio Marcos Richardson.
            </p>
            <ButtonUI size="lg" className="px-8 py-4 text-lg dark:bg-[#5B8FF9] dark:hover:bg-[#6BA1FF] dark:text-[#0F0F10] dark:shadow-lg dark:shadow-[#5B8FF9]/20 dark:hover:shadow-xl dark:hover:shadow-[#5B8FF9]/30 transition-all duration-200 focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-[#18181B]" asChild>
              <a href="/admissoes#visita">Agendar visita</a>
            </ButtonUI>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default FinalCTA;