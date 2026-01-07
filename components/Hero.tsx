
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
        
        <h1 className="text-4xl md:text-[110px] font-black mb-10 leading-[0.85] tracking-tighter text-white">
          VOCÊ CRIA O CONTEÚDO. <br />
          NÓS CONSTRUÍMOS <span className="text-blue-500 italic">O LUCRO.</span>
        </h1>
        
        <p className="text-base md:text-2xl text-slate-400 max-w-4xl mx-auto mb-16 leading-relaxed font-medium">
          Chega de se perder em ferramentas, tags e suporte. Instalamos a <strong className="text-white">infraestrutura completa</strong> de uma operação de sete dígitos no seu negócio. Do tráfego à conversão, assumimos o operacional para você focar apenas em ser o Expert.
        </p>
        
        <div className="flex justify-center mb-24">
          <a 
            href="#ai-diagnostic" 
            className="w-full sm:w-auto px-16 py-8 bg-white text-slate-950 text-base md:text-lg font-black rounded-[32px] transition-all hover:bg-blue-600 hover:text-white uppercase tracking-widest shadow-[0_20px_50px_rgba(59,130,246,0.2)] hover:-translate-y-1 active:scale-[0.98] text-center"
          >
            Quero vender no automático!
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 pt-12 border-t border-white/5 opacity-50">
          <div className="flex flex-col items-center">
            <span className="text-3xl font-black text-white">ZERO</span>
            <span className="text-[9px] uppercase tracking-[0.3em] font-bold text-slate-500">Chaos</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-black text-white">100%</span>
            <span className="text-[9px] uppercase tracking-[0.3em] font-bold text-slate-500">Hands-Off Tech</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-black text-white">LTV+</span>
            <span className="text-[9px] uppercase tracking-[0.3em] font-bold text-slate-500">Systemic Scale</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-black text-white">PROFIT</span>
            <span className="text-[9px] uppercase tracking-[0.3em] font-bold text-slate-500">Performance First</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
