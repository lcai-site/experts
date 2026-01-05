
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 flex justify-center py-6 px-4`}>
      <div className={`flex justify-between items-center w-full max-w-7xl px-8 py-4 transition-all duration-500 ${scrolled ? 'glass rounded-3xl shadow-2xl' : 'bg-transparent'}`}>
        <a href="/" className="flex items-center">
          <img 
            src="https://midias.lcai.com.br/images/2025/12/20/Sem-titulo-2-1.png" 
            alt="LCAI Logo" 
            className={`transition-all duration-500 ${scrolled ? 'h-10 md:h-12' : 'h-16 md:h-20'}`}
          />
        </a>
        
        <div className="hidden md:flex items-center gap-10 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">
          <a href="#operacao" className="hover:text-white transition-colors">Operação</a>
          <a href="#experts" className="hover:text-white transition-colors">Expert Showcase</a>
          <a href="#ai-diagnostic" className="hover:text-white transition-colors">Diagnóstico</a>
          <a 
            href="https://wa.me/5519999611441" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white text-slate-950 px-8 py-3.5 rounded-2xl transition-all hover:bg-blue-600 hover:text-white text-xs font-black shadow-lg shadow-white/5 active:scale-95"
          >
            Falar com Estrategista
          </a>
        </div>
        
        {/* Mobile Menu Icon (Placeholder for functionality) */}
        <div className="md:hidden">
          <div className="p-2 glass rounded-xl">
             <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
