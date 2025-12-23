
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-[90vh] flex items-center justify-center pt-20 px-6 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px] animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[100px] animate-pulse delay-1000"></div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-bounce">
          <span className="flex h-2 w-2 rounded-full bg-green-500"></span>
          <span className="text-xs font-semibold tracking-wider uppercase text-green-400">Eficiência Operacional & Baixo Custo</span>
        </div>
        
        <h1 className="text-5xl md:text-8xl font-black mb-8 leading-[1.1] tracking-tight">
          Alta Performance com o <span className="gradient-text">Melhor Custo-Benefício.</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed">
          Nós construímos sua infraestrutura digital completa. E-mail marketing inteligente, recuperação de vendas agressiva e gestão de comunidades com o menor custo operacional do Brasil.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a href="#ai-diagnostic" className="w-full sm:w-auto px-10 py-5 bg-blue-600 hover:bg-blue-700 text-lg font-bold rounded-2xl shadow-xl shadow-blue-900/20 transition-all hover:-translate-y-1 text-center">
            Diagnóstico de Operação
          </a>
          <button className="w-full sm:w-auto px-10 py-5 glass text-lg font-bold rounded-2xl transition-all hover:bg-slate-800">
            Ver Planos de Escala
          </button>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-50 grayscale hover:grayscale-0 transition-all items-center">
          <div className="text-sm font-bold tracking-widest text-slate-400">EMAIL COST -70%</div>
          <div className="text-sm font-bold tracking-widest text-slate-400">CARREIRA +30% ROI</div>
          <div className="text-sm font-bold tracking-widest text-slate-400">AUTO RECOVERY</div>
          <div className="text-sm font-bold tracking-widest text-slate-400">COMMUNITY OPS</div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
