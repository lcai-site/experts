
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 px-6 overflow-hidden">
      {/* Decorative Blur Elements */}
      <div className="mesh-glow -top-48 -left-48 opacity-40"></div>
      <div className="mesh-glow top-1/2 -right-48 opacity-30 animate-pulse"></div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-bright mb-10 border border-white/10 animate-fadeIn">
          <span className="flex h-2.5 w-2.5 rounded-full bg-blue-500 shadow-[0_0_12px_rgba(59,130,246,1)]"></span>
          <span className="text-[11px] font-black tracking-[0.3em] uppercase text-blue-400">Sistema Proprietário de Escala</span>
        </div>
        
        <h1 className="text-6xl md:text-[140px] font-black mb-10 leading-[0.9] tracking-tighter text-white drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          Expertise em <br /> <span className="gradient-text">Império.</span>
        </h1>
        
        <p className="text-lg md:text-2xl text-slate-400 max-w-4xl mx-auto mb-16 leading-relaxed font-medium">
          Assumimos 100% da infraestrutura técnica e estratégica. <br className="hidden md:block" />
          Focamos em <strong className="text-white">ROI real</strong>, copy de elite e engenharia de processos que trituram os custos operacionais do seu lançamento.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-24">
          <a 
            href="#ai-diagnostic" 
            className="w-full sm:w-auto px-12 py-6 bg-white text-slate-950 text-sm font-black rounded-2xl transition-all hover:bg-blue-600 hover:text-white uppercase tracking-widest shadow-[0_20px_40px_-10px_rgba(255,255,255,0.2)] hover:shadow-blue-500/40 hover:-translate-y-1"
          >
            Preencher Diagnóstico
          </a>
          <a 
            href="https://wa.me/5519999611441" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-12 py-6 glass-bright text-sm font-black rounded-2xl transition-all hover:bg-white/10 border border-white/20 uppercase tracking-widest text-white backdrop-blur-3xl"
          >
            Falar com Estrategista
          </a>
        </div>

        {/* Proof Ribbon */}
        <div className="mt-8 border-t border-white/5 pt-12">
          <p className="text-[10px] text-slate-500 font-black uppercase tracking-[0.4em] mb-10">Pilares da Operação LCAI</p>
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-8 opacity-60">
            <div className="flex items-center gap-3 grayscale hover:grayscale-0 transition-all cursor-default group">
              <span className="text-2xl group-hover:scale-125 transition-transform">⚡</span>
              <span className="text-[11px] font-bold text-slate-300 uppercase tracking-widest">Infra Web Pro</span>
            </div>
            <div className="flex items-center gap-3 grayscale hover:grayscale-0 transition-all cursor-default group">
              <span className="text-2xl group-hover:scale-125 transition-transform">💎</span>
              <span className="text-[11px] font-bold text-slate-300 uppercase tracking-widest">Esteira de LTV</span>
            </div>
            <div className="flex items-center gap-3 grayscale hover:grayscale-0 transition-all cursor-default group">
              <span className="text-2xl group-hover:scale-125 transition-transform">✍️</span>
              <span className="text-[11px] font-bold text-slate-300 uppercase tracking-widest">Copywriting Elite</span>
            </div>
            <div className="flex items-center gap-3 grayscale hover:grayscale-0 transition-all cursor-default group">
              <span className="text-2xl group-hover:scale-125 transition-transform">📊</span>
              <span className="text-[11px] font-bold text-slate-300 uppercase tracking-widest">Data Decisions</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
