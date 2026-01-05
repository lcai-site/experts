
import React from 'react';

const ExpertSection: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-10 md:gap-16 items-center">
      <div className="flex-1 space-y-6 md:space-y-8 order-2 lg:order-1">
        <h2 className="text-3xl md:text-5xl font-black text-white leading-tight uppercase">
          <span className="text-blue-500">Ricardo Borges</span>
        </h2>
        <p className="text-slate-400 text-base md:text-lg leading-relaxed font-medium">
          Nossa parceria com o Expert <strong>Ricardo Borges</strong> prova que o conhecimento sólido do offline só precisa da estrutura certa para dominar o digital. Tiramos o projeto do absoluto zero, construindo os processos necessários para uma operação pronta para escalar com segurança.
        </p>
        
        <div className="space-y-4 md:space-y-6">
          <div className="flex items-start gap-3 md:gap-4 group">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center flex-shrink-0 group-hover:border-blue-500/50 transition-colors">
              <span className="text-lg md:text-xl">🏛️</span>
            </div>
            <div>
              <h4 className="font-bold text-white text-base md:text-lg">Fundação Estratégica</h4>
              <p className="text-xs md:text-sm text-slate-500 leading-relaxed">Estruturação de processos e funis para quem está começando a transição para o digital.</p>
            </div>
          </div>
          <div className="flex items-start gap-3 md:gap-4 group">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center flex-shrink-0 group-hover:border-blue-500/50 transition-colors">
              <span className="text-lg md:text-xl">🚀</span>
            </div>
            <div>
              <h4 className="font-bold text-white text-base md:text-lg">Viabilidade de Escala</h4>
              <p className="text-xs md:text-sm text-slate-500 leading-relaxed">Setup inicial focado em validação rápida e crescimento sustentável.</p>
            </div>
          </div>
        </div>

        <a 
          href="https://wa.me/5519999611441" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-full sm:w-auto bg-white text-slate-950 px-8 md:px-10 py-4 md:py-5 rounded-2xl font-black hover:bg-blue-600 hover:text-white transition-all shadow-xl shadow-white/5 inline-block text-center uppercase tracking-widest text-[10px] md:text-xs"
        >
          QUERO DOMINAR O DIGITAL
        </a>
      </div>

      <div className="flex-1 relative w-full order-1 lg:order-2">
        <div className="absolute inset-0 bg-blue-600/20 blur-[80px] md:blur-[100px] rounded-full"></div>
        <div className="relative glass p-1.5 md:p-2 rounded-[32px] md:rounded-[40px] transform hover:scale-[1.01] transition-all duration-700 shadow-2xl overflow-hidden">
          <img 
            src="https://midias.lcai.com.br/images/2025/12/23/foto-45-1.jpg" 
            alt="Ricardo Borges Expert" 
            className="rounded-[26px] md:rounded-[32px] w-full h-[500px] md:h-[600px] object-cover object-top"
            onError={(e) => {
               const target = e.target as HTMLImageElement;
               target.src = "https://picsum.photos/seed/expert/800/1000";
            }}
          />
          {/* Legend container optimized for mobile visibility */}
          <div className="absolute bottom-3 md:bottom-10 left-3 md:left-6 right-3 md:right-6 glass p-3 md:p-6 rounded-2xl md:rounded-3xl border-white/10 backdrop-blur-2xl animate-fadeIn">
            <p className="text-[10px] md:text-sm font-semibold mb-1.5 md:mb-3 italic text-white leading-tight md:leading-relaxed">
              "Eu tinha o conhecimento, mas não sabia como transformá-lo em um negócio digital. A equipe trouxe a estrutura que eu nem sabia que precisava. O céu é o limite!"
            </p>
            <div className="flex items-center gap-2">
              <span className="h-px w-4 md:w-8 bg-blue-500"></span>
              <p className="text-[8px] md:text-xs font-black text-blue-400 uppercase tracking-widest">Ricardo Borges - Mentor de carreiras</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertSection;
