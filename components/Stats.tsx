
import React from 'react';
import { BarChart, Bar, ResponsiveContainer, XAxis, Tooltip } from 'recharts';

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
    <div className="grid lg:grid-cols-12 gap-12 items-center py-20">
      <div className="lg:col-span-5 space-y-10">
        <div className="space-y-4">
          <span className="text-blue-500 font-black uppercase tracking-[0.4em] text-[10px]">Financial Intelligence</span>
          <h2 className="text-5xl md:text-7xl font-black leading-[0.9] tracking-tighter text-white">Lucro Real, <br />Escala Técnica.</h2>
        </div>
        
        <p className="text-slate-400 text-lg leading-relaxed font-medium">Enquanto o mercado incha operações com custos inúteis, a LCAI limpa sua infraestrutura para focar em margem de lucro líquida.</p>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="p-8 rounded-[32px] glass-bright border-white/5 hover:border-blue-500/30 transition-all group">
            <div className="text-4xl font-black text-blue-500 mb-2 group-hover:scale-110 transition-transform">R$ 0,004</div>
            <div className="text-[10px] text-slate-500 font-black uppercase tracking-widest">Custo por E-mail</div>
          </div>
          <div className="p-8 rounded-[32px] glass-bright border-white/5 hover:border-blue-500/30 transition-all group">
            <div className="text-4xl font-black text-indigo-500 mb-2 group-hover:scale-110 transition-transform">+25%</div>
            <div className="text-[10px] text-slate-500 font-black uppercase tracking-widest">Taxa de Recompra</div>
          </div>
        </div>
      </div>
      
      <div className="lg:col-span-7 glass p-10 rounded-[48px] border-white/5 relative overflow-hidden group h-[500px]">
        <div className="absolute inset-0 bg-blue-600/5 blur-[100px] -z-10 group-hover:bg-blue-600/10 transition-all"></div>
        <div className="flex justify-between items-center mb-12">
          <div>
            <h3 className="text-2xl font-black text-white tracking-tighter">Performance de Lançamento</h3>
            <p className="text-slate-500 text-sm">Dashboard de faturamento líquido pós-otimização</p>
          </div>
          <div className="flex gap-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.6)]"></span>
              <span className="text-[10px] uppercase font-black text-slate-400 tracking-widest">Revenue</span>
            </div>
          </div>
        </div>
        
        <div className="h-[280px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <Tooltip 
                cursor={{fill: 'rgba(255,255,255,0.05)'}}
                contentStyle={{backgroundColor: '#0f172a', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px'}}
              />
              <XAxis 
                dataKey="name" 
                stroke="#475569" 
                fontSize={11}
                tickLine={false}
                axisLine={false}
                dy={15}
              />
              <Bar 
                dataKey="lucro" 
                fill="#3b82f6" 
                radius={[12, 12, 0, 0]} 
                barSize={50}
                animationDuration={2500}
                className="hover:fill-blue-400 transition-colors"
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
        
        <div className="mt-8 pt-8 border-t border-white/5 flex justify-between items-center">
          <p className="text-[10px] text-slate-500 uppercase tracking-widest font-black italic">Simulação baseada em dados reais de clientes LCAI</p>
          <span className="text-blue-500 font-black text-xl">🚀 Scale up</span>
        </div>
      </div>
    </div>
  );
};

export default Stats;
