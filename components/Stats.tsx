
import React from 'react';
import { BarChart, Bar, ResponsiveContainer, XAxis, Tooltip, Cell } from 'recharts';

const data = [
  { name: 'S1', lucro: 120 },
  { name: 'S2', lucro: 140 },
  { name: 'S3', lucro: 210 },
  { name: 'S4', lucro: 280 },
  { name: 'S5', lucro: 450 },
  { name: 'S6', lucro: 620 },
  { name: 'S7', lucro: 810 },
  { name: 'S8', lucro: 980 },
];

const Stats: React.FC = () => {
  return (
    <div className="grid lg:grid-cols-12 gap-16 items-center py-20">
      <div className="lg:col-span-5 space-y-10">
        <div className="space-y-4">
          <span className="text-blue-500 font-black uppercase tracking-[0.4em] text-[10px]">Perpetual Analytics</span>
          <h2 className="text-5xl md:text-7xl font-black leading-[0.9] tracking-tighter text-white uppercase italic">
            Lucro <br />Constante.
          </h2>
        </div>
        
        <p className="text-slate-400 text-lg leading-relaxed font-medium">
          Diferente dos lançamentos que são uma montanha-russa emocional, nossa <strong className="text-white">Engenharia de Perpétuo</strong> garante vendas diárias, permitindo que você foque no que importa: seu conteúdo.
        </p>
        
        <div className="grid grid-cols-2 gap-5">
          <div className="p-8 rounded-[40px] glass border-white/5 group">
            <div className="text-4xl font-black text-white mb-2 group-hover:text-blue-500 transition-colors">100%</div>
            <div className="text-[9px] text-slate-500 font-black uppercase tracking-widest">Automação Técnica</div>
          </div>
          <div className="p-8 rounded-[40px] glass border-white/5 group">
            <div className="text-4xl font-black text-white mb-2 group-hover:text-blue-500 transition-colors">6.5x</div>
            <div className="text-[9px] text-slate-500 font-black uppercase tracking-widest">ROI Médio em VSLs</div>
          </div>
        </div>
      </div>
      
      <div className="lg:col-span-7 glass p-12 rounded-[56px] border-white/5 relative overflow-hidden h-[550px] flex flex-col justify-between">
        <div className="absolute inset-0 bg-blue-500/5 blur-[120px] -z-10"></div>
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-2xl font-black text-white tracking-tighter uppercase italic">Escala de Faturamento</h3>
            <p className="text-slate-500 text-sm">Crescimento semanal pós-implementação da máquina</p>
          </div>
          <div className="px-4 py-2 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-widest">Real-Time Data</div>
        </div>
        
        <div className="h-[300px] mt-10">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <Tooltip 
                cursor={{fill: 'rgba(255,255,255,0.03)'}}
                contentStyle={{backgroundColor: '#0f172a', border: 'none', borderRadius: '16px', boxShadow: '0 20px 40px rgba(0,0,0,0.4)'}}
              />
              <XAxis dataKey="name" hide />
              <Bar dataKey="lucro" radius={[12, 12, 12, 12]} barSize={40}>
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={index === data.length - 1 ? '#3b82f6' : '#1e293b'} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
        
        <div className="flex justify-between items-center pt-8 border-t border-white/5 text-[9px] text-slate-500 font-black uppercase tracking-[0.3em]">
          <span>Semana 01 - Onboarding</span>
          <span className="text-blue-500">Semana 08 - Escala Máxima</span>
        </div>
      </div>
    </div>
  );
};

export default Stats;
