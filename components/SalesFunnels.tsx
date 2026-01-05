
import React from 'react';

const steps = [
  {
    title: "Aquisição Perpétua",
    desc: "Tráfego direto para Low Ticket focado em converter desconhecidos em clientes instantaneamente.",
    icon: "⚡"
  },
  {
    title: "Nutrição Invisível",
    desc: "Sequências de e-mail e WhatsApp que educam e geram desejo para o Middle Ticket sem você digitar uma palavra.",
    icon: "🧠"
  },
  {
    title: "Ascensão de Ticket",
    desc: "Sistemas de Upsell e Cross-sell que aumentam o faturamento médio de cada lead em até 300%.",
    icon: "🚀"
  },
  {
    title: "Fechamento High",
    desc: "Qualificação de leads premium para mentorias de alto valor com mínima resistência de venda.",
    icon: "💎"
  }
];

const SalesFunnels: React.FC = () => {
  return (
    <div className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-blue-500 font-black uppercase tracking-[0.4em] text-[10px] mb-4 block">Processo Proprietário</span>
          <h2 className="text-4xl md:text-7xl font-black mb-6 text-white uppercase tracking-tighter italic leading-none">A Esteira de Vendas</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto font-medium">
            Um ecossistema fechado onde o seu lead nunca para de receber ofertas, transformando o seu conhecimento em um ativo gerador de caixa.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-4">
          {steps.map((step, i) => (
            <div key={i} className="p-8 rounded-[40px] glass-card border-white/5 group">
              <div className="w-14 h-14 rounded-2xl bg-blue-500/5 flex items-center justify-center text-3xl mb-8 group-hover:scale-110 transition-transform">{step.icon}</div>
              <h3 className="text-xl font-black text-white mb-4 uppercase tracking-tighter italic">{step.title}</h3>
              <p className="text-slate-400 text-xs leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SalesFunnels;
