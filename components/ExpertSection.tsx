
import React from 'react';

const ExpertSection: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row gap-16 items-center">
      <div className="flex-1 space-y-8">
        <h2 className="text-4xl md:text-5xl font-black">Cases de <span className="text-blue-500">Sucesso LCAI</span></h2>
        <p className="text-slate-400 text-lg leading-relaxed">
          Nossa primeira grande operação sob medida foi com o Expert <strong>Ricardo Borges</strong>. Implementamos toda a infraestrutura de vendas dele, transformando um canal de conteúdo em uma máquina de lucro recorrente.
        </p>
        
        <div className="space-y-4">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center flex-shrink-0">
              🚀
            </div>
            <div>
              <h4 className="font-bold">Migração de Plataforma</h4>
              <p className="text-sm text-slate-500">Estruturamos toda a base tecnológica para suportar picos de 10k acessos simultâneos.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center flex-shrink-0">
              🛠️
            </div>
            <div>
              <h4 className="font-bold">Desenvolvimento de Produto</h4>
              <p className="text-sm text-slate-500">Transformamos a mentoria offline em um produto digital high-ticket escalável.</p>
            </div>
          </div>
        </div>

        <button className="bg-white text-slate-950 px-8 py-4 rounded-2xl font-bold hover:bg-blue-500 hover:text-white transition-all">
          Quero ser o próximo Case
        </button>
      </div>

      <div className="flex-1 relative">
        <div className="absolute inset-0 bg-blue-500/20 blur-[60px] rounded-full"></div>
        <div className="relative glass p-4 rounded-[40px] transform hover:rotate-2 transition-transform duration-500">
          <img 
            src="https://picsum.photos/seed/expert/600/800" 
            alt="Ricardo Borges Expert" 
            className="rounded-[32px] w-full h-[500px] object-cover"
          />
          <div className="absolute bottom-10 left-10 glass p-6 rounded-2xl border-white/10 max-w-[240px]">
            <p className="text-sm font-medium mb-2 italic">"A LCAI não é uma agência. É o meu departamento de tecnologia e inteligência operacional."</p>
            <p className="text-xs font-bold text-blue-400 uppercase tracking-tighter">— Ricardo Borges</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertSection;
