
import React from 'react';

const funnelSteps = [
  {
    title: "Aquisição & Atração",
    description: "Construímos portas de entrada magnéticas. Iscas digitais de alto valor que segmentam o público certo desde o primeiro clique.",
    icon: "🎯",
    details: ["Landing Pages Ultra-Velozes", "Tracking de Conversão 360º", "Otimização de CPC"]
  },
  {
    title: "Nutrição & Relacionamento",
    description: "Onde o lucro mora. Criamos sequências de e-mail e WhatsApp que educam o lead e quebram objeções antes mesmo da oferta.",
    icon: "🤝",
    details: ["E-mails que geram desejo", "Automação de WhatsApp IA", "Lead Scoring dinâmico"]
  },
  {
    title: "Conversão & Venda",
    description: "Engenharia de oferta irresistível. VSLs de alto impacto e checkouts otimizados para converter tráfego frio em compradores.",
    icon: "🔥",
    details: ["Copy de Resposta Direta", "One-Click Upsells", "Order Bumps Estratégicos"]
  },
  {
    title: "LTV & Fidelização",
    description: "Transformamos compradores em fãs. Estruturas de pós-venda que estimulam a recompra e maximizam o lucro por cliente.",
    icon: "💎",
    details: ["Onboarding de Alunos", "Funis de Back-end", "Programas de Recorrência"]
  }
];

const SalesFunnels: React.FC = () => {
  return (
    <div className="py-16 md:py-24 px-4 bg-slate-900/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <span className="text-blue-500 font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">Metodologia LCAI</span>
          <h2 className="text-3xl md:text-5xl font-black mb-6 text-white uppercase tracking-tight leading-tight">
            Funis de Relacionamento <br className="hidden md:block" /> & Vendas
          </h2>
          <p className="text-slate-400 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            Não acreditamos em cliques perdidos. Nossa engenharia foca em criar <span className="text-white font-bold">ativos de longo prazo</span>, onde cada lead é nutrido por um sistema inteligente de vendas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {funnelSteps.map((step, index) => (
            <div key={index} className="glass p-6 md:p-8 rounded-[32px] border-white/5 hover:border-blue-500/30 transition-all group flex flex-col h-full">
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-500">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors">{step.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-grow">
                {step.description}
              </p>
              <ul className="space-y-2 border-t border-white/5 pt-6">
                {step.details.map((detail, dIndex) => (
                  <li key={dIndex} className="text-[11px] text-slate-500 uppercase font-bold tracking-wider flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500/50"></span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 rounded-[40px] glass border-blue-500/20 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 blur-[80px] -z-10"></div>
          <h3 className="text-xl md:text-2xl font-bold mb-4 text-white">Pronto para automatizar seu faturamento?</h3>
          <p className="text-slate-400 text-sm md:text-base mb-8 max-w-2xl mx-auto italic">
            "A diferença entre um expert que cansa e um expert que lucra é o sistema que roda enquanto ele dorme. Nós construímos esse sistema."
          </p>
          <a 
            href="https://wa.me/5519999611441" 
            className="inline-block bg-blue-600 text-white px-10 py-4 rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:bg-blue-500 transition-all hover:scale-105 shadow-xl shadow-blue-500/20"
          >
            Configurar meu Funil agora
          </a>
        </div>
      </div>
    </div>
  );
};

export default SalesFunnels;
