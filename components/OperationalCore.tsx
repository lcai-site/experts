
import React from 'react';

const coreServices = [
  {
    title: "Product Ops",
    tag: "High Scale",
    description: "Estruturamos seu conhecimento em produtos digitais valiosos, da grade curricular à experiência do aluno em plataformas gamificadas.",
    icon: "💎",
    className: "md:col-span-8 lg:col-span-8"
  },
  {
    title: "Elite Copy",
    tag: "Conversão",
    description: "Criamos VSLs e anúncios que tocam na dor e desejo do público.",
    icon: "✍️",
    className: "md:col-span-4 lg:col-span-4"
  },
  {
    title: "E-mail Marketing",
    tag: "LTV Focus",
    description: "Arquitetura otimizada que reduz custos fixos em até 70%.",
    icon: "📧",
    className: "md:col-span-4 lg:col-span-4"
  },
  {
    title: "Engenharia de Esteira",
    tag: "LTV Focus",
    description: "Construímos a jornada completa: do produto de entrada até o High Ticket, maximizando o lucro por cliente.",
    icon: "🪜",
    className: "md:col-span-8 lg:col-span-8"
  }
];

const OperationalCore: React.FC = () => {
  return (
    <div className="py-20">
      <div className="text-center mb-16 md:mb-24">
        <h2 className="text-4xl md:text-7xl font-black mb-6 text-white uppercase tracking-tighter">Engenharia de Vendas</h2>
        <p className="text-slate-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
          Unimos estratégia de produto e inteligência operacional para criar operações de <span className="text-blue-400 font-bold">Alta Performance e Baixo Custo.</span>
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {coreServices.map((service, index) => (
          <div 
            key={index} 
            className={`${service.className} p-8 md:p-10 rounded-[40px] glass-bright border-white/5 hover:border-blue-500/40 transition-all group relative overflow-hidden flex flex-col justify-between min-h-[300px]`}
          >
            <div className="absolute -right-6 -top-6 text-8xl opacity-5 group-hover:opacity-10 transition-opacity rotate-12 group-hover:rotate-0 duration-700">
              {service.icon}
            </div>
            
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-[10px] font-black uppercase mb-6 tracking-widest border border-blue-500/20">
                {service.tag}
              </span>
              <h3 className="text-3xl md:text-4xl font-black mb-4 text-white tracking-tighter leading-none">{service.title}</h3>
              <p className="text-slate-400 text-base leading-relaxed max-w-md">
                {service.description}
              </p>
            </div>

            <div className="mt-8 flex items-center gap-2 text-blue-500 opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0">
              <span className="text-[10px] font-black uppercase tracking-widest">Saber mais</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </div>
          </div>
        ))}
        
        {/* Recupere Ativa Banner */}
        <div className="md:col-span-12 p-8 md:p-12 rounded-[40px] bg-gradient-to-r from-blue-600 to-indigo-700 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden group">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
          <div className="relative z-10 text-center md:text-left">
            <h3 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tighter italic">Recuperação Ativa 24/7</h3>
            <p className="text-blue-100 text-lg max-w-xl font-medium">Sistemas inteligentes de recuperação de vendas abandonadas via WhatsApp e E-mail, rodando enquanto você dorme.</p>
          </div>
          <div className="relative z-10">
            <a href="https://wa.me/5519999611441" className="bg-white text-blue-600 px-10 py-5 rounded-2xl font-black uppercase tracking-widest hover:scale-105 transition-transform shadow-2xl inline-block">Ativar agora</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OperationalCore;
