
import React from 'react';

const ExpertSection: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-12 md:gap-20 items-center">
      <div className="flex-1 space-y-8 order-2 lg:order-1">
        <div className="space-y-2">
          <span className="text-blue-500 font-black uppercase tracking-[0.4em] text-[10px] block">Partner Showcase</span>
          <h2 className="text-4xl md:text-6xl font-black text-white leading-none uppercase tracking-tighter italic">
            Ricardo Borges
          </h2>
        </div>
        
        <p className="text-slate-400 text-lg leading-relaxed font-medium">
          Nossa parceria com o Expert <strong>Ricardo Borges</strong> prova que o conhecimento sólido do offline só precisa da estrutura certa para dominar o digital. Tiramos o projeto do absoluto zero, construindo os processos necessários para uma operação pronta para escalar com segurança no automático.
        </p>
        
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="glass p-6 rounded-3xl border-white/5 group hover:border-blue-500/30 transition-all">
            <h4 className="font-black text-white text-lg mb-2 uppercase tracking-tighter">Fundação Estratégica</h4>
            <p className="text-xs text-slate-500 leading-relaxed">Estruturação de processos e funis para quem está começando a transição para o digital.</p>
          </div>
          <div className="glass p-6 rounded-3xl border-white/5 group hover:border-blue-500/30 transition-all">
            <h4 className="font-black text-white text-lg mb-2 uppercase tracking-tighter">Viabilidade de Escala</h4>
            <p className="text-xs text-slate-500 leading-relaxed">Setup inicial focado em validação rápida e crescimento sustentável.</p>
          </div>
        </div>

        <a 
          href="https://wa.me/5519999611441" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-full sm:w-auto bg-white text-slate-950 px-10 py-5 rounded-2xl font-black hover:bg-blue-600 hover:text-white transition-all shadow-2xl inline-block text-center uppercase tracking-widest text-xs"
        >
          QUERO DOMINAR O DIGITAL
        </a>
      </div>

      <div className="flex-1 relative w-full order-1 lg:order-2">
        <div className="absolute inset-0 bg-blue-500/20 blur-[120px] rounded-full"></div>
        <div className="relative glass p-2 rounded-[48px] transform hover:rotate-1 transition-all duration-700 shadow-2xl overflow-hidden">
          <img 
            src="https://midias.lcai.com.br/images/2025/12/23/foto-45-1.jpg" 
            alt="Ricardo Borges Expert" 
            className="rounded-[40px] w-full h-[550px] md:h-[650px] object-cover object-top"
            onError={(e) => {
               const target = e.target as HTMLImageElement;
               target.src = "https://picsum.photos/seed/expert/800/1000";
            }}
          />
          <div className="absolute bottom-4 left-4 right-4 glass p-5 md:p-8 rounded-[32px] border-white/10 backdrop-blur-3xl animate-fadeIn">
            <p className="text-[11px] md:text-[13px] font-semibold mb-4 italic text-white leading-relaxed">
              "Eu tinha o conhecimento, mas não sabia como transformá-lo em um negócio digital. A equipe trouxe a estrutura que eu nem sabia que precisava. Estamos no início, mas com a base que montamos, já vejo que o céu é o limite para o que vamos alcançar!"
            </p>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-blue-500"></span>
              <p className="text-[9px] md:text-xs font-black text-blue-400 uppercase tracking-widest">Ricardo Borges - Mentor de carreiras</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertSection;
