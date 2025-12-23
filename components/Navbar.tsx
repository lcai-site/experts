
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center font-bold text-xl">
            L
          </div>
          <span className="text-2xl font-bold tracking-tighter">LCAI</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <a href="#operacao" className="hover:text-blue-400 transition-colors">Operação</a>
          <a href="#experts" className="hover:text-blue-400 transition-colors">Expert Showcase</a>
          <a href="#ai-diagnostic" className="hover:text-blue-400 transition-colors">Diagnóstico IA</a>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full transition-all transform hover:scale-105">
            Falar com um Estrategista
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
