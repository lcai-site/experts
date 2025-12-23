
import React from 'react';

const coreServices = [
  {
    title: "E-mail Marketing de Elite",
    tag: "Menor Custo",
    description: "Infraestrutura própria ou otimizada que reduz seus custos fixos em até 70% comparado a ActiveCampaign ou Mailchimp.",
    icon: "📧"
  },
  {
    title: "Recuperação de Vendas",
    tag: "Automatic",
    description: "Sistemas inteligentes de recuperação de carrinho, Pix e Boletos via WhatsApp e E-mail com comunicação personalizada.",
    icon: "💸"
  },
  {
    title: "Comunicação Ativa",
    tag: "Engajamento",
    description: "Gestão completa da comunicação com leads. Réguas de relacionamento automáticas que vendem sem esforço extra.",
    icon: "🗣️"
  },
  {
    title: "Gestão de Comunidades",
    tag: "LTV Focus",
    description: "Nós cuidamos da infraestrutura e moderação da sua área de membros e grupos, garantindo retenção e novas vendas.",
    icon: "🤝"
  }
];

const OperationalCore: React.FC = () => {
  return (
    <div>
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">O Coração da sua Operação</h2>
        <p className="text-slate-400 text-lg">Tecnologia de ponta focada no que importa: <span className="text-blue-400 font-bold">Lucro Líquido.</span></p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {coreServices.map((service, index) => (
          <div key={index} className="p-8 rounded-3xl glass border-white/5 hover:border-blue-500/30 transition-all group">
            <div className="text-4xl mb-6 group-hover:scale-110 transition-transform inline-block">
              {service.icon}
            </div>
            <div className="inline-block px-2 py-1 rounded bg-blue-500/10 text-blue-400 text-[10px] font-bold uppercase mb-4 tracking-wider">
              {service.tag}
            </div>
            <h3 className="text-xl font-bold mb-4">{service.title}</h3>
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
