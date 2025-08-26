import { Link } from 'react-router-dom';
import { GraduationCap, MapPin, Phone, Mail, Facebook, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer-school">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e Informações */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <GraduationCap className="h-8 w-8 text-white" />
              <span className="text-xl font-bold text-white">protótipo site</span>
            </div>
            <p className="text-secondary-foreground/80">
              Formando cidadãos conscientes e preparados para o futuro.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-white hover:text-accent cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-white hover:text-accent cursor-pointer transition-colors" />
              <Youtube className="h-5 w-5 text-white hover:text-accent cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/sobre" className="text-secondary-foreground/80 hover:text-white transition-colors">
                  Sobre a Escola
                </Link>
              </li>
              <li>
                <Link to="/proposta" className="text-secondary-foreground/80 hover:text-white transition-colors">
                  Proposta Pedagógica
                </Link>
              </li>
              <li>
                <Link to="/segmentos" className="text-secondary-foreground/80 hover:text-white transition-colors">
                  Segmentos de Ensino
                </Link>
              </li>
              <li>
                <Link to="/vida-escolar" className="text-secondary-foreground/80 hover:text-white transition-colors">
                  Vida Escolar
                </Link>
              </li>
            </ul>
          </div>

          {/* Serviços */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Serviços</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/visitas" className="text-secondary-foreground/80 hover:text-white transition-colors">
                  Agendar Visita
                </Link>
              </li>
              <li>
                <a href="#" className="text-secondary-foreground/80 hover:text-white transition-colors">
                  Área do Aluno
                </a>
              </li>
              <li>
                <a href="#" className="text-secondary-foreground/80 hover:text-white transition-colors">
                  Trabalhe Conosco
                </a>
              </li>
              <li>
                <a href="#" className="text-secondary-foreground/80 hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-white" />
                <span className="text-secondary-foreground/80 text-sm">
                  Rua da Educação, 123 - Centro
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-white" />
                <span className="text-secondary-foreground/80 text-sm">
                  (11) 1234-5678
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-white" />
                <span className="text-secondary-foreground/80 text-sm">
                  contato@escolaexemplo.com.br
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/20 text-center">
          <p className="text-secondary-foreground/80 text-sm">
            © 2024 protótipo site. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;