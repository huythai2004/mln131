import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { menuItems } from '../data/index';

export default function Navbar({ activeSection, scrolled }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        scrolled
          ? 'bg-cn-dark/95 backdrop-blur-md shadow-lg py-2 border-cn-teal/25'
          : 'bg-transparent py-4 border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-2 text-cn-gold hover:text-white transition-colors">
          <span className="relative flex items-center justify-center w-7 h-7">
            <span className="text-xl leading-none">★</span>
            <span className="absolute -bottom-0.5 -right-0.5 w-2 h-2 rounded-full bg-cn-teal-light shadow-[0_0_6px_rgba(45,212,199,0.8)]" />
          </span>
          <span className={`font-serif text-sm md:text-base transition-all ${scrolled ? 'opacity-100' : 'opacity-0 md:opacity-100'}`}>
            CNXHKH<span className="text-cn-teal-light">.</span>tech
          </span>
        </a>

        <div className="hidden md:flex items-center gap-1">
          {menuItems.map((item, i) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`relative px-3 py-1.5 rounded text-xs font-medium transition-all duration-200 hover:bg-white/10 flex items-center gap-1.5 ${
                activeSection === item.id
                  ? 'text-cn-gold bg-white/10'
                  : 'text-cn-cream/70 hover:text-cn-cream'
              }`}
            >
              <span className="tech-mono text-[10px] text-cn-teal-light/70">{String(i + 1).padStart(2, '0')}</span>
              {item.label}
              {activeSection === item.id && (
                <span className="absolute left-2 right-2 -bottom-0.5 h-0.5 rounded-full bg-cn-teal-light" />
              )}
            </a>
          ))}
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-cn-cream p-2"
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {menuOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-cn-dark/98 backdrop-blur-md overflow-hidden"
          >
            <div className="px-4 py-3 flex flex-col gap-1">
              {menuItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setMenuOpen(false)}
                  className={`px-3 py-2 rounded text-sm font-medium transition-colors ${
                    activeSection === item.id
                      ? 'text-cn-gold bg-white/10'
                      : 'text-cn-cream/70 hover:text-cn-cream'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
