import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ButtonUI } from '@/components/ui/button-ui';
import { Menu, X, GraduationCap, Sun, Moon, Search } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains('dark');
    setIsDark(isDarkMode);
  }, []);

  const toggleTheme = () => {
    document.documentElement.classList.toggle('dark');
    setIsDark(!isDark);
  };

  const navigationItems = [
    { label: "Sobre", href: "/sobre" },
    { label: "Proposta", href: "/proposta" },
    { label: "Segmentos", href: "/segmentos" },
    { label: "Vida Escolar", href: "/vida-escolar" },
    { label: "Depoimentos", href: "/depoimentos" },
    { label: "Visitas", href: "/visitas" },
    { label: "Contato", href: "/contato" }
  ];

  const utilityItems = [
    { label: "Portal do Aluno", href: "/portal-aluno" },
    { label: "Agenda", href: "/calendario" }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-sm py-2' 
          : 'bg-white/90 backdrop-blur-md py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-3 group hover:scale-105 transition-all duration-300"
          >
            <div className="relative">
              <GraduationCap className="h-10 w-10 text-secondary group-hover:animate-pulse" />
              <div className="absolute inset-0 rounded-full bg-secondary/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <span className="text-2xl font-display font-semibold text-primary">
              Colégio Prototipo
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item, index) => (
              <Link
                key={item.label}
                to={item.href}
                className={`relative py-2 px-4 font-semibold text-primary hover:text-secondary transition-all duration-300 ${
                  location.pathname === item.href 
                    ? 'text-secondary after:w-full after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-secondary after:content-[""]' 
                    : 'after:w-0 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-secondary after:content-[""] after:transition-all after:duration-300 hover:after:w-full'
                }`}
                style={{ '--stagger': index } as React.CSSProperties}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Utility Actions - Clean Design */}
          <div className="hidden lg:flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl hover:bg-secondary/10 transition-all duration-300 hover:scale-110"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun className="h-5 w-5 text-secondary" />
              ) : (
                <Moon className="h-5 w-5 text-primary" />
              )}
            </button>
            
            <button className="p-2 rounded-xl hover:bg-secondary/10 transition-all duration-300 hover:scale-110">
              <Search className="h-5 w-5 text-primary" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden relative p-3 rounded-xl glass hover:bg-secondary/10 transition-all duration-300"
            aria-label="Toggle mobile menu"
          >
            <div className="relative w-6 h-6">
              <span 
                className={`absolute top-1 left-0 w-6 h-0.5 bg-current transition-all duration-300 ${
                  isMenuOpen ? 'rotate-45 top-3' : ''
                }`}
              />
              <span 
                className={`absolute top-3 left-0 w-6 h-0.5 bg-current transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0' : ''
                }`}
              />
              <span 
                className={`absolute top-5 left-0 w-6 h-0.5 bg-current transition-all duration-300 ${
                  isMenuOpen ? '-rotate-45 top-3' : ''
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`lg:hidden transition-all duration-500 overflow-hidden ${
            isMenuOpen 
              ? 'max-h-screen opacity-100' 
              : 'max-h-0 opacity-0'
          }`}
        >
          <div className="glass rounded-3xl m-4 p-6 border border-primary/10">
            <nav className="space-y-4">
              {navigationItems.map((item, index) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`block py-3 px-4 rounded-xl transition-all duration-300 hover:bg-secondary/10 hover:pl-6 ${
                    location.pathname === item.href 
                      ? 'bg-secondary/20 text-secondary font-semibold' 
                      : 'text-muted-foreground'
                  }`}
                  style={{ 
                    animationDelay: `${index * 0.1}s`,
                    animation: isMenuOpen ? 'slideUp 0.5s ease-out' : 'none'
                  }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              
              <div className="border-t border-primary/10 pt-4 mt-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-muted-foreground">Tema</span>
                  <button
                    onClick={toggleTheme}
                    className="p-2 rounded-lg hover:bg-secondary/10 transition-all duration-300"
                  >
                    {isDark ? (
                      <Sun className="h-5 w-5 text-secondary" />
                    ) : (
                      <Moon className="h-5 w-5 text-muted-foreground" />
                    )}
                  </button>
                </div>
                
                {utilityItems.map((item) => (
                  <Link
                    key={item.label}
                    to={item.href}
                    className="block w-full btn-premium text-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;