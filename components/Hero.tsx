
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-20 px-6 overflow-hidden">
      {/* Background Orbs */}
      <div className="glow-blob -top-20 -left-20 opacity-60"></div>
      <div className="glow-blob bottom-0 right-0 opacity-40 animate-pulse"></div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 mb-8 animate-fadeIn">
          <span className="flex h-2 w-2 rounded-full bg-blue-500 shadow-[0_0_10px_#3b82f6]"></span>
          <span className="text-[10px] font-black tracking-[0.2em] uppercase text-blue-400">Infraestrutura de Perpétuo High-End</span>
        </div>
        
        <h1 className="text-5xl md:text-[110px] font-black mb-8 leading-[0.95] tracking-tighter text-white">
          Sua Máquina de <br />
          <span className="text-blue-500 italic">Vendas Automática.</span>
        </h1>
        
        <p className="text-lg md:text-2xl text-slate-400 max-w-4xl mx-auto mb-12 leading-relaxed font-medium">
          Esqueça o estresse dos lançamentos. Construímos <strong className="text-white">sistemas de vendas 24/7</strong> que escalam seus produtos de Low a High Ticket com lucro previsível e automação total.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-24">
          <a 
            href="#ai-diagnostic" 
            className="w-full sm:w-auto px-10 py-5 bg-white text-slate-950 text-sm font-black rounded-2xl transition-all hover:bg-blue-600 hover:text-white uppercase tracking-widest shadow-xl shadow-white/5"
          >
            Escalar meu Perpétuo
          </a>
          <a 
            href="https://wa.me/5519999611441" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-10 py-5 glass text-sm font-black rounded-2xl transition-all hover:bg-white/5 border border-white/10 uppercase tracking-widest text-white"
          >
            Falar com Estrategista
          </a>
        </div>

        {/* Dynamic Social Proof Line */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-40">
          <div className="flex flex-col items-center gap-1">
            <span className="text-2xl font-black text-white">24/7</span>
            <span className="text-[9px] uppercase tracking-widest font-bold">Vendas Rodando</span>
          </div>
          <div className="h-10 w-px bg-white/10 hidden md:block"></div>
          <div className="flex flex-col items-center gap-1">
            <span className="text-2xl font-black text-white">AUTO</span>
            <span className="text-[9px] uppercase tracking-widest font-bold">Recuperação IA</span>
          </div>
          <div className="h-10 w-px bg-white/10 hidden md:block"></div>
          <div className="flex flex-col items-center gap-1">
            <span className="text-2xl font-black text-white">LTV</span>
            <span className="text-[9px] uppercase tracking-widest font-bold">Esteira Infinita</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
