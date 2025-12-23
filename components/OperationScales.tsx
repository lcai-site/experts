
import React from 'react';
import { OperationalScale } from '../types';

const scales: OperationalScale[] = [
  {
    type: 'Low Ticket',
    title: 'Escala e Volume',
    description: 'Produtos de entrada (R$ 9 a R$ 97) focados em aquisição agressiva de leads e liquidez imediata.',
    focus: ['Infraestrutura de Checkout Express', 'Order Bump Strategy', 'Upsell Automáticos'],
    metrics: 'ROAS 3.0+ médio'
  },
  {
    type: 'High Ticket',
    title: 'Autoridade e Valor',
    description: 'Mentorias e Masterminds (R$ 5k a R$ 50k) com funis de aplicação e vendas consultivas.',
    focus: ['Sistemas de Aplicação VSL', 'Gestão de CRM Comercial', 'Onboarding Premium'],
    metrics: 'Ticket Médio R$ 12k'
  },
  {
    type: 'Continuity',
    title: 'Recorrência e LTV',
    description: 'Comunidades e Assinaturas focadas em Lifetime Value e retenção de longo prazo.',
    focus: ['Área de Membros Customizada', 'Churn Management', 'Engajamento Automatizado'],
    metrics: 'Retenção +12 meses'
  }
];

const OperationScales: React.FC = () => {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {scales.map((scale, i) => (
        <div key={i} className="group relative p-8 rounded-3xl glass hover:border-blue-500/50 transition-all">
          <div className="absolute top-8 right-8 text-blue-500/20 group-hover:text-blue-500/40 transition-colors">
            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
          </div>
          <span className="inline-block px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold mb-4">
            {scale.type}
          </span>
          <h3 className="text-2xl font-bold mb-4">{scale.title}</h3>
          <p className="text-slate-400 mb-6 text-sm leading-relaxed">
            {scale.description}
          </p>
          <ul className="space-y-3 mb-8">
            {scale.focus.map((item, j) => (
              <li key={j} className="flex items-center gap-2 text-sm text-slate-300">
                <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
          <div className="pt-6 border-t border-slate-800">
            <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">Benchmark de Sucesso</div>
            <div className="text-lg font-bold text-blue-400">{scale.metrics}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OperationScales;
