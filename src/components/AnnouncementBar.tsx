import { ButtonUI } from '@/components/ui/button-ui';
import { X } from 'lucide-react';
import { useState } from 'react';

const AnnouncementBar = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-primary text-primary-foreground py-3 px-4 relative">
      <div className="container mx-auto flex items-center justify-center text-center">
        <div className="flex items-center gap-3">
          <span className="text-sm md:text-base font-medium">
            Matrículas 2026 abertas • Garanta sua vaga!
          </span>
          <ButtonUI 
            size="sm" 
            variant="outline" 
            className="bg-white/10 border-white/20 hover:bg-white/20 text-white"
            asChild
          >
            <a href="/admissoes#inscricao">Inscreva-se</a>
          </ButtonUI>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="absolute right-4 p-1 hover:bg-white/10 rounded-full transition-colors"
          aria-label="Fechar anúncio"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
};

export default AnnouncementBar;