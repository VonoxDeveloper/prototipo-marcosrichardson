import { ButtonUI } from '@/components/ui/button-ui';
import { ClipboardPen, User, Calendar, Phone } from 'lucide-react';

const QuickActions = () => {
  const items = [
    { icon: ClipboardPen, label: "Matrículas", href: "/admissoes" },
    { icon: User, label: "Portal do Aluno", href: "/portal-aluno" },
    { icon: Calendar, label: "Agenda", href: "/calendario" },
    { icon: Phone, label: "Contato", href: "/contato" }
  ];

  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-foreground mb-4">Acesso rápido</h2>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {items.map((item, index) => (
            <ButtonUI
              key={index}
              variant="outline"
              size="lg"
              className="h-auto p-6 flex flex-col items-center gap-3 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
              asChild
            >
              <a href={item.href}>
                <item.icon size={32} />
                <span className="font-medium text-center">{item.label}</span>
              </a>
            </ButtonUI>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickActions;