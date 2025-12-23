
import React from 'react';

const ExpertSection: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row gap-16 items-center">
      <div className="flex-1 space-y-8">
        <h2 className="text-4xl md:text-5xl font-black text-white">Cases de <span className="text-blue-500">Sucesso LCAI</span></h2>
        <p className="text-slate-400 text-lg leading-relaxed">
          Nossa primeira grande operação sob medida foi com o Expert <strong>Ricardo Borges</strong>. Não apenas implementamos a tecnologia, mas fomos co-autores da <strong>esteira de produtos</strong> e da <strong>estratégia de copy</strong>, transformando sua expertise em um ecossistema lucrativo.
        </p>
        
        <div className="space-y-4">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center flex-shrink-0">
              ⚡
            </div>
            <div>
              <h4 className="font-bold text-white">Arquitetura de Esteira</h4>
              <p className="text-sm text-slate-500">Desenhamos a jornada do Low ao High Ticket, triplicando o LTV (valor por cliente).</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center flex-shrink-0">
              🖋️
            </div>
            <div>
              <h4 className="font-bold text-white">Copywriting Estratégico</h4>
              <p className="text-sm text-slate-500">Desenvolvemos todas as VSLs e páginas de vendas com foco total em conversão fria e escala.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center flex-shrink-0">
              🛠️
            </div>
            <div>
              <h4 className="font-bold text-white">Infraestrutura Low-Cost</h4>
              <p className="text-sm text-slate-500">Migramos toda a operação para sistemas próprios, economizando R$ 15k/mês em softwares.</p>
            </div>
          </div>
        </div>

        <button className="bg-white text-slate-950 px-8 py-4 rounded-2xl font-bold hover:bg-blue-500 hover:text-white transition-all shadow-lg shadow-white/5">
          Quero ser o próximo Case
        </button>
      </div>

      <div className="flex-1 relative">
        <div className="absolute inset-0 bg-blue-500/20 blur-[60px] rounded-full"></div>
        <div className="relative glass p-4 rounded-[40px] transform hover:rotate-2 transition-transform duration-500">
          <img 
            src="https://ricardoborges.com.br/wp-content/uploads/2023/11/DSC04172-1-scaled.jpg" 
            alt="Ricardo Borges Expert" 
            className="rounded-[32px] w-full h-[550px] object-cover"
            onError={(e) => {
               const target = e.target as HTMLImageElement;
               target.src = "https://picsum.photos/seed/expert/600/800";
            }}
          />
          <div className="absolute bottom-10 left-10 glass p-6 rounded-2xl border-white/10 max-w-[280px]">
            <p className="text-sm font-medium mb-2 italic text-white">"A LCAI redesenhou meus produtos e minha copy. Hoje tenho uma operação enxuta, lucrativa e automática."</p>
            <p className="text-xs font-bold text-blue-400 uppercase tracking-tighter">— Ricardo Borges</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertSection;
