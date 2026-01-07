
import React from 'react';
import { BarChart, Bar, ResponsiveContainer, XAxis, Tooltip, Cell } from 'recharts';

const data = [
  { name: 'S1', lucro: 120 }, { name: 'S2', lucro: 140 }, { name: 'S3', lucro: 210 },
  { name: 'S4', lucro: 280 }, { name: 'S5', lucro: 450 }, { name: 'S6', lucro: 620 },
  { name: 'S7', lucro: 810 }, { name: 'S8', lucro: 980 },
];

const Stats: React.FC = () => {
  return (
    <div className="grid lg:grid-cols-12 gap-20 items-center py-24">
      <div className="lg:col-span-5 space-y-12">
        <div className="space-y-4">
          <span className="text-blue-500 font-black uppercase tracking-[0.4em] text-[10px]">Financial Predictability</span>
          <h2 className="text-5xl md:text-7xl font-black leading-[0.9] tracking-tighter text-white uppercase italic">
            Lucro <br />Sem Sobressaltos.
          </h2>
        </div>
        
        <p className="text-slate-400 text-xl leading-relaxed font-medium">
          Diga adeus ao "mês do lançamento" seguido de meses de seca. Nossa <strong className="text-white">Esteira de Perpétuo</strong> traz vendas diárias com margens que permitem você reinvestir na sua marca pessoal sem medo.
        </p>
        
        <div className="grid grid-cols-2 gap-6">
          <div className="p-10 rounded-[48px] glass border-white/5 group hover:border-blue-500/20 transition-all">
            <div className="text-4xl font-black text-white mb-3 group-hover:text-blue-500 transition-colors tracking-tighter">100%</div>
            <div className="text-[10px] text-slate-500 font-black uppercase tracking-widest">White-Glove Service</div>
          </div>
          <div className="p-10 rounded-[48px] glass border-white/5 group hover:border-blue-500/20 transition-all">
            <div className="text-4xl font-black text-white mb-3 group-hover:text-blue-500 transition-colors tracking-tighter">7.2x</div>
            <div className="text-[10px] text-slate-500 font-black uppercase tracking-widest">ROI Médio em Perpétuo</div>
          </div>
        </div>
      </div>
      
      <div className="lg:col-span-7 glass p-16 rounded-[64px] border-white/5 relative overflow-hidden h-[600px] flex flex-col justify-between shadow-4xl">
        <div className="absolute inset-0 bg-blue-500/5 blur-[120px] -z-10"></div>
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-3xl font-black text-white tracking-tighter uppercase italic">Escala de Cashflow</h3>
            <p className="text-slate-500 text-base mt-2">Crescimento real de faturamento semanal em sistemas perpétuos</p>
          </div>
          <div className="px-5 py-2.5 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-widest">Verified Data</div>
        </div>
        
        <div className="h-[320px] mt-12">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <Tooltip 
                cursor={{fill: 'rgba(255,255,255,0.02)'}}
                contentStyle={{backgroundColor: '#0f172a', border: 'none', borderRadius: '24px', boxShadow: '0 25px 50px rgba(0,0,0,0.6)'}}
              />
              <XAxis dataKey="name" hide />
              <Bar dataKey="lucro" radius={[14, 14, 14, 14]} barSize={45}>
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={index === data.length - 1 ? '#3b82f6' : '#1e293b'} className="transition-all duration-700 hover:opacity-80" />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
        
        <div className="flex justify-between items-center pt-10 border-t border-white/5 text-[10px] text-slate-600 font-black uppercase tracking-[0.4em]">
          <span>Mês 01: Setup & Validação</span>
          <span className="text-blue-500">Mês 06: Escala Automática</span>
        </div>
      </div>
    </div>
  );
};

export default Stats;
