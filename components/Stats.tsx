
import React from 'react';
import { BarChart, Bar, ResponsiveContainer, Cell, XAxis, Tooltip, YAxis } from 'recharts';

const data = [
  { name: 'Jan', custo: 80, lucro: 120 },
  { name: 'Fev', custo: 75, lucro: 180 },
  { name: 'Mar', custo: 65, lucro: 320 },
  { name: 'Abr', custo: 50, lucro: 450 },
  { name: 'Mai', custo: 45, lucro: 680 },
  { name: 'Jun', custo: 40, lucro: 890 },
];

const Stats: React.FC = () => {
  return (
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div className="space-y-8">
        <h2 className="text-4xl font-bold leading-tight">Menos gasto com infraestrutura, mais lucro no seu bolso.</h2>
        <p className="text-slate-400">Enquanto outras operações incham os custos com softwares caros, a LCAI foca em ferramentas de alta performance e baixo custo fixo.</p>
        <div className="grid grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800">
            <div className="text-4xl font-black text-blue-500 mb-1">R$ 0,001</div>
            <div className="text-sm text-slate-400">Custo médio por E-mail</div>
          </div>
          <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800">
            <div className="text-4xl font-black text-green-500 mb-1">+25%</div>
            <div className="text-sm text-slate-400">Recuperação de Carrinho</div>
          </div>
          <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800">
            <div className="text-4xl font-black text-purple-500 mb-1">100%</div>
            <div className="text-sm text-slate-400">Infraestrutura Própria</div>
          </div>
          <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800">
            <div className="text-4xl font-black text-orange-500 mb-1">0% Churn</div>
            <div className="text-sm text-slate-400">Gestão de Comunidade</div>
          </div>
        </div>
      </div>
      
      <div className="glass p-8 rounded-3xl h-[450px]">
        <div className="flex justify-between items-center mb-8">
          <h3 className="text-lg font-bold">Otimização Operacional (LCAI)</h3>
          <div className="flex gap-4 text-[10px] uppercase font-bold tracking-widest">
            <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-blue-500"></span> Lucro</span>
            <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-slate-700"></span> Custo Fixo</span>
          </div>
        </div>
        <ResponsiveContainer width="100%" height="80%">
          <BarChart data={data}>
            <XAxis dataKey="name" stroke="#64748b" />
            <Tooltip 
              contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b' }}
              itemStyle={{ color: '#60a5fa' }}
            />
            <Bar dataKey="lucro" stackId="a" fill="#3b82f6" radius={[4, 4, 0, 0]} />
            <Bar dataKey="custo" stackId="a" fill="#1e293b" radius={[0, 0, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
        <p className="text-xs text-slate-500 mt-4 text-center italic">Cálculo de margem real após otimização de infraestrutura LCAI.</p>
      </div>
    </div>
  );
};

export default Stats;
