import { GraduationCap, Instagram, Facebook, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

const FooterMR = () => {
  const footerColumns = [
    {
      title: "Institucional",
      links: [
        { label: "Quem Somos", href: "/sobre" },
        { label: "Missão, Visão e Valores", href: "/sobre#mvv" },
        { label: "Política de Privacidade", href: "/privacidade" }
      ]
    },
    {
      title: "Acadêmico",
      links: [
        { label: "Segmentos", href: "/segmentos" },
        { label: "Proposta Pedagógica", href: "/sobre#proposta" },
        { label: "Calendário", href: "/calendario" }
      ]
    },
    {
      title: "Contato",
      links: [
        { label: "Fale Conosco", href: "/contato" },
        { label: "Telefone", href: "tel:+551100000000" },
        { label: "Email", href: "mailto:contato@colegiomarcosrichardson.com.br" }
      ]
    }
  ];

  const socialLinks = [
    { label: "Instagram", href: "https://instagram.com/colegiomarcosrichardson", icon: Instagram },
    { label: "Facebook", href: "https://facebook.com/colegiomarcosrichardson", icon: Facebook },
    { label: "YouTube", href: "https://youtube.com/@colegiomarcosrichardson", icon: Youtube }
  ];

  return (
    <footer className="bg-foreground text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo and Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="bg-primary text-primary-foreground p-2 rounded-lg">
                <GraduationCap size={24} />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg">Colégio</span>
                <span className="font-bold text-lg text-secondary -mt-1">Marcos Richardson</span>
              </div>
            </Link>
            <p className="text-white/80 leading-relaxed mb-6">
              Educação que inspira o futuro. Do Infantil ao Médio, uma jornada acadêmica com propósito, tecnologia e acolhimento.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Columns */}
          {footerColumns.map((column, index) => (
            <div key={index}>
              <h3 className="font-bold text-lg mb-4 text-secondary">{column.title}</h3>
              <ul className="space-y-3">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    {link.href.startsWith('http') || link.href.startsWith('tel:') || link.href.startsWith('mailto:') ? (
                      <a
                        href={link.href}
                        className="text-white/80 hover:text-white transition-colors"
                        target={link.href.startsWith('http') ? "_blank" : undefined}
                        rel={link.href.startsWith('http') ? "noopener noreferrer" : undefined}
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        to={link.href}
                        className="text-white/80 hover:text-white transition-colors"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-white/60">
            © 2025 Colégio Marcos Richardson. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterMR;