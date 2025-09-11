import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, GraduationCap } from 'lucide-react';
import { ButtonUI } from '@/components/ui/button-ui';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { name: 'Início', path: '/' },
    { name: 'Sobre a Escola', path: '/sobre' },
    { name: 'Proposta Pedagógica', path: '/proposta' },
    { name: 'Segmentos', path: '/segmentos' },
    { name: 'Vida Escolar', path: '/vida-escolar' },
    
    { name: 'Depoimentos', path: '/depoimentos' },
    { name: 'Contato', path: '/contato' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`nav-fixed bg-white/95 backdrop-blur-sm shadow-lg dark:bg-gray-900/95 dark:border-gray-700`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 min-h-[44px]">
            <GraduationCap className="h-8 w-8 text-primary dark:text-gray-100" />
            <span className="text-xl font-bold text-foreground dark:text-gray-100">protótipo site</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4 lg:gap-8">
            {navigationItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-link min-h-[44px] px-4 py-3 flex items-center text-foreground dark:text-gray-100 hover:text-primary dark:hover:text-gray-300 transition-colors focus:ring-2 focus:ring-primary focus:outline-none ${
                  location.pathname === item.path ? 'active text-primary dark:text-gray-100' : ''
                }`}
              >
                {item.name}
              </Link>
            ))}
            <ButtonUI className="btn-school min-h-[44px] px-4 py-3 dark:bg-primary dark:text-white dark:hover:bg-primary/90 focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-gray-900">
              Agendar Visita
            </ButtonUI>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <ButtonUI
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground dark:text-gray-100 min-h-[44px] min-w-[44px] flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800 focus:ring-2 focus:ring-primary focus:outline-none transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </ButtonUI>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 backdrop-blur-sm">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigationItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block px-4 py-3 text-base font-medium nav-link min-h-[44px] text-foreground dark:text-gray-100 hover:text-primary dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-all duration-200 focus:ring-2 focus:ring-primary focus:outline-none ${
                    location.pathname === item.path ? 'active text-primary dark:text-gray-100 bg-gray-100 dark:bg-gray-800' : ''
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-2 py-2">
                <ButtonUI className="btn-school w-full min-h-[44px] dark:bg-primary dark:text-white dark:hover:bg-primary/90 focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-gray-900">
                  Agendar Visita
                </ButtonUI>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;