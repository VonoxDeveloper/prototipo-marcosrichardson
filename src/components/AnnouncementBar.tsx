import { ButtonUI } from '@/components/ui/button-ui';
import { X } from 'lucide-react';
import { useState } from 'react';

const AnnouncementBar = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-primary dark:bg-gray-800 text-primary-foreground dark:text-gray-100 py-3 px-4 relative">
      <div className="container mx-auto flex items-center justify-center text-center">
        <div className="flex items-center gap-3">
          <span className="text-sm md:text-base font-medium">
            Matrículas 2026 abertas • Garanta sua vaga!
          </span>
          <ButtonUI 
            size="sm" 
            variant="outline" 
            className="bg-white/10 dark:bg-gray-700 border-white/20 dark:border-gray-600 hover:bg-white/20 dark:hover:bg-gray-600 text-white dark:text-gray-100 min-h-[44px] px-4 py-2 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary dark:focus:ring-offset-gray-800 transition-all duration-200"
            asChild
          >
            <a href="/admissoes#inscricao">Inscreva-se</a>
          </ButtonUI>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="absolute right-4 p-2 hover:bg-white/10 dark:hover:bg-gray-700 rounded-full transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary dark:focus:ring-offset-gray-800 focus:outline-none"
          aria-label="Fechar anúncio"
        >
          <X size={16} className="text-white dark:text-gray-100" />
        </button>
      </div>
    </div>
  );
};

export default AnnouncementBar;