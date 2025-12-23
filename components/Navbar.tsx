
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
        <a href="/" className="flex items-center">
          <img 
            src="https://midias.lcai.com.br/images/2025/12/20/Sem-titulo-2-1.png" 
            alt="LCAI Logo" 
            className="h-16 md:h-20 w-auto object-contain transition-all"
          />
        </a>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-300">
          <a href="#operacao" className="hover:text-blue-400 transition-colors uppercase tracking-wider text-[11px]">Operação</a>
          <a href="#experts" className="hover:text-blue-400 transition-colors uppercase tracking-wider text-[11px]">Expert Showcase</a>
          <a href="#ai-diagnostic" className="hover:text-blue-400 transition-colors uppercase tracking-wider text-[11px]">Análise</a>
          <a 
            href="https://wa.me/5519999611441" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white px-7 py-3 rounded-xl transition-all transform hover:scale-105 inline-block text-center font-bold"
          >
            Falar com um Estrategista
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
