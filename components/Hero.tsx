
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-20 px-6 overflow-hidden">
      <div className="glow-soft -top-40 -left-40"></div>
      <div className="glow-soft bottom-0 right-0 animate-pulse"></div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass border border-white/10 mb-10 animate-fadeIn">
          <span className="flex h-2 w-2 rounded-full bg-blue-500"></span>
          <span className="text-[10px] font-black tracking-[0.3em] uppercase text-blue-400">Engenharia Operacional para Experts</span>
        </div>
        
        <h1 className="text-5xl md:text-[115px] font-black mb-10 leading-[0.9] tracking-tighter text-white">
          SUA EXPERTISE MERECE <br />
          UMA <span className="text-blue-500 italic">OPERAÇÃO DE ELITE.</span>
        </h1>
        
        <p className="text-lg md:text-2xl text-slate-400 max-w-4xl mx-auto mb-16 leading-relaxed font-medium">
          Foque em ensinar, nós cuidamos da escala. Assumimos toda a <strong className="text-white">engenharia operacional, tráfego e copy</strong> para construir sua Máquina de Vendas Perpétua. Escala previsível e lucro diário, sem o caos dos lançamentos.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-24">
          <a 
            href="#ai-diagnostic" 
            className="w-full sm:w-auto px-12 py-6 bg-white text-slate-950 text-sm font-black rounded-2xl transition-all hover:bg-blue-600 hover:text-white uppercase tracking-widest shadow-2xl shadow-blue-500/10 hover:-translate-y-1"
          >
            Auditoria de Escalabilidade
          </a>
          <a 
            href="https://wa.me/5519999611441" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="w-full sm:w-auto px-12 py-6 glass text-sm font-black rounded-2xl transition-all hover:bg-white/5 border border-white/10 uppercase tracking-widest text-white backdrop-blur-3xl"
          >
            Ver Demonstração do Sistema
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 pt-12 border-t border-white/5 opacity-50">
          <div className="flex flex-col items-center">
            <span className="text-3xl font-black text-white">ZERO</span>
            <span className="text-[9px] uppercase tracking-[0.3em] font-bold text-slate-500">Complexity</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-black text-white">100%</span>
            <span className="text-[9px] uppercase tracking-[0.3em] font-bold text-slate-500">Hands-Off Tech</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-black text-white">LTV+</span>
            <span className="text-[9px] uppercase tracking-[0.3em] font-bold text-slate-500">Scale Strategy</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-black text-white">DAILY</span>
            <span className="text-[9px] uppercase tracking-[0.3em] font-bold text-slate-500">Profit Model</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
