
import React from 'react';
import { BarChart, Bar, ResponsiveContainer, XAxis } from 'recharts';

const data = [
  { name: 'Jan', lucro: 120 },
  { name: 'Fev', lucro: 180 },
  { name: 'Mar', lucro: 320 },
  { name: 'Abr', lucro: 450 },
  { name: 'Mai', lucro: 680 },
  { name: 'Jun', lucro: 890 },
];

const Stats: React.FC = () => {
  return (
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div className="space-y-8">
        <h2 className="text-4xl font-bold leading-tight">Menos gasto operacional, informações de qualidade para lucrar mais.</h2>
        <p className="text-slate-400">Enquanto outras operações incham os custos com softwares desnecessários, a LCAI foca em ferramentas de alto ROI e dados precisos para sua escala.</p>
        <div className="grid grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800">
            <div className="text-4xl font-black text-blue-500 mb-1">R$ 0,004</div>
            <div className="text-sm text-slate-400 font-medium">Custo médio por E-mail</div>
          </div>
          <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800">
            <div className="text-4xl font-black text-green-500 mb-1">+25%</div>
            <div className="text-sm text-slate-400 font-medium">Recuperação de Carrinho</div>
          </div>
          <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800">
            <div className="text-4xl font-black text-purple-500 mb-1">ROI</div>
            <div className="text-sm text-slate-400 font-medium">Foco em Decisão Baseada em Dados</div>
          </div>
          <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800">
            <div className="text-4xl font-black text-orange-500 mb-1">Scale</div>
            <div className="text-sm text-slate-400 font-medium">Gestão de Inteligência de Vendas</div>
          </div>
        </div>
      </div>
      
      <div className="glass p-8 rounded-3xl h-[450px]">
        <div className="flex justify-between items-center mb-8">
          <h3 className="text-lg font-bold">Crescimento Escalável</h3>
          <div className="flex gap-4 text-[10px] uppercase font-bold tracking-widest">
            <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-blue-500"></span> Lucro Mensal</span>
          </div>
        </div>
        <ResponsiveContainer width="100%" height="80%">
          <BarChart data={data}>
            <XAxis 
              dataKey="name" 
              stroke="#64748b" 
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <Bar 
              dataKey="lucro" 
              fill="#3b82f6" 
              radius={[8, 8, 0, 0]} 
              barSize={40}
              animationDuration={2000}
            />
          </BarChart>
        </ResponsiveContainer>
        <p className="text-xs text-slate-500 mt-4 text-center italic">Escala de lucro real após otimização de ferramentas e processos LCAI.</p>
      </div>
    </div>
  );
};

export default Stats;
