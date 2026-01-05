
import React from 'react';

const coreServices = [
  {
    title: "Engenharia de Perpétuo",
    tag: "Automated Sales",
    description: "Criamos a infraestrutura técnica para que seu produto venda todos os dias, sem depender da sua presença ou de picos de lançamentos.",
    icon: "⚙️",
    className: "md:col-span-8 lg:col-span-8"
  },
  {
    title: "Copy 24/7",
    tag: "Persuasão",
    description: "Textos e VSLs construídos para vender no tráfego frio, quebrando objeções no automático.",
    icon: "✍️",
    className: "md:col-span-4 lg:col-span-4"
  },
  {
    title: "LTV Optimization",
    tag: "Profitable",
    description: "Máximo de lucro por lead com esteiras inteligentes de recompra.",
    icon: "💎",
    className: "md:col-span-4 lg:col-span-4"
  },
  {
    title: "Sistemas de Recuperação",
    tag: "Recuperação IA",
    description: "WhatsApp e E-mail rodando automações que recuperam até 40% das vendas abandonadas sem intervenção humana.",
    icon: "🔄",
    className: "md:col-span-8 lg:col-span-8"
  }
];

const OperationalCore: React.FC = () => {
  return (
    <div className="py-20">
      <div className="text-center mb-16 md:mb-24">
        <span className="text-blue-500 font-black uppercase tracking-[0.4em] text-[10px] mb-4 block">Operação High-End</span>
        <h2 className="text-4xl md:text-7xl font-black mb-6 text-white uppercase tracking-tighter">Vendas no Automático</h2>
        <p className="text-slate-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
          Substituímos o caos dos lançamentos por um <span className="text-blue-400 font-bold italic">sistema de engenharia</span> que gera vendas constantes e lucro previsível.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {coreServices.map((service, index) => (
          <div 
            key={index} 
            className={`${service.className} p-10 rounded-[48px] glass-card group relative overflow-hidden flex flex-col justify-between min-h-[320px]`}
          >
            <div className="absolute -right-8 -top-8 text-[120px] opacity-5 group-hover:opacity-10 transition-opacity rotate-12 group-hover:rotate-0 duration-700">
              {service.icon}
            </div>
            
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-8 rounded-xl glass flex items-center justify-center text-lg">{service.icon}</span>
                <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-[10px] font-black uppercase tracking-widest border border-blue-500/20">
                  {service.tag}
                </span>
              </div>
              <h3 className="text-3xl md:text-4xl font-black mb-4 text-white tracking-tighter leading-none italic">{service.title}</h3>
              <p className="text-slate-400 text-base leading-relaxed max-w-sm">
                {service.description}
              </p>
            </div>

            <div className="mt-8 flex items-center gap-2 text-blue-500 opacity-60 group-hover:opacity-100 transition-all">
              <span className="text-[10px] font-black uppercase tracking-widest underline decoration-2 underline-offset-4">Ver Tecnologia</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OperationalCore;
