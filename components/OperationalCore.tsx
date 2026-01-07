
import React from 'react';

const coreServices = [
  {
    title: "Execução Hands-On",
    tag: "A gente faz por você",
    description: "Para o expert que não quer (e não deve) lidar com tags, checkouts ou APIs. Nós assumimos 100% da infraestrutura tecnológica.",
    icon: "🏗️",
    className: "md:col-span-8"
  },
  {
    title: "Vendas no Sono",
    tag: "Perpétuo Real",
    description: "Sistemas de tráfego frio e copy persuasiva que convertem alunos enquanto você descansa.",
    icon: "🌙",
    className: "md:col-span-4"
  },
  {
    title: "Inteligência de LTV",
    tag: "Esteira de Lucro",
    description: "Estratégia para vender mais de uma vez para o mesmo aluno, maximizando o valor de cada lead.",
    icon: "♻️",
    className: "md:col-span-4"
  },
  {
    title: "Recuperação Ativa",
    tag: "Engenharia de Caixa",
    description: "Automações que resgatam carrinhos e boletos em tempo real, garantindo que nenhum dinheiro fique na mesa.",
    icon: "💰",
    className: "md:col-span-8"
  }
];

const OperationalCore: React.FC = () => {
  return (
    <div className="py-20">
      <div className="text-center mb-24">
        <span className="text-blue-500 font-black uppercase tracking-[0.4em] text-[10px] mb-4 block">A Solução Definitiva</span>
        <h2 className="text-4xl md:text-7xl font-black mb-8 text-white uppercase tracking-tighter">Foque no seu Domínio, <br /><span className="text-blue-500 italic">nós cuidamos do Império.</span></h2>
        <p className="text-slate-400 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
          O maior gargalo de um expert é a execução técnica. A LCAI atua como seu <span className="text-white font-bold">CTO + Diretor de Operações</span>, instalando uma máquina de vendas automática no seu negócio.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {coreServices.map((service, index) => (
          <div 
            key={index} 
            className={`${service.className} p-10 rounded-[48px] glass-card group relative overflow-hidden flex flex-col justify-between min-h-[300px]`}
          >
            <div className="absolute -right-10 -top-10 text-[140px] opacity-5 group-hover:opacity-10 transition-opacity rotate-12 group-hover:rotate-0 duration-700">
              {service.icon}
            </div>
            
            <div>
              <div className="flex items-center gap-4 mb-8">
                <span className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-2xl border border-blue-500/20">{service.icon}</span>
                <span className="px-3 py-1 rounded-full bg-slate-800 text-blue-400 text-[9px] font-black uppercase tracking-widest border border-white/5">
                  {service.tag}
                </span>
              </div>
              <h3 className="text-3xl md:text-4xl font-black mb-4 text-white tracking-tighter italic leading-none">{service.title}</h3>
              <p className="text-slate-400 text-base leading-relaxed max-w-sm">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OperationalCore;
