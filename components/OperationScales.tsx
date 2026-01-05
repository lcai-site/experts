
import React from 'react';

const scales = [
  {
    type: 'Low Ticket',
    title: 'A Porta de Entrada',
    description: 'Produtos de R$ 9 a R$ 97. O foco é aquisição em massa de leads qualificados com ROI 1:1 ou superior.',
    features: ['Checkouts de Alta Velocidade', 'Order Bumps Estratégicos', 'Recuperação Automática'],
    icon: "🎯",
    color: "blue"
  },
  {
    type: 'Middle Ticket',
    title: 'A Escala de Lucro',
    description: 'Cursos e treinamentos de R$ 297 a R$ 997. Onde a margem de lucro explode através de funis de e-mail e VSLs.',
    features: ['VSL de Alta Conversão', 'Automação de E-mail CRM', 'Upsell em 1-Clique'],
    icon: "📈",
    color: "indigo"
  },
  {
    type: 'High Ticket',
    title: 'A Elite do Legado',
    description: 'Mentorias e Masterminds de R$ 2k+. Funis de aplicação com qualificação por IA e fechamento direto.',
    features: ['Funil de Aplicação IA', 'CRM de Vendas Integrado', 'Gestão de Close High-End'],
    icon: "💎",
    color: "purple"
  }
];

const OperationScales: React.FC = () => {
  return (
    <div className="grid lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
      {scales.map((scale, i) => (
        <div key={i} className="group glass-card p-10 rounded-[40px] flex flex-col relative overflow-hidden">
          <div className={`absolute -right-4 -top-4 w-32 h-32 bg-${scale.color}-500/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity`}></div>
          
          <div className="text-4xl mb-8 group-hover:scale-110 transition-transform duration-500">{scale.icon}</div>
          
          <div className="flex-grow">
            <span className={`inline-block px-3 py-1 rounded-full bg-slate-800 text-blue-400 text-[10px] font-black mb-4 uppercase tracking-[0.2em] border border-white/5`}>
              {scale.type}
            </span>
            <h3 className="text-2xl font-black mb-4 text-white uppercase tracking-tighter italic">{scale.title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-8">
              {scale.description}
            </p>
          </div>

          <ul className="space-y-4 pt-8 border-t border-white/5">
            {scale.features.map((feature, j) => (
              <li key={j} className="flex items-center gap-3 text-xs font-bold text-slate-300">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_#3b82f6]"></div>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default OperationScales;
