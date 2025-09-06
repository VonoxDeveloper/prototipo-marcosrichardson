import React, { useState, useEffect, useRef } from 'react';
import { GraduationCap, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface MenuItem {
  label: string;
  href: string;
}

const menuItems: MenuItem[] = [
  { label: "Início", href: "/" },
  { label: "Sobre", href: "/sobre" },
  { label: "Proposta", href: "/proposta" },
  { label: "Segmentos", href: "/segmentos" },
  { label: "Vida Escolar", href: "/vida-escolar" },
  { label: "Depoimentos", href: "/depoimentos" },
  { label: "Contato", href: "/contato" },
];

function HoverGradientNavBar(): React.JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  // Handle escape key and focus management
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        closeMenu();
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen && menuRef.current && !menuRef.current.contains(event.target as Node)) {
        closeMenu();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden';
      
      // Focus first link when menu opens
      setTimeout(() => {
        firstLinkRef.current?.focus();
      }, 100);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Focus trap for mobile menu
  useEffect(() => {
    if (!isOpen) return;

    const focusableElements = menuRef.current?.querySelectorAll(
      'a[href], button, [tabindex]:not([tabindex="-1"])'
    );
    
    if (!focusableElements || focusableElements.length === 0) return;

    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

    const handleTabKey = (event: KeyboardEvent) => {
      if (event.key !== 'Tab') return;

      if (event.shiftKey) {
        if (document.activeElement === firstElement) {
          event.preventDefault();
          lastElement.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          event.preventDefault();
          firstElement.focus();
        }
      }
    };

    document.addEventListener('keydown', handleTabKey);
    return () => document.removeEventListener('keydown', handleTabKey);
  }, [isOpen]);

  const openMenu = () => {
    setIsOpen(true);
  };

  const closeMenu = () => {
    setIsOpen(false);
    buttonRef.current?.focus();
  };

  return (
    <header className="header-nav">
      <nav className="nav-container" role="navigation" aria-label="Menu principal">
        <div className="nav-content">
          {/* Logo */}
          <Link to="/" className="nav-logo">
            <GraduationCap className="logo-icon" aria-hidden="true" />
            <span className="logo-text">protótipo site</span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="nav-menu-desktop" role="menubar">
            {menuItems.map((item) => (
              <li key={item.href} role="none">
                <Link
                  to={item.href}
                  className={`nav-link ${location.pathname === item.href ? 'nav-link-active' : ''}`}
                  role="menuitem"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile menu button */}
          <button
            ref={buttonRef}
            onClick={openMenu}
            className="nav-menu-button"
            aria-controls="mobile-menu"
            aria-expanded={isOpen}
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          >
            <span className="sr-only">{isOpen ? "Fechar menu" : "Abrir menu"}</span>
            {isOpen ? <X className="menu-icon" aria-hidden="true" /> : <Menu className="menu-icon" aria-hidden="true" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div 
            ref={menuRef}
            id="mobile-menu"
            className="nav-menu-mobile"
            role="menu"
            aria-labelledby="nav-menu-button"
          >
            <div className="nav-menu-backdrop" onClick={closeMenu} aria-hidden="true" />
            
            <div className="nav-menu-content">
              <ul className="nav-menu-list" role="none">
                {menuItems.map((item, index) => (
                  <li key={item.href} role="none">
                    <Link
                      ref={index === 0 ? firstLinkRef : undefined}
                      to={item.href}
                      onClick={closeMenu}
                      className={`nav-menu-item ${location.pathname === item.href ? 'nav-menu-item-active' : ''}`}
                      role="menuitem"
                    >
                      {item.label}
                      {location.pathname === item.href && (
                        <span className="nav-active-indicator" aria-hidden="true" />
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
              
              <div className="nav-menu-cta">
                <Link
                  to="/contato"
                  onClick={closeMenu}
                  className="nav-cta-button"
                  role="menuitem"
                >
                  Agendar Visita
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

export default HoverGradientNavBar;