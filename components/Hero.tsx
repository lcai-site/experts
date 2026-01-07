
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-20 px-6 overflow-hidden">
      <div className="glow-soft -top-40 -left-40"></div>
      <div className="glow-soft bottom-0 right-0 animate-pulse"></div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass border border-white/10 mb-10 animate-fadeIn">
          <span className="flex h-2 w-2 rounded-full bg-blue-500"></span>
          <span className="text-[10px] font-black tracking-[0.3em] uppercase text-blue-400">Exclusivo para Experts & Mentores</span>
        </div>
        
        <h1 className="text-5xl md:text-[115px] font-black mb-10 leading-[0.9] tracking-tighter text-white">
          Pare de ser o <br />
          <span className="text-blue-500 italic">motor da sua venda.</span>
        </h1>
        
        <p className="text-lg md:text-2xl text-slate-400 max-w-4xl mx-auto mb-16 leading-relaxed font-medium">
          Você tem o conhecimento, nós temos a engenharia. Construímos sua <strong className="text-white">Máquina Automática de Lucro</strong> que escala do Low ao High Ticket 24/7. Chega de picos de estresse e dependência técnica.
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
            <span className="text-[9px] uppercase tracking-[0.3em] font-bold text-slate-500">Launch Stress</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-black text-white">100%</span>
            <span className="text-[9px] uppercase tracking-[0.3em] font-bold text-slate-500">Automatic Tech</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-black text-white">LTV+</span>
            <span className="text-[9px] uppercase tracking-[0.3em] font-bold text-slate-500">Infinite Journey</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-black text-white">ROI+</span>
            <span className="text-[9px] uppercase tracking-[0.3em] font-bold text-slate-500">Scaled Profits</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
