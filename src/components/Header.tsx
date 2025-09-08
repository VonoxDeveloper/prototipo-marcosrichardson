import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ButtonUI } from '@/components/ui/button-ui';
import { Menu, X, GraduationCap } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { label: "Início", href: "/" },
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
    <header className="bg-white shadow-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="bg-primary text-primary-foreground p-2 rounded-lg">
              <GraduationCap size={24} />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg text-foreground">Colégio</span>
              <span className="font-bold text-lg text-primary -mt-1">Marcos Richardson</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Utilities */}
          <div className="hidden lg:flex items-center gap-3">
            {utilityItems.map((item) => (
              <ButtonUI key={item.href} variant="ghost" size="sm" asChild>
                <Link to={item.href}>{item.label}</Link>
              </ButtonUI>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 hover:bg-muted rounded-md transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-4">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="text-foreground hover:text-primary transition-colors font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="border-t border-border pt-4 mt-4">
                {utilityItems.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    className="block text-muted-foreground hover:text-primary transition-colors py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;