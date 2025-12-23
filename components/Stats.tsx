
import React from 'react';
import { BarChart, Bar, ResponsiveContainer, Cell, XAxis, Tooltip } from 'recharts';

const data = [
  { name: 'Jan', val: 12 },
  { name: 'Fev', val: 18 },
  { name: 'Mar', val: 32 },
  { name: 'Abr', val: 45 },
  { name: 'Mai', val: 68 },
  { name: 'Jun', val: 89 },
];

const Stats: React.FC = () => {
  return (
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div className="space-y-8">
        <h2 className="text-4xl font-bold">Acelerando o faturamento operacional de nossos parceiros.</h2>
        <div className="grid grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800">
            <div className="text-4xl font-black text-blue-500 mb-1">R$ 50M+</div>
            <div className="text-sm text-slate-400">Gerenciados em Lançamentos</div>
          </div>
          <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800">
            <div className="text-4xl font-black text-purple-500 mb-1">98%</div>
            <div className="text-sm text-slate-400">Taxa de Conversão Operacional</div>
          </div>
          <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800">
            <div className="text-4xl font-black text-green-500 mb-1">15+</div>
            <div className="text-sm text-slate-400">Experts sob Gestão LCAI</div>
          </div>
          <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800">
            <div className="text-4xl font-black text-orange-500 mb-1">24/7</div>
            <div className="text-sm text-slate-400">Infraestrutura Ativa</div>
          </div>
        </div>
      </div>
      
      <div className="glass p-8 rounded-3xl h-[400px]">
        <h3 className="text-xl font-bold mb-6">Escala de Faturamento Médio (Operações LCAI)</h3>
        <ResponsiveContainer width="100%" height="80%">
          <BarChart data={data}>
            <XAxis dataKey="name" stroke="#64748b" />
            <Tooltip 
              contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b' }}
              itemStyle={{ color: '#60a5fa' }}
            />
            <Bar dataKey="val" radius={[6, 6, 0, 0]}>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={index > 3 ? '#3b82f6' : '#1e293b'} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
        <p className="text-xs text-slate-500 mt-4 text-center">Simulação baseada no crescimento médio de operações assumidas pela LCAI após 6 meses.</p>
      </div>
    </div>
  );
};

export default Stats;
