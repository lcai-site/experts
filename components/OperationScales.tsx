
import React from 'react';
import { OperationalScale } from '../types.ts';

const scales: OperationalScale[] = [
  {
    type: 'Low Ticket',
    title: 'Máquina de Aquisição',
    description: 'Produtos de entrada com checkout ultra-veloz e sistemas de recuperação instantânea (WhatsApp + E-mail).',
    focus: ['Checkout 1-click', 'Recuperação de Pix Automática', 'Upsell Cross-Platform'],
    metrics: 'Volume Infinito'
  },
  {
    type: 'High Ticket',
    title: 'Elite & High-Touch',
    description: 'Mentorias de alto valor com funis de aplicação, CRM integrado e acompanhamento de vendas humano/IA.',
    focus: ['Funil de Qualificação IA', 'Agendamento Automático', 'Gestão de Close de Vendas'],
    metrics: 'Ticket R$ 10k+'
  }
];

const OperationScales: React.FC = () => {
  return (
    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
      {scales.map((scale, i) => (
        <div key={i} className="group relative p-8 rounded-3xl glass hover:border-blue-500/50 transition-all flex flex-col h-full">
          <div className="absolute top-8 right-8 text-blue-500/20 group-hover:text-blue-500/40 transition-colors">
            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
          </div>
          <span className="inline-block px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold mb-4 w-fit">
            {scale.type}
          </span>
          <h3 className="text-2xl font-bold mb-4">{scale.title}</h3>
          <p className="text-slate-400 mb-6 text-sm leading-relaxed flex-grow">
            {scale.description}
          </p>
          <ul className="space-y-3">
            {scale.focus.map((item, j) => (
              <li key={j} className="flex items-center gap-2 text-sm text-slate-300">
                <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default OperationScales;
