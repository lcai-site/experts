
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
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Engenharia de Vendas Completa</h2>
        <p className="text-slate-400 text-lg max-w-3xl mx-auto leading-relaxed">
          Unimos estratégia de produto, copy persuasiva e inteligência operacional para criar operações de <span className="text-blue-400 font-bold">Alta Performance e Baixo Custo.</span>
        </p>
        
        <div className="mt-8 p-6 glass rounded-2xl border-blue-500/20 max-w-2xl mx-auto">
          <p className="text-sm md:text-base text-slate-300 font-medium italic">
            "Diferente de agências que empilham softwares caros, nossa estrutura é focada em eficiência extrema. <span className="text-green-400">A economia que geramos em custos fixos e ferramentas costuma pagar integralmente o nosso serviço</span>, transformando a LCAI em um investimento autossustentável para o expert."
          </p>
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
        {coreServices.map((service, index) => (
          <div 
            key={index} 
            className={`p-8 rounded-3xl glass border-white/5 hover:border-blue-500/30 transition-all group relative overflow-hidden ${index >= 3 ? 'lg:col-span-1.5 lg:max-w-md lg:mx-auto w-full' : ''}`}
          >
            <div className="absolute -right-4 -top-4 text-6xl opacity-10 group-hover:opacity-20 transition-opacity">
              {service.icon}
            </div>
            <div className="text-4xl mb-6 group-hover:scale-110 transition-transform inline-block">
              {service.icon}
            </div>
            <div className="block">
              <span className="inline-block px-2 py-1 rounded bg-blue-500/10 text-blue-400 text-[10px] font-bold uppercase mb-4 tracking-wider">
                {service.tag}
              </span>
            </div>
            <h3 className="text-xl font-bold mb-4 text-white">{service.title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OperationalCore;
