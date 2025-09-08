import { ButtonUI } from '@/components/ui/button-ui';
import { Card, CardContent } from '@/components/ui/card';

const AboutPreview = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto border-0 shadow-lg">
          <CardContent className="p-8 lg:p-12 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Sobre o Colégio Marcos Richardson
            </h2>
            <p className="text-lg lg:text-xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
              Uma instituição que une tradição e inovação, formando alunos preparados para os desafios do futuro.
            </p>
            <ButtonUI size="lg" className="px-8 py-4" asChild>
              <a href="/sobre">Saiba mais</a>
            </ButtonUI>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AboutPreview;