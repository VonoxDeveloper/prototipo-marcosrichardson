'use client'
import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { Home, BookOpen, Users, Calendar, Newspaper, MessageSquare, Phone, GraduationCap, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

// --- HoverGradientNavBar Component ---

interface HoverGradientMenuItem {
  icon: React.ReactNode;
  label: string;
  href: string;
  gradient: string;
  iconColor: string;
}

const menuItems: HoverGradientMenuItem[] = [
  { icon: <Home className="h-5 w-5" />, label: "Início", href: "/", gradient: "radial-gradient(circle, rgba(59,130,246,0.15) 0%, rgba(37,99,235,0.06) 50%, rgba(29,78,216,0) 100%)", iconColor: "group-hover:text-blue-500 dark:group-hover:text-blue-400" },
  { icon: <BookOpen className="h-5 w-5" />, label: "Sobre", href: "/sobre", gradient: "radial-gradient(circle, rgba(34,197,94,0.15) 0%, rgba(22,163,74,0.06) 50%, rgba(21,128,61,0) 100%)", iconColor: "group-hover:text-green-500 dark:group-hover:text-green-400" },
  { icon: <Users className="h-5 w-5" />, label: "Proposta", href: "/proposta", gradient: "radial-gradient(circle, rgba(147,51,234,0.15) 0%, rgba(126,34,206,0.06) 50%, rgba(88,28,135,0) 100%)", iconColor: "group-hover:text-purple-500 dark:group-hover:text-purple-400" },
  { icon: <GraduationCap className="h-5 w-5" />, label: "Segmentos", href: "/segmentos", gradient: "radial-gradient(circle, rgba(249,115,22,0.15) 0%, rgba(234,88,12,0.06) 50%, rgba(194,65,12,0) 100%)", iconColor: "group-hover:text-orange-500 dark:group-hover:text-orange-400" },
  { icon: <Calendar className="h-5 w-5" />, label: "Vida Escolar", href: "/vida-escolar", gradient: "radial-gradient(circle, rgba(20,184,166,0.15) 0%, rgba(13,148,136,0.06) 50%, rgba(15,118,110,0) 100%)", iconColor: "group-hover:text-teal-500 dark:group-hover:text-teal-400" },
  { icon: <Newspaper className="h-5 w-5" />, label: "Notícias", href: "/noticias", gradient: "radial-gradient(circle, rgba(239,68,68,0.15) 0%, rgba(220,38,38,0.06) 50%, rgba(185,28,28,0) 100%)", iconColor: "group-hover:text-red-500 dark:group-hover:text-red-400" },
  { icon: <MessageSquare className="h-5 w-5" />, label: "Depoimentos", href: "/depoimentos", gradient: "radial-gradient(circle, rgba(161,98,7,0.15) 0%, rgba(133,77,14,0.06) 50%, rgba(100,62,8,0) 100%)", iconColor: "group-hover:text-amber-600 dark:group-hover:text-amber-400" },
  { icon: <Phone className="h-5 w-5" />, label: "Contato", href: "/contato", gradient: "radial-gradient(circle, rgba(168,85,247,0.15) 0%, rgba(147,51,234,0.06) 50%, rgba(124,58,237,0) 100%)", iconColor: "group-hover:text-violet-500 dark:group-hover:text-violet-400" },
];

// Animation variants for mobile menu items
const itemVariants: Variants = {
  initial: { rotateX: 0, opacity: 1 },
  hover: { rotateX: -90, opacity: 0 },
};

const backVariants: Variants = {
  initial: { rotateX: 90, opacity: 0 },
  hover: { rotateX: 0, opacity: 1 },
};

const glowVariants: Variants = {
  initial: { opacity: 0, scale: 0.8 },
  hover: {
    opacity: 1,
    scale: 2,
    transition: {
      opacity: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
      scale: { duration: 0.5, type: "spring", stiffness: 300, damping: 25 },
    },
  },
};

const sharedTransition = {
  type: "spring" as const,
  stiffness: 100,
  damping: 20,
  duration: 0.5,
};

function HoverGradientNavBar(): React.JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="fixed top-0 left-0 w-full z-50">
      <nav className="w-full mx-auto px-4 h-16 bg-white/95 dark:bg-black/80 backdrop-blur-lg border-b border-gray-200/80 dark:border-gray-800/80 shadow-lg">
        <div className="container mx-auto flex items-center justify-between h-full">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <GraduationCap className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold">protótipo site</span>
          </Link>

          {/* Desktop Navigation - With hover animations */}
          <div className="hidden md:flex items-center space-x-2">
            {menuItems.map((item) => (
              <motion.div key={item.label} className="relative">
                <motion.div
                  className="block rounded-xl overflow-visible group relative"
                  style={{ perspective: "600px" }}
                  whileHover="hover"
                  initial="initial"
                >
                  {/* Per-item glow for desktop */}
                  <motion.div
                    className="absolute inset-0 z-0 pointer-events-none rounded-xl"
                    variants={glowVariants}
                    style={{
                      background: item.gradient,
                      opacity: 0,
                    }}
                  />
                  {/* Front-facing */}
                  <motion.div
                    variants={itemVariants}
                    transition={sharedTransition}
                    style={{
                      transformStyle: "preserve-3d",
                      transformOrigin: "center bottom"
                    }}
                  >
                    <Link
                      to={item.href}
                      className={`flex items-center space-x-2 px-3 py-2 rounded-xl text-sm font-medium transition-colors duration-200 relative z-10 ${
                        location.pathname === item.href
                          ? 'text-primary bg-primary/10'
                          : 'text-gray-600 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white'
                      }`}
                    >
                      <span className={`transition-colors duration-300 ${item.iconColor}`}>
                        {item.icon}
                      </span>
                      <span>{item.label}</span>
                    </Link>
                  </motion.div>
                  {/* Back-facing */}
                  <motion.div
                    className="absolute inset-0 z-10"
                    variants={backVariants}
                    transition={sharedTransition}
                    style={{
                      transformStyle: "preserve-3d",
                      transformOrigin: "center top",
                      transform: "rotateX(90deg)"
                    }}
                  >
                    <Link
                      to={item.href}
                      className={`flex items-center space-x-2 px-3 py-2 rounded-xl text-sm font-medium transition-colors duration-200 ${
                        location.pathname === item.href
                          ? 'text-primary bg-primary/10'
                          : 'text-gray-600 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white'
                      }`}
                    >
                      <span className={`transition-colors duration-300 ${item.iconColor}`}>
                        {item.icon}
                      </span>
                      <span>{item.label}</span>
                    </Link>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Fullscreen Overlay */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="fixed inset-0 top-16 z-40 md:hidden bg-white/95 dark:bg-black/95 backdrop-blur-xl"
          >
            <div className="h-full overflow-y-auto">
              <div className="container mx-auto px-4 py-8">
                <div className="space-y-6">
                  {menuItems.map((item: HoverGradientMenuItem, index) => (
                    <motion.div 
                      key={item.label} 
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ 
                        duration: 0.3, 
                        delay: index * 0.1,
                        ease: [0.4, 0, 0.2, 1]
                      }}
                      className="relative"
                    >
                      <motion.div
                        className="block rounded-2xl overflow-visible group relative"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ type: "spring", stiffness: 400, damping: 25 }}
                      >
                        {/* Gradient background on hover */}
                        <motion.div
                          className="absolute inset-0 z-0 pointer-events-none rounded-2xl"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileHover={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3 }}
                          style={{ background: item.gradient }}
                        />
                        
                        <Link
                          to={item.href}
                          onClick={() => setIsOpen(false)}
                          className={`flex items-center space-x-4 px-6 py-4 rounded-2xl relative z-10 transition-all duration-300 text-lg font-medium ${
                            location.pathname === item.href
                              ? 'text-primary bg-primary/10 shadow-lg'
                              : 'text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800/50'
                          }`}
                        >
                          <motion.span 
                            className={`transition-colors duration-300 ${item.iconColor}`}
                            whileHover={{ rotate: [0, -10, 10, 0] }}
                            transition={{ duration: 0.5 }}
                          >
                            {item.icon}
                          </motion.span>
                          <span>{item.label}</span>
                          
                          {/* Arrow indicator for active item */}
                          {location.pathname === item.href && (
                            <motion.div
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              className="ml-auto"
                            >
                              <div className="w-2 h-2 rounded-full bg-primary"></div>
                            </motion.div>
                          )}
                        </Link>
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
                
                {/* Contact CTA at bottom */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.5 }}
                  className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700"
                >
                  <Link
                    to="/contato"
                    onClick={() => setIsOpen(false)}
                    className="block w-full text-center bg-primary text-primary-foreground px-6 py-4 rounded-2xl font-semibold text-lg hover:bg-primary/90 transition-colors duration-300 shadow-lg"
                  >
                    Agendar Visita
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </nav>
    </div>
  );
}

export default HoverGradientNavBar;