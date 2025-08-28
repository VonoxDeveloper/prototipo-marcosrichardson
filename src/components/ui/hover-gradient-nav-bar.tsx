'use client'
import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Home, BookOpen, Users, Calendar, Newspaper, MessageSquare, Phone, GraduationCap } from 'lucide-react';

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

// Animation variants
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
  return (
    <div className="fixed top-0 left-0 w-full z-50">
      <motion.nav
        className="w-full mx-auto px-4 py-3 
        bg-white/95 dark:bg-black/80 backdrop-blur-lg 
        border-b border-gray-200/80 dark:border-gray-800/80 
        shadow-lg relative"
        initial="initial"
        whileHover="hover"
      >
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <GraduationCap className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold">protótipo site</span>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center justify-center gap-1 relative z-10">
            {menuItems.map((item: HoverGradientMenuItem) => (
              <motion.li key={item.label} className="relative">
                <motion.div
                  className="block rounded-2xl overflow-visible group relative"
                  style={{ perspective: "600px" }}
                  whileHover="hover"
                  initial="initial"
                >
                  {/* Per-item glow */}
                  <motion.div
                    className="absolute inset-0 z-0 pointer-events-none rounded-2xl"
                    variants={glowVariants}
                    style={{
                      background: item.gradient,
                      opacity: 0,
                    }}
                  />
                  {/* Front-facing */}
                  <motion.a
                    href={item.href}
                    className="flex items-center justify-center gap-2 
                    px-4 py-2 relative z-10 
                    bg-transparent text-gray-600 dark:text-gray-300 
                    group-hover:text-gray-900 dark:group-hover:text-white 
                    transition-colors rounded-2xl text-sm"
                    variants={itemVariants}
                    transition={sharedTransition}
                    style={{
                      transformStyle: "preserve-3d",
                      transformOrigin: "center bottom"
                    }}
                  >
                    <span className={`transition-colors duration-300 ${item.iconColor}`}>
                      {item.icon}
                    </span>
                    <span className="font-medium">{item.label}</span>
                  </motion.a>
                  {/* Back-facing */}
                  <motion.a
                    href={item.href}
                    className="flex items-center justify-center gap-2 
                    px-4 py-2 absolute inset-0 z-10 
                    bg-transparent text-gray-600 dark:text-gray-300 
                    group-hover:text-gray-900 dark:group-hover:text-white 
                    transition-colors rounded-2xl text-sm"
                    variants={backVariants}
                    transition={sharedTransition}
                    style={{
                      transformStyle: "preserve-3d",
                      transformOrigin: "center top",
                      transform: "rotateX(90deg)"
                    }}
                  >
                    <span className={`transition-colors duration-300 ${item.iconColor}`}>
                      {item.icon}
                    </span>
                    <span className="font-medium">{item.label}</span>
                  </motion.a>
                </motion.div>
              </motion.li>
            ))}
          </ul>

          {/* Mobile menu - simplified for now */}
          <div className="md:hidden">
            <button className="text-gray-600 dark:text-gray-300">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </motion.nav>
    </div>
  );
}

export default HoverGradientNavBar;