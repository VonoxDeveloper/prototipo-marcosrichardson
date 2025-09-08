import { ButtonUI } from '@/components/ui/button-ui';
import { Card, CardContent } from '@/components/ui/card';

const FinalCTA = () => {
  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto bg-white border-0 shadow-xl">
          <CardContent className="p-8 lg:p-12 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Agende uma visita
            </h2>
            <p className="text-lg lg:text-xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
              Conheça nossa proposta pedagógica e vivencie a experiência do Colégio Marcos Richardson.
            </p>
            <ButtonUI size="lg" className="px-8 py-4 text-lg" asChild>
              <a href="/admissoes#visita">Agendar visita</a>
            </ButtonUI>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default FinalCTA;