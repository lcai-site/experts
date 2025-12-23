
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
  },
  {
    title: "Gestão de Comunidades",
    tag: "Retenção",
    description: "Moderação e suporte estratégico para áreas de membros e grupos, garantindo que o expert foque apenas em entregar conteúdo.",
    icon: "🤝"
  }
];

const OperationalCore: React.FC = () => {
  return (
    <div>
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Engenharia de Vendas Completa</h2>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          Unimos estratégia de produto, copy persuasiva e inteligência operacional para criar operações de <span className="text-blue-400 font-bold">Alta Performance e Baixo Custo.</span>
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {coreServices.map((service, index) => (
          <div key={index} className="p-8 rounded-3xl glass border-white/5 hover:border-blue-500/30 transition-all group relative overflow-hidden">
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
