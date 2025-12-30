
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-[85vh] md:min-h-[95vh] flex items-center justify-center pt-20 md:pt-24 px-6 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 md:w-96 md:h-96 bg-blue-500/10 rounded-full blur-[100px] md:blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 md:w-96 md:h-96 bg-purple-500/10 rounded-full blur-[100px] md:blur-[120px] animate-pulse delay-1000"></div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6 md:mb-10 animate-fadeIn">
          <span className="flex h-2 w-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]"></span>
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-blue-400">Operação Digital High-End</span>
        </div>
        
        <h1 className="text-5xl md:text-9xl font-black mb-6 md:mb-8 leading-[1.1] md:leading-[0.95] tracking-tight text-white drop-shadow-2xl">
          Sua Expertise.<br />Nosso <span className="gradient-text">Império.</span>
        </h1>
        
        <p className="text-base md:text-xl text-slate-400 max-w-3xl mx-auto mb-10 md:mb-14 leading-relaxed font-medium">
          Otimizamos 100% da sua operação: do desenvolvimento da <strong className="text-slate-200">esteira de produtos</strong> e <strong className="text-slate-200">copywriting</strong> de elite até a gestão estratégica com foco em <strong className="text-slate-200">redução de custos</strong> e dados.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 animate-fadeIn" style={{ animationDelay: '0.2s' }}>
          <a href="#ai-diagnostic" className="w-full sm:w-auto px-10 md:px-12 py-4 md:py-5 glass text-xs md:text-sm font-bold rounded-2xl transition-all hover:bg-white hover:text-black uppercase tracking-widest text-white">
            Preencher Diagnóstico
          </a>
          <a 
            href="https://wa.me/5519999611441" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-10 md:px-12 py-4 md:py-5 bg-blue-600 hover:bg-blue-500 text-xs md:text-sm font-bold rounded-2xl shadow-2xl shadow-blue-500/20 transition-all hover:-translate-y-1 uppercase tracking-widest text-white"
          >
            Falar com Estrategista
          </a>
        </div>

        <div className="mt-16 md:mt-28 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 opacity-40 grayscale hover:grayscale-0 transition-all items-center">
          <div className="text-[9px] md:text-[10px] font-black tracking-[0.3em] text-slate-400 uppercase">Copywriting Elite</div>
          <div className="text-[9px] md:text-[10px] font-black tracking-[0.3em] text-slate-400 uppercase">Esteira de LTV</div>
          <div className="text-[9px] md:text-[10px] font-black tracking-[0.3em] text-slate-400 uppercase">Low & High Ticket</div>
          <div className="text-[9px] md:text-[10px] font-black tracking-[0.3em] text-slate-400 uppercase">Inteligência de Dados</div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
