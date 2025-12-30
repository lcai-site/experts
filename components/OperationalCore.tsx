
import React from 'react';

const coreServices = [
  {
    title: "Desenvolvimento de Produtos",
    tag: "Product Ops",
    description: "Estruturamos seu conhecimento em produtos digitais valiosos, da grade curricular à experiência do aluno em plataformas gamificadas.",
    icon: "💎"
  },
  {
    title: "Copywriting de Elite",
    tag: "Conversão",
    description: "Vendas através de palavras. Criamos VSLs, páginas de alta conversão e anúncios que tocam na dor e desejo do seu público.",
    icon: "✍️"
  },
  {
    title: "Engenharia de Esteira",
    tag: "LTV Focus",
    description: "Construímos a jornada completa: do produto de entrada (order bump) até o High Ticket, maximizando o lucro por cliente.",
    icon: "🪜"
  },
  {
    title: "E-mail Marketing",
    tag: "Decisão & Custo",
    description: "Arquitetura otimizada que reduz seus custos fixos em até 70%, gerando informações de qualidade para sua tomada de decisão e escala.",
    icon: "📧"
  },
  {
    title: "Recuperação Ativa",
    tag: "Performance",
    description: "Sistemas inteligentes de recuperação de vendas abandonadas via WhatsApp e E-mail, rodando 24/7 para você.",
    icon: "💸"
  }
];

const OperationalCore: React.FC = () => {
  return (
    <div>
      <div className="text-center mb-10 md:mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white uppercase tracking-tight">Engenharia de Vendas</h2>
        <p className="text-slate-400 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
          Unimos estratégia de produto, copy persuasiva e inteligência operacional para criar operações de <span className="text-blue-400 font-bold">Alta Performance e Baixo Custo.</span>
        </p>
        
        <div className="mt-6 md:mt-8 p-5 md:p-6 glass rounded-2xl border-blue-500/20 max-w-2xl mx-auto">
          <p className="text-xs md:text-base text-slate-300 font-medium italic">
            "Diferente de agências que empilham softwares caros, nossa estrutura é focada em eficiência extrema. <span className="text-green-400">A economia gerada paga integralmente o nosso serviço.</span>"
          </p>
        </div>
      </div>
      
      <div className="flex flex-wrap justify-center gap-4 md:gap-6">
        {coreServices.map((service, index) => (
          <div 
            key={index} 
            className="p-6 md:p-8 rounded-3xl glass border-white/5 hover:border-blue-500/30 transition-all group relative overflow-hidden w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] min-h-[280px] md:min-h-[320px] flex flex-col"
          >
            <div className="absolute -right-4 -top-4 text-5xl md:text-6xl opacity-10 group-hover:opacity-20 transition-opacity">
              {service.icon}
            </div>
            
            <div className="mb-4 md:mb-6">
              <div className="text-3xl md:text-4xl mb-3 md:mb-4 group-hover:scale-110 transition-transform inline-block">
                {service.icon}
              </div>
              <div className="block">
                <span className="inline-block px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 text-[9px] md:text-[10px] font-bold uppercase mb-2 md:mb-4 tracking-wider border border-blue-500/20">
                  {service.tag}
                </span>
              </div>
            </div>

            <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-white tracking-tight">{service.title}</h3>
            <p className="text-slate-400 text-xs md:text-sm leading-relaxed flex-grow">
              {service.description}
            </p>

            <div className="mt-4 md:mt-6 pt-4 md:pt-6 border-t border-white/5 opacity-0 group-hover:opacity-100 transition-opacity hidden md:block">
              <span className="text-[10px] text-blue-400 font-bold uppercase tracking-widest">Infraestrutura LCAI Ativada</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OperationalCore;
